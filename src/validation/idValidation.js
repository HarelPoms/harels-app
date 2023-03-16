import Joi from "joi";

const validateId = (userInput) => {
    let res = Joi.number().required().validate(userInput);
    console.log("🚀 ~ file: idValidation.js:11 ~ validateId ~ res:", res)
    if(res.hasOwnProperty('error')) {
        return(false);
    }
    else {
        return(true);
    } 
    
}
    

export default validateId;