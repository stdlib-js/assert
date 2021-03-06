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

# isWritablePropertyIn

> Test if an object's own or inherited property is writable.

<section class="usage">

## Usage

```javascript
var isWritablePropertyIn = require( '@stdlib/assert/is-writable-property-in' );
```

#### isWritablePropertyIn( value, property )

Returns a `boolean` indicating if a `value` has a writable `property`.

<!-- eslint-disable no-restricted-syntax -->

```javascript
var defineProperty = require( '@stdlib/utils/define-property' );

var obj = {
    'foo': 'bar'
};

defineProperty( obj, 'beep', {
    'configurable': false,
    'enumerable': false,
    'writable': false,
    'value': 'boop'
});

defineProperty( obj, 'setter', {
    'configurable': false,
    'enumerable': false,
    'set': function setter( v ) {
        obj.foo = v;
    }
});

var bool = isWritablePropertyIn( obj, 'foo' );
// returns true

bool = isWritablePropertyIn( obj, 'setter' );
// returns true

bool = isWritablePropertyIn( obj, 'beep' );
// returns false
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Value arguments other than `null` or `undefined` are coerced to `objects`.

    ```javascript
    var bool = isWritablePropertyIn( 'beep', 'toString' );
    // returns true
    ```

-   Property arguments are coerced to `strings`.

    ```javascript
    var obj = {
        'null': 'foo'
    };

    var bool = isWritablePropertyIn( obj, null );
    // returns true
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable object-curly-newline -->

<!-- eslint no-undef: "error" -->

```javascript
var isWritablePropertyIn = require( '@stdlib/assert/is-writable-property-in' );

var bool = isWritablePropertyIn( [ 'a' ], 'length' );
// returns true

bool = isWritablePropertyIn( { 'a': 'b' }, 'a' );
// returns true

bool = isWritablePropertyIn( [ 'a' ], 0 );
// returns true

bool = isWritablePropertyIn( { 'null': false }, null );
// returns true

bool = isWritablePropertyIn( { '[object Object]': false }, {} );
// returns true

bool = isWritablePropertyIn( {}, 'toString' );
// returns true

bool = isWritablePropertyIn( {}, 'hasOwnProperty' );
// returns true

bool = isWritablePropertyIn( null, 'a' );
// returns false

bool = isWritablePropertyIn( void 0, 'a' );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/is-readable-property-in`][@stdlib/assert/is-readable-property-in]</span><span class="delimiter">: </span><span class="description">test if an object's own or inherited property is readable.</span>
-   <span class="package-name">[`@stdlib/assert/is-read-write-property-in`][@stdlib/assert/is-read-write-property-in]</span><span class="delimiter">: </span><span class="description">test if an object's own and inherited property is readable and writable.</span>
-   <span class="package-name">[`@stdlib/assert/is-writable-property`][@stdlib/assert/is-writable-property]</span><span class="delimiter">: </span><span class="description">test if an object's own property is writable.</span>
-   <span class="package-name">[`@stdlib/assert/is-write-only-property-in`][@stdlib/assert/is-write-only-property-in]</span><span class="delimiter">: </span><span class="description">test if an object's own or inherited property is write-only.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/assert/is-readable-property-in]: https://github.com/stdlib-js/assert/tree/main/is-readable-property-in

[@stdlib/assert/is-read-write-property-in]: https://github.com/stdlib-js/assert/tree/main/is-read-write-property-in

[@stdlib/assert/is-writable-property]: https://github.com/stdlib-js/assert/tree/main/is-writable-property

[@stdlib/assert/is-write-only-property-in]: https://github.com/stdlib-js/assert/tree/main/is-write-only-property-in

<!-- </related-links> -->

</section>

<!-- /.links -->
