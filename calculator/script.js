var buttons=document.getElementsByClassName("button");
var display=document.getElementById("display");
// display.onclick = function(){
//    alert('Clicked');
// };
// var operand1 =0;
// var operand2 = null;
// var operator = null;

for(var i=0;i<buttons.length;i++)
{

    buttons[i].addEventListener('click', (e) => {
        switch(e.target.innerText){

            // case '=':
            //     display.innerText ='';
            //     break;
            case 'C':
                display.innerText = '';
                break;
            case '%':
                display.innerText = eval(display.innerText/100);
                break;
            case '+/-':
                display.innerText = eval(display.innerText*-1);
                break;
            case '←':
                display.innerText = display.innerText.slice(0,-1);
                break;
            case '=':
                try{ let x=( eval(display.innerText));
                    x=Math.round(x*1e6);
                    x/=1e6;

                display.innerText = x;
                break;
                }
                catch{
                    display.innerText = 'Error!';
                    break;
                }
            default: 
            display.innerText += e.target.innerText;
        }




    })








    // buttons[i].addEventListener('click',function(){
    //     var value = this.getAttribute('data-value');

    //     if(value=='+')
    //     {
    //         operator = '+';
    //         operand1 = parseFloat(display.textContent);
    //         display.innerText += value;
    //         // display.innerText = '';
    //     }

    //     else if(value == '=')
    //     {
    //         operand2 = parseFloat(display.textContent);
    //         console.log(eval('operand1 + operand2'));
    //     }
    //     else{
    //         display.innerText += value;
    //     }
    // });
}