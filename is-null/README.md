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

# isNull

> Test if a value is null.

<section class="usage">

## Usage

```javascript
var isNull = require( '@stdlib/assert/is-null' );
```

#### isNull( value )

Tests if a `value` is `null`.

```javascript
var bool = isNull( null );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint-disable no-restricted-syntax, no-empty-function -->

<!-- eslint no-undef: "error" -->

```javascript
var isNull = require( '@stdlib/assert/is-null' );

var bool = isNull( null );
// returns true

bool = isNull( 'beep' );
// returns false

bool = isNull( 5 );
// returns false

bool = isNull( void 0 );
// returns false

bool = isNull( true );
// returns false

bool = isNull( {} );
// returns false

bool = isNull( [] );
// returns false

bool = isNull( function foo() {} );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/is-undefined`][@stdlib/assert/is-undefined]</span><span class="delimiter">: </span><span class="description">test if a value is undefined.</span>
-   <span class="package-name">[`@stdlib/assert/is-undefined-or-null`][@stdlib/assert/is-undefined-or-null]</span><span class="delimiter">: </span><span class="description">test if a value is undefined or null.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/assert/is-undefined]: https://github.com/stdlib-js/assert/tree/main/is-undefined

[@stdlib/assert/is-undefined-or-null]: https://github.com/stdlib-js/assert/tree/main/is-undefined-or-null

<!-- </related-links> -->

</section>

<!-- /.links -->
