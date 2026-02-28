//Test Environment Config
//In CI/CD pipelines, tests run against different environments. Write a JavaScript program using a switch statement 
// that takes an environment name stored in a variable and prints the base URL, API key pattern, and timeout. Use const 
// for fixed values and let for the assembled config.

//Environments: dev, staging, qa, production/prod. Each has different base URL, API key prefix, timeout, and description.

let environment = "PROD";

switch(environment){
    case "DEV" :
        console.log("Environment: " + environment);
        const Configdev = "https://dev-api.example.com/v1/";
        const timeoutDev = 250;
        const apiKeyDev = "DEV-12345-ABCDE";
        const DescriptionDev = "Development environment with mock data.";
        console.log("Base URL: " + Configdev);
        console.log("API Key: " + apiKeyDev);
        console.log("Timeout: " + timeoutDev + "ms");
        console.log("Description: " + DescriptionDev);    
    break;

    case "STAGING" :
        console.log("Environment: " + environment);
        const Configstaging = "https://staging-api.example.com/v1/";
        const timeoutstaging = 225;
        const apiKeystaging = "STAGING-12345-ABCDE";
        const Descriptionstaging = "Staging environment with mock data.";
        console.log("Base URL: " + Configstaging);
        console.log("API Key: " + apiKeystaging);
        console.log("Timeout: " + timeoutstaging + "ms");
        console.log("Description: " + Descriptionstaging);
    break;

    case "QA" :
        console.log("Environment: " + environment);
        const Configqa = "https://qa-api.example.com/v1/";
        const timeoutqa = 200;
        const apiKeyqa = "QA-67890-FGHIJ";  
        const Descriptionsqa = "QA environment with mock data.";
        console.log("Base URL: " + Configqa);
        console.log("API Key: " + apiKeyqa);
        console.log("Timeout: " + timeoutqa + "ms");
        console.log("Description: " + Descriptionsqa);  
        
    break;

    case "PROD" :
        console.log("Environment: " + environment);
        const Configprod = "https://prod-api.example.com/v1/";
        const timeoutprod = 200;
        const apiKeyprod = "PROD-67890-FGHIJ";
        const Descriptionprod = "Production environment with live data.";
        console.log("Base URL: " + Configprod);
        console.log("API Key: " + apiKeyprod);
        console.log("Timeout: " + timeoutprod + "ms");
        console.log("Description: " + Descriptionprod);  
    break;  

}   