// class Stack {
// 	constructor(){
// 		this.items = [];
// 	}

// 	pushMethod(element){
// 		this.items.push(element);
// 	}

// 	isEmpty(){
// 		return this.items.length === 0;
// 	}

// 	peek(){
// 		return this.items[this.items.length - 1];
// 	}

// 	popMethod(){
// 		if(this.isEmpty()){
// 			return 'Underflow';
// 		}
// 		return this.items.pop();
// 	}

//     printStack(){
//         let str = "";
//         for (let i = 0; i < this.items.length; i++){
//             str += this.items[i] + " ";
//         }
//         return str;
//     }
// }

// const stack = new Stack()

// stack.pushMethod(10);
// stack.pushMethod(20);
// stack.pushMethod(30);

// console.log("Stack elements : ", stack.printStack());
// console.log("Popped elements : ", stack.popMethod());
// console.log("Stack elements after pop : ", stack.printStack());
// console.log("Top element of stack: ", stack.peek());
// console.log('---------------------');
// console.log("Popped elements : ", stack.popMethod());
// console.log("Stack elements after pop : ", stack.printStack());
// console.log("Top element of stack: ", stack.peek());
// console.log('---------------------');
// console.log("Popped elements : ", stack.popMethod());
// console.log("Stack elements after pop : ", stack.printStack());
// console.log("Top element of stack: ", stack.peek());
// console.log('---------------------');
// console.log("Popped elements : ", stack.popMethod());
// console.log("Stack elements after pop : ", stack.printStack());
// console.log("Top element of stack: ", stack.peek());

// Queue ---
// class Queue {
//     constructor(){
//         this.items = [];
//     }

//     enqueue(element){
//         this.items.push(element);
//     }

//     isEmpty(){
//         return this.items.length === 0;
//     }

//     front(){
//         if(this.isEmpty()){
//             return "No elements in Queue";
//         }
//         return this.items[0];
//     }

//     size(){
//         return this.items.length;
//     }

//     clear(){
//         this.items = [];
//     }

//     dequeue(){
//         if(this.isEmpty()){
//             return "Underflow";
//         }
//         return this.items.shift();
//     }

//     print(){
//         let str = ""
//         for(let i = 0; i < this.items.length; i++) {
//             str += this.items[i] + " ";
//         }
//         return str;
//     }
// }

// let queue = new Queue();

// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
// console.log('first head : ', queue.front());
// queue.dequeue();
// console.log('head after dequeue 10: ', queue.front());
// queue.dequeue();
// console.log('head after dequeue 20: ', queue.front());
// queue.dequeue();
// console.log('head after dequeue 30: ', queue.front());
// console.log(queue.dequeue());
// console.log('head after dequeue: ', queue.front());

// Set ---
// let mySet = new Set();

// mySet.add("a");
// mySet.add("b");
// mySet.add("c");

// console.log(mySet.has("c"));
// console.log(mySet.has("d"));

// mySet.clear();
// console.log('remove myset : ', mySet);

// let newSet = new Set(["apple", "banana", "orange"]);
// let duplicateSet = [...newSet];
// let entries = duplicateSet.entries();
// for (let keys of entries){
// 	console.log(keys);
// }
// console.log("---------------------");
// console.log(entries);
// console.log(entries.next().value);
// console.log(entries.next().value);

// let fruits = new Set(["apple", "banana", "orange"]);
// fruits.forEach((value) => {
//     console.log(typeof value);
// });

// Single Linked List ===
// class Node {
//     constructor (data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// class SingleLinkedList {
//     constructor(){
//         this.head = null;
//     }

//     add(data){
//         const newNode = new Node(data);
//         if(!this.head){
//             this.head = newNode;
//             console.log("this head : ", this.head);
//         } else {
//             let current = this.head;
//             console.log("current : ", current);
//             while(current.next){
//                 current = current.next
//             }
//             current.next = newNode;
//             console.log("last : ", current);
//         }
//     }

//     display(){
//         let current = this.head;
//         while(current) {
//             console.log(current.data);
//             current = current.next;
//         }
//     }
// }

// const sll = new SingleLinkedList ();
// sll.add(1)
// sll.add(2)
// sll.add(3)
// sll.display();

// Double Linked List ---
class Node {
    constructor(data){
        this.data = data
        this.prev = null;
        this.next = null;
    }
}

class DoubleLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }

    add(data){
        const newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
        }
        this.tail = newNode;
    }

    display(){
        let current = this.head
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }
}

const dll = new DoubleLinkedList()
dll.add(1);
dll.add(2);
dll.add(3);
dll.display();