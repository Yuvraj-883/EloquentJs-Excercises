function range(start, end, step=1){
    let arr = [];
    for(let i = 0; i+start<=end; i+=step){
        arr[i] = i+start;
    }  
    // printArray(arr);
    // sum(arr); 
    return arr; 
}

function printArray(arr){
    arr.forEach(element => {
        console.log(element);
    });
}

function sum (arr){
    let sum = 0; 
    arr.forEach(el=>{
        sum+=el;
    });
    console.log(sum); 

}
sum(range(1,10,2)); 