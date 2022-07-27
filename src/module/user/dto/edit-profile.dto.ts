import { IsNotEmpty, IsString, Length } from 'class-validator';

export class EditProfile {
  @IsNotEmpty({
    message: 'نام خانوادگی را وارد نکرده است',
  })
  @IsString({
    message: 'نام خانوادگی صحیح وارد نکرده اید',
  })
  name: string;

  @IsNotEmpty({
    message: 'نام خانوادگی را وارد نکرده است',
  })
  @IsString({
    message: 'نام خانوادگی صحیح وارد نکرده اید',
  })
  lastName: string;

  @IsNotEmpty({
    message: 'کد ملی را وارد نکرده اید',
  })
  @Length(8, 8, {
    message: 'کد ملی اشتباه است',
  })
  nationalId: string;
}
