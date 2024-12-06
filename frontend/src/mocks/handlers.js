// src/mocks/handlers.js
import { rest } from 'msw';

export const handlers = [
  rest.post('http://localhost:5000/api/auth/login', (req, res, ctx) => {
    const { email, password } = req.body;

    if (email === 'test@example.com' && password === 'password') {
      return res(
        ctx.status(200),
        ctx.json({ token: 'fake-jwt-token' })
      );
    }

    return res(
      ctx.status(401),
      ctx.json({ message: 'Invalid credentials' })
    );
  }),

  // Add more handlers as needed
];
