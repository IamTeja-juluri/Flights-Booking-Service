const { StatusCodes }=require('http-status-codes');

const {ErrorResponse}=require('../utils/common');
const AppError = require('../utils/errors/app-error');

function validateCreateRequest(req,res,next){
    if(!req.body.flightId){
        ErrorResponse.message='Something went wrong while booking a flight';
        ErrorResponse.error=new AppError(['flightId not found in the incoming request in the correct form'],StatusCodes.BAD_REQUEST);
        return res
              .status(StatusCodes.BAD_REQUEST)
              .json(ErrorResponse);
    }
    if(!req.body.noOfSeats){
        ErrorResponse.message='Something went wrong while booking a flight';
        ErrorResponse.error=new AppError(['noOfSeats not found in the incoming request in the correct form'],StatusCodes.BAD_REQUEST);
        return res
              .status(StatusCodes.BAD_REQUEST)
              .json(ErrorResponse);
    }
    next();  //controller is the next middleware
};




module.exports={
    validateCreateRequest
}