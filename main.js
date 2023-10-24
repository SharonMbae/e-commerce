const api_url = 'https://fakestoreapi.com/products';

async function getProducts(url) {
    try {
        const response = await fetch(url);
        const json = await response.json();
        const products = document.querySelector('.products');

        json.forEach(element => {
            const productCard = createProductCard(element);

           
            productCard.addEventListener('click', () => {
                displayProductDetails(element);
            });

            products.appendChild(productCard);
        });
    } catch (error) {
        console.error('Error:', error);
    }
}

function createProductCard(element) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const product_title = document.createElement('h4');
    product_title.innerHTML = element.title;

    const product_image = document.createElement('img');
    product_image.src = element.image;

    const product_price = document.createElement('p');
    product_price.innerHTML = `$${element.price.toFixed(2)}`;

    const cartIcon = document.createElement('button');
    cartIcon.innerHTML = 'Add to cart';
    cartIcon.style.width = '100px';
    cartIcon.style.height = '20px';
    cartIcon.style.backgroundColor = '#007BFF';

    productCard.appendChild(product_image);
    productCard.appendChild(product_title);
    productCard.appendChild(product_price);
    productCard.appendChild(cartIcon);

    return productCard;
}

function displayProductDetails(product) {
    
    const productModal = document.getElementById('product-modal');
    const productTitle = document.getElementById('product-title');
    const productImage = document.getElementById('product-image');
    const productDescription = document.getElementById('product-description');
    const productPrice = document.getElementById('product-price');
    
    productTitle.textContent = product.title;
    productImage.src = product.image;
    productDescription.textContent = `Description: ${product.description}`;
    productPrice.textContent = `Price: $${product.price}`;
    
   
    productModal.style.display = 'block';

    const closeBtn = document.querySelector('.close');
    closeBtn.addEventListener('click', () => {
        productModal.style.display = 'none';
    });

    
}

getProducts(api_url);








