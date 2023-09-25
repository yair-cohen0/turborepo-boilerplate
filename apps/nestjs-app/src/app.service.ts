import { Injectable } from '@nestjs/common';
import { Text } from 'shared-types/example';
@Injectable()
export class AppService {
    getHello(): Text {
        return 'Hello World Test!';
    }
}
