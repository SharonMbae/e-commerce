// const api_url= 'https://fakestoreapi.com/products'

// async function getProducts(url){
//     try{

//        const response =  await fetch(url)
//        .then(res=>res.json())
//        .then(json=>{
        
//         const products = document.querySelector('.products')
        
//         json.forEach(element => {
//             console.log(element);
//             const product_title = document.createElement('h4');
//             product_title.innerHTML= element.title;
            

//             const product_image = document.createElement('img');
//             product_image.src= element.image;

//             const product_price = document.createElement('p');
//             product_price.innerHTML= element.price;
    
//             products.appendChild(product_title)
    
//             products.appendChild(product_image)
            
//             products.appendChild(product_price)


//             products.appendChild(product_title)
//         });

//     });
        

    

//     }catch{

//     }
// }
// getProducts(api_url)



// const x = {
//     "name":"Sharon"
// }


const api_url = 'https://fakestoreapi.com/products';

async function getProducts(url) {
    try {
        const response = await fetch(url);
        const json = await response.json();
        const products = document.querySelector('.products');

        json.forEach(element => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');

            
            const cartIcon = document.createElement('img');
            cartIcon.src = 'shopping-cart.png'; 
            cartIcon.classList.add('cart-icon');
           

            const product_title = document.createElement('h4');
            product_title.innerHTML = element.title;

            const product_image = document.createElement('img');
            product_image.src = element.image;

            const product_price = document.createElement('p');
            product_price.innerHTML = `$${element.price.toFixed(2)}`;

            productCard.appendChild(product_title);
            productCard.appendChild(product_image);
            productCard.appendChild(product_price);
            productCard.appendChild(cartIcon);

            products.appendChild(productCard);
        });
    } catch (error) {
        console.error('Error:', error);
    }
}

getProducts(api_url);
