
class Base{
  greet(){
    return "Hello"
  }
}

class child extends Base{

  greet(){
    return super.greet() + "World"
  }
}

console.log(new child().greet());
