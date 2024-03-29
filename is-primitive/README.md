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

# isPrimitive

> Test if a value is a JavaScript primitive.

<section class="usage">

## Usage

```javascript
var isPrimitive = require( '@stdlib/assert/is-primitive' );
```

#### isPrimitive( value )

Tests if a `value` is a JavaScript primitive.

```javascript
var bool = isPrimitive( false );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Seven primitives:

    -   `string`
    -   `number`
    -   `boolean`
    -   `null`
    -   `undefined`
    -   `symbol` (ES6/ES2015)
    -   `bigint` (ES11/ES2020)

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable no-restricted-syntax, no-new-wrappers, no-empty-function, no-array-constructor -->

<!-- eslint no-undef: "error" -->

```javascript
var Boolean = require( '@stdlib/boolean/ctor' );
var Object = require( '@stdlib/object/ctor' );
var isPrimitive = require( '@stdlib/assert/is-primitive' );

var bool = isPrimitive( false );
// returns true

bool = isPrimitive( 0 );
// returns true

bool = isPrimitive( '' );
// returns true

bool = isPrimitive( null );
// returns true

bool = isPrimitive( void 0 );
// returns true

bool = isPrimitive( [] );
// returns false

bool = isPrimitive( {} );
// returns false

bool = isPrimitive( function noop() {} );
// returns false

bool = isPrimitive( new Boolean() );
// returns false

bool = isPrimitive( new String() );
// returns false

bool = isPrimitive( new Array() );
// returns false

bool = isPrimitive( new Object() );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/is-boxed-primitive`][@stdlib/assert/is-boxed-primitive]</span><span class="delimiter">: </span><span class="description">test if a value is a JavaScript boxed primitive.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/assert/is-boxed-primitive]: https://github.com/stdlib-js/assert/tree/main/is-boxed-primitive

<!-- </related-links> -->

</section>

<!-- /.links -->
