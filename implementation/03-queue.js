const { SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(val) {
        // Add node to end of queue (linked list)
        let newNode = new SinglyLinkedNode(val);

        if (this.tail) {
            this.tail.next = newNode;
        } else {
            this.head = newNode;
        }
        this.tail = newNode;
        this.length++;

        return this.length;

        // Write your hypothesis on the time complexity of this method here

        // Hypothesis: Time complexity of this method is O(1)
    }

    dequeue() {
        // Remove node from front of queue (linked list)
        if (!this.head) {
            return null;
        }

        let removedNode = this.head;
        this.head = this.head.next;

        if (!this.head) {
            this.tail = null;
        }
        this.length--;
        return removedNode.value;
    
        
        // Write your hypothesis on the time complexity of this method here

        // Hypothesis: Time complexity of this method is O(1)
    }

}

module.exports = {
    Queue,
    SinglyLinkedNode
}
