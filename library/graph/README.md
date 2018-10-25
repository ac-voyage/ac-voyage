# Graph

## 图的基本概念

设图 $G = \langle V, E \rangle$.

### 子图(subgraph)
$G' = \langle V', E' \rangle, V' \subseteq V, E' \subseteq E$
为图 $G$ 的子图.

### 诱导子图(induced subgraph)
$G' = \langle V', E' \rangle, V' \subseteq V, E'=\{(u,v)|u,v\in V',(u,v)\in{E}\}$ 是图 $G$ 的诱导子图.

### 团(clique)
图 $G$ 的一个子图 $G' = \langle V', E' \rangle$，
且 $G'$ 为关于 $V'$ 的完全图.

团数记为 $\omega(G)$.

#### 极大团(maximal clique)
一个团是极大团当且仅当他不是其他团的子集.

#### 最大团(maximum clique)
点数最多的团

### 最小染色(minimum coloring)
用最少的颜色给点染色使相邻点颜色不同.
色数记为 $\chi(G)$

### 最大独立集(maximum independent set)
最大的一个点的子集使任意两个点不相邻，记为 $\alpha(G)$.

### 最小团覆盖(minimum clique cover)
用最少个数的团覆盖所有的点，$\kappa(G)$.

### 几个性质
* 团数小于等于色数 $\omega(G) \le \chi(G)$
* 最大独立集数小于等于最小团覆盖数 $\alpha(G) \le \kappa(G)$
