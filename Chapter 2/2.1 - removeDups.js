// CTCI 2.1
const fn = (head) => {
  let curr = head; let runner = curr;
  while (curr !== null) {
    while (runner.next !== null) {
      if (runner.next === curr.val) {
        if (runner.next.next !== null){
          runner.next = runner.next.next;
        }
        runner.next = null;
      }
      runner = runner.next;
    }
    curr = curr.next;
  }
}
class LinkedList {
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

let one = new LinkedList('a');
let two = new LinkedList('b');
let three = new LinkedList('c');
let four = new LinkedList('a');
let five = new LinkedList('d');

one.next = two;
two.next = three;
three.next = four;
four.next = five;
fn(one);
console.log(three.next);