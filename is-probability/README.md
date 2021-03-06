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

# isProbability

> Test if a value is a probability.

<section class="intro">

A **probability** is defined as a numeric value on the interval `[0,1]`.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var isProbability = require( '@stdlib/assert/is-probability' );
```

#### isProbability( value )

Tests if a `value` is a probability.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isProbability( 0.5 );
// returns true

bool = isProbability( new Number( 0.5 ) );
// returns true

bool = isProbability( 3.14 );
// returns false

bool = isProbability( -5.0 );
// returns false

bool = isProbability( NaN );
// returns false

bool = isProbability( null );
// returns false
```

#### isProbability.isPrimitive( value )

Tests if a `value` is a primitive probability.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isProbability.isPrimitive( 0.33 );
// returns true

bool = isProbability.isPrimitive( new Number( 0.33 ) );
// returns false
```

#### isProbability.isObject( value )

Tests if a `value` is a `Number` object having a value which is a probability.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isProbability.isObject( 0.11 );
// returns false

bool = isProbability.isObject( new Number( 0.11 ) );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint-disable no-new-wrappers -->

<!-- eslint no-undef: "error" -->

```javascript
var Number = require( '@stdlib/number/ctor' );
var isProbability = require( '@stdlib/assert/is-probability' );

var bool = isProbability( 0.5 );
// returns true

bool = isProbability( new Number( 0.5 ) );
// returns true

bool = isProbability( 0.0 );
// returns true

bool = isProbability( 1.0 );
// returns true

bool = isProbability( 3.14 );
// returns false

bool = isProbability( -5.0 );
// returns false

bool = isProbability( NaN );
// returns false

bool = isProbability( '0.5' );
// returns false

bool = isProbability( null );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/is-number`][@stdlib/assert/is-number]</span><span class="delimiter">: </span><span class="description">test if a value is a number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/assert/is-number]: https://github.com/stdlib-js/assert/tree/main/is-number

<!-- </related-links> -->

</section>

<!-- /.links -->
