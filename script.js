'use strict';


//1
const promiseToDo = fetch("https://jsonplaceholder.typicode.com/users/1/todos");

promiseToDo
.then((response) => {
    return response.json();
    })
    .then ((user) => {
    console.log(user);
    });

//2
const promiseToDoTitle = fetch("https://jsonplaceholder.typicode.com/users/1/todos");

promiseToDoTitle
   .then((response) => {
        return response.json();
    })
    .then ((user) => {
        let allListToDo = "";
        for(let i = 0; i < user.length; i++) {
            allListToDo = allListToDo + " " + user[i].title;
        }
        console.log(allListToDo);
    });


//3
const promiseToDoCompleted = fetch("https://jsonplaceholder.typicode.com/users/1/todos");

promiseToDoCompleted
   .then((response) => {
        return response.json();
    })
    .then ((user) => {
        let allCompletedTrue = user.filter(item => item.completed === true);
        
        console.log(allCompletedTrue);
    });


//4

const promiseToDoReduce = fetch("https://jsonplaceholder.typicode.com/users/1/todos");

promiseToDoReduce
   .then((response) => {
        return response.json();
    })
    .then ((user) => {
        let allCompletedTrueReduce = 0;
        let allCompletedFalseReduce = 0;
        for(let i = 0; i < user.length; i++) {
        
            if(user[i].completed === true) {
            allCompletedTrueReduce = allCompletedTrueReduce + 1;
        } if (user[i].completed === false) {
            allCompletedFalseReduce = allCompletedFalseReduce + 1;
        }
    }
        let result = {
            completed: allCompletedTrueReduce,
            uncompleted: allCompletedFalseReduce
        }
        console.log(result);
    });