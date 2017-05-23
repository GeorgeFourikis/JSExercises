function sumDivs(x){
	var sum = 0;
	for (var i = x; i < 1000; i++)
	{
	    if (i % 3 === 0 || i % 5 === 0)
	    {
	       sum += i;
	    }
	}
	console.log(sum);
}

sumDivs(560)