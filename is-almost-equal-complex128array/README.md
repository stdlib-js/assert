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

# isAlmostEqualComplex128Array

> Test if two arguments are both [Complex128Arrays][@stdlib/array/complex128] and contain respective elements which are [approximately equal][@stdlib/assert/is-almost-equal] within a specified number of ULPs (units in the last place).

<section class="usage">

## Usage

<!-- eslint-disable id-length -->

```javascript
var isAlmostEqualComplex128Array = require( '@stdlib/assert/is-almost-equal-complex128array' );
```

#### isAlmostEqualComplex128Array( v1, v2, maxULP )

Tests if two arguments are both [Complex128Arrays][@stdlib/array/complex128] and contain respective elements which are [approximately equal][@stdlib/assert/is-almost-equal] within a specified number of ULPs (units in the last place).

<!-- eslint-disable id-length -->

```javascript
var EPS = require( '@stdlib/constants/float64/eps' );
var Complex128Array = require( '@stdlib/array/complex128' );

var x = new Complex128Array( [ 1.0, 2.0 ] );
var y = new Complex128Array( [ 1.0+EPS, 2.0 ] );

var bool = isAlmostEqualComplex128Array( x, y, 0 );
// returns false

bool = isAlmostEqualComplex128Array( x, y, 1 );
// returns true

bool = isAlmostEqualComplex128Array( x, [ 1.0, 2.0 ], 1 );
// returns false
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function returns `false` if either input value is a `Complex128Array` containing `NaN`.
-   The function does not distinguish between `-0` and `+0`, treating them as equal.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

<!-- eslint-disable id-length -->

```javascript
var Complex128Array = require( '@stdlib/array/complex128' );
var isAlmostEqualComplex128Array = require( '@stdlib/assert/is-almost-equal-complex128array' );

var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0 ] );
var y = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0 ] );
var out = isAlmostEqualComplex128Array( x, y, 0 );
console.log( out );
// => true

x = new Complex128Array( [ -0.0, 0.0, -0.0, 0.0 ] );
y = new Complex128Array( [ 0.0, -0.0, 0.0, -0.0 ] );
out = isAlmostEqualComplex128Array( x, y, 1 );
console.log( out );
// => true

x = new Complex128Array( [ NaN, NaN, NaN, NaN ] );
y = new Complex128Array( [ NaN, NaN, NaN, NaN ] );
out = isAlmostEqualComplex128Array( x, y, 0 );
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

[@stdlib/array/complex128]: https://github.com/stdlib-js/array-complex128

[@stdlib/assert/is-almost-equal]: https://github.com/stdlib-js/assert/tree/main/is-almost-equal

</section>

<!-- /.links -->
