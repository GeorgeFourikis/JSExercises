function char_count(str, letter){
 var counter = 0;
 for (var i = 0; i < str.length; i++) 
 {
    if (str.charAt(i) == letter){
      counter += 1;
     }
  }
  return counter;
}