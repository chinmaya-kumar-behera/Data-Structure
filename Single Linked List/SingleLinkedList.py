class Node:
    def __init__(self,value):
        self.value = value
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def append(self,value):
        newNode = Node(value)
        if self.head == None:
            self.head = newNode
        else:
            current = self.head
            while current.next:
                current = current.next
            current.next = newNode
    
    def display(self):
        current = self.head
        if current is None:
            print("no data found")
        else:
            while current:
                print(current.value)
                current = current.next

    def insertFirst(self,value):
        newHead = Node(value)

        if self.head is None:
            self.head = newHead
        else:
            newHead.next = self.head
            self.head = newHead

    def reverse(self):
        if self.head is None:
            return
        
        current = self.head
        prev = None

        while current:
            nextNode = current.next
            current.next = prev
            prev = current
            current = nextNode
        self.head = prev

    def insertPosition(self,index,value):
        newNode = Node(value)
        if self.head is None:
            self.head = newNode
            return
        
        if index == 0:
            newNode.next = self.head
            self.head = newNode
            return
        
        current = self.head
        for _ in range(index):
            
            prev = current
            current = current.next

            if not current:
                break

        prev.next = newNode
        newNode.next = current

        
obj = LinkedList()
obj.append(10)
obj.append(20)
obj.append(30)
# obj.display()
# obj.reverse() 
obj.insertPosition(10,50)
obj.insertPosition(0,100)
obj.display()

