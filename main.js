// 1
var n = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
var i = 0;
while ( i < n.length) {
	console.log(n[i++]);
}

// 2, 3
var goods = [
    {
        title: "Товар 1",
        price: 100,
        count: 2
    },
    {
        title: "Товар 2",
        price: 200,
        count: 2
    },
    {
        title: "Товар 3",
        price: 300,
        count: 2
    }
];


var s = 0;
	for(var item of goods) {
    	s = s + item.price;
    		console.log(item.title + " стоит " + item.price);
	}

console.log("Общая сумма товаров = " + s);


function countBasketPrice(countBasket) {
	for(var item of goods) {
		s = s + item.price
	}
}
console.log('Сумма товаров: ' + s * item.count);

// 4
for (var i = 0; i <= 9; console.log(i++));{}

// 5
var r = 'x';
	for (var i = 0; i < 20; i++) {
		r += 'x';
			console.log(r);
	}