const bst = new BinarySearchTree();

// WARNING: replace ... with your code
function Node(key, value) {
    this.key = key;
    this.value = value;

    //please don't rename left, right and root properties
    this._left = null;
    this._right = null;
}

function BinarySearchTree() {
    this._root = null;
  	
}

//bst.root()
BinarySearchTree.prototype.root = function(){
  return this._root.value
}

//bst.insert(key, value); 
// bst.insert(1, 'one');
// bst.insert(3, 'three');

// //---2----
// //1-----3-
// //--------

BinarySearchTree.prototype.insert = function(key, value, node) {
  var currentNode = node ? node : this._root;

  if (!currentNode) {
    var newNode = new Node(key, value);
    currentNode = newNode;
  } else if (currentNode.key === key) {
    var newNode = new Node(key, value);
    newNode._left = currentNode._left;
    newNode._right = currentNode._right;
    currentNode = newNode;
  } else if (currentNode.key > key) {
    if (!currentNode._left) {
      var newNode = new Node(key, value);
      currentNode._left = newNode;
    } else {
      return this.insert(key, value, currentNode._left);
    }
  } else {
    if (!currentNode._right) {
      var newNode = new Node(key, value);
      currentNode._right = newNode;
    }	else {
      return this.insert(key, value, currentNode._right);
    }
  }
  
  return this;
};

BinarySearchTree.prototype.search = function(key, node) {
  var currentNode = node ? node : this._root;

  if (currentNode.key === key) {
    return currentNode.value;
  } else if (currentNode.key > key) {
    if (!currentNode._left) return undefined;
    else return this.search (key, currentNode._left);
  } else {
    if (!currentNode._right) return undefined;
    else return this.search (key, currentNode._right);
  }
};


// returns whether BST contains such value or not;
// bst.contains('three'); // true
BinarySearchTree.prototype.contains = function(value){
      	var currentNode = this._root
				var gotIt = false;
      
      	(function searchIt(value){          
        	if(currentNode && gotIt===false){
          	if(value > currentNode.key){ 
              currentNode = currentNode._right
              return searchIt()
            } else if (value < currentNode.key){
            	currentNode = currentNode._left
              return searchIt()
            	} else { gotIt = true }          
          }                        
        });
      
        return gotIt;
    };
// returns ordered sequence of stored values in given oreder (order is boolean)
// bst.traverse(true); // ['one', 'two', 'three']
BinarySearchTree.prototype.traverse = function(order){
  
};

// verifies whether tree is well-formed binary search tree or not  
// bst._root.key = 0;
// bst.verify(); //false
// -1-
// 2-3
BinarySearchTree.prototype.verify = function(){
  
};

// removes node from tree by provided key; method should be chainable;
BinarySearchTree.prototype.delete = function(key){
  
};






// You can comment this block for testing in the browser but final solution MUST contains this module.exports code
module.exports = {
  BinarySearchTree,
  student: 'Derranion'
};
