/** Class representing a Stack. */
class Stack {

  constructor() {
    this._storage = {};
    this._size = 0;
  }
  /*
  * Adds a new value at the end of the stack
  * @param {*} value the value to push
  */
  push(value) {
    this._size ++;
    this._storage[this._size] = value;
  }

  /*
  * Removes the value at the end of the stack and returns it
  * @return {*} the last and newest value in the stack
  */
  pop() {
    if(this._size){
      const results = this._storage[this._size];
      delete this._storage[this._size];
      this._size --;
      return results;
    }
  }
  /*
  * Returns the value at the end of the stack without removing it
  * @return {*} the last and newest value in the stack
  */
  peek() {
    if(this._size){
      return this._storage[this._size];
    }
  }

  size() {
    return this._size;
  }

  empty() {
    this._storage = {};
    this._size = 0;
  }

  swap() {
    const temp = this._storage[this._size];
    this._storage[this._size] = this._storage[this._size - 1];
    this._storage[this._size - 1] = temp;
  }
}

/** Class representing a Queue.
 * @constructor
 */
class Queue {

  constructor() {
    this._storage = {};
    this._head = 0;
    this._size = 0;
  }
  /*
  * Enqueues a new value at the end of the queue
  * @param {*} value the value to enqueue
  */
  enqueue(value) {
    this._storage[this._size + this._head] = value;
    this._size++;
  }

  /*
  * Dequeues the value from the beginning of the queue and returns it
  * @return {*} the first and oldest value in the queue
  */
  dequeue() {
    if(this._size) {
      const results = this._storage[this._head];
      delete this._storage[this._head];
      this._size--;
      this._head++;
      return results;
    }
  }
  /*
  * Returns the value at the beginning of the queue without removing it from the queue
  * @return {*} the first and oldest value in the queue
  */
  peek() {
    if(this._size) {
      return this._storage[this._head];
    }
  }

  size() {
    return this._size;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/** Class representing a Linked List */
class LinkedList {

  constructor(initialValue) {
    this.head = null;
    this.tail = null;

    if(initialValue) this.insert(initialValue);
  }

  /*
  * Inserts a new value to the end of the linked list
  * @param {*} value - the value to insert
  */
  insert(value) {
    if(this.head) {
      this.tail.next = new Node(value);
      this.tail = this.tail.next;
    } else {
      this.head = new Node(value);
      this.tail = this.head;
    }
  }

  /*
  * Deletes a node
  * @param {*} node - the node to remove
  * @return {*} value - the deleted node's value
  */
  remove(node) {
    let beforeCurrentNode = null;
    let currentNode = this.head;

    while(currentNode.next && currentNode !== node) { // handling general case
      beforeCurrentNode = currentNode;
      currentNode = currentNode.next;
    }

    if(!beforeCurrentNode) {
      this.head = currentNode.next;
    } else if(!currentNode.next) {
      this.tail = beforeCurrentNode;
      this.tail.next = null;
    } else if(beforeCurrentNode && currentNode) {
      beforeCurrentNode.next = currentNode.next;
    }

  }

  /*
  * Removes the value at the end of the linked list
  * @return {*} - the removed value
  */
  removeTail() {
    let currentNode = this.head;
    while(currentNode.next !== this.tail) {
      currentNode = currentNode.next;
    }

    this.tail = currentNode;
    this.tail.next = null;
  }

  search(value) {
    let results = [];
    let currentNode = this.head;
    while(currentNode.next) { // handling general case
      if (currentNode.value === value) results.push(currentNode);
      currentNode = currentNode.next;
    }

    if(currentNode.value === value) results.push(currentNode); //handling begin-end of list

    return results;
  }

  /*
  * Searches the linked list and returns true if it contains the value passed
  * @param {*} value - the value to search for
  * @return {boolean} - true if value is found, otherwise false
  */
  contains(value) {
    let currentNode = this.head;
    while(currentNode.next && currentNode.value !== value) {
      currentNode = currentNode.next;
    }

    return currentNode.value === value;
  }

  /*
  * Checks if a node is the head of the linked list
  * @param {{prev:Object|null, next:Object|null}} node - the node to check
  * @return {boolean} - true if node is the head, otherwise false
  */
  isHead(node) {
    return node === this.head;
  }

  /*
  * Checks if a node is the tail of the linked list
  * @param {{prev:Object|null, next:Object|null}} node - the node to check
  * @return {boolean} - true if node is the tail, otherwise false
  */
  isTail(node) {
    return node === this.tail;
  }
}

/** Class representing a Hash Table */
class HashTable {
  constructor(size) {
    this._size = size;
    this._storage = [];
  }
  /*
  * Inserts a new key-value pair
  * @param {string} key - the key associated with the value
  * @param {*} value - the value to insert
  */
  insert(key, value) {
    const hash = this._hash(key);
    this._storage[hash] = value;
  }

  /*
  * Deletes a key-value pair
  * @param {string} key - the key associated with the value
  * @return {*} value - the deleted value
  */
  remove(key) {
    const hash = this._hash(key);
    const result = this._storage[hash];
    delete this._storage[hash];
    return result
  }

  /*
  * Returns the value associated with a key
  * @param {string} key - the key to search for
  * @return {*} - the value associated with the key
  */
  retrieve(key) {
    const hash = this._hash(key);
    return this._storage[hash];
  }

  /*
  * Hashes string value into an integer that can be mapped to an array index
  * @param {string} str - the string to be hashed
  * @param {number} n - the size of the storage array
  * @return {number} - an integer between 0 and n
  */
  _hash(str) {
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
      sum += str.charCodeAt(i) * 3;
    }

    return sum % this._size;
  }
}

export {
  Stack,
  Queue,
  LinkedList,
  HashTable
}