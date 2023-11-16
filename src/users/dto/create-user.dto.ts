import { UserEntity } from '../entities/user.entity';

export class CreateUserDto implements Omit<UserEntity, 'id'> {
  name: string;
  email: string;
  password: string;
}
