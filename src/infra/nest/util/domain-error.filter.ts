import { DomainError } from '@/core/_shared/domain-error';
import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { Response } from 'express';

@Catch(DomainError)
export class DomainErrorFilter implements ExceptionFilter {
  catch(exception: DomainError, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse<Response>();
    response.status(exception.status).json({
      name: exception.name,
      message: exception.message,
      status: exception.status,
      cause: exception.cause,
    });
  }
}
