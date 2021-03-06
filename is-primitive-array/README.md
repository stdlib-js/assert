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

# isPrimitiveArray

> Test if a value is an array-like object containing only JavaScript primitives.

<section class="usage">

## Usage

```javascript
var isPrimitiveArray = require( '@stdlib/assert/is-primitive-array' );
```

#### isPrimitiveArray( value )

Tests if a `value` is an array-like object containing **only** JavaScript primitives.

<!-- eslint-disable no-new-wrappers -->

```javascript
var bool = isPrimitiveArray( [ '3', 2, null ] );
// returns true

bool = isPrimitiveArray( [ {}, 2, 1 ] );
// returns false

bool = isPrimitiveArray( [ new String( 'abc' ), '3.0' ] );
// returns false
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint-disable no-restricted-syntax, no-new-wrappers, no-empty-function -->

<!-- eslint no-undef: "error" -->

```javascript
var Number = require( '@stdlib/number/ctor' );
var isPrimitiveArray = require( '@stdlib/assert/is-primitive-array' );

var bool = isPrimitiveArray( [ '3', 2, null ] );
// returns true

bool = isPrimitiveArray( [ void 0, true ] );
// returns true

bool = isPrimitiveArray( [ new String( 'abc' ), false ] );
// returns false

bool = isPrimitiveArray( [ new Number( 2 ), null ] );
// returns false

bool = isPrimitiveArray( [ function noop() {}, null ] );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/is-array`][@stdlib/assert/is-array]</span><span class="delimiter">: </span><span class="description">test if a value is an array.</span>
-   <span class="package-name">[`@stdlib/assert/is-primitive`][@stdlib/assert/is-primitive]</span><span class="delimiter">: </span><span class="description">test if a value is a JavaScript primitive.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/assert/is-array]: https://github.com/stdlib-js/assert/tree/main/is-array

[@stdlib/assert/is-primitive]: https://github.com/stdlib-js/assert/tree/main/is-primitive

<!-- </related-links> -->

</section>

<!-- /.links -->
