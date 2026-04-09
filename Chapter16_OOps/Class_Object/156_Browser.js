class browser{

    constructor(name){
        this.name = name
        this.openBrowser = true;
        }
}

chromeBrowser = new browser("Chrome");
console.log(chromeBrowser.openBrowser);