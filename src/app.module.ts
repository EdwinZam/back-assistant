import { Module } from '@nestjs/common';
import { CcpAssistatModule } from './ccp-assistat/ccp-assistat.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    CcpAssistatModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
