// ==========
let tree;

function setup() {
  createCanvas(1240, 800);
  background(51);

  tree = new Tree();
  tree.add(8);
  tree.add(6);
  tree.add(3);
  tree.add(4);
  tree.add(9);
  tree.add(12);
  tree.add(2);
  tree.add(7);

  tree.traverse();
}

function addNodeStyle(node) {
  const wrapper = document.getElementById('wrapper__tree');
  const nodeDiv = document.createElement('div');
  nodeDiv.className = 'node';
  nodeDiv.innerHTML = node.value;
  nodeDiv.style.left = node.x + 'px';
  nodeDiv.style.top = node.y + 'px';

  wrapper.appendChild(nodeDiv);
};

function addNodeStrict(parent, node) {
  const width = Math.sqrt(pow(parent.x - node.x, 2) + pow(parent.y - node.y, 2));
  const angle = Math.atan( (parent.y - node.y / (parent.x - node.x) ) * 180 / Math.PI);

  const wrapper = document.getElementById('wrapper__tree');
  const nodeStrict = document.createElement('div');
  nodeStrict.style.left = parent.x + 'px';
  nodeStrict.style.top = parent.y + 'px';
  nodeStrict.style.width = width;
  nodeStrict.style.border = '2px solid #bd10e0';

  wrapper.appendChild(nodeStrict);
}

