import connectDB from "../../../config/db";
import User from '../../../models/User';
import ErrorResponse from "../../../utils/errorResponse";
import asyncHandler from '../../../middleware/async';

const getLoggedInUser = asyncHandler(async(req, res, next) => {
  const user = await User.findById(req.body._id);
  res.json({
    success: true,
    data: user
  })
})

export default getLoggedInUser;