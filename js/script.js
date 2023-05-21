// Creare ciclo for per far apparire in console numeri da 1 a 100


// Quando stampa multipli di 3 Fizz

// Quando stampa multipli di 5 buzz

// Quando stampa multipli di 3 e 5 fizzbuzz


let todo_list = document.getElementById('todo')

let todo_left = document.getElementById('todo-left')



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


for (let i = 1; i <= 100; i++){

    if ( (i % 3 === 0) && (i % 5 === 0)){

        todo_left.innerHTML += `<li>${'FizzBuzz'}</li>`;
        console.log("FizzBuzz")
    }

    else if (i % 3 === 0){

        todo_left.innerHTML += `<li>${'Fizz'}</li>`;
        console.log("Fizz");
    } 
    else if (i % 5 === 0){

        todo_left.innerHTML += `<li>${'Buzz'}</li>`;
        console.log("Buzz");

    }
    
    else{

        todo_left.innerHTML += `<li>${i}</li>`;
        console.log(i)
    }
}

