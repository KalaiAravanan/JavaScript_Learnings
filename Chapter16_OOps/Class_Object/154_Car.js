class car{

    tyres;
    steering;

    constructor(name){
        this.name = name;
      //  console.log("My new Car : " + this.name)
    }

    Drive(){
        console.log("Driving is fun!! in " +this.name)
    }

}

mycar = new car("Tesla")
mycar.Drive();