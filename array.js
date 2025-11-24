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
}

//

arr1 =new Arry(4,2,3);

arr1.traverse();