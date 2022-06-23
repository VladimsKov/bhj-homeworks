const products = document.querySelectorAll('.product');
const cartProducts = document.querySelector('.cart__products');

function productControl(product) {
    const decProductAmount = product.querySelector('.product__quantity-control_dec');
    const incProductAmount = product.querySelector('.product__quantity-control_inc');
    let productAmount = product.querySelector('.product__quantity-value');
    
    decProductAmount.addEventListener('click', () => {
        if (+productAmount.innerText > 1) {
            productAmount.innerText = +productAmount.innerText - 1;
        }
    });
    incProductAmount.addEventListener('click', () => {
        productAmount.innerText = +productAmount.innerText + 1;
    });
}

function setProductAmount(addedProducts, newElem) {
    let flag = false;
    for (let item of addedProducts.children) {
        if (item.dataset.id == newElem.dataset.id) {
            let count = +item.lastElementChild.innerText;
            item.lastElementChild.innerText = count + +newElem.lastElementChild.innerText;
            flag = true;
            return;
        }        
    }
    if (!flag) {
        addedProducts.appendChild(newElem);
    }       
} 

function addProducts(product) {
    const productAddButton = product.querySelector('.product__add');
    productAddButton.addEventListener('click', () => {
        let cartProduct = document.createElement('div');
        cartProduct.className = 'cart__product';
        cartProduct.dataset.id = product.dataset.id;
        const productImg = product.querySelector('.product__image');
        const productAmount = product.querySelector('.product__quantity-value');
        cartProduct.innerHTML = `<img class="cart__product-image" src="${productImg.src}">
        <div class="cart__product-count">${productAmount.innerText}</div>`;
        
        setProductAmount(cartProducts, cartProduct);         
    });    
}

products.forEach(elem => {
    productControl(elem);
    addProducts(elem);
}); 
