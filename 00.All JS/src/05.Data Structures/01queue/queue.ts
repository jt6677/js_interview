export interface QueueType<T> {
  enqueue(value: T): void;
  dequeue(): T | undefined;
  peek(): T|undefined;
  data: T[]
}
class Queue<T> implements QueueType<T> {
  constructor(public data:T[] = [] ){}
  //enqueue or enqueue adds record in the start of the queue
  enqueue (record:T){
    this.data.unshift(record);
  }
  //remove or dequeue removes record from the end of the queue
  dequeue(){
    return this.data.pop();
  }
  //peek returns the last record in the queue
  peek(){
    return this.data[this.data.length - 1];
  }
}
export default Queue;
const queue = new Queue([1,2]);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
//1
// queue.dequeue()
console.log(
 queue.peek()
)
