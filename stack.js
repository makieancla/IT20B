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
}
//

let stack1 = new Stack();

stack.empty()
stack1.push(4);
stack1.push(2);
stack1.push(3);
stack1.traverse(1);