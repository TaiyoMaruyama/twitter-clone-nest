import { ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { ZodObject } from 'zod';

export class ZodCustomPipe {
  constructor(private scheme: ZodObject<any>) {}

  transform(value: unknown, metadata: ArgumentMetadata) {
    try {
      this.scheme.parse(value);
    } catch (error) {
      throw new BadRequestException('validation failed');
    }
    return value;
  }
}
