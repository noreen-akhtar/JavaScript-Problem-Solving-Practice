function validate(){  
  var name=document.f1.name.value;  
  var passwordlength=document.f1.password.value.length;  
  var status=false;  
  if(name==""){  
  document.getElementById("email").innerHTML=  
  "email";  
  status=false;
  }else{  
  document.getElementById("email").innerHTML="email";  
  status=true;
  }  
    
  if(passwordlength<6){  
  document.getElementById("password").innerHTML=  
  " Password must be greater than 6";  
  status=false; 
  }else{  
  document.getElementById("passwordlocation").innerHTML="";  
  }  
    
  return status;  
  }