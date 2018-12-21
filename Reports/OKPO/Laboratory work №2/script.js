        
let header=document.querySelector('header');
addTagAndAttributes(header, 'div','id','menu-icon','<span class="first"></span><span class="second"></span><span class="third"></span>');

// Скрипт для меню
$("#menu-icon").on("click", function() {
    $("nav").slideToggle();
    $(this).toggleClass("active");
});

// Создаем массив который храниться все загаловки задании
 let tasks= [
'1. Даны 3 вещественные числа a, b, c. Определить, имеется ли среди них хотя бы одна пара равных между собой чисел.',
'2. Даны 3 вещественных числа a, b, c. Определить, является ли треугольник со сторонами а, b, c равносторонним.',
'3. Определить, существует ли треугольник со сторонами а, b, c, если учесть, что треугольник существует только тогда, когда сумма двух любых его сторон больше третьей. ',
'4. Определить, является ли число А делителем числа В или наоборот, является ли число В делителем числа А. Ответом должно служить сообщение "В является делителем А" или "А является делителем В".',
'5. Задан радиус круга и сторона квадрата. Определить, поместится ли круг в квадрат? ',
'6. В магазине скидка в 3% предоставляется, если сумма покупки больше 200$. По заданной сумме покупки определить стоимость покупки.  ',
'7. Составить блок-схему и псевдокод на задачу, которая вычисляет оптимальный вес пользователя, сравнивает его с реальным весом и выдает рекомендации о необходимости поправиться или похудеть. Оптимальный вес вычисляется по формуле: рост (в сантиметрах) -100. ',
'8. Определить, в какую из областей попадет точка с указанными координатами (x; y).',
'9. Поле шахматной доски определяется парой натуральных чисел, каждое из которых не превосходит 8. По введенным координатам двух полей выясните, имеют ли эти поля одинаковый или разный цвет.',
'10.    Дано целое четырехзначное число. Выяснить, является ли оно палиндромом (перевертышем, например, 2222,1221 и тд.). ',
'11.  Дано трехзначное число. Определить все трехзначные числа, которые можно получить из чисел данного числа ',
'12.    Вводятся четыре координаты: координаты ладьи (два числа) и координаты другой фигуры (два числа). Координаты – целые числа от 1 до 8. Определить, сможет ли ладья за один ход побить другую фигуру. Вывести соответствующее сообщение.',
'13.    Требуется определить принадлежность введенного числа данной арифметической прогрессии.',
'14.    По изображенной блок-схеме составьте задачу  напишите программу. ']

function addContentTags(container,tag,content){
    let tagName=document.createElement(tag);
    tagName.innerHTML=content;
    container.appendChild(tagName);
}

function addAttributTags(container, tag, attributes, AttributeName, content='') {
    let tagName=document.createElement(tag);
    tagName.setAttribute(attributes,AttributeName);
    tagName.innerHTML=content;
    container.appendChild(tagName);
}

var select = document.querySelector('select');

