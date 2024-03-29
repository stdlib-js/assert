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

# isDateObjectArray

> Test if a value is an array-like object containing only [Date][@stdlib/assert/is-date-object] objects.

<section class="usage">

## Usage

```javascript
var isDateObjectArray = require( '@stdlib/assert/is-date-object-array' );
```

#### isDateObjectArray( value )

Tests if a `value` is an array-like object containing **only** [`Date`][@stdlib/assert/is-date-object] objects.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isDateObjectArray( [ new Date(), new Date() ] );
// returns true

bool = isDateObjectArray( [ {}, new Number( 3.0 ) ] );
// returns false

bool = isDateObjectArray( [ {}, '3.0' ] );
// returns false

bool = isDateObjectArray( [] );
// returns false

bool = isDateObjectArray( [ null, {} ] );
// returns false
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint-disable no-new-wrappers -->

<!-- eslint no-undef: "error" -->

```javascript
var Number = require( '@stdlib/number/ctor' );
var isDateObjectArray = require( '@stdlib/assert/is-date-object-array' );

var bool = isDateObjectArray( [ new Date(), new Date(), new Date() ] );
// returns true

bool = isDateObjectArray( [ new Date(), new Number( 3 ) ] );
// returns false

bool = isDateObjectArray( [ new Date(), new String( 'abc' ), {} ] );
// returns false

bool = isDateObjectArray( [ [], {} ] );
// returns false

bool = isDateObjectArray( [ 'a', 'b' ] );
// returns false

bool = isDateObjectArray( [] );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/is-date-object`][@stdlib/assert/is-date-object]</span><span class="delimiter">: </span><span class="description">test if a value is a Date object.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/assert/is-date-object]: https://github.com/stdlib-js/assert/tree/main/is-date-object

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
