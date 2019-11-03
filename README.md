# JavaScript Snippets for Visual Studio Code

Collection of JavaScript snippets for your productivity.

## Features

### Classic declarations

![Classic declarations](images/features/standart-declarations.png)

### Dot declarations

![Dot declarations](images/features/dot-declarations.png)

## Declarations

```text
.ac -> .appendChild($1)
.ae -> .addEventListener('$1', )
.aeb -> .addEventListener('blur', $1)
.aec -> .addEventListener('click', $1)
.aech -> .addEventListener('change', $1)
.aef -> .addEventListener('focus', $1)
.aefo -> .addEventListener('focusout', $1)
.aekd -> .addEventListener('keydown', $1)
.aemo -> .addEventListener('mouseout', $1)
.aemov -> .addEventListener('mouseover', $1)
.apply -> .apply($1)
.bind -> .bind($1)
.call -> .call($1)
.ci -> .clearInterval($1)
.cl -> .classList
.cla -> .classList.add('$1')
.clc -> .classList.contains('$1')
.clr -> .classList.replace('$1', '')
.clrm -> .classList.remove('$1')
.clt -> .classList.toggle('$1')
.cn -> .cloneNode($1)
.con -> .concat($1)
.cont -> .contains($1)
.ct -> .clearTimeout($1)
.de -> .dispatchEvent($1)
.ent -> .entries()
.eve -> .every((item, i, arr) => { $1 })
.evem -> .every(item => $1)
.fil -> .filter((item, i, arr) => { $1 })
.film -> .filter(item => $1)
.fore -> .forEach((item, i, arr) => { $1 })
.forem -> .forEach(item => $1)
.fro -> .from($1)
.ga -> .getAttribute('$1')
.gebc -> .getElementsByClassName('$1')
.gebi -> .getElementById('$1')
.gebt -> .getElementsByTagName('$1')
.ha -> .hasAttribute('$1')
.ib -> .insertBefore($1)
.ih -> .innerHTML
.ihs -> .innerHTML = '$1'
.isa -> .isArray($1)
.key -> .keys()
.map -> .map((item, i, arr) => { $1 })
.mapm -> .map(item => $1)
.oh -> .outerHTML
.ohs -> .outerHTML = '$1'
.pe -> .parentElement
.pn -> .parentNode
.proto -> .prototype
.qs -> .querySelector('$1')
.qsa -> .querySelectorAll('$1')
.ra -> .removeAttribute('$1')
.rc -> .replaceChild($1, )
.re -> .removeEventListener('$1', )
.rmc -> .removeChild($1)
.sa -> .setAttribute('$1', '')
.si -> .setInterval(() => { $1 }, 3000);
.sim -> .setInterval(() => {$1}, 3000)
.st -> .setTimeout(() => { $1 }, 3000);
.stm -> .setTimeout(() => {$1}, 3000)
.tc -> .textContent
.tcs -> .textContent = '$1'
.val -> .values()
alert -> alert('$1');
cd -> console.dir($1)
ce -> console.error($1)
cel -> const $1 = document.createElement('$1');
ci -> console.info($1)
cl -> console.log($1)
cla -> class $1 { constructor(props) {} }
clae -> export class $1 { constructor(props) {} }
claed -> export default class $1 { constructor(props) {} }
clbar -> (item, i, arr) => { $1 })
confirm -> confirm('$1');
confnar -> const $1 = () => {  };
cw -> console.warn($1)
de -> debugger;
do -> do { $1 } while ();
doc -> document
fn -> function $1() {  }
fna -> function() { $1 }
fnar -> ($1) => {  }
fnarm -> () => { $1 }
for -> const l = arr.length; for (let $1 = 0; $1 < l; $1 += 1) { const item = arr[$1]; }
forin -> for (const prop in $1) {  }
form -> for (let $1 = 0; $1 < l; $1 += 1) {  }
forof -> for (const item of $1) {  }
iife -> (function() { $1 })();
imp -> import  from '$1';
impm -> import {  } from '$1';
jsonp -> JSON.parse($1)
jsons -> JSON.stringify($1)
map -> new Map($1)
prompt -> prompt('$1');
set -> new Set($1)
sw -> switch ($1) { case '':            break;  default: }
us -> 'use strict';
while -> while ($1) {  }
```
