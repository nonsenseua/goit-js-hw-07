const items = document.querySelectorAll('.item');

console.log('Number of categories:', items.length);
items.forEach(el => {
  console.log('Category:', el.querySelector('h2').textContent);
  console.log('Elements:', el.querySelectorAll('li').length);
});
