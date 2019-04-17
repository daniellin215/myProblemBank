// reverse linkedList
var LinkedList = function(val) {
  this.val = val;
  this.next = null;
};


const reverseList = (node) => {
  //declare a storage for next
  let prev = null;
  //while loop to step through
  while(node) {
    //save next to storage
    let next = node.next;
    //set current to point to previous
    node.next = prev;
    //step prev forward
    prev = node;
    //step current node forward
    node = next;
  }
  return prev;
}

/* TEST */

var printList = function(head) {
  while(head !== null) {
    console.log(head.val);
    head = head.next;
  }
  console.log('done printing');
};

var a = new LinkedList('a');
var b = new LinkedList('b');
var c = new LinkedList('c');
var d = new LinkedList('d');
var e = new LinkedList('e');
var f = new LinkedList('f');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

printList(a);
reverseList(a);
printList(f);