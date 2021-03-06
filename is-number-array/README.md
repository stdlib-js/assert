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

# isNumberArray

> Test if a value is an array-like object of numbers.

<section class="usage">

## Usage

```javascript
var isNumberArray = require( '@stdlib/assert/is-number-array' );
```

#### isNumberArray( value )

Tests if a `value` is an array-like object of `numbers`.

```javascript
var bool = isNumberArray( [ 1, 2, 3, 4 ] );
// returns true
```

#### isNumberArray.primitives( value )

Tests if a `value` is an array-like object containing **only** `number` primitives.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isNumberArray.primitives( [ 1, 2, 3 ] );
// returns true

bool = isNumberArray.primitives( [ 1, new Number( 2 ), 3 ] );
// returns false
```

#### isNumberArray.objects( value )

Tests if a `value` is an array-like object containing **only** `Number` objects.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isNumberArray.objects( [ new Number( 1 ), new Number( 2 ) ] );
// returns true

bool = isNumberArray.objects( [ new Number( 1 ), 2 ] );
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
var isNumberArray = require( '@stdlib/assert/is-number-array' );

var bool = isNumberArray( [ 3.14 ] );
// returns true

bool = isNumberArray( [ NaN ] );
// returns true

bool = isNumberArray( [ 1, 2, 3 ] );
// returns true

bool = isNumberArray( [ new Number( 3.14 ), 2, 3 ] );
// returns true

bool = isNumberArray( 3.14 );
// returns false

bool = isNumberArray( [] );
// returns false

bool = isNumberArray( [ '1', 2 ] );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/is-array`][@stdlib/assert/is-array]</span><span class="delimiter">: </span><span class="description">test if a value is an array.</span>
-   <span class="package-name">[`@stdlib/assert/is-number`][@stdlib/assert/is-number]</span><span class="delimiter">: </span><span class="description">test if a value is a number.</span>
-   <span class="package-name">[`@stdlib/assert/is-numeric-array`][@stdlib/assert/is-numeric-array]</span><span class="delimiter">: </span><span class="description">test if a value is a numeric array.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/assert/is-array]: https://github.com/stdlib-js/assert/tree/main/is-array

[@stdlib/assert/is-number]: https://github.com/stdlib-js/assert/tree/main/is-number

[@stdlib/assert/is-numeric-array]: https://github.com/stdlib-js/assert/tree/main/is-numeric-array

<!-- </related-links> -->

</section>

<!-- /.links -->
