const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  get size() {
    return this.length;
  }

  enqueue(element) {
    const newEl = new ListNode(element);
    newEl.next = this.head;
    this.head = newEl;
    this.length += 1;
  }

  dequeue() {
    let cur = this.head;
    let prev = cur;
    while (cur.next) {
      prev = cur;
      cur = cur.next;
    }
    prev.next = cur.next;
    this.length -= 1;
    return cur.value;
  }
}

// const queue = new Queue();
// queue.enqueue(5);
// console.log(queue.dequeue());
// queue.dequeue();
// queue.enqueue(5);
// queue.enqueue(6);
// queue.enqueue(7);
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// queue.enqueue(9);
// console.log(queue.dequeue());
// queue.enqueue(15);
// queue.enqueue(16);
// queue.enqueue(17);
// console.log(queue.dequeue());
// console.log(queue);

// // const queue = new Queue();
// // queue.enqueue(1); // adds the element to the queue
// // queue.enqueue(3); // adds the element to the queue
// // queue.enqueue(5); // adds the element to the queue
// // queue.enqueue(7); // adds the element to the queue
// // queue.enqueue(9); // adds the element to the queue
// // // queue.dequeue(); // returns the top element from queue and deletes it, returns 1
// // console.log('🚀 ~ file: 14-queue.js ~ line 46 ~ queue.dequeue()', queue.dequeue());

// // dequeue() {
// //   let prev = null;
// //   let cur = this.head;
// //   while (cur.next) {
// //     prev = cur;
// //     cur = cur.next;
// //   }
// //   prev.next = null;
// //   this.length -= 1;
// //   return cur.value;
// // }

module.exports = Queue;
