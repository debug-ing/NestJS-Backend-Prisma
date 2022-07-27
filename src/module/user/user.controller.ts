import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { User } from 'src/shared/decorator/user.decorator';
import { RolesGuard } from 'src/shared/gurd/roles.guard';
import { Role } from 'src/shared/enum/role.enum';
import { Roles } from 'src/shared/decorator/roles.decorator';
import { AuthService } from '../auth/auth.service';
import { EditProfile } from './dto/edit-profile.dto';
import { LoginDto } from './dto/login.dto';
import { VerifyDto } from './dto/verify.dto';
import { VerifySmsTokenModel } from '../../shared/model/verifySmsToken.model';
import { UserService } from './user.service';
import { SmsTokenService } from '../sms-token/sms-token.service';
import { DynamicModuleService } from '../dynamic-module/dynamic-module.service';
import { Public } from 'src/shared/decorator/public.decorator';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
    private readonly smsTokenService: SmsTokenService,
    private readonly dynamicModuleService: DynamicModuleService,
  ) {}

  @Get()
  @UseGuards(RolesGuard)
  @Roles(Role.User)
  getProdile(@User() mobile: string) {
    return this.userService.getUserByMobile(mobile);
  }

  @Get('test-dynamic-module')
  test() {
    return this.dynamicModuleService.getData();
  }

  @Get('all')
  @UseGuards(RolesGuard)
  @Roles(Role.Admin)
  getAll() {
    return this.userService.getAll();
  }

  @Get(':id')
  @UseGuards(RolesGuard)
  @Roles(Role.Admin)
  getDetail(@Param('id') id: number) {
    return this.userService.getDetail(id);
  }

  @Post('send-sms')
  getHello(@Body() login: LoginDto) {
    const user = this.userService.findUsear(login.phone);
    if (!user) this.userService.createUser(login.phone, login.email);
    return this.smsTokenService.createSmsToken(login.device, login.phone);
  }

  @Post('verify')
  register(@Body() register: VerifyDto) {
    const statusVerify: VerifySmsTokenModel =
      this.smsTokenService.verifySmsToken(
        register.token,
        register.code,
        register.phone,
      );
    if (statusVerify)
      return this.authService.createAuth(
        statusVerify.phone,
        statusVerify.phone,
      );
    return { message: 'کد فعال سازی اشتباه است' };
  }

  @Put()
  @UseGuards(RolesGuard)
  @Roles(Role.User)
  fillProfile(@Body() editProfile: EditProfile, @User() mobile: string) {
    return this.userService.updateUser(mobile, editProfile);
  }
}
