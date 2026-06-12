class Queue{
  constructor(){
    this.items=[]
  }

  enqueue(element){
    this.items.push(element);
  }

  dequeue(){
    if(this.isEmpty()){
      return "Queue is Empty!"
    }else{
      return this.items.shift();
    }
  }
    front(){
      if(this.isEmpty()){
        return "Queue is empty";
      }
      return this.items[0];
  }

  size(){
    return this.items.length;
  }

  print(){
    console.log(this.items);
  }

  isEmpty(){
    return this.items.length==0;
  }
}


const q = new Queue();

q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.enqueue(4)
q.dequeue();
q.dequeue();
console.log(q.size());
q.print();


// check if a queue is a palindrome

const qu = new Queue();
qu.enqueue(1)
qu.enqueue(2)
qu.enqueue(2)
qu.enqueue(1)
console.log(qu)
// isPalindrome(qu) true

function isPalindrome(queue){
  const arr = []
  while(!queue.isEmpty()){
    arr.push(queue.dequeue());
  }

  const reversed = [...arr].reverse();

  return arr.join('')==reversed.join('');
}

console.log(isPalindrome(qu));


