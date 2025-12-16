class product{
    constructor(name,price){
        this.name= name
        this.price = price
    }
    discountedprice(){
        this.price = this.price*0.9
        console.log(`Discounted price: ${this.price}`);
        
    }
}

const prt = new product("Headphone",1000)
prt.discountedprice()