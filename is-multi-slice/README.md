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

# isMultiSlice

> Test if a value is a [`MultiSlice`][@stdlib/slice/multi].

<section class="usage">

## Usage

```javascript
var isMultiSlice = require( '@stdlib/assert/is-multi-slice' );
```

#### isMultiSlice( value )

Tests if a value is a [`MultiSlice`][@stdlib/slice/multi].

```javascript
var MultiSlice = require( '@stdlib/slice/multi' );

var s = new MultiSlice();

var bool = isMultiSlice( s );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Slice = require( '@stdlib/slice/ctor' );
var MultiSlice = require( '@stdlib/slice/multi' );
var isMultiSlice = require( '@stdlib/assert/is-multi-slice' );

var out = isMultiSlice( new MultiSlice() );
// returns true

out = isMultiSlice( new Slice( 0, 10, 1 ) );
// returns false

out = isMultiSlice( {} );
// returns false

out = isMultiSlice( null );
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

[@stdlib/slice/multi]: https://github.com/stdlib-js/slice-multi

</section>

<!-- /.links -->
