import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
  ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { of } from 'rxjs';
import { Role } from '../enum/role.enum';
import { ROLES_KEY } from '../decorator/roles.decorator';
@Injectable()
export class RolesGuard extends AuthGuard('jwt') {
  constructor(private reflector: Reflector) {
    super();
  }
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<Role>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    await super.canActivate(context);
    const { user } = context.switchToHttp().getRequest();
    const role = user.role;
    if (!requiredRoles.includes(role)) {
      throw new ForbiddenException();
    }
    return true;
  }
}
