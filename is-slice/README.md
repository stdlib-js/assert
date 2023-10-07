<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

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

# isSlice

> Test if a value is a [`Slice`][@stdlib/slice/ctor].

<section class="usage">

## Usage

```javascript
var isSlice = require( '@stdlib/assert/is-slice' );
```

#### isSlice( value )

Tests if a value is a [`Slice`][@stdlib/slice/ctor].

```javascript
var Slice = require( '@stdlib/slice/ctor' );

var s = new Slice( 0, 10 );

var bool = isSlice( s );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Slice = require( '@stdlib/slice/ctor' );
var isSlice = require( '@stdlib/assert/is-slice' );

var out = isSlice( new Slice( 0, 10, 1 ) );
// returns true

out = isSlice( {} );
// returns false

out = isSlice( null );
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

[@stdlib/slice/ctor]: https://github.com/stdlib-js/slice-ctor

</section>

<!-- /.links -->
