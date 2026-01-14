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