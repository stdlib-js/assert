<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

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

# isEmptyArrayLikeObject

> Test if a value is an empty array-like object.

<section class="usage">

## Usage

```javascript
var isEmptyArrayLikeObject = require( '@stdlib/assert/is-empty-array-like-object' );
```

#### isEmptyArrayLikeObject( value )

Tests if a value is an empty [array-like][array-like] `object`.

<!-- eslint-disable object-curly-newline -->

```javascript
var bool = isEmptyArrayLikeObject( [] );
// returns true

bool = isEmptyArrayLikeObject( { 'length': 0 } );
// returns true
```

If provided a `string`, the function returns `false`.

```javascript
var bool = isEmptyArrayLikeObject( '' );
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
var isEmptyArrayLikeObject = require( '@stdlib/assert/is-empty-array-like-object' );

var bool = isEmptyArrayLikeObject( { 'length': 0 } );
// returns true

bool = isEmptyArrayLikeObject( [] );
// returns true

bool = isEmptyArrayLikeObject( new Float64Array( [] ) );
// returns true

bool = isEmptyArrayLikeObject( 'beep' );
// returns false

bool = isEmptyArrayLikeObject( null );
// returns false

bool = isEmptyArrayLikeObject( void 0 );
// returns false

bool = isEmptyArrayLikeObject( 5 );
// returns false

bool = isEmptyArrayLikeObject( true );
// returns false

bool = isEmptyArrayLikeObject( {} );
// returns false

bool = isEmptyArrayLikeObject( function noop() {} );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/is-array-like-object`][@stdlib/assert/is-array-like-object]</span><span class="delimiter">: </span><span class="description">test if a value is an array-like object.</span>
-   <span class="package-name">[`@stdlib/assert/is-empty-array`][@stdlib/assert/is-empty-array]</span><span class="delimiter">: </span><span class="description">test if a value is an empty array.</span>
-   <span class="package-name">[`@stdlib/assert/is-empty-collection`][@stdlib/assert/is-empty-collection]</span><span class="delimiter">: </span><span class="description">test if a value is an empty collection.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[array-like]: http://www.2ality.com/2013/05/quirk-array-like-objects.html

<!-- <related-links> -->

[@stdlib/assert/is-array-like-object]: https://github.com/stdlib-js/assert/tree/main/is-array-like-object

[@stdlib/assert/is-empty-array]: https://github.com/stdlib-js/assert/tree/main/is-empty-array

[@stdlib/assert/is-empty-collection]: https://github.com/stdlib-js/assert/tree/main/is-empty-collection

<!-- </related-links> -->

</section>

<!-- /.links -->
