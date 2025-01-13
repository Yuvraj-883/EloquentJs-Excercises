class Vector {
    constructor (x, y){
        this.x = x;
        this.y = y;
    }

    plus(vec){
        this.x+=vec.x; 
        this.y+=vec.y;
        return {x:this.x, y:this.y};

    }
    minus(vec){
        this.x-=vec.x; 
        this.y-=vec.y; 
        return {x:this.x, y:this.y};
    }

    getLength(){
        return Math.sqrt(this.x*this.x+this.y*this.y); 
    }
}

console.log(new Vector(2,3).plus(new Vector(4,5)));
console.log(new Vector(4,5).minus(new Vector(2,3))); 
console.log(new Vector(1, 9).getLength()); 