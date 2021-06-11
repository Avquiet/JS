const products = [
    {id: 1, title: 'Notebook',  price: 2000},
    {id: 2, title: 'Mouse', price: 20},
    {id: 3, title: 'Keyboard', price: 200},
    {id: 4, title: 'Gamepad', price: 50},
];

//Функция для формирования верстки каждого товара
//Добавить в выводе изображение

const renderProduct = (cards) => {
    return `<div class="product-item">
                <h3 class='item-1'>${cards.title}</h3>
                <img src='9.jpg'>
                <p class='item-2' >${cards.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
            
};

const renderPage = list => {
    const productsList = list.map(item => renderProduct(item)).join('');
    console.log(productsList);
    document.querySelector('.products').innerHTML = productsList;
};


renderPage(products);