<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# isCircularArray

> Test if a value is an array containing a circular reference.

<section class="usage">

## Usage

```javascript
var isCircularArray = require( '@stdlib/assert/is-circular-array' );
```

#### isCircularArray( value )

Tests if a `value` is an `array` containing a circular reference.

```javascript
var arr = [ 1, 2, 3 ];
var bool = isCircularArray( arr );
// returns false

arr.push( arr );
bool = isCircularArray( arr );
// returns true

arr.pop();
arr.self = arr;
bool = isCircularArray( arr );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var isCircularArray = require( '@stdlib/assert/is-circular-array' );

var arr = [ 1, 2, 3 ];
arr.push( arr );
console.log( isCircularArray( arr ) );
// => true

var obj = {
    'beep': 'boop'
};
obj.self = obj;
console.log( isCircularArray( obj ) );
// => false

console.log( isCircularArray( [] ) );
// => false

console.log( isCircularArray( null ) );
// => false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/is-circular`][@stdlib/assert/is-circular]</span><span class="delimiter">: </span><span class="description">test if an object-like value contains a circular reference.</span>
-   <span class="package-name">[`@stdlib/assert/is-circular-plain-object`][@stdlib/assert/is-circular-plain-object]</span><span class="delimiter">: </span><span class="description">test if a value is a plain object containing a circular reference.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/assert/is-circular]: https://github.com/stdlib-js/assert/tree/main/is-circular

[@stdlib/assert/is-circular-plain-object]: https://github.com/stdlib-js/assert/tree/main/is-circular-plain-object

<!-- </related-links> -->

</section>

<!-- /.links -->
