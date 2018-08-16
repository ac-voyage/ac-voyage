# 容斥原理

## 基本公式

若 $A_1, A_2, \dots, A_n$ 为有限集，则
$$
\left|\bigcup_{i=1}^n{A_i}\right|
=
\sum_{
    \phi \ne J \subseteq \{1,2,\dots,n\}
}
{
    (-1)^{ |J| - 1 }
    \left|\bigcap_{j \in J}{A_j}\right|
}
$$
