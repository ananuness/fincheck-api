import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UsersRepository } from 'src/repository/users.repository';

@Global()
@Module({
  providers: [PrismaService, UsersRepository],
  exports: [UsersRepository],
})
export class DatabaseModule {}