select.onchange = function() {

  var indexSelected = select.selectedIndex;
  
  // container который будем добавлять нужные элементы
  let containerGlav=document.querySelector(".container");

  // Очищаем контайнер 
  containerGlav.innerHTML='';
  let taskNumber=indexSelected+1;
  let task="Задания "+taskNumber;

  addContentTags(containerGlav,'h2',task);
  addContentTags(containerGlav,'p',tasks[indexSelected]);


  addContentTags(containerGlav,'h2',"Блок-схема");
  addTagAndAttributes (containerGlav,'iframe','src',
    'https://drive.google.com/file/d/1GoaK-48ryRsm6lbGr09HdFowWkfHydgS/preview', 'class','files')

  let test=document.querySelector(".test");
  test.innerHTML='';
  let container=document.querySelector(".programma");
  container.innerHTML='';
  
  addContentTags(test,'h2',"Тестовые варианты");
  addTagAndAttributes (test,'iframe','src',
    'https://drive.google.com/file/d/1-_aO8ywvCuigHZWmOMaJ252vidXOvEnP/preview', 'class','files')

  addContentTags(container,'h2','Программа');


	// Да это какой-то ужас. Но не хочу пересделывать все эти задании. Поэтому буду как-то поддерживать его
	
  if ( indexSelected == '0' ) {
        addContentTags(container,'p','Введите а');
        addTagAndAttributes(container,'input','id','zad1a','type','number');
        addContentTags(container,'p','Введите b');
        addTagAndAttributes(container,'input','id','zad1b','type','number');
        addContentTags(container,'p','Введите c');
        addTagAndAttributes(container,'input','id','zad1c','type','number');
        addAttributTags(container,'p','id','result')
        addTagAndAttributes(container,'button','onclick','zad1 ()','Определить');
   
  }
  if (indexSelected=="1") {
 		addContentTags(container,'p','Введите а');
        addTagAndAttributes(container,'input','id','zad2a','type','number');
        addContentTags(container,'p','Введите b');
        addTagAndAttributes(container,'input','id','zad2b','type','number');
        addContentTags(container,'p','Введите c');
        addTagAndAttributes(container,'input','id','zad2c','type','number');
        addAttributTags(container,'p','id','result2')
        addTagAndAttributes(container,'button','onclick','zad2 ()','Определить');

  }
   if ( indexSelected == '2' ) {
   		addContentTags(container,'p','Введите а');
        addTagAndAttributes(container,'input','id','zad3a','type','number');
        addContentTags(container,'p','Введите b');
        addTagAndAttributes(container,'input','id','zad3b','type','number');
        addContentTags(container,'p','Введите c');
        addTagAndAttributes(container,'input','id','zad3c','type','number');
        addAttributTags(container,'p','id','result3')
        addTagAndAttributes(container,'button','onclick','zad3 ()','Определить');

  }
  if (indexSelected=="3") {
 		addContentTags(container,'p','Введите A');
        addTagAndAttributes(container,'input','id','zad4a','type','number');
        addContentTags(container,'p','Введите B');
        addTagAndAttributes(container,'input','id','zad4b','type','number');
        addAttributTags(container,'p','id','result4')
        addTagAndAttributes(container,'button','onclick','zad4 ()','Определить');

  }
   if ( indexSelected == '4' ) {
   		addContentTags(container,'p','Введите радиус круга:');
        addTagAndAttributes(container,'input','id','zad5a','type','number');
        addContentTags(container,'p','Введите сторона квадрата:');
        addTagAndAttributes(container,'input','id','zad5b','type','number');
        addAttributTags(container,'p','id','result5')
        addTagAndAttributes(container,'button','onclick','zad5 ()','Определить');

  }
  if (indexSelected=="5") {
 		addContentTags(container,'p','Введите суммы покупки:');
        addTagAndAttributes(container,'input','id','zad6a','type','number');
        addAttributTags(container,'p','id','result6')
        addTagAndAttributes(container,'button','onclick','zad6 ()','Определить');

  }
   if ( indexSelected == '6' ) {
   		addContentTags(container,'p','Введите ваш вес:');
        addTagAndAttributes(container,'input','id','zad7a','type','number');
        addContentTags(container,'p','Введите ваш рост(в сантиметрах):');
        addTagAndAttributes(container,'input','id','zad7b','type','number');
        addAttributTags(container,'p','id','result7')
        addTagAndAttributes(container,'button','onclick','zad7 ()','Определить');

  }
  if (indexSelected=="7") {
 		addContentTags(container,'p','Введите x:');
        addTagAndAttributes(container,'input','id','zad8a','type','number');
        addContentTags(container,'p','Введите y:');
        addTagAndAttributes(container,'input','id','zad8b','type','number');
        addAttributTags(container,'p','id','result8')
        addTagAndAttributes(container,'button','onclick','zad8 ()','Определить');

  }

  if ( indexSelected == '8' ) {
  		addContentTags(container,'p','Введите x:');
        addTagAndAttributes(container,'input','id','zad9a','type','number');
        addContentTags(container,'p','Введите y:');
        addTagAndAttributes(container,'input','id','zad9b','type','number');
        addContentTags(container,'p','Введите l:');
        addTagAndAttributes(container,'input','id','zad9l','type','number');
        addContentTags(container,'p','Введите m:');
        addTagAndAttributes(container,'input','id','zad9m','type','number');
        addAttributTags(container,'p','id','result9')
        addTagAndAttributes(container,'button','onclick','zad9 ()','Определить');

  }
  if (indexSelected=="9") {
 		addContentTags(container,'p','Введите четырехзначное число:');
        addTagAndAttributes(container,'input','id','zad10a','type','number');
        addAttributTags(container,'p','id','result10')
        addTagAndAttributes(container,'button','onclick','zad10 ()','Определить');

  }
   if ( indexSelected == '10' ) {
   		addContentTags(container,'p','Введите трехзначные число:');
        addTagAndAttributes(container,'input','id','zad11a','type','number');
        addAttributTags(container,'p','id','result11')
        addTagAndAttributes(container,'button','onclick','zad11 ()','Определить');

  }
  if (indexSelected=="11") {
 		addContentTags(container,'p','Введите x:');
        addTagAndAttributes(container,'input','id','zad12a','type','number');
        addContentTags(container,'p','Введите y:');
        addTagAndAttributes(container,'input','id','zad12b','type','number');
        addContentTags(container,'p','Введите l:');
        addTagAndAttributes(container,'input','id','zad12l','type','number');
        addContentTags(container,'p','Введите m:');
        addTagAndAttributes(container,'input','id','zad12m','type','number');
        addAttributTags(container,'p','id','result12')
        addTagAndAttributes(container,'button','onclick','zad12 ()','Определить');

  }
   if ( indexSelected == '12' ) {
   		addContentTags(container,'p','Введите первый члена арифметической прогрессии:');
        addTagAndAttributes(container,'input','id','zad13a','type','number');
        addContentTags(container,'p','Введите второй члена арифметической прогрессии:');
        addTagAndAttributes(container,'input','id','zad13b','type','number');
        addContentTags(container,'p','Введите произвольное целое число:');
        addTagAndAttributes(container,'input','id','zad13c','type','number');
        addAttributTags(container,'p','id','result13')
        addTagAndAttributes(container,'button','onclick','zad13 ()','Определить');

  }
  if (indexSelected=="13") {
 		addContentTags(container,'p','Введите x:');
        addTagAndAttributes(container,'input','id','zad14a','type','number');
        addAttributTags(container,'p','id','result14')
        addTagAndAttributes(container,'button','onclick','zad14 ()','Определить');
  }


};


