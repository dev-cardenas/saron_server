import { NextFunction, Request, Response } from 'express';
import { decode, verify } from 'jsonwebtoken';

export const ensuredAuthenticated = () => {
  return async (request: Request, response: Response, next: NextFunction) => {
    const authHeaders = request.headers.authorization;

    if (!authHeaders) {
      return response.status(401).json({ message: 'Token is missing' });
    }

    const [, token] = authHeaders.split(' ');

    try {
      verify(token, process.env.SECRET_JWT);

      const { sub } = decode(token);
      request.id_user = sub.toString();

      return next();
    } catch (err) {
      return response.status(401).end();
    }
  };
};
