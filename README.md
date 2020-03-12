# <em>µ</em>wire

A way to create persistent "_wired_" fragments that can be moved around when diffed through _[µdomdiff](https://github.com/WebReflection/udomdiff#readme)_.

```js
import {diffable, persistent} from 'uwire';

const wire = persistent(fragment);
diffable(wire, 1);  // repopulate all nodes, if gone
diffable(wire, 0);  // return the firstChild
diffable(wire, -0); // return the lastChild
diffable(wire, -1); // remove all nodes and return the firstChild
```
