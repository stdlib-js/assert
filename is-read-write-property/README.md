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

# isReadWriteProperty

> Test if an object's own property is readable and writable.

<section class="usage">

## Usage

```javascript
var isReadWriteProperty = require( '@stdlib/assert/is-read-write-property' );
```

#### isReadWriteProperty( value, property )

Returns a `boolean` indicating if a `value` has a readable **and** writable `property`.

<!-- eslint-disable no-restricted-syntax -->

```javascript
var defineProperty = require( '@stdlib/utils/define-property' );

var obj = {
    'foo': 'bar'
};

defineProperty( obj, 'beep', {
    'configurable': false,
    'enumerable': false,
    'writable': true,
    'value': 'boop'
});

defineProperty( obj, 'accessor', {
    'configurable': false,
    'enumerable': false,
    'get': function getter() {
        return obj.foo;
    },
    'set': function setter( v ) {
        obj.foo = v;
    }
});

var bool = isReadWriteProperty( obj, 'foo' );
// returns true

bool = isReadWriteProperty( obj, 'beep' );
// returns true

bool = isReadWriteProperty( obj, 'accessor' );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Value arguments other than `null` or `undefined` are coerced to `objects`.

    ```javascript
    var bool = isReadWriteProperty( 'beep', 'length' );
    // returns false
    ```

-   Property arguments are coerced to `strings`.

    ```javascript
    var obj = {
        'null': 'foo'
    };

    var bool = isReadWriteProperty( obj, null );
    // returns true
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable object-curly-newline -->

<!-- eslint no-undef: "error" -->

```javascript
var isReadWriteProperty = require( '@stdlib/assert/is-read-write-property' );

var bool = isReadWriteProperty( [ 'a' ], 'length' );
// returns true

bool = isReadWriteProperty( { 'a': 'b' }, 'a' );
// returns true

bool = isReadWriteProperty( [ 'a' ], 0 );
// returns true

bool = isReadWriteProperty( { 'null': false }, null );
// returns true

bool = isReadWriteProperty( { '[object Object]': false }, {} );
// returns true

bool = isReadWriteProperty( {}, 'toString' );
// returns false

bool = isReadWriteProperty( {}, 'hasOwnProperty' );
// returns false

bool = isReadWriteProperty( null, 'a' );
// returns false

bool = isReadWriteProperty( void 0, 'a' );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/is-read-only-property`][@stdlib/assert/is-read-only-property]</span><span class="delimiter">: </span><span class="description">test if an object's own property is read-only.</span>
-   <span class="package-name">[`@stdlib/assert/is-read-write-property-in`][@stdlib/assert/is-read-write-property-in]</span><span class="delimiter">: </span><span class="description">test if an object's own and inherited property is readable and writable.</span>
-   <span class="package-name">[`@stdlib/assert/is-readable-property`][@stdlib/assert/is-readable-property]</span><span class="delimiter">: </span><span class="description">test if an object's own property is readable.</span>
-   <span class="package-name">[`@stdlib/assert/is-writable-property`][@stdlib/assert/is-writable-property]</span><span class="delimiter">: </span><span class="description">test if an object's own property is writable.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/assert/is-read-only-property]: https://github.com/stdlib-js/assert/tree/main/is-read-only-property

[@stdlib/assert/is-read-write-property-in]: https://github.com/stdlib-js/assert/tree/main/is-read-write-property-in

[@stdlib/assert/is-readable-property]: https://github.com/stdlib-js/assert/tree/main/is-readable-property

[@stdlib/assert/is-writable-property]: https://github.com/stdlib-js/assert/tree/main/is-writable-property

<!-- </related-links> -->

</section>

<!-- /.links -->
