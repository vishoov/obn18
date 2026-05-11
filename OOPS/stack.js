class Stack{
    constructor(){
        this.item = [];
    }
    push(items){
        //push the elements into the array
       this.item.push(items);

    }
    pop(){
        //print and remove the element
        if(this.isEmpty()){
            return "Stack is Empty";
        }
        return this.item.pop();

    }
    isEmpty(){
        //check whether the stack is empty or not
        return this.item.length===0;
    }
    peek(){
        //returns the topmost element
        if(this.isEmpty()){
            return "Stack is Empty";
        }
        return this.item[this.item.length-1];

    }
    clear(){
        //empties the stack
        this.item = [];

    }
    print(){
        //print the stack elements
        console.log(this.item.join(" "));
    }
}

const st = new Stack();
st.push(1)
st.push(2)
st.push(4)
st.print();
st.push(7);
st.print()
st.pop();
