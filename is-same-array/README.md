<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

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

# isSameArray

> Test if two arguments are both generic arrays and have the [same values][@stdlib/assert/is-same-value].

<section class="usage">

## Usage

```javascript
var isSameArray = require( '@stdlib/assert/is-same-array' );
```

#### isSameArray( v1, v2 )

Tests if two arguments are both generic arrays and have the [same values][@stdlib/assert/is-same-value].

```javascript
var x = [ 1.0, 2.0 ];
var y = [ 1.0, 2.0 ];
var bool = isSameArray( x, y );
// returns true

bool = isSameArray( x, [ -1.0, 2.0 ] );
// returns false
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   In contrast to the strict equality operator `===`, the function distinguishes between `+0` and `-0` and treats `NaNs` as the [same value][@stdlib/assert/is-same-value].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var isSameArray = require( '@stdlib/assert/is-same-array' );

var x = [ 1.0, 2.0, 3.0 ];
var y = [ 1.0, 2.0, 3.0 ];
var out = isSameArray( x, y );
// returns true

x = [ -0.0, 0.0, -0.0 ];
y = [ 0.0, -0.0, 0.0 ];
out = isSameArray( x, y );
// returns false

x = [ NaN, NaN, NaN ];
y = [ NaN, NaN, NaN ];
out = isSameArray( x, y );
// returns true
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/is-array`][@stdlib/assert/is-array]</span><span class="delimiter">: </span><span class="description">test if a value is an array.</span>
-   <span class="package-name">[`@stdlib/assert/is-equal-array`][@stdlib/assert/is-equal-array]</span><span class="delimiter">: </span><span class="description">test if two arguments are both generic arrays and have equal values.</span>
-   <span class="package-name">[`@stdlib/assert/is-same-array-like`][@stdlib/assert/is-same-array-like]</span><span class="delimiter">: </span><span class="description">test if two arguments are both array-like and have the same values.</span>
-   <span class="package-name">[`@stdlib/assert/is-same-value`][@stdlib/assert/is-same-value]</span><span class="delimiter">: </span><span class="description">test if two arguments are the same value.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/assert/is-same-value]: https://github.com/stdlib-js/assert/tree/main/is-same-value

<!-- <related-links> -->

[@stdlib/assert/is-array]: https://github.com/stdlib-js/assert/tree/main/is-array

[@stdlib/assert/is-equal-array]: https://github.com/stdlib-js/assert/tree/main/is-equal-array

[@stdlib/assert/is-same-array-like]: https://github.com/stdlib-js/assert/tree/main/is-same-array-like

<!-- </related-links> -->

</section>

<!-- /.links -->
