function find_longest_word(str)
{
  var arr = str.split(" ")
  var result = arr[0];

  for(var x = 1 ; x < arr.length ; x++){
    if(result.length < arr[x].length){
      result = arr[x];
    } 
  }
  return result;
}
console.log(find_longest_word("Master of puppets I'm pulling your strings Twisting your mind and smashing your dreams"));