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

# isEmptyArray

> Test if a value is an empty array.

<section class="usage">

## Usage

```javascript
var isEmptyArray = require( '@stdlib/assert/is-empty-array' );
```

#### isEmptyArray( value )

Tests if a value is an empty `array`.

```javascript
var bool = isEmptyArray( [] );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint-disable no-array-constructor -->

<!-- eslint no-undef: "error" -->

```javascript
var isEmptyArray = require( '@stdlib/assert/is-empty-array' );

var bool = isEmptyArray( [] );
// returns true

bool = isEmptyArray( new Array() );
// returns true

bool = isEmptyArray( [ 1, 2, 3, 4 ] );
// returns false

bool = isEmptyArray( {} );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/is-array`][@stdlib/assert/is-array]</span><span class="delimiter">: </span><span class="description">test if a value is an array.</span>
-   <span class="package-name">[`@stdlib/assert/is-empty-array-like-object`][@stdlib/assert/is-empty-array-like-object]</span><span class="delimiter">: </span><span class="description">test if a value is an empty array-like object.</span>
-   <span class="package-name">[`@stdlib/assert/is-empty-collection`][@stdlib/assert/is-empty-collection]</span><span class="delimiter">: </span><span class="description">test if a value is an empty collection.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/assert/is-array]: https://github.com/stdlib-js/assert/tree/main/is-array

[@stdlib/assert/is-empty-array-like-object]: https://github.com/stdlib-js/assert/tree/main/is-empty-array-like-object

[@stdlib/assert/is-empty-collection]: https://github.com/stdlib-js/assert/tree/main/is-empty-collection

<!-- </related-links> -->

</section>

<!-- /.links -->
