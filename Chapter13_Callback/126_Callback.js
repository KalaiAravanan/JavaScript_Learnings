function placeorder(text, callback){
    console.log("Placed order for " +text)
    callback();
}

function print(){
    console.log("Order done")
}

// First Way
//placeorder("pizza",print)

// Sencond Way Anoy
/*placeorder("pizza", function(){
    console.log("Anonmous fn")
});*/

//third way
placeorder("pizza", () => {
    console.log("Arrow fn")
});

function test(text, callback) {
    console.log("Hi, this is test");
    callback();
}

test("Verify that the login page is working", async (page) => {
    console.log("Running TC1")
});

test('has title', async ({ page }) => {

});