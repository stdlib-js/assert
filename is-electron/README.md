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

# IS_ELECTRON

> Check if the runtime is [Electron][electron].

<section class="usage">

## Usage

```javascript
var IS_ELECTRON = require( '@stdlib/assert/is-electron' );
```

#### IS_ELECTRON

`Boolean` indicating if the runtime is [Electron][electron].

```javascript
var bool = IS_ELECTRON;
// returns <boolean>
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var IS_ELECTRON = require( '@stdlib/assert/is-electron' );

console.log( IS_ELECTRON );
// => <boolean>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/is-electron-main`][@stdlib/assert/is-electron-main]</span><span class="delimiter">: </span><span class="description">check if the runtime is the main Electron process.</span>
-   <span class="package-name">[`@stdlib/assert/is-electron-renderer`][@stdlib/assert/is-electron-renderer]</span><span class="delimiter">: </span><span class="description">check if the runtime is the Electron renderer process.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[electron]: http://electron.atom.io/

<!-- <related-links> -->

[@stdlib/assert/is-electron-main]: https://github.com/stdlib-js/assert/tree/main/is-electron-main

[@stdlib/assert/is-electron-renderer]: https://github.com/stdlib-js/assert/tree/main/is-electron-renderer

<!-- </related-links> -->

</section>

<!-- /.links -->
