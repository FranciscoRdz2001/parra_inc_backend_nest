import { Controller, Get } from '@nestjs/common';

@Controller('/')
export class AppController {

    @Get()
    sendHello(){
        return 'Hello world';
    }
}
