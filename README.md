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
.app -> .apply($1)
.bin -> .bind($1)
.cal -> .call($1)
.cat -> .catch((error) => { $1 })
.catm -> .catch(error => console.log(error))
.ci -> .clearInterval($1)
.cl -> .classList
.cla -> .classList.add('$1')
.clc -> .classList.contains('$1')
.clr -> .classList.remove('$1')
.clr -> .classList.replace('$1', '')
.clt -> .classList.toggle('$1')
.cn -> .cloneNode($1)
.con -> .concat($1)
.cont -> .contains($1)
.copw -> .copyWithin($1)
.ct -> .clearTimeout($1)
.de -> .dispatchEvent($1)
.ent -> .entries($1)
.eve -> .every(($1) => { return $1; })
.evem -> .every($1 => $1)
.fil -> .fill($1)
.fil -> .filter(($1) => { return $1; })
.film -> .filter($1 => $1)
.fin -> .find(($1) => { return $1; })
.fini -> .findIndex(($1) => { return $1; })
.finim -> .findIndex($1 => $1)
.finm -> .find($1 => $1)
.fore -> .forEach(($1) => { $1 })
.forem -> .forEach($1 => $1)
.ga -> .getAttribute('$1')
.gebc -> .getElementsByClassName('$1')
.gebi -> .getElementById('$1')
.gebt -> .getElementsByTagName('$1')
.ha -> .hasAttribute('$1')
.ib -> .insertBefore($1)
.ih -> .innerHTML
.ihs -> .innerHTML = '$1';
.inc -> .includes($1)
.indo -> .indexOf($1)
.joi -> .join($1)
.key -> .keys($1)
.lio -> .lastIndexOf($1)
.map -> .map(($1) => { return $1; })
.mapm -> .map($1 => $1)
.oh -> .outerHTML
.ohs -> .outerHTML = '$1';
.pe -> .parentElement
.pn -> .parentNode
.pop -> .pop()
.pro -> .prototype
.pus -> .push($1)
.qs -> .querySelector('$1')
.qsa -> .querySelectorAll('$1')
.ra -> .removeAttribute('$1')
.rc -> .removeChild($1)
.rc -> .replaceChild($1, )
.re -> .removeEventListener('$1', )
.red -> .reduce((accumulator, currentValue) => { return accumulator + currentValue; })
.redm -> .reduce((accumulator, currentValue) => accumulator + currentValue)
.redr -> .reduceRight((accumulator, currentValue) => { return accumulator.concat(currentValue); })
.redrm -> .reduceRight((accumulator, currentValue) => accumulator.concat(currentValue))
.rev -> .reverse()
.sa -> .setAttribute('$1', '')
.shi -> .shift()
.si -> .setInterval(() => { $1 }, 3000)
.sim -> .setInterval(() => {$1}, 3000)
.sli -> .slice()
.som -> .some((item) => { return $1; })
.somm -> .some($1 => $1)
.sor -> .sort((a, b) => { if ($1) { return -1; } if () { return 1; } return 0; })
.sorm -> .sort((a, b) => a - b)
.spl -> .splice($1)
.st -> .setTimeout(() => { $1 }, 3000)
.stm -> .setTimeout(() => {$1}, 3000)
.tc -> .textContent
.tcs -> .textContent = '$1';
.tf -> .toFixed($1)
.the -> .then(($1) => { $1 })
.thec -> .then(($1) => { $1 }) .catch(error => console.log(error))
.them -> .then($1 => $1)
.tls -> .toLocaleString($1)
.ts -> .toString($1)
.uns -> .unshift($1)
.vals -> .values($1)
af -> Array.from($1)
aia -> Array.isArray($1)
ao -> Array.of($1)
cd -> console.dir($1)
ce -> console.error($1)
ce -> const $1 = document.createElement('$1');
ci -> console.info($1)
cl -> console.log($1)
cla -> class $1 { constructor(props) {} }
cw -> console.warn($1)
de -> debugger;
doc -> document
dow -> do { $1 } while ();
ec -> export class $1 { constructor(props) {} }
edc -> export default class $1 { constructor(props) {} }
fn -> function $1() { }
fna -> function() { $1 }
fnar -> ($1) => { return $1; }
fnaraf -> ($1, i, arr) => { return $1; }
fnarm -> $1 => $1
for -> const len = $1.length; for (let i = 0; i < len; i += 1) { const item = $1[i]; }
fori -> for (let y = 0; i < $1Len; y += 1) { const item = $1[y]; }
forin -> for (const key in $1) { }
forof -> for (const item of $1) { }
forofa -> for await (let item of $1) { }
forr -> for (let r = $1Len - 1; r >= 0; r -= 1) { const rItem = $1[r]; }
iife -> (function() { $1 })();
imp -> import { } from '$1';
impm -> import from '$1';
jsonp -> JSON.parse($1)
jsons -> JSON.stringify($1)
newm -> new Map($1)
newp -> new Promise((resolve, reject) => { resolve($1) })
news -> new Set($1)
oent -> Object.entries($1)
okey -> Object.keys($1)
oval -> Object.values($1)
pa -> Promise.all($1)
pf -> parseFloat($1)
pi -> parseInt($1)
swi -> switch ($1) { case '': break; default: }
us -> 'use strict';
wale -> alert('$1')
wcon -> confirm('$1')
whi -> while ($1) { }
wpro -> prompt('$1')
```
