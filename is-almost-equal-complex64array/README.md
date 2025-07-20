<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

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

# isAlmostEqualComplex64Array

> Test if two arguments are both [Complex64Arrays][@stdlib/array/complex64] and contain respective elements which are [approximately equal][@stdlib/assert/is-almost-equal] within a specified number of ULPs (units in the last place).

<section class="usage">

## Usage

<!-- eslint-disable id-length -->

```javascript
var isAlmostEqualComplex64Array = require( '@stdlib/assert/is-almost-equal-complex64array' );
```

#### isAlmostEqualComplex64Array( v1, v2, maxULP )

Tests if two arguments are both [Complex64Arrays][@stdlib/array/complex64] and contain respective elements which are [approximately equal][@stdlib/assert/is-almost-equal] within a specified number of ULPs (units in the last place).

<!-- eslint-disable id-length -->

```javascript
var EPS = require( '@stdlib/constants/float32/eps' );
var Complex64Array = require( '@stdlib/array/complex64' );

var x = new Complex64Array( [ 1.0, 2.0 ] );
var y = new Complex64Array( [ 1.0+EPS, 2.0 ] );

var bool = isAlmostEqualComplex64Array( x, y, 0 );
// returns false

bool = isAlmostEqualComplex64Array( x, y, 1 );
// returns true

bool = isAlmostEqualComplex64Array( x, [ 1.0, 2.0 ], 1 );
// returns false
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function returns `false` if either input value is a `Complex64Array` containing `NaN`.
-   The function does not distinguish between `-0` and `+0`, treating them as equal.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

<!-- eslint-disable id-length -->

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );
var isAlmostEqualComplex64Array = require( '@stdlib/assert/is-almost-equal-complex64array' );

var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
var y = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
var out = isAlmostEqualComplex64Array( x, y, 0 );
console.log( out );
// => true

x = new Complex64Array( [ -0.0, 0.0, -0.0, 0.0 ] );
y = new Complex64Array( [ 0.0, -0.0, 0.0, -0.0 ] );
out = isAlmostEqualComplex64Array( x, y, 1 );
console.log( out );
// => true

x = new Complex64Array( [ NaN, NaN, NaN, NaN ] );
y = new Complex64Array( [ NaN, NaN, NaN, NaN ] );
out = isAlmostEqualComplex64Array( x, y, 0 );
console.log( out );
// => false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/array/complex64]: https://github.com/stdlib-js/array-complex64

[@stdlib/assert/is-almost-equal]: https://github.com/stdlib-js/assert/tree/main/is-almost-equal

</section>

<!-- /.links -->
