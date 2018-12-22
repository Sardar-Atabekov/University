        
let header=document.querySelector('header');
addTagAndAttributes(header, 'div','id','menu-icon','<span class="first"></span><span class="second"></span><span class="third"></span>');

// Скрипт для меню
$("#menu-icon").on("click", function() {
    $("nav").slideToggle();
    $(this).toggleClass("active");
});

// Создаем массив который храниться все загаловки задании
 let tasks= [
 '1.  Дан целочисленный двумерный массив, размерности n х m. Найти сумму и произведение всех элементов массива.',
 '2.   Дан целочисленный двумерный массив, размерности n х m. Найти сумму и произведение четных элементов.',
 '3. Дан целочисленный двумерный массив, размерности n х m. Найти сумму и произведение элементов, кратных 3 и 5.',
 '4.  Дан целочисленный двумерный массив, размерности n х m. Найти количество отрицательных элементов, больше -9.',
 '5.  Дан целочисленный двумерный массив, размерности n х m. Найти номера нечетных элементов, стоящих на четных местах. ',
 '6.  Дан целочисленный двумерный массив, размерности n х m. Найти максимум и минимум. Поменять их местами.',
 '7.  Дан целочисленный двумерный массив, размерности n х m. Заменить все элементы на их квадраты.',
 '8.  Дан целочисленный двумерный массив, размерности n х m. Найти среднее арифметическое всех элементов массива.',
 '9.  Дан целочисленный двумерный массив, размерности n х m. Выяснить, какое число встречается в какой строке раньше — положительное или отрицательное.',
 '10. Дан целочисленный двумерный массив, размерности n х m. Выяснить, в какой строке последовательность является возрастающей или убывающей.',
 '11. Дан целочисленный двумерный массив, размерности n х m. Вывести его элементы, индексы которых являются степенями двойки (1, 2, 4, 8, 16, ...).',
 '12. Дан целочисленный двумерный массив, размерности n х m. Вывести на экран элементы, которые являются квадратами какого-либо числа.',
 '13. Дан целочисленный двумерный массив, размерности n х m. Поменять местами первый и последний элементы.',
 '14. Дан целочисленный двумерный массив, размерности n х m. Сформировать новый массив, состоящий из противоположных соответствующих элементов.',
 '15. Дан целочисленный двумерный массив, размерности n х m. Вывести на экран те элементы, у которых остаток от деления на m равен k. ',
 '16. Вводятся результаты контрольной работы 10 учащихся. Определите число не удовлетворительных, удовлетворительных, хороших, отличных оценок. Вывести среднюю оценку, полученную учащимися за контрольную работу.',
 '17. Ввести оценки N учеников по K предметам. Определить и вывести на экран количество учеников, не получивших ни одной "5".',
 '18. В группе учится N студентов, студенты получили по четыре отметки за экзамен. Определить количество неуспевающих студентов и средний балл группы.',
 '19. Дан целочисленный двумерный массив, размерности n х m. Сложить соответствующие элементы.'
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
select.onchange = function () {
 

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
    'https://drive.google.com/file/d/1UogkRWLrC-u9roxixQOw_BXtd1M0DfKs/preview', 'class','files')

    let test=document.querySelector(".test");
  test.innerHTML='';
  let container=document.querySelector(".programma");
  container.innerHTML='';

  addContentTags(test,'h2',"Тестовые варианты");
  addTagAndAttributes (test,'iframe','src',
    'https://drive.google.com/file/d/10iOrbqYUrYflQec-erLA3UvtTQs_ztrS/preview', 'class','files')

  addContentTags(container,'h2','Программа');


  // Да это какой-то ужас. Но не хочу пересделывать все эти задании. Поэтому буду как-то поддерживать его
  let taskName='task'+taskNumber+'()';
  addAttributTags(container,'p','id','result');
  addTagAndAttributes(container,'button','onclick',taskName,'Найти'); 

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

  
    
    // Добавлаем нужный тег с атрибутами
    if (TagName=='input'||TagName=='img'||TagName=='video'||TagName=='audio'||TagName=='iframe') {
        tag.setAttribute(Attribute, AttributeName);
        tag.setAttribute(Attribute_or_Content, Attribute_Name1);
        container.appendChild(tag);
    } else {
    tag.setAttribute(Attribute, AttributeName);
    tag.innerHTML= Attribute_or_Content;
    container.appendChild(tag);
    }
    
}




//  Это мои первые коды который писал в js...
//   Этих заданий можно было бы решить по другому.. Нехотел переписывать весь код.
//    Поэтому буду использоваь их..


// Проверка на число
function checkNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

// Удаления дубликатов из  массива
function DeletCopy (arr) {
      var obj = {};
   for (var i = 0; i < arr.length; i++) {
         var str = arr[i];
         obj[str] = true; // запомнить строку в виде свойства объекта
       }
  return Object.keys(obj); // или собрать ключи перебором для IE8-
}

// Округления число
function roundUp(num, precision) {
  precision = Math.pow(10, precision)
  return Math.round(num * precision) / precision
}


  // Ввод двумерного массива
