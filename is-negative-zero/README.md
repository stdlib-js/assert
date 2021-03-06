<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

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

# isNegativeZero

> Test if a value is a number equal to negative zero.

<section class="usage">

## Usage

```javascript
var isNegativeZero = require( '@stdlib/assert/is-negative-zero' );
```

#### isNegativeZero( value )

Tests if a `value` is a `number` having a value equal to negative zero.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isNegativeZero( -0.0 );
// returns true

bool = isNegativeZero( new Number( -0.0 ) );
// returns true

bool = isNegativeZero( -3.14 );
// returns false

bool = isNegativeZero( 0.0 );
// returns false

bool = isNegativeZero( null );
// returns false
```

#### isNegativeZero.isPrimitive( value )

Tests if a `value` is a primitive `number` equal to negative zero.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isNegativeZero.isPrimitive( -0.0 );
// returns true

bool = isNegativeZero.isPrimitive( new Number( -0.0 ) );
// returns false
```

#### isNegativeZero.isObject( value )

Tests if a `value` is a `Number` object having a value equal to negative zero.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isNegativeZero.isObject( -0.0 );
// returns false

bool = isNegativeZero.isObject( new Number( -0.0 ) );
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
var isNegativeZero = require( '@stdlib/assert/is-negative-zero' );

var bool = isNegativeZero( -0.0 );
// returns true

bool = isNegativeZero( new Number( -0.0 ) );
// returns true

bool = isNegativeZero( -3.14 );
// returns false

bool = isNegativeZero( 0.0 );
// returns false

bool = isNegativeZero( 5.0 );
// returns false

bool = isNegativeZero( '-0' );
// returns false

bool = isNegativeZero( null );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/is-number`][@stdlib/assert/is-number]</span><span class="delimiter">: </span><span class="description">test if a value is a number.</span>
-   <span class="package-name">[`@stdlib/assert/is-positive-zero`][@stdlib/assert/is-positive-zero]</span><span class="delimiter">: </span><span class="description">test if a value is equal to positive zero.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/assert/is-number]: https://github.com/stdlib-js/assert/tree/main/is-number

[@stdlib/assert/is-positive-zero]: https://github.com/stdlib-js/assert/tree/main/is-positive-zero

<!-- </related-links> -->

</section>

<!-- /.links -->
