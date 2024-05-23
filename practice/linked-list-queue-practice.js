// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(head = null) {
        this.head = head;
    }

    addToTail(val) {
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            return this.head;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }

        curr.next = newNode;
        return this.head;
    }

    listLength() {
        // Returns the length of the list
        let count = 0;
        let curr = this.head;

        while (curr) {
            count++;
            curr = curr.next;
        }

        return count;
        // Time Complexity: O(n)
        // Implement in O(n) and in O(1) time complexity
    }

    sumOfNodes() {
        // Returns the sum of the values of all the nodes
        let sum = 0;
        let curr = this.head;

        while(curr){
            sum += curr.value;
            curr = curr.next;
        }

        return sum;

        // Write your hypothesis on the time complexity of this method here

        // Time Complexity: O(n)
    }

    averageValue() {
        // Returns the average value of all the nodes
        let sum = 0;
        let curr = this.head;

        while(curr){
            sum += curr.value;
            curr = curr.next;
        }

        let length = this.listLength(); // Call the listLength method to get the length of the list
        let average = length === 0 ? 0 : sum / length; // Handle division by zero when the list is empty
        return average;
        // Write your hypothesis on the time complexity of this method here

        // Time Complexity: O(n)
    }

    findNthNode(n) {
        // Returns the node at the nth index from the head
        let curr = this.head;
        let count = 0;
    
        while (curr !== null) {
            if (count === n) {
                return curr;
            }
            count++;
            curr = curr.next;
        }
    
        return null; // Return null if n is out of bounds

        // Time Complexity: O(n)
        // Write your hypothesis on the time complexity of this method here
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?
            let slow = this.head;
            let fast = this.head;
    
            while (fast && fast.next) {
                slow = slow.next;
                fast = fast.next.next;
            }
    
            return slow;

            // Time Complexity: O(n)
        // Write your hypothesis on the time complexity of this method here
    }

    reverse() {
        // Returns a new reversed version of the linked list

           // Returns a new reversed version of the linked list
           let newList = new SinglyLinkedList();
           let curr = this.head;
   
           while (curr) {
               let newNode = new SinglyLinkedNode(curr.value);
               newNode.next = newList.head;
               newList.head = newNode;
               curr = curr.next;
           }
   
           return newList;
           // Time Complexity: O(n)
        // Write your hypothesis on the time complexity of this method here
    }

    reverseInPlace() {
        // Reverses the linked list in-place
        let prev = null;
        let curr = this.head;

        while (curr) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        this.head = prev;

        // Time Complexity: O(n)
        // Write your hypothesis on the time complexity of this method here
    }
}

class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this.head;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;

        return this.head;
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?
            let slow = this.head;
            let fast = this.head;
    
            while (fast && fast.next) {
                slow = slow.next;
                fast = fast.next.next;
            }
    
            return slow;
            // Time Complexity: O(n)
        // Write your hypothesis on the time complexity of this method here
    }

    reverse() {
        // Returns a new reversed version of the linked list
        let newList = new DoublyLinkedList();
        let curr = this.tail;

        while (curr) {
            let newNode = new DoublyLinkedNode(curr.value);
            if (newList.head) {
                newNode.next = newList.head;
                newList.head.prev = newNode;
            } else {
                newList.tail = newNode;
            }
            newList.head = newNode;
            curr = curr.prev;
        }

        return newList;

        // Time Complexity: O(n)
        // Write your hypothesis on the time complexity of this method here
    }

    reverseInPlace() {
        // Reverses the linked list in-place
        let curr = this.head;
        let temp = null;

        while (curr) {
            temp = curr.prev;
            curr.prev = curr.next;
            curr.next = temp;
            curr = curr.prev;
        }

        if (temp) {
            this.head = temp.prev;
        }

        // Swap head and tail
        let tempHead = this.head;
        this.head = this.tail;
        this.tail = tempHead;

        // Time Complexity: O(n)
        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    SinglyLinkedNode,
    SinglyLinkedList,
    DoublyLinkedNode,
    DoublyLinkedList
}
