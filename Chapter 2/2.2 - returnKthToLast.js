// 2. 2 

var LinkedList = function(value) {
  this.value = value;
  this.next = null;
};

// iterative
const fn = (head, k) => {
  let cur = head;
  if (!head || k < 1) return null;
  for (let i = 0; i < k; i++) {
    cur = cur.next;
  }
  return cur;
}

// can also do recursively

// test
var a = new LinkedList('1');
var b = new LinkedList('2');
var c = new LinkedList('3');
var d = new LinkedList('4');
var e = new LinkedList('5');
var f = new LinkedList('6');
var g = new LinkedList('7');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;

console.log(fn(a, 3));
