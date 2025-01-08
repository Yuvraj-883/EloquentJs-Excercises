function isEven(num){
    if(num<0){
        num*= -1;
    }
    if(num===0){
        return true;
    }
    else if(num===1){
        return false;
    }
    return isEven(num-2); 

}


let ans= isEven(75); 

console.log(ans);
ans = isEven(80);
console.log(ans);
ans = isEven(-3);
console.log(ans);

ans = isEven(-8);
console.log(ans);
