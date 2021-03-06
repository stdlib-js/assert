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

# isAccessorProperty

> Test if an object's own property has an accessor descriptor.

<section class="usage">

## Usage

```javascript
var isAccessorProperty = require( '@stdlib/assert/is-accessor-property' );
```

#### isAccessorProperty( value, property )

Returns a `boolean` indicating if an object's own `property` has an accessor descriptor.

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

var bool = isAccessorProperty( obj, 'foo' );
// returns false

bool = isAccessorProperty( obj, 'beep' );
// returns false

bool = isAccessorProperty( obj, 'accessor' );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Value arguments other than `null` or `undefined` are coerced to `objects`.

    ```javascript
    var bool = isAccessorProperty( 'beep', 'length' );
    // returns false
    ```

-   Non-symbol property arguments are coerced to `strings`.

    ```javascript
    var defineProperty = require( '@stdlib/utils/define-property' );

    var obj = {};

    function getter() {
        return true;
    }

    defineProperty( obj, 'null', {
        'configurable': true,
        'enumerable': true,
        'get': getter
    });

    var bool = isAccessorProperty( obj, null );
    // returns true
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable object-curly-newline -->

<!-- eslint no-undef: "error" -->

```javascript
var isAccessorProperty = require( '@stdlib/assert/is-accessor-property' );

var bool = isAccessorProperty( [ 'a' ], 'length' );
// returns false

bool = isAccessorProperty( { 'a': 'b' }, 'a' );
// returns false

bool = isAccessorProperty( [ 'a' ], 0 );
// returns false

bool = isAccessorProperty( { 'null': false }, null );
// returns false

bool = isAccessorProperty( { '[object Object]': false }, {} );
// returns false

bool = isAccessorProperty( {}, 'toString' );
// returns false

bool = isAccessorProperty( {}, 'hasOwnProperty' );
// returns false

bool = isAccessorProperty( null, 'a' );
// returns false

bool = isAccessorProperty( void 0, 'a' );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/has-own-property`][@stdlib/assert/has-own-property]</span><span class="delimiter">: </span><span class="description">test if an object has a specified property.</span>
-   <span class="package-name">[`@stdlib/assert/is-accessor-property-in`][@stdlib/assert/is-accessor-property-in]</span><span class="delimiter">: </span><span class="description">test if an object's own or inherited property has an accessor descriptor.</span>
-   <span class="package-name">[`@stdlib/assert/is-data-property`][@stdlib/assert/is-data-property]</span><span class="delimiter">: </span><span class="description">test if an object's own property has a data descriptor.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/assert/has-own-property]: https://github.com/stdlib-js/assert/tree/main/has-own-property

[@stdlib/assert/is-accessor-property-in]: https://github.com/stdlib-js/assert/tree/main/is-accessor-property-in

[@stdlib/assert/is-data-property]: https://github.com/stdlib-js/assert/tree/main/is-data-property

<!-- </related-links> -->

</section>

<!-- /.links -->
