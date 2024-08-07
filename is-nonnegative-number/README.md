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

# isNonNegativeNumber

> Test if a value is a number having a nonnegative value.

<section class="usage">

## Usage

```javascript
var isNonNegativeNumber = require( '@stdlib/assert/is-nonnegative-number' );
```

#### isNonNegativeNumber( value )

Tests if a `value` is a `number` having a nonnegative value.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isNonNegativeNumber( 5.0 );
// returns true

bool = isNonNegativeNumber( new Number( 5.0 ) );
// returns true

bool = isNonNegativeNumber( 3.14 );
// returns true

bool = isNonNegativeNumber( -5.0 );
// returns false

bool = isNonNegativeNumber( null );
// returns false
```

#### isNonNegativeNumber.isPrimitive( value )

Tests if a `value` is a primitive `number` having a nonnegative value.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isNonNegativeNumber.isPrimitive( 3.0 );
// returns true

bool = isNonNegativeNumber.isPrimitive( new Number( 3.0 ) );
// returns false
```

#### isNonNegativeNumber.isObject( value )

Tests if a `value` is a `Number` object having a nonnegative value.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isNonNegativeNumber.isObject( 3.0 );
// returns false

bool = isNonNegativeNumber.isObject( new Number( 3.0 ) );
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
var isNonNegativeNumber = require( '@stdlib/assert/is-nonnegative-number' );

var bool = isNonNegativeNumber( 5.0 );
// returns true

bool = isNonNegativeNumber( new Number( 5.0 ) );
// returns true

bool = isNonNegativeNumber( 0.0 );
// returns true

bool = isNonNegativeNumber( 3.14 );
// returns true

bool = isNonNegativeNumber( -5.0 );
// returns false

bool = isNonNegativeNumber( '5' );
// returns false

bool = isNonNegativeNumber( null );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/is-nonnegative-finite`][@stdlib/assert/is-nonnegative-finite]</span><span class="delimiter">: </span><span class="description">test if a value is a number having a nonnegative finite value.</span>
-   <span class="package-name">[`@stdlib/assert/is-nonnegative-integer`][@stdlib/assert/is-nonnegative-integer]</span><span class="delimiter">: </span><span class="description">test if a value is a number having a nonnegative integer value.</span>
-   <span class="package-name">[`@stdlib/assert/is-number`][@stdlib/assert/is-number]</span><span class="delimiter">: </span><span class="description">test if a value is a number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/assert/is-nonnegative-finite]: https://github.com/stdlib-js/assert/tree/main/is-nonnegative-finite

[@stdlib/assert/is-nonnegative-integer]: https://github.com/stdlib-js/assert/tree/main/is-nonnegative-integer

[@stdlib/assert/is-number]: https://github.com/stdlib-js/assert/tree/main/is-number

<!-- </related-links> -->

</section>

<!-- /.links -->
