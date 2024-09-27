
//create functions to add to it ,remove from it and then display the array

const arrayOfStrings = ["john","joe","vincent","mike"];

//method to remove from array based off the index
let removeFromArray = (indexOfString) =>{
    
    arrayOfStrings.splice(indexOfString);
}

//created arrow function to add to array
let addTask = (string) =>{
    arrayOfStrings.push(string);
    console.log("Task has been logged into the array \n Number of elements = " + arrayOfStrings.length +"\n");

}

//displays all the tasks
let listAllTasks = () => {

    arrayOfStrings.forEach((item)=>{
        console.log(item);
    })
}

//method to delete tasks 
let deleteTask = (string) =>{
    var counter =-1 ;

    arrayOfStrings.forEach((item)=>{
        counter + 1;

        if(item == string){
            console.log(counter);
            arrayOfStrings.splice(counter,1);
        }
    })
    console.log("Task has been removed from the array \n Number of elements = " + arrayOfStrings.length +"\n");
}

addTask("Tasks");
listAllTasks();

deleteTask("Tasks");
listAllTasks();
