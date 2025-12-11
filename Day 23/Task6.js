class user{
    constructor(name, e_mail){
        this.name = name
        this.e_mail = e_mail
    }
    login_in(){
        this.name = "Kishorre R P"
        this.e_mail = "kishorrerp21@gmai.com"
        return this.name
    }

}

const lo = new user("Kishorre R P", "kishorrerp21@gmai.com"
)
console.log(lo.name);
console.log(lo.e_mail);
lo.login_in()


