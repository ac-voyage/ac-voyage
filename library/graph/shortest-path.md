# 最短路

## `spfa`

### 一个小优化

使用双端队列，
如果当前结点到源点的距离比队首短，则加入队首；
否则才加入队尾.

```cpp{25-28}
ll d[MAXV];
bitset<MAXV> inq;
ll spfa(int s, int t)
{
    deque<int> q;

    memset(d, 0x7f, sizeof d);

    q.push_back(s);
    d[s] = 0;
    inq.set(s);

    while ( !q.empty() )
    {
        int u = q.front();
        q.pop_front(); inq.reset(u);
        for (edge *e = u[front]; e; e = e->n)
        {
            int v = e->v; ll w = e->w;
            if ( d[v] > d[u] + w )
            {
                d[v] = d[u] + w;
                if ( !inq.test(v) )
                {
                    if ( d[v] < d[q.front()] )
                        q.push_front(v);
                    else
                        q.push_back(v);
                    inq.set(v);
                }
            }
        }
    }

    return d[t];
}
```