function addTagAndAttributes(container, TagName, Attribute, AttributeName, Attribute_or_Content, Attribute_Name1) {

    /*  containerName - Имя контейнера который будем добавить тег
    *   TagName - Тег который будем добавлить П: p, div и т.д.
    *   Attribute - Атрибут тега который будем устаноливать
    *   AttributeName - Имя или тип атрибута
    *   Attribute_or_Content - 2-атрибут для тегов input, video  т.д. Или контент для тегов p, div и т.д.
    *   Attribute_Name1 - Имя или тип 2-го атрибута
    */

    // Проверка правильно ли написано аргументы функции
 

    
    // Создаем новый тег или изменим содержания существующего(думаю, лучше будет отдолное функции создать)
    let tag=document.createElement(TagName);

    // Лучше использовать универсальный document.querySelector(selectors)!!
    // let container=document.getElementById(containerName)

    // Не понял, почему здесь это не работал 

  
    
    /*  Надо погуглить!!!

    Погуглил 01.12.2018

    в document.querySelector(selectors)
    тоже надо писать как в CSS
       */
    
    // Добавлаем нужный тег с атрибутами
    if (TagName=='input'||TagName=='img'||TagName=='video'||TagName=='audio'||TagName=='iframe') {
        tag.setAttribute(Attribute, AttributeName);
        tag.setAttribute(Attribute_or_Content, Attribute_Name1);
        container.appendChild(tag);
    }
    else {
    tag.setAttribute(Attribute, AttributeName);
    tag.innerHTML= Attribute_or_Content;
    container.appendChild(tag);
    }
    
}




