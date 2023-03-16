import Joi from "joi";

const validateId = (userInput, itemLimit) => {
    const idSchema = Joi.number().min(0).max(itemLimit).required();
    let res = idSchema.validate(userInput);
    console.log("🚀 ~ file: idValidation.js:11 ~ validateId ~ res:", res)
    if(res.hasOwnProperty('error')) {
        return(false);
    }
    else {
        return(true);
    } 
    
}
    

export default validateId;