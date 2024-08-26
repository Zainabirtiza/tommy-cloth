function showDetails(itemId) {
    const item = document.getElementById(itemId);
    const price = item.querySelector('.price').innerText;
    alert(Details for ${item.querySelector('h2').innerText}\nPrice: ${price});
}