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

# isAccessorPropertyIn

> Test if an object's own or inherited property has an accessor descriptor.

<section class="usage">

## Usage

```javascript
var isAccessorPropertyIn = require( '@stdlib/assert/is-accessor-property-in' );
```

#### isAccessorPropertyIn( value, property )

Returns a `boolean` indicating if an object's own or inherited `property` has an accessor descriptor.

<!-- eslint-disable no-restricted-syntax -->

```javascript
var defineProperty = require( '@stdlib/utils/define-property' );

var bool;
var obj;

function Foo() {
    this.foo = 'bar';
    return this;
}

defineProperty( Foo.prototype, 'beep', {
    'configurable': false,
    'enumerable': false,
    'writable': false,
    'value': 'boop'
});

defineProperty( Foo.prototype, 'accessor', {
    'configurable': false,
    'enumerable': false,
    'get': function getter() {
        return obj.foo;
    },
    'set': function setter( v ) {
        obj.foo = v;
    }
});

obj = new Foo();

bool = isAccessorPropertyIn( obj, 'foo' );
// returns false

bool = isAccessorPropertyIn( obj, 'beep' );
// returns false

bool = isAccessorPropertyIn( obj, 'accessor' );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Value arguments other than `null` or `undefined` are coerced to `objects`.

    ```javascript
    var bool = isAccessorPropertyIn( 'beep', 'length' );
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

    var bool = isAccessorPropertyIn( obj, null );
    // returns true
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable object-curly-newline -->

<!-- eslint no-undef: "error" -->

```javascript
var isAccessorPropertyIn = require( '@stdlib/assert/is-accessor-property-in' );

var bool = isAccessorPropertyIn( [ 'a' ], 'length' );
// returns false

bool = isAccessorPropertyIn( { 'a': 'b' }, 'a' );
// returns false

bool = isAccessorPropertyIn( [ 'a' ], 0 );
// returns false

bool = isAccessorPropertyIn( { 'null': false }, null );
// returns false

bool = isAccessorPropertyIn( { '[object Object]': false }, {} );
// returns false

bool = isAccessorPropertyIn( {}, 'toString' );
// returns false

bool = isAccessorPropertyIn( {}, 'hasOwnProperty' );
// returns false

bool = isAccessorPropertyIn( null, 'a' );
// returns false

bool = isAccessorPropertyIn( void 0, 'a' );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/has-property`][@stdlib/assert/has-property]</span><span class="delimiter">: </span><span class="description">test if an object has a specified property, either own or inherited.</span>
-   <span class="package-name">[`@stdlib/assert/is-accessor-property`][@stdlib/assert/is-accessor-property]</span><span class="delimiter">: </span><span class="description">test if an object's own property has an accessor descriptor.</span>
-   <span class="package-name">[`@stdlib/assert/is-data-property-in`][@stdlib/assert/is-data-property-in]</span><span class="delimiter">: </span><span class="description">test if an object's own or inherited property has a data descriptor.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/assert/has-property]: https://github.com/stdlib-js/assert/tree/main/has-property

[@stdlib/assert/is-accessor-property]: https://github.com/stdlib-js/assert/tree/main/is-accessor-property

[@stdlib/assert/is-data-property-in]: https://github.com/stdlib-js/assert/tree/main/is-data-property-in

<!-- </related-links> -->

</section>

<!-- /.links -->
