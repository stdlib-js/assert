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

# isEmptyObject

> Test if a value is an empty object.

<section class="usage">

## Usage

```javascript
var isEmptyObject = require( '@stdlib/assert/is-empty-object' );
```

#### isEmptyObject( value )

Tests if a value is an empty `object`.

```javascript
var bool = isEmptyObject( {} );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint-disable no-new-object, object-curly-newline -->

<!-- eslint no-undef: "error" -->

```javascript
var Object = require( '@stdlib/object/ctor' );
var isEmptyObject = require( '@stdlib/assert/is-empty-object' );

var bool = isEmptyObject( {} );
// returns true

bool = isEmptyObject( new Object() );
// returns true

bool = isEmptyObject( { 'beep': 'boop' } );
// returns false

bool = isEmptyObject( [] );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/is-object`][@stdlib/assert/is-object]</span><span class="delimiter">: </span><span class="description">test if a value is an object.</span>
-   <span class="package-name">[`@stdlib/assert/is-plain-object`][@stdlib/assert/is-plain-object]</span><span class="delimiter">: </span><span class="description">test if a value is a plain object.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/assert/is-object]: https://github.com/stdlib-js/assert/tree/main/is-object

[@stdlib/assert/is-plain-object]: https://github.com/stdlib-js/assert/tree/main/is-plain-object

<!-- </related-links> -->

</section>

<!-- /.links -->
