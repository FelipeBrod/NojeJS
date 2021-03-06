import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

import { AppError } from '../errors/AppError';
import { UsersRepository } from '../modules/accounts/repositories/implementations/UsersRepository';

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
): Promise<void> {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('No token in request', 401);
  }
  const [, token] = authHeader.split(' ');

  try {
    const { sub: user_id } = verify(token, 'FelipeRodriguesKey') as IPayload;

    const usersRepository = new UsersRepository();
    const user = await usersRepository.findById(user_id);
    if (!user) {
      throw new AppError('User with provided id not found in db.', 401);
    }

    request.user = {
      id: user_id,
    };
    next();
  } catch {
    throw new AppError('Invalid Token', 401);
  }
}
