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

# isAlmostEqual

> Test if two arguments are approximately equal within a specified number of ULPs (units in the last place).

<section class="usage">

## Usage

```javascript
var isAlmostEqual = require( '@stdlib/assert/is-almost-equal' );
```

#### isAlmostEqual( a, b, maxULP )

Tests if two arguments are approximately equal within a specified number of ULPs (units in the last place).

```javascript
var EPS = require( '@stdlib/constants/float64/eps' );

var bool = isAlmostEqual( 1.0, 1.0+EPS, 1 );
// returns true

bool = isAlmostEqual( '', '', 0 );
// returns true

bool = isAlmostEqual( {}, {}, 1 );
// returns false
```

The function returns `false` if either input value is `NaN` or, in the case of [complex numbers][@stdlib/complex], if either the real or imaginary component is `NaN`.

```javascript
var Complex128 = require( '@stdlib/complex/float64/ctor' );

var bool = isAlmostEqual( NaN, 1.0, 1 );
// returns false

bool = isAlmostEqual( NaN, NaN, 1 );
// returns false

var z1 = new Complex128( NaN, 3.0 );
var z2 = new Complex128( 1.0, 3.0 );

bool = isAlmostEqual( z1, z2, 1 );
// returns false

z1 = new Complex128( NaN, NaN );
z2 = new Complex128( NaN, NaN );

bool = isAlmostEqual( z1, z2, 1 );
// returns false
```

The function does not distinguish between `-0` and `+0`, treating them as equal.

```javascript
var Complex128 = require( '@stdlib/complex/float64/ctor' );

var bool = isAlmostEqual( 0.0, -0.0, 0 );
// returns true

var z1 = new Complex128( 0.0, 0.0 );
var z2 = new Complex128( -0.0, -0.0 );

bool = isAlmostEqual( z1, z2, 0 );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var EPS = require( '@stdlib/constants/float64/eps' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var isAlmostEqual = require( '@stdlib/assert/is-almost-equal' );

console.log( isAlmostEqual( true, true, 0 ) );
// => true

console.log( isAlmostEqual( true, false, 1 ) );
// => false

console.log( isAlmostEqual( 'beep', 'beep', 1 ) );
// => true

console.log( isAlmostEqual( 1.0, 1.0+EPS, 1 ) );
// => true

console.log( isAlmostEqual( null, null, 0 ) );
// => true

console.log( isAlmostEqual( 0.0, -0.0, 0 ) );
// => true

console.log( isAlmostEqual( NaN, NaN, 1 ) );
// => false

var z1 = new Complex128( 1.0, 3.0+EPS );
var z2 = new Complex128( 1.0+EPS, 3.0 );
console.log( isAlmostEqual( z1, z2, 1 ) );
// => true

console.log( isAlmostEqual( {}, {}, 1 ) );
// => false

console.log( isAlmostEqual( [], [], 1 ) );
// => false

console.log( isAlmostEqual( isAlmostEqual, isAlmostEqual, 0 ) );
// => true
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/complex]: https://github.com/stdlib-js/complex

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
