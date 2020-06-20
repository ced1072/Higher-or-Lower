// generate a random number

var project = Math.floor(Math.random() * 10) + 1;

console.log("your number is " + project );




// guess click higher than 5 alert
function higher()
{
  if (project<=5)
  {
    // score--;
    alert("Sorry, you are wrong!🙀");
    
  }
  else 
  {
alert("Correct! You chose wisely!😻")


  }
  

  }

// guess click equal to 5
function equal()
{
  if (project=5)
  {

    alert("Sorry, you are wrong!🙀");
    
  }
 

  else 
  {

alert("Correct! You chose wisely!😻");


  
  }
}
// guess lower than 5
function lower(){
if (project>=5)
  {
   
    alert("Sorry, you are wrong!🙀");
    
  }
  

  else 
  {

alert("Correct! You chose wisely!😻");

  
  }
}