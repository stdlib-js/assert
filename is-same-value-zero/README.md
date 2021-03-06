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

# isSameValueZero

> Test if two arguments are the same value.

<section class="usage">

## Usage

```javascript
var isSameValueZero = require( '@stdlib/assert/is-same-value-zero' );
```

#### isSameValueZero( a, b )

Tests if two arguments `a` and `b` are the same value.

```javascript
var bool = isSameValueZero( false, false );
// returns true

bool = isSameValueZero( '', '' );
// returns true

bool = isSameValueZero( {}, {} );
// returns false
```

In contrast to the strict equality operator `===`, the function treats `NaNs` as the same value.

<!-- eslint-disable use-isnan -->

```javascript
var bool = ( NaN === NaN );
// returns false

bool = isSameValueZero( NaN, NaN );
// returns true
```

In contrast to the [SameValue Algorithm][@stdlib/assert/is-same-value], the function does **not** distinguish between `+0` and `-0`.

<!-- eslint-disable no-compare-neg-zero -->

```javascript
var bool = ( 0.0 === -0.0 );
// returns true

bool = isSameValueZero( 0.0, -0.0 );
// returns true

bool = isSameValueZero( -0.0, 0.0 );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var isSameValueZero = require( '@stdlib/assert/is-same-value-zero' );

var bool = isSameValueZero( true, true );
// returns true

bool = isSameValueZero( true, false );
// returns false

bool = isSameValueZero( 'beep', 'beep' );
// returns true

bool = isSameValueZero( 3.14, 3.14 );
// returns true

bool = isSameValueZero( null, null );
// returns true

bool = isSameValueZero( 0.0, 0.0 );
// returns true

bool = isSameValueZero( -0.0, 0.0 );
// returns true

bool = isSameValueZero( NaN, NaN );
// returns true

bool = isSameValueZero( {}, {} );
// returns false

bool = isSameValueZero( [], [] );
// returns false

bool = isSameValueZero( isSameValueZero, isSameValueZero );
// returns true
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/is-same-value`][@stdlib/assert/is-same-value]</span><span class="delimiter">: </span><span class="description">test if two arguments are the same value.</span>
-   <span class="package-name">[`@stdlib/assert/is-strict-equal`][@stdlib/assert/is-strict-equal]</span><span class="delimiter">: </span><span class="description">test if two arguments are strictly equal.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/assert/is-same-value]: https://github.com/stdlib-js/assert/tree/main/is-same-value

[@stdlib/assert/is-strict-equal]: https://github.com/stdlib-js/assert/tree/main/is-strict-equal

<!-- </related-links> -->

</section>

<!-- /.links -->
