
      function validate()
      {
      
         if( document.formgroup.name.value == "" )
         {
            alert( "Please provide your name!" );
            document.formgroup.name.focus() ;
            return false;
         }
         
         if( document.formgroup.email.value == "" )
         {
            alert( "Please provide your Email!" );
            document.formgroup.email.focus() ;
            return false;
         }
         
         if( document.formgroup.phone.value == "" ||
         isNaN( document.formgroup.phone.value ) ||
         document.formgroup.phone.length != 10 )
         {
            alert( "Please provide a 10 digit phone number" );
            document.formgroup.phone.focus() ;
            return false;
         }
 return( true );
}

function validateEmail()
      {
         var emailID = document.formgroup.email.value;
         atpos = emailID.indexOf("@");
         dotpos = emailID.lastIndexOf(".");
         
         if (atpos < 1 || ( dotpos - atpos < 2 )) 
         {
            alert("Please enter correct email ID")
            document.formgroup.email.focus() ;
            return false;
         }
         return( true );
      }

function AcceptNumericOnly(event, allowPeriod) 
{
    var keyCode = event.which ? event.which : event.keyCode;    
    
    if( (keyCode >= 48 && keyCode <= 57) ||         //lets allow only numerics 
        ((allowPeriod == true) && (keyCode == 46))  //allow period conditionally based on the control's choice
      )
    {
        return true;
    }   
    
    return false;
};