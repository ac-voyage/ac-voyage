# 快速沃尔什变换

快速沃尔什变换核心解决的问题是，
对于两个长度为 $n$、从 $0$
开始编号的数组 $A$ 和 $B$，
在 $\mathcal{O}(n\log{n})$
的时间内求出下述定义的数组 $C$

$$C[i] = \sum_{x \oplus y \, = \, i}{A[x] \cdot B[y]}$$

其中 $\oplus$ 为位运算 $\operatorname{and}, \operatorname{or}, \operatorname{xor}$ 中的一个 ，记为

$$C = A * B$$

接下来 $+$ 表示算术加法，$\cdot$ 表示算术乘法.
如果运算符两边是数组，则表示对应项做运算.

和 FFT 类似，为了解决这个问题，构造一个变换 $\mathcal{F}$ 出来使得

$$
C = A * B
\Longleftrightarrow
\mathcal{F}\{C\} = \mathcal{F}\{A\} \cdot \mathcal{F}\{B\}
$$
