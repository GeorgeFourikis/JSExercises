function reverse_a_number(n)
{	
	n = n + "";
	return n.split("").reverse().join("");
}
console.log(reverse_a_number(987123)); // 321789

//Before being able to manipulate it as i want i should first make it a string in order 
//to use the given methods.