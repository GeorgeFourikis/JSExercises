//Write an Imdb clone.The function should accept an argument to be an array of movies
var myMovies = [
	{
		title: 'Rambo: First Blood Part II',
		duration: '1h 36min' ,
		stars: ['Sylvester Stallone', 'Steven Berkoff', 'Richard Crenna']	
	},	
	{
		title: 'Rocky IV',
		duration: '1h 31min ' ,
		stars: ['Sylvester Stallone', 'Dolph Lundgren', 'Talia Shire']		
	},	
	{
		title: 'The Usual Suspects',
		duration: '1h 46min ' ,
		stars: ['Kevin Spacey', 'Benicio Del Toro', 'Gabriel Byrne']		
	},
]

function printMovie(movie) {
    for(var i=0; i < movie.length; i++){
        console.log("Movie called: " +movie[i].title + " duration is: " + movie[i].duration + " some of the most known stars " +  movie[i].stars.join(","))    
    }
}

printMovie(myMovies)