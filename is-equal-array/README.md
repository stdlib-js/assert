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

# isEqualArray

> Test if two arguments are both generic arrays and have equal values.

<section class="usage">

## Usage

```javascript
var isEqualArray = require( '@stdlib/assert/is-equal-array' );
```

#### isEqualArray( v1, v2 )

Tests if two arguments are both generic arrays and have equal values.

```javascript
var x = [ 1.0, 2.0 ];
var y = [ 1.0, 2.0 ];
var bool = isEqualArray( x, y );
// returns true

bool = isEqualArray( x, [ -1.0, 2.0 ] );
// returns false
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function performs strict equality comparison; thus, the function treats `-0` and `+0` as equal and `NaNs` as distinct.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var isEqualArray = require( '@stdlib/assert/is-equal-array' );

var x = [ 1.0, 2.0, 3.0 ];
var y = [ 1.0, 2.0, 3.0 ];
var out = isEqualArray( x, y );
// returns true

x = [ -0.0, 0.0, -0.0 ];
y = [ 0.0, -0.0, 0.0 ];
out = isEqualArray( x, y );
// returns true

x = [ NaN, NaN, NaN ];
y = [ NaN, NaN, NaN ];
out = isEqualArray( x, y );
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

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
