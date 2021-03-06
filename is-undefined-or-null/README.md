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

# isUndefinedOrNull

> Test if a value is undefined or null.

<section class="usage">

## Usage

```javascript
var isUndefinedOrNull = require( '@stdlib/assert/is-undefined-or-null' );
```

#### isUndefinedOrNull( value )

Tests if a `value` is `undefined` or `null`.

<!-- eslint-disable no-undefined -->

```javascript
var bool = isUndefinedOrNull( undefined );
// returns true

bool = isUndefinedOrNull( null );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint-disable no-undefined, no-restricted-syntax, no-empty-function -->

<!-- eslint no-undef: "error" -->

```javascript
var isUndefinedOrNull = require( '@stdlib/assert/is-undefined-or-null' );

var bool;
var x;

bool = isUndefinedOrNull( x );
// returns true

bool = isUndefinedOrNull( undefined );
// returns true

bool = isUndefinedOrNull( void 0 );
// returns true

bool = isUndefinedOrNull( null );
// returns true

bool = isUndefinedOrNull( 'beep' );
// returns false

bool = isUndefinedOrNull( 5 );
// returns false

bool = isUndefinedOrNull( true );
// returns false

bool = isUndefinedOrNull( {} );
// returns false

bool = isUndefinedOrNull( [] );
// returns false

bool = isUndefinedOrNull( function foo() {} );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/is-null`][@stdlib/assert/is-null]</span><span class="delimiter">: </span><span class="description">test if a value is null.</span>
-   <span class="package-name">[`@stdlib/assert/is-undefined`][@stdlib/assert/is-undefined]</span><span class="delimiter">: </span><span class="description">test if a value is undefined.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/assert/is-null]: https://github.com/stdlib-js/assert/tree/main/is-null

[@stdlib/assert/is-undefined]: https://github.com/stdlib-js/assert/tree/main/is-undefined

<!-- </related-links> -->

</section>

<!-- /.links -->
