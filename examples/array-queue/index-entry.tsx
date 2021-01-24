import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { ERROR, OK, Queue } from '@jianghe/array-queue';
import { Button } from 'antd';
import styles from './index.module.less';

let i = 5;

function TodoList() {
  let queue: Queue;

  useEffect(() => {
    // 队列长度5
    queue = new Queue(5);
  }, []);

  /**
   * 入队
   */
  const enqueue = () => {
    if (queue.enqueue(i) === OK) {
      console.log(`${i}入队`);
      i++;
    }
  };

  /**
   * 出队
   */
  const dequeue = () => {
    const res = queue.dequeue();
    if (res !== ERROR) {
      console.log(`${res}出队`);
    }
  };

  return (
    <div className={styles.test}>
      <h1>数组实现循环队列</h1>
      <Button onClick={enqueue}>入队</Button>
      <Button onClick={dequeue}>出队</Button>
    </div>
  );
}

ReactDOM.render(<TodoList />, document.getElementById('root'));
