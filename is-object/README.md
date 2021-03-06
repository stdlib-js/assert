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

# isObject

> Test if a value is an object.

<section class="usage">

## Usage

```javascript
var isObject = require( '@stdlib/assert/is-object' );
```

#### isObject( value )

Tests if a `value` is an `object`.

```javascript
var bool = isObject( {} );
// returns true

bool = isObject( true );
// returns false
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function returns `false` if provided an `array` or `null`.

    ```javascript
    var bool = isObject( [] );
    // returns false

    bool = isObject( null );
    // returns false
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var isObject = require( '@stdlib/assert/is-object' );

var bool = isObject( {} );
// returns true

bool = isObject( new Date() );
// returns true

bool = isObject( /.*/ );
// returns true

bool = isObject( null );
// returns false

bool = isObject( [] );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/is-object-like`][@stdlib/assert/is-object-like]</span><span class="delimiter">: </span><span class="description">test if a value is object-like.</span>
-   <span class="package-name">[`@stdlib/assert/is-plain-object`][@stdlib/assert/is-plain-object]</span><span class="delimiter">: </span><span class="description">test if a value is a plain object.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/assert/is-object-like]: https://github.com/stdlib-js/assert/tree/main/is-object-like

[@stdlib/assert/is-plain-object]: https://github.com/stdlib-js/assert/tree/main/is-plain-object

<!-- </related-links> -->

</section>

<!-- /.links -->
