// import jwt from 'jsonwebtoken';
// import { Request, Response, NextFunction } from 'express';

// const SECRET_KEY = process.env.JWT_SECRET || 'your-secret-key';

// export const authenticate = (req: Request, res: Response, next: NextFunction) => {
//   const token = req.header('Authorization')?.split(' ')[1];
//   if (!token) return res.status(401).json({ message: 'No token, authorization denied' });

//   try {
//     const decoded = jwt.verify(token, SECRET_KEY);
//     req.user = decoded;
//     next();
//   } catch (error) {
//     res.status(401).json({ message: 'Token is not valid' });
//   }
// };
