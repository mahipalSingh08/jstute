/*
 ____        _          ____  _                   _                       
|  _ \  __ _| |_ __ _  / ___|| |_ _ __ _   _  ___| |_ _   _ _ __ ___  ___ 
| | | |/ _` | __/ _` | \___ \| __| '__| | | |/ __| __| | | | '__/ _ \/ __|
| |_| | (_| | || (_| |  ___) | |_| |  | |_| | (__| |_| |_| | | |  __/\__ \
|____/ \__,_|\__\__,_| |____/ \__|_|   \__,_|\___|\__|\__,_|_|  \___||___/

*/
console.clear();
console.log("-----------------------Data Structures------------------------------------");
console.log("--------------------------Custom => Linked List----------------------------");
/*
similer to array 
it has no index but have pointer to the next element
means every element knows what is next element ONLY
example : [5, "hi, 8",........]
          5.next => "hi"
and 
          "hi".next => 8
etc


Structure: eg: [5, "hi", 8, 11]
Head => 5 //first elem
..
..
Tail => 11 //last elem



*/

class LinkedList{
    constructor(){
        this.head = null;  //first elem
        this.tail = null;  //last elem
    }

    append(value){
        const newNode = {value: value, next: null};
        if(this.tail){
           this.tail.next = newNode; 
        }
        this.tail = newNode;
        if(!this.head){
            this.head = newNode;
        } 
    }

    prepend(value){
        const newNode = {value: value, next: this.head};
        this.head = newNode;
        if(!this.tail){
            this.tail = newNode;
        }
    }

    find(value){
        if(!this.head){
            return null;
        }
        
        let curNode = this.head;
        while(curNode){
            if(curNode.value === value){
                return curNode;
            }
            curNode = curNode.next;
        }

        return null;
    }

    deleteValue(value){
        if(!this.head){
            return null;
        }

        while(this.head && this.head.value === value){
            this.head = this.head.next;
        }

        let curNode = this.head;
        while(curNode.next){
            if(curNode.next.value === value){
                curNode.next = curNode.next.next;
            }else{
                curNode = curNode.next;
            }
        }

        if(this.tail.value === value){
            this.tail = curNode;
        }
    }

    insertAfter(value, afterValue){
        const existingNode = this.find(afterValue);

        if(existingNode){
            const newNode = {value:value, next: existingNode.next};
            existingNode.next = newNode;
        }
    }

    size() {
        let count = 0; 
        let node = this.head;
        while (node) {
            count++;
            node = node.next
        }
        return count;
    }
    

    toArray(){
        const elements = [];
        let curNode = this.head;
        while(curNode){
            elements.push(curNode);
            curNode = curNode.next;
        }
        return elements;
    }

}

const linkedList1 = new LinkedList();
linkedList1.append(1);
linkedList1.append("hi");
linkedList1.append(true);
linkedList1.append(3.3);
linkedList1.append(3.3);
linkedList1.prepend("firstOne");

linkedList1.deleteValue(3.3);
linkedList1.deleteValue("firstOne");

console.log("linkedList => ", linkedList1.toArray());
console.log("linkedList1.find(true) => ", linkedList1.find(true));
console.log("linkedList1.find(2) => ", linkedList1.find(2));
console.log("linkedList1 size is => ", linkedList1.size());
console.log("linkedList1 insertAfter => ", linkedList1.insertAfter("hello", "hi"));
console.log("linkedList => ", linkedList1.toArray());








