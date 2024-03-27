import { Module } from '@nestjs/common';
import { CcpAssistatService } from './ccp-assistat.service';
import { CcpAssistatController } from './ccp-assistat.controller';

@Module({
  controllers: [CcpAssistatController],
  providers: [CcpAssistatService],
})
export class CcpAssistatModule {}
