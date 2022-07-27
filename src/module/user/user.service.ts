import { Injectable } from '@nestjs/common';
import { User, Prisma, Role } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import * as CryptoJS from 'crypto-js';
import { VerifySmsTokenModel } from '../../shared/model/verifySmsToken.model';
import { EditProfile } from './dto/edit-profile.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  getAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  getUserByMobile(mobile: string): Promise<User> {
    return this.prisma.user.findFirstOrThrow({
      where: {
        phone: mobile,
      },
    });
  }
  async getDetail(id: number): Promise<User> {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  findUsear(phone: string): Promise<User> {
    return this.prisma.user.findFirst({
      where: {
        phone,
      },
    });
  }

  createUser(phone: string, email: string): Promise<User> {
    const insertData = {
      phone: phone,
      name: '',
      lastName: '',
      role: Role.USER,
      email: email,
      nationalId: '',
    };
    return this.prisma.user.create({ data: insertData });
  }

  updateUser(phone: string, editProfile: EditProfile): Promise<User> {
    return this.prisma.user.update({
      where: {
        phone,
      },
      data: editProfile,
    });
  }
}
