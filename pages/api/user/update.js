import connectDB from "../../../config/db";
import User from '../../../models/User';
import ErrorResponse from "../../../utils/errorResponse";
import asyncHandler from '../../../middleware/async';

const updateUser = asyncHandler(async(req, res, next) => {
  const user = await User.findByIdAndUpdate(req.body.id, req.body)
  res.status(200).json({
    success: true,
    data: user
  })
})

export default updateUser;