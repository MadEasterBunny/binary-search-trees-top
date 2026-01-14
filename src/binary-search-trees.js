class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

export class Tree {
    constructor(arr) {
        this.root = this.buildTree(arr);
    }

    buildTree(arr) {
        const sortedArr = [...new Set(arr)].sort((a, b) => a - b);
        console.log(sortedArr);

        const buildTreeRec = (arr, start, end) => {
            if(start > end) return null;
    
            let mid = start + Math.floor((end - start) / 2);
            let root = new Node(arr[mid]);

            root.left = buildTreeRec(arr, start, mid - 1);
            root.right = buildTreeRec(arr, mid + 1, end);

            return root;
        }

        return buildTreeRec(sortedArr, 0, sortedArr.length - 1);        
    }

    insert(root, value) {
        if(root === null) return new Node(value);

        if(value < root.data) {
            root.left = this.insert(root.left, value);
        } else {
            root.right = this.insert(root.right, value);
        }

        return root;
    }

    delete(root, value) {
        if(root === null) return root;
        
        if(root.data > value) {
            root.left = this.delete(root.left, value);
        } else if(root.data < value) {
            root.right = this.delete(root.right, value);
        } else {
            if(root.left === null) {
                return root.right;
            }
            if(root.right === null) {
                return root.left;
            }
            
            const getSuccessor = (curr) => {
                curr = curr.right;
                while(curr !== null && curr.left !== null) {
                    curr = curr.left;
                }
                return curr;
            }

            const succ = getSuccessor(root);
            root.data = succ.data;
            root.right = this.delete(root.right, succ.data);
        }
        return root;
    }

    find(root, value) {
        let curr = root;

        while(curr !== null) {
            if(curr.data === value) return curr;

            if(curr.data > value) {
                curr = curr.left;
            } else {
                curr = curr.right;
            }
        }

        return null;
    }
}

export const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
};