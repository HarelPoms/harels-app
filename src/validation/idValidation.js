import Joi from "joi";

const validateId = (userInput, itemLimit) => {
    const idSchema = Joi.number().min(0).max(itemLimit).required();
    let res = idSchema.validate(userInput);
    if(res.hasOwnProperty('error')) {
        return(false);
    }
    else {
        return(true);
    } 
    
}
    

export default validateId;