function shaxdo() {
    var oneTb = document.createElement('table'),
        shs = ['','A','B','C','D','E','F','G','H',''],
        blackF = ['8','&#9820;','&#9822;','&#9821;','&#9819;','&#9818;','&#9821;','&#9822;','&#9820;','8'],
        whiteF = ['1','&#9814;','&#9816;','&#9815;','&#9813;','&#9812;','&#9815;','&#9816;','&#9814;','1'],
        blackFf = ['7','&#9823;','&#9823;','&#9823;','&#9823;','&#9823;','&#9823;','&#9823;','&#9823;','7'],
        whiteFf = ['2','&#9817;','&#9817;','&#9817;','&#9817;','&#9817;','&#9817;','&#9817;','&#9817;','2'];
    for (var i = 0, a = 9; i <= 10, a >= 0; i++, a--) {
    	var oneTr = oneTb.insertRow(i);
    for (j = 0; j < 10; j++) {
        var oneTd = oneTr.insertCell(j);
            switch(i) {
                case 0: 
                    oneTd.innerText = shs[j];
                        break;
                        case 1:
                    oneTd.innerHTML = blackF[j];
                        break;  
                        case 2:
                    oneTd.innerHTML = blackFf[j];
                         break;
                        case 7:
                    oneTd.innerHTML = whiteF[j];
                        break;
                        case 8:
                    oneTd.innerHTML = whiteFf[j];
                        break;
                        case 9 :
                    oneTd.innerText = shs[j];
                        break;

                    	default:
                            if (j == 0 || j == 9) {
                                oneTd.innerHTML = a;
                            }
                        break;          
                    }
                }
            }

            document.body.append(oneTb);
        }
    shaxdo()