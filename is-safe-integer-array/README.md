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

# isSafeIntegerArray

> Test if a value is an array-like object containing only [safe integers][@stdlib/assert/is-safe-integer].

<section class="usage">

## Usage

```javascript
var isSafeIntegerArray = require( '@stdlib/assert/is-safe-integer-array' );
```

#### isSafeIntegerArray( value )

Tests if a `value` is an array-like object containing **only** [safe `integer`][@stdlib/assert/is-safe-integer] values.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isSafeIntegerArray( [ -3, new Number(3) ] );
// returns true

bool = isSafeIntegerArray( [ -1e100, 2e200 ] );
// returns false

bool = isSafeIntegerArray( [ -3, 'abc' ] );
// returns false
```

#### isSafeIntegerArray.primitives( value )

Tests if a `value` is an array-like object containing **only** primitive [safe `integer`][@stdlib/assert/is-safe-integer] values.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isSafeIntegerArray.primitives( [ -1.0, 0.0, 4.0 ] );
// returns true

bool = isSafeIntegerArray.primitives( [ -1.0, 2.2 ] );
// returns false

bool = isSafeIntegerArray.primitives( [ -3.0, new Number(2.0) ] );
// returns false
```

#### isSafeIntegerArray.objects( value )

Tests if a `value` is an array-like object containing **only** `Number` objects holding [safe `integer`][@stdlib/assert/is-safe-integer] values.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isSafeIntegerArray.objects( [ new Number(-1.0), new Number(2.0) ] );
// returns true

bool = isSafeIntegerArray.objects( [ -1.0, 0.0, 1.0 ] );
// returns false

bool = isSafeIntegerArray.objects( [ -3.0, new Number(1.0) ] );
// returns false
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint-disable no-new-wrappers -->

<!-- eslint no-undef: "error" -->

```javascript
var Number = require( '@stdlib/number/ctor' );
var isSafeIntegerArray = require( '@stdlib/assert/is-safe-integer-array' );

var bool = isSafeIntegerArray( [ -5, 0, 2, 5 ] );
// returns true

bool = isSafeIntegerArray( [ -4, -3, 1, 3 ] );
// returns true

bool = isSafeIntegerArray( [ -1, new Number( -6 ), 2 ] );
// returns true

bool = isSafeIntegerArray( [ 1e100, 2e200, 3e300 ] );
// returns false

bool = isSafeIntegerArray( [ -1, 'abc', 3 ] );
// returns false

bool = isSafeIntegerArray( [ -2.3, 0, 3 ] );
// returns false

bool = isSafeIntegerArray( [] );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/is-array`][@stdlib/assert/is-array]</span><span class="delimiter">: </span><span class="description">test if a value is an array.</span>
-   <span class="package-name">[`@stdlib/assert/is-safe-integer`][@stdlib/assert/is-safe-integer]</span><span class="delimiter">: </span><span class="description">test if a value is a number having a safe integer value.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/assert/is-array]: https://github.com/stdlib-js/assert/tree/main/is-array

[@stdlib/assert/is-safe-integer]: https://github.com/stdlib-js/assert/tree/main/is-safe-integer

<!-- </related-links> -->

</section>

<!-- /.links -->
