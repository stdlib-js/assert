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

# isArrayLength

> Test if a value is a valid array length.

<section class="usage">

## Usage

```javascript
var isArrayLength = require( '@stdlib/assert/is-array-length' );
```

#### isArrayLength( value )

Tests if a value is a valid `array` length.

```javascript
var bool = isArrayLength( 5 );
// returns true

bool = isArrayLength( -1 );
// returns false

bool = isArrayLength( 2.0e200 );
// returns false

bool = isArrayLength( 3.14 );
// returns false

bool = isArrayLength( null );
// returns false
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   A valid `length` property for an [`Array`][mdn-array] is any integer value on the interval `[0, 2^32-1]`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var isArrayLength = require( '@stdlib/assert/is-array-length' );

var bool = isArrayLength( 5 );
// returns true

bool = isArrayLength( 0 );
// returns true

bool = isArrayLength( 2.0e200 );
// returns false

bool = isArrayLength( 5.256 );
// returns false

bool = isArrayLength( 1.0/0.0 );
// returns false

bool = isArrayLength( -1.0/0.0 );
// returns false

bool = isArrayLength( NaN );
// returns false

bool = isArrayLength( '5' );
// returns false

bool = isArrayLength( null );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/is-array`][@stdlib/assert/is-array]</span><span class="delimiter">: </span><span class="description">test if a value is an array.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

<!-- <related-links> -->

[@stdlib/assert/is-array]: https://github.com/stdlib-js/assert/tree/main/is-array

<!-- </related-links> -->

</section>

<!-- /.links -->
