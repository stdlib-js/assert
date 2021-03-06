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

# BigInt64Array Support

> Detect native [`BigInt64Array`][mdn-bigint64array] support.

<section class="usage">

## Usage

```javascript
var hasBigInt64ArraySupport = require( '@stdlib/assert/has-bigint64array-support' );
```

#### hasBigInt64ArraySupport()

Detects if a runtime environment supports [`BigInt64Array`][mdn-bigint64array].

```javascript
var bool = hasBigInt64ArraySupport();
// returns <boolean>
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var hasBigInt64ArraySupport = require( '@stdlib/assert/has-bigint64array-support' );

var bool = hasBigInt64ArraySupport();
if ( bool ) {
    console.log( 'Environment has BigInt64Array support.' );
} else {
    console.log( 'Environment lacks BigInt64Array support.' );
}
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="usage">

### Usage

```text
Usage: has-bigint64array-support [options]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ has-bigint64array-support
<boolean>
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/has-bigint-support`][@stdlib/assert/has-bigint-support]</span><span class="delimiter">: </span><span class="description">detect native BigInt support.</span>
-   <span class="package-name">[`@stdlib/assert/has-biguint64array-support`][@stdlib/assert/has-biguint64array-support]</span><span class="delimiter">: </span><span class="description">detect native BigUint64Array support.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-bigint64array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt64Array

<!-- <related-links> -->

[@stdlib/assert/has-bigint-support]: https://github.com/stdlib-js/assert/tree/main/has-bigint-support

[@stdlib/assert/has-biguint64array-support]: https://github.com/stdlib-js/assert/tree/main/has-biguint64array-support

<!-- </related-links> -->

</section>

<!-- /.links -->
