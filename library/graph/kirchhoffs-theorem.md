# 基尔霍夫矩阵树定理

## 神奇关联矩阵
设图 $G(V,E)$ 含有 $n$ 个点、$m$ 个边.
当 $m \ne n-1$ 时 $G$ 肯定不是一棵树，
仅考虑 $m = n-1$ 的情况.

定义一个 $n \times m$ 的矩阵 $E$
$$
E_{ij} =
\begin{cases}
    1 &v_i \: \text{ 是 }\: e_j \: \text{ 一端} \\
   -1 &v_i \: \text{ 是 }\: e_j \: \text{ 另一端} \\
   0 & \text{otherwise}
\end{cases}
$$
上述表示可能有点晕，简单来说，就是一个 $n$ 行 $m$ 列的矩阵，
对于树中第 $k$ 个边 $(v_i, v_j)$，
使第 $k$ 列中第 $i$ 行和第 $j$ 行其中一个为 $1$，
另一个为 $-1$；
其他所有行赋值为 $0$.
而哪个是 $1$ 哪个是 $-1$ 是无所谓的.
详情请见这个[博客](http://vfleaking.blog.163.com/blog/static/1748076342013112523651955/).

删去 $E$ 的第一行得到矩阵 $E'$. 那么
$$
|E'|^2 =
\begin{cases}
    1 & G\: \text{ 是一棵树} \\
    0 & G\: \text{ 不是一棵树（含有环）}
\end{cases}
$$

记图 $G$ 的神奇关联矩阵为 $E(G)$，图 $G$ 的生成树的个数可以表示为
$$
\sum_{G' \subseteq G\:\text{且}\:|V'|=n-1 }
{ |E'(G')|^2 }
$$

## 基尔霍夫定理

定义图 $G$ 的拉普拉斯矩阵 $L$ 为其度数矩阵(对角线为每个点的度数)减去邻接矩阵，即
$$
L_{ij} =
\begin{cases}
    \deg{(v_i)} & \text{if }\: i = j\\
    -1          & \text{if }\: i \ne j\:\text{and}\:(v_i,v_j) \in E \\
    0           & \text{otherwise}
\end{cases}
$$

设矩阵 $L'$ 是 $L$ 矩阵去掉第 $i$ 行、第 $i$ 列的矩阵，
其中 $1 \le i \le n$ 并且可以随意选择.

那么图 $G$ 的生成树个数为

$$t(G)
= |L'|
= \frac{1}{n}{\lambda_1}{\lambda_2}\cdots{\lambda_{n-1}}
$$
其中 ${\lambda_1},{\lambda_2},\dots,{\lambda_{n-1}}$ 是矩阵 $L$ 的非负特征值.
