function loop(value, test, update, body){
    for(let start=value; test(start); start=update(start)){
        body(start); 
    }
}

loop(1, n=>n<=5, n=> n+1, console.log );