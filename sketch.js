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
