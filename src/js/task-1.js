const list = document.getElementById('categories');
const childOfList = list.children;

console.log(`Number of categories: ${childOfList.length}`);

Array.from(childOfList).forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
});