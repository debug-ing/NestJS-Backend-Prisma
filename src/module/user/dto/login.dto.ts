import { Transform } from 'class-transformer';
import { IsEmail, IsNotEmpty, Matches, Validate } from 'class-validator';

export class LoginDto {
  @IsNotEmpty({
    message: 'شناسه دستگاه را وارد نکرده اید',
  })
  device: string;

  @IsEmail()
  @IsNotEmpty({
    message: 'ایمیل را وارد نکرده اید',
  })
  email: string;

  @IsNotEmpty({
    message: 'شماره همراه را وارد نکرده اید',
  })
  @Matches(new RegExp(/^(\+98|0)?9\d{9}$/), {
    message: 'شماره همراه را درست وارد نکرده اید',
  })
  @Transform(({ value }) => {
    return value.persian2English();
  })
  phone: string;
}
