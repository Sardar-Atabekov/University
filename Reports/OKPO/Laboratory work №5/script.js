        
let header=document.querySelector('header');
addTagAndAttributes(header, 'div','id','menu-icon','<span class="first"></span><span class="second"></span><span class="third"></span>');

// Создаем массив который храниться все загаловки задании
 let tasks= [
'1. В массиве а(10) определить кол-во нулей.',
'2.  В массиве d(15) найти сумму чисел, расположенных на нечетных местах.',
'3.  В массиве чисел с(10) найти кол-во чисел, попавших в интервал [a , b].',
'4.  Найти номер первого нулевого элемента массива х(20) и сумму элементов, предшествующих ему.',
'5.  Известно, что в массиве а(16) кол-во отрицательных элементов равно '+
'кол-ву положительных. Составить новый массив так, чтобы ' 
+'чередовались положительные и отрицательные числа.',
'6.  Дана последовательность чисел с(16). Найти произведение элементов '+
 'этой последовательности до первого нулевого и сумму элементов, расположенных после него.',
'7.  Из данного массива чисел х(15) исключить последнее положительное число. Оставшиеся положительные числа переписать в новый массив.',
'8.  Все положительные элементы массива а(10), расположенные правее первого нулевого элемента, увеличить в два раза.',
'9.  Из заданного массива а(12), не содержащего нулей, получить массив b(12), приняв в'
+' качестве первых его элементов все положительные элементы массива а с сохранением порядка их следования, а в качества остальных элементов все отрицательные элементы так же с сохранением порядка их следования.',
'10. Дан массив с(15) состоящий из нулей и единиц. Подсчитать кол-во 0 и 1, и кол-во нулей до первой единицы.',
'11. По данным числам x, y, z получить массив а(17), где а(1)=х, а(2)=у, '+
'а(3)=x, а каждый следующий элемент массива определяется как среднее арифметическое трех предшествующих.',
'12. Все элементы массива а(9), начиная с первого по порядку положительного элемента, уменьшить на 0.5, если значение превышает 1, и увеличить на 0.5 в противном случае.',
'13. Если наименьший элемент массива х(27) больше 0.1, то все положительные элементы массива заменить единицей.',
'14. Среди отрицательных элементов массива х(50) найти минимальный и помножить на него все отрицательные элементы, стоящие левее этого минимального.',
'15. Из отрицательных элементов массива х(30) расположенных левее минимального элемента, сформировать новый массив.',
'16. В массиве у(25) поменять местами минимальный элемент с первым положительным элементом.'
]

function addContentTags(container,tag,content){
    let tagName=document.createElement(tag);
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
    "https://drive.google.com/file/d/1pPkiAJwuDXpZHeUdrRJiK25wyaHQAGAy/preview", 'class','files')

  let test=document.querySelector(".test");
  test.innerHTML='';
  let container=document.querySelector(".programma");
  container.innerHTML='';

  addContentTags(test,'h2',"Тестовые варианты");
  addTagAndAttributes (test,'iframe','src',
    'https://drive.google.com/file/d/1_O2eR6j0Z0ga3XUYdHvLUfvsTkRbRQKR/preview', 'class','files')

  addContentTags(container,'h2','Программа');


	// Да это какой-то ужас. Но не хочу пересделывать все эти задании. Поэтому буду как-то поддерживать его
  let zad='zad'+taskNumber+'()';
  addTagAndAttributes(container,'p','id','result');
  addTagAndAttributes(container,'button','onclick',zad,'Найти'); 

};





