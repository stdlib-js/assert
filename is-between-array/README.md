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

# isBetweenArray

> Test if a value is an array-like object where every element is between two values.

<section class="usage">

## Usage

```javascript
var isBetweenArray = require( '@stdlib/assert/is-between-array' );
```

#### isBetweenArray( value, a, b\[, left, right] )

Tests if a `value` is an array-like `object` where every element is between two values `a` (left comparison value) and `b` (right comparison value).

```javascript
var arr = [ 3, 4, 5 ];

var bool = isBetweenArray( arr, 3, 5 );
// returns true

bool = isBetweenArray( arr, 4, 5 );
// returns false

bool = isBetweenArray( arr, 3, 4 );
// returns false
```

By default, the function assumes that `a` and `b` are inclusive.

```javascript
var arr = [ 3, 4, 5 ];

var bool = isBetweenArray( arr, 3, 5 );
// returns true

bool = isBetweenArray( arr, 3, 5, 'closed', 'closed' );
// returns true
```

To make `a` and/or `b` exclusive, set the respective arguments to `'open'`.

```javascript
var arr = [ 3, 4, 5 ];

var bool = isBetweenArray( arr, 3, 5, 'open', 'closed' );
// returns false

bool = isBetweenArray( arr, 3, 5, 'closed', 'open' );
// returns false
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `a` and `b` are inclusive, the element-wise comparison is equivalent to

    ```text
    a <= v_i <= b
    ```

-   If `a` is exclusive and `b` is inclusive, the element-wise comparison is equivalent to

    ```text
    a < v_i <= b
    ```

-   If `a` is inclusive and `b` is exclusive, the element-wise comparison is equivalent to

    ```text
    a <= v_i < b
    ```

-   If `a` and `b` are exclusive, the element-wise comparison is equivalent to

    ```text
    a < v_i < b
    ```

-   If provided an empty array-like `object`, the function returns `false`.

    ```javascript
    var bool = isBetweenArray( [], 0.0, 1.0 );
    // returns false
    ```

-   If provided non-numeric values, element-wise comparisons are performed according to lexicographic order.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var filledarrayBy = require( '@stdlib/array/filled-by' );
var isBetweenArray = require( '@stdlib/assert/is-between-array' );

// Create an array of random numbers:
var x = filledarrayBy( 100, 'float64', randu );

// Check whether every element resides within the interval [0.01, 0.99]:
var bool = isBetweenArray( x, 0.01, 0.99 );
console.log( bool );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/is-between`][@stdlib/assert/is-between]</span><span class="delimiter">: </span><span class="description">test if a value is between two values.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/assert/is-between]: https://github.com/stdlib-js/assert/tree/main/is-between

<!-- </related-links> -->

</section>

<!-- /.links -->
