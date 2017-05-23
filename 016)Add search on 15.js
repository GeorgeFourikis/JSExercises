//Write a function to extend the previous exercise.
//Now you should prompt the user to add a movie to see if he/she watched it in the past.
// 1)If the movie doesnt exist on the db console.log this: Searched but not ound anything!!
// 2)If the movie exists and is watched by user console.log this: Yes, it seems you have seen: 
// 3)If the movie exists and is not watched by user console.log this: Nope, it seems you have  not seen: 

//Hint, use the Google Chrome Developer tools Console to use the prompt method
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
	//code goes here
}

printMovie(myMovies)