'use strict';


const btns = document.querySelectorAll('button');



normal.addEventListener('click',()=> {
  attribute.textContent = 'かくとう';
});

hono.addEventListener('click',()=> {
  attribute.textContent = 'みず  じめん  いわ';
});

water.addEventListener('click',()=> {
  attribute.textContent = 'でんき  くさ';
});

electricity.addEventListener('click',()=> {
  attribute.textContent = 'じめん';
});
grass.addEventListener('click',()=> {
  attribute.textContent = 'ほのお  どく  ひこう  むし';
});
ice.addEventListener('click',()=> {
  attribute.textContent = 'ほのお  かくとう  いわ  はがね';
});
fighting.addEventListener('click',()=> {
  attribute.textContent = 'ひこう  エスパー  フェアリー';
});
poison.addEventListener('click',()=> {
  attribute.textContent = 'じめん  エスパー';
});
ground.addEventListener('click',()=> {
  attribute.textContent = 'みず  くさ  こおり';
});
flight.addEventListener('click',()=> {
  attribute.textContent = 'でんき  こおり  いわ';
});
esper.addEventListener('click',()=> {
  attribute.textContent = 'むし  ゴースト  あく';
});
insect.addEventListener('click',()=> {
  attribute.textContent = 'ほのお  ひこう  いわ';
});
rock.addEventListener('click',()=> {
  attribute.textContent = 'みず  くさ  かくとう  じめん  はがね';
});
ghost.addEventListener('click',()=> {
  attribute.textContent = 'ゴースト  あく';
});
dragon.addEventListener('click',()=> {
  attribute.textContent = 'こおり  ドラゴン  フェアリー';
});
evil.addEventListener('click',()=> {
  attribute.textContent = 'かくとう  むし  フェアリー';
});
steel.addEventListener('click',()=> {
  attribute.textContent = 'ほのお  かくとう  じめん';
});
fairy.addEventListener('click',()=> {
  attribute.textContent = 'どく  はがね';
});