function inputArray (){
  let a=prompt("Введите m");
  let b=prompt("Введите n");
  let arr=[];
  let c;
  if (a>1&&b>1&&a<7&&b<7) {
    for (var i = 0; i < a; i++) {
      arr[i]=[];
      for (var j = 0; j < b; j++) {
           c=prompt("Введите число");
           //  Проверка на число
          if (checkNumber(c)) {
            arr[i][j]=parseInt(c);
          } else {
            alert("Введите число!");
            return false;
          }
        } 
      }

    return arr;
  } else {
    alert("Размер массива должен быть от 2x2 до 7x7!");
  }


}


function task1 () {
  let arr=inputArray();
  if (arr) {
      let arr1= arr.flat();
      let sum=arr1.reduce((a,b)=>a+b);
      let pro=arr1.reduce((a,b)=>a*b);
  
    document.getElementById('result').innerHTML='Сумма всех элементов массива ='+sum
    +'<br> Произведение всех элементов массива ='+pro;
  }
}

function task2 () {
  let arr1=inputArray();
  if (arr1) {
      let arr=arr1.flat();
      let filter=arr.filter(a=>a%2==0);
      if (filter.length>0) {
      let sum=filter.reduce((a,b)=>a+b);
      let pro=filter.reduce((a,b)=>a*b);
      
 
     document.getElementById('result').innerHTML='Сумма четных элементов массива ='+sum;
      +'<br> Произведение четных элементов массива ='+pro;
  		} else {
  			document.getElementById('result').innerHTML='В массиве нет четных элементов';
  		}
	}
}

function task3() {
   let arr=inputArray();
   if (arr) {
       arr=arr.flat();
       let fil=arr.filter(a=>a%5==0&&a%3==0);
    if (fil.length>0) {
    let sum=fil.reduce((a,b)=>a+b);
    let pro=fil.reduce((a,b)=>a*b);
    document.getElementById('result').innerHTML='Сумма элементов массива кратных 3 и 5='+sum
    +'<br> Произведение элементов массива кратных 3 и 5 ='+pro;
  }  else {
    document.getElementById('result').innerHTML='В массиве нет элементов кратных 3 и 5';
  }}
}

function task4 () {
   let arr=inputArray();
  if (arr) {
  	   arr=arr.flat();
       let fil=arr.filter(a=>a>-9&&a<0).length;
    if (fil>0) {
        document.getElementById('result').innerHTML='Количество отрицательных элементов, больше -9 ='+fil;
    } else {
      document.getElementById('result').innerHTML='В массиве нет отрицательных элементов, больше -9';
    }
    
   } 
}

function task5 () {
	let arr=inputArray();
	document.getElementById('result').innerHTML='';
	if (arr) {
		let c=0;

		for (let i = 0; i < arr.length; i++) {
			for (var j = 0; j < arr[i].length; j++) {
				if(arr[i][j]%2==1&&i%2==0&&j%2==0){
					let s=i+1;
					let m=j+1;
					let sms='<br>'+s+'-Строка '+m+'-столбоц '+' число '+arr[i][j];
					c++;
					document.getElementById('result').innerHTML+=sms;			
				} 
			}
		} 

		if (c==0) {
			document.getElementById('result').innerHTML='В массиве нет нечетных элементов, стоящих на четных местах. ';
		}
	}

}

function task6 () {
	let arr=inputArray();
	if (arr) {
	var mini=0, minj=0, maxi=0, maxj=0;
	let max=arr[0][0];
	let min=arr[0][0];
	for (let i = 0; i < arr.length; i++) {
		for (var j = 0; j < arr[i].length; j++) {
			if (arr[i][j]<min) {
				min=arr[i][j];
				mini=i;
				minj=j;
			}	

			if (arr[i][j]>max) {
				max=arr[i][j];
				maxi=i;
				maxj=j;
			}
		}
	}
	if (max!==min) {
		arr[mini][minj]=max;
		arr[maxi][maxj]=min;
		arr=arr.flat();
		document.getElementById('result').innerHTML=arr.join(',  ');
	} else {
		document.getElementById('result').innerHTML='В массиве все элементы равны! Правильно введите данные!';
	}
  }
}


function task7 () {
	let arr=inputArray();
	if (arr) {
		let newarr=arr.map(a=>a.map(a=> Math.pow(a, 2)));
		document.getElementById('result').innerHTML='Наш предыдущий массив '+arr.join('    ')
		+'<br> Наш новый массив '+newarr.join('   ');
	}
}

function task8 () {
	let arr=inputArray();
	if(arr) {
		 arr=arr.flat();
		let sum = arr.reduce((a,b)=>a+b);
		let srd = sum/arr.length;
		document.getElementById('result').innerHTML='Наш массив ' +arr+"<br> Сумма всех элементов массива ="+sum 
		+'<br> Среднее значения всех элементов массива = '+srd;
	}
}