function addTagAndAttributes(container, TagName, Attribute, AttributeName, Attribute_or_Content='', Attribute_Name1) {

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


// Проверка на число
function N(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

// Удаления дубликатов из  массива
function pr(ar) {
      var obj = {};
   for (var i = 0; i < ar.length; i++) {
         var str = ar[i];
         obj[str] = true; // запомнить строку в виде свойства объекта
       }
  return Object.keys(obj); // или собрать ключи перебором для IE8-
}

// Округления число
function roundUp(num, precision) {
  precision = Math.pow(10, precision)
  return Math.round(num * precision) / precision
}


function proverca() {
  var a =prompt('Введите количество элементов в массиве:');
  var arr=[];
  if (a>1&&a<30) {
  for(let i=0; i < a; i++) {
      
      let nomer=i+1;
        let a = prompt('Введите '+nomer+'-число ')
        if (N(a)) {
          arr[i]=parseInt(a); 
        } else {
          alert('Введите число');
          break;
        }
      
      }
  } else (
      alert('В массиве элементы должны быть больше 1 и меньше 30')
  )
  if (arr.length==a&&a>0) {
  return arr;
  }   
}


function zad1 (){ 
      let result=document.getElementById('result');
      let arr=proverca();
      if (arr) {
      let colzero=arr.filter(a=>a==0).length;
      if (colzero>0) {
      result.innerHTML='<br> Наш массив '+arr.join(', ')+'<br> Кол-во нулей = '+colzero;
  		} else {
  			result.innerHTML='<br> В массиве нет нулей '+arr.join(', ')
  		}
      } 
}


function zad2() {
  let result=document.getElementById('result');
  let arr=proverca();
  let sumCh=0, sum=0
  if (arr) {
    for (var i = 0; i < arr.length; i++) {
      if(i%2==0){
        sumCh+=arr[i];
      } else {
        sum+=arr[i];
      }
    }

    result.innerHTML='<br> Наш массив '+arr.join(', ')+'<br> Сумма элементов расположенных на нечетных местах '+sumCh+"<br> Сумма элементов расположенных на четных местах "+sum; 
  }
}

function zad3 (){
  let result=document.getElementById('result')
  let colvo=0;
  let sif=0;
  let arr=proverca();
  if (arr) {
  let a = parseInt(prompt('Введите a:'));
  let b = parseInt(prompt('Введите b:'));

  if(a<b&&a>0&&b>0&&b<=arr.length){
    for (var i = 1; i <= arr.length; i++) {
      
      if (i>=a&&i<=b) {
      colvo++
      sif=sif+arr[i-1]+' ';
      }
    }

      result.innerHTML='Наш массив '+arr.join(', ')+'<br> Наши числы '+sif+'<br> Кол-во цифр = '+colvo;

  } else {
    result.innerHTML='Правильно введите данные'
    }
  }
}

function zad4 (){
  let result=document.getElementById('result')
  let sum=0, n;
  let arr=proverca();

 if (arr) {
if(arr.includes(0)) {
  n=arr.indexOf(0);
  for (var i = 0; i <= n; i++) {
      sum=sum+arr[i];
  }
  n++
  result.innerHTML='Наш массив '+arr.join(', ')+'<br> Номер 1-го нуля - '+n+'<br> Сумма элементов, предшествующих ему= '+sum;
} else {
  result.innerHTML='В массиве нет нулей'
}
  }



  /*
for (var i = 0; i < arr.length; i++) {
      sum=sum+arr[i];
      if (arr[i]==0) {
        n=i+1;
        result.innerHTML='Наш массив '+arr+'<br> Номер 1-го нуля - '+n+'<br> Сумма элементов, предшествующих ему= '+sum;
        break;
      } else {
        result.innerHTML='В массиве нет нулей'
      }
  }*/
}


//alert( '\u00A9')
function zad5 (){
  let result=document.getElementById('result')
  var sum=0, p=0, o=1, pc=0, oc=0;
  let arr=proverca();
  let array=[]
  if (arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]<0) {
        oc++
      } else {
        pc++
      }
    }
    if (oc==pc) {
      for (let i = 0; i < arr.length; i++) {
        if(arr[i]<0){
          array[o]=arr[i]
          o=o+2;
        } else {
          array[p]=arr[i]
          p=p+2;
        }
      }
      result.innerHTML='Наш предыдущий массив '+arr.join(', ')+'<br> Наш новый массив '+array.join(', ');
    } else {
      result.innerHTML='Кол-во отрицательных элементов неравно кол-ву положительных.'
    }
  }
} 



