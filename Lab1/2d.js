const ages = [25,31,42,77];

let arrowFunction = ()=> {
    for(i = 0; i <= 3 ;i++ ){

        if(ages[i] < 70){
            console.log("number is under 70 and will be multiplied")
            ages[i] = ages[i]*2;
        }
        else{
            console.log("Number is over 70 and was not multiplied")
        }
    }

    console.log("The new array values are : "+ages[0]+" "+ages[1]+" "+ages[2]+" "+ages[3]);
}

arrowFunction();