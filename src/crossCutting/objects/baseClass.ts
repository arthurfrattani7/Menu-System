import { BadRequestException, UnprocessableEntityException } from '@nestjs/common';
import { ZodError, ZodTypeAny } from 'zod';

function isValid<P>(props: P, schema: ZodTypeAny) {
  try {
    return schema.parse(props);
  } catch (error) {
    if (error instanceof ZodError) {
      throw new BadRequestException(error);
    }

    throw new UnprocessableEntityException(error);
  }
}

export class BaseClass<P = unknown> {
  constructor(props: P, schema: ZodTypeAny) {
    const validProps = isValid<P>(props, schema);

    Object.assign(this, validProps);
  }
}
