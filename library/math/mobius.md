# Möbius

## 莫比乌斯函数

### 定义
设 $n = p_1^{k_1}\cdot{}p_2^{k_2}\cdot\cdots\cdot{}p_m^{k_m}$，
其中 $p_i$ 为素数，则

$$\mu(n) = \left\{
    \begin{array}{ll}
    1 & n = 1 \\
    (-1)^m & \prod_{i=1}^{m}{k_i} = 1 \\
    0 & \text{otherwise}
    \end{array}
\right.$$

上述式子第二行的条件即每个素因子的次数都为 $1$，
易知有平方因子的数的莫比乌斯函数值为 $0$.

### 性质

#### 性质一

莫比乌斯函数是积性函数.

$$\mu(a)\mu(b) = \mu(a\cdot{b}), \quad a \bot b$$

#### 性质二

$$\sum_{d|n}{\mu(d)} = [n = 1]$$

其中 $[n = 1]$ 表示当 $n = 1$ 时为 $1$，否则为 $0$.

### 线性筛

（此代码待整理）
```cpp
void sieve() {
    fill(isPrime, isPrime + maxn, 1);
    mu[1] = 1, num = 0;
    for (int i = 2; i < maxn; ++i) {
        if (isPrime[i]) primes[num++] = i, mu[i] = -1;
        static int d;
        for (int j = 0; j < num && (d = i * primes[j]) < maxn; ++j) {
            isPrime[d] = false;
            if (i % primes[j] == 0) {
                mu[d] = 0;
                break;
            } else mu[d] = -mu[i];
        }
    }
}
```

## 莫比乌斯反演

### 定理
如果对于数论函数 $F(n)$ 和 $f(n)$，有

$$F(n) = \sum_{d|n}{f(d)}$$

那么

$$f(n) = \sum_{d|n}{\mu(d)F\left({n \over d}\right)}$$

或

$$f(n) = \sum_{n|d}{\mu\left(\frac{d}{n}\right)F(d)}$$

### 变形

$$f(i) = \sum_{d=1}^{\left\lfloor\frac{n}{i}\right\rfloor}{g(d\cdot{}i)}
\Rightarrow
g(i) = \sum_{d=1}^{\left\lfloor\frac{n}{i}\right\rfloor}{f(d\cdot{i})\mu(d)}
$$

## 应用

### 其他技巧

如果 $d(n)$ 为 $n$ 的约数个数，则

$$d(nm) = \sum_{i|n}\sum_{j|m}[\gcd(i,j) = 1]$$
