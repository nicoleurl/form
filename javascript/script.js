/*function validateForm() {
    var x = document.forms["formgroup"]["name"].value;
    if (x == "") {
        alert("All fields must be filled out");
        return false;
    }

   }

   function validateEmail() {
    var x = document.forms["formgroup"]["email"].value;
    if (x == "") {
        alert("All fields must be filled out");
        return false;
    }

   }


function myFunction() {
    var txt = "";
    if (document.getElementById("id1").validity.rangeUnderflow) {
       txt = "Value too small";
    } 
    if (document.getElementById("id1").validity.rangeOverflow) {
       txt = "Value too large";
    }
    
    document.getElementById("demo").innerHTML = txt;
}*/



// Form validation code will come here.
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
            alert( "Please provide a zip in the format 9999999999." );
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