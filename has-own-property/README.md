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

# hasOwnProp

> Test if an object has a specified property.

<section class="usage">

## Usage

<!-- stdlib/no-redeclare -->

```javascript
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
```

#### hasOwnProp( value, property )

Returns a boolean indicating if a `value` has a specified `property`.

<!-- stdlib/no-redeclare -->

```javascript
var value = {
    'beep': 'boop'
};

var bool = hasOwnProp( value, 'beep' );
// returns true

bool = hasOwnProp( value, 'bap' );
// returns false
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   In contrast to the native [Object.prototype.hasOwnProperty][mdn-object-has-own-property], this function does **not** throw when provided `null` or `undefined`. Instead, the function returns `false`.

    <!-- stdlib/no-redeclare -->

    ```javascript
    var bool = hasOwnProp( null, 'a' );
    // returns false

    bool = hasOwnProp( void 0, 'a' );
    // returns false
    ```

-   Value arguments other than `null` or `undefined` are coerced to objects.

    <!-- stdlib/no-redeclare -->

    ```javascript
    var bool = hasOwnProp( 'beep', 'length' );
    // returns true
    ```

-   Property arguments are coerced to strings.

    <!-- stdlib/no-redeclare -->

    ```javascript
    var value = {
        'null': false
    };
    var bool = hasOwnProp( value, null );
    // returns true

    value = {
        '[object Object]': false
    };
    bool = hasOwnProp( value, {} );
    // returns true
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable object-curly-newline, stdlib/no-redeclare, stdlib/eol-open-bracket-spacing -->

<!-- eslint no-undef: "error" -->

```javascript
var hasOwnProp = require( '@stdlib/assert/has-own-property' );

var bool = hasOwnProp( { 'a': 'b' }, 'a' );
// returns true

bool = hasOwnProp( { 'a': 'b' }, 'c' );
// returns false

bool = hasOwnProp( { 'a': 'b' }, null );
// returns false

bool = hasOwnProp( {}, 'hasOwnProp' );
// returns false

bool = hasOwnProp( null, 'a' );
// returns false

bool = hasOwnProp( void 0, 'a' );
// returns false

bool = hasOwnProp( { 'null': false }, null );
// returns true

bool = hasOwnProp( { '[object Object]': false }, {} );
// returns true
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/has-property`][@stdlib/assert/has-property]</span><span class="delimiter">: </span><span class="description">test if an object has a specified property, either own or inherited.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-object-has-own-property]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty

<!-- <related-links> -->

[@stdlib/assert/has-property]: https://github.com/stdlib-js/assert/tree/main/has-property

<!-- </related-links> -->

</section>

<!-- /.links -->
