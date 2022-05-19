import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class UserGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const { userId } = request.query;
    const allowerdUser = {
      id: '25',
    };

    if (userId !== allowerdUser.id)
      throw new UnauthorizedException('User with id = 25 allowed only');

    return true;
  }
}
