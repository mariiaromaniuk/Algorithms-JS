// Write a function that takes in 2 strings. First string is the longer string, 
// second string is the pattern we're looking for.  
// If string match return count of matching, else - return 0.

function stringSearch(str1, str2){
  if (str2.length > str1.length) 
    return 0;
    
  let count = 0;
  for (let i = 0; i < str1.length; i++){
    for (let j = 0; j < str2.length; j++){
      if (str2[j] !== str1[i+j]) 
        break;
      else if (str2[j] === str1[i+j] && j === str2.length-1) 
        count++;
    }
  }
  return count;
}

console.log(stringSearch("Hello, World!", "Hey!"));
