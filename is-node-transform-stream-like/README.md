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

# Transform Stream-like

> Test if a value is Node [transform stream][nodejs-stream]-like.

<section class="usage">

## Usage

```javascript
var isNodeTransformStreamLike = require( '@stdlib/assert/is-node-transform-stream-like' );
```

#### isNodeTransformStreamLike( value )

Tests if a `value` is Node [transform stream][nodejs-stream]-like.

```javascript
var transformStream = require( '@stdlib/streams/node/transform' );

var bool = isNodeTransformStreamLike( transformStream() );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var stream = require( 'stream' );
var transformStream = require( '@stdlib/streams/node/transform' );
var isNodeTransformStreamLike = require( '@stdlib/assert/is-node-transform-stream-like' );

var bool = isNodeTransformStreamLike( new stream.Transform() );
// returns true

bool = isNodeTransformStreamLike( transformStream() );
// returns true

bool = isNodeTransformStreamLike( new stream.Stream() );
// returns false

bool = isNodeTransformStreamLike( new stream.Readable() );
// returns false

bool = isNodeTransformStreamLike( new stream.Writable() );
// returns false

bool = isNodeTransformStreamLike( new stream.Duplex() );
// returns false

bool = isNodeTransformStreamLike( {} );
// returns false

bool = isNodeTransformStreamLike( [] );
// returns false

bool = isNodeTransformStreamLike( null );
// returns false

function Stream() {
    return this;
}

bool = isNodeTransformStreamLike( Stream );
// returns false

bool = isNodeTransformStreamLike( new Stream() );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/is-node-stream-like`][@stdlib/assert/is-node-stream-like]</span><span class="delimiter">: </span><span class="description">test if a value is Node stream-like.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[nodejs-stream]: https://nodejs.org/api/stream.html

<!-- <related-links> -->

[@stdlib/assert/is-node-stream-like]: https://github.com/stdlib-js/assert/tree/main/is-node-stream-like

<!-- </related-links> -->

</section>

<!-- /.links -->
