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

# isEmptyString

> Test if a value is an empty string.

<section class="usage">

## Usage

```javascript
var isEmptyString = require( '@stdlib/assert/is-empty-string' );
```

#### isEmptyString( value )

Tests if a value is an empty `string`.

<!-- eslint-disable no-new-wrappers -->

```javascript
var bool = isEmptyString( '' );
// returns true

bool = isEmptyString( new String( '' ) );
// returns true
```

#### isEmptyString.isPrimitive( value )

Tests if a `value` is an empty primitive `string`.

<!-- eslint-disable no-new-wrappers -->

```javascript
var bool = isEmptyString.isPrimitive( '' );
// returns true

bool = isEmptyString.isPrimitive( new String( '' ) );
// returns false
```

#### isEmptyString.isObject( value )

Tests if a `value` is an empty `String` object.

<!-- eslint-disable no-new-wrappers -->

```javascript
var bool = isEmptyString.isObject( '' );
// returns false

bool = isEmptyString.isObject( new String( '' ) );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint-disable no-new-wrappers, no-restricted-syntax, no-empty-function -->

<!-- eslint no-undef: "error" -->

```javascript
var isEmptyString = require( '@stdlib/assert/is-empty-string' );

var bool = isEmptyString( '' );
// returns true

bool = isEmptyString( new String( '' ) );
// returns true

bool = isEmptyString( 'beep' );
// returns false

bool = isEmptyString( 0 );
// returns false

bool = isEmptyString( null );
// returns false

bool = isEmptyString( void 0 );
// returns false

bool = isEmptyString( {} );
// returns false

bool = isEmptyString( [] );
// returns false

bool = isEmptyString( function empty() {} );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/is-string`][@stdlib/assert/is-string]</span><span class="delimiter">: </span><span class="description">test if a value is a string.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/assert/is-string]: https://github.com/stdlib-js/assert/tree/main/is-string

<!-- </related-links> -->

</section>

<!-- /.links -->
