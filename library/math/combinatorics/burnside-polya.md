# Burnside 引理与 Pólya 计数定理

## 基本概念

假设 $c$ 是集合 $X$ 上的一种着色.
如果对 $X$ 中的元素按正整数编号，
则可以用 $c(1), c(2), \cdots, c(n)$ 来表示对应元素的着色.

设 $f$ 是 $X$ 上的一个置换：
$$
f =
\begin{pmatrix}
   1 & 2 & \cdots & n-1 & n \\
   i_1 & i_2 & \cdots & i_{n-1} & i_n
\end{pmatrix}
$$

定义置换对着色的作用 $\circ$ 为将着色按置换变换，
即 $(f \circ c)(i_k) = c(k)$，
