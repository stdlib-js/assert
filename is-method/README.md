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

# isMethod

> Test if an object has a specified method name.

<section class="usage">

## Usage

```javascript
var isMethod = require( '@stdlib/assert/is-method' );
```

#### isMethod( value, property )

Returns a `boolean` indicating if a `value` has a specified [**own**][@stdlib/assert/has-own-property] method name.

```javascript
function noop() {
    // Example function...
}

var value = {
    'beep': noop
};

var bool = isMethod( value, 'beep' );
// returns true

bool = isMethod( value, 'toString' );
// returns false
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Value arguments other than `null` or `undefined` are coerced to `objects`.

    ```javascript
    var bool = isMethod( 'beep', 'toString' );
    // returns false
    ```

-   Property arguments are coerced to `strings`.

    ```javascript
    function noop() {
        // Example function...
    }

    var value = {
        'null': noop
    };
    var bool = isMethod( value, null );
    // returns true

    value = {
        '[object Object]': noop
    };
    bool = isMethod( value, {} );
    // returns true
    ```

-   The function searches only [**own**][@stdlib/assert/has-own-property] properties.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable object-curly-newline -->

<!-- eslint no-undef: "error" -->

```javascript
var isMethod = require( '@stdlib/assert/is-method' );

var bool = isMethod( { 'a': isMethod }, 'a' );
// returns true

bool = isMethod( { 'a': 'b' }, 'a' );
// returns false

bool = isMethod( { 'a': 'b' }, null );
// returns false

bool = isMethod( {}, 'toString' );
// returns false

bool = isMethod( null, 'a' );
// returns false

bool = isMethod( void 0, 'a' );
// returns false

bool = isMethod( { 'null': isMethod }, null );
// returns true

bool = isMethod( { '[object Object]': isMethod }, {} );
// returns true
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/has-own-property`][@stdlib/assert/has-own-property]</span><span class="delimiter">: </span><span class="description">test if an object has a specified property.</span>
-   <span class="package-name">[`@stdlib/assert/is-function`][@stdlib/assert/is-function]</span><span class="delimiter">: </span><span class="description">test if a value is a function.</span>
-   <span class="package-name">[`@stdlib/assert/is-method-in`][@stdlib/assert/is-method-in]</span><span class="delimiter">: </span><span class="description">test if an object has a specified method name, either own or inherited.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/assert/has-own-property]: https://github.com/stdlib-js/assert/tree/main/has-own-property

[@stdlib/assert/is-function]: https://github.com/stdlib-js/assert/tree/main/is-function

[@stdlib/assert/is-method-in]: https://github.com/stdlib-js/assert/tree/main/is-method-in

<!-- </related-links> -->

</section>

<!-- /.links -->
