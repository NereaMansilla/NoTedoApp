

export const validateVerify = (input) =>{
    
    const error= {}
    const regex= /^[A-Za-z0-9_!#$%&'*+=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm

    if(input.length === 0){
        error.email= "The email should not be empty"
    }else if (!regex.test(input)){
        error.email = ' This is not a validate email'
      }


      return error

}