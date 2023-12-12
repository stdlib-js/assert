<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

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

# isComplex128VectorLike

> Test if a value is a 1-dimensional [ndarray][@stdlib/ndarray/ctor]-like object containing double-precision complex floating-point numbers.

<section class="usage">

## Usage

```javascript
var isComplex128VectorLike = require( '@stdlib/assert/is-complex128vector-like' );
```

#### isComplex128VectorLike( value )

Tests if a value is a 1-dimensional [ndarray][@stdlib/ndarray/ctor]-like object whose underlying data type is `complex128`.

```javascript
var Complex128Array = require( '@stdlib/array/complex128' );
var ndarray = require( '@stdlib/ndarray/ctor' );

var arr = ndarray( 'complex128', new Complex128Array( [ 0, 0, 0, 0, 0, 0, 0, 0 ] ), [ 4 ], [ 1 ], 0, 'row-major' );

var bool = isComplex128VectorLike( arr );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var ndarray = require( '@stdlib/ndarray/ctor' );
var Complex128Array = require( '@stdlib/array/complex128' );
var isComplex128VectorLike = require( '@stdlib/assert/is-complex128vector-like' );

var buffer = new Complex128Array( [ 0, 0, 0, 0, 0, 0, 0, 0 ] );
var arr = ndarray( 'complex128', buffer, [ 4 ], [ 1 ], 0, 'row-major' );

var out = isComplex128VectorLike( arr );
// returns true

out = isComplex128VectorLike( [ 1, 2, 3, 4 ] );
// returns false

out = isComplex128VectorLike( {} );
// returns false

out = isComplex128VectorLike( null );
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

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/ndarray-ctor

</section>

<!-- /.links -->