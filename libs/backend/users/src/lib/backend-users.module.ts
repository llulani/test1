import { Module } from '@nestjs/common';
import { UsersController } from './users/users.controller';

@Module({
  controllers: [UsersController],
  providers: [],
  exports: [],
})
export class BackendUsersModule {}
