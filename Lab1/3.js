
//create functions to add to it ,remove from it and then display the array

const arrayOfStrings = ["john","joe","vincent","mike"];

//created arrow function to add to array
let addToArray = (newString) =>{
    
    arrayOfStrings.push(newString);

}

//method to remove from array based off the index
let removeFromArray = (indexOfString) =>{
    
    arrayOfStrings.splice(indexOfString);
}

let displayArray = () =>{
    
        arrayOfStrings.forEach((item)=>{
        console.log(item);
    })
}

let addTask = () =>{
    addToArray("Task");
    console.log("Task has been logged into the array \n Number of elements = " + arrayOfStrings.length +"\n");

}

let listAllTasks = () => {

    displayArray();
}

addTask();
listAllTasks();