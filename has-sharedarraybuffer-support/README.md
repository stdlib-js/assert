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

# SharedArrayBuffer Support

> Detect native [`SharedArrayBuffer`][mdn-sharedarraybuffer] support.

<section class="usage">

## Usage

<!-- eslint-disable id-length -->

```javascript
var hasSharedArrayBufferSupport = require( '@stdlib/assert/has-sharedarraybuffer-support' );
```

#### hasSharedArrayBufferSupport()

Detects if a runtime environment supports [`SharedArrayBuffer`][mdn-sharedarraybuffer].

<!-- eslint-disable id-length -->

```javascript
var bool = hasSharedArrayBufferSupport();
// returns <boolean>
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint-disable id-length -->

<!-- eslint no-undef: "error" -->

```javascript
var hasSharedArrayBufferSupport = require( '@stdlib/assert/has-sharedarraybuffer-support' );

var bool = hasSharedArrayBufferSupport();
if ( bool ) {
    console.log( 'Environment has SharedArrayBuffer support.' );
} else {
    console.log( 'Environment lacks SharedArrayBuffer support.' );
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
Usage: has-sharedarraybuffer-support [options]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ has-sharedarraybuffer-support
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

-   <span class="package-name">[`@stdlib/assert/has-arraybuffer-support`][@stdlib/assert/has-arraybuffer-support]</span><span class="delimiter">: </span><span class="description">detect native ArrayBuffer support.</span>
-   <span class="package-name">[`@stdlib/assert/has-float32array-support`][@stdlib/assert/has-float32array-support]</span><span class="delimiter">: </span><span class="description">detect native Float32Array support.</span>
-   <span class="package-name">[`@stdlib/assert/has-float64array-support`][@stdlib/assert/has-float64array-support]</span><span class="delimiter">: </span><span class="description">detect native Float64Array support.</span>
-   <span class="package-name">[`@stdlib/assert/has-int16array-support`][@stdlib/assert/has-int16array-support]</span><span class="delimiter">: </span><span class="description">detect native Int16Array support.</span>
-   <span class="package-name">[`@stdlib/assert/has-int32array-support`][@stdlib/assert/has-int32array-support]</span><span class="delimiter">: </span><span class="description">detect native Int32Array support.</span>
-   <span class="package-name">[`@stdlib/assert/has-int8array-support`][@stdlib/assert/has-int8array-support]</span><span class="delimiter">: </span><span class="description">detect native Int8Array support.</span>
-   <span class="package-name">[`@stdlib/assert/has-node-buffer-support`][@stdlib/assert/has-node-buffer-support]</span><span class="delimiter">: </span><span class="description">detect native Buffer support.</span>
-   <span class="package-name">[`@stdlib/assert/has-uint16array-support`][@stdlib/assert/has-uint16array-support]</span><span class="delimiter">: </span><span class="description">detect native Uint16Array support.</span>
-   <span class="package-name">[`@stdlib/assert/has-uint32array-support`][@stdlib/assert/has-uint32array-support]</span><span class="delimiter">: </span><span class="description">detect native Uint32Array support.</span>
-   <span class="package-name">[`@stdlib/assert/has-uint8array-support`][@stdlib/assert/has-uint8array-support]</span><span class="delimiter">: </span><span class="description">detect native Uint8Array support.</span>
-   <span class="package-name">[`@stdlib/assert/has-uint8clampedarray-support`][@stdlib/assert/has-uint8clampedarray-support]</span><span class="delimiter">: </span><span class="description">detect native Uint8ClampedArray support.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-sharedarraybuffer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer

<!-- <related-links> -->

[@stdlib/assert/has-arraybuffer-support]: https://github.com/stdlib-js/assert/tree/main/has-arraybuffer-support

[@stdlib/assert/has-float32array-support]: https://github.com/stdlib-js/assert/tree/main/has-float32array-support

[@stdlib/assert/has-float64array-support]: https://github.com/stdlib-js/assert/tree/main/has-float64array-support

[@stdlib/assert/has-int16array-support]: https://github.com/stdlib-js/assert/tree/main/has-int16array-support

[@stdlib/assert/has-int32array-support]: https://github.com/stdlib-js/assert/tree/main/has-int32array-support

[@stdlib/assert/has-int8array-support]: https://github.com/stdlib-js/assert/tree/main/has-int8array-support

[@stdlib/assert/has-node-buffer-support]: https://github.com/stdlib-js/assert/tree/main/has-node-buffer-support

[@stdlib/assert/has-uint16array-support]: https://github.com/stdlib-js/assert/tree/main/has-uint16array-support

[@stdlib/assert/has-uint32array-support]: https://github.com/stdlib-js/assert/tree/main/has-uint32array-support

[@stdlib/assert/has-uint8array-support]: https://github.com/stdlib-js/assert/tree/main/has-uint8array-support

[@stdlib/assert/has-uint8clampedarray-support]: https://github.com/stdlib-js/assert/tree/main/has-uint8clampedarray-support

<!-- </related-links> -->

</section>

<!-- /.links -->