//  Это мои первые коды который писал в js...
//   Этих заданий можно было бы решить по другому.. Нехотел переписывать весь код.
//    Поэтому буду использоваь их..


function zad1 (){
            let a = parseInt(document.getElementById('zad1a').value);   
            let b = parseInt(document.getElementById('zad1b').value);
            let c = parseInt(document.getElementById('zad1c').value);
            
            if (a==b || b==c || a==c) {
                document.getElementById('result').innerHTML="Есть пара равных между собой чисел.";
            } else {
                document.getElementById('result').innerHTML="Нет пара равных между собой чисел.";
            }

}

function zad2 (){
            let a = parseInt(document.getElementById('zad2a').value);   
            let b = parseInt(document.getElementById('zad2b').value);
            let c = parseInt(document.getElementById('zad2c').value);
            
            if (a>0&&b>0&&c>0){
            if (a==b && b==c && a==c) {
                document.getElementById('result2').innerHTML="Треугольник является равносторонним.";
            } else {
                document.getElementById('result2').innerHTML="Треугольник неявляется равносторонним.";
            }} else {
                document.getElementById('result2').innerHTML="Cтороны треугольник должен быть больше 0.";
            }

}



function zad3 (){
            let a = parseInt(document.getElementById('zad3a').value);   
            let b = parseInt(document.getElementById('zad3b').value);
            let c = parseInt(document.getElementById('zad3c').value);
            
            if (a>0&&b>0&&c>0){
            if (a+b>c&&b+c>a&& a+c>b) {
                document.getElementById('result3').innerHTML="Cуществует.";
            } else {
                document.getElementById('result3').innerHTML="Несуществует.";
            }} else {
                document.getElementById('result3').innerHTML="Cтороны треугольник должен быть больше 0.";
            }

}

function zad4 (){
            let a = parseInt(document.getElementById('zad4a').value);   
            let b = parseInt(document.getElementById('zad4b').value);
        if (a!=0&&b!=0) {
            if (a%b==0){
                document.getElementById('result4').innerHTML=b+' является делителем '+a;
            } else if (b%a==0) {
                document.getElementById('result4').innerHTML=a+" является делителем "+b;
            } else (
                document.getElementById('result4').innerHTML=a+" и "+b+" не является делителем друг-друга."
            )
        } else (
            document.getElementById('result4').innerHTML="А и B не должень быть равен нулю"
        )
    

}


function zad5 (){
            let r = parseInt(document.getElementById('zad5a').value);   
            let a = parseInt(document.getElementById('zad5b').value);

            
            if (r>0&&a>0){
            if ((a/2)>=r) {
                document.getElementById('result5').innerHTML="Да поместится.";
            } else {
                document.getElementById('result5').innerHTML="Непоместится.";
            }} else {
                document.getElementById('result5').innerHTML="Cтороны радиус и сторона должен быть больше 0.";
            }

}

function zad6 (){
            let common_money = parseInt(document.getElementById('zad6a').value);    
            if (common_money>200) {
            let discount =(common_money*3)/100;
            let remainder=common_money-discount;
            document.getElementById('result6').innerHTML="Вы будете платить "+remainder +" $";
            } else if (common_money>0&&common_money<200) {
                document.getElementById('result6').innerHTML="Вы будете платить  "+common_money+" $";
            } else {
                document.getElementById('result6').innerHTML="Вы что? Ничего же не купили."
            }
}


function zad7 (){
            let weight = parseInt(document.getElementById('zad7a').value);  
            let growth = parseInt(document.getElementById('zad7b').value);
            let optimal_weight=growth-100;
            if (weight>0&&growth>0){
            if (growth>110&&weight>10&&growth<250&&weight<300) {
                if (weight>optimal_weight) {
                let lose_weight=weight-optimal_weight;
                document.getElementById('result7').innerHTML="У вас неоптимальный вес "+weight+" кг. Вам надо на "+lose_weight+"кг похудеть.";
            } else if (weight==optimal_weight) {
                document.getElementById('result7').innerHTML="У вас оптимальный вес "+weight+" кг.";
            } else {
                let get_better=optimal_weight-weight;
                document.getElementById('result7').innerHTML="У вас неоптимальный вес "+weight+" кг. Вам надо на "+get_better+"кг поправиться."
            }} else (
                document.getElementById('result7').innerHTML="У человека обычно рост будет от 110 до 250, а масса будет от 10 до 300" +'<br> Правильно введите данные'
            )} else (
                document.getElementById('result7').innerHTML="Правильно введите данные "
            )
        
}


