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

# deepEqual

> Test for deep equality between two values.

<section class="usage">

## Usage

```javascript
var deepEqual = require( '@stdlib/assert/deep-equal' );
```

#### deepEqual( a, b )

Returns a `boolean` indicating if `a` is deep equal to `b`.

<!-- eslint-disable object-curly-newline, object-curly-spacing -->

```javascript
var bool = deepEqual( [ 1, 2, 3 ], [ 1, 2, 3 ] );
// returns true

bool = deepEqual( [ 1, 2, 3 ], [ 1, 2, '3' ] );
// returns false

bool = deepEqual( { 'a': 2 }, { 'a': [ 2 ] } );
// returns false
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function uses strict equality checks (`===`) and does not perform any type coercion.
-   When given two objects, only enumerable own properties are recursively compared.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error", object-curly-newline: "off", object-curly-spacing: "off" -->

```javascript
var deepEqual = require( '@stdlib/assert/deep-equal' );

var a = [ true, false, true ];
var b = [ true, false, true ];
var bool = deepEqual( a, b );
// returns true

b.pop();
bool = deepEqual( a, b );
// returns false

a = { 'a': { 'b': { 'c': 'd' } } };
b = { 'a': { 'b': { 'c': 'd' } } };
bool = deepEqual( a, b );
// returns true

b.a.b.c = null;
bool = deepEqual( a, b );
// returns false

a = { 'a': [ { 'b': 0 }, { 'c': 1 } ] };
b = { 'a': [ { 'b': 0 }, { 'c': 1 } ] };
bool = deepEqual( a, b );
// returns true

b = { 'a': [ { 'b': [ 0 ] }, { 'c': '1' } ] };
bool = deepEqual( a, b );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/is-strict-equal`][@stdlib/assert/is-strict-equal]</span><span class="delimiter">: </span><span class="description">test if two arguments are strictly equal.</span>
-   <span class="package-name">[`@stdlib/assert/is-same-value`][@stdlib/assert/is-same-value]</span><span class="delimiter">: </span><span class="description">test if two arguments are the same value.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/assert/is-strict-equal]: https://github.com/stdlib-js/assert/tree/main/is-strict-equal

[@stdlib/assert/is-same-value]: https://github.com/stdlib-js/assert/tree/main/is-same-value

<!-- </related-links> -->

</section>

<!-- /.links -->
