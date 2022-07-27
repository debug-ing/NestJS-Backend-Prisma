import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  createAuth(device: string, mobile: string): string {
    const payload = { device: device, mobile: mobile, role: 'User' };
    return this.jwtService.sign(payload);
  }
}
