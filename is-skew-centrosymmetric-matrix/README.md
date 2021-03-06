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

# isSkewCentrosymmetricMatrix

> Test if a value is a [skew-centrosymmetric matrix][centrosymmetric-matrix].

<section class="usage">

## Usage

<!-- eslint-disable id-length -->

```javascript
var isSkewCentrosymmetricMatrix = require( '@stdlib/assert/is-skew-centrosymmetric-matrix' );
```

#### isSkewCentrosymmetricMatrix( value )

Tests if a value is a [skew-centrosymmetric matrix][centrosymmetric-matrix].

<!-- eslint-disable id-length -->

<!-- eslint-disable array-element-newline -->

```javascript
var ndarray = require( '@stdlib/ndarray/ctor' );

var buffer = [
    1, 2, 3,
    4, 0, -4,
    -3, -2, -1
];
var arr = ndarray( 'generic', buffer, [ 3, 3 ], [ 3, 1 ], 0, 'row-major' );

var bool = isSkewCentrosymmetricMatrix( arr );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

<!-- eslint-disable id-length -->

```javascript
var ndarray = require( '@stdlib/ndarray/ctor' );
var isSkewCentrosymmetricMatrix = require( '@stdlib/assert/is-skew-centrosymmetric-matrix' );

var arr = ndarray( 'generic', [ 2, 1, -1, -2 ], [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );
var out = isSkewCentrosymmetricMatrix( arr );
// returns true

out = isSkewCentrosymmetricMatrix( [ 1, 2, 3, 4 ] );
// returns false

out = isSkewCentrosymmetricMatrix( {} );
// returns false

out = isSkewCentrosymmetricMatrix( null );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/is-centrosymmetric-matrix`][@stdlib/assert/is-centrosymmetric-matrix]</span><span class="delimiter">: </span><span class="description">test if a value is a centrosymmetric matrix.</span>
-   <span class="package-name">[`@stdlib/assert/is-matrix-like`][@stdlib/assert/is-matrix-like]</span><span class="delimiter">: </span><span class="description">test if a value is a 2-dimensional ndarray-like object.</span>
-   <span class="package-name">[`@stdlib/assert/is-skew-symmetric-matrix`][@stdlib/assert/is-skew-symmetric-matrix]</span><span class="delimiter">: </span><span class="description">test if a value is a skew-symmetric matrix.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[centrosymmetric-matrix]: https://en.wikipedia.org/wiki/Centrosymmetric_matrix

<!-- <related-links> -->

[@stdlib/assert/is-centrosymmetric-matrix]: https://github.com/stdlib-js/assert/tree/main/is-centrosymmetric-matrix

[@stdlib/assert/is-matrix-like]: https://github.com/stdlib-js/assert/tree/main/is-matrix-like

[@stdlib/assert/is-skew-symmetric-matrix]: https://github.com/stdlib-js/assert/tree/main/is-skew-symmetric-matrix

<!-- </related-links> -->

</section>

<!-- /.links -->
