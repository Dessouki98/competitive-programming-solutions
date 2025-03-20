let input = "";
process.stdin.on("data", (data) => {
    if (data.toString().trim() === "end") {
        process.stdin.emit("end")
    }
    input += data.toString();

})

process.stdin.on("end", () => {
    let n = Number(input.split("\n")[0].trim());
    let circ = new CircularArray(n)
    let i = 0;
    const colors = ["R", "O", "Y", "G", "B", "I", "V"];
    while (circ.circArr.length < n) {
        circ.addElement(colors[i % 7], circ.circArr.length);
        i++;
    }
    console.log(circ.print());
})

class CircularArray {

    constructor(size) {
        this.first = null;
        this.last = null;
        this.size = size;
        this.circArr = [];
    }

    addElement(color) {
        this.temp = new Node(color, this.circArr.length);
        if (this.circArr.length === 0) {
            this.first = this.temp;
            this.last = this.temp;
            this.first.next = this.last
            this.first.prev = this.last;
            this.circArr.push(this.temp)

        } else {
            if (this.checkAval(color)) {
                this.temp.prev = this.last
                this.temp.next = this.first;
                this.temp.prev.next = this.temp;
                this.temp.next.prev = this.temp;
                this.last = this.temp;
                this.circArr.push(this.temp)
            }
        }
    }

    checkAval(node) {
        this.current = this.last
        this.currentPrev = this.last

        for (let i = 0; i < 4; i++) {
            if (this.current.getColor() === node) return false
            this.current = this.current.next
        }
        for (let i = 0; i < 3; i++) {
            if (this.currentPrev.getColor() === node) return false
            this.currentPrev = this.currentPrev.prev
        }
        return true;
    }

    print() {
        let arr = []
        for (let i = 0; i < this.circArr.length; i++) {
            arr.push(this.circArr[i].getColor())
        }
        return arr.join("");
    }
}

class Node {
    constructor(color, index) {
        this.color = color;
        this.index = index;
        this.next = null;
        this.prev = null
    }

    getColor() {
        return this.color;
    }

    getindex() {
        return this.index;
    }

    getNext() {
        return this.next;
    }

    getPrevious() {
        return this.prev;
    }
}