const {document} = require('basichtml').init();

const {diffable, persistent} = require('../cjs');

const fragmentSingle = document.createDocumentFragment();
console.assert(persistent(fragmentSingle) === fragmentSingle, 'no childNodes');

const a = fragmentSingle.appendChild(document.createTextNode('a'));
console.assert(persistent(fragmentSingle) === a, 'a childNode');

const fragmentMulti = document.createDocumentFragment();
fragmentMulti.appendChild(document.createTextNode('a'));
fragmentMulti.appendChild(document.createTextNode('b'));
fragmentMulti.appendChild(document.createTextNode('c'));

const persistentSingle = persistent(fragmentSingle);
const persistentMulti = persistent(fragmentMulti);

console.assert(persistentSingle === fragmentSingle.firstChild);
console.assert(persistentMulti.nodeType !== fragmentMulti.nodeType);

console.assert(diffable(persistentSingle, 1) === persistentSingle);
console.assert(diffable(persistentSingle, 0) === persistentSingle);
console.assert(diffable(persistentSingle, -0) === persistentSingle);
console.assert(diffable(persistentSingle, -1) === persistentSingle);

console.assert(diffable(persistentMulti, 1) === fragmentMulti, 'multi all');
console.assert(diffable(persistentMulti, 0) === fragmentMulti.firstChild, 'multi noop');
console.assert(diffable(persistentMulti, -0) === fragmentMulti.lastChild, 'multi last');
console.assert(diffable(persistentMulti, -1) === fragmentMulti.firstChild, 'multi first');

fragmentMulti.childNodes = [];

console.assert(diffable(persistentMulti, 1) === fragmentMulti);
