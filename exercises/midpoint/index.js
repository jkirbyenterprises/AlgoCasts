// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

function midpoint(list) {
    let slow = list.getFirst();
    let fast = list.getFirst();

    while(fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

// Based on Grider explaination
// function midpoint(list) {
//     let slowIndex = 0, fastIndex = 0;
//     let slow = list.getAt(0);
//     let fast = list.getAt(0);

//     while(fast && fast.next && fast.next.next) {
//         slowIndex++;
//         fastIndex+=2;
        
//         slow = list.getAt(slowIndex);
//         fast = list.getAt(fastIndex);
//     }
//     return slow;
// }

// My first solution (cheated and used size)
// function midpoint(list) {
//     const size = list.size() - 1;
//     const midpoint = Math.floor(size / 2);
//     return list.getAt(midpoint);
// }

module.exports = midpoint;
