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

# isBlankString

> Test if a value is a blank string.

<section class="usage">

## Usage

```javascript
var isBlankString = require( '@stdlib/assert/is-blank-string' );
```

#### isBlankString( value )

Tests if a `value` is a blank `string` (i.e., an empty string or a string consisting only of whitespace characters).

```javascript
var bool = isBlankString( '   ' );
// returns true

bool = isBlankString( '' );
// returns true

bool = isBlankString( 0 );
// returns false
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var isBlankString = require( '@stdlib/assert/is-blank-string' );

var out = isBlankString( '   ' );
// returns true

out = isBlankString( '\t\t\t' );
// returns true

out = isBlankString( '\r\n' );
// returns true

out = isBlankString( '' );
// returns true

out = isBlankString( 'beep boop' );
// returns false

out = isBlankString( null );
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
Usage: is-blank-string [options] [<string>]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ is-blank-string baz
false
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n ' \t ' | is-blank-string
true
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
