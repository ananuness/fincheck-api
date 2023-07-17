import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/repository/user.repository';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}

  getUserById(userId: string) {
    return this.userRepository.findUnique({
      where: { id: userId },
      select: {
        name: true,
        email: true,
      },
    });
  }
}
