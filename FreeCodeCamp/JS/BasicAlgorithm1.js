// Reverse a String
// Reverse the provided string and return the reversed string.

// For example, "hello" should become "olleh".

function reverseString(str) {
    let rev="";
    for(let i=str.length-1; i>=0; i--){
      
       rev +=str[i] 
    }
    return rev;
  }
  
  reverseString("hello");