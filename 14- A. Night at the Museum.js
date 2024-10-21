class Node {
    constructor(val) {
        this.data = val
        this.next = null
        this.last = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    addItem(val) {
        let node = new Node(val)
        if (this.head == null) {
            this.head = node
            this.tail = node
        } else {
            node.last = this.tail
            node.next = this.head
            this.tail.next = node
            this.head.last = node
            this.tail = node
        }
        return node
    }

    getNode(data) {
        let curr = this.head
        while (curr.data !== data) {
            curr = curr.next
        }
        return curr
    }

    getMinDist(start, dist) {
        // const nodeStart = this.getNode(start)
        // const nodeEnd = this.getNode(dist)
        let next = this.getThroughNext(this.getNode(start), this.getNode(dist));
        let back = this.getThroughLast(this.getNode(start), this.getNode(dist));
        return next <= back ? next : back;
    }

    getThroughNext(start, dist) {
        let count = 0
        while (start.data !== dist.data) {
            count++
            start = start.next
        }
        return count
    }

    getThroughLast(start, dist) {
        let count = 0
        while (start.data !== dist.data) {
            start = start.last
            count++
        }
        return count
    }

    printList(start) {
        if (!start) {
            console.log("List is empty");
            return;
        }

        let current = start;
        let data = [];
        do {
            data.push(current.data);
            current = current.next;
        } while (current !== start);
        console.log(data)
    }

}

let dd = new DoublyLinkedList()
for (let i = 0; i < 26; i++) {
    const char = String.fromCharCode(97 + i); // 97 is the ASCII code for 'a'
    dd.addItem(char);
}
let input = ""
process.stdin.on("data", (data) => {
    if (data.toString().trim() === "end") {
        process.stdin.emit("end")
    }

    input += data
})
process.stdin.on("end", () => {
    let word = input.toString().trim().replace(/\r/g, "")
    let counter = 0
    for (let i = 0; i < word.length - 1; i++) {

        counter += dd.getMinDist(word[i], word[i + 1])
    }
    console.log(counter)
})