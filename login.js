function myFunction() {
    var x = document.getElementById("Password");
    if (x.type === "password") 
    {
      x.type = "text";
    } 
    else 
    {
      x.type = "password";
    }
  }
  

  // document.getElementById("username").addEventListener("keypress",loginValidation)
  // document.getElementById("Password").addEventListener("keypress",loginValidation2)
  function loginValidation()
  {
    var username="vijaySkumar"
    var password="tony_stark@2781"

    var user= document.getElementById("username").value
    var pass= document.getElementById("Password").value

    if(user!==username)
    {
      document.getElementById("userMsg").innerHTML="Username doesn't match"
      document.getElementById("userMsg").style.color="red"
      document.getElementById("userMsg").style.fontFamily="Raleway"
      document.getElementById("userMsg").style.fontSize="14px"
      return false
    }
    else if(pass!==password)
    {
      document.getElementById("userMsg1").innerHTML="Password isn't valid"
      document.getElementById("userMsg1").style.color="red"
      ocument.getElementById("userMsg1").style.fontFamily="Raleway"
      document.getElementById("userMsg1").style.fontSize="14px"
      return false
    }
    
  }


