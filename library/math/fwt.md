# 快速沃尔什变换

快速沃尔什变换核心解决的问题是，
对于两个长度为 $n$、从 $0$
开始编号的数组 $A$ 和 $B$，
在 $\mathcal{O}(n\log{n})$
的时间内求出下述定义的数组 $C$

$$C[i] = \sum_{x \oplus y \, = \, i}{A[x] \cdot B[y]}$$

记为

$$C = A * B$$

和 FFT 类似，为了解决这个问题，构造一个变换 FWT 出来使得

$$
C = A * B
\Longleftrightarrow
FWT(C) = FWT(A) \cdot FWT(B)
$$
