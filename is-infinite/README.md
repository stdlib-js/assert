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

# isInfinite

> Test if a value is an infinite number.

<section class="usage">

## Usage

```javascript
var isInfinite = require( '@stdlib/assert/is-infinite' );
```

#### isInfinite( value )

Tests if a value is an infinite `number`.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isInfinite( 1.0/0.0 );
// returns true

bool = isInfinite( new Number( 1.0/0.0 ) );
// returns true

bool = isInfinite( 1.0 );
// returns false

bool = isInfinite( null );
// returns false
```

#### isInfinite.isPrimitive( value )

Tests if a `value` is a primitive `number` having an infinite value.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isInfinite.isPrimitive( -1.0/0.0 );
// returns true

bool = isInfinite.isPrimitive( new Number( -1.0/0.0 ) );
// returns false
```

#### isInfinite.isObject( value )

Tests if a `value` is a `Number` object having an infinite value.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isInfinite.isObject( 1.0/0.0 );
// returns false

bool = isInfinite.isObject( new Number( 1.0/0.0 ) );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable no-new-wrappers -->

<!-- eslint no-undef: "error" -->

```javascript
var Number = require( '@stdlib/number/ctor' );
var isInfinite = require( '@stdlib/assert/is-infinite' );

var bool = isInfinite( 1.0/0.0 );
// returns true

bool = isInfinite( -1.0/0.0 );
// returns true

bool = isInfinite( new Number( 1.0/0.0 ) );
// returns true

bool = isInfinite( -5.0 );
// returns false

bool = isInfinite( 0.0 );
// returns false

bool = isInfinite( 5.256 );
// returns false

bool = isInfinite( '1.0/0.0' );
// returns false

bool = isInfinite( null );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/is-finite`][@stdlib/assert/is-finite]</span><span class="delimiter">: </span><span class="description">test if a value is a finite number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/assert/is-finite]: https://github.com/stdlib-js/assert/tree/main/is-finite

<!-- </related-links> -->

</section>

<!-- /.links -->
