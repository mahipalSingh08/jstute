console.clear();
console.log("-------------------------protitype-------------------------");
function Book(title, author, year) {
    this.title = title
    this.author = author
    this.year = year;
}

Book.prototype.getSummary = function () {
    return `${this.title} was written by ${this.author} in year ${this.year}`
}
//creating magzine and inherit book here
function Maagazine(title, author, year, month) {
    Book.call(this, title, author, year);
    this.month = month;
}

//const mag1 = new Maagazine("autobio", "mahi", "2000", "jan");
//console.log(mag1);
//console.log(mag1.getSummary()); //prototype did NOT inherit to magzine;


//to solve this, means copy prototype
Maagazine.prototype = Object.create(Book.prototype);
const mag1 = new Maagazine("autobio", "mahi", "2000", "jan");
console.log(mag1.getSummary()); 

//console.log(mag1); // will stil show Book contructor in magzine prototype
//we can use magzine contructor by below
Maagazine.prototype.contructor = Maagazine
