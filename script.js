$(document).ready(function(){
  $("#form-contact").validate({
    rules:{
        name:{
          required:true,
          minlength:4,
          maxlength:15
        },
        email:{
          required:true,
          email:true
        },
        place:{
          required:true,
          minlength:4
        },
        mobile:{
          required:true,
          number:true,
          maxlength:10
        }
    },
    messages:{
      name:{
        required:"*Enter your name",
        minlength:"*Atleast 4 character is required",
        maxlength:"*Maximum of 15 characters only"
      },
      email:{
        required:"*Enter an Email address",
        email:"*Please enter a valid email address"
      },
      place:{
        required:"*Enter your place",
        minlength:"*Atleast 4 character is required"
      },
      mobile:{
        required:"*Enter your Mobile number",
        number:"*Enter a valid Mobile number",
        maxlength:"*INVALID"
      }
    }
    
    
  })
  

  

  
})