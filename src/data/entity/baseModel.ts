import { BaseClass } from '../../crossCutting/objects/baseClass';
import { v4 } from 'uuid';
import { z, ZodRawShape } from 'zod';

const schema = z.object({
  id: z.string().uuid(),
});

export class BaseModel<T = unknown> extends BaseClass<T> {
  public readonly id: string;

  constructor(props: T, schemaShape: ZodRawShape, id?: string) {
    const propsWithId = {
      ...props,
      id: id || v4(),
    };

    super(propsWithId, schema.extend(schemaShape));
  }
}
