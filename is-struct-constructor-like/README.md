<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

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

# isStructConstructorLike

> Test if a value is [struct constructor][@stdlib/dstructs/struct]-like.

<section class="usage">

## Usage

```javascript
var isStructConstructorLike = require( '@stdlib/assert/is-struct-constructor-like' );
```

#### isStructConstructorLike( value )

Tests if a value is [struct constructor][@stdlib/dstructs/struct]-like.

```javascript
var structFactory = require( '@stdlib/dstructs/struct' );

var schema = [
    {
        'name': 'value',
        'type': 'float64'
    }
];
var Struct = structFactory( schema );

var bool = isStructConstructorLike( Struct );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var structFactory = require( '@stdlib/dstructs/struct' );
var isStructConstructorLike = require( '@stdlib/assert/is-struct-constructor-like' );

var schema = [
    {
        'name': 'value',
        'type': 'float64'
    }
];

var bool = isStructConstructorLike( structFactory( schema ) );
// returns true

bool = isStructConstructorLike( [ 1, 2, 3, 4 ] );
// returns false

bool = isStructConstructorLike( {} );
// returns false

bool = isStructConstructorLike( null );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/is-struct`][@stdlib/assert/is-struct]</span><span class="delimiter">: </span><span class="description">test if a value is a `struct` instance.</span>
-   <span class="package-name">[`@stdlib/dstructs/struct`][@stdlib/dstructs/struct]</span><span class="delimiter">: </span><span class="description">fixed-width composite data type (a.k.a., a `struct`).</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/dstructs/struct]: https://github.com/stdlib-js/dstructs-struct

<!-- <related-links> -->

[@stdlib/assert/is-struct]: https://github.com/stdlib-js/assert/tree/main/is-struct

<!-- </related-links> -->

</section>

<!-- /.links -->
