var books = [
  {title: 'The Shilamrillion',
   author: 'JRR Tolkien',
   alreadyRead: true
  },
  {title: 'The Rime of the Ancient Mariner',
  author: 'Samuel Taylor Coleridge',
  alreadyRead: false
  }];

function myBooks(myObj){
	for (var i = 0; i < myObj.length; i++) {
	  var book = myObj[i];
	  var bookInfo = book.title + '" by ' + book.author;
	  if (book.alreadyRead) {
	    console.log('You already read "' + bookInfo);
	  } else {
	    console.log('You still need to read "' + bookInfo);
	  }
	}
}