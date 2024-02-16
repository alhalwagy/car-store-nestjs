import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async signup(email: string, password: string) {
    const users = await this.usersService.find(email);

    if (users.length > 0) {
      throw new BadRequestException('User With this email is already exist.');
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await this.usersService.create(email, hashedPassword);
    return user;
  }

  async signin(email: string, password: string) {
    const [user] = await this.usersService.find(email);

    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException('email or password is incorrect');
    }

    return user;
  }
}
