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

    pop(){
        //correcting statement
        if(this.is_empty()) return nullll
         let value = this.data[this.topIndex];
        delete this.data[this.topIndex];
        this.topIndex--;
        return value;

    }
}
//

let stack1 = new Stack();
    
stack1.push(4);
stack1.push(2);
stack1.push(3);
stack1.push(5);
stack1.push(8);
console.log("the current size is" +stack1.is_empty());
console.log("the top element is" +stack1.size());
console.log("The top element"+stack1.peek());
console.log("Top element "+ stack1.pop() + " is popped, the new top element is " + stack1.peek());
console.log("the new stack size is" +stack1.size());