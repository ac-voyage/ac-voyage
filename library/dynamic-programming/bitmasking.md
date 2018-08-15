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
