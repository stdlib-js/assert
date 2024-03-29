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

# isSymbolArray

> Test if a value is an array-like object containing only [symbols][mdn-symbol].

<section class="usage">

## Usage

```javascript
var isSymbolArray = require( '@stdlib/assert/is-symbol-array' );
```

#### isSymbolArray( value )

Tests if a `value` is an array-like object containing only [symbols][mdn-symbol].

```javascript
var Symbol = require( '@stdlib/symbol/ctor' );

var bool = isSymbolArray( [ Symbol( 'beep' ), Symbol( 'boop' ) ] );
// returns true

bool = isSymbolArray( [ 'beep', 'boop' ] );
// returns false
```

#### isSymbolArray.primitives( value )

Tests if a `value` is an array-like object containing only [`symbol`][mdn-symbol] primitives.

```javascript
var Object = require( '@stdlib/object/ctor' );
var Symbol = require( '@stdlib/symbol/ctor' );

var bool = isSymbolArray.primitives( [ Symbol( 'beep' ), Symbol( 'boop' ) ] );
// returns true

bool = isSymbolArray.primitives( [ Symbol( 'beep' ), Object( Symbol( 'boop' ) ) ] );
// returns false
```

#### isSymbolArray.objects( value )

Tests if a `value` is an array-like object containing only [`Symbol`][mdn-symbol] objects.

```javascript
var Object = require( '@stdlib/object/ctor' );
var Symbol = require( '@stdlib/symbol/ctor' );

var bool = isSymbolArray.objects( [ Object( Symbol( 'beep' ) ), Object( Symbol( 'boop' ) ) ] );
// returns true

bool = isSymbolArray.objects( [ Symbol( 'beep' ), Symbol( 'boop' ) ] );
// returns false
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var hasSymbolSupport = require( '@stdlib/assert/has-symbol-support' );
var Symbol = require( '@stdlib/symbol/ctor' );
var isSymbolArray = require( '@stdlib/assert/is-symbol-array' );

var hasSymbols = hasSymbolSupport();
var bool;

if ( hasSymbols ) {
    bool = isSymbolArray( [ Symbol( 'beep' ), Symbol( 'boop' ) ] );
    // returns true

    bool = isSymbolArray( [ Symbol( 'beep' ), 'boop' ] );
    // returns false

    bool = isSymbolArray( Symbol( 'beep' ) );
    // returns false
} else {
    console.log( 'Environment does not support symbols.' );
}
bool = isSymbolArray( [ 'beep', 'boop' ] );
// returns false

bool = isSymbolArray( [] );
// returns false

bool = isSymbolArray( 'abc' );
// returns false

bool = isSymbolArray( null );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/is-array`][@stdlib/assert/is-array]</span><span class="delimiter">: </span><span class="description">test if a value is an array.</span>
-   <span class="package-name">[`@stdlib/assert/is-symbol`][@stdlib/assert/is-symbol]</span><span class="delimiter">: </span><span class="description">test if a value is a symbol.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-symbol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol

<!-- <related-links> -->

[@stdlib/assert/is-array]: https://github.com/stdlib-js/assert/tree/main/is-array

[@stdlib/assert/is-symbol]: https://github.com/stdlib-js/assert/tree/main/is-symbol

<!-- </related-links> -->

</section>

<!-- /.links -->
