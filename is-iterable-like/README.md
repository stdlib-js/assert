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

# isIterableLike

> Test if a value is [`iterable`][mdn-iterable-protocol]-like.

<section class="usage">

## Usage

```javascript
var isIterableLike = require( '@stdlib/assert/is-iterable-like' );
```

#### isIterableLike( value )

Tests if a `value` is [`iterable`][mdn-iterator-protocol]-like.

```javascript
var bool = isIterableLike( [] );
// returns <boolean>

bool = isIterableLike( {} );
// returns false
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   In order to be [iterable][mdn-iterable-protocol], an `object` must implement the `@@iterator` method, which, when called, returns an [iterator protocol-compliant object][mdn-iterator-protocol].
-   An [iterator protocol-compliant object][mdn-iterator-protocol] is an `object` having a `next` method following the [iterator protocol][mdn-iterator-protocol].
-   As full [iterator][mdn-iterator-protocol] compliance is **impossible** to achieve without evaluating an [iterator][mdn-iterator-protocol], this function checks **only** for interface compliance.
-   In environments lacking `Symbol.iterator` support, this function always returns `false`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var isIterableLike = require( '@stdlib/assert/is-iterable-like' );

var bool = isIterableLike( [] );
// returns <boolean>

bool = isIterableLike( {} );
// returns false

bool = isIterableLike( null );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/is-iterator-like`][@stdlib/assert/is-iterator-like]</span><span class="delimiter">: </span><span class="description">test if a value is iterator-like.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-iterable-protocol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterable_protocol

[mdn-iterator-protocol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol

<!-- <related-links> -->

[@stdlib/assert/is-iterator-like]: https://github.com/stdlib-js/assert/tree/main/is-iterator-like

<!-- </related-links> -->

</section>

<!-- /.links -->
