import { IsNotEmpty } from 'class-validator';

export class VerifyDto {
  @IsNotEmpty({
    message: 'شناسه دستگاه را وارد نکرده اید',
  })
  token: string;

  @IsNotEmpty({
    message: 'شناسه دستگاه را وارد نکرده اید',
  })
  phone: string;

  @IsNotEmpty({
    message: 'شناسه دستگاه را وارد نکرده اید',
  })
  code: string;
}
