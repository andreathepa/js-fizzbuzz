// Creare ciclo for per far apparire in console numeri da 1 a 100


// Quando stampa multipli di 3 Fizz

// Quando stampa multipli di 5 buzz

// Quando stampa multipli di 3 e 5 fizzbuzz

//BONUS 1


 let todo_list = document.getElementById('todo')




 for (let i = 1; i <= 100; i++){

     if ( (i % 3 === 0) && (i % 5 === 0)){

         todo_list.innerHTML += `<li>${'FizzBuzz'}</li>`;
         console.log("FizzBuzz")
     }

     else if (i % 3 === 0){

         todo_list.innerHTML += `<li>${'Fizz'}</li>`;
         console.log("Fizz");
     } 
     else if (i % 5 === 0){

         todo_list.innerHTML += `<li>${'Buzz'}</li>`;
         console.log("Buzz");

     }
    
     else{

         todo_list.innerHTML += `<li>${i}</li>`;
         console.log(i)
     }
 }


//////////////////////////////////////////////////////////////////////////////////////


let todo_left = document.getElementById('todo-left')

let button = document.getElementById('add-task')

for (let i = 1; i <= 100; i++){

    if ( (i % 3 === 0) && (i % 5 === 0)){

        console.log("FizzBuzz")
    }

    else if (i % 3 === 0){

        // todo_left.innerHTML += `<li>${'Fizz'}</li>`;
        console.log("Fizz");
    } 
    else if (i % 5 === 0){

        // todo_left.innerHTML += `<li>${'Buzz'}</li>`;
        console.log("Buzz");

    }
    
    else{

        // todo_left.innerHTML += `<li>${i}</li>`;
        console.log(i)
    }
}

button.addEventListener('click', function(){
    let text_task = document.getElementById('task').value;
    let new_task = document.createElement('li');
    new_task.innerText = text_task;

    todo_left.append(new_task);

    
})

