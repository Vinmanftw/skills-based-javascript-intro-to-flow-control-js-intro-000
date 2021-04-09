function basicTeenager(age) {
  var msg= "You are a teenager!";
    if(age>=13&&age<=19){
      return msg;
    }

}

function teenager(age) {
  if(age>=13&&age<=19){
    console.log("You are a teenager!");
  }
  else{
    console.log("You are not a teenager");
  }
}

function ageChecker(age) {
  if(age>=13&&age<=19){
    console.log("You are a teenager!");
  }
  else if (age<=12){
    console.log("You are a kid");
  }
  else if(age>19){
    console.log("You are a grownup");
  }
}

function ternaryTeenager(age) {
    return if (age>=13&&age<=19)?
      console.log("You are a teenager"):
    console.log("You are not a teenager")
}

function switchAge(age) {
    switch(age){
      case (age>=13&&age<=19) :
         return "You are a teenager"
      default:
         return "You have an age"
    }
}
