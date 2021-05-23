// 1 
var addNum = prompt('Введите число от 0 до 999: ');
var nobj = {}
	function numOb() {
		if(addNum > 0 && addNum < 999) {
			nobj.ed = addNum % 10;
			nobj.des = Math.floor(addNum / 10 % 10);
			nobj.sot = Math.floor(addNum / 100);
			return nobj;

		} else {
			console.log('Вы вышли из зоны 999, попробуйте еще!');
		}

	}
		numOb(addNum);
		console.log(nobj);

	
// 2
var nAnswer = prompt('Введите номер вопроса в диапозоне от 1 до 3, который вас интересует? ')
var answers = new Array();
answers['1'] = 1;
answers['2'] = 2;
answers['3'] = 3;

if (nAnswer == 1) {
        alert(' Ваш вопрос:\n' + works.a00  + ' Ваши ответы:\n' + works.a1 + works.a2);
    } else if (nAnswer > 3) {
}

if (nAnswer == 2) {
        alert(' Ваш вопрос:\n' + works.b00  + ' Ваши ответы:\n' + works.b1 + works.b2);
    } else if (nAnswer > 3) {
}

if (nAnswer == 3) {
        alert(' Ваш вопрос:\n' + works.c00  + ' Ваши ответы:\n' + works.c1 + works.c2);
    } else if (nAnswer > 3) {
        alert('Вы ввели номер вопроса которого нет, введите номер вопроса еще раз строго от 1 до 3!!!');
}
