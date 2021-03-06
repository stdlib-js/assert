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

# isFalsyArray

> Test if a value is an array-like object containing only falsy values.

<section class="usage">

## Usage

```javascript
var isFalsyArray = require( '@stdlib/assert/is-falsy-array' );
```

#### isFalsyArray( value )

Tests if a `value` is an array-like `object` containing only falsy values.

```javascript
var bool = isFalsyArray( [ '', null, void 0, false, 0, NaN ] );
// returns true

bool = isFalsyArray( [ [], {} ] );
// returns false
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var isFalsyArray = require( '@stdlib/assert/is-falsy-array' );

var bool = isFalsyArray( [ null, '', NaN, 0, void 0, false ] );
// returns true

bool = isFalsyArray( [ [], {}, true, 'a', 5, -5 ] );
// returns false

bool = isFalsyArray( [] );
// returns false

bool = isFalsyArray( false );
// returns false

bool = isFalsyArray( null );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/is-falsy`][@stdlib/assert/is-falsy]</span><span class="delimiter">: </span><span class="description">test if a value is falsy.</span>
-   <span class="package-name">[`@stdlib/assert/is-truthy-array`][@stdlib/assert/is-truthy-array]</span><span class="delimiter">: </span><span class="description">test if a value is an array-like object containing only truthy values.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/assert/is-falsy]: https://github.com/stdlib-js/assert/tree/main/is-falsy

[@stdlib/assert/is-truthy-array]: https://github.com/stdlib-js/assert/tree/main/is-truthy-array

<!-- </related-links> -->

</section>

<!-- /.links -->
