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

# isTruthy

> Test if a value is truthy.

<section class="usage">

## Usage

```javascript
var isTruthy = require( '@stdlib/assert/is-truthy' );
```

#### isTruthy( value )

Tests if a `value` is a value which translates to `true` when evaluated in a boolean context.

```javascript
var bool = isTruthy( true );
// returns true

bool = isTruthy( [] );
// returns true

bool = isTruthy( false );
// returns false

bool = isTruthy( '' );
// returns false

bool = isTruthy( 0 );
// returns false

bool = isTruthy( NaN );
// returns false

bool = isTruthy( null );
// returns false

bool = isTruthy( void 0 );
// returns false
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint-disable no-empty-function, no-restricted-syntax -->

<!-- eslint no-undef: "error" -->

```javascript
var isTruthy = require( '@stdlib/assert/is-truthy' );

var bool = isTruthy( true );
// returns true

bool = isTruthy( 'beep' );
// returns true

bool = isTruthy( 5 );
// returns true

bool = isTruthy( [] );
// returns true

bool = isTruthy( {} );
// returns true

bool = isTruthy( function foo() {} );
// returns true

bool = isTruthy( false );
// returns false

bool = isTruthy( 0 );
// returns false

bool = isTruthy( NaN );
// returns false

bool = isTruthy( '' );
// returns false

bool = isTruthy( void 0 );
// returns false

bool = isTruthy( null );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/is-falsy`][@stdlib/assert/is-falsy]</span><span class="delimiter">: </span><span class="description">test if a value is falsy.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/assert/is-falsy]: https://github.com/stdlib-js/assert/tree/main/is-falsy

<!-- </related-links> -->

</section>

<!-- /.links -->
