function countChars(str, key){
    let count = 0;
    for(let i=0; i<str.length; i++){
        let temp = str[i];
        if(temp===key){
            count++;
        }
    }
    console.log(count);
}

function countBs(str){
    countChars(str, 'B');
}

countChars("aBBcdBks", 'c');

countBs('aBBcdBe');