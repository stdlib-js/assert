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

# isEnumerablePropertyIn

> Test if an object's own or inherited property is enumerable.

<section class="usage">

## Usage

```javascript
var isEnumerablePropertyIn = require( '@stdlib/assert/is-enumerable-property-in' );
```

#### isEnumerablePropertyIn( value, property )

Returns a `boolean` indicating if a `value` has an enumerable `property`.

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
    'configurable': true,
    'enumerable': true,
    'writable': true,
    'value': true
});

defineProperty( Foo.prototype, 'boop', {
    'configurable': true,
    'enumerable': false,
    'writable': true,
    'value': true
});

obj = new Foo();

bool = isEnumerablePropertyIn( obj, 'foo' );
// returns true

bool = isEnumerablePropertyIn( obj, 'beep' );
// returns true

bool = isEnumerablePropertyIn( obj, 'boop' );
// returns false
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Value arguments other than `null` or `undefined` are coerced to `objects`.

    ```javascript
    var bool = isEnumerablePropertyIn( 'beep', 'toString' );
    // returns false
    ```

-   Property arguments are coerced to `strings`.

    ```javascript
    var obj = {
        'null': 'foo'
    };

    var bool = isEnumerablePropertyIn( obj, null );
    // returns true
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable object-curly-newline -->

<!-- eslint no-undef: "error" -->

```javascript
var isEnumerablePropertyIn = require( '@stdlib/assert/is-enumerable-property-in' );

var bool = isEnumerablePropertyIn( { 'a': 'b' }, 'a' );
// returns true

bool = isEnumerablePropertyIn( [ 'a' ], 0 );
// returns true

bool = isEnumerablePropertyIn( { 'null': false }, null );
// returns true

bool = isEnumerablePropertyIn( { '[object Object]': false }, {} );
// returns true

bool = isEnumerablePropertyIn( {}, 'toString' );
// returns false

bool = isEnumerablePropertyIn( {}, 'hasOwnProperty' );
// returns false

bool = isEnumerablePropertyIn( [ 'a' ], 'length' );
// returns false

bool = isEnumerablePropertyIn( null, 'a' );
// returns false

bool = isEnumerablePropertyIn( void 0, 'a' );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/is-configurable-property-in`][@stdlib/assert/is-configurable-property-in]</span><span class="delimiter">: </span><span class="description">test if an object's own or inherited property is configurable.</span>
-   <span class="package-name">[`@stdlib/assert/is-enumerable-property`][@stdlib/assert/is-enumerable-property]</span><span class="delimiter">: </span><span class="description">test if an object's own property is enumerable.</span>
-   <span class="package-name">[`@stdlib/assert/is-nonenumerable-property-in`][@stdlib/assert/is-nonenumerable-property-in]</span><span class="delimiter">: </span><span class="description">test if an object's own or inherited property is non-enumerable.</span>
-   <span class="package-name">[`@stdlib/assert/is-readable-property-in`][@stdlib/assert/is-readable-property-in]</span><span class="delimiter">: </span><span class="description">test if an object's own or inherited property is readable.</span>
-   <span class="package-name">[`@stdlib/assert/is-writable-property-in`][@stdlib/assert/is-writable-property-in]</span><span class="delimiter">: </span><span class="description">test if an object's own or inherited property is writable.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/assert/is-configurable-property-in]: https://github.com/stdlib-js/assert/tree/main/is-configurable-property-in

[@stdlib/assert/is-enumerable-property]: https://github.com/stdlib-js/assert/tree/main/is-enumerable-property

[@stdlib/assert/is-nonenumerable-property-in]: https://github.com/stdlib-js/assert/tree/main/is-nonenumerable-property-in

[@stdlib/assert/is-readable-property-in]: https://github.com/stdlib-js/assert/tree/main/is-readable-property-in

[@stdlib/assert/is-writable-property-in]: https://github.com/stdlib-js/assert/tree/main/is-writable-property-in

<!-- </related-links> -->

</section>

<!-- /.links -->
