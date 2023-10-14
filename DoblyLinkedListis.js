
const Node = require('./Node.js');

class DoublyLinkedLists{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    // The push method takes a value as a parameter and assigns it as the tail of the list
    push(value){
        const newNode = new Node(value);

        if (!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
    }

    // The pop method removes the tail of the list
    pop(){
        if(!this.head){
            throw new Error("List is empty");
        }

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
            return;
        }

        this.tail = this.tail.prev;
        this.head.next = null;

        return;
    }

     // The shift method removes the head of the list
    shift(){
        if(!this.head){
            throw new Error("List is empty");
        }

        if(this.head === this.tail){
            this.head = null;
            this.tail = null;
            return true;
        }

        // this.head = this.head.prev;
        // this.head.next = null;

        this.head = this.head.next;
        this.head.prev = null;
        return true;
    }

    // The unshift method takes a value as a parameter and assigns it as the head of the list
    unshift(value){
        const newNode = new Node(value);

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.next = this.head;
            this.head.prev = newNode;
            newNode.prev = this.tail;
        }
    }

    // The get method takes an index number as a parameter and returns the value of the node at that index
    get(index){
        if (index < 0) {
            throw new Error("Invalid index"); // Invalid index
        }

        let current = this.head;
        let currentIndex = 0;

        while (current !== null && currentIndex < index) {
            current = current.next;
            currentIndex++;
        }
    
        if (current !== null) {
            return current.value;
        } else {
            throw new Error("Index out of range"); // Index out of range
        }
    }

     // The set method takes an index number and a value as parameters, and modifies the node value at the given index in the list
    set(index, value){
        if (index < 0) {
            throw new Error("Invalid index"); // Invalid index
        }
    
        let current = this.head;
        let currentIndex = 0;
    
        while (current !== null && currentIndex < index) {
            current = current.next;
            currentIndex++;
        }
    
        if (current !== null) {
            current.value = value;
        }
    }

    // The insert method takes an index number and a value as parameters, and inserts the value at the given index in the list. It returns true on successful insert or false
    insert(index, value){
        if (index < 0) {
            throw new Error("Invalid index"); // Invalid index
        }
      
        if (index === 0) {
            // Insert at the head of the list
            const newNode = new Node(value);
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
            return true;
        }
      
        let current = this.head;
        let currentIndex = 0;
      
        while (current !== null && currentIndex < index - 1) {
            current = current.next;
            currentIndex++;
        }
      
        if (current !== null) {
            const newNode = new Node(value);
            newNode.prev = current;
            newNode.next = current.next;
            if (current.next) {
                current.next.prev = newNode;
            } else {
                this.tail = newNode;
            }
            current.next = newNode;
            return true;
        }
      
          return false; // Index out of range
    }

     // The remove method takes an index number as a parameter and removes the node at the given index in the list
    remove(index){
        if (index < 0) {
            throw new Error("Invalid index"); // Invalid index
        }
      
        if (index === 0) {
            // Remove the head of the list
            if (this.head === this.tail) {
              // If there's only one node in the list, clear the list
                this.head = null;
                this.tail = null;
            } else {
                this.head = this.head.next;
                this.head.prev = null;
            }
            return true;
        }
      
        let current = this.head;
        let currentIndex = 0;
      
        while (current !== null && currentIndex < index) {
            current = current.next;
            currentIndex++;
        }
      
        if (current !== null) {
            if (current === this.tail) {
                // Remove the tail of the list
                this.tail = this.tail.prev;
                this.tail.next = null;
            } else {
                current.prev.next = current.next;
                current.next.prev = current.prev;
            }
            return true;
        }
      
          return false; // Index out of range
    }

     // Function to print the list (for testing purposes)
    printList() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

module.exports = DoublyLinkedLists;