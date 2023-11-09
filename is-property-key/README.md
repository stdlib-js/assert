<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

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

# isPropertyKey

> Test whether a value is a property key.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var isPropertyKey = require( '@stdlib/assert/is-property-key' );
```

#### isPropertyKey( value )

Tests whether a value is a property key.

```javascript
var bool = isPropertyKey( 'beep' );
// returns true

bool = isPropertyKey( 3.14 );
// returns false
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   A valid property key is either a string, symbol, or a nonnegative integer. For example, `'beep'`, `Symbol( 'beep' )`, and `3` are all valid property keys.
-   Only primitive values are considered to be valid property keys. This excludes object wrappers such as `new String( 'beep' )`.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Symbol = require( '@stdlib/symbol/ctor' );
var hasSymbolSupport = require( '@stdlib/assert/has-symbol-support' );
var isPropertyKey = require( '@stdlib/assert/is-property-key' );

var hasSymbols = hasSymbolSupport();
var bool = isPropertyKey( 'beep' );
// returns true

if ( hasSymbols ) {
    bool = isPropertyKey( Symbol( 'beep' ) );
    // returns true
} else {
    console.log( 'Environment does not support symbols.' );
}

bool = isPropertyKey( 37 );
// returns true

bool = isPropertyKey( {} );
// returns false

bool = isPropertyKey( [] );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/is-string`][@stdlib/assert/is-string]</span><span class="delimiter">: </span><span class="description">test if a value is a string.</span>
-   <span class="package-name">[`@stdlib/assert/is-symbol`][@stdlib/assert/is-symbol]</span><span class="delimiter">: </span><span class="description">test if a value is a symbol.</span>
-   <span class="package-name">[`@stdlib/assert/is-nonnegative-integer`][@stdlib/assert/is-nonnegative-integer]</span><span class="delimiter">: </span><span class="description">test if a value is a number having a nonnegative integer value.</span>
-   <span class="package-name">[`@stdlib/assert/has-own-property`][@stdlib/assert/has-own-property]</span><span class="delimiter">: </span><span class="description">test if an object has a specified property.</span>
-   <span class="package-name">[`@stdlib/assert/has-property`][@stdlib/assert/has-property]</span><span class="delimiter">: </span><span class="description">test if an object has a specified property, either own or inherited.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/assert/is-string]: https://github.com/stdlib-js/assert/tree/main/is-string

[@stdlib/assert/is-symbol]: https://github.com/stdlib-js/assert/tree/main/is-symbol

[@stdlib/assert/is-nonnegative-integer]: https://github.com/stdlib-js/assert/tree/main/is-nonnegative-integer

[@stdlib/assert/has-own-property]: https://github.com/stdlib-js/assert/tree/main/has-own-property

[@stdlib/assert/has-property]: https://github.com/stdlib-js/assert/tree/main/has-property

<!-- </related-links> -->

</section>

<!-- /.links -->
