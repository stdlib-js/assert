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

# isBinaryString

> Test if a value is a binary string.

<section class="usage">

## Usage

```javascript
var isBinaryString = require( '@stdlib/assert/is-binary-string' );
```

#### isBinaryString( value )

Tests if a `value` is a binary `string`; i.e., a character sequence of `1`'s and `0`'s.

```javascript
var bool = isBinaryString( '1000101' );
// returns true

bool = isBinaryString( 'beep' );
// returns false

bool = isBinaryString( '' );
// returns false
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var isBinaryString = require( '@stdlib/assert/is-binary-string' );

var bool = isBinaryString( '1' );
// returns true

bool = isBinaryString( '0' );
// returns true

bool = isBinaryString( '101010101001' );
// returns true

bool = isBinaryString( '' );
// returns false

bool = isBinaryString( 'beep' );
// returns false

bool = isBinaryString( null );
// returns false
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="usage">

### Usage

```text
Usage: is-binary-string [options] [<string>]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
         --split sep           Delimiter for stdin data. Default: '/\\r?\\n/'.
```

</section>

<!-- /.usage -->

<!-- CLI usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

### Notes

-   If the split separator is a [regular expression][mdn-regexp], ensure that the `split` option is either properly escaped or enclosed in quotes.

    ```bash
    # Not escaped...
    $ echo -n $'beEp booP\n100001110' | is-binary-string --split /\r?\n/
    # Escaped...
    $ echo -n $'beEp booP\n100001110' | is-binary-string --split /\\r?\\n/
    ```

-   The implementation ignores trailing delimiters.

</section>

<!-- /.notes -->

<section class="examples">

### Examples

```bash
$ is-binary-string 01234
false
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n '0110' | is-binary-string
true
```

By default, when used as a [standard stream][standard-streams], the implementation assumes newline-delimited data. To specify an alternative delimiter, set the `split` option.

```bash
$ echo -n '0110\t1234' | is-binary-string --split '\t'
true
false
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/is-string`][@stdlib/assert/is-string]</span><span class="delimiter">: </span><span class="description">test if a value is a string.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

[mdn-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

<!-- <related-links> -->

[@stdlib/assert/is-string]: https://github.com/stdlib-js/assert/tree/main/is-string

<!-- </related-links> -->

</section>

<!-- /.links -->
