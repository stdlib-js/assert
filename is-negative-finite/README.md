<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

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

# isNegativeFinite

> Test if a value is a number having a finite negative value.

<section class="usage">

## Usage

```javascript
var isNegativeFinite = require( '@stdlib/assert/is-negative-finite' );
```

#### isNegativeFinite( value )

Tests if a value is a number having a finite negative value.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isNegativeFinite( -5.0 );
// returns true

bool = isNegativeFinite( new Number( -5.0 ) );
// returns true

bool = isNegativeFinite( -3.14 );
// returns true

bool = isNegativeFinite( 5.0 );
// returns false

bool = isNegativeFinite( null );
// returns false

bool = isNegativeFinite( -1.0/0.0 );
// returns false
```

#### isNegativeFinite.isPrimitive( value )

Tests if a value is a primitive number having a finite negative value.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isNegativeFinite.isPrimitive( -3.0 );
// returns true

bool = isNegativeFinite.isPrimitive( new Number( -3.0 ) );
// returns false
```

#### isNegativeFinite.isObject( value )

Tests if a value is a `Number` object having a finite negative value.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isNegativeFinite.isObject( -3.0 );
// returns false

bool = isNegativeFinite.isObject( new Number( -3.0 ) );
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
var isNegativeFinite = require( '@stdlib/assert/is-negative-finite' );

var bool = isNegativeFinite( -5.0 );
// returns true

bool = isNegativeFinite( new Number( -5.0 ) );
// returns true

bool = isNegativeFinite( -3.14 );
// returns true

bool = isNegativeFinite( 0.0 );
// returns false

bool = isNegativeFinite( 5.0 );
// returns false

bool = isNegativeFinite( '-5' );
// returns false

bool = isNegativeFinite( null );
// returns false

bool = isNegativeFinite( -1.0/0.0 );
// returns false

bool = isNegativeFinite( new Number( -1.0/0.0 ) );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/is-finite`][@stdlib/assert/is-finite]</span><span class="delimiter">: </span><span class="description">test if a value is a finite number.</span>
-   <span class="package-name">[`@stdlib/assert/is-negative-number`][@stdlib/assert/is-negative-number]</span><span class="delimiter">: </span><span class="description">test if a value is a number having a negative value.</span>
-   <span class="package-name">[`@stdlib/assert/is-positive-finite`][@stdlib/assert/is-positive-finite]</span><span class="delimiter">: </span><span class="description">test if a value is a number having a finite positive value.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/assert/is-finite]: https://github.com/stdlib-js/assert/tree/main/is-finite

[@stdlib/assert/is-negative-number]: https://github.com/stdlib-js/assert/tree/main/is-negative-number

[@stdlib/assert/is-positive-finite]: https://github.com/stdlib-js/assert/tree/main/is-positive-finite

<!-- </related-links> -->

</section>

<!-- /.links -->
