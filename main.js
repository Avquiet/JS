// 1 
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2  a++ прибавляет к a=1 еще +1.
d = b++; alert(d);           // 1  потому что b++ возвращает исходное значение.
c = (2+ ++a); alert(c);      // 5  2+ и еще +2 к a=1, потому что плюсуется в с первым примером.
d = (2+ b++); alert(d);      // 4  тоже самое..
alert(a);                    // 3  ++ увеличивает на +2 к a=1.
alert(b);                    // 3  тоже самое.. как на a=1.


// 2
var a = 2;
var x = 1 + (a *= 2);
//ОТВЕТ: 5;

// 3
var a = 16;
var b = 12;
 
if (a > 0 && b > 0) {
 	a - b; //4

} else if (a < 0 && b < 0) {
	a * b; //184

} else if(a > 0 && b < 0 || a < 0 && b > 0) {
	a + b; //28
}

//4
var a = +prompt('Введите число:  (от 0 до 15) ');
switch(a) {
	case 0:
		alert('Это число')
		break;
	case 1: 
		alert('Это число');
		break;
	case 2: 
		alert('Это число');
		break;	
	case 3: 
		alert('Это число');
		break;		
	case 4: 
		alert('Это число');
		break;
	case 5: 
		alert('Это число');
		break;
	case 6: 
		alert('Это число');
		break;
	case 7: 
		alert('Это число');
		break;
	case 8: 
		alert('Это число');
		break;
	case 9: 
		alert('Это число');
		break;
	case 10: 
		alert('Это число');
		break;
	case 11: 
		alert('Это число');
		break;
	case 12: 
		alert('Это число');
		break;
	case 13: 
		alert('Это число');
		break;
	case 14: 
		alert('Это число');
		break;
	case 15: 
		alert('Это число');
		break;
	default:
	alert('Все, больше нет чисел!')
}	

//5
function task(a,b) {
	return a + b;
}

var r = task(9,12);
	alert(r);


function sm(c, d) {
	task(3, 2);
	return c - d;
}

var e = sm(3, 2)
	alert(e)


function it(l,x) {
	return l / x;
}

var s = it(14, 7)
	alert(s)


function ol(s,k) {
	return s * k;
}

var t = ol(5, 5)
	alert(t)

//6
function mathOperation(arg1, arg2, operation) {
	switch(operation) {
		case '*' : 

		return ol(arg1, arg2);
	}
}

var l = ol(9, 9);
console.log(l);


//7
 //Если null >= 0 будет истина, a другие > < ложью, cравнения преобразуют null в число, рассматривая его как 0.

 //8
 function power(val, pow) {
 	if (val == 2) {
 		return pow;
 	} else {
 		return val * power(pow, (val - 2));

 	}
 }