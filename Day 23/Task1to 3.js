const  book ={
    title: "Space",
    author: "Kishorre R P",
    year: "2025",

    getinfo(){console.log(`The ${this.title} book is written by ${this.author} at ${this.year}`);
    }
};
book.getinfo();

const{title,author}= book
console.log(`Title: ${title} and author: ${author}`);


