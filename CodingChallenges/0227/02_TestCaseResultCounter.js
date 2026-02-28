let temppass, tempfail, tempskip;

for(let i=0; i<85; i++)
    {
        console.log("Test Case " + (i+1) + ": Passed");  
        temppass = (i+1);
    }

for(let j=0; j<10;j++)
    {
        console.log("Test Case " + (j+1) + ": Failed");
        tempfail = (j+1);
    }

for(let k=0; k<5;k++)
    {
        console.log("Test Case " + (k+1) + ": Skipped");
        tempskip = (k+1);
    }

    console.log("Test Results Report");
    Total = (temppass + tempfail + tempskip);
    console.log("Total Test Cases: " + Total);

    let passtotal = (temppass / Total) * 100;   
    console.log("Pass count: " + temppass);
    console.log("Pass percentage: " + passtotal + "%");

    let failtotal = (tempfail / Total) * 100;
    console.log("Fail count: " + tempfail);
    console.log("Fail percentage: " + failtotal + "%");

    let skiptotal = (tempskip / Total) * 100;
    console.log("Skip count: " + tempskip);
    console.log("Skip percentage: " + skiptotal + "%");

  

