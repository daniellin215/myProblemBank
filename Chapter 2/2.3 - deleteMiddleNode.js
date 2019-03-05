// 2.3 
var LinkedList = function(val) {
  this.val = val;
  this.next = null;
};


const fn = (node) => {
  while (node && node.next) {
    node.val = node.next.val;
    console.log('changed to ', node.val)
    if (!node.next.next) {
      node.next = null;
    }
    node = node.next;
  }
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
fn(c);
printList(a);