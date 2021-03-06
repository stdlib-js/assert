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

# isPlainObjectArray

> Test if a value is an array-like object containing only plain objects.

<section class="usage">

## Usage

```javascript
var isPlainObjectArray = require( '@stdlib/assert/is-plain-object-array' );
```

#### isPlainObjectArray( value )

Tests if a `value` is an array-like object containing **only** plain `objects`.

<!-- eslint-disable no-new-wrappers, object-curly-newline -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isPlainObjectArray( [ {}, { 'beep': 'boop' } ] );
// returns true

bool = isPlainObjectArray( [ {}, new Number(3.0) ] );
// returns false

bool = isPlainObjectArray( [ {}, '3.0' ] );
// returns false

bool = isPlainObjectArray( [] );
// returns false

bool = isPlainObjectArray( [ null, {} ] );
// returns false
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint-disable no-new-wrappers, object-curly-newline -->

<!-- eslint no-undef: "error" -->

```javascript
var Number = require( '@stdlib/number/ctor' );
var isPlainObjectArray = require( '@stdlib/assert/is-plain-object-array' );

var bool = isPlainObjectArray( [ { 'beep': 'boop' }, {}, {} ] );
// returns true

bool = isPlainObjectArray( [ new Date(), new Number( 3 ) ] );
// returns false

bool = isPlainObjectArray( [ {}, new String( 'abc' ), {} ] );
// returns false

bool = isPlainObjectArray( [ [], {} ] );
// returns false

bool = isPlainObjectArray( [ 'a', 'b' ] );
// returns false

bool = isPlainObjectArray( [] );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/is-array`][@stdlib/assert/is-array]</span><span class="delimiter">: </span><span class="description">test if a value is an array.</span>
-   <span class="package-name">[`@stdlib/assert/is-plain-object`][@stdlib/assert/is-plain-object]</span><span class="delimiter">: </span><span class="description">test if a value is a plain object.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/assert/is-array]: https://github.com/stdlib-js/assert/tree/main/is-array

[@stdlib/assert/is-plain-object]: https://github.com/stdlib-js/assert/tree/main/is-plain-object

<!-- </related-links> -->

</section>

<!-- /.links -->
