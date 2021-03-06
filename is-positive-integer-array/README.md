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

# isPositiveIntegerArray

> Test if a value is an array-like object containing only positive integers.

<section class="usage">

## Usage

```javascript
var isPositiveIntegerArray = require( '@stdlib/assert/is-positive-integer-array' );
```

#### isPositiveIntegerArray( value )

Tests if a `value` is an array-like object containing **only** positive `integer` values.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isPositiveIntegerArray( [ 3.0, new Number(3.0) ] );
// returns true

bool = isPositiveIntegerArray( [ 3.0, '3.0' ] );
// returns false
```

#### isPositiveIntegerArray.primitives( value )

Tests if a `value` is an array-like object containing **only** positive primitive `integer` values.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isPositiveIntegerArray.primitives( [ 1.0, 2.0, 10.0 ] );
// returns true

bool = isPositiveIntegerArray.primitives( [ 3.0, new Number(1.0) ] );
// returns false
```

#### isPositiveIntegerArray.objects( value )

Tests if a `value` is an array-like object containing **only** positive object `integer` values.

<!-- eslint-disable no-new-wrappers, max-len -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isPositiveIntegerArray.objects( [ new Number(3.0), new Number(1.0) ] );
// returns true

bool = isPositiveIntegerArray.objects( [ 1.0, 2.0, 10.0 ] );
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
var isPositiveIntegerArray = require( '@stdlib/assert/is-positive-integer-array' );

var bool = isPositiveIntegerArray( [ 5, 2, 3 ] );
// returns true

bool = isPositiveIntegerArray( [ 1, new Number( 6 ), 3 ] );
// returns true

bool = isPositiveIntegerArray( [ 0, 1, 2, 3, 4 ] );
// returns false

bool = isPositiveIntegerArray( [ 1, 'abc', 3 ] );
// returns false

bool = isPositiveIntegerArray( [ 2.3, 1, 3 ] );
// returns false

bool = isPositiveIntegerArray( [] );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/is-array`][@stdlib/assert/is-array]</span><span class="delimiter">: </span><span class="description">test if a value is an array.</span>
-   <span class="package-name">[`@stdlib/assert/is-integer`][@stdlib/assert/is-integer]</span><span class="delimiter">: </span><span class="description">test if a value is a number having an integer value.</span>
-   <span class="package-name">[`@stdlib/assert/is-positive-integer`][@stdlib/assert/is-positive-integer]</span><span class="delimiter">: </span><span class="description">test if a value is a number having a positive integer value.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/assert/is-array]: https://github.com/stdlib-js/assert/tree/main/is-array

[@stdlib/assert/is-integer]: https://github.com/stdlib-js/assert/tree/main/is-integer

[@stdlib/assert/is-positive-integer]: https://github.com/stdlib-js/assert/tree/main/is-positive-integer

<!-- </related-links> -->

</section>

<!-- /.links -->
