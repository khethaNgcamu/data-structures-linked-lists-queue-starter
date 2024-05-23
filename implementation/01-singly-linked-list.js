// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) { 
        // Add node of val to head of linked list
        let headNode = new SinglyLinkedNode(val);
        headNode.next = this.head;
        this.head = headNode;
        this.length++;
       
        // Write your hypothesis on the time complexity of this method here

        // Time complexity: O(1)
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here

        // Add node of val to tail of linked list
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            return this.head;
        }

        let curr = this.head;
        while (curr.next) {
            curr = current.next;
        }
        curr.next = newNode;

        this.length++
       // return this.head;
    }

    removeFromHead() {
        // Remove node at head
        if(!this.head){
            return null;
        }

        const removedNode = this.head;
        this.head = this.head.next;

        this.length--;

        return removedNode.value;

        // Write your hypothesis on the time complexity of this method here

        // Time complexity: O(1)
    }

    removeFromTail() {
        // Remove node at tail
    if (!this.head) return null; // If the list is empty, return null

    if (this.head.next === null) { // If there's only one node in the list
        const removedNode = this.head;
        this.head = null; // Set head to null
        this.length--;
        return removedNode.value; // Return the value of the removed node
    }

    let curr = this.head;
    while (curr.next.next) { // Stop at the second-to-last node
        curr = curr.next; // Move to the next node
    }

    const removedNode = curr.next; // This is the last node
    curr.next = null; // Remove the last node by setting the next pointer of the second-to-last node to null
    this.length--; // Decrease the length of the list

    return removedNode.value; // Return the value of the removed node

    // Write your hypothesis on the time complexity of this method here

    // Time complexity: O(n)
    }

    peekAtHead() {
        // Return value of head node
        if(!this.head) return null;

        return this.head.value;

        // Write your hypothesis on the time complexity of this method here

        // Time complexity: O(1)
    }

    print() {
        // Print out the linked list
        if(!this.head) return null;
           
        let curr = this.head;
        while(curr){
            console.log(curr.value);
            curr = this.head;
        }
        
        // Write your hypothesis on the time complexity of this method here

        // Time complexity: O(n)
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
