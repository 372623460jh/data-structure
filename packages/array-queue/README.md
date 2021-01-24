# 数组实现循环队列

## 用法

```javascript
import { ERROR, OK, Queue } from '@jianghe/array-queue';

// 创建长度为5的队列
const queue = new Queue(5);
// 入队
queue.enqueue('a');
// 出队
const res = queue.dequeue();
// 清空队列
queue.cleanQueue();
```
