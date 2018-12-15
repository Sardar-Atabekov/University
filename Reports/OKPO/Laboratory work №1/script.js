        
let header=document.querySelector('header');
addTagAndAttributes(header, 'div','id','menu-icon','<span class="first"></span><span class="second"></span><span class="third"></span>');

// Создаем массив который храниться все загаловки задании
 let tasks= [
'1. Ввести значение угла в градусах. Вычислить . предварительно переведя угол в радианы. Составить блок-схему алгоритма решения и постановку задачи.',
'2. Вычислить . Составить блок-схему алгоритма решения и постановку задачи.',
'3. Найти площадь трапеции, если четыре заданных числа задают длины ее сторон. Составить блок-схему алгоритма решения и постановку задачи.',
'4. Вычислить тригонометрические функции для угла A. Составить блок-схему алгоритма решения и постановку задачи.',
'5. Вычислить возраст человека, если известен год его рождения. Составить блок-схему алгоритма решения и постановку задачи.',
'6. Дана величина А, выражающая объем информации в байтах. Перевести А в более крупные единицы измерения информации. Составить блок-схему алгоритма решения и постановку задачи.']

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

// Собития для выбора задании
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
    "https://drive.google.com/file/d/1X7n7pGhJhz2riv3SIbu6HtJ756CKDuzf/preview", 'class','files');

  let test=document.querySelector(".test");
  test.innerHTML='';
  let container=document.querySelector(".programma");
  container.innerHTML='';

  addContentTags(test,'h2',"Тестовые варианты");
  addTagAndAttributes (test,'iframe','src',
    'https://drive.google.com/file/d/1-Te2k0SPWEkOMsj53utqa540ue8cxt8K/preview', 'class','files')

  addContentTags(container,'h2','Программа');


	// Да это какой-то ужас. Но не хочу пересделать все эти задании. Поэтому буду как-то поддерживать старый код
	
  if ( indexSelected == '0' ) {
        addContentTags(container,'p','Введите а');
        addTagAndAttributes(container,'input','id','zada','type','number');
        addAttributTags(container,'p','id','result')
        addTagAndAttributes(container,'button','onclick','zad1 ()','Определить');
        
  }
  if (indexSelected=="1") {
        addContentTags(container,'p','Введите x1');
        addTagAndAttributes(container,'input','id','zada','type','number');
        addContentTags(container,'p','Введите x2');
        addTagAndAttributes(container,'input','id','zadb','type','number');
        addAttributTags(container,'p','id','result')
        addTagAndAttributes(container,'button','onclick','zad2 ()','Определить');

  }
   if ( indexSelected == '2' ) {
         addContentTags(container,'p','Введите a');
        addTagAndAttributes(container,'input','id','zada','type','number');
        addContentTags(container,'p','Введите b');
        addTagAndAttributes(container,'input','id','zadb','type','number');
         addContentTags(container,'p','Введите c');
        addTagAndAttributes(container,'input','id','zadc','type','number');
        addContentTags(container,'p','Введите d');
        addTagAndAttributes(container,'input','id','zadd','type','number');
        addAttributTags(container,'p','id','result')
        addTagAndAttributes(container,'button','onclick','zad3 ()','Определить');
  }
  if (indexSelected=="3") {
        addContentTags(container,'p','Введите а');
        addTagAndAttributes(container,'input','id','zada','type','number');
        addAttributTags(container,'p','id','result')
        addTagAndAttributes(container,'button','onclick','zad4 ()','Определить');

  }
   if ( indexSelected == '4' ) {
        addContentTags(container,'p','Введите а');
        addTagAndAttributes(container,'input','id','zada','type','number');
        addAttributTags(container,'p','id','result')
        addTagAndAttributes(container,'button','onclick','zad5 ()','Определить');

  }
  if (indexSelected=="5") {
        addContentTags(container,'p','Введите а');
        addTagAndAttributes(container,'input','id','zada','type','number');
        addAttributTags(container,'p','id','result')
        addTagAndAttributes(container,'button','onclick','zad6 ()','Определить');

  }
   


};

function zad1 (){
          let pi=3.14, b;
          let a = parseInt(document.getElementById('zada').value);   
          b = (a * pi) / 180;
          let sin=Math.sin( 3 * pi - 2 * b );
          let cos=Math.cos(5 * pi + 2 * b );
          sin=sin*sin;
          cos=cos*cos;
          let result=2 * sin * cos;
          document.getElementById('result').innerHTML="z1 = "+result;
}      

function zad2 () {
  let a = parseInt(document.getElementById('zada').value);   
  let b = parseInt(document.getElementById('zadb').value);
  let y=Math.pow(2, a)+Math.pow(4,b);
  document.getElementById('result').innerHTML="y = "+y;
}


function zad3 () {
    let a = parseInt(document.getElementById('zada').value);   
    let b = parseInt(document.getElementById('zadb').value);
    let c = parseInt(document.getElementById('zadc').value);   
    let d = parseInt(document.getElementById('zadd').value);
    if(a>0&&b>0&&c>0&&d>0){
    let sqr,sum,por;
    sum=(a+b)/2;
    let x=Math.pow((b-a),2)+Math.pow(c,2)-Math.pow(d, 2);
    let y=2*(b-a);
      if(y!=0){
        let q=x/y;
        let z=Math.pow(q, 2);
        sqr=Math.sqrt(Math.pow(c,2)-z);
        if (sqr>0) {
           por=sqr*sum;
           document.getElementById('result').innerHTML="Площадь трапеции = "+por;
        } else {
           document.getElementById('result').innerHTML="Правильно введите данные!";
          }
        } else {
         document.getElementById('result').innerHTML="Правильно введите данные!";
        }
      } else {
    document.getElementById('result').innerHTML="Стороны трапеции должна быть больше нуля ";
  }
}


function zad4 () {
      let a = parseInt(document.getElementById('zada').value);  
      let s=Math.sin(a);
      document.getElementById('result').innerHTML="Синус ="+s;
}

function zad5 () {
      let a = parseInt(document.getElementById('zada').value);
      if (a>1920&&a<2018) {
        let result= 2018-a;
        document.getElementById('result').innerHTML="Вам " +result+" лет.";
      }  else {
        document.getElementById('result').innerHTML="Правильно введите данные";
      }
}

function zad6 () {
      let a = parseInt(document.getElementById('zada').value);
      if (a>0) {
        let result= a/1024;
        document.getElementById('result').innerHTML="Объем информации в килобайтах  " +result;
      }  else {
        document.getElementById('result').innerHTML="Правильно введите данные";
      }
}
function addTagAndAttributes(container, TagName, Attribute, AttributeName, Attribute_or_Content, Attribute_Name1) {

    /*  containerName - Имя контейнера который будем добавить тег
    *   TagName - Тег который будем добавлить П: p, div и т.д.
    *   Attribute - Атрибут тега который будем устаноливать
    *   AttributeName - Имя или тип атрибута
    *   Attribute_or_Content - 2-атрибут для тегов input, video  т.д. Или контент для тегов p, div и т.д.
    *   Attribute_Name1 - Имя или тип 2-го атрибута
    */
 
    
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
