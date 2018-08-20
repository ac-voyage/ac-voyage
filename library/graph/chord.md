# 弦图

## 概念

### 弦(chord)
连接环中不相邻的两个点的边

### 弦图(chord graph)
一个无向图称为弦图，当且仅当图中任意长度大于 3 的环都至少有一个弦.

### 单纯点(simplicial vertex)
设 $N(v)$ 表示与点 $v$ 相邻的点集.
一个点称为单纯点当且仅当 $\{v\} + N(v)$ 的诱导子图为一个团.

## 几个性质
* 弦图的每一个诱导子图一定是弦图
* 弦图的任一个诱导子图不同构与 $C_n(n > 3)$ (TODO: $C_n$ 是什么..)

## 一个引理
任何一个弦图都至少有一个单纯点，
不是完全图的弦图至少有两个不相邻的单纯点.