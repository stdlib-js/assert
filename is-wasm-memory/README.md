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

# isWebAssemblyMemory

> Test if a value is a WebAssembly [memory][@stdlib/wasm/memory] instance.

<section class="usage">

## Usage

```javascript
var isWebAssemblyMemory = require( '@stdlib/assert/is-wasm-memory' );
```

#### isWebAssemblyMemory( value )

Tests if a value is a WebAssembly [memory][@stdlib/wasm/memory] instance.

```javascript
var Memory = require( '@stdlib/wasm/memory' );

var mem = new Memory({
    'initial': 0
});
var bool = isWebAssemblyMemory( mem );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Uint8Array = require( '@stdlib/array/uint8' );
var ArrayBuffer = require( '@stdlib/array/buffer' );
var Memory = require( '@stdlib/wasm/memory' );
var isWebAssemblyMemory = require( '@stdlib/assert/is-wasm-memory' );

var mem = new Memory({
    'initial': 0
});
var bool = isWebAssemblyMemory( mem );
// returns true

bool = isWebAssemblyMemory( new Uint8Array( 10 ) );
// returns false

bool = isWebAssemblyMemory( new ArrayBuffer( 10 ) );
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

[@stdlib/wasm/memory]: https://github.com/stdlib-js/wasm-memory

</section>

<!-- /.links -->
