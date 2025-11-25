class Stack{
    constructor(){
        this.data ={};
        this.topIndex = -1;
    }

    traverse(){
        let output = "";
        for(let i=0; i<=this.topIndex; i++){
            output += this.data[i] + " "; 
        }

        console.log(output);
    }
    is_empty(){
        return this.topIndex ==-1;
    }

    size(){
        return this.topIndex+1;
    }

    peek(){
        //correcting statement
        return this.data[this.topIndex];
    }
}
//

let stack1 = new Stack();

console.log(stack1.is_empty());
stack.empty()
stack1.push(4);
stack1.push(2);
stack1.push(3);
stack1.push(5);
stack1.push(8);
console.log(stack1.is_empty());
console.log(stack1.size());
console.log("The top element"+stack1.peek());