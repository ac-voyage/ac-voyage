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
如果运算符两边是数组，则表示下标对应的两项间做运算.

和 FFT 类似，为了解决这个问题，构造一个变换 $\mathcal{F}$ 出来使得

$$
C = A * B
\Longleftrightarrow
\mathcal{F}\{C\} = \mathcal{F}\{A\} \cdot \mathcal{F}\{B\}
$$

同时要存在一个逆变换 $\mathcal{F}^{-1}$ 使得

$$A = \mathcal{F}^{-1}\{\mathcal{F}\{A\}\}$$

前人已经推出了 $\mathcal{F}$ 是怎样一个变换.
设 $A, B$ 的长度为 $2^k$，不足 $2^k$ 的部分用 $0$ 补全.
用 $A_0$ 表示 $A$ 的前 $2^{k-1}$ 项（即下标最高位为 $0$ 的项)，
$A_1$ 表示 $A$ 的后 $2^{k-1}$ 项（即下标最高位为 $1$ 的项）.
$[A, B]$ 表示 $A, B$ 拼接而成的新数组.

* 异或
$$
\mathcal{F}\{A\} =
\left[\mathcal{F}\{A_0\}+\mathcal{F}\{A_1\},
\mathcal{F}\{A_0\}-\mathcal{F}\{A_1\}\right]
$$
$$
\mathcal{F}^{-1}\{A\} =
\left[
\mathcal{F}^{-1}\{\frac{A_0+A_1}{2}\},
\mathcal{F}^{-1}\{\frac{A_0-A_1}{2}\}
\right]
$$
* 按位与
$$
\mathcal{F}\{A\} =
\left[\mathcal{F}\{A_0\}+\mathcal{F}\{A_1\},
\mathcal{F}\{A_1\}\right]
$$
$$
\mathcal{F}^{-1}\{A\} =
\left[
\mathcal{F}^{-1}\{A_0\}-\mathcal{F}^{-1}\{A_1\},
\mathcal{F}^{-1}\{A_1\}
\right]
$$
* 按位或
$$
\mathcal{F}\{A\} =
\left[\mathcal{F}\{A_0\},
\mathcal{F}\{A_1\}+\mathcal{F}\{A_0\}\right]
$$
$$
\mathcal{F}^{-1}\{A\} =
\left[
\mathcal{F}^{-1}\{A_0\},
\mathcal{F}^{-1}\{A_1\}-\mathcal{F}^{-1}\{A_0\}
\right]
$$

## 模板
（待整理）
```cpp
void FWT(int a[],int n)  
{  
    for(int d=1;d<n;d<<=1)  
        for(int m=d<<1,i=0;i<n;i+=m)  
            for(int j=0;j<d;j++)  
            {  
                int x=a[i+j],y=a[i+j+d];  
                a[i+j]=(x+y)%mod,a[i+j+d]=(x-y+mod)%mod;  
                //xor:a[i+j]=x+y,a[i+j+d]=(x-y+mod)%mod;  
                //and:a[i+j]=x+y;  
                //or:a[i+j+d]=x+y;  
            }  
}

void UFWT(int a[],int n)  
{  
    for(int d=1;d<n;d<<=1)  
        for(int m=d<<1,i=0;i<n;i+=m)  
            for(int j=0;j<d;j++)  
            {  
                int x=a[i+j],y=a[i+j+d];  
                a[i+j]=1LL*(x+y)*rev%mod,a[i+j+d]=(1LL*(x-y)*rev%mod+mod)%mod;  
                //xor:a[i+j]=(x+y)/2,a[i+j+d]=(x-y)/2;  
                //and:a[i+j]=x-y;  
                //or:a[i+j+d]=y-x;  
            }  
}
void solve(int a[],int b[],int n)  
{  
    FWT(a,n);  
    FWT(b,n);  
    for(int i=0;i<n;i++) a[i]=1LL*a[i]*b[i]%mod;  
    UFWT(a,n);  
}
```
