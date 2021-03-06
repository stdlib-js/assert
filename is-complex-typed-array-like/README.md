<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

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

# isComplexTypedArrayLike

> Test if a value is complex-typed-array-like.

<section class="usage">

## Usage

```javascript
var isComplexTypedArrayLike = require( '@stdlib/assert/is-complex-typed-array-like' );
```

#### isComplexTypedArrayLike( value )

Tests if a value is complex-typed-array-like.

<!-- eslint-disable no-restricted-syntax, no-empty-function -->

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );

var bool = isComplexTypedArrayLike( new Complex64Array() );
// returns true

bool = isComplexTypedArrayLike({
    'length': 10,
    'byteOffset': 0,
    'byteLength': 10,
    'BYTES_PER_ELEMENT': 4,
    'get': function get() {},
    'set': function set() {}
});
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint-disable no-restricted-syntax, no-empty-function, no-unused-vars -->

<!-- eslint no-undef: "error" -->

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );
var isComplexTypedArrayLike = require( '@stdlib/assert/is-complex-typed-array-like' );

var bool;
var arr;

arr = {
    'BYTES_PER_ELEMENT': 8,
    'length': 10,
    'byteOffset': 0,
    'byteLength': 10,
    'get': function get() {},
    'set': function set() {}
};
bool = isComplexTypedArrayLike( arr );
// returns true

bool = isComplexTypedArrayLike( new Complex64Array( 4 ) );
// returns true

bool = isComplexTypedArrayLike( [] );
// returns false

bool = isComplexTypedArrayLike( {} );
// returns false

bool = isComplexTypedArrayLike( null );
// returns false

bool = isComplexTypedArrayLike( 'beep' );
// returns false

bool = isComplexTypedArrayLike( function foo( a, b ) {} );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/is-complex-like`][@stdlib/assert/is-complex-like]</span><span class="delimiter">: </span><span class="description">test if a value is a complex number-like object.</span>
-   <span class="package-name">[`@stdlib/assert/is-complex-typed-array`][@stdlib/assert/is-complex-typed-array]</span><span class="delimiter">: </span><span class="description">test if a value is a complex typed array.</span>
-   <span class="package-name">[`@stdlib/assert/is-complex64array`][@stdlib/assert/is-complex64array]</span><span class="delimiter">: </span><span class="description">test if a value is a Complex64Array.</span>
-   <span class="package-name">[`@stdlib/assert/is-complex128array`][@stdlib/assert/is-complex128array]</span><span class="delimiter">: </span><span class="description">test if a value is a Complex128Array.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/assert/is-complex-like]: https://github.com/stdlib-js/assert/tree/main/is-complex-like

[@stdlib/assert/is-complex-typed-array]: https://github.com/stdlib-js/assert/tree/main/is-complex-typed-array

[@stdlib/assert/is-complex64array]: https://github.com/stdlib-js/assert/tree/main/is-complex64array

[@stdlib/assert/is-complex128array]: https://github.com/stdlib-js/assert/tree/main/is-complex128array

<!-- </related-links> -->

</section>

<!-- /.links -->
