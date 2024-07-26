const asyncHandler = (requestHandler) => {
   return (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((error)=>next(err))
    }
}


export { asyncHandler };



// This is in try and catch method
// const asyncHandler = (fn) => async (req, res, next) => {
//   try {
//     await fn(req, res, next);
//   } catch (error) {
//     res.status(err.code || 500).json({ success: false, message: err.message });
//   }
// };
