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

# isSameArrayLikeObject

> Test if two arguments are both [array-like objects][@stdlib/assert/is-array-like-object] and have the [same values][@stdlib/assert/is-same-value].

<section class="usage">

## Usage

```javascript
var isSameArrayLikeObject = require( '@stdlib/assert/is-same-array-like-object' );
```

#### isSameArrayLikeObject( v1, v2 )

Tests if two arguments are both [array-like objects][@stdlib/assert/is-array-like-object] and have the [same values][@stdlib/assert/is-same-value].

```javascript
var x = [ 1.0, 2.0 ];
var y = [ 1.0, 2.0 ];
var bool = isSameArrayLikeObject( x, y );
// returns true

bool = isSameArrayLikeObject( x, [ -1.0, 2.0 ] );
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
var isSameArrayLikeObject = require( '@stdlib/assert/is-same-array-like-object' );

var x = [ 1.0, 2.0, 3.0 ];
var y = [ 1.0, 2.0, 3.0 ];
var out = isSameArrayLikeObject( x, y );
// returns true

x = [ -0.0, 0.0, -0.0 ];
y = [ 0.0, -0.0, 0.0 ];
out = isSameArrayLikeObject( x, y );
// returns false

x = [ NaN, NaN, NaN ];
y = [ NaN, NaN, NaN ];
out = isSameArrayLikeObject( x, y );
// returns true
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/assert/is-array-like-object]: https://github.com/stdlib-js/assert/tree/main/is-array-like-object

[@stdlib/assert/is-same-value]: https://github.com/stdlib-js/assert/tree/main/is-same-value

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