function zad8 (){
            let x = parseInt(document.getElementById('zad8a').value);   
            let y = parseInt(document.getElementById('zad8b').value);
            let result =document.getElementById('result8');
            if (x==0&&y==0) {
                result.innerHTML="Ваш точка в центре";
            } else if (y>0&&x<0) {
                result.innerHTML="Ваш точка ("+x+'; '+y+") в II-областe.";
            } else if (y>0&&x>0) {
                result.innerHTML="Ваш точка ("+x+'; '+y+") в I-областe.";
            } else if (y<0&&x<0) {
                result.innerHTML="Ваш точка ("+x+'; '+y+") в III-областe.";
            } else if (y<0&&x>0) {
                result.innerHTML="Ваш точка ("+x+'; '+y+") в IV-областe.";
            } else if (y==0||x==0) { 
                result.innerHTML="x или y равен нулю"
            }
        
}


function zad9 (){
            let x = parseInt(document.getElementById('zad9a').value);   
            let y = parseInt(document.getElementById('zad9b').value);
            let l = parseInt(document.getElementById('zad9l').value);   
            let m = parseInt(document.getElementById('zad9m').value);
            let a, b;
            a=(x+y)%2;
            b=(m+l)%2;
            if (x>8||y>8||l>8||m>8||x<1||y<1||l<1||m<1) {
                document.getElementById('result9').innerHTML="В поле шахматной доски натуральный числы не превосходит 8 и не меньше 1"
            } else if (a==0&&b==0) {
                document.getElementById('result9').innerHTML="Обе фигуры находиться в места с одинаковый черным цветом"
            } else if (a==1&&b==1) {
                document.getElementById('result9').innerHTML="Обе фигуры находиться в места с одинаковый белым цветом"
            } else if (a==1&&b==0) {
                document.getElementById('result9').innerHTML="Ваш первый фигура находиться в месте с белом цветом, второй находиться в месте черным цветом"
            } else if (a==0&&b==1) {
                document.getElementById('result9').innerHTML="Ваш первый фигура находиться в месте с черным цветом, второй находиться в месте белым цветом"
            }


}


