<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

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

# isBooleanArray

> Test if a value is a [BooleanArray][@stdlib/array/bool].

<section class="usage">

## Usage

```javascript
var isBooleanArray = require( '@stdlib/assert/is-booleanarray' );
```

#### isBooleanArray( value )

Tests if a value is a [`BooleanArray`][@stdlib/array/bool].

```javascript
var BooleanArray = require( '@stdlib/array/bool' );

var bool = isBooleanArray( new BooleanArray( 10 ) );
// returns true

bool = isBooleanArray( [] );
// returns false
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Int8Array = require( '@stdlib/array/int8' );
var Uint8Array = require( '@stdlib/array/uint8' );
var Uint8ClampedArray = require( '@stdlib/array/uint8c' );
var Int16Array = require( '@stdlib/array/int16' );
var Uint16Array = require( '@stdlib/array/uint16' );
var Int32Array = require( '@stdlib/array/int32' );
var Uint32Array = require( '@stdlib/array/uint32' );
var Float32Array = require( '@stdlib/array/float32' );
var Float64Array = require( '@stdlib/array/float64' );
var Complex128Array = require( '@stdlib/array/complex128' );
var Complex64Array = require( '@stdlib/array/complex64' );
var BooleanArray = require( '@stdlib/array/bool' );
var isBooleanArray = require( '@stdlib/assert/is-booleanarray' );

var bool = isBooleanArray( new BooleanArray( 10 ) );
// returns true

bool = isBooleanArray( new Complex64Array( 10 ) );
// returns false

bool = isBooleanArray( new Complex128Array( 10 ) );
// returns false

bool = isBooleanArray( new Float64Array( 10 ) );
// returns false

bool = isBooleanArray( new Int8Array( 10 ) );
// returns false

bool = isBooleanArray( new Uint8Array( 10 ) );
// returns false

bool = isBooleanArray( new Uint8ClampedArray( 10 ) );
// returns false

bool = isBooleanArray( new Int16Array( 10 ) );
// returns false

bool = isBooleanArray( new Uint16Array( 10 ) );
// returns false

bool = isBooleanArray( new Int32Array( 10 ) );
// returns false

bool = isBooleanArray( new Uint32Array( 10 ) );
// returns false

bool = isBooleanArray( new Float32Array( 10 ) );
// returns false

bool = isBooleanArray( [] );
// returns false

bool = isBooleanArray( {} );
// returns false

bool = isBooleanArray( null );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/array/bool]: https://github.com/stdlib-js/array-bool

</section>

<!-- /.links -->
