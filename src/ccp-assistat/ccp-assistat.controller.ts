import { Body, Controller, Post } from '@nestjs/common';
import { CcpAssistatService } from './ccp-assistat.service';
import { QuestionDto } from './dto/question.dto';

@Controller('ccp-assistant')
export class CcpAssistatController {
  constructor(private readonly ccpAssistatService: CcpAssistatService) {  
  }
  @Post('create-thread')
  async createThread(){
    return await this.ccpAssistatService.createThread();
  }

  @Post('user-question')
  async userQuestion(
    @Body() questionDto: QuestionDto
  ){  
    return await this.ccpAssistatService.userQuestion(questionDto);
  }
}
