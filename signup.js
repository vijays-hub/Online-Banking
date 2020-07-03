document.getElementById("fname").addEventListener("keypress",validation)
document.getElementById("lname").addEventListener("keypress",validation1)
document.getElementById("contactNum").addEventListener("keypress",validation2)
document.getElementById("pass").addEventListener("keypress",validation3)
document.getElementById("Conpass").addEventListener("keypress",validation4)

function validation()
{
    var firstName= document.getElementById("fname").value

    //first Name Validation
    if(firstName.length == 0)
    {
        document.getElementById("nameMsg1").innerHTML="First Name Cannot be Empty"
        return false
    }
    else if(firstName.length < 3)
    {
        document.getElementById("nameMsg1").innerHTML="First Name is too short"
        return false
    }
    else if(firstName.length > 15)
    {
        document.getElementById("nameMsg1").innerHTML=" First Name is too long"
        return false
    }
    else if(firstName.length>3 || firstName.length<15)
    {
        document.getElementById("nameMsg1").innerHTML=""
        return false
    }
}
    //Last Name Validation
   function validation1()
   {
    var lastName= document.getElementById("lname").value
    if(lastName.length == 0)
    {
        document.getElementById("nameMsg2").innerHTML="Last Name Cannot be Empty"
        return false
    }
    else if(lastName.length < 3)
    {
        document.getElementById("nameMsg2").innerHTML="Last Name is too short"
        return false
    }
    else if(lastName.length > 15)
    {
        document.getElementById("nameMsg2").innerHTML="Last Name is too long"
        return false
    }
    else if(lastName.length>3 || lastName.length<15)
    {
        document.getElementById("nameMsg1").innerHTML=""
        return false
    }
   } 

    //Contact Validation
function validation2()
{
    var phone= document.getElementById("contactNum").value

    if(phone.length==0)
    {
        document.getElementById("phoneMsg").innerHTML="Phone Number cant be Empty"
        return false
    }
    else if(isNaN(phone))
    {
        document.getElementById("phoneMsg").innerHTML="Phone Number must contain only Numbers";
        return false
    }
    else if(phone.length<10)
    {
        document.getElementById("phoneMsg").innerHTML="Phone Number is less than 10 Digits"
        return false
    }
    else if(phone.length==10)
    {
        document.getElementById("phoneMsg").innerHTML=" "
        return false
    }
    else if(phone.charAt(0)<7)
    {
        document.getElementById("phoneMsg").innerHTML="Phone Number should Start with 7,8 or 9"
        return false
    }
    else if(phone.charAt(0)>7)
    {
        document.getElementById("phoneMsg").innerHTML=" "
        return false
    }
    else if(phone.length>10)
    {
        document.getElementById("phoneMsg").innerHTML="Phone Number is more than 10 Digits"
        return false
    }
    
}

function validation3()
{
    var pass= document.getElementById("pass").value

    if(pass.length==0)
    {
        document.getElementById("passMsg1").innerHTML="Please set a Password"
        return false
    }
    else if(pass.length<5)
    {
        document.getElementById("passMsg1").innerHTML="Password must be greater than 5 characters";
        return false
    }
    else if(phone.length<10)
    {
        document.getElementById("passMsg1").innerHTML="Password should be less than 10 characters"
        return false
    }
    if(pass!==conpass)
    {
            document.getElementById("passMsg2").innerHTML="Passwords didnt match!"
            return false
    }  
}
function validation4()
    {
        var pass= document.getElementById("pass").value
        var conpass= document.getElementById("Conpass").value

        if(pass!==conpass)
        {
            document.getElementById("passMsg2").innerHTML="Passwords didnt match!"
            return false
        }
    }

