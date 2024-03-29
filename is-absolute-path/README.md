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

# isAbsolutePath

> Test if a value is an absolute path.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var isAbsolutePath = require( '@stdlib/assert/is-absolute-path' );
```

#### isAbsolutePath( value )

Tests if a `value` is an absolute path.

```javascript
var IS_WINDOWS = require( '@stdlib/assert/is-windows' );

var bool;
if ( IS_WINDOWS ) {
    bool = isAbsolutePath( 'C:\\foo\\bar\\baz' );
    // returns true
} else {
    bool = isAbsolutePath( '/foo/bar/baz' );
    // returns true
}
```

#### isAbsolutePath.posix( value )

Tests if a `value` is a POSIX absolute path.

```javascript
var bool = isAbsolutePath.posix( '/foo/bar/baz' );
// returns true

bool = isAbsolutePath.posix( 'foo/bar/baz' );
// returns false
```

#### isAbsolutePath.win32( value )

Tests if a `value` is a Windows absolute path.

```javascript
var bool = isAbsolutePath.win32( 'C:\\foo\\bar\\baz' );
// returns true

bool = isAbsolutePath.win32( 'foo\\bar\\baz' );
// returns false
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   `isAbsolutePath()` is platform-specific. On Windows platforms, the function is equal to `isAbsolutePath.win32()`. On POSIX platforms, the function is equal to `isAbsolutePath.posix()`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var isAbsolutePath = require( '@stdlib/assert/is-absolute-path' );

var bool = isAbsolutePath.posix( '/foo/bar/baz' );
// returns true

bool = isAbsolutePath.posix( '/foo/..' );
// returns true

bool = isAbsolutePath.posix( 'foo/' );
// returns false

bool = isAbsolutePath.posix( 'foo' );
// returns false

bool = isAbsolutePath.posix( '.' );
// returns false

bool = isAbsolutePath.posix( '' );
// returns false

bool = isAbsolutePath.win32( 'C:\\foo\\bar\\baz' );
// returns true

bool = isAbsolutePath.win32( '//server' );
// returns true

bool = isAbsolutePath.win32( '\\\\server' );
// returns true

bool = isAbsolutePath.win32( 'C:/foo/bar/baz' );
// returns true

bool = isAbsolutePath.win32( '/foo/..' );
// returns true

bool = isAbsolutePath.win32( 'foo\\bar\\baz' );
// returns false

bool = isAbsolutePath.win32( 'foo/bar/baz' );
// returns false

bool = isAbsolutePath.win32( 'foo/..' );
// returns false

bool = isAbsolutePath.win32( '.' );
// returns false

bool = isAbsolutePath.win32( '' );
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
Usage: is-absolute-path [options] [<path>]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
         --platform name       Platform: 'win32' or 'posix'.
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
    $ echo -n $'/foo/bar/baz\n./docs/repl.txt' | is-absolute-path --split /\r?\n/

    # Escaped...
    $ echo -n $'/foo/bar/baz\n./docs/repl.txt' | is-absolute-path --split /\\r?\\n/
    ```

-   The implementation ignores trailing delimiters.

</section>

<!-- /.notes -->

<section class="examples">

### Examples

```bash
$ is-absolute-path /foo/bar/baz --platform=posix
true
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n './docs/repl.txt' | is-absolute-path
false
```

By default, when used as a [standard stream][standard-streams], the implementation assumes newline-delimited data. To specify an alternative delimiter, set the `split` option.

```bash
$ echo -n '/foo/bar/baz\t./docs/repl.txt' | is-absolute-path --platform=posix --split '\t'
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

-   <span class="package-name">[`@stdlib/assert/is-relative-path`][@stdlib/assert/is-relative-path]</span><span class="delimiter">: </span><span class="description">test if a value is a relative path.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

[mdn-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

<!-- <related-links> -->

[@stdlib/assert/is-relative-path]: https://github.com/stdlib-js/assert/tree/main/is-relative-path

<!-- </related-links> -->

</section>

<!-- /.links -->
