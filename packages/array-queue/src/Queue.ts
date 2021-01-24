import { ERROR, OK } from './constants';

/**
 * 用数组实现循环队列
 * 参考文档：https://www.yuque.com/b121/tu9fs8/vl0sis
 */
class Queue {
  // 队列最大长度
  private queueMaxLength = 0;

  // 存放队列的数组最大长度
  private arrayMaxLength = 1;

  // 存放队列的数组
  private arrayQueue: unknown[] = [];

  // 队列头下标
  private front = 0;

  // 队列尾下标
  private rear = 0;

  constructor(queueMaxLength: number) {
    this.arrayQueue = [];
    this.queueMaxLength = queueMaxLength;
    this.arrayMaxLength = this.queueMaxLength + 1;
    this.front = 0;
    this.rear = 0;
  }

  /**
   * 插入队列
   * @param element 插入队列的元素
   */
  public enqueue(element: unknown): typeof ERROR | typeof OK {
    if ((this.rear + 1) % this.arrayMaxLength === this.front) {
      // 循环队列已满，报错
      console.error('[@jianghe/array-queue]:队列已满，入队失败');
      return ERROR;
    }
    // 队尾插入元素
    this.arrayQueue[this.rear] = element;
    // 修改队尾坐标
    this.rear = (this.rear + 1) % this.arrayMaxLength;
    return OK;
  }

  /**
   * 移出队列
   * @param element 插入队列的元素
   */
  public dequeue(): unknown {
    if (this.front === this.rear) {
      // 队列为空
      console.error('[@jianghe/array-queue]:队列为空，出队失败');
      return ERROR;
    }
    // 取出队列头的元素
    const frontElement = this.arrayQueue[this.front];
    // 修改队头坐标
    this.front = (this.front + 1) % this.arrayMaxLength;
    return frontElement;
  }

  /**
   * 清空队列
   */
  public cleanQueue(): void {
    this.arrayQueue = [];
    this.front = 0;
    this.rear = 0;
  }
}

export default Queue;
