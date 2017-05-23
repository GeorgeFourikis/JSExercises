function vowel_count(str)
{
  var vowels = 'aeiouAEIOU';
  var counter = 0;
  
  for(var x = 0; x < str.length ; x++)
  {
    if (vowels.indexOf(str[x]) !== -1)
    {
      counter += 1;
    }
  
  }
  return counter;
}
console.log(vowel_count("Run Live to Fly, Fly to Live Do or Die")); // 11