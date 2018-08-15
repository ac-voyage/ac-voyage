# 状压 dp

## 套路

### 统计 `1` 的个数

```cpp
int count(unsigned x)
{
    int ret;
    for (ret = 0 ; x ; x &= (x - 1)) ret++;
    return ret;
}
```

### 枚举状态 `s` 的非空子集

```cpp
for (unsigned t = s ; t ; t = (t - 1) & s)
{
    /* do something on t */
}
```

### 枚举状态 `f` 减去状态 `s` 的集合的每一位

假设全集状态为 `u`，且 `s` 是 `f` 的一个子集.

```cpp
for (unsigned t = (f ^ s) & u ; t ; t &= (t - 1))
{
    unsigned bit = t & -t;
    /* do something on bit */
}
```
