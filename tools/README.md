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

# Assert

> Assertion utility tools.

<section class="usage">

## Usage

```javascript
var tools = require( '@stdlib/assert/tools' );
```

#### tools

Namespace for assertion utility tools.

```javascript
var o = tools;
// returns {...}
```

The namespace contains the following:

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`arrayfcn( predicate )`][@stdlib/assert/tools/array-function]</span><span class="delimiter">: </span><span class="description">return a function which tests if every element in an array passes a test condition.</span>
-   <span class="signature">[`arraylikefcn( predicate )`][@stdlib/assert/tools/array-like-function]</span><span class="delimiter">: </span><span class="description">return a function which tests if every element in an array-like object passes a test condition.</span>
-   <span class="signature">[`typedarrayfcn( predicate )`][@stdlib/assert/tools/typed-array-function]</span><span class="delimiter">: </span><span class="description">return a function which tests if every element in a typed array passes a test condition.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var objectKeys = require( '@stdlib/utils/keys' );
var tools = require( '@stdlib/assert/tools' );

console.log( objectKeys( tools ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <toc-links> -->

[@stdlib/assert/tools/array-function]: https://github.com/stdlib-js/assert/tree/main/tools/array-function

[@stdlib/assert/tools/array-like-function]: https://github.com/stdlib-js/assert/tree/main/tools/array-like-function

[@stdlib/assert/tools/typed-array-function]: https://github.com/stdlib-js/assert/tree/main/tools/typed-array-function

<!-- </toc-links> -->

</section>

<!-- /.links -->
