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
