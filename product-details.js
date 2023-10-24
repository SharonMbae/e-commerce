
async function displayProductDetails(product) {
    try {
        const productOverlay = document.querySelector('.product-overlay');

        
        document.getElementById('product-title').textContent = product.title;
        document.getElementById('product-description').textContent = `Description: ${product.description}`;
        document.getElementById('product-price').textContent = `Price: $${product.price.toFixed(2)}`;
        document.getElementById('product-ratings').textContent = `Ratings: ${product.rating.rate} stars`;
        document.getElementById('product-image').src = product.image;

       
        productOverlay.style.display = 'flex';
    } catch (error) {
        console.error('Error fetching product details:', error);
    }
}


export { displayProductDetails };
