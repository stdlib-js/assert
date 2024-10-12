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

# hasAtobSupport

> Detect native [`atob`][mdn-atob] support.

<section class="usage">

## Usage

```javascript
var hasAtobSupport = require( '@stdlib/assert/has-atob-support' );
```

#### hasAtobSupport()

Detects if a runtime environment supports [`atob`][mdn-atob].

```javascript
var bool = hasAtobSupport();
// returns <boolean>
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var hasAtobSupport = require( '@stdlib/assert/has-atob-support' );

var bool = hasAtobSupport();
if ( bool ) {
    console.log( 'Environment has atob support.' );
} else {
    console.log( 'Environment lacks atob support.' );
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
Usage: has-atob-support [options]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ has-atob-support
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

[mdn-atob]: https://developer.mozilla.org/en-US/docs/Web/API/Window/atob

</section>

<!-- /.links -->
