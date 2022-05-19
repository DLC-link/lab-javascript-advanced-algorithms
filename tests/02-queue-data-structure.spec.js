const Queue = require('../js/queue/queue-data-structure');

describe('Queue', () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  describe('Property "queueControl"', () => {
    it('should be an array used to store the elements of the queue', () => {
      expect(Array.isArray(queue.queueControl)).toBe(true);
    });
  });

  describe('Property "MAX_SIZE"', () => {
    it('should be a maximum number of items to avoid the queue overflow', () => {
      expect(typeof queue.MAX_SIZE).toBe('number');
    });
  });

  describe('Method "canEnqueue"', () => {
    it('should return true if queue is not full', () => {
    });

    it('should return false if queue is full', () => {
    });
  });

  describe('Method "isEmpty"', () => {
  });

  describe('Method "enqueue"', () => {

  });

  describe('Method "dequeue"', () => {
  });

  describe('Method "display"', () => {
    it('should be declared', () => {
      expect(typeof queue.display).toBe('function');
    });

    it('should return contents of queue', () => {
      queue.enqueue(10);
      expect(queue.display()).toEqual([10]);
    });
  });

});
