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

# isNonConfigurableProperty

> Test if an object's own property is non-configurable.

<section class="usage">

## Usage

```javascript
var isNonConfigurableProperty = require( '@stdlib/assert/is-nonconfigurable-property' );
```

#### isNonConfigurableProperty( value, property )

Returns a `boolean` indicating if a `value` has a non-configurable `property` (i.e., a property which cannot be deleted and whose descriptor cannot be changed).

```javascript
var defineProperty = require( '@stdlib/utils/define-property' );

var obj = {
    'foo': 'bar'
};

defineProperty( obj, 'beep', {
    'configurable': false,
    'enumerable': true,
    'writable': true,
    'value': 'boop'
});

var bool = isNonConfigurableProperty( obj, 'beep' );
// returns true

bool = isNonConfigurableProperty( obj, 'foo' );
// returns false
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Value arguments other than `null` or `undefined` are coerced to `objects`.

    ```javascript
    var bool = isNonConfigurableProperty( 'beep', 'length' );
    // returns true
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable object-curly-newline -->

<!-- eslint no-undef: "error" -->

```javascript
var isNonConfigurableProperty = require( '@stdlib/assert/is-nonconfigurable-property' );

var bool = isNonConfigurableProperty( [ 'a' ], 'length' );
// returns true

bool = isNonConfigurableProperty( { 'a': 'b' }, 'a' );
// returns false

bool = isNonConfigurableProperty( [ 'a' ], 0 );
// returns false

bool = isNonConfigurableProperty( {}, 'toString' );
// returns false

bool = isNonConfigurableProperty( {}, 'hasOwnProperty' );
// returns false

bool = isNonConfigurableProperty( null, 'a' );
// returns false

bool = isNonConfigurableProperty( void 0, 'a' );
// returns false

bool = isNonConfigurableProperty( { 'null': false }, null );
// returns false

bool = isNonConfigurableProperty( { '[object Object]': false }, {} );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/is-configurable-property`][@stdlib/assert/is-configurable-property]</span><span class="delimiter">: </span><span class="description">test if an object's own property is configurable.</span>
-   <span class="package-name">[`@stdlib/assert/is-enumerable-property`][@stdlib/assert/is-enumerable-property]</span><span class="delimiter">: </span><span class="description">test if an object's own property is enumerable.</span>
-   <span class="package-name">[`@stdlib/assert/is-nonconfigurable-property-in`][@stdlib/assert/is-nonconfigurable-property-in]</span><span class="delimiter">: </span><span class="description">test if an object's own or inherited property is non-configurable.</span>
-   <span class="package-name">[`@stdlib/assert/is-nonenumerable-property`][@stdlib/assert/is-nonenumerable-property]</span><span class="delimiter">: </span><span class="description">test if an object's own property is non-enumerable.</span>
-   <span class="package-name">[`@stdlib/assert/is-readable-property`][@stdlib/assert/is-readable-property]</span><span class="delimiter">: </span><span class="description">test if an object's own property is readable.</span>
-   <span class="package-name">[`@stdlib/assert/is-writable-property`][@stdlib/assert/is-writable-property]</span><span class="delimiter">: </span><span class="description">test if an object's own property is writable.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/assert/is-configurable-property]: https://github.com/stdlib-js/assert/tree/main/is-configurable-property

[@stdlib/assert/is-enumerable-property]: https://github.com/stdlib-js/assert/tree/main/is-enumerable-property

[@stdlib/assert/is-nonconfigurable-property-in]: https://github.com/stdlib-js/assert/tree/main/is-nonconfigurable-property-in

[@stdlib/assert/is-nonenumerable-property]: https://github.com/stdlib-js/assert/tree/main/is-nonenumerable-property

[@stdlib/assert/is-readable-property]: https://github.com/stdlib-js/assert/tree/main/is-readable-property

[@stdlib/assert/is-writable-property]: https://github.com/stdlib-js/assert/tree/main/is-writable-property

<!-- </related-links> -->

</section>

<!-- /.links -->
