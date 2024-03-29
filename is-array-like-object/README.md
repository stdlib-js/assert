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

# isArrayLikeObject

> Test if a value is an array-like object.

<section class="usage">

## Usage

```javascript
var isArrayLikeObject = require( '@stdlib/assert/is-array-like-object' );
```

#### isArrayLikeObject( value )

Tests if a value is an [array-like][array-like] `object`.

<!-- eslint-disable object-curly-newline -->

```javascript
var bool = isArrayLikeObject( [] );
// returns true

bool = isArrayLikeObject( { 'length': 10 } );
// returns true
```

If provided a `string`, the function returns `false`.

```javascript
var bool = isArrayLikeObject( 'beep' );
// returns false
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint-disable object-curly-newline, object-curly-spacing, no-empty-function, no-restricted-syntax -->

<!-- eslint no-undef: "error" -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var isArrayLikeObject = require( '@stdlib/assert/is-array-like-object' );

var bool = isArrayLikeObject( { 'length': 10 } );
// returns true

bool = isArrayLikeObject( [] );
// returns true

bool = isArrayLikeObject( new Float64Array( 10 ) );
// returns true

bool = (function test() {
    return isArrayLikeObject( arguments );
})();
// returns true

bool = isArrayLikeObject( 'beep' );
// returns false

bool = isArrayLikeObject( null );
// returns false

bool = isArrayLikeObject( void 0 );
// returns false

bool = isArrayLikeObject( 5 );
// returns false

bool = isArrayLikeObject( true );
// returns false

bool = isArrayLikeObject( {} );
// returns false

bool = isArrayLikeObject( function noop() {} );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/is-array`][@stdlib/assert/is-array]</span><span class="delimiter">: </span><span class="description">test if a value is an array.</span>
-   <span class="package-name">[`@stdlib/assert/is-array-like`][@stdlib/assert/is-array-like]</span><span class="delimiter">: </span><span class="description">test if a value is array-like.</span>
-   <span class="package-name">[`@stdlib/assert/is-collection`][@stdlib/assert/is-collection]</span><span class="delimiter">: </span><span class="description">test if a value is a collection.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[array-like]: http://www.2ality.com/2013/05/quirk-array-like-objects.html

<!-- <related-links> -->

[@stdlib/assert/is-array]: https://github.com/stdlib-js/assert/tree/main/is-array

[@stdlib/assert/is-array-like]: https://github.com/stdlib-js/assert/tree/main/is-array-like

[@stdlib/assert/is-collection]: https://github.com/stdlib-js/assert/tree/main/is-collection

<!-- </related-links> -->

</section>

<!-- /.links -->
