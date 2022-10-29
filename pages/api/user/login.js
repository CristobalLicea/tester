import connectDB from "../../../config/db";
import User from '../../../models/User';
import ErrorResponse from "../../../utils/errorResponse";
import asyncHandler from '../../../middleware/async';

const login = asyncHandler(async (req, res, next) => {
  
  const { email, password } = req.body;

  if(!email || !password) {
    return next(new ErrorResponse('Please provide an email AND password'))
  }

  const user = await User.findOne({ email }).select('+password');

  if (!user) {
    return next(ErrorResponse('Invalid credentials', 401));
  }

  const isMatch = await user.matchPassword(password);
  if (!isMatch) {
    return next(new ErrorResponse('Invalid Credentials', 401));
  };
  
  res.json({ success: user })
  //sendTokenResponse(user, 200, res);
});

export default login;