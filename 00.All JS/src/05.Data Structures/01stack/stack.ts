export interface StackType<T> {
  push(value: T): void;
  pop(): T | undefined;
  peek(): T|undefined;
  data: T[]
}
class Stack<T> implements StackType<T> {
  constructor(public data:T[] = [] ){}
  //push adds record in the end of the stack
  push(record:T){
    this.data.push(record);
  }
  //pop removes record from the start of the stack
  pop(){
    return this.data.pop();
  }
  //peek returns the last record in the queue
  peek(){
    return this.data[this.data.length - 1];
  }
}
export default Stack;
const stack=new Stack()
stack.push(1);
stack.push(2);
stack.push(3);
//1
// stack.dequeue()
console.log(
 stack.pop()
)
