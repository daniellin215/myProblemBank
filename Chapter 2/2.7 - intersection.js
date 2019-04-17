// 2.7 intersect


var LinkedList = function(val) {
  this.val = val;
  this.next = null;
};

const fn = (nodeA, nodeB) => {
  let intersect = [];
  while (nodeA && nodeB) {
    if (nodeA.val === nodeB.val) {
      intersect.push(nodeA.val);
      if (nodeA.next !== nodeB.next) {
        console.log(nodeA.val, nodeB.val);
        return false;
      }
    }
    nodeA = nodeA.next;
    nodeB = nodeB.next;
  }
  return intersect[0];
}

/* TEST */

var a = new LinkedList('a');
var b = new LinkedList('b');
var c = new LinkedList('c');
var d = new LinkedList('d');
var e = new LinkedList('e');
var f = new LinkedList('f');
var g = new LinkedList('g');
var h = new LinkedList('h');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;
g.next = h;

var a1 = new LinkedList('a1');
var b1 = new LinkedList('b1');
var c1 = new LinkedList('c1');

a1.next = b1;
b1.next = c1;
c1.next = d;

var intersectNode = fn(a, a1);

console.log(intersectNode);