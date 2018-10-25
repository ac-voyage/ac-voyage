# 容斥原理

## 基本公式

若 $A_1, A_2, \dots, A_n$ 为有限集，则
$$
\left|\bigcup_{i=1}^n{A_i}\right|
=
\sum_{\phi \ne J \subseteq \{1,2,\dots,n\}}{(-1)^{ |J| - 1 }\left|\bigcap_{j \in J}{A_j}\right| }
$$

## 偏序集上的容斥原理

若
$$ g(A) = \sum_{S \subseteq A}{f(S)} $$
则
$$ f(A) = \sum_{S \subseteq A}{(-1)^{ |A| - |S| }g(S)} $$

更一般的，如果 $S$ 是多重集合(multiset)，那么
$$ f(A) = \sum_{S \subseteq A}{\mu(A - S)g(S)}$$
其中
* 当 $S$ 是含有偶数个元素的集合（没有重复元素）时，$\mu(S) = 1$
* 当 $S$ 是含有奇数个元素的集合（没有重复元素）时，$\mu(S) = -1$
* 当 $S$ 含有重复元素时，$\mu(S) = 0$.

## 应用

### 乱序排列

如果集合 $A$ 含有 $n$ 个元素，
则乱序排列的数目为 $[n! / e]$， $[x]$ 表示最接近 $x$ 的整数.
