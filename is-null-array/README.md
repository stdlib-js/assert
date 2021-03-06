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

# isNullArray

> Test if a value is an array-like object containing only null values.

<section class="usage">

## Usage

```javascript
var isNullArray = require( '@stdlib/assert/is-null-array' );
```

#### isNullArray( value )

Tests if a `value` is an array-like object containing only `null` values.

```javascript
var bool = isNullArray( [ null, null, null ] );
// returns true

bool = isNullArray( [ null, NaN, null ] );
// returns false
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var isNullArray = require( '@stdlib/assert/is-null-array' );

var bool = isNullArray( [ null ] );
// returns true

bool = isNullArray( [ null, null, null ] );
// returns true

bool = isNullArray( null );
// returns false

bool = isNullArray( 'beep' );
// returns false

bool = isNullArray( [ null, 'boop' ] );
// returns false

bool = isNullArray( [] );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/is-array`][@stdlib/assert/is-array]</span><span class="delimiter">: </span><span class="description">test if a value is an array.</span>
-   <span class="package-name">[`@stdlib/assert/is-null`][@stdlib/assert/is-null]</span><span class="delimiter">: </span><span class="description">test if a value is null.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/assert/is-array]: https://github.com/stdlib-js/assert/tree/main/is-array

[@stdlib/assert/is-null]: https://github.com/stdlib-js/assert/tree/main/is-null

<!-- </related-links> -->

</section>

<!-- /.links -->
