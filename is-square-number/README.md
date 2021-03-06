<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

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

# isSquareNumber

> Test if a value is a square number.

<section class="intro">

A **square number** is defined as an integer value which is the square of an integer.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var isSquareNumber = require( '@stdlib/assert/is-square-number' );
```

#### isSquareNumber( value )

Tests if a `value` is a square number.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isSquareNumber( 4.0 );
// returns true

bool = isSquareNumber( new Number( 4.0 ) );
// returns true

bool = isSquareNumber( 3.14 );
// returns false

bool = isSquareNumber( -5.0 );
// returns false

bool = isSquareNumber( NaN );
// returns false

bool = isSquareNumber( null );
// returns false
```

#### isSquareNumber.isPrimitive( value )

Tests if a `value` is a primitive square number.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isSquareNumber.isPrimitive( 4.0 );
// returns true

bool = isSquareNumber.isPrimitive( new Number( 4.0 ) );
// returns false
```

#### isSquareNumber.isObject( value )

Tests if a `value` is a `Number` object having a value which is a square number.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isSquareNumber.isObject( 4.0 );
// returns false

bool = isSquareNumber.isObject( new Number( 4.0 ) );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint-disable no-new-wrappers -->

<!-- eslint no-undef: "error" -->

```javascript
var Number = require( '@stdlib/number/ctor' );
var isSquareNumber = require( '@stdlib/assert/is-square-number' );

var bool = isSquareNumber( 4.0 );
// returns true

bool = isSquareNumber( new Number( 4.0 ) );
// returns true

bool = isSquareNumber( 0.0 );
// returns true

bool = isSquareNumber( 1.0 );
// returns true

bool = isSquareNumber( 3.14 );
// returns false

bool = isSquareNumber( -5.0 );
// returns false

bool = isSquareNumber( NaN );
// returns false

bool = isSquareNumber( '0.5' );
// returns false

bool = isSquareNumber( null );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/is-cube-number`][@stdlib/assert/is-cube-number]</span><span class="delimiter">: </span><span class="description">test if a value is a cube number.</span>
-   <span class="package-name">[`@stdlib/assert/is-integer`][@stdlib/assert/is-integer]</span><span class="delimiter">: </span><span class="description">test if a value is a number having an integer value.</span>
-   <span class="package-name">[`@stdlib/assert/is-number`][@stdlib/assert/is-number]</span><span class="delimiter">: </span><span class="description">test if a value is a number.</span>
-   <span class="package-name">[`@stdlib/assert/is-triangular-number`][@stdlib/assert/is-triangular-number]</span><span class="delimiter">: </span><span class="description">test if a value is a triangular number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/assert/is-cube-number]: https://github.com/stdlib-js/assert/tree/main/is-cube-number

[@stdlib/assert/is-integer]: https://github.com/stdlib-js/assert/tree/main/is-integer

[@stdlib/assert/is-number]: https://github.com/stdlib-js/assert/tree/main/is-number

[@stdlib/assert/is-triangular-number]: https://github.com/stdlib-js/assert/tree/main/is-triangular-number

<!-- </related-links> -->

</section>

<!-- /.links -->
