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

# isNonNegativeInteger

> Test if a value is a number having a nonnegative integer value.

<section class="usage">

## Usage

```javascript
var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' );
```

#### isNonNegativeInteger( value )

Tests if a `value` is a `number` having a nonnegative `integer` value.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isNonNegativeInteger( 5.0 );
// returns true

bool = isNonNegativeInteger( new Number( 5.0 ) );
// returns true

bool = isNonNegativeInteger( -5.0 );
// returns false

bool = isNonNegativeInteger( 3.14 );
// returns false

bool = isNonNegativeInteger( null );
// returns false
```

#### isNonNegativeInteger.isPrimitive( value )

Tests if a `value` is a primitive `number` having a nonnegative `integer` value.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isNonNegativeInteger.isPrimitive( 3.0 );
// returns true

bool = isNonNegativeInteger.isPrimitive( new Number( 3.0 ) );
// returns false
```

#### isNonNegativeInteger.isObject( value )

Tests if a `value` is a `Number` object having a nonnegative `integer` value.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isNonNegativeInteger.isObject( 3.0 );
// returns false

bool = isNonNegativeInteger.isObject( new Number( 3.0 ) );
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
var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' );

var bool = isNonNegativeInteger( 5.0 );
// returns true

bool = isNonNegativeInteger( new Number( 5.0 ) );
// returns true

bool = isNonNegativeInteger( 0.0 );
// returns true

bool = isNonNegativeInteger( 3.14 );
// returns false

bool = isNonNegativeInteger( -5.0 );
// returns false

bool = isNonNegativeInteger( '5' );
// returns false

bool = isNonNegativeInteger( null );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/is-integer`][@stdlib/assert/is-integer]</span><span class="delimiter">: </span><span class="description">test if a value is a number having an integer value.</span>
-   <span class="package-name">[`@stdlib/assert/is-nonnegative-number`][@stdlib/assert/is-nonnegative-number]</span><span class="delimiter">: </span><span class="description">test if a value is a number having a nonnegative value.</span>
-   <span class="package-name">[`@stdlib/assert/is-number`][@stdlib/assert/is-number]</span><span class="delimiter">: </span><span class="description">test if a value is a number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/assert/is-integer]: https://github.com/stdlib-js/assert/tree/main/is-integer

[@stdlib/assert/is-nonnegative-number]: https://github.com/stdlib-js/assert/tree/main/is-nonnegative-number

[@stdlib/assert/is-number]: https://github.com/stdlib-js/assert/tree/main/is-number

<!-- </related-links> -->

</section>

<!-- /.links -->
