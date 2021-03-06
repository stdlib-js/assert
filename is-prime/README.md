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

# isPrime

> Test if a value is a prime number.

<section class="intro">

A **prime number** is defined as an integer value greater than `1` which is only divisible by `1` and itself.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var isPrime = require( '@stdlib/assert/is-prime' );
```

#### isPrime( value )

Tests if a `value` is a prime number.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isPrime( 5.0 );
// returns true

bool = isPrime( new Number( 5.0 ) );
// returns true

bool = isPrime( 3.14 );
// returns false

bool = isPrime( -5.0 );
// returns false

bool = isPrime( NaN );
// returns false

bool = isPrime( null );
// returns false
```

#### isPrime.isPrimitive( value )

Tests if a `value` is a primitive prime number.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isPrime.isPrimitive( 5.0 );
// returns true

bool = isPrime.isPrimitive( new Number( 5.0 ) );
// returns false
```

#### isPrime.isObject( value )

Tests if a `value` is a `Number` object having a value which is a prime number.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isPrime.isObject( 5.0 );
// returns false

bool = isPrime.isObject( new Number( 5.0 ) );
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
var isPrime = require( '@stdlib/assert/is-prime' );

var bool = isPrime( 5.0 );
// returns true

bool = isPrime( new Number( 5.0 ) );
// returns true

bool = isPrime( 11.0 );
// returns true

bool = isPrime( 2.0 );
// returns true

bool = isPrime( 3.14 );
// returns false

bool = isPrime( -5.0 );
// returns false

bool = isPrime( NaN );
// returns false

bool = isPrime( '0.5' );
// returns false

bool = isPrime( null );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/is-composite`][@stdlib/assert/is-composite]</span><span class="delimiter">: </span><span class="description">test if a value is a composite number.</span>
-   <span class="package-name">[`@stdlib/assert/is-integer`][@stdlib/assert/is-integer]</span><span class="delimiter">: </span><span class="description">test if a value is a number having an integer value.</span>
-   <span class="package-name">[`@stdlib/assert/is-number`][@stdlib/assert/is-number]</span><span class="delimiter">: </span><span class="description">test if a value is a number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/assert/is-composite]: https://github.com/stdlib-js/assert/tree/main/is-composite

[@stdlib/assert/is-integer]: https://github.com/stdlib-js/assert/tree/main/is-integer

[@stdlib/assert/is-number]: https://github.com/stdlib-js/assert/tree/main/is-number

<!-- </related-links> -->

</section>

<!-- /.links -->
