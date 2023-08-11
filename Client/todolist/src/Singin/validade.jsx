



export const Validator = (input) =>{

    const error= {}
    const regex= /^[A-Za-z0-9_!#$%&'*+=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm
/*     if(!input.name){
     error.name = 'name is required'
    } */

    if(!input.email){
      error.email = 'email is required'
    }else if (!regex.test(input.email)){
      error.email= ' This is not a validate email'
    }
    if(!input.password){
      error.password = 'password is required'
    }else if (input.password.length < 5){
      error.password = 'password most contain more than 5 characters'
    }
   
   

    return error
  }