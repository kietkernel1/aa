
// STACKS
// first in last out
function Stack () {
    this.count = 0;
    this.storage = [];
    this.push = function(value) {
        this.storage[this.count] = value;
        this.count++
    };

    this.pop = function() {
        if( this.count === 0){
            return undefined
        }
        this.count--;
        let result = this.storage[this.count]
        delete this.storage[this.count]
        return result
    }

    this.size = function() {
        return this.count
    }

    this.peak = function(){
        return this.storage[this.count-1]
    }
}
let myStack = new Stack();

// Set
function Set (){
    this.collection = [];

    this.has = function (element){
        return this.collection.indexOf(element) !== -1
    }

    this.values = function (){
        return this.collection
    }

    this.add = function (element){
        if(!this.has(element)){
            this.collection.push(element)
            return true
        }
        return false
    }
    
    this.remove = function(element){
        if(this.has(element)){
            let index = this.collection.indexOf(element)
            this.collection.splice(index, 1)
            return true
        }
        return false
    }

    this.size = function(){
        return this.collection.length
    }

    // combine two sets
    this.union = function(otherSet){
        const unionSet = new Set();
        const firstSet = this.values();
        const secondSet = otherSet.values();

        firstSet.forEach( item =>
            unionSet.add(item)
        )
        secondSet.forEach(item =>
            unionSet.add(item)
        )
        return unionSet
    }

    this.intersection = function(otherSet){
        const interSet = new Set();
        const firstSet = this.values()

        firstSet.forEach(item =>{
            if(otherSet.has(item)){
                interSet.add(item)
            }
        })
        return interSet
    }

    this.difference = function(otherSet){
        const differSet = new Set();
        const firstSet = this.values();
        const secondSet= otherSet.values();
        firstSet.forEach(item =>{
            if(!otherSet.has(item)){
                differSet.add(item)
            }
        })
        secondSet.forEach(item =>{
            if(!this.has(item)){
                differSet.add(item)
            }
        })
        return differSet
    }

    this.subset = function(otherSet){
        const firstSet = this.values();
        return firstSet.every(item =>
            otherSet.has(item)
            )
    }
}

const mySet1 = new Set()
const mySet2 = new Set()
// mySet2.add(3)
// mySet2.add(4)
// mySet2.add(1)

// mySet1.add(1)
// // mySet1.add(2)
// const mySet= mySet1.subset(mySet2)
// console.log(mySet)
// console.log(mySet1.remove(3), mySet1.remove(1))
// console.log(mySet1.values(), mySet1.size())
// console.log(mySet1.has(4), mySet1.has(1))


// QUEUES
function Queue (){
    let collection = [];

    this.print = function(){
        console.log(collection)
    }

    this.enqueue = function(element){
        collection.push(element)
    }

    this.dequeue = function(){
        return collection.shift()
    }

    this.front = function(){
        return collection[0]
    }

    this.size = function(){
        return collection.length
    }

    this.isEmpty = function(){
        return collection.length === 0
    }
}

// const myQueue = new Queue()
// myQueue.enqueue("asb")
// myQueue.enqueue(1)
// myQueue.print()
// myQueue.dequeue()
// myQueue.print()

// PRIORITY QUEUE

function PriorityQueue (){
    let collection = []

    this.print = function(){
        console.log(collection)
    }

    this.enqueue = function(element){
        if(this.isEmpty()){
            collection.push(element)
        }else{
            let flag = false;
            for(let i = 0; i < collection.length; i++){
                if(collection[i][1] > element[1]){
                    collection.splice(i, 0, element)
                    flag = true;
                    break;
                }
            }

            if(!flag){
                collection.push(element)
            }
        }
    }

    this.dequeue = function(){
        return collection.shift()
    }

    this.front = function(){
        return collection[0]
    }

    this.size = function(){
        return collection.length
    }

    this.isEmpty = function(){
        return collection.length === 0
    }
}

const myPriorityQueue = new PriorityQueue()

myPriorityQueue.enqueue(["aaa", 2])
myPriorityQueue.enqueue(["ddd", 1])
myPriorityQueue.enqueue(["ccc", 3])
myPriorityQueue.enqueue(["ccc", 2])

myPriorityQueue.print()
