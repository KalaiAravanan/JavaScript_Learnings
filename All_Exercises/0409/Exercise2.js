class vehicle{
    constructor(type){
        this.type = type;
        console.log("This vehicle is", this.type)
    }
}

class car extends vehicle{
    constructor(brand){
        super("car");
        this.brand = brand;
        console.log("This is", this.brand)
    }
}

let c =  new car("Tesla")