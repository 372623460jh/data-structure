import { ERROR, OK, Queue } from '../es';

describe('queue', () => {
  test('queue', () => {
    const length = 5;
    const queue = new Queue(length);
    expect(queue.enqueue('a')).toEqual(OK);
    expect(queue.enqueue('b')).toEqual(OK);
    expect(queue.enqueue('c')).toEqual(OK);
    expect(queue.enqueue('d')).toEqual(OK);
    expect(queue.enqueue('e')).toEqual(OK);
    expect(queue.enqueue('f')).toEqual(ERROR);
    expect(queue.enqueue('g')).toEqual(ERROR);

    expect(queue.dequeue()).toEqual('a');
    expect(queue.dequeue()).toEqual('b');
    expect(queue.dequeue()).toEqual('c');
    expect(queue.dequeue()).toEqual('d');
    expect(queue.dequeue()).toEqual('e');
    expect(queue.dequeue()).toEqual(ERROR);
    expect(queue.dequeue()).toEqual(ERROR);
    expect(queue.enqueue('a')).toEqual(OK);
    expect(queue.dequeue()).toEqual('a');
    expect(queue.dequeue()).toEqual(ERROR);

    expect(queue.enqueue('a')).toEqual(OK);
    queue.cleanQueue();
    expect(queue.dequeue()).toEqual(ERROR);
  });
});
