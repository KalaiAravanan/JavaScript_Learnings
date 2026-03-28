const user = {
    firstname : "kalai",
    lastname : "selvi",

    getname(firstname, lastname){
        return this.firstname + this.lastname
    },

    setname(value){
        [this.firstname,this.lastname] = value
    }
};

user.getname ="Amit Sharma"
console.log(user.getname)