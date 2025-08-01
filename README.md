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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Assert

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Assertion utilities.

<section class="installation">

## Installation

```bash
npm install @stdlib/assert
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var assert = require( '@stdlib/assert' );
```

#### assert

Namespace providing utilities for data type testing and feature detection.

```javascript
var o = assert;
// returns {...}
```

To validate the built-in JavaScript data types, the namespace includes the following assertion utilities:

<!-- <toc pattern="is-+(array|boolean|date-object|function|string|symbol|nan|null|number|object|regexp|symbol|undefined)" > -->

<div class="namespace-toc">

-   <span class="signature">[`isArray( value )`][@stdlib/assert/is-array]</span><span class="delimiter">: </span><span class="description">test if a value is an array.</span>
-   <span class="signature">[`isBoolean( value )`][@stdlib/assert/is-boolean]</span><span class="delimiter">: </span><span class="description">test if a value is a boolean.</span>
-   <span class="signature">[`isDateObject( value )`][@stdlib/assert/is-date-object]</span><span class="delimiter">: </span><span class="description">test if a value is a Date object.</span>
-   <span class="signature">[`isFunction( value )`][@stdlib/assert/is-function]</span><span class="delimiter">: </span><span class="description">test if a value is a function.</span>
-   <span class="signature">[`isnan( value )`][@stdlib/assert/is-nan]</span><span class="delimiter">: </span><span class="description">test if a value is NaN.</span>
-   <span class="signature">[`isNull( value )`][@stdlib/assert/is-null]</span><span class="delimiter">: </span><span class="description">test if a value is null.</span>
-   <span class="signature">[`isNumber( value )`][@stdlib/assert/is-number]</span><span class="delimiter">: </span><span class="description">test if a value is a number.</span>
-   <span class="signature">[`isObject( value )`][@stdlib/assert/is-object]</span><span class="delimiter">: </span><span class="description">test if a value is an object.</span>
-   <span class="signature">[`isRegExp( value )`][@stdlib/assert/is-regexp]</span><span class="delimiter">: </span><span class="description">test if a value is a regular expression.</span>
-   <span class="signature">[`isString( value )`][@stdlib/assert/is-string]</span><span class="delimiter">: </span><span class="description">test if a value is a string.</span>
-   <span class="signature">[`isSymbol( value )`][@stdlib/assert/is-symbol]</span><span class="delimiter">: </span><span class="description">test if a value is a symbol.</span>
-   <span class="signature">[`isUndefined( value )`][@stdlib/assert/is-undefined]</span><span class="delimiter">: </span><span class="description">test if a value is undefined.</span>

</div>

<!-- </toc> -->

For primitive types having corresponding object wrappers, assertion utilities provide `isObject` and `isPrimitive` methods to test for either objects or primitives, respectively.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Boolean = require( '@stdlib/boolean/ctor' );
var isBoolean = require( '@stdlib/assert/is-boolean' );

var bool = isBoolean.isObject( new Boolean( false ) );
// returns true

bool = isBoolean.isObject( false );
// returns false

bool = isBoolean.isPrimitive( false );
// returns true
```

Many of the assertion utilities have corresponding packages that test whether array elements are of the given data type:

<!-- <toc pattern="is-+(array|boolean|date-object|function|string|nan|number|object|regexp|symbol|null|undefined)-array" > -->

<div class="namespace-toc">

-   <span class="signature">[`isArrayArray( value )`][@stdlib/assert/is-array-array]</span><span class="delimiter">: </span><span class="description">test if a value is an array of arrays.</span>
-   <span class="signature">[`isBooleanArray( value )`][@stdlib/assert/is-boolean-array]</span><span class="delimiter">: </span><span class="description">test if a value is an array-like object of booleans.</span>
-   <span class="signature">[`isDateObjectArray( value )`][@stdlib/assert/is-date-object-array]</span><span class="delimiter">: </span><span class="description">test if a value is an array-like object containing only Date objects.</span>
-   <span class="signature">[`isFunctionArray( value )`][@stdlib/assert/is-function-array]</span><span class="delimiter">: </span><span class="description">test if a value is an array-like object containing only functions.</span>
-   <span class="signature">[`isNaNArray( value )`][@stdlib/assert/is-nan-array]</span><span class="delimiter">: </span><span class="description">test if a value is an array-like object containing only NaN values.</span>
-   <span class="signature">[`isNullArray( value )`][@stdlib/assert/is-null-array]</span><span class="delimiter">: </span><span class="description">test if a value is an array-like object containing only null values.</span>
-   <span class="signature">[`isNumberArray( value )`][@stdlib/assert/is-number-array]</span><span class="delimiter">: </span><span class="description">test if a value is an array-like object of numbers.</span>
-   <span class="signature">[`isObjectArray( value )`][@stdlib/assert/is-object-array]</span><span class="delimiter">: </span><span class="description">test if a value is an array-like object containing only objects.</span>
-   <span class="signature">[`isStringArray( value )`][@stdlib/assert/is-string-array]</span><span class="delimiter">: </span><span class="description">test if a value is an array of strings.</span>
-   <span class="signature">[`isSymbolArray( value )`][@stdlib/assert/is-symbol-array]</span><span class="delimiter">: </span><span class="description">test if a value is an array-like object containing only symbols.</span>

</div>

<!-- </toc> -->

Where applicable, similar to the assertion utilities for built-in data types, array assertion utilities provides methods for testing for an array of primitives or objects.

<!-- eslint-disable no-new-wrappers -->

```javascript
var isStringArray = require( '@stdlib/assert/is-string-array' );

var bool = isStringArray( [ 'hello', 'world' ] );
// returns true

bool = isStringArray.primitives( [ 'hello', 'world' ] );
// returns true

bool = isStringArray.objects( [ 'hello', 'world' ] );
// returns false

