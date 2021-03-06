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

# Object.defineProperty Support

> Detect [`Object.defineProperty`][mdn-define-property] support.

<section class="usage">

## Usage

```javascript
var hasDefinePropertySupport = require( '@stdlib/assert/has-define-property-support' );
```

#### hasDefinePropertySupport()

Detects if a runtime environment supports [`Object.defineProperty`][mdn-define-property].

```javascript
var bool = hasDefinePropertySupport();
// returns <boolean>
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var hasDefinePropertySupport = require( '@stdlib/assert/has-define-property-support' );

var bool = hasDefinePropertySupport();
if ( bool ) {
    console.log( 'Environment has `Object.defineProperty` support.' );
} else {
    console.log( 'Environment lacks `Object.defineProperty` support.' );
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
Usage: has-define-property-support [options]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ has-define-property-support
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

-   <span class="package-name">[`@stdlib/assert/has-define-properties-support`][@stdlib/assert/has-define-properties-support]</span><span class="delimiter">: </span><span class="description">detect `Object.defineProperties` support.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-define-property]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty

<!-- <related-links> -->

[@stdlib/assert/has-define-properties-support]: https://github.com/stdlib-js/assert/tree/main/has-define-properties-support

<!-- </related-links> -->

</section>

<!-- /.links -->
