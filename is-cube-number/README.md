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

# isCubeNumber

> Test if a value is a cube number.

<section class="intro">

A **cube number** is defined as an integer value which is the cube of an integer.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var isCubeNumber = require( '@stdlib/assert/is-cube-number' );
```

#### isCubeNumber( value )

Tests if a `value` is a cube number.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isCubeNumber( 8.0 );
// returns true

bool = isCubeNumber( new Number( 8.0 ) );
// returns true

bool = isCubeNumber( 3.14 );
// returns false

bool = isCubeNumber( -5.0 );
// returns false

bool = isCubeNumber( NaN );
// returns false

bool = isCubeNumber( null );
// returns false
```

#### isCubeNumber.isPrimitive( value )

Tests if a `value` is a primitive cube number.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isCubeNumber.isPrimitive( 8.0 );
// returns true

bool = isCubeNumber.isPrimitive( new Number( 8.0 ) );
// returns false
```

#### isCubeNumber.isObject( value )

Tests if a `value` is a `Number` object having a value which is a cube number.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isCubeNumber.isObject( 8.0 );
// returns false

bool = isCubeNumber.isObject( new Number( 8.0 ) );
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
var isCubeNumber = require( '@stdlib/assert/is-cube-number' );

var bool = isCubeNumber( 8.0 );
// returns true

bool = isCubeNumber( new Number( 8.0 ) );
// returns true

bool = isCubeNumber( 0.0 );
// returns true

bool = isCubeNumber( 1.0 );
// returns true

bool = isCubeNumber( 3.14 );
// returns false

bool = isCubeNumber( -5.0 );
// returns false

bool = isCubeNumber( NaN );
// returns false

bool = isCubeNumber( '0.5' );
// returns false

bool = isCubeNumber( null );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/is-integer`][@stdlib/assert/is-integer]</span><span class="delimiter">: </span><span class="description">test if a value is a number having an integer value.</span>
-   <span class="package-name">[`@stdlib/assert/is-number`][@stdlib/assert/is-number]</span><span class="delimiter">: </span><span class="description">test if a value is a number.</span>
-   <span class="package-name">[`@stdlib/assert/is-square-number`][@stdlib/assert/is-square-number]</span><span class="delimiter">: </span><span class="description">test if a value is a square number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/assert/is-integer]: https://github.com/stdlib-js/assert/tree/main/is-integer

[@stdlib/assert/is-number]: https://github.com/stdlib-js/assert/tree/main/is-number

[@stdlib/assert/is-square-number]: https://github.com/stdlib-js/assert/tree/main/is-square-number

<!-- </related-links> -->

</section>

<!-- /.links -->
