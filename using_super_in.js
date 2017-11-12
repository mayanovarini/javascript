class Media {
  constructor(title) {
    this._title = title;
    this._ratings = [];
    this._isCheckedOut = false;
  }
  
  get title() {
    return this._title;
  }
  
  get ratings() {
    return this._ratings;
  }
  
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  

  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut
  }


  getAverageRating() {
    let average = this._ratings.reduce((currentSum, rating) => currentSum + rating, 0) / this._ratings.length;
    
    return average; 
  }
  
  addRating(ratingNumber) {
    return this._ratings.push(ratingNumber)
  }
  
} //this closes Media

class Book extends Media {
  constructor(title, author, pages) {
    super(title)
    this._author = author
    this._pages = pages
  }
  
  get author() {
    return this._author;
  }
  
  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(title, director, runTime) {
    super(title)
    this._director = director
    this._runTime = runTime
  }
}

class CD extends Media {
  constructor (title, artist, songs) {
    super(title)
    this._artist = artist
    this._songs = songs
  }
}

const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544)

historyOfEverything.toggleCheckOutStatus()

console.log("is book checked out?", historyOfEverything.isCheckedOut)

historyOfEverything.addRating(3)
historyOfEverything.addRating(4)
historyOfEverything.addRating(5)

//log the result
console.log("the book's rating is : ", historyOfEverything.getAverageRating())

const speed = new Movie('Speed', 'Jan de Bont', 116)
speed.toggleCheckOutStatus();
console.log("is speed checked out?", speed.isCheckedOut)

speed.addRating(1)
speed.addRating(1)
speed.addRating(5)

//log the result
console.log("the speed rating is : ", speed.getAverageRating()); 
