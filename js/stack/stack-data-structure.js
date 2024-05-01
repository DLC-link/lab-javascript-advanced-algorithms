class Stack {
  constructor() {
    // Stores the elements of the stack
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    return this.stackControl.length < this.MAX_SIZE;
    // ... your code goes here
  }

  isEmpty() {
    return this.stackControl.length == 0;
    // ... your code goes here
  }

  push(item) {
    if (!this.canPush()) {
      throw new Error('STACK_OVERFLOW');
    }
    this.stackControl[this.stackControl.length] = item;
    return this.stackControl;
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error('STACK_UNDERFLOW');
    }
    let size = this.stackControl.length;
    let lastElement = this.stackControl[size - 1];
    this.stackControl = this.stackControl.slice(0, size - 1);
    return lastElement;
    // ... your code goes here
  }

  // Should return elements in the stack in the order they were added
  display() {
    // ... your code goes here
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
