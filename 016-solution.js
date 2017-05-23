var myMovies = [
	{
		title: 'Rambo: First Blood Part II',
		duration: '1h 36min' ,
		stars: ['Sylvester Stallone', 'Steven Berkoff', 'Richard Crenna'],
		isWatched: true	
	},	
	{
		title: 'Rocky IV',
		duration: '1h 31min ' ,
		stars: ['Sylvester Stallone', 'Dolph Lundgren', 'Talia Shire'],
		isWatched: true			
	},	
	{
		title: 'The Usual Suspects',
		duration: '1h 46min ' ,
		stars: ['Kevin Spacey', 'Benicio Del Toro', 'Gabriel Byrne'],
		isWatched: true			
	},
]

function printMovie(movie) {
	var moviePrompt = prompt("Type the movie to check from database")
	var found = 0;
    for(var i = 0; i < movie.length; i++){
    	if(moviePrompt === movie[i].title){
    		found = 1;
    		if(movie[i].isWatched){
    			console.log("Yes, it seems you have seen: " + movie[i].title);
    		}else{
    			console.log("nope, it seems you have  not seen: " + movie[i].title);
    		}
    	} 
    }
    if(found == 0){
		console.log("Searched but not ound anything!!")
	} 
}

printMovie(myMovies)