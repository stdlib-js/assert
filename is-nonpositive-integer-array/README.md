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

# isNonPositiveIntegerArray

> Test if a value is an array-like object containing only nonpositive integers.

<section class="usage">

## Usage

```javascript
var isNonPositiveIntegerArray = require( '@stdlib/assert/is-nonpositive-integer-array' );
```

#### isNonPositiveIntegerArray( value )

Tests if a `value` is an array-like object containing **only** nonpositive `integer` values.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isNonPositiveIntegerArray( [ -3, new Number(-3) ] );
// returns true

bool = isNonPositiveIntegerArray( [ -3, '3.0' ] );
// returns false
```

#### isNonPositiveIntegerArray.primitives( value )

Tests if a `value` is an array-like object containing **only** nonpositive primitive `integer` values.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isNonPositiveIntegerArray.primitives( [ -1.0, -10.0 ] );
// returns true

bool = isNonPositiveIntegerArray.primitives( [ -1.0, 0.0, -10.0 ] );
// returns true

bool = isNonPositiveIntegerArray.primitives( [ -3.0, new Number(-1.0) ] );
// returns false
```

#### isNonPositiveIntegerArray.objects( value )

Tests if a `value` is an array-like object containing **only** `Number` objects holding nonpositive `integer` values.

<!-- eslint-disable no-new-wrappers, max-len -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isNonPositiveIntegerArray.objects( [ new Number(-1.0), new Number(-10.0) ] );
// returns true

bool = isNonPositiveIntegerArray.objects( [ -1.0, 0.0, -10.0 ] );
// returns false

bool = isNonPositiveIntegerArray.objects( [ -3.0, new Number(-1.0) ] );
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
var isNonPositiveIntegerArray = require( '@stdlib/assert/is-nonpositive-integer-array' );

var bool = isNonPositiveIntegerArray( [ -5, -2, -3 ] );
// returns true

bool = isNonPositiveIntegerArray( [ -4, -3, -2, -1 ] );
// returns true

bool = isNonPositiveIntegerArray( [ -1, new Number( -6 ), -3 ] );
// returns true

bool = isNonPositiveIntegerArray( [ -3, -2, -1, 0 ] );
// returns true

bool = isNonPositiveIntegerArray( [ -3, -2, -1, 0, 2 ] );
// returns false

bool = isNonPositiveIntegerArray( [ -1, 'abc', -3 ] );
// returns false

bool = isNonPositiveIntegerArray( [ -2.3, -1, -3 ] );
// returns false

bool = isNonPositiveIntegerArray( [] );
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
