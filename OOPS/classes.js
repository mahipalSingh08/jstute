class Book{
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year =  year;
    }

    getGeneralSummary = function () {
        return `${this.title} was written by ${this.author} in year ${this.year}`
    }

    getProtoSummary () {
        return `${this.title} was written by ${this.author} in year ${this.year}`
    }

    static getStaticSummary = function (){
        return `${this.title} was written by ${this.author} in year ${this.year}`
    }
}

const book1 = new Book("JS", "mahi", "2000");

console.log(book1); //book object with getProtoSummary in proto and 
//getGeneralSummary in genral function of book1
//static getStaticSummary() can be run in Maiin class only