function zad6 (){
  let result=document.getElementById('result')
  var sum=0,p=1, c=0, zero;
  let arr=proverca();
  result.innerHTML='';
  if (arr) {
    if(arr.includes(0)) {
    s=arr.indexOf(0);
      let i=s
      for (  i; i < arr.length; i++) {
        sum=sum+arr[i];
      
      }
      for (let a = 0; a < s; a++) {
      p=p*arr[a];
      }
        if (s==0) {
           result.innerHTML='Наш массив '+arr.join(', ')+
      '<br> Произведение не найдено: первый нулевой элемент - первый '+'<br> Cуммa элементов '+sum;
         } else if (s==arr.length-1) {
    result.innerHTML='Наш массив '+arr.join(', ')+
    '<br> Сумма не найдена: первый нулевой элемент - последний '+'<br> Произведение элементов'+p;
         } else {
           s++
    result.innerHTML='Наш массив '+arr.join(', ')+'<br> Произведение элементов '+p+
    '<br> Cуммa элементов '+sum+'<br> Номер 1-го нуля - '+s;
        }
          
    } else {
          result.innerHTML='В массиве нет нулей'
    }
  }
  

} 

function zad7 (){
  let result=document.getElementById('result')
  var s;
  let c=0;
  let arr=proverca();
  if (arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]>=0) {
        s=i;
        c++

      } else (
        result.innerHTML='В массиве нет положительных элементов'
      )
    }

    if(s&&c!=1) {
    let n=arr.splice(s, 1);
    result.innerHTML='Наш массив '+arr.join(', ')+'<br> Последнее положительное число было '+n;
    } else {
      result.innerHTML="Нет нового массива"
    }
  }
}

function zad8 (){
  let result=document.getElementById('result')
  var s;
  let arr=proverca();
  result.innerHTML='';
  if (arr) {
    if (arr.includes(0)) {
      s=arr.indexOf(0);
      result.innerHTML+='Наш массив '+arr.join(', ');
      for (let i=s; i<arr.length; i++){
        arr[i]=arr[i]*2;
      } 

    if (s!=arr.length-1) {
    result.innerHTML+='<br> Наш массив '+arr.join(', ')
    } else {
    result.innerHTML="Ничего не измениться"+'<br> Наш массив '+arr.join(', ')
    }
  } else {
    result.innerHTML='В массиве нет нулей'
  }
  }
}
/*function zad9 (){
  let result=document.getElementById('result8')
  let arr=proverca();
  let array;

  array=arr.sort((a, b) => a-b);
  array=array.reverse;
  alert(array)
}*/

function zad9() {
  let result=document.getElementById('result')
  let arr=proverca();
  let o, p, newarr;
  if (arr) {
    if (!arr.includes(0)) {
      o=arr.filter((otr) => otr<0)
      p=arr.filter((pl) => pl>0)
      newarr=p.concat(o);
      result.innerHTML='Owe array '+arr.join(', ')+'<br> Owe new array '+newarr.join(', ');
    } else {
      result.innerHTML="В массиве не должен быть 0"
    }
  }
}

function zad10() {
  let result=document.getElementById('result')
  let arr=proverca()
  if (arr) {
  let n=arr.indexOf(0);
  let s=arr.indexOf(1);
  let zero=arr.filter(a=>a==0).length;
  let one=arr.filter(a=>a==1).length;

  if (n!=-1&&s!=-1) {
    s++;
    result.innerHTML='Количество нулей '+zero+'<br> Количество единиц '+one+'<br> Место пeрвого единица '+s;
  } else if (n!=-1&&s==-1) {
    result.innerHTML='Количество нулей '+zero+'<br> В массиве нет единиц';
  } else if (n==-1&&s!=-1) {
    s++;
    result.innerHTML='В массиве нет нулей'+'<br> Количество единиц '+one +'<br> Место пeрвого единица '+s;
  } else {
      result.innerHTML='В массиве нет нулей и единиц ';
    }
  }
}

