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

# isNonConfigurablePropertyIn

> Test if an object's own or inherited property is non-configurable.

<section class="usage">

## Usage

<!-- eslint-disable id-length -->

```javascript
var isNonConfigurablePropertyIn = require( '@stdlib/assert/is-nonconfigurable-property-in' );
```

#### isNonConfigurablePropertyIn( value, property )

Returns a `boolean` indicating if a `value` has a non-configurable `property` (i.e., a property which cannot be deleted and whose descriptor cannot be changed).

<!-- eslint-disable no-restricted-syntax, id-length -->

```javascript
var defineProperty = require( '@stdlib/utils/define-property' );

var bool;
var obj;

function Foo() {
    this.foo = 'bar';
    return this;
}

defineProperty( Foo.prototype, 'beep', {
    'configurable': true,
    'enumerable': true,
    'writable': true,
    'value': true
});

defineProperty( Foo.prototype, 'boop', {
    'configurable': false,
    'enumerable': true,
    'writable': true,
    'value': true
});

obj = new Foo();

bool = isNonConfigurablePropertyIn( obj, 'foo' );
// returns false

bool = isNonConfigurablePropertyIn( obj, 'beep' );
// returns false

bool = isNonConfigurablePropertyIn( obj, 'boop' );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Value arguments other than `null` or `undefined` are coerced to `objects`.

    <!-- eslint-disable id-length -->

    ```javascript
    var bool = isNonConfigurablePropertyIn( 'beep', 'length' );
    // returns true
    ```

-   Non-symbol property arguments are coerced to `strings`.

    <!-- eslint-disable id-length -->

    ```javascript
    var defineProperty = require( '@stdlib/utils/define-property' );

    var obj = {};

    defineProperty( obj, 'null', {
        'configurable': false,
        'enumerable': true,
        'writable': true,
        'value': true
    });

    var bool = isNonConfigurablePropertyIn( obj, null );
    // returns true
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable object-curly-newline, id-length -->

<!-- eslint no-undef: "error" -->

```javascript
var isNonConfigurablePropertyIn = require( '@stdlib/assert/is-nonconfigurable-property-in' );

var bool = isNonConfigurablePropertyIn( [ 'a' ], 'length' );
// returns true

bool = isNonConfigurablePropertyIn( {}, 'toString' );
// returns false

bool = isNonConfigurablePropertyIn( {}, 'hasOwnProperty' );
// returns false

bool = isNonConfigurablePropertyIn( { 'a': 'b' }, 'a' );
// returns false

bool = isNonConfigurablePropertyIn( [ 'a' ], 0 );
// returns false

bool = isNonConfigurablePropertyIn( { 'null': false }, null );
// returns false

bool = isNonConfigurablePropertyIn( { '[object Object]': false }, {} );
// returns false

bool = isNonConfigurablePropertyIn( null, 'a' );
// returns false

bool = isNonConfigurablePropertyIn( void 0, 'a' );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/is-configurable-property-in`][@stdlib/assert/is-configurable-property-in]</span><span class="delimiter">: </span><span class="description">test if an object's own or inherited property is configurable.</span>
-   <span class="package-name">[`@stdlib/assert/is-enumerable-property-in`][@stdlib/assert/is-enumerable-property-in]</span><span class="delimiter">: </span><span class="description">test if an object's own or inherited property is enumerable.</span>
-   <span class="package-name">[`@stdlib/assert/is-nonconfigurable-property`][@stdlib/assert/is-nonconfigurable-property]</span><span class="delimiter">: </span><span class="description">test if an object's own property is non-configurable.</span>
-   <span class="package-name">[`@stdlib/assert/is-nonenumerable-property-in`][@stdlib/assert/is-nonenumerable-property-in]</span><span class="delimiter">: </span><span class="description">test if an object's own or inherited property is non-enumerable.</span>
-   <span class="package-name">[`@stdlib/assert/is-readable-property-in`][@stdlib/assert/is-readable-property-in]</span><span class="delimiter">: </span><span class="description">test if an object's own or inherited property is readable.</span>
-   <span class="package-name">[`@stdlib/assert/is-writable-property-in`][@stdlib/assert/is-writable-property-in]</span><span class="delimiter">: </span><span class="description">test if an object's own or inherited property is writable.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/assert/is-configurable-property-in]: https://github.com/stdlib-js/assert/tree/main/is-configurable-property-in

[@stdlib/assert/is-enumerable-property-in]: https://github.com/stdlib-js/assert/tree/main/is-enumerable-property-in

[@stdlib/assert/is-nonconfigurable-property]: https://github.com/stdlib-js/assert/tree/main/is-nonconfigurable-property

[@stdlib/assert/is-nonenumerable-property-in]: https://github.com/stdlib-js/assert/tree/main/is-nonenumerable-property-in

[@stdlib/assert/is-readable-property-in]: https://github.com/stdlib-js/assert/tree/main/is-readable-property-in

[@stdlib/assert/is-writable-property-in]: https://github.com/stdlib-js/assert/tree/main/is-writable-property-in

<!-- </related-links> -->

</section>

<!-- /.links -->
