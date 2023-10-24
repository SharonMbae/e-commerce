
const urlParams = new URLSearchParams(window.location.search);
const productTitle = urlParams.get('title');
const productPrice = parseFloat(urlParams.get('price'));
const productDescription = urlParams.get('description');
const productImage = urlParams.get('image');
const productQuantity = parseInt(urlParams.get('quantity'));


const products = [
    {
        title: 'Product 1',
        price: 19.99,
        description: 'This is the description for Product 1.',
        image: 'product1.jpg',
        ratings: 4.5,
    },
    {
        title: 'Product 2',
        price: 29.99,
        description: 'This is the description for Product 2.',
        image: 'product2.jpg',
        ratings: 4.0,
    },
    
];


const product = products.find(p => p.title === productTitle);


if (product) {
    const productTitleElement = document.getElementById('product-title');
    const productPriceElement = document.getElementById('product-price');
    const productDescriptionElement = document.getElementById('product-description');
    const productImageElement = document.getElementById('product-image');
    const productQuantityElement = document.getElementById('product-quantity');
    const productRatingsElement = document.getElementById('product-ratings');

    productTitleElement.textContent = product.title;
    productPriceElement.textContent = `$${productPrice.toFixed(2)}`;
    productDescriptionElement.textContent = product.description;
    productImageElement.src = product.image;
    productQuantityElement.textContent = productQuantity;
    productRatingsElement.textContent = `Ratings: ${product.ratings}`;
}