/*var numbers = [4, 2,-9,-87,-23, 5, 1, 3];
let c=numbers.filter(function(a) {

  return a>0 
});
console.log(c.sort((a, b) => a-b)); // [1, 2, 3, 4, 5]
*/
function zad11() {
  let result=document.getElementById('result');
  let arr=[];
  let x=prompt('Введите х'),
  y=prompt('Введите у'),
  z=prompt('Введите z');
  if(N(x)&&N(y)&&N(z)) {
    let n=prompt('Введите длина массива')
    if (n>3&&n<20) {
    n=parseInt(n);
    arr[0]=parseInt(x);
    arr[1]=parseInt(y);
    arr[2]=parseInt(z);
    for (var i = 3; i <n; i++) {
    let sum=arr[i-3]+arr[i-2]+arr[i-1];
      arr[i]=roundUp(sum/3, 1);
    }

    result.innerHTML='Наш массив '+arr.join(', ');
    } else {
      alert("Длина массива должен быть больше 3 и меньше 20");
    }
  } else {
    alert("Введите числы");
  }
}
/*Метод fill() заполняет все элементы массива от начального до конечного индексов одним значением.*/

function zad12() {
  let result=document.getElementById('result');
  let arr=proverca();
  if (arr) {
      let  n=arr.findIndex((a) => a>0);
  if(n!==-1) {
    for (var i = n; i < arr.length; i++) {
      arr[i]>1? arr[i]-=0.5 : arr[i]+=0.5;
    }
    if (n!=arr.length-1) {
      result.innerHTML='<br> Наш новый массив '+arr.join(', ')
    } else {
      result.innerHTML=' Ничего неизмениться';
    }
    
  } else {
    result.innerHTML='В массиве нет положительного элемента'
  }}
}

function zad13() {
  let result=document.getElementById('result');
  let arr=proverca();
  let arr1=arr.slice()
  let min=arr1.sort( (a, b) => a-b)[0];
  if(arr) {
  if (min>0.1) {
    let newarr=arr.map((a) => a>0?a=1:a)
    result.innerHTML='<br> Наш предыдущий массив '+arr.join(', ')+'<br> Наш новый массив '
    +newarr.join(', ')
  } else {
    result.innerHTML='Ничего неизмениться '+arr.join(', ');
  }}
}
// Тут есть ошибка ненравиться это!!
function zad14() {
  let result=document.getElementById('result');
  let arr=proverca();
  var min;
  if (arr) {
    let arr1=arr.slice();
    let arr2=arr.slice();
    min=arr2.sort((a, b)=> a-b)[0];
    if(min<0) {
      let n=arr.indexOf(min);
      if(n!=-1&&n!=0){
      for (var i = 0; i <n; i++) {
        if (arr[i]<0){
        arr[i]=arr[i]*min;
      }}
      result.innerHTML='<br> Наш предыдущий массив '+arr1.join(', ')+'<br> Наш новый массив '
    +arr.join(', ')
      } else {
        result.innerHTML='Ничего неизмениться '+arr.join(', ')
      }
    } else {
      result.innerHTML='В массиве нет отрицательных элементов '+arr.join(', ');
    }

  }

}

function zad15() {
  let result=document.getElementById('result');
  let arr=proverca();
  if(arr) {
  let arr1=arr.slice();
  let min=arr1.sort((a, b)=> a-b)[0];
  console.log(min);
  let n=arr.indexOf(min);
  console.log(n);
  let newarr=arr.slice(0, n);
  console.log(newarr);
  let  nw=newarr.filter(a=>a<0)
  if(min<0) {
    if (n!=0&&nw.length>1) {
    result.innerHTML='Наш массив '+arr.join(', ')+'<br> Мин элемент ='+min+
    "<br> Наш новый массив "+nw.join(', ');
    } else {
      result.innerHTML='Наш минимальный элемент первый, ничего не будент';
    }
  } else {
      result.innerHTML='В массиве нет отрицательных элементов '+arr.join(', ');
    }
  }
}

function zad16() {
  let result=document.getElementById('result');
  let arr=proverca();
  let arr1=arr.slice(), arr2=arr.slice(),
  min=arr1.sort((a, b)=> a-b)[0],
  s=arr.indexOf(min),
  n=arr.findIndex((a) => a>0);
  if(n!=-1) {
    arr[s]=arr[n];
    arr[n]=min;
    result.innerHTML='Наш предущий массив '+arr2.join(', ')+'<br> Мин элемент ='+min+
    '<br> 1-полежительный элемент'+arr2[n]+
  "<br> Наш новый массив "+arr.join(', ');  
  } else {
    result.innerHTML='В массиве нет положительных элементов '+arr.join(', ');
  }
}