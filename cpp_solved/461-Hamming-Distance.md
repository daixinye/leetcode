# 461 Hamming Distance

[Hamming Distance - LeetCode](https://leetcode.com/problems/hamming-distance/)

## 理解题意

two integers

the number of positions which the corresponding bits are different

输入：

- two positive integers
- 不超过30位的integer

输出：

- integer

## 深入理解题意

数一下二进制形式上不同的位的个数

## 拟定方案

第一种：循环，除2取余，对比

第二种：两个数异或，计算1的个数

## 执行方案

第一种：

    class Solution {
    public:
        int hammingDistance(int x, int y) {
            int remainderOfX = 0;
            int remainderOfY = 0;
            int count = 0;
            
            while( x != 0 || y != 0){
                remainderOfX = x % 2;
                remainderOfY = y % 2;
                
                if( remainderOfX != remainderOfY ){
                    count++;
                }
                
                x = x / 2;
                y = y / 2;
            } 
            
            return count;
        }
    };

第二种：

    class Solution {
    public:
        int hammingDistance(int x, int y) {
            int z = x ^ y;
            int count = 0;
            
            while(z){
                if(z % 2){
                    count++;
                }
                z = z / 2;
            }
            return count;
        }
    };

## 回顾

没有注意到：**小的那个数转换成2进制数，前面缺少的部分用0填充**

一个语法上更简练一点的写法

    class Solution {
    public:
        int hammingDistance(int x, int y) {
            int z = x ^ y;
            int count = 0;
            
            do {
                count+= z % 2;
            }while(z /= 2);
            
            return count;
        }
    };

递归的写法

    class Solution {
    public:
        int hammingDistance(int x, int y) {
           // 递归终止条件
            if(!x && !y)
                return 0;
            else{
                return (x ^ y) % 2 + hammingDistance(x/2, y/2);
            }
        }
    };

一行代码

    class Solution {
    public:
        int hammingDistance(int x, int y) {
           return x || y ? (x ^ y) % 2 + hammingDistance(x/2, y/2) : 0;
        }
    };