import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Text } from 'shared-types/example';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    getHello(): Text {
        return this.appService.getHello();
    }
}
