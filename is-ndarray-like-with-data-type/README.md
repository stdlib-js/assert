<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

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

# isndarrayLikeWithDataType

> Test if a value is an [ndarray-like object][@stdlib/assert/is-ndarray-like] having a specified [data type][@stdlib/ndarray/dtypes].

<section class="usage">

## Usage

```javascript
var isndarrayLikeWithDataType = require( '@stdlib/assert/is-ndarray-like-with-data-type' );
```

#### isndarrayLikeWithDataType( value, dtype )

Tests if a value is an [ndarray-like object][@stdlib/assert/is-ndarray-like] having a specified [data type][@stdlib/ndarray/dtypes].

```javascript
var ndarray = require( '@stdlib/ndarray/ctor' );

var arr = ndarray( 'generic', [ 0, 0, 0, 0 ], [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );
var bool = isndarrayLikeWithDataType( arr, 'generic' );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var ndarray = require( '@stdlib/ndarray/ctor' );
var isndarrayLikeWithDataType = require( '@stdlib/assert/is-ndarray-like-with-data-type' );

var arr = ndarray( 'generic', [ 0, 0, 0, 0 ], [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );
var bool = isndarrayLikeWithDataType( arr, 'generic' );
// returns true

bool = isndarrayLikeWithDataType( [ 1, 2, 3, 4 ], 'generic' );
// returns false

bool = isndarrayLikeWithDataType( {}, 'generic' );
// returns false

bool = isndarrayLikeWithDataType( null, 'generic' );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/is-ndarray-like`][@stdlib/assert/is-ndarray-like]</span><span class="delimiter">: </span><span class="description">test if a value is ndarray-like.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/assert/is-ndarray-like]: https://github.com/stdlib-js/assert/tree/main/is-ndarray-like

[@stdlib/ndarray/dtypes]: https://github.com/stdlib-js/ndarray-dtypes

</section>

<!-- /.links -->
