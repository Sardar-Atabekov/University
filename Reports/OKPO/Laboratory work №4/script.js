        
let header=document.querySelector('header');
addTagAndAttributes(header, 'div','id','menu-icon','<span class="first"></span><span class="second"></span><span class="third"></span>');


// Скрипт для меню
$("#menu-icon").on("click", function() {
    $("nav").slideToggle();
    $(this).toggleClass("active");
});

// Создаем массив который храниться все загаловки задании
 let tasks= [
'6. Найти сумму чисел, кратных трем, в диапазоне от 0 до 50.'+
'<br> 7.  Найти сумму первых десяти чисел, кратных пяти.'+
'<br> 8.  Найти произведение четных чисел в диапазоне от 2 до 30.'+
'<br> 10. Требуется найти сумму чисел, кратных 7, в диапазоне от 0 до 100. Вывести сумму и их количество.',
'9. Вводятся положительные числа. Прекратить ввод, когда сумма введенных чисел превысит 100.',
'11.  Вводятся n чисел. Определите количество отрицательных, положительных чисел и нулей.',
'12.  Вывести такие двузначные числа, которые делятся на 4, но не делятся на 6.',
'13.  Определить количество целых чисел, кратных 3 (от 3 и далее), дающих в сумме число, не превышающее 200.',
'14.  Вводятся 10 чисел. Вывести на экран сумму положительных и отрицательных чисел и их количество.',
'15.  Определить значения произведений чисел а и b. Числа a изменяются от 1 до 11 с шагом 1, b – от 1 до 3 с шагом 0,2.',
'16.  Решив заняться легкой атлетикой, вы пробежали в первый день 2 км. Сколько км Вы пробежите за 2 недели, если каждый день вы увеличиваете дистанцию на 10% от предыдущего дня.'
]

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
  addContentTags(containerGlav,'p',tasks[indexSelected]);

  addContentTags(containerGlav,'h2',"Блок-схема");
  addTagAndAttributes (containerGlav,'iframe','src',
        
    'https://drive.google.com/file/d/1Q922l4eHSUDxJmCrTlbXqxTa-0Hh885g/preview', 'class','files')

   let test=document.querySelector(".test");
  test.innerHTML='';
  let container=document.querySelector(".programma");
  container.innerHTML='';

  addContentTags(test,'h2',"Тестовые варианты");
  addTagAndAttributes (test,'iframe','src',
    'https://drive.google.com/file/d/1-EKn9r4gHsmVR28d-JK1C3dHRcUA-KcI/preview', 'class','files')

  addContentTags(container,'h2','Программа');


	// Да это какой-то ужас. Но не хочу пересделывать все эти задании. Поэтому буду как-то поддерживать его
	
  if ( indexSelected == '0' ) {
        addContentTags(container,'p','От');
        addTagAndAttributes(container,'input','id','lab4zad1a','type','number');
        addContentTags(container,'p','До');
        addTagAndAttributes(container,'input','id','lab4zad1b','type','number');
        addContentTags(container,'p','кратных:');
        addTagAndAttributes(container,'input','id','lab4zad1c','type','number');
        addAttributTags(container,'p','id','result')
        addTagAndAttributes(container,'button','onclick','zad1 ()','Определить');
   
  }
  if (indexSelected=="1") {
        addAttributTags(container,'p','id','result')
        addTagAndAttributes(container,'button','onclick','zad2 ()','Определить');
  }
   if ( indexSelected == '2' ) {
   		addContentTags(container,'p','Введите n');
        addTagAndAttributes(container,'input','id','lab4zad3a','type','number');
        addAttributTags(container,'p','id','result')
        addTagAndAttributes(container,'button','onclick','zad3 ()','Определить');

  }
  if (indexSelected=="3") {
 		addContentTags(container,'p','От');
        addTagAndAttributes(container,'input','id','lab4zad4a','type','number');
        addContentTags(container,'p','Дo');
        addTagAndAttributes(container,'input','id','lab4zad4b','type','number');
        addAttributTags(container,'p','id','result')
        addTagAndAttributes(container,'button','onclick','zad4 ()','Определить');

  }
   if ( indexSelected == '4' ) {
        addAttributTags(container,'p','id','result')
        addTagAndAttributes(container,'button','onclick','zad5 ()','Определить');

  }
  if (indexSelected=="5") {
        addAttributTags(container,'p','id','result')
        addTagAndAttributes(container,'button','onclick','zad6 ()','Определить');

  }
   if ( indexSelected == '6' ) {
        addAttributTags(container,'p','id','result')
        addTagAndAttributes(container,'button','onclick','zad7 ()','Определить');
  }

  if (indexSelected=="7") {
        addContentTags(container,'p','Сколько пробежали в первый день?');
        addTagAndAttributes(container,'input','id','lab4zad8a','type','number');
        addContentTags(container,'p','Сколько день бегали');
        addTagAndAttributes(container,'input','id','lab4zad8b','type','number');
        addContentTags(container,'p','На сколько % увеличивали дистанцию?');
        addTagAndAttributes(container,'input','id','lab4zad8c','type','number');
        addAttributTags(container,'p','id','result')
        addTagAndAttributes(container,'button','onclick','zad8 ()','Определить');

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


function zad1(){ 
        let summa=0;
        let proizv=1;
        let quantity=0;
        let f=0;

        let a = parseInt(document.getElementById('lab4zad1a').value); 
        let b = parseInt(document.getElementById('lab4zad1b').value);
        let c = parseInt(document.getElementById('lab4zad1c').value);
        
        if(a<b&&c!=0) {
          for(i=a;i<=b;i++){
            if (i%c==0) {
              summa+=i;
              quantity=quantity+1;
              proizv*=i;
              f=f+i+" ";
            }  
          }
          if (quantity>0) {
           document.getElementById('result').innerHTML="Сумма чисел ="+summa+"<br> Количество ="+quantity+"<br> Произведение чисел ="+proizv+
          "<br> Числы, от "+a+" до "+b+" кратных "+ c+" : "+f;
          } else (
          document.getElementById('result').innerHTML="Нету числа от "+a+" до "+b+" кратных "+ c
          )
          } else (
          document.getElementById('result').innerHTML="Правильно введите данные!"
        )
            

 }  


  function zad2(){ 
    let summa=0;
    let  a;
          for (let i =1; summa <=100; i++) {
        a = parseInt(prompt("Введите числы"));
        summa=summa+a;
          if (summa>=100) {
              alert("Сумма введенных чисел ="+summa)
            }
          }   
 }  




function zad3(){ 
        let pol, zero, otr, a;
        pol=0;
        zero=0;
        otr=0;
        let n = parseInt(document.getElementById('lab4zad3a').value); 
        for (let i =1; i <=n; i++) {
          a = prompt("Введите числы")
          if (a>0) {
            pol=pol+1;
          } else if (a==0) {
            zero=zero+1;
          } else if (a<0) {
            otr=otr+1;
          }   
          }  
        let summa=otr+zero+pol;
        document.getElementById('result').innerHTML="Общее колечество чисел ="+summa+"<br> Количество отрицательных чисел ="+
        otr+"<br> Количество положительных чисел  ="+pol+"<br> Количество нулей ="+zero;
 }  


function zad4(){ 
      
        let a = parseInt(document.getElementById('lab4zad4a').value); 
        let b = parseInt(document.getElementById('lab4zad4b').value);
        let quantity=0;
        let f=0;
        if (a<b) {
        
        for (let i =a; i <=b; i++) {
          if (i%4==0&&i%6!=0) {
            f=f+i+" ";
            quantity=quantity+1;
          } 
            
        } if (quantity>0) {
          document.getElementById('result').innerHTML="Числы, которые делятся на 4, но не делятся на 6 : "+f+
            "<br> Количество чисел ="+quantity;
        } else (
          document.getElementById('result').innerHTML="Нету числа от "+a+" до "+b+" которые делятся на 4, но не делятся на 6 "
        )
      } else (
          document.getElementById('result').innerHTML="Правильно введите данные!"
      )
        
        
 }

 function zad5(){ 
      
        let a =   3;
        let b = 300;
        let f=0;
        let sum=0;
        let quantity=0;
        
        for (let i =a; i <=b&&sum<=200; i++) {
          if (i%3==0) {
            f=f+i+", ";
            quantity=quantity+1;
            sum+=i;
          } 
            
        } 
      document.getElementById('result').innerHTML="Числы, которые делятся на 3: "+f+"<br> Сумма чисел ="+sum+"<br> Количество ="+quantity;
        
        
 }    

  function zad6(){ 
        let sumpol=0, colpol=0, sumotr=0, colotr=0, colzero=0, a;


            for (let i =1; i<=10; i++) {
          a = parseInt(prompt("Введите числы"));
          if (a>0) {
            sumpol=sumpol+a;
            colpol=colpol+1;
          } else if (a<0) {
            sumotr=sumotr+a;
            colotr=colotr+1;
          } else if (a==0) {
            colzero=colzero+1;
          }
 }
        let summa=colzero+colotr+colpol;
        document.getElementById('result').innerHTML="Общее количество чисел = "+summa+"<br> Количество отрицательных чисел = "+
        colotr+"<br>Сумма отрицательных чисел = "+sumotr+"<br> Количество положительных чисел  = "+colpol+"<br>Сумма положительных чисел = "+sumpol+
        "<br> Количество нулей = "+colzero;
}


function zad7(){ 

        document.getElementById('result').innerHTML='';
        for (var a = 1, b=1; a < 11&&b<3;  a++, b=b+0.2) {
          let p=a*b;
          document.getElementById('result').innerHTML+='<br>'+a+" x "+b+" = "+p;
        }
 }  

 function zad8(){ 
        
        let a, b, c, d, sum1;
        let summa=0
         a = parseInt(document.getElementById('lab4zad8a').value); 
         b = parseInt(document.getElementById('lab4zad8b').value);
         c = parseInt(document.getElementById('lab4zad8c').value); 
        let sum=a;
        if (a>0&&b>0&&c>0) {}
        for (let i =1; i <b; i++) {
              
              d=(sum*c)/100;
              sum=sum+d;
              summa+=sum;

        } sum1=summa+a;

        
        document.getElementById('result').innerHTML="Вы пробежали за "+b+" день "+Math.floor(sum1);
 }  
