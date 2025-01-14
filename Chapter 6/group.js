class Group{
    constructor(){
        this.arr = []; 
    }
    has(el){
        return this.arr.includes(el); 
    }
    add(el){
        if(!this.arr.includes(el)){
            this.arr.push(el);
            return `${el} added to the set`;
        }
        else{
            console.log("Element already exists in the set"); 
        }

    }
    delete(el){
        if(this.arr.includes(el)){
        this.arr = this.arr.filter(num=>num!=el);
        return `${el} deleted from the group`;
        }
        else{
            return `${el} doesn't exist in the set`;
        }
    }

    static populate(start, end){
        let arr = new Group(); 
        for(let i = start; i<=end; i++){
            arr.add(i)
        }
        return arr; 
    }
    
}

let group = Group.populate(10,20); 
console.log(group.has(11));
console.log(group.delete(12));
console.log(group.has(12));
console.log(group.add(13));
console.log(group.delete(24));
