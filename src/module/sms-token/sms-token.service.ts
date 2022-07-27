import { Injectable } from '@nestjs/common';
import * as CryptoJS from 'crypto-js';
import { VerifySmsTokenModel } from 'src/shared/model/verifySmsToken.model';

@Injectable()
export class SmsTokenService {
  createSmsToken(device: string, mobile: string) {
    const randomCode = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
    const pyload = { device: device, mobile: mobile, code: randomCode };
    const smsToken = CryptoJS.AES.encrypt(
      JSON.stringify(pyload),
      'TESKEY',
    ).toString();
    return { token: smsToken };
  }

  verifySmsToken(
    token: string,
    code: string,
    phone: string,
  ): VerifySmsTokenModel {
    const payload: any = CryptoJS.AES.decrypt(token, 'TESKEY').toString(
      CryptoJS.enc.Utf8,
    );
    const data = JSON.parse(payload);
    if (data.phone === phone && data.code == code)
      return { status: true, device: data.device, phone: data.phone };
    return { status: false };
  }
}
