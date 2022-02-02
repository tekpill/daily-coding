// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const depthFirstValues = (root) => {
    if(root === null) return [];
    const stack = [];
    const finalResults = [];
    stack.push(root);
    
    while(stack.length){
      let current = stack.pop();
      if(current.right) stack.push(current.right);
      if(current.left) stack.push(current.left);
      finalResults.push(current.val);
    }
    
    return finalResults;
  };
  