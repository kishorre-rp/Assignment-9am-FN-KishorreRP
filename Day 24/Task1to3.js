const  book ={
    title: "Astronomy",
    author: " R P",
    year: "2023",

    describe(){console.log(`The ${this.title} book was written by ${this.author} at ${this.year}`);
    }
};
book.describe();

const{title,author}= book
console.log(`Title: ${title} and author: ${author}`);


