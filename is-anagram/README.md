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

# isAnagram

> Test if a value is an [anagram][anagram].

<section class="usage">

## Usage

```javascript
var isAnagram = require( '@stdlib/assert/is-anagram' );
```

#### isAnagram( str, value )

Tests if a `value` is an [anagram][anagram].

```javascript
var str = 'I am a weakish speller';
var value = 'William Shakespeare';

var bool = isAnagram( str, value );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function does **not** address the presence of [diacritics][diacritics].
-   Only **alphanumeric** characters are considered.
-   Capitalization is **ignored**.
-   If provided a non-string for the first `argument`, the function throws an `Error`.
-   If provided a non-string for the second `argument`, the function returns `false`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var isAnagram = require( '@stdlib/assert/is-anagram' );

var bool = isAnagram( 'I am a weakish speller', 'William Shakespeare' );
// returns true

bool = isAnagram( 'bat', 'tab' );
// returns true

bool = isAnagram( 'bat', 'TAB' );
// returns true

bool = isAnagram( 'bat', 't a b' );
// returns true

bool = isAnagram( 'bat 321', 'tab 123' );
// returns true

bool = isAnagram( 'bat', 'tabba' );
// returns false

bool = isAnagram( 'bat', 5 );
// returns false

bool = isAnagram( '123', 321 );
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
Usage: is-anagram [options] [<string>] --str=<string>

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
         --str string          Comparison string.
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
    $ echo -n $'baz\ntab' | is-anagram --str=zab --split /\r?\n/
    # Escaped...
    $ echo -n $'baz\ntab' | is-anagram --str=zab --split /\\r?\\n/
    ```

-   The implementation ignores trailing delimiters.

</section>

<!-- /.notes -->

<section class="examples">

### Examples

```bash
$ is-anagram baz --str=zab
true
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n 'tab\nbaz' | is-anagram --str=bat
true
false
```

By default, when used as a [standard stream][standard-streams], the implementation assumes newline-delimited data. To specify an alternative delimiter, set the `split` option.

```bash
$ echo -n 'tab\tbaz' | is-anagram --str=bat --split '\t'
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

-   <span class="package-name">[`@stdlib/assert/is-alphagram`][@stdlib/assert/is-alphagram]</span><span class="delimiter">: </span><span class="description">test if a value is an alphagram.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[anagram]: https://en.wikipedia.org/wiki/Anagram

[diacritics]: https://en.wikipedia.org/wiki/Diacritic

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

[mdn-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

<!-- <related-links> -->

[@stdlib/assert/is-alphagram]: https://github.com/stdlib-js/assert/tree/main/is-alphagram

<!-- </related-links> -->

</section>

<!-- /.links -->
