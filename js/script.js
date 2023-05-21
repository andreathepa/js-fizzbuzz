// Creare ciclo for per far apparire in console numeri da 1 a 100


// Quando stampa multipli di 3 Fizz

// Quando stampa multipli di 5 buzz

// Quando stampa multipli di 3 e 5 fizzbuzz




for (let i = 1; i <= 100; i++){

    if (i % 3 === 0){

        console.log("Fizz");
    } 
    if (i % 5 === 0){
        
        console.log("Buzz");

    }
    
    if ( (i % 3 != 0) && (i % 5 != 0)){

        console.log(i);
    }
}


