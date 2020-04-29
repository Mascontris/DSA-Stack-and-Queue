class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    push(data) {
        if (this.top === null) {
            this.top = new _Node(data, null);
            return this.top;
        }
        const node = new _Node(data, this.top);
        this.top = node;
    }

    pop() {
        const node = this.top;
        this.top = node.next;
        return node.data;
    }
}

function peek(list) {
    console.log(list.top)
}

function isEmpty(list) {
    if (list.top !== null) {
        console.log(false)
    } 
        console.log(true)
}

function display(list) {
    let currNode = list.top
    let newList = []
    while (currNode !== null) {
        newList.push(currNode.data)
        currNode = currNode.next
    }
    console.log(newList)
}

module.exports = {
    Stack,
    peek,
    isEmpty,
    display
}