bool = isStringArray.objects( [ new String( 'hello' ), new String( 'world' ) ] );
// returns true
```

The namespace also contains utilities to test for numbers within a certain range or for numbers satisfying a particular "type":

<!-- <toc pattern="is-*+(number|integer)*" ignore="is-number-array" ignore="is-number" > -->

<div class="namespace-toc">

-   <span class="signature">[`isCubeNumber( value )`][@stdlib/assert/is-cube-number]</span><span class="delimiter">: </span><span class="description">test if a value is a cube number.</span>
-   <span class="signature">[`isIntegerArray( value )`][@stdlib/assert/is-integer-array]</span><span class="delimiter">: </span><span class="description">test if a value is an array-like object containing only integers.</span>
-   <span class="signature">[`isInteger( value )`][@stdlib/assert/is-integer]</span><span class="delimiter">: </span><span class="description">test if a value is a number having an integer value.</span>
-   <span class="signature">[`isNegativeIntegerArray( value )`][@stdlib/assert/is-negative-integer-array]</span><span class="delimiter">: </span><span class="description">test if a value is an array-like object containing only negative integers.</span>
-   <span class="signature">[`isNegativeInteger( value )`][@stdlib/assert/is-negative-integer]</span><span class="delimiter">: </span><span class="description">test if a value is a number having a negative integer value.</span>
-   <span class="signature">[`isNegativeNumberArray( value )`][@stdlib/assert/is-negative-number-array]</span><span class="delimiter">: </span><span class="description">test if a value is an array-like object containing only negative numbers.</span>
-   <span class="signature">[`isNegativeNumber( value )`][@stdlib/assert/is-negative-number]</span><span class="delimiter">: </span><span class="description">test if a value is a number having a negative value.</span>
-   <span class="signature">[`isNonNegativeIntegerArray( value )`][@stdlib/assert/is-nonnegative-integer-array]</span><span class="delimiter">: </span><span class="description">test if a value is an array-like object containing only nonnegative integers.</span>
-   <span class="signature">[`isNonNegativeInteger( value )`][@stdlib/assert/is-nonnegative-integer]</span><span class="delimiter">: </span><span class="description">test if a value is a number having a nonnegative integer value.</span>
-   <span class="signature">[`isNonNegativeNumberArray( value )`][@stdlib/assert/is-nonnegative-number-array]</span><span class="delimiter">: </span><span class="description">test if a value is an array-like object containing only nonnegative numbers.</span>
-   <span class="signature">[`isNonNegativeNumber( value )`][@stdlib/assert/is-nonnegative-number]</span><span class="delimiter">: </span><span class="description">test if a value is a number having a nonnegative value.</span>
-   <span class="signature">[`isNonPositiveIntegerArray( value )`][@stdlib/assert/is-nonpositive-integer-array]</span><span class="delimiter">: </span><span class="description">test if a value is an array-like object containing only nonpositive integers.</span>
-   <span class="signature">[`isNonPositiveInteger( value )`][@stdlib/assert/is-nonpositive-integer]</span><span class="delimiter">: </span><span class="description">test if a value is a number having a nonpositive integer value.</span>
-   <span class="signature">[`isNonPositiveNumberArray( value )`][@stdlib/assert/is-nonpositive-number-array]</span><span class="delimiter">: </span><span class="description">test if a value is an array-like object containing only nonpositive numbers.</span>
-   <span class="signature">[`isNonPositiveNumber( value )`][@stdlib/assert/is-nonpositive-number]</span><span class="delimiter">: </span><span class="description">test if a value is a number having a nonpositive value.</span>
-   <span class="signature">[`isPositiveIntegerArray( value )`][@stdlib/assert/is-positive-integer-array]</span><span class="delimiter">: </span><span class="description">test if a value is an array-like object containing only positive integers.</span>
-   <span class="signature">[`isPositiveInteger( value )`][@stdlib/assert/is-positive-integer]</span><span class="delimiter">: </span><span class="description">test if a value is a number having a positive integer value.</span>
-   <span class="signature">[`isPositiveNumberArray( value )`][@stdlib/assert/is-positive-number-array]</span><span class="delimiter">: </span><span class="description">test if a value is an array-like object containing only positive numbers.</span>
-   <span class="signature">[`isPositiveNumber( value )`][@stdlib/assert/is-positive-number]</span><span class="delimiter">: </span><span class="description">test if a value is a number having a positive value.</span>
-   <span class="signature">[`isSafeIntegerArray( value )`][@stdlib/assert/is-safe-integer-array]</span><span class="delimiter">: </span><span class="description">test if a value is an array-like object containing only safe integers.</span>
-   <span class="signature">[`isSafeInteger( value )`][@stdlib/assert/is-safe-integer]</span><span class="delimiter">: </span><span class="description">test if a value is a number having a safe integer value.</span>
-   <span class="signature">[`isSquareNumber( value )`][@stdlib/assert/is-square-number]</span><span class="delimiter">: </span><span class="description">test if a value is a square number.</span>
-   <span class="signature">[`isSquareTriangularNumber( value )`][@stdlib/assert/is-square-triangular-number]</span><span class="delimiter">: </span><span class="description">test if a value is a square triangular number.</span>
-   <span class="signature">[`isTriangularNumber( value )`][@stdlib/assert/is-triangular-number]</span><span class="delimiter">: </span><span class="description">test if a value is a triangular number.</span>

</div>

<!-- </toc> -->

The namespace provides utilities for validating typed arrays:

<!-- <toc pattern="is-+(int8|int16|int32|uint8clamped|uint8|uint16|uint32|float32|float64)array"> -->

<div class="namespace-toc">

-   <span class="signature">[`isFloat32Array( value )`][@stdlib/assert/is-float32array]</span><span class="delimiter">: </span><span class="description">test if a value is a Float32Array.</span>
-   <span class="signature">[`isFloat64Array( value )`][@stdlib/assert/is-float64array]</span><span class="delimiter">: </span><span class="description">test if a value is a Float64Array.</span>
-   <span class="signature">[`isInt16Array( value )`][@stdlib/assert/is-int16array]</span><span class="delimiter">: </span><span class="description">test if a value is an Int16Array.</span>
-   <span class="signature">[`isInt32Array( value )`][@stdlib/assert/is-int32array]</span><span class="delimiter">: </span><span class="description">test if a value is an Int32Array.</span>
-   <span class="signature">[`isInt8Array( value )`][@stdlib/assert/is-int8array]</span><span class="delimiter">: </span><span class="description">test if a value is an Int8Array.</span>
-   <span class="signature">[`isUint16Array( value )`][@stdlib/assert/is-uint16array]</span><span class="delimiter">: </span><span class="description">test if a value is a Uint16Array.</span>
-   <span class="signature">[`isUint32Array( value )`][@stdlib/assert/is-uint32array]</span><span class="delimiter">: </span><span class="description">test if a value is a Uint32Array.</span>
-   <span class="signature">[`isUint8Array( value )`][@stdlib/assert/is-uint8array]</span><span class="delimiter">: </span><span class="description">test if a value is a Uint8Array.</span>
-   <span class="signature">[`isUint8ClampedArray( value )`][@stdlib/assert/is-uint8clampedarray]</span><span class="delimiter">: </span><span class="description">test if a value is a Uint8ClampedArray.</span>

</div>

<!-- </toc> -->

The namespace includes utilities for validating `ndarray`s (n-dimensional arrays).

<!-- <toc keywords="+ndarray" > -->

<div class="namespace-toc">

-   <span class="signature">[`isCentrosymmetricMatrix( value )`][@stdlib/assert/is-centrosymmetric-matrix]</span><span class="delimiter">: </span><span class="description">test if a value is a centrosymmetric matrix.</span>
-   <span class="signature">[`isComplex128MatrixLike( value )`][@stdlib/assert/is-complex128matrix-like]</span><span class="delimiter">: </span><span class="description">test if a value is a 2-dimensional ndarray-like object containing double-precision complex floating-point numbers.</span>
-   <span class="signature">[`isComplex128ndarrayLike( value )`][@stdlib/assert/is-complex128ndarray-like]</span><span class="delimiter">: </span><span class="description">test if a value is an ndarray-like object containing double-precision complex floating-point numbers.</span>
-   <span class="signature">[`isComplex128VectorLike( value )`][@stdlib/assert/is-complex128vector-like]</span><span class="delimiter">: </span><span class="description">test if a value is a 1-dimensional ndarray-like object containing double-precision complex floating-point numbers.</span>
-   <span class="signature">[`isComplex64MatrixLike( value )`][@stdlib/assert/is-complex64matrix-like]</span><span class="delimiter">: </span><span class="description">test if a value is a 2-dimensional ndarray-like object containing single-precision complex floating-point numbers.</span>
-   <span class="signature">[`isComplex64ndarrayLike( value )`][@stdlib/assert/is-complex64ndarray-like]</span><span class="delimiter">: </span><span class="description">test if a value is an ndarray-like object containing single-precision complex floating-point numbers.</span>
-   <span class="signature">[`isComplex64VectorLike( value )`][@stdlib/assert/is-complex64vector-like]</span><span class="delimiter">: </span><span class="description">test if a value is a 1-dimensional ndarray-like object containing single-precision complex floating-point numbers.</span>
-   <span class="signature">[`isFloat32MatrixLike( value )`][@stdlib/assert/is-float32matrix-like]</span><span class="delimiter">: </span><span class="description">test if a value is a 2-dimensional ndarray-like object containing single-precision floating-point numbers.</span>
-   <span class="signature">[`isFloat32ndarrayLike( value )`][@stdlib/assert/is-float32ndarray-like]</span><span class="delimiter">: </span><span class="description">test if a value is an ndarray-like object containing single-precision floating-point numbers.</span>
-   <span class="signature">[`isFloat32VectorLike( value )`][@stdlib/assert/is-float32vector-like]</span><span class="delimiter">: </span><span class="description">test if a value is a 1-dimensional ndarray-like object containing single-precision floating-point numbers.</span>
-   <span class="signature">[`isFloat64MatrixLike( value )`][@stdlib/assert/is-float64matrix-like]</span><span class="delimiter">: </span><span class="description">test if a value is a 2-dimensional ndarray-like object containing double-precision floating-point numbers.</span>
-   <span class="signature">[`isFloat64ndarrayLike( value )`][@stdlib/assert/is-float64ndarray-like]</span><span class="delimiter">: </span><span class="description">test if a value is an ndarray-like object containing double-precision floating-point numbers.</span>
-   <span class="signature">[`isFloat64VectorLike( value )`][@stdlib/assert/is-float64vector-like]</span><span class="delimiter">: </span><span class="description">test if a value is a 1-dimensional ndarray-like object containing double-precision floating-point numbers.</span>
-   <span class="signature">[`isMatrixLike( value )`][@stdlib/assert/is-matrix-like]</span><span class="delimiter">: </span><span class="description">test if a value is 2-dimensional ndarray-like object.</span>
-   <span class="signature">[`isndarrayLikeWithDataType( value, dtype )`][@stdlib/assert/is-ndarray-like-with-data-type]</span><span class="delimiter">: </span><span class="description">test if a value is an ndarray-like object having a specified data type.</span>
-   <span class="signature">[`isndarrayLike( value )`][@stdlib/assert/is-ndarray-like]</span><span class="delimiter">: </span><span class="description">test if a value is ndarray-like.</span>
-   <span class="signature">[`isNonSymmetricMatrix( value )`][@stdlib/assert/is-nonsymmetric-matrix]</span><span class="delimiter">: </span><span class="description">test if a value is a non-symmetric matrix.</span>
-   <span class="signature">[`isPersymmetricMatrix( value )`][@stdlib/assert/is-persymmetric-matrix]</span><span class="delimiter">: </span><span class="description">test if a value is a persymmetric matrix.</span>
-   <span class="signature">[`isSkewCentrosymmetricMatrix( value )`][@stdlib/assert/is-skew-centrosymmetric-matrix]</span><span class="delimiter">: </span><span class="description">test if a value is a skew-centrosymmetric matrix.</span>
-   <span class="signature">[`isSkewPersymmetricMatrix( value )`][@stdlib/assert/is-skew-persymmetric-matrix]</span><span class="delimiter">: </span><span class="description">test if a value is a skew-persymmetric matrix.</span>
-   <span class="signature">[`isSkewSymmetricMatrix( value )`][@stdlib/assert/is-skew-symmetric-matrix]</span><span class="delimiter">: </span><span class="description">test if a value is a skew-symmetric matrix.</span>
-   <span class="signature">[`isSquareMatrix( value )`][@stdlib/assert/is-square-matrix]</span><span class="delimiter">: </span><span class="description">test if a value is a 2-dimensional ndarray-like object having equal dimensions.</span>
-   <span class="signature">[`isSymmetricMatrix( value )`][@stdlib/assert/is-symmetric-matrix]</span><span class="delimiter">: </span><span class="description">test if a value is a symmetric matrix.</span>
-   <span class="signature">[`isVectorLike( value )`][@stdlib/assert/is-vector-like]</span><span class="delimiter">: </span><span class="description">test if a value is a 1-dimensional ndarray-like object.</span>

</div>

<!-- </toc> -->

The namespace includes utilities for validating complex numbers and arrays of complex numbers:

<!-- <toc pattern="is-complex*" > -->

<div class="namespace-toc">

-   <span class="signature">[`isComplexLike( value )`][@stdlib/assert/is-complex-like]</span><span class="delimiter">: </span><span class="description">test if a value is a complex number-like object.</span>
-   <span class="signature">[`isComplexTypedArrayLike( value )`][@stdlib/assert/is-complex-typed-array-like]</span><span class="delimiter">: </span><span class="description">test if a value is complex-typed-array-like.</span>
-   <span class="signature">[`isComplexTypedArray( value )`][@stdlib/assert/is-complex-typed-array]</span><span class="delimiter">: </span><span class="description">test if a value is a complex typed array.</span>
-   <span class="signature">[`isComplex( value )`][@stdlib/assert/is-complex]</span><span class="delimiter">: </span><span class="description">test if a value is a 64-bit or 128-bit complex number.</span>
-   <span class="signature">[`isComplex128( value )`][@stdlib/assert/is-complex128]</span><span class="delimiter">: </span><span class="description">test if a value is a 128-bit complex number.</span>
-   <span class="signature">[`isComplex128Array( value )`][@stdlib/assert/is-complex128array]</span><span class="delimiter">: </span><span class="description">test if a value is a Complex128Array.</span>
-   <span class="signature">[`isComplex64( value )`][@stdlib/assert/is-complex64]</span><span class="delimiter">: </span><span class="description">test if a value is a 64-bit complex number.</span>
-   <span class="signature">[`isComplex64Array( value )`][@stdlib/assert/is-complex64array]</span><span class="delimiter">: </span><span class="description">test if a value is a Complex64Array.</span>

</div>

<!-- </toc> -->

The namespace includes utilities for validating other special arrays or buffers:

<!-- <toc pattern="is-*array*" ignore="is-+(int8|int16|int32|uint8clamped|uint8|uint16|uint32|float32|float64)array" ignore="is-*+(number|integer)*" ignore="is-+(array|boolean|date-object|function|string|nan|number|object|primitive|regexp|symbol|null|undefined)-array" ignore="is-array" keywords="-ndarray" > -->

<div class="namespace-toc">

-   <span class="signature">[`isAccessorArray( value )`][@stdlib/assert/is-accessor-array]</span><span class="delimiter">: </span><span class="description">test if a value is an array-like object supporting the accessor (get/set) protocol.</span>
-   <span class="signature">[`isArrayLength( value )`][@stdlib/assert/is-array-length]</span><span class="delimiter">: </span><span class="description">test if a value is a valid array length.</span>
-   <span class="signature">[`isArrayLikeObject( value )`][@stdlib/assert/is-array-like-object]</span><span class="delimiter">: </span><span class="description">test if a value is an array-like object.</span>
-   <span class="signature">[`isArrayLike( value )`][@stdlib/assert/is-array-like]</span><span class="delimiter">: </span><span class="description">test if a value is array-like.</span>
-   <span class="signature">[`isArrayBufferView( value )`][@stdlib/assert/is-arraybuffer-view]</span><span class="delimiter">: </span><span class="description">test if a value is an ArrayBuffer view.</span>
-   <span class="signature">[`isArrayBuffer( value )`][@stdlib/assert/is-arraybuffer]</span><span class="delimiter">: </span><span class="description">test if a value is an ArrayBuffer.</span>
-   <span class="signature">[`isBetweenArray( value, a, b[, left, right] )`][@stdlib/assert/is-between-array]</span><span class="delimiter">: </span><span class="description">test if a value is an array-like object where every element is between two values.</span>
-   <span class="signature">[`isBigInt64Array( value )`][@stdlib/assert/is-bigint64array]</span><span class="delimiter">: </span><span class="description">test if a value is a BigInt64Array.</span>
-   <span class="signature">[`isBigUint64Array( value )`][@stdlib/assert/is-biguint64array]</span><span class="delimiter">: </span><span class="description">test if a value is a BigUint64Array.</span>
-   <span class="signature">[`isCircularArray( value )`][@stdlib/assert/is-circular-array]</span><span class="delimiter">: </span><span class="description">test if a value is an array containing a circular reference.</span>
-   <span class="signature">[`isEmptyArrayLikeObject( value )`][@stdlib/assert/is-empty-array-like-object]</span><span class="delimiter">: </span><span class="description">test if a value is an empty array-like object.</span>
-   <span class="signature">[`isEmptyArray( value )`][@stdlib/assert/is-empty-array]</span><span class="delimiter">: </span><span class="description">test if a value is an empty array.</span>
-   <span class="signature">[`isEqualArray( v1, v2 )`][@stdlib/assert/is-equal-array]</span><span class="delimiter">: </span><span class="description">test if two arguments are both generic arrays and have equal values.</span>
-   <span class="signature">[`isEqualBooleanArray( v1, v2 )`][@stdlib/assert/is-equal-booleanarray]</span><span class="delimiter">: </span><span class="description">test if two arguments are both BooleanArrays and have equal values.</span>
-   <span class="signature">[`isEqualInt16Array( v1, v2 )`][@stdlib/assert/is-equal-int16array]</span><span class="delimiter">: </span><span class="description">test if two arguments are both Int16Arrays and have equal values.</span>
-   <span class="signature">[`isEqualInt32Array( v1, v2 )`][@stdlib/assert/is-equal-int32array]</span><span class="delimiter">: </span><span class="description">test if two arguments are both Int32Arrays and have equal values.</span>
-   <span class="signature">[`isEqualInt8Array( v1, v2 )`][@stdlib/assert/is-equal-int8array]</span><span class="delimiter">: </span><span class="description">test if two arguments are both Int8Arrays and have equal values.</span>
-   <span class="signature">[`isEqualUint16Array( v1, v2 )`][@stdlib/assert/is-equal-uint16array]</span><span class="delimiter">: </span><span class="description">test if two arguments are both Uint16Arrays and have equal values.</span>
-   <span class="signature">[`isEqualUint32Array( v1, v2 )`][@stdlib/assert/is-equal-uint32array]</span><span class="delimiter">: </span><span class="description">test if two arguments are both Uint32Arrays and have equal values.</span>
-   <span class="signature">[`isEqualUint8Array( v1, v2 )`][@stdlib/assert/is-equal-uint8array]</span><span class="delimiter">: </span><span class="description">test if two arguments are both Uint8Arrays and have equal values.</span>
-   <span class="signature">[`isEqualUint8ClampedArray( v1, v2 )`][@stdlib/assert/is-equal-uint8clampedarray]</span><span class="delimiter">: </span><span class="description">test if two arguments are both Uint8ClampedArrays and have equal values.</span>
-   <span class="signature">[`isFalsyArray( value )`][@stdlib/assert/is-falsy-array]</span><span class="delimiter">: </span><span class="description">test if a value is an array-like object containing only falsy values.</span>
-   <span class="signature">[`isFiniteArray( value )`][@stdlib/assert/is-finite-array]</span><span class="delimiter">: </span><span class="description">test if a value is an array-like object containing only finite numbers.</span>
-   <span class="signature">[`isNumericArray( value )`][@stdlib/assert/is-numeric-array]</span><span class="delimiter">: </span><span class="description">test if a value is a numeric array.</span>
-   <span class="signature">[`isPlainObjectArray( value )`][@stdlib/assert/is-plain-object-array]</span><span class="delimiter">: </span><span class="description">test if a value is an array-like object containing only plain objects.</span>
-   <span class="signature">[`isProbabilityArray( value )`][@stdlib/assert/is-probability-array]</span><span class="delimiter">: </span><span class="description">test if a value is an array-like object containing only probabilities.</span>
-   <span class="signature">[`isSameAccessorArray( v1, v2 )`][@stdlib/assert/is-same-accessor-array]</span><span class="delimiter">: </span><span class="description">test if two arguments are both accessor arrays and have the same values.</span>
-   <span class="signature">[`isSameArrayLikeObject( v1, v2 )`][@stdlib/assert/is-same-array-like-object]</span><span class="delimiter">: </span><span class="description">test if two arguments are both array-like objects and have the same values.</span>
-   <span class="signature">[`isSameArrayLike( v1, v2 )`][@stdlib/assert/is-same-array-like]</span><span class="delimiter">: </span><span class="description">test if two arguments are both array-like and have the same values.</span>
-   <span class="signature">[`isSameArray( v1, v2 )`][@stdlib/assert/is-same-array]</span><span class="delimiter">: </span><span class="description">test if two arguments are both generic arrays and have the same values.</span>
-   <span class="signature">[`isSameComplex128Array( v1, v2 )`][@stdlib/assert/is-same-complex128array]</span><span class="delimiter">: </span><span class="description">test if two arguments are both Complex128Arrays and have the same values.</span>
-   <span class="signature">[`isSameComplex64Array( v1, v2 )`][@stdlib/assert/is-same-complex64array]</span><span class="delimiter">: </span><span class="description">test if two arguments are both Complex64Arrays and have the same values.</span>
-   <span class="signature">[`isSameFloat32Array( v1, v2 )`][@stdlib/assert/is-same-float32array]</span><span class="delimiter">: </span><span class="description">test if two arguments are both Float32Arrays and have the same values.</span>
-   <span class="signature">[`isSameFloat64Array( v1, v2 )`][@stdlib/assert/is-same-float64array]</span><span class="delimiter">: </span><span class="description">test if two arguments are both Float64Arrays and have the same values.</span>
-   <span class="signature">[`isSameTypedArrayLike( v1, v2 )`][@stdlib/assert/is-same-typed-array-like]</span><span class="delimiter">: </span><span class="description">test if two arguments are both typed-array-like objects and have the same values.</span>
-   <span class="signature">[`isSharedArrayBuffer( value )`][@stdlib/assert/is-sharedarraybuffer]</span><span class="delimiter">: </span><span class="description">test if a value is a SharedArrayBuffer.</span>
-   <span class="signature">[`isTruthyArray( value )`][@stdlib/assert/is-truthy-array]</span><span class="delimiter">: </span><span class="description">test if a value is an array-like object containing only truthy values.</span>
-   <span class="signature">[`isTypedArrayLength( value )`][@stdlib/assert/is-typed-array-length]</span><span class="delimiter">: </span><span class="description">test if a value is a valid typed array length.</span>
-   <span class="signature">[`isTypedArrayLike( value )`][@stdlib/assert/is-typed-array-like]</span><span class="delimiter">: </span><span class="description">test if a value is typed-array-like.</span>
-   <span class="signature">[`isTypedArray( value )`][@stdlib/assert/is-typed-array]</span><span class="delimiter">: </span><span class="description">test if a value is a typed array.</span>
-   <span class="signature">[`isUnityProbabilityArray( value )`][@stdlib/assert/is-unity-probability-array]</span><span class="delimiter">: </span><span class="description">test if a value is an array of probabilities that sum to one.</span>

</div>

<!-- </toc> -->

To test for error objects, the namespace includes the following utilities:

<!-- <toc pattern="is-*error*" > -->

<div class="namespace-toc">

-   <span class="signature">[`isError( value )`][@stdlib/assert/is-error]</span><span class="delimiter">: </span><span class="description">test if a value is an Error object.</span>
-   <span class="signature">[`isEvalError( value )`][@stdlib/assert/is-eval-error]</span><span class="delimiter">: </span><span class="description">test if a value is an EvalError object.</span>
-   <span class="signature">[`isRangeError( value )`][@stdlib/assert/is-range-error]</span><span class="delimiter">: </span><span class="description">test if a value is a RangeError object.</span>
-   <span class="signature">[`isReferenceError( value )`][@stdlib/assert/is-reference-error]</span><span class="delimiter">: </span><span class="description">test if a value is a ReferenceError object.</span>
-   <span class="signature">[`isSyntaxError( value )`][@stdlib/assert/is-syntax-error]</span><span class="delimiter">: </span><span class="description">test if a value is a SyntaxError object.</span>
-   <span class="signature">[`isTypeError( value )`][@stdlib/assert/is-type-error]</span><span class="delimiter">: </span><span class="description">test if a value is a TypeError object.</span>
-   <span class="signature">[`isURIError( value )`][@stdlib/assert/is-uri-error]</span><span class="delimiter">: </span><span class="description">test if a value is a URIError object.</span>

</div>

<!-- </toc> -->

The namespace exposes the following constants concerning the current running process:

<!-- <toc pattern="is-+(browser|darwin|electron|electron-main|electron-renderer|little-endian|big-endian|node|web-worker|windows|docker|mobile|touch-device)" > -->

<div class="namespace-toc">

-   <span class="signature">[`IS_BIG_ENDIAN`][@stdlib/assert/is-big-endian]</span><span class="delimiter">: </span><span class="description">check if an environment is big endian.</span>
-   <span class="signature">[`IS_BROWSER`][@stdlib/assert/is-browser]</span><span class="delimiter">: </span><span class="description">check if the runtime is a web browser.</span>
-   <span class="signature">[`IS_DARWIN`][@stdlib/assert/is-darwin]</span><span class="delimiter">: </span><span class="description">boolean indicating if the current process is running on Darwin.</span>
-   <span class="signature">[`IS_DOCKER`][@stdlib/assert/is-docker]</span><span class="delimiter">: </span><span class="description">check if the process is running in a Docker container.</span>
-   <span class="signature">[`IS_ELECTRON_MAIN`][@stdlib/assert/is-electron-main]</span><span class="delimiter">: </span><span class="description">check if the runtime is the main Electron process.</span>
-   <span class="signature">[`IS_ELECTRON_RENDERER`][@stdlib/assert/is-electron-renderer]</span><span class="delimiter">: </span><span class="description">check if the runtime is the Electron renderer process.</span>
-   <span class="signature">[`IS_ELECTRON`][@stdlib/assert/is-electron]</span><span class="delimiter">: </span><span class="description">check if the runtime is Electron.</span>
-   <span class="signature">[`IS_LITTLE_ENDIAN`][@stdlib/assert/is-little-endian]</span><span class="delimiter">: </span><span class="description">check if an environment is little endian.</span>
-   <span class="signature">[`IS_MOBILE`][@stdlib/assert/is-mobile]</span><span class="delimiter">: </span><span class="description">check if the current environment is a mobile device.</span>
-   <span class="signature">[`IS_NODE`][@stdlib/assert/is-node]</span><span class="delimiter">: </span><span class="description">check if the runtime is Node.js.</span>
-   <span class="signature">[`IS_TOUCH_DEVICE`][@stdlib/assert/is-touch-device]</span><span class="delimiter">: </span><span class="description">check if the current environment is a touch device.</span>
-   <span class="signature">[`IS_WEB_WORKER`][@stdlib/assert/is-web-worker]</span><span class="delimiter">: </span><span class="description">check if the runtime is a web worker.</span>
-   <span class="signature">[`IS_WINDOWS`][@stdlib/assert/is-windows]</span><span class="delimiter">: </span><span class="description">boolean indicating if the current process is running on Windows.</span>

</div>

<!-- </toc> -->

To test whether a runtime environment supports certain features, the namespace includes the following utilities:

<!-- <toc pattern="has-*-support" > -->

<div class="namespace-toc">

-   <span class="signature">[`hasArrayBufferSupport()`][@stdlib/assert/has-arraybuffer-support]</span><span class="delimiter">: </span><span class="description">detect native `ArrayBuffer` support.</span>
-   <span class="signature">[`hasArrowFunctionSupport()`][@stdlib/assert/has-arrow-function-support]</span><span class="delimiter">: </span><span class="description">detect native `arrow function` support.</span>
-   <span class="signature">[`hasAsyncAwaitSupport()`][@stdlib/assert/has-async-await-support]</span><span class="delimiter">: </span><span class="description">detect native `async`/`await` support.</span>
-   <span class="signature">[`hasAsyncIteratorSymbolSupport()`][@stdlib/assert/has-async-iterator-symbol-support]</span><span class="delimiter">: </span><span class="description">detect native `Symbol.asyncIterator` support.</span>
-   <span class="signature">[`hasAtobSupport()`][@stdlib/assert/has-atob-support]</span><span class="delimiter">: </span><span class="description">detect native `atob` support.</span>
-   <span class="signature">[`hasBigIntSupport()`][@stdlib/assert/has-bigint-support]</span><span class="delimiter">: </span><span class="description">detect native `BigInt` support.</span>
-   <span class="signature">[`hasBigInt64ArraySupport()`][@stdlib/assert/has-bigint64array-support]</span><span class="delimiter">: </span><span class="description">detect native `BigInt64Array` support.</span>
-   <span class="signature">[`hasBigUint64ArraySupport()`][@stdlib/assert/has-biguint64array-support]</span><span class="delimiter">: </span><span class="description">detect native `BigUint64Array` support.</span>
-   <span class="signature">[`hasBtoaSupport()`][@stdlib/assert/has-btoa-support]</span><span class="delimiter">: </span><span class="description">detect native `btoa` support.</span>
-   <span class="signature">[`hasClassSupport()`][@stdlib/assert/has-class-support]</span><span class="delimiter">: </span><span class="description">detect native `class` support.</span>
-   <span class="signature">[`hasDataViewSupport()`][@stdlib/assert/has-dataview-support]</span><span class="delimiter">: </span><span class="description">detect native `DataView` support.</span>
-   <span class="signature">[`hasDefinePropertiesSupport()`][@stdlib/assert/has-define-properties-support]</span><span class="delimiter">: </span><span class="description">detect `Object.defineProperties` support.</span>
-   <span class="signature">[`hasDefinePropertySupport()`][@stdlib/assert/has-define-property-support]</span><span class="delimiter">: </span><span class="description">detect `Object.defineProperty` support.</span>
-   <span class="signature">[`hasFloat32ArraySupport()`][@stdlib/assert/has-float32array-support]</span><span class="delimiter">: </span><span class="description">detect native `Float32Array` support.</span>
-   <span class="signature">[`hasFloat64ArraySupport()`][@stdlib/assert/has-float64array-support]</span><span class="delimiter">: </span><span class="description">detect native `Float64Array` support.</span>
-   <span class="signature">[`hasFunctionNameSupport()`][@stdlib/assert/has-function-name-support]</span><span class="delimiter">: </span><span class="description">detect native function `name` support.</span>
-   <span class="signature">[`hasGeneratorSupport()`][@stdlib/assert/has-generator-support]</span><span class="delimiter">: </span><span class="description">detect native `generator function` support.</span>
-   <span class="signature">[`hasGlobalThisSupport()`][@stdlib/assert/has-globalthis-support]</span><span class="delimiter">: </span><span class="description">detect `globalThis` support.</span>
-   <span class="signature">[`hasInt16ArraySupport()`][@stdlib/assert/has-int16array-support]</span><span class="delimiter">: </span><span class="description">detect native `Int16Array` support.</span>
-   <span class="signature">[`hasInt32ArraySupport()`][@stdlib/assert/has-int32array-support]</span><span class="delimiter">: </span><span class="description">detect native `Int32Array` support.</span>
-   <span class="signature">[`hasInt8ArraySupport()`][@stdlib/assert/has-int8array-support]</span><span class="delimiter">: </span><span class="description">detect native `Int8Array` support.</span>
-   <span class="signature">[`hasIteratorSymbolSupport()`][@stdlib/assert/has-iterator-symbol-support]</span><span class="delimiter">: </span><span class="description">detect native `Symbol.iterator` support.</span>
-   <span class="signature">[`hasMapSupport()`][@stdlib/assert/has-map-support]</span><span class="delimiter">: </span><span class="description">detect native `Map` support.</span>
-   <span class="signature">[`hasNodeBufferSupport()`][@stdlib/assert/has-node-buffer-support]</span><span class="delimiter">: </span><span class="description">detect native `Buffer` support.</span>
-   <span class="signature">[`hasProxySupport()`][@stdlib/assert/has-proxy-support]</span><span class="delimiter">: </span><span class="description">detect native `Proxy` support.</span>
-   <span class="signature">[`hasSetSupport()`][@stdlib/assert/has-set-support]</span><span class="delimiter">: </span><span class="description">detect native `Set` support.</span>
-   <span class="signature">[`hasSharedArrayBufferSupport()`][@stdlib/assert/has-sharedarraybuffer-support]</span><span class="delimiter">: </span><span class="description">detect native `SharedArrayBuffer` support.</span>
-   <span class="signature">[`hasSymbolSupport()`][@stdlib/assert/has-symbol-support]</span><span class="delimiter">: </span><span class="description">detect native `Symbol` support.</span>
-   <span class="signature">[`hasToStringTagSupport()`][@stdlib/assert/has-tostringtag-support]</span><span class="delimiter">: </span><span class="description">detect native `Symbol.toStringTag` support.</span>
-   <span class="signature">[`hasUint16ArraySupport()`][@stdlib/assert/has-uint16array-support]</span><span class="delimiter">: </span><span class="description">detect native `Uint16Array` support.</span>
-   <span class="signature">[`hasUint32ArraySupport()`][@stdlib/assert/has-uint32array-support]</span><span class="delimiter">: </span><span class="description">detect native `Uint32Array` support.</span>
-   <span class="signature">[`hasUint8ArraySupport()`][@stdlib/assert/has-uint8array-support]</span><span class="delimiter">: </span><span class="description">detect native `Uint8Array` support.</span>
-   <span class="signature">[`hasUint8ClampedArraySupport()`][@stdlib/assert/has-uint8clampedarray-support]</span><span class="delimiter">: </span><span class="description">detect native `Uint8ClampedArray` support.</span>
-   <span class="signature">[`hasWebAssemblySupport()`][@stdlib/assert/has-wasm-support]</span><span class="delimiter">: </span><span class="description">detect native WebAssembly support.</span>
-   <span class="signature">[`hasWeakMapSupport()`][@stdlib/assert/has-weakmap-support]</span><span class="delimiter">: </span><span class="description">detect native `WeakMap` support.</span>
-   <span class="signature">[`hasWeakSetSupport()`][@stdlib/assert/has-weakset-support]</span><span class="delimiter">: </span><span class="description">detect native `WeakSet` support.</span>

</div>

<!-- </toc> -->

The remaining namespace utilities are as follows:

<!-- <toc ignore="is-+(array|boolean|date-object|function|string|symbol|nan|null|number|object|regexp|symbol|undefined)" ignore="is-*+(number|integer)*" ignore="is-*array*" ignore="is-*error*" ignore="is-+(browser|darwin|electron|electron-main|electron-renderer|little-endian|node|web-worker|windows)" ignore="has-*-support" keywords="-ndarray" > -->

<div class="namespace-toc">

-   <span class="signature">[`contains( value, searchValue[, position] )`][@stdlib/assert/contains]</span><span class="delimiter">: </span><span class="description">test if an array-like value contains a search value.</span>
-   <span class="signature">[`deepEqual( a, b )`][@stdlib/assert/deep-equal]</span><span class="delimiter">: </span><span class="description">test for deep equality between two values.</span>
-   <span class="signature">[`deepHasOwnProp( value, path[, options] )`][@stdlib/assert/deep-has-own-property]</span><span class="delimiter">: </span><span class="description">test whether an object contains a nested key path.</span>
-   <span class="signature">[`deepHasProp( value, path[, options] )`][@stdlib/assert/deep-has-property]</span><span class="delimiter">: </span><span class="description">test whether an object contains a nested key path, either own or inherited.</span>
-   <span class="signature">[`hasOwnProp( value, property )`][@stdlib/assert/has-own-property]</span><span class="delimiter">: </span><span class="description">test if an object has a specified property.</span>
-   <span class="signature">[`hasProp( value, property )`][@stdlib/assert/has-property]</span><span class="delimiter">: </span><span class="description">test if an object has a specified property, either own or inherited.</span>
-   <span class="signature">[`hasUTF16SurrogatePairAt( string, position )`][@stdlib/assert/has-utf16-surrogate-pair-at]</span><span class="delimiter">: </span><span class="description">test if a position in a string marks the start of a UTF-16 surrogate pair.</span>
-   <span class="signature">[`instanceOf( value, constructor )`][@stdlib/assert/instance-of]</span><span class="delimiter">: </span><span class="description">test whether a value has in its prototype chain a specified constructor as a prototype property.</span>
-   <span class="signature">[`isAbsoluteHttpURI( value )`][@stdlib/assert/is-absolute-http-uri]</span><span class="delimiter">: </span><span class="description">test whether a value is an absolute HTTP(S) URI.</span>
-   <span class="signature">[`isAbsolutePath( value )`][@stdlib/assert/is-absolute-path]</span><span class="delimiter">: </span><span class="description">test if a value is an absolute path.</span>
-   <span class="signature">[`isAbsoluteURI( value )`][@stdlib/assert/is-absolute-uri]</span><span class="delimiter">: </span><span class="description">test whether a value is an absolute URI.</span>
-   <span class="signature">[`isAccessorPropertyIn( value, property )`][@stdlib/assert/is-accessor-property-in]</span><span class="delimiter">: </span><span class="description">test if an object's own or inherited property has an accessor descriptor.</span>
-   <span class="signature">[`isAccessorProperty( value, property )`][@stdlib/assert/is-accessor-property]</span><span class="delimiter">: </span><span class="description">test if an object's own property has an accessor descriptor.</span>
-   <span class="signature">[`isAlphagram( value )`][@stdlib/assert/is-alphagram]</span><span class="delimiter">: </span><span class="description">test if a value is an alphagram.</span>
-   <span class="signature">[`isAlphaNumeric( value )`][@stdlib/assert/is-alphanumeric]</span><span class="delimiter">: </span><span class="description">test whether a string contains only alphanumeric characters.</span>
-   <span class="signature">[`isAnagram( str, value )`][@stdlib/assert/is-anagram]</span><span class="delimiter">: </span><span class="description">test if a value is an anagram.</span>
-   <span class="signature">[`isArguments( value )`][@stdlib/assert/is-arguments]</span><span class="delimiter">: </span><span class="description">test if a value is an arguments object.</span>
-   <span class="signature">[`isArrowFunction( value )`][@stdlib/assert/is-arrow-function]</span><span class="delimiter">: </span><span class="description">test if a value is an `arrow function`.</span>
-   <span class="signature">[`isASCII( value )`][@stdlib/assert/is-ascii]</span><span class="delimiter">: </span><span class="description">test whether a character belongs to the ASCII character set and whether this is true for all characters in a provided string.</span>
-   <span class="signature">[`isBetween( value, a, b[, left, right] )`][@stdlib/assert/is-between]</span><span class="delimiter">: </span><span class="description">test if a value is between two values.</span>
-   <span class="signature">[`isBigInt( value )`][@stdlib/assert/is-bigint]</span><span class="delimiter">: </span><span class="description">test if a value is a BigInt.</span>
-   <span class="signature">[`isBinaryString( value )`][@stdlib/assert/is-binary-string]</span><span class="delimiter">: </span><span class="description">test if a value is a binary string.</span>
-   <span class="signature">[`isBlankString( value )`][@stdlib/assert/is-blank-string]</span><span class="delimiter">: </span><span class="description">test if a value is a blank string.</span>
-   <span class="signature">[`isBoxedPrimitive( value )`][@stdlib/assert/is-boxed-primitive]</span><span class="delimiter">: </span><span class="description">test if a value is a JavaScript boxed primitive.</span>
-   <span class="signature">[`isBuffer( value )`][@stdlib/assert/is-buffer]</span><span class="delimiter">: </span><span class="description">test if a value is a Buffer object.</span>
-   <span class="signature">[`isCamelcase( value )`][@stdlib/assert/is-camelcase]</span><span class="delimiter">: </span><span class="description">test if a value is a camelcase string.</span>
-   <span class="signature">[`isCapitalized( value )`][@stdlib/assert/is-capitalized]</span><span class="delimiter">: </span><span class="description">test if a value is a string having an uppercase first character.</span>
-   <span class="signature">[`isCircular( value )`][@stdlib/assert/is-circular]</span><span class="delimiter">: </span><span class="description">test if a value is a plain object containing a circular reference.</span>
-   <span class="signature">[`isCircular( value )`][@stdlib/assert/is-circular]</span><span class="delimiter">: </span><span class="description">test if an object-like value contains a circular reference.</span>
-   <span class="signature">[`isClass( value )`][@stdlib/assert/is-class]</span><span class="delimiter">: </span><span class="description">test if a value is a class.</span>
-   <span class="signature">[`isCollection( value )`][@stdlib/assert/is-collection]</span><span class="delimiter">: </span><span class="description">test if a value is a collection.</span>
-   <span class="signature">[`isComposite( value )`][@stdlib/assert/is-composite]</span><span class="delimiter">: </span><span class="description">test if a value is a composite number.</span>
-   <span class="signature">[`isConfigurablePropertyIn( value, property )`][@stdlib/assert/is-configurable-property-in]</span><span class="delimiter">: </span><span class="description">test if an object's own or inherited property is configurable.</span>
-   <span class="signature">[`isConfigurableProperty( value, property )`][@stdlib/assert/is-configurable-property]</span><span class="delimiter">: </span><span class="description">test if an object's own property is configurable.</span>
-   <span class="signature">[`isConstantcase( value )`][@stdlib/assert/is-constantcase]</span><span class="delimiter">: </span><span class="description">test if a value is a constantcase string.</span>
-   <span class="signature">[`isCurrentYear( value )`][@stdlib/assert/is-current-year]</span><span class="delimiter">: </span><span class="description">test if a value is the current year.</span>
-   <span class="signature">[`isDataPropertyIn( value, property )`][@stdlib/assert/is-data-property-in]</span><span class="delimiter">: </span><span class="description">test if an object's own or inherited property has a data descriptor.</span>
-   <span class="signature">[`isDataProperty( value, property )`][@stdlib/assert/is-data-property]</span><span class="delimiter">: </span><span class="description">test if an object's own property has a data descriptor.</span>
-   <span class="signature">[`isDataView( value )`][@stdlib/assert/is-dataview]</span><span class="delimiter">: </span><span class="description">test if a value is a DataView.</span>
-   <span class="signature">[`isDigitString( value )`][@stdlib/assert/is-digit-string]</span><span class="delimiter">: </span><span class="description">test whether a string contains only numeric digits.</span>
-   <span class="signature">[`isDomainName( value )`][@stdlib/assert/is-domain-name]</span><span class="delimiter">: </span><span class="description">test if a value is a domain name.</span>
-   <span class="signature">[`isDurationString( value )`][@stdlib/assert/is-duration-string]</span><span class="delimiter">: </span><span class="description">test if a value is a duration string.</span>
-   <span class="signature">[`isEmailAddress( value )`][@stdlib/assert/is-email-address]</span><span class="delimiter">: </span><span class="description">test if a value is an email address.</span>
-   <span class="signature">[`isEmptyCollection( value )`][@stdlib/assert/is-empty-collection]</span><span class="delimiter">: </span><span class="description">test if a value is an empty collection.</span>
-   <span class="signature">[`isEmptyObject( value )`][@stdlib/assert/is-empty-object]</span><span class="delimiter">: </span><span class="description">test if a value is an empty object.</span>
-   <span class="signature">[`isEmptyString( value )`][@stdlib/assert/is-empty-string]</span><span class="delimiter">: </span><span class="description">test if a value is an empty string.</span>
-   <span class="signature">[`isEnumerablePropertyIn( value, property )`][@stdlib/assert/is-enumerable-property-in]</span><span class="delimiter">: </span><span class="description">test if an object's own or inherited property is enumerable.</span>
-   <span class="signature">[`isEnumerableProperty( value, property )`][@stdlib/assert/is-enumerable-property]</span><span class="delimiter">: </span><span class="description">test if an object's own property is enumerable.</span>
-   <span class="signature">[`isEqualDateObject( d1, d2 )`][@stdlib/assert/is-equal-date-object]</span><span class="delimiter">: </span><span class="description">test if two values are [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) objects corresponding to the same date and time.</span>
-   <span class="signature">[`isEven( value )`][@stdlib/assert/is-even]</span><span class="delimiter">: </span><span class="description">test if a value is an even number.</span>
-   <span class="signature">[`isFalsy( value )`][@stdlib/assert/is-falsy]</span><span class="delimiter">: </span><span class="description">test if a value is falsy.</span>
-   <span class="signature">[`isFinite( value )`][@stdlib/assert/is-finite]</span><span class="delimiter">: </span><span class="description">test if a value is a finite number.</span>
-   <span class="signature">[`isGeneratorObjectLike( value )`][@stdlib/assert/is-generator-object-like]</span><span class="delimiter">: </span><span class="description">test if a value is `generator` object-like.</span>
-   <span class="signature">[`isGeneratorObject( value )`][@stdlib/assert/is-generator-object]</span><span class="delimiter">: </span><span class="description">test if a value is a `generator` object.</span>
-   <span class="signature">[`isgzipBuffer( value )`][@stdlib/assert/is-gzip-buffer]</span><span class="delimiter">: </span><span class="description">test if a value is a gzip buffer.</span>
-   <span class="signature">[`isHexString( value )`][@stdlib/assert/is-hex-string]</span><span class="delimiter">: </span><span class="description">test whether a string contains only hexadecimal digits.</span>
-   <span class="signature">[`isInfinite( value )`][@stdlib/assert/is-infinite]</span><span class="delimiter">: </span><span class="description">test if a value is an infinite number.</span>
-   <span class="signature">[`isInheritedProperty( value, property )`][@stdlib/assert/is-inherited-property]</span><span class="delimiter">: </span><span class="description">test if an object has an inherited property.</span>
-   <span class="signature">[`isIterableLike( value )`][@stdlib/assert/is-iterable-like]</span><span class="delimiter">: </span><span class="description">test if a value is `iterable`-like.</span>
-   <span class="signature">[`isIteratorLike( value )`][@stdlib/assert/is-iterator-like]</span><span class="delimiter">: </span><span class="description">test if a value is `iterator`-like.</span>
-   <span class="signature">[`isJSON( value )`][@stdlib/assert/is-json]</span><span class="delimiter">: </span><span class="description">test if a value is a parseable JSON string.</span>
-   <span class="signature">[`isKebabcase( value )`][@stdlib/assert/is-kebabcase]</span><span class="delimiter">: </span><span class="description">test if a value is a string in kebab case.</span>
-   <span class="signature">[`isLeapYear( [value] )`][@stdlib/assert/is-leap-year]</span><span class="delimiter">: </span><span class="description">test if a value corresponds to a leap year in the Gregorian calendar.</span>
-   <span class="signature">[`isLocalhost( value )`][@stdlib/assert/is-localhost]</span><span class="delimiter">: </span><span class="description">test whether a value is a localhost hostname.</span>
-   <span class="signature">[`isLowercase( value )`][@stdlib/assert/is-lowercase]</span><span class="delimiter">: </span><span class="description">test if a value is a lowercase string.</span>
-   <span class="signature">[`isMethodIn( value, property )`][@stdlib/assert/is-method-in]</span><span class="delimiter">: </span><span class="description">test if an object has a specified method name, either own or inherited.</span>
-   <span class="signature">[`isMethod( value, property )`][@stdlib/assert/is-method]</span><span class="delimiter">: </span><span class="description">test if an object has a specified method name.</span>
-   <span class="signature">[`isMultiSlice( value )`][@stdlib/assert/is-multi-slice]</span><span class="delimiter">: </span><span class="description">test if a value is a `MultiSlice`.</span>
-   <span class="signature">[`isNamedTypedTupleLike( value )`][@stdlib/assert/is-named-typed-tuple-like]</span><span class="delimiter">: </span><span class="description">test if a value is named typed tuple-like.</span>
-   <span class="signature">[`isNativeFunction( value )`][@stdlib/assert/is-native-function]</span><span class="delimiter">: </span><span class="description">test if a value is a native function.</span>
-   <span class="signature">[`isNegativeZero( value )`][@stdlib/assert/is-negative-zero]</span><span class="delimiter">: </span><span class="description">test if a value is a number equal to negative zero.</span>
-   <span class="signature">[`isNodeBuiltin( value )`][@stdlib/assert/is-node-builtin]</span><span class="delimiter">: </span><span class="description">test whether a string matches a Node.js built-in module name.</span>
-   <span class="signature">[`isNodeDuplexStreamLike( value )`][@stdlib/assert/is-node-duplex-stream-like]</span><span class="delimiter">: </span><span class="description">test if a value is Node duplex stream-like.</span>
-   <span class="signature">[`isNodeReadableStreamLike( value )`][@stdlib/assert/is-node-readable-stream-like]</span><span class="delimiter">: </span><span class="description">test if a value is Node readable stream-like.</span>
-   <span class="signature">[`isNodeREPL()`][@stdlib/assert/is-node-repl]</span><span class="delimiter">: </span><span class="description">check if running in a Node.js REPL environment.</span>
-   <span class="signature">[`isNodeStreamLike( value )`][@stdlib/assert/is-node-stream-like]</span><span class="delimiter">: </span><span class="description">test if a value is Node stream-like.</span>
-   <span class="signature">[`isNodeTransformStreamLike( value )`][@stdlib/assert/is-node-transform-stream-like]</span><span class="delimiter">: </span><span class="description">test if a value is Node transform stream-like.</span>
-   <span class="signature">[`isNodeWritableStreamLike( value )`][@stdlib/assert/is-node-writable-stream-like]</span><span class="delimiter">: </span><span class="description">test if a value is Node writable stream-like.</span>
-   <span class="signature">[`isNonConfigurablePropertyIn( value, property )`][@stdlib/assert/is-nonconfigurable-property-in]</span><span class="delimiter">: </span><span class="description">test if an object's own or inherited property is non-configurable.</span>
-   <span class="signature">[`isNonConfigurableProperty( value, property )`][@stdlib/assert/is-nonconfigurable-property]</span><span class="delimiter">: </span><span class="description">test if an object's own property is non-configurable.</span>
-   <span class="signature">[`isNonEnumerablePropertyIn( value, property )`][@stdlib/assert/is-nonenumerable-property-in]</span><span class="delimiter">: </span><span class="description">test if an object's own or inherited property is non-enumerable.</span>
-   <span class="signature">[`isNonEnumerableProperty( value, property )`][@stdlib/assert/is-nonenumerable-property]</span><span class="delimiter">: </span><span class="description">test if an object's own property is non-enumerable.</span>
-   <span class="signature">[`isNonNegativeFinite( value )`][@stdlib/assert/is-nonnegative-finite]</span><span class="delimiter">: </span><span class="description">test if a value is a number having a nonnegative finite value.</span>
-   <span class="signature">[`isObjectLike( value )`][@stdlib/assert/is-object-like]</span><span class="delimiter">: </span><span class="description">test if a value is object-like.</span>
-   <span class="signature">[`isOdd( value )`][@stdlib/assert/is-odd]</span><span class="delimiter">: </span><span class="description">test if a value is an odd number.</span>
-   <span class="signature">[`isPascalcase( value )`][@stdlib/assert/is-pascalcase]</span><span class="delimiter">: </span><span class="description">test if a value is a string in Pascal case.</span>
-   <span class="signature">[`isPlainObject( value )`][@stdlib/assert/is-plain-object]</span><span class="delimiter">: </span><span class="description">test if a value is a plain object.</span>
-   <span class="signature">[`isPositiveZero( value )`][@stdlib/assert/is-positive-zero]</span><span class="delimiter">: </span><span class="description">test if a value is a number equal to positive zero.</span>
-   <span class="signature">[`isPrime( value )`][@stdlib/assert/is-prime]</span><span class="delimiter">: </span><span class="description">test if a value is a prime number.</span>
-   <span class="signature">[`isPrimitive( value )`][@stdlib/assert/is-primitive]</span><span class="delimiter">: </span><span class="description">test if a value is a JavaScript primitive.</span>
-   <span class="signature">[`isPRNGLike( value )`][@stdlib/assert/is-prng-like]</span><span class="delimiter">: </span><span class="description">test if a value is PRNG-like.</span>
-   <span class="signature">[`isProbability( value )`][@stdlib/assert/is-probability]</span><span class="delimiter">: </span><span class="description">test if a value is a probability.</span>
-   <span class="signature">[`isPropertyKey( value )`][@stdlib/assert/is-property-key]</span><span class="delimiter">: </span><span class="description">test whether a value is a property key.</span>
-   <span class="signature">[`isPrototypeOf( obj, prototype )`][@stdlib/assert/is-prototype-of]</span><span class="delimiter">: </span><span class="description">test if an object's prototype chain contains a provided prototype.</span>
-   <span class="signature">[`isReadOnlyPropertyIn( value, property )`][@stdlib/assert/is-read-only-property-in]</span><span class="delimiter">: </span><span class="description">test if an object's own or inherited property is read-only.</span>
-   <span class="signature">[`isReadOnlyProperty( value, property )`][@stdlib/assert/is-read-only-property]</span><span class="delimiter">: </span><span class="description">test if an object's own property is read-only.</span>
-   <span class="signature">[`isReadWritePropertyIn( value, property )`][@stdlib/assert/is-read-write-property-in]</span><span class="delimiter">: </span><span class="description">test if an object's own or inherited property is readable and writable.</span>
-   <span class="signature">[`isReadWriteProperty( value, property )`][@stdlib/assert/is-read-write-property]</span><span class="delimiter">: </span><span class="description">test if an object's own property is readable and writable.</span>
-   <span class="signature">[`isReadablePropertyIn( value, property )`][@stdlib/assert/is-readable-property-in]</span><span class="delimiter">: </span><span class="description">test if an object's own or inherited property is readable.</span>
-   <span class="signature">[`isReadableProperty( value, property )`][@stdlib/assert/is-readable-property]</span><span class="delimiter">: </span><span class="description">test if an object's own property is readable.</span>
-   <span class="signature">[`isRegExpString( value )`][@stdlib/assert/is-regexp-string]</span><span class="delimiter">: </span><span class="description">test if a value is a regular expression string.</span>
-   <span class="signature">[`isRelativePath( value )`][@stdlib/assert/is-relative-path]</span><span class="delimiter">: </span><span class="description">test if a value is a relative path.</span>
-   <span class="signature">[`isRelativeURI( value )`][@stdlib/assert/is-relative-uri]</span><span class="delimiter">: </span><span class="description">test whether a value is a relative URI.</span>
-   <span class="signature">[`isSameComplex128( v1, v2 )`][@stdlib/assert/is-same-complex128]</span><span class="delimiter">: </span><span class="description">test if two arguments are both double-precision complex floating-point numbers and have the same value.</span>
-   <span class="signature">[`isSameComplex64( v1, v2 )`][@stdlib/assert/is-same-complex64]</span><span class="delimiter">: </span><span class="description">test if two arguments are both single-precision complex floating-point numbers and have the same value.</span>
-   <span class="signature">[`isSameNativeClass( a, b )`][@stdlib/assert/is-same-native-class]</span><span class="delimiter">: </span><span class="description">test if two arguments have the same native class.</span>
-   <span class="signature">[`isSameType( a, b )`][@stdlib/assert/is-same-type]</span><span class="delimiter">: </span><span class="description">test if two arguments have the same type.</span>
-   <span class="signature">[`isSameValueZero( a, b )`][@stdlib/assert/is-same-value-zero]</span><span class="delimiter">: </span><span class="description">test if two arguments are the same value.</span>
-   <span class="signature">[`isSameValue( a, b )`][@stdlib/assert/is-same-value]</span><span class="delimiter">: </span><span class="description">test if two arguments are the same value.</span>
-   <span class="signature">[`isSemVer( value )`][@stdlib/assert/is-semver]</span><span class="delimiter">: </span><span class="description">test if a value is a semantic version string.</span>
-   <span class="signature">[`isSlice( value )`][@stdlib/assert/is-slice]</span><span class="delimiter">: </span><span class="description">test if a value is a `Slice`.</span>
-   <span class="signature">[`isSnakecase( value )`][@stdlib/assert/is-snakecase]</span><span class="delimiter">: </span><span class="description">test if a value is a string in snake case.</span>
-   <span class="signature">[`isStartcase( value )`][@stdlib/assert/is-startcase]</span><span class="delimiter">: </span><span class="description">test if a value is a startcase string.</span>
-   <span class="signature">[`isStrictEqual( a, b )`][@stdlib/assert/is-strict-equal]</span><span class="delimiter">: </span><span class="description">test if two arguments are strictly equal.</span>
-   <span class="signature">[`isStructConstructorLike( value )`][@stdlib/assert/is-struct-constructor-like]</span><span class="delimiter">: </span><span class="description">test if a value is struct constructor-like.</span>
-   <span class="signature">[`isStruct( value )`][@stdlib/assert/is-struct]</span><span class="delimiter">: </span><span class="description">test if a value is a `struct` instance.</span>
-   <span class="signature">[`isTruthy( value )`][@stdlib/assert/is-truthy]</span><span class="delimiter">: </span><span class="description">test if a value is truthy.</span>
-   <span class="signature">[`isUNCPath( value )`][@stdlib/assert/is-unc-path]</span><span class="delimiter">: </span><span class="description">test if a value is a UNC path.</span>
-   <span class="signature">[`isUndefinedOrNull( value )`][@stdlib/assert/is-undefined-or-null]</span><span class="delimiter">: </span><span class="description">test if a value is undefined or null.</span>
-   <span class="signature">[`isUppercase( value )`][@stdlib/assert/is-uppercase]</span><span class="delimiter">: </span><span class="description">test if a value is an uppercase string.</span>
-   <span class="signature">[`isURI( value )`][@stdlib/assert/is-uri]</span><span class="delimiter">: </span><span class="description">test if a value is a URI.</span>
-   <span class="signature">[`isWebAssemblyMemory( value )`][@stdlib/assert/is-wasm-memory]</span><span class="delimiter">: </span><span class="description">test if a value is a WebAssembly memory instance.</span>
-   <span class="signature">[`isWhitespace( value )`][@stdlib/assert/is-whitespace]</span><span class="delimiter">: </span><span class="description">test whether a string contains only white space characters.</span>
-   <span class="signature">[`isWritablePropertyIn( value, property )`][@stdlib/assert/is-writable-property-in]</span><span class="delimiter">: </span><span class="description">test if an object's own or inherited property is writable.</span>
-   <span class="signature">[`isWritableProperty( value, property )`][@stdlib/assert/is-writable-property]</span><span class="delimiter">: </span><span class="description">test if an object's own property is writable.</span>
-   <span class="signature">[`isWriteOnlyPropertyIn( value, property )`][@stdlib/assert/is-write-only-property-in]</span><span class="delimiter">: </span><span class="description">test if an object's own or inherited property is write-only.</span>
-   <span class="signature">[`isWriteOnlyProperty( value, property )`][@stdlib/assert/is-write-only-property]</span><span class="delimiter">: </span><span class="description">test if an object's own property is write-only.</span>
-   <span class="signature">[`tools`][@stdlib/assert/tools]</span><span class="delimiter">: </span><span class="description">assertion utility tools.</span>

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
var assert = require( '@stdlib/assert' );

console.log( objectKeys( assert ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert

[test-image]: https://github.com/stdlib-js/assert/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/assert/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert.svg
[dependencies-url]: https://david-dm.org/stdlib-js/assert/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/assert/tree/deno
[deno-readme]: https://github.com/stdlib-js/assert/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/assert/tree/umd
[umd-readme]: https://github.com/stdlib-js/assert/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/assert/tree/esm
[esm-readme]: https://github.com/stdlib-js/assert/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/assert/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert/main/LICENSE

<!-- <toc-links> -->

[@stdlib/assert/contains]: https://github.com/stdlib-js/assert/tree/main/contains

[@stdlib/assert/deep-equal]: https://github.com/stdlib-js/assert/tree/main/deep-equal

[@stdlib/assert/deep-has-own-property]: https://github.com/stdlib-js/assert/tree/main/deep-has-own-property

[@stdlib/assert/deep-has-property]: https://github.com/stdlib-js/assert/tree/main/deep-has-property

[@stdlib/assert/has-own-property]: https://github.com/stdlib-js/assert/tree/main/has-own-property

[@stdlib/assert/has-property]: https://github.com/stdlib-js/assert/tree/main/has-property

[@stdlib/assert/has-utf16-surrogate-pair-at]: https://github.com/stdlib-js/assert/tree/main/has-utf16-surrogate-pair-at

[@stdlib/assert/instance-of]: https://github.com/stdlib-js/assert/tree/main/instance-of

[@stdlib/assert/is-absolute-http-uri]: https://github.com/stdlib-js/assert/tree/main/is-absolute-http-uri

[@stdlib/assert/is-absolute-path]: https://github.com/stdlib-js/assert/tree/main/is-absolute-path

[@stdlib/assert/is-absolute-uri]: https://github.com/stdlib-js/assert/tree/main/is-absolute-uri

[@stdlib/assert/is-accessor-property-in]: https://github.com/stdlib-js/assert/tree/main/is-accessor-property-in

[@stdlib/assert/is-accessor-property]: https://github.com/stdlib-js/assert/tree/main/is-accessor-property

[@stdlib/assert/is-alphagram]: https://github.com/stdlib-js/assert/tree/main/is-alphagram

[@stdlib/assert/is-alphanumeric]: https://github.com/stdlib-js/assert/tree/main/is-alphanumeric

[@stdlib/assert/is-anagram]: https://github.com/stdlib-js/assert/tree/main/is-anagram

[@stdlib/assert/is-arguments]: https://github.com/stdlib-js/assert/tree/main/is-arguments

[@stdlib/assert/is-arrow-function]: https://github.com/stdlib-js/assert/tree/main/is-arrow-function

[@stdlib/assert/is-ascii]: https://github.com/stdlib-js/assert/tree/main/is-ascii

[@stdlib/assert/is-between]: https://github.com/stdlib-js/assert/tree/main/is-between

[@stdlib/assert/is-bigint]: https://github.com/stdlib-js/assert/tree/main/is-bigint

[@stdlib/assert/is-binary-string]: https://github.com/stdlib-js/assert/tree/main/is-binary-string

[@stdlib/assert/is-blank-string]: https://github.com/stdlib-js/assert/tree/main/is-blank-string

[@stdlib/assert/is-boxed-primitive]: https://github.com/stdlib-js/assert/tree/main/is-boxed-primitive

[@stdlib/assert/is-buffer]: https://github.com/stdlib-js/assert/tree/main/is-buffer

[@stdlib/assert/is-camelcase]: https://github.com/stdlib-js/assert/tree/main/is-camelcase

[@stdlib/assert/is-capitalized]: https://github.com/stdlib-js/assert/tree/main/is-capitalized

[@stdlib/assert/is-circular]: https://github.com/stdlib-js/assert/tree/main/is-circular

[@stdlib/assert/is-class]: https://github.com/stdlib-js/assert/tree/main/is-class

[@stdlib/assert/is-collection]: https://github.com/stdlib-js/assert/tree/main/is-collection

[@stdlib/assert/is-composite]: https://github.com/stdlib-js/assert/tree/main/is-composite

[@stdlib/assert/is-configurable-property-in]: https://github.com/stdlib-js/assert/tree/main/is-configurable-property-in

[@stdlib/assert/is-configurable-property]: https://github.com/stdlib-js/assert/tree/main/is-configurable-property

[@stdlib/assert/is-constantcase]: https://github.com/stdlib-js/assert/tree/main/is-constantcase

[@stdlib/assert/is-current-year]: https://github.com/stdlib-js/assert/tree/main/is-current-year

[@stdlib/assert/is-data-property-in]: https://github.com/stdlib-js/assert/tree/main/is-data-property-in

[@stdlib/assert/is-data-property]: https://github.com/stdlib-js/assert/tree/main/is-data-property

[@stdlib/assert/is-dataview]: https://github.com/stdlib-js/assert/tree/main/is-dataview

[@stdlib/assert/is-digit-string]: https://github.com/stdlib-js/assert/tree/main/is-digit-string

[@stdlib/assert/is-domain-name]: https://github.com/stdlib-js/assert/tree/main/is-domain-name

[@stdlib/assert/is-duration-string]: https://github.com/stdlib-js/assert/tree/main/is-duration-string

[@stdlib/assert/is-email-address]: https://github.com/stdlib-js/assert/tree/main/is-email-address

[@stdlib/assert/is-empty-collection]: https://github.com/stdlib-js/assert/tree/main/is-empty-collection

[@stdlib/assert/is-empty-object]: https://github.com/stdlib-js/assert/tree/main/is-empty-object

[@stdlib/assert/is-empty-string]: https://github.com/stdlib-js/assert/tree/main/is-empty-string

[@stdlib/assert/is-enumerable-property-in]: https://github.com/stdlib-js/assert/tree/main/is-enumerable-property-in

[@stdlib/assert/is-enumerable-property]: https://github.com/stdlib-js/assert/tree/main/is-enumerable-property

[@stdlib/assert/is-equal-date-object]: https://github.com/stdlib-js/assert/tree/main/is-equal-date-object

[@stdlib/assert/is-even]: https://github.com/stdlib-js/assert/tree/main/is-even

[@stdlib/assert/is-falsy]: https://github.com/stdlib-js/assert/tree/main/is-falsy

[@stdlib/assert/is-finite]: https://github.com/stdlib-js/assert/tree/main/is-finite

[@stdlib/assert/is-generator-object-like]: https://github.com/stdlib-js/assert/tree/main/is-generator-object-like

[@stdlib/assert/is-generator-object]: https://github.com/stdlib-js/assert/tree/main/is-generator-object

[@stdlib/assert/is-gzip-buffer]: https://github.com/stdlib-js/assert/tree/main/is-gzip-buffer

[@stdlib/assert/is-hex-string]: https://github.com/stdlib-js/assert/tree/main/is-hex-string

[@stdlib/assert/is-infinite]: https://github.com/stdlib-js/assert/tree/main/is-infinite

[@stdlib/assert/is-inherited-property]: https://github.com/stdlib-js/assert/tree/main/is-inherited-property

[@stdlib/assert/is-iterable-like]: https://github.com/stdlib-js/assert/tree/main/is-iterable-like

[@stdlib/assert/is-iterator-like]: https://github.com/stdlib-js/assert/tree/main/is-iterator-like

[@stdlib/assert/is-json]: https://github.com/stdlib-js/assert/tree/main/is-json

[@stdlib/assert/is-kebabcase]: https://github.com/stdlib-js/assert/tree/main/is-kebabcase

[@stdlib/assert/is-leap-year]: https://github.com/stdlib-js/assert/tree/main/is-leap-year

[@stdlib/assert/is-localhost]: https://github.com/stdlib-js/assert/tree/main/is-localhost

[@stdlib/assert/is-lowercase]: https://github.com/stdlib-js/assert/tree/main/is-lowercase

[@stdlib/assert/is-method-in]: https://github.com/stdlib-js/assert/tree/main/is-method-in

[@stdlib/assert/is-method]: https://github.com/stdlib-js/assert/tree/main/is-method

[@stdlib/assert/is-multi-slice]: https://github.com/stdlib-js/assert/tree/main/is-multi-slice

[@stdlib/assert/is-named-typed-tuple-like]: https://github.com/stdlib-js/assert/tree/main/is-named-typed-tuple-like

[@stdlib/assert/is-native-function]: https://github.com/stdlib-js/assert/tree/main/is-native-function

[@stdlib/assert/is-negative-zero]: https://github.com/stdlib-js/assert/tree/main/is-negative-zero

[@stdlib/assert/is-node-builtin]: https://github.com/stdlib-js/assert/tree/main/is-node-builtin

[@stdlib/assert/is-node-duplex-stream-like]: https://github.com/stdlib-js/assert/tree/main/is-node-duplex-stream-like

[@stdlib/assert/is-node-readable-stream-like]: https://github.com/stdlib-js/assert/tree/main/is-node-readable-stream-like

[@stdlib/assert/is-node-repl]: https://github.com/stdlib-js/assert/tree/main/is-node-repl

[@stdlib/assert/is-node-stream-like]: https://github.com/stdlib-js/assert/tree/main/is-node-stream-like

[@stdlib/assert/is-node-transform-stream-like]: https://github.com/stdlib-js/assert/tree/main/is-node-transform-stream-like

[@stdlib/assert/is-node-writable-stream-like]: https://github.com/stdlib-js/assert/tree/main/is-node-writable-stream-like

[@stdlib/assert/is-nonconfigurable-property-in]: https://github.com/stdlib-js/assert/tree/main/is-nonconfigurable-property-in

[@stdlib/assert/is-nonconfigurable-property]: https://github.com/stdlib-js/assert/tree/main/is-nonconfigurable-property

[@stdlib/assert/is-nonenumerable-property-in]: https://github.com/stdlib-js/assert/tree/main/is-nonenumerable-property-in

[@stdlib/assert/is-nonenumerable-property]: https://github.com/stdlib-js/assert/tree/main/is-nonenumerable-property

[@stdlib/assert/is-nonnegative-finite]: https://github.com/stdlib-js/assert/tree/main/is-nonnegative-finite

[@stdlib/assert/is-object-like]: https://github.com/stdlib-js/assert/tree/main/is-object-like

[@stdlib/assert/is-odd]: https://github.com/stdlib-js/assert/tree/main/is-odd

[@stdlib/assert/is-pascalcase]: https://github.com/stdlib-js/assert/tree/main/is-pascalcase

[@stdlib/assert/is-plain-object]: https://github.com/stdlib-js/assert/tree/main/is-plain-object

[@stdlib/assert/is-positive-zero]: https://github.com/stdlib-js/assert/tree/main/is-positive-zero

[@stdlib/assert/is-prime]: https://github.com/stdlib-js/assert/tree/main/is-prime

[@stdlib/assert/is-primitive]: https://github.com/stdlib-js/assert/tree/main/is-primitive

[@stdlib/assert/is-prng-like]: https://github.com/stdlib-js/assert/tree/main/is-prng-like

[@stdlib/assert/is-probability]: https://github.com/stdlib-js/assert/tree/main/is-probability

[@stdlib/assert/is-property-key]: https://github.com/stdlib-js/assert/tree/main/is-property-key

[@stdlib/assert/is-prototype-of]: https://github.com/stdlib-js/assert/tree/main/is-prototype-of

[@stdlib/assert/is-read-only-property-in]: https://github.com/stdlib-js/assert/tree/main/is-read-only-property-in

[@stdlib/assert/is-read-only-property]: https://github.com/stdlib-js/assert/tree/main/is-read-only-property

[@stdlib/assert/is-read-write-property-in]: https://github.com/stdlib-js/assert/tree/main/is-read-write-property-in

[@stdlib/assert/is-read-write-property]: https://github.com/stdlib-js/assert/tree/main/is-read-write-property

[@stdlib/assert/is-readable-property-in]: https://github.com/stdlib-js/assert/tree/main/is-readable-property-in

[@stdlib/assert/is-readable-property]: https://github.com/stdlib-js/assert/tree/main/is-readable-property

[@stdlib/assert/is-regexp-string]: https://github.com/stdlib-js/assert/tree/main/is-regexp-string

[@stdlib/assert/is-relative-path]: https://github.com/stdlib-js/assert/tree/main/is-relative-path

[@stdlib/assert/is-relative-uri]: https://github.com/stdlib-js/assert/tree/main/is-relative-uri

[@stdlib/assert/is-same-complex128]: https://github.com/stdlib-js/assert/tree/main/is-same-complex128

[@stdlib/assert/is-same-complex64]: https://github.com/stdlib-js/assert/tree/main/is-same-complex64

[@stdlib/assert/is-same-native-class]: https://github.com/stdlib-js/assert/tree/main/is-same-native-class

[@stdlib/assert/is-same-type]: https://github.com/stdlib-js/assert/tree/main/is-same-type

[@stdlib/assert/is-same-value-zero]: https://github.com/stdlib-js/assert/tree/main/is-same-value-zero

[@stdlib/assert/is-same-value]: https://github.com/stdlib-js/assert/tree/main/is-same-value

[@stdlib/assert/is-semver]: https://github.com/stdlib-js/assert/tree/main/is-semver

[@stdlib/assert/is-slice]: https://github.com/stdlib-js/assert/tree/main/is-slice

[@stdlib/assert/is-snakecase]: https://github.com/stdlib-js/assert/tree/main/is-snakecase

[@stdlib/assert/is-startcase]: https://github.com/stdlib-js/assert/tree/main/is-startcase

[@stdlib/assert/is-strict-equal]: https://github.com/stdlib-js/assert/tree/main/is-strict-equal

[@stdlib/assert/is-struct-constructor-like]: https://github.com/stdlib-js/assert/tree/main/is-struct-constructor-like

[@stdlib/assert/is-struct]: https://github.com/stdlib-js/assert/tree/main/is-struct

[@stdlib/assert/is-truthy]: https://github.com/stdlib-js/assert/tree/main/is-truthy

[@stdlib/assert/is-unc-path]: https://github.com/stdlib-js/assert/tree/main/is-unc-path

[@stdlib/assert/is-undefined-or-null]: https://github.com/stdlib-js/assert/tree/main/is-undefined-or-null

[@stdlib/assert/is-uppercase]: https://github.com/stdlib-js/assert/tree/main/is-uppercase

[@stdlib/assert/is-uri]: https://github.com/stdlib-js/assert/tree/main/is-uri

[@stdlib/assert/is-wasm-memory]: https://github.com/stdlib-js/assert/tree/main/is-wasm-memory

[@stdlib/assert/is-whitespace]: https://github.com/stdlib-js/assert/tree/main/is-whitespace

[@stdlib/assert/is-writable-property-in]: https://github.com/stdlib-js/assert/tree/main/is-writable-property-in

[@stdlib/assert/is-writable-property]: https://github.com/stdlib-js/assert/tree/main/is-writable-property

[@stdlib/assert/is-write-only-property-in]: https://github.com/stdlib-js/assert/tree/main/is-write-only-property-in

[@stdlib/assert/is-write-only-property]: https://github.com/stdlib-js/assert/tree/main/is-write-only-property

[@stdlib/assert/tools]: https://github.com/stdlib-js/assert/tree/main/tools

[@stdlib/assert/has-arraybuffer-support]: https://github.com/stdlib-js/assert/tree/main/has-arraybuffer-support

[@stdlib/assert/has-arrow-function-support]: https://github.com/stdlib-js/assert/tree/main/has-arrow-function-support

[@stdlib/assert/has-async-await-support]: https://github.com/stdlib-js/assert/tree/main/has-async-await-support

[@stdlib/assert/has-async-iterator-symbol-support]: https://github.com/stdlib-js/assert/tree/main/has-async-iterator-symbol-support

[@stdlib/assert/has-atob-support]: https://github.com/stdlib-js/assert/tree/main/has-atob-support

[@stdlib/assert/has-bigint-support]: https://github.com/stdlib-js/assert/tree/main/has-bigint-support

[@stdlib/assert/has-bigint64array-support]: https://github.com/stdlib-js/assert/tree/main/has-bigint64array-support

[@stdlib/assert/has-biguint64array-support]: https://github.com/stdlib-js/assert/tree/main/has-biguint64array-support

[@stdlib/assert/has-btoa-support]: https://github.com/stdlib-js/assert/tree/main/has-btoa-support

[@stdlib/assert/has-class-support]: https://github.com/stdlib-js/assert/tree/main/has-class-support

[@stdlib/assert/has-dataview-support]: https://github.com/stdlib-js/assert/tree/main/has-dataview-support

[@stdlib/assert/has-define-properties-support]: https://github.com/stdlib-js/assert/tree/main/has-define-properties-support

[@stdlib/assert/has-define-property-support]: https://github.com/stdlib-js/assert/tree/main/has-define-property-support

[@stdlib/assert/has-float32array-support]: https://github.com/stdlib-js/assert/tree/main/has-float32array-support

[@stdlib/assert/has-float64array-support]: https://github.com/stdlib-js/assert/tree/main/has-float64array-support

[@stdlib/assert/has-function-name-support]: https://github.com/stdlib-js/assert/tree/main/has-function-name-support

[@stdlib/assert/has-generator-support]: https://github.com/stdlib-js/assert/tree/main/has-generator-support

[@stdlib/assert/has-globalthis-support]: https://github.com/stdlib-js/assert/tree/main/has-globalthis-support

[@stdlib/assert/has-int16array-support]: https://github.com/stdlib-js/assert/tree/main/has-int16array-support

[@stdlib/assert/has-int32array-support]: https://github.com/stdlib-js/assert/tree/main/has-int32array-support

[@stdlib/assert/has-int8array-support]: https://github.com/stdlib-js/assert/tree/main/has-int8array-support

[@stdlib/assert/has-iterator-symbol-support]: https://github.com/stdlib-js/assert/tree/main/has-iterator-symbol-support

[@stdlib/assert/has-map-support]: https://github.com/stdlib-js/assert/tree/main/has-map-support

[@stdlib/assert/has-node-buffer-support]: https://github.com/stdlib-js/assert/tree/main/has-node-buffer-support

[@stdlib/assert/has-proxy-support]: https://github.com/stdlib-js/assert/tree/main/has-proxy-support

[@stdlib/assert/has-set-support]: https://github.com/stdlib-js/assert/tree/main/has-set-support

[@stdlib/assert/has-sharedarraybuffer-support]: https://github.com/stdlib-js/assert/tree/main/has-sharedarraybuffer-support

[@stdlib/assert/has-symbol-support]: https://github.com/stdlib-js/assert/tree/main/has-symbol-support

[@stdlib/assert/has-tostringtag-support]: https://github.com/stdlib-js/assert/tree/main/has-tostringtag-support

[@stdlib/assert/has-uint16array-support]: https://github.com/stdlib-js/assert/tree/main/has-uint16array-support

[@stdlib/assert/has-uint32array-support]: https://github.com/stdlib-js/assert/tree/main/has-uint32array-support

[@stdlib/assert/has-uint8array-support]: https://github.com/stdlib-js/assert/tree/main/has-uint8array-support

[@stdlib/assert/has-uint8clampedarray-support]: https://github.com/stdlib-js/assert/tree/main/has-uint8clampedarray-support

[@stdlib/assert/has-wasm-support]: https://github.com/stdlib-js/assert/tree/main/has-wasm-support

[@stdlib/assert/has-weakmap-support]: https://github.com/stdlib-js/assert/tree/main/has-weakmap-support

[@stdlib/assert/has-weakset-support]: https://github.com/stdlib-js/assert/tree/main/has-weakset-support

[@stdlib/assert/is-big-endian]: https://github.com/stdlib-js/assert/tree/main/is-big-endian

[@stdlib/assert/is-browser]: https://github.com/stdlib-js/assert/tree/main/is-browser

[@stdlib/assert/is-darwin]: https://github.com/stdlib-js/assert/tree/main/is-darwin

[@stdlib/assert/is-docker]: https://github.com/stdlib-js/assert/tree/main/is-docker

[@stdlib/assert/is-electron-main]: https://github.com/stdlib-js/assert/tree/main/is-electron-main

[@stdlib/assert/is-electron-renderer]: https://github.com/stdlib-js/assert/tree/main/is-electron-renderer

[@stdlib/assert/is-electron]: https://github.com/stdlib-js/assert/tree/main/is-electron

[@stdlib/assert/is-little-endian]: https://github.com/stdlib-js/assert/tree/main/is-little-endian

[@stdlib/assert/is-mobile]: https://github.com/stdlib-js/assert/tree/main/is-mobile

[@stdlib/assert/is-node]: https://github.com/stdlib-js/assert/tree/main/is-node

[@stdlib/assert/is-touch-device]: https://github.com/stdlib-js/assert/tree/main/is-touch-device

[@stdlib/assert/is-web-worker]: https://github.com/stdlib-js/assert/tree/main/is-web-worker

[@stdlib/assert/is-windows]: https://github.com/stdlib-js/assert/tree/main/is-windows

[@stdlib/assert/is-error]: https://github.com/stdlib-js/assert/tree/main/is-error

[@stdlib/assert/is-eval-error]: https://github.com/stdlib-js/assert/tree/main/is-eval-error

[@stdlib/assert/is-range-error]: https://github.com/stdlib-js/assert/tree/main/is-range-error

[@stdlib/assert/is-reference-error]: https://github.com/stdlib-js/assert/tree/main/is-reference-error

[@stdlib/assert/is-syntax-error]: https://github.com/stdlib-js/assert/tree/main/is-syntax-error

[@stdlib/assert/is-type-error]: https://github.com/stdlib-js/assert/tree/main/is-type-error

[@stdlib/assert/is-uri-error]: https://github.com/stdlib-js/assert/tree/main/is-uri-error

[@stdlib/assert/is-accessor-array]: https://github.com/stdlib-js/assert/tree/main/is-accessor-array

[@stdlib/assert/is-array-length]: https://github.com/stdlib-js/assert/tree/main/is-array-length

[@stdlib/assert/is-array-like-object]: https://github.com/stdlib-js/assert/tree/main/is-array-like-object

[@stdlib/assert/is-array-like]: https://github.com/stdlib-js/assert/tree/main/is-array-like

[@stdlib/assert/is-arraybuffer-view]: https://github.com/stdlib-js/assert/tree/main/is-arraybuffer-view

[@stdlib/assert/is-arraybuffer]: https://github.com/stdlib-js/assert/tree/main/is-arraybuffer

[@stdlib/assert/is-between-array]: https://github.com/stdlib-js/assert/tree/main/is-between-array

[@stdlib/assert/is-bigint64array]: https://github.com/stdlib-js/assert/tree/main/is-bigint64array

[@stdlib/assert/is-biguint64array]: https://github.com/stdlib-js/assert/tree/main/is-biguint64array

[@stdlib/assert/is-circular-array]: https://github.com/stdlib-js/assert/tree/main/is-circular-array

[@stdlib/assert/is-empty-array-like-object]: https://github.com/stdlib-js/assert/tree/main/is-empty-array-like-object

[@stdlib/assert/is-empty-array]: https://github.com/stdlib-js/assert/tree/main/is-empty-array

[@stdlib/assert/is-equal-array]: https://github.com/stdlib-js/assert/tree/main/is-equal-array

[@stdlib/assert/is-equal-booleanarray]: https://github.com/stdlib-js/assert/tree/main/is-equal-booleanarray

[@stdlib/assert/is-equal-int16array]: https://github.com/stdlib-js/assert/tree/main/is-equal-int16array

[@stdlib/assert/is-equal-int32array]: https://github.com/stdlib-js/assert/tree/main/is-equal-int32array

[@stdlib/assert/is-equal-int8array]: https://github.com/stdlib-js/assert/tree/main/is-equal-int8array

[@stdlib/assert/is-equal-uint16array]: https://github.com/stdlib-js/assert/tree/main/is-equal-uint16array

[@stdlib/assert/is-equal-uint32array]: https://github.com/stdlib-js/assert/tree/main/is-equal-uint32array

[@stdlib/assert/is-equal-uint8array]: https://github.com/stdlib-js/assert/tree/main/is-equal-uint8array

[@stdlib/assert/is-equal-uint8clampedarray]: https://github.com/stdlib-js/assert/tree/main/is-equal-uint8clampedarray

[@stdlib/assert/is-falsy-array]: https://github.com/stdlib-js/assert/tree/main/is-falsy-array

[@stdlib/assert/is-finite-array]: https://github.com/stdlib-js/assert/tree/main/is-finite-array

[@stdlib/assert/is-numeric-array]: https://github.com/stdlib-js/assert/tree/main/is-numeric-array

[@stdlib/assert/is-plain-object-array]: https://github.com/stdlib-js/assert/tree/main/is-plain-object-array

[@stdlib/assert/is-probability-array]: https://github.com/stdlib-js/assert/tree/main/is-probability-array

[@stdlib/assert/is-same-accessor-array]: https://github.com/stdlib-js/assert/tree/main/is-same-accessor-array

[@stdlib/assert/is-same-array-like-object]: https://github.com/stdlib-js/assert/tree/main/is-same-array-like-object

[@stdlib/assert/is-same-array-like]: https://github.com/stdlib-js/assert/tree/main/is-same-array-like

[@stdlib/assert/is-same-array]: https://github.com/stdlib-js/assert/tree/main/is-same-array

[@stdlib/assert/is-same-complex128array]: https://github.com/stdlib-js/assert/tree/main/is-same-complex128array

[@stdlib/assert/is-same-complex64array]: https://github.com/stdlib-js/assert/tree/main/is-same-complex64array

[@stdlib/assert/is-same-float32array]: https://github.com/stdlib-js/assert/tree/main/is-same-float32array

[@stdlib/assert/is-same-float64array]: https://github.com/stdlib-js/assert/tree/main/is-same-float64array

[@stdlib/assert/is-same-typed-array-like]: https://github.com/stdlib-js/assert/tree/main/is-same-typed-array-like

[@stdlib/assert/is-sharedarraybuffer]: https://github.com/stdlib-js/assert/tree/main/is-sharedarraybuffer

[@stdlib/assert/is-truthy-array]: https://github.com/stdlib-js/assert/tree/main/is-truthy-array

[@stdlib/assert/is-typed-array-length]: https://github.com/stdlib-js/assert/tree/main/is-typed-array-length

[@stdlib/assert/is-typed-array-like]: https://github.com/stdlib-js/assert/tree/main/is-typed-array-like

[@stdlib/assert/is-typed-array]: https://github.com/stdlib-js/assert/tree/main/is-typed-array

[@stdlib/assert/is-unity-probability-array]: https://github.com/stdlib-js/assert/tree/main/is-unity-probability-array

[@stdlib/assert/is-complex-like]: https://github.com/stdlib-js/assert/tree/main/is-complex-like

[@stdlib/assert/is-complex-typed-array-like]: https://github.com/stdlib-js/assert/tree/main/is-complex-typed-array-like

[@stdlib/assert/is-complex-typed-array]: https://github.com/stdlib-js/assert/tree/main/is-complex-typed-array

[@stdlib/assert/is-complex]: https://github.com/stdlib-js/assert/tree/main/is-complex

[@stdlib/assert/is-complex128]: https://github.com/stdlib-js/assert/tree/main/is-complex128

[@stdlib/assert/is-complex128array]: https://github.com/stdlib-js/assert/tree/main/is-complex128array

[@stdlib/assert/is-complex64]: https://github.com/stdlib-js/assert/tree/main/is-complex64

[@stdlib/assert/is-complex64array]: https://github.com/stdlib-js/assert/tree/main/is-complex64array

[@stdlib/assert/is-centrosymmetric-matrix]: https://github.com/stdlib-js/assert/tree/main/is-centrosymmetric-matrix

[@stdlib/assert/is-complex128matrix-like]: https://github.com/stdlib-js/assert/tree/main/is-complex128matrix-like

[@stdlib/assert/is-complex128ndarray-like]: https://github.com/stdlib-js/assert/tree/main/is-complex128ndarray-like

[@stdlib/assert/is-complex128vector-like]: https://github.com/stdlib-js/assert/tree/main/is-complex128vector-like

[@stdlib/assert/is-complex64matrix-like]: https://github.com/stdlib-js/assert/tree/main/is-complex64matrix-like

[@stdlib/assert/is-complex64ndarray-like]: https://github.com/stdlib-js/assert/tree/main/is-complex64ndarray-like

[@stdlib/assert/is-complex64vector-like]: https://github.com/stdlib-js/assert/tree/main/is-complex64vector-like

[@stdlib/assert/is-float32matrix-like]: https://github.com/stdlib-js/assert/tree/main/is-float32matrix-like

[@stdlib/assert/is-float32ndarray-like]: https://github.com/stdlib-js/assert/tree/main/is-float32ndarray-like

[@stdlib/assert/is-float32vector-like]: https://github.com/stdlib-js/assert/tree/main/is-float32vector-like

[@stdlib/assert/is-float64matrix-like]: https://github.com/stdlib-js/assert/tree/main/is-float64matrix-like

[@stdlib/assert/is-float64ndarray-like]: https://github.com/stdlib-js/assert/tree/main/is-float64ndarray-like

[@stdlib/assert/is-float64vector-like]: https://github.com/stdlib-js/assert/tree/main/is-float64vector-like

[@stdlib/assert/is-matrix-like]: https://github.com/stdlib-js/assert/tree/main/is-matrix-like

[@stdlib/assert/is-ndarray-like-with-data-type]: https://github.com/stdlib-js/assert/tree/main/is-ndarray-like-with-data-type

[@stdlib/assert/is-ndarray-like]: https://github.com/stdlib-js/assert/tree/main/is-ndarray-like

[@stdlib/assert/is-nonsymmetric-matrix]: https://github.com/stdlib-js/assert/tree/main/is-nonsymmetric-matrix

[@stdlib/assert/is-persymmetric-matrix]: https://github.com/stdlib-js/assert/tree/main/is-persymmetric-matrix

[@stdlib/assert/is-skew-centrosymmetric-matrix]: https://github.com/stdlib-js/assert/tree/main/is-skew-centrosymmetric-matrix

[@stdlib/assert/is-skew-persymmetric-matrix]: https://github.com/stdlib-js/assert/tree/main/is-skew-persymmetric-matrix

[@stdlib/assert/is-skew-symmetric-matrix]: https://github.com/stdlib-js/assert/tree/main/is-skew-symmetric-matrix

[@stdlib/assert/is-square-matrix]: https://github.com/stdlib-js/assert/tree/main/is-square-matrix

[@stdlib/assert/is-symmetric-matrix]: https://github.com/stdlib-js/assert/tree/main/is-symmetric-matrix

[@stdlib/assert/is-vector-like]: https://github.com/stdlib-js/assert/tree/main/is-vector-like

[@stdlib/assert/is-float32array]: https://github.com/stdlib-js/assert/tree/main/is-float32array

[@stdlib/assert/is-float64array]: https://github.com/stdlib-js/assert/tree/main/is-float64array

[@stdlib/assert/is-int16array]: https://github.com/stdlib-js/assert/tree/main/is-int16array

[@stdlib/assert/is-int32array]: https://github.com/stdlib-js/assert/tree/main/is-int32array

[@stdlib/assert/is-int8array]: https://github.com/stdlib-js/assert/tree/main/is-int8array

[@stdlib/assert/is-uint16array]: https://github.com/stdlib-js/assert/tree/main/is-uint16array

[@stdlib/assert/is-uint32array]: https://github.com/stdlib-js/assert/tree/main/is-uint32array

[@stdlib/assert/is-uint8array]: https://github.com/stdlib-js/assert/tree/main/is-uint8array

[@stdlib/assert/is-uint8clampedarray]: https://github.com/stdlib-js/assert/tree/main/is-uint8clampedarray

[@stdlib/assert/is-cube-number]: https://github.com/stdlib-js/assert/tree/main/is-cube-number

[@stdlib/assert/is-integer-array]: https://github.com/stdlib-js/assert/tree/main/is-integer-array

[@stdlib/assert/is-integer]: https://github.com/stdlib-js/assert/tree/main/is-integer

[@stdlib/assert/is-negative-integer-array]: https://github.com/stdlib-js/assert/tree/main/is-negative-integer-array

[@stdlib/assert/is-negative-integer]: https://github.com/stdlib-js/assert/tree/main/is-negative-integer

[@stdlib/assert/is-negative-number-array]: https://github.com/stdlib-js/assert/tree/main/is-negative-number-array

[@stdlib/assert/is-negative-number]: https://github.com/stdlib-js/assert/tree/main/is-negative-number

[@stdlib/assert/is-nonnegative-integer-array]: https://github.com/stdlib-js/assert/tree/main/is-nonnegative-integer-array

[@stdlib/assert/is-nonnegative-integer]: https://github.com/stdlib-js/assert/tree/main/is-nonnegative-integer

[@stdlib/assert/is-nonnegative-number-array]: https://github.com/stdlib-js/assert/tree/main/is-nonnegative-number-array

[@stdlib/assert/is-nonnegative-number]: https://github.com/stdlib-js/assert/tree/main/is-nonnegative-number

[@stdlib/assert/is-nonpositive-integer-array]: https://github.com/stdlib-js/assert/tree/main/is-nonpositive-integer-array

[@stdlib/assert/is-nonpositive-integer]: https://github.com/stdlib-js/assert/tree/main/is-nonpositive-integer

[@stdlib/assert/is-nonpositive-number-array]: https://github.com/stdlib-js/assert/tree/main/is-nonpositive-number-array

[@stdlib/assert/is-nonpositive-number]: https://github.com/stdlib-js/assert/tree/main/is-nonpositive-number

[@stdlib/assert/is-positive-integer-array]: https://github.com/stdlib-js/assert/tree/main/is-positive-integer-array

[@stdlib/assert/is-positive-integer]: https://github.com/stdlib-js/assert/tree/main/is-positive-integer

[@stdlib/assert/is-positive-number-array]: https://github.com/stdlib-js/assert/tree/main/is-positive-number-array

[@stdlib/assert/is-positive-number]: https://github.com/stdlib-js/assert/tree/main/is-positive-number

[@stdlib/assert/is-safe-integer-array]: https://github.com/stdlib-js/assert/tree/main/is-safe-integer-array

[@stdlib/assert/is-safe-integer]: https://github.com/stdlib-js/assert/tree/main/is-safe-integer

[@stdlib/assert/is-square-number]: https://github.com/stdlib-js/assert/tree/main/is-square-number

[@stdlib/assert/is-square-triangular-number]: https://github.com/stdlib-js/assert/tree/main/is-square-triangular-number

[@stdlib/assert/is-triangular-number]: https://github.com/stdlib-js/assert/tree/main/is-triangular-number

[@stdlib/assert/is-array-array]: https://github.com/stdlib-js/assert/tree/main/is-array-array

[@stdlib/assert/is-boolean-array]: https://github.com/stdlib-js/assert/tree/main/is-boolean-array

[@stdlib/assert/is-date-object-array]: https://github.com/stdlib-js/assert/tree/main/is-date-object-array

[@stdlib/assert/is-function-array]: https://github.com/stdlib-js/assert/tree/main/is-function-array

[@stdlib/assert/is-nan-array]: https://github.com/stdlib-js/assert/tree/main/is-nan-array

[@stdlib/assert/is-null-array]: https://github.com/stdlib-js/assert/tree/main/is-null-array

[@stdlib/assert/is-number-array]: https://github.com/stdlib-js/assert/tree/main/is-number-array

[@stdlib/assert/is-object-array]: https://github.com/stdlib-js/assert/tree/main/is-object-array

[@stdlib/assert/is-string-array]: https://github.com/stdlib-js/assert/tree/main/is-string-array

[@stdlib/assert/is-symbol-array]: https://github.com/stdlib-js/assert/tree/main/is-symbol-array

[@stdlib/assert/is-array]: https://github.com/stdlib-js/assert/tree/main/is-array

[@stdlib/assert/is-boolean]: https://github.com/stdlib-js/assert/tree/main/is-boolean

[@stdlib/assert/is-date-object]: https://github.com/stdlib-js/assert/tree/main/is-date-object

[@stdlib/assert/is-function]: https://github.com/stdlib-js/assert/tree/main/is-function

[@stdlib/assert/is-nan]: https://github.com/stdlib-js/assert/tree/main/is-nan

[@stdlib/assert/is-null]: https://github.com/stdlib-js/assert/tree/main/is-null

[@stdlib/assert/is-number]: https://github.com/stdlib-js/assert/tree/main/is-number

[@stdlib/assert/is-object]: https://github.com/stdlib-js/assert/tree/main/is-object

[@stdlib/assert/is-regexp]: https://github.com/stdlib-js/assert/tree/main/is-regexp

[@stdlib/assert/is-string]: https://github.com/stdlib-js/assert/tree/main/is-string

[@stdlib/assert/is-symbol]: https://github.com/stdlib-js/assert/tree/main/is-symbol

[@stdlib/assert/is-undefined]: https://github.com/stdlib-js/assert/tree/main/is-undefined

<!-- </toc-links> -->

</section>

<!-- /.links -->