function task9 () {
	let arr=inputArray();
	if (arr) {
		var result = document.getElementById('result');
		let s=prompt('Введите строку который будем проверить');
		if (checkNumber(s)&&s<arr.length&&s>0) {
			s=parseInt(s)-1;
			if (arr[s][0]!==0) {
			result.innerHTML=arr[s][0]>0?'Положительное ':'Отрицательное';
		} else {
			result.innerHTML='Нулевой элемент';
		}} else {
			result.innerHTML='Правильно введите данные!';
		}
	}
}

function task10 () {
	let arr=inputArray();
	/*
	let vos=0, ub=0, result1=[];
	if (arr) {
		let result=document.getElementById('result');
		result.innerHTML='';
		for (let i=0; i<arr.length-1; i++) {
			for (let j=0; j<arr[j].length-1; j++) {
				if (arr[i][j]<=arr[i+1][j+1]) {
					vos++;
				} else if (arr[i][j]>=arr[i+1][j+1]) {
					ub++;
				}
			}

			s=i+1;
			if (vos==4) {
				result.innerHTML+=s+'-строка возрастающей ';
			} else if(u==4) {
				result.innerHTML+=s+'-строка убывающей';
			} else {
				result.innerHTML+=s+'-строка невозрастающей и не убывающей';
			}

		}		
	}*/

	if (arr) {
		for (let i=0; i<arr.length; i++){
			if (arr[i].every((a, i, arr)=>{
				if (i==arr.length-1) {
					return true;
				}
			})) {}
		}
	}
}




function task12 () {
	let arr=inputArray();
	if (arr) {
		let cv=arr.flat();
		cv = cv.filter( a =>{
		if (Math.sqrt(a)==Math.round(Math.sqrt(a))&&a!==0) {
			return a;
			}
		});
		result.innerHTML=cv.length>0?"Элементы которые являются квадратами какого-либо числа "+cv.join(', '):
		"Нету чисел которые являются квадратами какого-либо числа ";
	}
}
 
function task13 () {
	let arr=inputArray();
	if (arr) {
		let one=arr[0][0];
		let last=arr[arr.length-1][arr[0].length-1];
		arr[0][0]=last;
		arr[arr.length-1][arr[0].length-1]=one;
		arr = arr.flat()
		result.innerHTML=arr.join(', ');
	}
}


function task14 () {
	let arr=inputArray();
	if (arr) {
		let newarr=arr.map(a=>a.map(a=> a*(-1)));
		result.innerHTML=newarr.flat().join(', ');
	}
}


function task15 () {
	let arr=inputArray();
	if (arr) {
		let q=0;
		let reamainder = arr.flat();
		let elem=[];
		let m=prompt('Введите m');
		let k=prompt('Введите k');
		if (checkNumber(m)&&checkNumber(k)) {
		for (var i=0; i < reamainder.length; i++) {
			if(reamainder[i]%m==k) {
				elem[q]=reamainder[i];
				q++;
			} 
		}

		result.innerHTML=q>0?'Элементы, у которых остаток от деления на m равен k '+elem.join(', '):
		'Нету элементов, у которых остаток от деления на m равен k';
		} else {
			result.innerHTML="Правильно введите данные!";
		}
	}
}

function task16 () {
	let arr1=inpytArray();
	if (arr1) {
		arr=arr1.flat();
		let neus, udov, good, fine;
		result.innerHTML='';
		if (arr.every(a => a>0&&a<=100)) {
			neus=arr.filter(a=>a>0&&a<61).length;
			udov=arr.filter(a=>a>60&&a<74).length;
			good=arr.filter(a=> a>74&&a<86).length;
			fine=arr.filter(a=> a>86&&a<=100).length;
			result.innerHTML='Kоличестово не удовлетворительных оценок - '+neus+
			'<br> Kоличестово удовлетворительных оценок - '
			+udov+"<br> Kоличестово хороших оценок - "+good
			+'<br> Kоличестово отличных оценок - '+fine;
		} else {
			result.innerHTML='Вы неправильно поставили оценку!';
		}

	}
}


function task17 () {
	let arr=inputArray();
	if (arr) {
		let counter=0;
		let k=0;
		for (let i=0; i<arr.length; i++) {
			if (arr[i].every(a => a>=0&&a<=100)) {
				if (arr[i].every(a=>!(a>87&&a<=100))) counter++;
		} else {
			k++;
		}
	}
	result.innerHTML=k>0?'Правильно введите данные!':counter===0?
	'Все студенты молодцы! У всех есть  хотя бы 1 "5"':'Количество учеников, не получивших ни одной "5" '+counter;
	};
}



function task18 () {
	let arr=inputArray();
	if (arr) {
		let col=arr.flat();
		if (col.every(a => a>0&&a<=100)) {
			let newarr=col.filter(a=> a>0&&a<61).length;
			let srd=(col.reduce((a,b)=>a+b))/col.length;
			if (newarr>0) {
				result.innerHTML='Общее количество неуспевающих студентов за экзамены ' + 
				newarr+'<br> Средний балл группы '+srd;
			} else {
				result.innerHTML='Все студенты молодцы! '+'<br> Средний балл группы '+srd;
			}
		} else {
			result.innerHTML="Вы неправильно поставили оценку!";
		}
	}
}

function task19 () {
	let arr=inputArray();
	if (arr) {

	}
}




