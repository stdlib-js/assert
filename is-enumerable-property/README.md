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

# isEnumerableProperty

> Test if an object's own property is enumerable.

<section class="usage">

## Usage

```javascript
var isEnumerableProperty = require( '@stdlib/assert/is-enumerable-property' );
```

#### isEnumerableProperty( value, property )

Returns a `boolean` indicating if a `value` has an enumerable `property`.

```javascript
var value = {
    'beep': 'boop'
};

var bool = isEnumerableProperty( value, 'beep' );
// returns true

bool = isEnumerableProperty( value, 'constructor' );
// returns false
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   In contrast to the native [Object.prototype.propertyIsEnumerable][mdn-object-property-is-enumerable], this function does **not** throw when provided `null` or `undefined`. Instead, the function returns `false`.

    ```javascript
    var bool = isEnumerableProperty( null, 'a' );
    // returns false

    bool = isEnumerableProperty( void 0, 'a' );
    // returns false
    ```

-   Value arguments other than `null` or `undefined` are coerced to `objects`.

    ```javascript
    var bool = isEnumerableProperty( 'beep', '1' );
    // returns true
    ```

-   Property arguments are coerced to `strings`.

    ```javascript
    var value = {
        'null': false
    };
    var bool = isEnumerableProperty( value, null );
    // returns true

    value = {
        '[object Object]': false
    };
    bool = isEnumerableProperty( value, {} );
    // returns true
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable object-curly-newline -->

<!-- eslint no-undef: "error" -->

```javascript
var isEnumerableProperty = require( '@stdlib/assert/is-enumerable-property' );

var bool = isEnumerableProperty( { 'a': 'b' }, 'a' );
// returns true

bool = isEnumerableProperty( [ 'a' ], 0 );
// returns true

bool = isEnumerableProperty( [ 'a' ], 'length' );
// returns false

bool = isEnumerableProperty( {}, 'toString' );
// returns false

bool = isEnumerableProperty( {}, 'hasOwnProperty' );
// returns false

bool = isEnumerableProperty( null, 'a' );
// returns false

bool = isEnumerableProperty( void 0, 'a' );
// returns false

bool = isEnumerableProperty( { 'null': false }, null );
// returns true

bool = isEnumerableProperty( { '[object Object]': false }, {} );
// returns true
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/is-configurable-property`][@stdlib/assert/is-configurable-property]</span><span class="delimiter">: </span><span class="description">test if an object's own property is configurable.</span>
-   <span class="package-name">[`@stdlib/assert/is-enumerable-property-in`][@stdlib/assert/is-enumerable-property-in]</span><span class="delimiter">: </span><span class="description">test if an object's own or inherited property is enumerable.</span>
-   <span class="package-name">[`@stdlib/assert/is-nonenumerable-property`][@stdlib/assert/is-nonenumerable-property]</span><span class="delimiter">: </span><span class="description">test if an object's own property is non-enumerable.</span>
-   <span class="package-name">[`@stdlib/assert/is-readable-property`][@stdlib/assert/is-readable-property]</span><span class="delimiter">: </span><span class="description">test if an object's own property is readable.</span>
-   <span class="package-name">[`@stdlib/assert/is-writable-property`][@stdlib/assert/is-writable-property]</span><span class="delimiter">: </span><span class="description">test if an object's own property is writable.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-object-property-is-enumerable]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable

<!-- <related-links> -->

[@stdlib/assert/is-configurable-property]: https://github.com/stdlib-js/assert/tree/main/is-configurable-property

[@stdlib/assert/is-enumerable-property-in]: https://github.com/stdlib-js/assert/tree/main/is-enumerable-property-in

[@stdlib/assert/is-nonenumerable-property]: https://github.com/stdlib-js/assert/tree/main/is-nonenumerable-property

[@stdlib/assert/is-readable-property]: https://github.com/stdlib-js/assert/tree/main/is-readable-property

[@stdlib/assert/is-writable-property]: https://github.com/stdlib-js/assert/tree/main/is-writable-property

<!-- </related-links> -->

</section>

<!-- /.links -->
