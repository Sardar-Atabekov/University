        
let header=document.querySelector('header');
addTagAndAttributes(header, 'div','id','menu-icon','<span class="first"></span><span class="second"></span><span class="third"></span>');

// Создаем массив который храниться все загаловки задании
 let tasks= [
'1. С клавиатуры вводятся 2 целых числа A, B и знак операции (+, -, *, /). В зависимости от знака операции выполнить соответствующее действие.',
'2.  Найти корни квадратного уравнения вида ax<sup>2</sup> + bx + c = 0 (a ≠ 0). В случае, если корней нет, то выдать соответствующее сообщение.',
'3.  С клавиатуры вводятся порядковый номер дня недели. В соответствии с веденым значением вывести символьное название дня недели.',
'4.  Составить расписание на неделю. Пользователь вводит порядковый номер дня недели и у него на экране отображается, то, что запланировано на этот день.',
'5.  Составить программу, в которой реализуются следующие условия: в соответствии с введенным числом вывести таблицу умножения с его участием.']

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
    'https://drive.google.com/file/d/1I21Fk_KM6bN1WOx9R0QqA2_hD1agjtzb/preview', 'class','files')

    let test=document.querySelector(".test");
  test.innerHTML='';
  let container=document.querySelector(".programma");
  container.innerHTML='';

  addContentTags(test,'h2',"Тестовые варианты");
  addTagAndAttributes (test,'iframe','src',
    'https://drive.google.com/file/d/1iGucY-gp18qNuly3zbQR4TMtZI1XxEHx/preview', 'class','files')

  addContentTags(container,'h2','Программа');


	// Да это какой-то ужас. Но не хочу пересделывать все эти задании. Поэтому буду как-то поддерживать его
	
  if ( indexSelected == '0' ) {
        addContentTags(container,'p','Введите а');
        addTagAndAttributes(container,'input','id','zad1a','type','number');
        addContentTags(container,'p','Введите знак операции:');
        addTagAndAttributes(container,'input','id','zad1b','type','text');
        addContentTags(container,'p','Введите b');
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
        addAttributTags(container,'p','id','result')
        addTagAndAttributes(container,'button','onclick','zad2 ()','Определить');

  }
   if ( indexSelected == '2' ) {
    		addContentTags(container,'p','Введите номер дня:');
        addTagAndAttributes(container,'input','id','zad3a','type','number');;
        addAttributTags(container,'p','id','result')
        addTagAndAttributes(container,'button','onclick','zad3 ()','Определить');

  }
  if (indexSelected=="3") {
 	    	addContentTags(container,'p','Введите номер дня:');
        addTagAndAttributes(container,'input','id','zad4a','type','number');
        addAttributTags(container,'p','id','result')
        addTagAndAttributes(container,'button','onclick','zad4 ()','Определить');

  }
   if ( indexSelected == '4' ) {
   		  addContentTags(container,'p','Введите положительное число:');
        addTagAndAttributes(container,'input','id','zad5a','type','number');
        addAttributTags(container,'p','id','result')
        addTagAndAttributes(container,'button','onclick','zad5 ()','Определить');

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
      let mark = document.getElementById('zad1b').value;
      let b=parseInt(document.getElementById('zad1c').value);
      let c;

      switch (true) {
      case mark=='*':
        c=a*b;
        document.getElementById('result').innerHTML=c;
        break;
      

      case mark=='+':
        c=a+b;
        document.getElementById('result').innerHTML=c;
        break;
      case mark=='-':
         c=a-b;
        document.getElementById('result').innerHTML=c;
        break;
      case mark=='/':
      if(b!=0){
         c=a/b;
        document.getElementById('result').innerHTML=c;
      } else (
        document.getElementById('result').innerHTML="Правильно введите данные"
      )     
        break;
        default:
          document.getElementById('result').innerHTML="Правильно введите данные";
  }
} 
  
 

function zad2 (){
      let a = parseInt(document.getElementById('zad2a').value); 
      let b = parseInt(document.getElementById('zad2b').value);
      let c = parseInt(document.getElementById('zad2c').value);
      
      let D, x1, x2;

      D=Math.sqrt((Math.pow(b, 2))-(4*a*c));
      if (a!=0) {
      switch (true) {

      case D>0:
        x1=((-b)-D)/(2*a);
        x2=((-b)+D)/(2*a);
         document.getElementById('result').innerHTML="x<sub>1</sub>= "+x1+'<br>'+"x<sub>2</sub>= "+x2+'<br>';
          break;

      case D==0:
          x1=(-b)/2*a;
          x2=x1;

          document.getElementById('result').innerHTML="x<sub>1</sub>= "+x1+'<br>'+"x<sub>2</sub>= "+x2+'<br>';
      break;
      
        default:
          document.getElementById('result').innerHTML="Корней нет";

}}         else (
         document.getElementById('result').innerHTML="Правильно введите данные"
        )

}

function zad3 (){
      let a = parseInt(document.getElementById('zad3a').value); 

      switch (true) {

      case a>0 && a<8:
        var days= ['Понедельник', 'Вторник', 'Среда' , 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
        b=a-1;
         document.getElementById('result').innerHTML=days[b];

          break;
       
        default:
          document.getElementById('result').innerHTML="Нет такой день";
} }

function zad4 (){
      let a = parseInt(document.getElementById('zad4a').value); 
      let q, b, c , d, f, g, h;
      q='Сегодня Понедельник что-то надо делать'
      b='Сегодня Вторник что-то надо делать'
      c='Сегодня Среда что-то надо делать'
      d='Сегодня Четверг что-то надо делать'
      f='Сегодня Пятница что-то надо делать'
      g='Сегодня Суббота что-то надо делать'
      h='Сегодня Воскресенье что-то надо делать'
      switch (true) {

      case a>0 && a<8:
        var days= [q, b, c , d, f, g, h];
        b=a-1;
         document.getElementById('result').innerHTML=days[b];

          break;
       
        default:
          document.getElementById('result').innerHTML="Нет такой день";
} }


function zad5 (){
      let a = parseInt(document.getElementById('zad5a').value);
      document.getElementById('result').innerHTML='';
      if (a>0) {
       for (var i =1; i <= 9; i++) {
        s=a*i;
        document.getElementById('result').innerHTML+=a+'*'+i+' = '+s+'<br>';
       }} else {
          document.getElementById('result').innerHTML='Правильно введите данные';
       }
      


}