function addWish() {
  const input = document.getElementById('wishInput');
  const message = input.value.trim();
  if (message) {
    const li = document.createElement('li');
    li.textContent = message;
    document.getElementById('wishList').appendChild(li);
    input.value = '';
  }
}

