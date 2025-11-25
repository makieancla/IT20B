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
       insert(index, element){
        //correcting Statement
        if (index <o || index > this.length){
            console.log("Invalid Index");
            return;
        } 

         //shifting condition
        for(let i=this.length; i<index; i++){
            this.data[i] = this.data[i-1];
        }

        //AFTER conditon
        delete this.data[this.length -1];
        this.length--;
    }
    
    
//

arr1 =new Arry(4,2,3);

arr1.traverse();