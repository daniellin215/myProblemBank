//2.6 check Palindrome

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

const fn = (node) => {
  let nodeA = node;
  let nodeB = reverseList(node);
  // console.log('a' + nodeA.val + 'b' + nodeB.val);
  while(nodeA && nodeB) {
    if (nodeA.val !== nodeB.val) {
      return false;
    }
    nodeA = nodeA.next;
    nodeB = nodeB.next;
  }
  return true;
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
var c = new LinkedList('b');
var d = new LinkedList('a');


a.next = b;
b.next = c;
c.next = d;


printList(a);
fn(a);



