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

# isOdd

> Test if a value is an odd number.

<section class="usage">

## Usage

```javascript
var isOdd = require( '@stdlib/assert/is-odd' );
```

#### isOdd( value )

Tests if a `value` is an odd `number`.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isOdd( 5.0 );
// returns true

bool = isOdd( new Number( 5.0 ) );
// returns true

bool = isOdd( 6.0 );
// returns false

bool = isOdd( -3.14 );
// returns false

bool = isOdd( null );
// returns false

bool = isOdd( NaN );
// returns false
```

#### isOdd.isPrimitive( value )

Tests if a `value` is an odd primitive number.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isOdd.isPrimitive( -5.0 );
// returns true

bool = isOdd.isPrimitive( new Number( -5.0 ) );
// returns false
```

#### isOdd.isObject( value )

Tests if a `value` is a `Number` object having an odd number value.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isOdd.isObject( 5.0 );
// returns false

bool = isOdd.isObject( new Number( 5.0 ) );
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
var isOdd = require( '@stdlib/assert/is-odd' );

var bool = isOdd( 5.0 );
// returns true

bool = isOdd( new Number( 5 ) );
// returns true

bool = isOdd( 0.0 );
// returns false

bool = isOdd( 4.0 );
// returns false

bool = isOdd( NaN );
// returns false

bool = isOdd( '5' );
// returns false

bool = isOdd( null );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/is-even`][@stdlib/assert/is-even]</span><span class="delimiter">: </span><span class="description">test if a value is an even number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/assert/is-even]: https://github.com/stdlib-js/assert/tree/main/is-even

<!-- </related-links> -->

</section>

<!-- /.links -->
