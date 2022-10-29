import connectDB from "../../../config/db";
import User from '../../../models/User';
import ErrorResponse from "../../../utils/errorResponse";
import asyncHandler from '../../../middleware/async';

const register = asyncHandler(async (req, res, next) => {
  
  const { userName, email, password, clearance } = req.body;

  await connectDB();

  console.log('Connected to MongoDB')

  const user = await User.create({
    userName,
    email,
    password,
    clearance
  });

  console.log(`user ${user.userName} created`)


  res.json({ success: user})
  //sendTokenResponse(user, 200, res);
});

const sendTokenResponse = (user, statusCode, res) => {
  const token = user.getSignedJwt();

  const options = {
    expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
    httpOnly: true
  };

  if (process.env.NODE_ENV === 'production') {
    options.secure = true;
  }

  res
    .status(statusCode)
    .cookie('token', token, options)
    .json({ success: true, token });
};

export default register;