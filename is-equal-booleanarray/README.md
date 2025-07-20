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

# isEqualBooleanArray

> Test if two arguments are both [BooleanArrays][@stdlib/array/bool] and have equal values.

<section class="usage">

## Usage

```javascript
var isEqualBooleanArray = require( '@stdlib/assert/is-equal-booleanarray' );
```

#### isEqualBooleanArray( v1, v2 )

Tests if two arguments are both [BooleanArrays][@stdlib/array/bool] and have equal values.

```javascript
var BooleanArray = require( '@stdlib/array/bool' );

var x = new BooleanArray( [ true, false ] );
var y = new BooleanArray( [ true, false ] );
var bool = isEqualBooleanArray( x, y );
// returns true

bool = isEqualBooleanArray( x, [ true, false ] );
// returns false
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var BooleanArray = require( '@stdlib/array/bool' );
var isEqualBooleanArray = require( '@stdlib/assert/is-equal-booleanarray' );

var x = new BooleanArray( [ true, false, false, true ] );
var y = new BooleanArray( [ true, false, false, true ] );
var out = isEqualBooleanArray( x, y );
// returns true

x = new BooleanArray( [ true, false, false, true ] );
y = new BooleanArray( [ true, true, false, false ] );
out = isEqualBooleanArray( x, y );
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

[@stdlib/array/bool]: https://github.com/stdlib-js/array-bool

</section>

<!-- /.links -->
