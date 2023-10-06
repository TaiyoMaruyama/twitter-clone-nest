import {
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class CustomPipe implements PipeTransform {
  transform(value: any) {
    if (!value) {
      throw new HttpException('id is empty', HttpStatus.BAD_REQUEST);
    }
    return value;
  }
}
