<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

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

# isConstantcase

> Test if a value is a constantcase string.

<section class="usage">

## Usage

```javascript
var isConstantcase = require( '@stdlib/assert/is-constantcase' );
```

#### isConstantcase( value )

Tests if a `value` is a constantcase `string`.

```javascript
var bool = isConstantcase( 'BEEP_BOOP' );
// returns true

bool = isConstantcase( 'BEEP and BOOP' );
// returns false
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function validates that a `value` is a `string`. For all other types, the function returns `false`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var isConstantcase = require( '@stdlib/assert/is-constantcase' );

console.log( isConstantcase( 'BEEP_BOOP' ) );
// => true

console.log( isConstantcase( 'BEEP and BOOP' ) );
// => false

console.log( isConstantcase( 'BEEP_BOOP_BEEP' ) );
// => true

console.log( isConstantcase( 'b' ) );
// => false

console.log( isConstantcase( 'B' ) );
// => true

console.log( isConstantcase( '!' ) );
// => false

console.log( isConstantcase( 'beep boop' ) );
// => false

```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="usage">

### Usage

```text
Usage: is-constantcase [options] [<string>]

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
    $ echo -n $'beEp booP\nFOO' | is-constantcase --split /\r?\n/
    # Escaped...
    $ echo -n $'beEp booP\nFOO' | is-constantcase --split /\\r?\\n/
    ```

-   The implementation ignores trailing delimiters.

</section>

<!-- /.notes -->

<section class="examples">

### Examples

```bash
$ is-constantcase BEEP_BOOP
true
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n 'beep Boop' | is-constantcase
false
```

By default, when used as a [standard stream][standard-streams], the implementation assumes newline-delimited data. To specify an alternative delimiter, set the `split` option.

```bash
$ echo -n 'beepBoop\tBEEP_BOOP' | is-constantcase --split '\t'
false
true
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
-   <span class="package-name">[`@stdlib/assert/is-camelcase`][@stdlib/assert/is-camelcase]</span><span class="delimiter">: </span><span class="description">test if a value is a camelcase string.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

[mdn-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

<!-- <related-links> -->

[@stdlib/assert/is-string]: https://github.com/stdlib-js/assert/tree/main/is-string

[@stdlib/assert/is-camelcase]: https://github.com/stdlib-js/assert/tree/main/is-camelcase

<!-- </related-links> -->

</section>

<!-- /.links -->
