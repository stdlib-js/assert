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

# isNonNegativeNumberArray

> Test if a value is an array-like object containing only nonnegative numbers.

<section class="usage">

## Usage

```javascript
var isNonNegativeNumberArray = require( '@stdlib/assert/is-nonnegative-number-array' );
```

#### isNonNegativeNumberArray( value )

Tests if a `value` is an array-like object containing **only** nonnegative numbers.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isNonNegativeNumberArray( [ 3.0, new Number(3.0) ] );
// returns true

bool = isNonNegativeNumberArray( [ 3.0, '3.0' ] );
// returns false
```

#### isNonNegativeNumberArray.primitives( value )

Tests if a `value` is an array-like object containing **only** primitive nonnegative numbers.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isNonNegativeNumberArray.primitives( [ 1.0, 0.0, 10.0 ] );
// returns true

bool = isNonNegativeNumberArray.primitives( [ 3.0, new Number(1.0) ] );
// returns false
```

#### isNonNegativeNumberArray.objects( value )

Tests if a `value` is an array-like object containing **only** object nonnegative numbers.

<!-- eslint-disable no-new-wrappers, max-len -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isNonNegativeNumberArray.objects( [ new Number(1.0), new Number(1.0) ] );
// returns true

bool = isNonNegativeNumberArray.objects( [ 1.0, 0.0, 10.0 ] );
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
var isNonNegativeNumberArray = require( '@stdlib/assert/is-nonnegative-number-array' );

var bool = isNonNegativeNumberArray( [ 5.0, 0.2, 3.9 ] );
// returns true

bool = isNonNegativeNumberArray( [ 1, 2, 3 ] );
// returns true

bool = isNonNegativeNumberArray( [ 1, new Number( 6 ), 3 ] );
// returns true

bool = isNonNegativeNumberArray( [ 1, 'abc', 3 ] );
// returns false

bool = isNonNegativeNumberArray( 78.0 );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/is-array`][@stdlib/assert/is-array]</span><span class="delimiter">: </span><span class="description">test if a value is an array.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/assert/is-array]: https://github.com/stdlib-js/assert/tree/main/is-array

<!-- </related-links> -->

</section>

<!-- /.links -->
