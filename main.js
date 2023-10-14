const DoublyLinkedLists = require('./DoblyLinkedListis.js');

const myList = new DoublyLinkedLists();

myList.push(1); // add node in linked list 
myList.push(2);
myList.push(3);
myList.push(4);
myList.push(5);
myList.printList();
console.log('----------------------------');

myList.pop(); // remove last node (tail)
myList.printList();

myList.shift(); // remove first node (head)
myList.printList();

myList.unshift(6); // add node on first linkedList (as head)
myList.printList();

myList.get(3);
myList.printList();

myList.set(2, 7);
myList.printList();

myList.insert(4, 8);
myList.printList();

myList.remove(1);
myList.printList();

