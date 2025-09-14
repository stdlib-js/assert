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

# isAlmostEqualArray

> Test if two arguments are both generic arrays and contain respective elements which are [approximately equal][@stdlib/assert/is-almost-equal] within a specified number of ULPs (units in the last place).

<section class="usage">

## Usage

```javascript
var isAlmostEqualArray = require( '@stdlib/assert/is-almost-equal-array' );
```

#### isAlmostEqualArray( v1, v2, maxULP )

Tests if two arguments are both generic arrays and contain respective elements which are [approximately equal][@stdlib/assert/is-almost-equal] within a specified number of ULPs (units in the last place).

```javascript
var EPS = require( '@stdlib/constants/float64/eps' );

var x = [ 1.0, 2.0 ];
var y = [ 1.0+EPS, 2.0 ];

var bool = isAlmostEqualArray( x, y, 0 );
// returns false

bool = isAlmostEqualArray( x, y, 1 );
// returns true

bool = isAlmostEqualArray( x, [ -1.0, 2.0 ], 1 );
// returns false
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function returns `false` if either input value is a generic array containing `NaN`.
-   The function does not distinguish between `-0` and `+0`, treating them as equal.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var isAlmostEqualArray = require( '@stdlib/assert/is-almost-equal-array' );

var x = [ 1.0, 2.0, 3.0 ];
var y = [ 1.0, 2.0, 3.0 ];
var out = isAlmostEqualArray( x, y, 0 );
// returns true

x = [ -0.0, 0.0, -0.0 ];
y = [ 0.0, -0.0, 0.0 ];
out = isAlmostEqualArray( x, y, 1 );
// returns true

x = [ NaN, NaN, NaN ];
y = [ NaN, NaN, NaN ];
out = isAlmostEqualArray( x, y, 0 );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/assert/is-almost-equal]: https://github.com/stdlib-js/assert/tree/main/is-almost-equal

</section>

<!-- /.links -->
