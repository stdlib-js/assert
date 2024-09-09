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

# hasBtoaSupport

> Detect native [`btoa`][mdn-btoa] support.

<section class="usage">

## Usage

```javascript
var hasBtoaSupport = require( '@stdlib/assert/has-btoa-support' );
```

#### hasBtoaSupport()

Detects if a runtime environment supports [`btoa`][mdn-btoa].

```javascript
var bool = hasBtoaSupport();
// returns <boolean>
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var hasBtoaSupport = require( '@stdlib/assert/has-btoa-support' );

var bool = hasBtoaSupport();
if ( bool ) {
    console.log( 'Environment has btoa support.' );
} else {
    console.log( 'Environment lacks btoa support.' );
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
Usage: has-btoa-support [options]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ has-btoa-support
<boolean>
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-btoa]: https://developer.mozilla.org/en-US/docs/Web/API/Window/btoa

</section>

<!-- /.links -->
