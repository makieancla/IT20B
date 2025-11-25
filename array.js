class Arry{
    constructors(initialData){
        this.data ={};
        this.length = 0;
        
        //Assign element to index
        for(let i=0; i<initialData.length; i++){
            this.data[i] = initialData[i];
            this.length++;

        }
        
    }

    traverse(){
        let output ="";

        for(let i=0; i<this.length; i++){
            output + "";
        }

        console.log(output);
    }

    insert(index, element){
        //correcting Statement
        if (index <o || index > this.length){
            console.log("Invalid Index");
            return;
        }

        //shifting condition
        for(let i=this.length; i>index; i--){
            this.data[i] = this.data[i-1];
        }

        //after condition
        this.data[index] = element;
        this.length++;
    }

    delete(index){

       
        //correcting Statement
       if(index < 0 || index >= this.length){
            console.log("Invalid Index");
            return;
        }
         //shifting condition
        for(let i=this.length; i<index; i++){
            this.data[i] = this.data[i-1];
        }

        //AFTER conditon
     delete this.data[this.length-1];
        this.length--;

    }
      search(element){
        for(let i=0; i < this.length;i++){
            if(this.data[i] === element){
                console.log(element + " is found at index "+ i);
                return i;
            }
        }

        console.log(element + " is not found at any index ");
        return -1;
    }

}


//
arr1 = new Array([4,2,3]);

arr1.traverse();
arr1.update(1,50);
arr1.traverse();
arr1.delete(0);
arr1.traverse();