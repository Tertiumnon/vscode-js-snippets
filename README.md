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
.aei -> .addEventListener('input', $1)
.aekd -> .addEventListener('keydown', $1)
.aemo -> .addEventListener('mouseout', $1)
.aemov -> .addEventListener('mouseover', $1)
.ap -> .apply($1)
.bi -> .bind($1)
.ca -> .call($1)
.cat -> .catch((error) => { $1 })
.catm -> .catch(error => $1)
.ci -> .clearInterval($1)
.cl -> .classList
.cla -> .classList.add('$1')
.clc -> .classList.contains('$1')
.clr -> .classList.replace('$1', '')
.clrm -> .classList.remove('$1')
.clt -> .classList.toggle('$1')
.cn -> .cloneNode($1)
.conc -> .concat($1)
.cont -> .contains($1)
.copw -> .copyWithin($1)
.ct -> .clearTimeout($1)
.de -> .dispatchEvent($1)
.ent -> .entries($1)
.eve -> .every((item) => { $1 })
.evef -> .every(($1) => { return $1; })
.evem -> .every(item => $1)
.fil -> .fill($1)
.fil -> .filter((item) => { $1 })
.filf -> .filter(($1) => { return $1; })
.film -> .filter(item => $1)
.fin -> .find((item) => { $1 })
.finf -> .find(($1) => { return $1; })
.fini -> .findIndex((item) => { $1 })
.finif -> .findIndex(($1) => { return $1; })
.finim -> .findIndex(item => $1)
.finm -> .find(item => $1)
.fore -> .forEach((item) => { $1 })
.foref -> .forEach(($1) => { })
.forem -> .forEach(item => $1)
.ga -> .getAttribute('$1')
.gebc -> .getElementsByClassName('$1')
.gebi -> .getElementById('$1')
.gebt -> .getElementsByTagName('$1')
.ha -> .hasAttribute('$1')
.ib -> .insertBefore($1)
.ih -> .innerHTML
.ihs -> .innerHTML = '$1'
.inc -> .includes($1)
.ino -> .indexOf($1)
.joi -> .join($1)
.key -> .keys($1)
.lio -> .lastIndexOf($1)
.map -> .map((item) => { $1 })
.mapf -> .map(($1) => { return $1; })
.mapm -> .map(item => $1)
.oh -> .outerHTML
.ohs -> .outerHTML = '$1'
.pe -> .parentElement
.pn -> .parentNode
.pop -> .pop()
.prot -> .prototype
.pus -> .push($1)
.qs -> .querySelector('$1')
.qsa -> .querySelectorAll('$1')
.ra -> .removeAttribute('$1')
.rc -> .replaceChild($1, )
.re -> .removeEventListener('$1', )
.red -> .reduce((acc, curVal) => { $1 })
.redf -> .reduce((acc, curVal) => { return $1; })
.redm -> .reduce((acc, curVal) => $1)
.redr -> .reduceRight((acc, curVal) => { $1 })
.redrf -> .reduceRight((acc, curVal) => { return $1; })
.redrm -> .reduceRight((acc, curVal) => $1)
.rev -> .reverse()
.rmc -> .removeChild($1)
.sa -> .setAttribute('$1', '')
.shi -> .shift()
.si -> .setInterval(() => { $1 }, 3000)
.sim -> .setInterval(() => {$1}, 3000)
.sli -> .slice()
.som -> .some((item) => { return $1; })
.somf -> .some(($1) => { return $1; })
.somm -> .some(item => $1)
.sor -> .sort((a, b) => { $1 })
.sorf -> .sort((a, b) => { if ($1) { return -1; } if () { return 1; } return 0; })
.sorm -> .sort()
.spl -> .splice($1)
.st -> .setTimeout(() => { $1 }, 3000)
.stm -> .setTimeout(() => {$1}, 3000)
.tc -> .textContent
.tcs -> .textContent = '$1'
.then -> .then((result) => { $1 })
.thenf -> .then((result) => { $1 }) .catch(error => console.log(error))
.thenm -> .then(result => $1)
.tls -> .toLocaleString($1)
.tof -> .toFixed($1)
.tos -> .toString($1)
.uns -> .unshift($1)
.vals -> .values($1)
ale -> alert('$1')
arf -> Array.from($1)
aria -> Array.isArray($1)
aro -> Array.of($1)
cd -> console.dir($1)
ce -> console.error($1)
cel -> const $1 = document.createElement('$1');
ci -> console.info($1)
cl -> console.log($1)
cla -> class $1 { constructor(props) {} }
clae -> export class $1 { constructor(props) {} }
claed -> export default class $1 { constructor(props) {} }
con -> confirm('$1')
cw -> console.warn($1)
de -> debugger;
do -> do { $1 } while ();
doc -> document
fn -> function $1() { }
fna -> function() { $1 }
fnar -> (item) => { $1 }
fnaraf -> (item, i, arr) => { $1 }
fnarcon -> const $1 = () => { };
fnarf -> ($1) => { }
fnarm -> item => $1
for -> for (let $1 = 0; $1 < items.length; $1 += 1) { const item = items[$1]; }
forf -> const itemsLen = items.length; for (let $1 = 0; $1 < itemsLen; $1 += 1) { const item = items[$1]; }
forin -> for (const prop in $1) { }
forof -> for (const item of $1) { }
iife -> (function() { $1 })();
imp -> import { } from '$1';
impm -> import from '$1';
jsonp -> JSON.parse($1)
jsons -> JSON.stringify($1)
map -> new Map($1)
numpf -> Number.parseFloat($1)
numpi -> Number.parseInt($1)
obje -> Object.entries($1)
objk -> Object.keys($1)
objv -> Object.values($1)
pro -> prompt('$1')
prom -> new Promise((resolve, reject) => { resolve($1) })
proma -> Promise.all($1)
set -> new Set($1)
sw -> switch ($1) { case '': break; default: }
us -> 'use strict';
while -> while ($1) { }
```
