import { createParamDecorator, ExecutionContext } from "@nestjs/common";

// Id do usuário logado, vindo do token JWT (preenchido pelo JwtStrategy).
export const CurrentUserId = createParamDecorator(
  (_data: unknown, context: ExecutionContext): string => {
    return context.switchToHttp().getRequest().user.userId;
  },
);
