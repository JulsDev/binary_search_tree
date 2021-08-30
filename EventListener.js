// generate a number from range [-100, 100] and add to tree
const minNumber = -100;
const maxNumber = 100;

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

document.addEventListener('keyup', (event) => {
  if (event.key === "Spacebar" || event.key === " ") {
    const generateNumber = getRandomIntInclusive(minNumber, maxNumber);
    tree.add(generateNumber);
  }
});


// remove node from tree by mouse click
document.addEventListener('click', () => {
  const nodeNumber = tree.findByCoordinates(mouseX, mouseY);
  tree.remove(nodeNumber);

  updateCanvas();
});
