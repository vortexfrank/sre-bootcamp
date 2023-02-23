import { protectFunction } from '../services/protected.js';

export const protect = (req, res, next) => {
  let authorization = req.headers.authorization;
  let response = {
    "data": protectFunction(authorization)
  };
  res.send(response);
  next();
}
