import { Module } from '@nestjs/common';
import { CcpAssistatModule } from './ccp-assistat/ccp-assistat.module';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    CcpAssistatModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
