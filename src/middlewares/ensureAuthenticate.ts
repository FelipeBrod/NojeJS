import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

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
    throw new Error('No token in request');
  }
  const [, token] = authHeader.split(' ');

  try {
    const { sub: user_id } = verify(token, 'FelipeRodriguesKey') as IPayload;

    const usersRepository = new UsersRepository();
    const user = await usersRepository.findById(user_id);
    if (!user) {
      throw new Error('User with provided id not found in db.');
    }

    next();
  } catch {
    throw new Error('Invalid Token');
  }
}
