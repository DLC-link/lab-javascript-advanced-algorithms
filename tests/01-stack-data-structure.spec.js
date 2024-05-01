const Stack = require('../js/stack/stack-data-structure');

describe('Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  describe('Property "stackControl"', () => {
    it('should be an array used to store the elements of the stack', () => {
      expect(Array.isArray(stack.stackControl)).toBe(true);
    });
  });

  describe('Property "MAX_SIZE"', () => {
    it('should be a maximum number of items to avoid the stack overflow', () => {
      expect(typeof stack.MAX_SIZE).toBe('number');
    });
  });

  describe('Method "canPush"', () => {
    it('should be declared', () => {
      expect(typeof stack.canPush).toBe('function');
    });

    it('should return true if stack is empty', () => {
      expect(stack.canPush()).toBe(true);
    });

    it('should return false if stack is full', () => {
      stack.MAX_SIZE = 1;
      stack.stackControl = ['a'];
      stack.expect(stack.canPush()).toBe(false);
    });
  });

  describe('Method "isEmpty"', () => {
    it('should be declared', () => {
      expect(typeof stack.isEmpty).toBe('function');
    });

    it('should return true if stack is empty, false if it contains any elements', () => {
      expect(stack.isEmpty()).toBe(true);
    });

    it('should return false if stack contains any elements', () => {
      stack.stackControl = ['b'];
      expect(stack.isEmpty()).toBe(false);
    });
  });

  describe('Method "push"', () => {
    it('should be declared', () => {
      expect(typeof stack.push).toBe('function');
    });

    it('should add the indicated element to the stack', () => {
      let element = 'c';
      stack.push(element);
      stack.push(element);
      expect(stack.stackControl[0]).toEqual(element);
      expect(stack.stackControl[1]).toEqual(element);
    });

    it('should return the stack when an element is inserted', () => {
      stack.stackControl = [1, 2];
      expect(stack.push(19)).toEqual([1, 2, 19]);
    });

    it('should insert the elements in the received order', () => {
      // TODO:
    });

    it('should throw error with message "STACK_OVERFLOW" if the stack is full', () => {
      stack.MAX_SIZE = 1;
      stack.push(19);
      expect(() => stack.push(88)).toThrow(new Error('STACK_OVERFLOW'));
    });
  });

  describe('Method "pop"', () => {
    it('should return the last element added to stack', () => {});
    it('should throw an exception when stack is empty', () => {
      expect(() => stack.pop()).toThrow(new Error('STACK_UNDERFLOW'));
    });
    it('should remove the last element', () => {
      stack.stackControl = ['a', 'b', 'c', 'd'];
      let stackSize = stack.stackControl.length;
      stack.pop();
      expect(stack.stackControl.length).toEqual(stackSize - 1);
      expect(stack.stackControl).toEqual(['a', 'b', 'c']);
    });
  });

  describe('Method "display"', () => {
    it('should be declared', () => {
      expect(typeof stack.display).toBe('function');
    });

    it('should return contents of stack', () => {
      stack.push(10);
      expect(stack.display()).toEqual([10]);
    });
  });
});
