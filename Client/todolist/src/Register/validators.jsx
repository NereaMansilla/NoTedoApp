



export const Validate = (user) =>{

    const error= {}
    const regex= /^[A-Za-z0-9_!#$%&'*+=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm
    if(!user.name){
     error.name = 'name is required'
    }

    if(!user.email){
      error.email = 'email is required'
    }else if (!regex.test(user.email)){
      error.email= ' Cmon, you know that this is not a valid email format :/ '
    }
    if(!user.password){
      error.password = 'password is required'
    }else if (user.password.length < 5){
      error.password = 'password most contain more than 5 characters'
    }
   
   

    return error
  }