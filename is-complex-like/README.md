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

# isComplexLike

> Test if a value is a complex number-like object.

<section class="usage">

## Usage

```javascript
var isComplexLike = require( '@stdlib/assert/is-complex-like' );
```

#### isComplexLike( value )

Tests if a value is a complex number-like `object`.

```javascript
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );

var x = new Complex128( 1.0, 3.0 );
var bool = isComplexLike( x );
// returns true

x = new Complex64( 3.0, 1.0 );
bool = isComplexLike( x );
// returns true

x = {
    're': 1.0,
    'im': -1.0
};
bool = isComplexLike( x );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   A complex number-like `object` is defined as an `object` having the following properties assigned to numeric values:

    -   **re**: real component.
    -   **im**: imaginary component.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

<!-- eslint-disable object-curly-newline, object-property-newline -->

```javascript
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var isComplexLike = require( '@stdlib/assert/is-complex-like' );

var out = isComplexLike( new Complex64( 2.0, 2.0 ) );
// returns true

out = isComplexLike( new Complex128( 3.0, 1.0 ) );
// returns true

out = isComplexLike( { 're': 1.0, 'im': -1.0 } );
// returns true

out = isComplexLike( {} );
// returns false

out = isComplexLike( null );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/is-complex`][@stdlib/assert/is-complex]</span><span class="delimiter">: </span><span class="description">test if a value is a 64-bit or 128-bit complex number.</span>
-   <span class="package-name">[`@stdlib/assert/is-complex64`][@stdlib/assert/is-complex64]</span><span class="delimiter">: </span><span class="description">test if a value is a 64-bit complex number.</span>
-   <span class="package-name">[`@stdlib/assert/is-complex128`][@stdlib/assert/is-complex128]</span><span class="delimiter">: </span><span class="description">test if a value is a 128-bit complex number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/assert/is-complex]: https://github.com/stdlib-js/assert/tree/main/is-complex

[@stdlib/assert/is-complex64]: https://github.com/stdlib-js/assert/tree/main/is-complex64

[@stdlib/assert/is-complex128]: https://github.com/stdlib-js/assert/tree/main/is-complex128

<!-- </related-links> -->

</section>

<!-- /.links -->
