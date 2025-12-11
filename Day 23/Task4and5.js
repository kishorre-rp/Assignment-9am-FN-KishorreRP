class mobile{
    constructor(brand, price){
        this.brand = brand
        this.price = price
    }
    discount(){
         this.price = this.price*0.9
         return this.price
    }
}

const phone = new mobile("Samsung",  20000)
console.log(phone.brand);

console.log(phone.price);
phone.discount()
console.log("After discount of 10%: ",phone.price);


