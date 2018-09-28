# 617 Merge Two Binary Trees

[Merge Two Binary Trees - LeetCode](https://leetcode.com/problems/merge-two-binary-trees/)

## 理解题意

首先有两个binary tree，要将它们俩合并成一个new binary tree

如果这两棵tree的node overlap了，那么就sum node values up as the value of new merged node

反之就使用 not null 的 node 作为 new binary tree 的 node

## 深入理解题意

可能存在的一些情况

- node 一一对应
- node 不一一对应
- 两棵树中有一棵树可能为空

## 拟定方案

说到二叉树，最先想到的是递归

那么就先考察一些比较一般化的情况

观察到binary tree的数据结构，结合题意，可知：

Binary Tree 1 （记作T1）与Binary Tree 2（记作T2）的merge 等于

T1.value 与 T2.value 的merge 和 T1、T2各自两棵子树的合并

伪代码如下

    merge(t1, t2){
    	TreeNode t3
    	if(t1 && t2){
    		t3.value = t1.value + t2.value
    		t3.left = merge(t1.left) + merge(t2.left)
    		t3.right = merge(t1.right) + merge(t2.right)
    		return t3;
    	}else{
    		return t1 ? t2 : t1;
    	}
    }

## 执行方案

    /**
     * Definition for a binary tree node.
     * struct TreeNode {
     *     int val;
     *     TreeNode *left;
     *     TreeNode *right;
     *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
     * };
     */
    class Solution {
    public:
        TreeNode* mergeTrees(TreeNode* t1, TreeNode* t2) {
            // 递归终止条件
            // t1 t2 为空树时
            if(t1 == NULL && t2 == NULL){
                return NULL;
            }
            
            // t1 t2 有一棵为空树时
            if(t1 != NULL && t2 == NULL){
                return t1;
            }
            if(t1 == NULL && t2 != NULL){
                return t2;
            }
            
            //t1 t2 都非空时
            TreeNode* t3 = new TreeNode(t1->val + t2->val);
            t3->left = mergeTrees(t1->left, t2->left);
            t3->right = mergeTrees(t1->right, t2->right);
            return t3;
        }
    };

## 回顾

代码稍微简化一下

    /**
     * Definition for a binary tree node.
     * struct TreeNode {
     *     int val;
     *     TreeNode *left;
     *     TreeNode *right;
     *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
     * };
     */
    class Solution {
    public:
        TreeNode* mergeTrees(TreeNode* t1, TreeNode* t2) {
            if( t1 != NULL && t2 != NULL){
                TreeNode* t3 = new TreeNode(t1->val + t2->val);
                t3->left = mergeTrees(t1->left, t2->left);
                t3->right = mergeTrees(t1->right, t2->right);
                return t3;
            }else {
                return t1 == NULL ? t2 : t1;
            }
            
        }
    };