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

# isFalsy

> Test if a value is falsy.

<section class="usage">

## Usage

```javascript
var isFalsy = require( '@stdlib/assert/is-falsy' );
```

#### isFalsy( value )

Tests if a `value` is a value which translates to `false` when evaluated in a boolean context.

```javascript
var bool = isFalsy( false );
// returns true

bool = isFalsy( '' );
// returns true

bool = isFalsy( 0 );
// returns true

bool = isFalsy( NaN );
// returns true

bool = isFalsy( null );
// returns true

bool = isFalsy( void 0 );
// returns true

bool = isFalsy( [] );
// returns false
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint-disable no-empty-function, no-restricted-syntax -->

<!-- eslint no-undef: "error" -->

```javascript
var isFalsy = require( '@stdlib/assert/is-falsy' );

var bool = isFalsy( false );
// returns true

bool = isFalsy( 0 );
// returns true

bool = isFalsy( NaN );
// returns true

bool = isFalsy( '' );
// returns true

bool = isFalsy( void 0 );
// returns true

bool = isFalsy( null );
// returns true

bool = isFalsy( 'beep' );
// returns false

bool = isFalsy( 5 );
// returns false

bool = isFalsy( true );
// returns false

bool = isFalsy( [] );
// returns false

bool = isFalsy( {} );
// returns false

bool = isFalsy( function foo() {} );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/is-falsy-array`][@stdlib/assert/is-falsy-array]</span><span class="delimiter">: </span><span class="description">test if a value is an array-like object containing only falsy values.</span>
-   <span class="package-name">[`@stdlib/assert/is-truthy`][@stdlib/assert/is-truthy]</span><span class="delimiter">: </span><span class="description">test if a value is truthy.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/assert/is-falsy-array]: https://github.com/stdlib-js/assert/tree/main/is-falsy-array

[@stdlib/assert/is-truthy]: https://github.com/stdlib-js/assert/tree/main/is-truthy

<!-- </related-links> -->

</section>

<!-- /.links -->