function zad10 (){
            let x =(document.getElementById('zad10a').value);
            let a, b, c, d;

            
            if (x>999&&x<10000) {   
            a=x[0];
            b=x[1];
            c=x[2];
            d=x[3];
            
            if (a==d&&b==c) {
                document.getElementById('result10').innerHTML="Палиндром"
            } else (
                document.getElementById('result10').innerHTML="Непалиндром"
                )
    } else (
        document.getElementById('result10').innerHTML="Введите четырехзначное число!"
    )

}
function zad11() {
    let x = (document.getElementById('zad11a').value);
    let a, b, c;




    if (x < 1000 && x > 99) {
        a = parseInt(x[0]);
        b = parseInt(x[1]);
        c = parseInt(x[2]);

        let d, f, g, h, j, k;

        if (a != b && b != c && c != a && a != 0 && b != 0 && c != 0) {
            d = a * 100 + b * 10 + c;
            f = a * 100 + c * 10 + b;
            g = b * 100 + c * 10 + a;
            h = b * 100 + a * 10 + c;
            j = c * 100 + b * 10 + a;
            k = c * 100 + b * 10 + b;
            document.getElementById('result11').innerHTML = d + "<br>" + f + "<br>" + g + "<br>" + h + "<br>" + j + "<br>" + k + "<br>";
        } else if (a == b && b == c && c == a) {
            h = b * 100 + c * 10 + a;

            document.getElementById('result11').innerHTML = h + "<br>";
        }  else if (b==0&&c==0) {
             h = a * 100 + c * 10 + b;

            document.getElementById('result11').innerHTML = h + "<br>";
        } else if (a==b&&c==0) {
            d = a * 100 + b * 10 + c;
            f = a * 100 + c * 10 + b;

            document.getElementById('result11').innerHTML = d + "<br>" + f + "<br>";
        } else if (a==c&&b==0) {
            d = a * 100 + b * 10 + c;
            f = a * 100 + c * 10 + b;

            document.getElementById('result11').innerHTML = d + "<br>" + f + "<br>";
        }
        else if (c == 0) {
            d = a * 100 + b * 10 + c;
            f = a * 100 + c * 10 + b;
            g = b * 100 + c * 10 + a;
            h = b * 100 + a * 10 + c;

            document.getElementById('result11').innerHTML = d + "<br>" + f + "<br>" + g + "<br>" + h + "<br>";

        } else if (b == 0) {
            d = a * 100 + b * 10 + c;
            f = a * 100 + c * 10 + b;
            j = c * 100 + b * 10 + a;
            k = c * 100 + a * 10 + b;

            document.getElementById('result11').innerHTML = d + "<br>" + f + "<br>" + j + "<br>" + k + "<br>";
        } else if (a == b) {
            d = a * 100 + b * 10 + c;
            f = c * 100 + a * 10 + b;
            h = a * 100 + c * 10 + b;


            document.getElementById('result11').innerHTML = d + "<br>" + f + "<br>" + h + "<br>";
        } else if (a == c) {
            d = a * 100 + b * 10 + c;
            f = b * 100 + a * 10 + c;
            h = a * 100 + c * 10 + b;

            document.getElementById('result11').innerHTML = d + "<br>" + f + "<br>" + h + "<br>";
        } else if (b == c) {
            d = a * 100 + b * 10 + c;
            f = c * 100 + a * 10 + b;
            h = b * 100 + c * 10 + a;

            document.getElementById('result11').innerHTML = d + "<br>" + f + "<br>" + h + "<br>";
        }
        
   } else (
   document.getElementById('result11').innerHTML = "Введите трехзначное число!"
   )
}

function zad12 (){
            let x = parseInt(document.getElementById('zad12a').value);  
            let y = parseInt(document.getElementById('zad12b').value);
            let l = parseInt(document.getElementById('zad12l').value);  
            let m = parseInt(document.getElementById('zad12m').value);

            if (x != l || y != m) {

                if (x > 8 || y > 8 || l > 8 || m > 8 || x < 1 || y < 1 || l < 1 || m < 1) {
                    document.getElementById('result12').innerHTML = "В поле шахматной доски натуральный числы не превосходит 8 и не будет меньше один "
                } else if (x == l || y == m) {
                    document.getElementById('result12').innerHTML = "Ладья может за один ход побить другую фигуру "
                } else (
                    document.getElementById('result12').innerHTML = "Ладья неможет за один ход побить другую фигуру "
                    )
            } else (
                document.getElementById('result12').innerHTML = "Правильно введите данные"
            )

}

function zad13 (){
            let a = parseInt(document.getElementById('zad13a').value);  
            let b = parseInt(document.getElementById('zad13b').value);
            let c = parseInt(document.getElementById('zad13c').value);  

            let difference=a-b;
            let ost=c-a;

            if(ost%difference==0) {
                document.getElementById('result13').innerHTML="Число принадлежит рассматриваемой арифметической прогрессии"
            } else (
                document.getElementById('result13').innerHTML="Число не принадлежит рассматриваемой арифметической прогрессии"
            )



}


function zad14 (){
            let x =(document.getElementById('zad14a').value);
            let y;
 
            
            if (x>=0) {
            if (x>7) {
                y=1+Math.pow(x, 2);
                document.getElementById('result14').innerHTML=y;
            } else {
                y=2+Math.pow(x, 1);
                document.getElementById('result14').innerHTML=y;
        }
    } else if (x<=-7) {
        y=10-(2*x);
        document.getElementById('result14').innerHTML=y;
    } else  {
        y=1/(2+x);
        document.getElementById('result14').innerHTML=y;
    }
    

}
