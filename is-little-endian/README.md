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

# Little Endian

> Check if an environment is [little endian][endianness].

<section class="usage">

## Usage

```javascript
var IS_LITTLE_ENDIAN = require( '@stdlib/assert/is-little-endian' );
```

#### IS_LITTLE_ENDIAN

`Boolean` indicating if an environment is [little endian][endianness].

```javascript
var bool = IS_LITTLE_ENDIAN;
// returns <boolean>
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var IS_LITTLE_ENDIAN = require( '@stdlib/assert/is-little-endian' );

console.log( IS_LITTLE_ENDIAN );
// => <boolean>
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="usage">

### Usage

```text
Usage: is-little-endian [options]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ is-little-endian
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

-   <span class="package-name">[`@stdlib/assert/is-big-endian`][@stdlib/assert/is-big-endian]</span><span class="delimiter">: </span><span class="description">check if an environment is big endian.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[endianness]: https://en.wikipedia.org/wiki/Endianness

<!-- <related-links> -->

[@stdlib/assert/is-big-endian]: https://github.com/stdlib-js/assert/tree/main/is-big-endian

<!-- </related-links> -->

</section>

<!-- /.links -->
