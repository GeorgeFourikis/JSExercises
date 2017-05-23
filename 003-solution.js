function uppercase(str)
{
  var arr = str.split(' ');
  var newArr = [];
    
  for(var x = 0; x < arr.length; x++){
      newArr.push(arr[x].charAt(0).toUpperCase()+arr[x].slice(1));
  }
  return newArr.join(' ');
}
console.log(uppercase("knock knock knocking on heaven's door"));