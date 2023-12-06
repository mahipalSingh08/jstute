console.log("-------------------------constructor-------------------------");
function Book(title, author, year) {
    this.title = title
    this.author = author
    this.year = year;
    this.getSummary =  function () {
        return `${this.title} was written by ${this.author} in year ${this.year}`
    }
}

//initilize book
const book1 = new Book("autobio", "mahi", "2000");
console.log(book1.getSummary());

