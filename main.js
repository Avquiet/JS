// 1
var buttons = document.querySelectorAll("img");
    for(var i = 0;i < 2;i++){
        buttons[i].onclick = function(e){
            var img = document.createElement("img");
            img.src = "b" + (e.target.id[1]) + ".jpg";
            img.onclick = function(){
                this.classList.add("hide");
            }
            document.body.append(img);
        }
        
    }
    
    function er() {
        alert('Картинка не найдена...!')
    }

    buttons[2].addEventListener("click", er);


    
// 2
    var a = {
    price: 0,
    count: 0,
    summa: 0
}
var b = {
    price: 0,
    count: 0,
    summa: 0
}
var c = {
    price: 0,
    count: 0,
    summa: 0
}
function f(id) {

    

    var d = document.getElementById(id);
    var ol = document.getElementById('spis');
    var li = document.getElementById("li_" + id);

    if (li != null) {
        switch (id) {
            case 'a':
                a.count = parseInt(li.innerHTML.split(' ')[1]) + 1;
                break;
            case 'b':
                b.count = parseInt(li.innerHTML.split(' ')[1]) + 1;
                break;
            case 'c':
                c.count = parseInt(li.innerHTML.split(' ')[1]) + 1;
                break;
        }
    } else {
        switch (id) {
            case 'a':
                newLi = document.createElement('li');
                newLi.innerHTML = '';
                newLi.id = 'li_a';
                ol.appendChild(newLi);
                a.count = 1;
                break;
            case 'b':
                newLi = document.createElement('li');
                newLi.innerHTML = '';
                newLi.id = 'li_b';
                ol.appendChild(newLi);
                b.count = 1;
                break;
            case 'c':
                newLi = document.createElement('li');
                newLi.innerHTML = '';
                newLi.id = 'li_c';
                ol.appendChild(newLi);
                c.count = 1;
                break;
        }
    }



    switch (id) {
        case 'a':
            a.price = d.getElementsByTagName('p')[0].innerHTML;
            a.summa = a.count * a.price;
            break;
        case 'b':
            b.price = d.getElementsByTagName('p')[0].innerHTML;
            b.summa = b.count * b.price;
            break;
        case 'c':
            c.price = d.getElementsByTagName('p')[0].innerHTML;
            c.summa = c.count * c.price;
            break;
    }

    if (li != null) {
        switch (id) {
            case 'a':
                li.innerHTML = "Iphone 12: " + a.count + " total " + a.price + " in price: " + a.summa;
                break;
            case 'b':
                li.innerHTML = "Iphone 12 Pro: " + b.count + "  total " + b.price + " in price: " + b.summa;
                break;
            case 'c':
                li.innerHTML = "Iphone 12 Pro Max: " + c.count + "  total " + c.price + " in price: " + c.summa;
                break;
        }
    } else {
        switch (id) {
            case 'a':
                newLi.innerHTML = "Iphone 12: " + a.count + "  total " + a.price + " in price: " + a.summa;
                break;
            case 'b':
                newLi.innerHTML = "Iphone 12 Pro: " + b.count + "  total " + b.price + " in price: " + b.summa;
                break;
            case 'c':
                newLi.innerHTML = "Iphone 12 Pro Max: " + c.count + "  total " + c.price + " in price: " + c.summa;
                break;
        }
    }

var ii = document.getElementById('itog');
if (ii != null){
ii.parentNode.removeChild(ii);
}


var itog = document.createElement('li');
itog.id = 'itog';

ol.appendChild(itog);
var ss = a.summa + b.summa + c.summa;
itog.innerHTML = "TOTAL: " + ss;


}

   
