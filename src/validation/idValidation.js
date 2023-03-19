import Joi from "joi";

const idSchema = Joi.number().min(1).required();

const validateId = (userInput) => {
    let res = idSchema.validate(userInput);
    if(res.hasOwnProperty('error')) {
        return(false);
    }
    else {
        return(true);
    } 
    
}
    

export default validateId;