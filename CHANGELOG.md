# CHANGELOG

> Package changelog.

<section class="release" id="unreleased">

## Unreleased (2025-03-30)

<section class="packages">

### Packages

<section class="package" id="assert-unreleased">

#### [@stdlib/assert](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert)

<details>

<section class="features">

##### Features

-   [`9789396`](https://github.com/stdlib-js/stdlib/commit/9789396bd5111e963f4662c57c6b4159d4166946) - update namespace TypeScript declarations [(#5364)](https://github.com/stdlib-js/stdlib/pull/5364)
-   [`8b1548f`](https://github.com/stdlib-js/stdlib/commit/8b1548fb45c1ff131f5edac20cb984344a2d28ec) - update namespace TypeScript declarations [(#3190)](https://github.com/stdlib-js/stdlib/pull/3190)

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`8b1548f`](https://github.com/stdlib-js/stdlib/commit/8b1548fb45c1ff131f5edac20cb984344a2d28ec): update namespace declarations

    -   To migrate, users should consult the corresponding packages containing the respective implementations to determine what is breaking. The primary breakages come from the `blas/*` namespace, where we recently refactored how top-level BLAS APIs operate on input arguments.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-contains-unreleased">

#### [@stdlib/assert/contains](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/contains)

<details>

<section class="features">

##### Features

-   [`fa71a1e`](https://github.com/stdlib-js/stdlib/commit/fa71a1e16b3abbb33e716c96999579fb74a28058) - distinguish between signed zeros

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`fa71a1e`](https://github.com/stdlib-js/stdlib/commit/fa71a1e16b3abbb33e716c96999579fb74a28058): distinguish signed zeros

    -   To migrate, users should normalize signed zeros before invoking
        this function. Otherwise, users should use a different algorithm
        which uses strict equality to determine \"sameness\" (e.g., a package
        such as `@stdlib/array/base/includes`).
        ---
        type: pre_commit_static_analysis_report
        description: Results of running static analysis checks when committing changes.
        report:
          - task: lint_filenames
            status: passed
          - task: lint_editorconfig
            status: passed
          - task: lint_markdown
            status: passed
          - task: lint_package_json
            status: na
          - task: lint_repl_help
            status: passed
          - task: lint_javascript_src
            status: passed
          - task: lint_javascript_cli
            status: na
          - task: lint_javascript_examples
            status: na
          - task: lint_javascript_tests
            status: passed
          - task: lint_javascript_benchmarks
            status: na
          - task: lint_python
            status: na
          - task: lint_r
            status: na
          - task: lint_c_src
            status: na
          - task: lint_c_examples
            status: na
          - task: lint_c_benchmarks
            status: na
          - task: lint_c_tests_fixtures
            status: na
          - task: lint_shell
            status: na
          - task: lint_typescript_declarations
            status: passed
          - task: lint_typescript_tests
            status: na
          - task: lint_license_headers
            status: passed
        ---

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-electron-main-unreleased">

#### [@stdlib/assert/is-electron-main](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-electron-main)

<details>

<section class="issues">

##### Closed Issues

This release closes the following issue:

[#5814](https://github.com/stdlib-js/stdlib/issues/5814)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

</section>

<!-- /.packages -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`fa71a1e`](https://github.com/stdlib-js/stdlib/commit/fa71a1e16b3abbb33e716c96999579fb74a28058): distinguish signed zeros

    -   To migrate, users should normalize signed zeros before invoking
        this function. Otherwise, users should use a different algorithm
        which uses strict equality to determine \"sameness\" (e.g., a package
        such as `@stdlib/array/base/includes`).
        ---
        type: pre_commit_static_analysis_report
        description: Results of running static analysis checks when committing changes.
        report:
          - task: lint_filenames
            status: passed
          - task: lint_editorconfig
            status: passed
          - task: lint_markdown
            status: passed
          - task: lint_package_json
            status: na
          - task: lint_repl_help
            status: passed
          - task: lint_javascript_src
            status: passed
          - task: lint_javascript_cli
            status: na
          - task: lint_javascript_examples
            status: na
          - task: lint_javascript_tests
            status: passed
          - task: lint_javascript_benchmarks
            status: na
          - task: lint_python
            status: na
          - task: lint_r
            status: na
          - task: lint_c_src
            status: na
          - task: lint_c_examples
            status: na
          - task: lint_c_benchmarks
            status: na
          - task: lint_c_tests_fixtures
            status: na
          - task: lint_shell
            status: na
          - task: lint_typescript_declarations
            status: passed
          - task: lint_typescript_tests
            status: na
          - task: lint_license_headers
            status: passed
        ---

-   [`8b1548f`](https://github.com/stdlib-js/stdlib/commit/8b1548fb45c1ff131f5edac20cb984344a2d28ec): update namespace declarations

    -   To migrate, users should consult the corresponding packages containing the respective implementations to determine what is breaking. The primary breakages come from the `blas/*` namespace, where we recently refactored how top-level BLAS APIs operate on input arguments.

</section>

<!-- /.breaking-changes -->

<section class="issues">

### Closed Issues

This release closes the following issue:

[#5814](https://github.com/stdlib-js/stdlib/issues/5814)

</section>

<!-- /.issues -->

<section class="contributors">

### Contributors

A total of 3 people contributed to this release. Thank you to the following contributors:

-   Anshu Kumar
-   Athan Reines
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

<section class="commits">

### Commits

<details>

-   [`fa71a1e`](https://github.com/stdlib-js/stdlib/commit/fa71a1e16b3abbb33e716c96999579fb74a28058) - **feat:** distinguish between signed zeros _(by Athan Reines)_
-   [`8fe91fb`](https://github.com/stdlib-js/stdlib/commit/8fe91fb43e957de06c91f7cfcb77f6d806acac00) - **chore:** require process module to resolve lint error [(#5819)](https://github.com/stdlib-js/stdlib/pull/5819) _(by Anshu Kumar, Philipp Burckhardt)_
-   [`9789396`](https://github.com/stdlib-js/stdlib/commit/9789396bd5111e963f4662c57c6b4159d4166946) - **feat:** update namespace TypeScript declarations [(#5364)](https://github.com/stdlib-js/stdlib/pull/5364) _(by stdlib-bot)_
-   [`d631f9f`](https://github.com/stdlib-js/stdlib/commit/d631f9f628dd9ebe8a1db319e00ae2ef69e92edc) - **refactor:** update require paths _(by Athan Reines)_
-   [`fb7cbd3`](https://github.com/stdlib-js/stdlib/commit/fb7cbd31c78b05a7008a06e232fded012bab9c52) - **docs:** update related packages sections [(#5002)](https://github.com/stdlib-js/stdlib/pull/5002) _(by stdlib-bot)_
-   [`e18ac04`](https://github.com/stdlib-js/stdlib/commit/e18ac04fcc119deda36c9da4a996a3b75b1e6d9f) - **style:** add missing spaces _(by Philipp Burckhardt)_
-   [`17b7218`](https://github.com/stdlib-js/stdlib/commit/17b72186405d4627a3d51d38aeebfeff90b4924c) - **docs:** update related packages sections [(#4876)](https://github.com/stdlib-js/stdlib/pull/4876) _(by stdlib-bot)_
-   [`ff97e29`](https://github.com/stdlib-js/stdlib/commit/ff97e29be19b90e74565d410af768774bf96bf2e) - **chore:** update wording from non-negative to nonnegative _(by Philipp Burckhardt)_
-   [`563a4f8`](https://github.com/stdlib-js/stdlib/commit/563a4f826ab757636ae08094fc6f62746042da4b) - **docs:** update related packages sections [(#4594)](https://github.com/stdlib-js/stdlib/pull/4594) _(by stdlib-bot)_
-   [`8a15baa`](https://github.com/stdlib-js/stdlib/commit/8a15baa639e8c4f45479821cf7331715e0546e86) - **docs:** update related packages sections [(#4425)](https://github.com/stdlib-js/stdlib/pull/4425) _(by stdlib-bot)_
-   [`4a70790`](https://github.com/stdlib-js/stdlib/commit/4a707903dfef7c2b56216000165706497d19a251) - **style:** add missing spaces _(by Philipp Burckhardt)_
-   [`7d6450c`](https://github.com/stdlib-js/stdlib/commit/7d6450c671dd91fffbec536a216a76f9e094dad0) - **docs:** update related packages sections [(#4186)](https://github.com/stdlib-js/stdlib/pull/4186) _(by stdlib-bot)_
-   [`d3d3d14`](https://github.com/stdlib-js/stdlib/commit/d3d3d14939ac77ab7d5a4476551108f8ff1c3f1f) - **docs:** update related packages sections [(#4149)](https://github.com/stdlib-js/stdlib/pull/4149) _(by stdlib-bot, Philipp Burckhardt)_
-   [`5b71452`](https://github.com/stdlib-js/stdlib/commit/5b71452bd40811341a2e4eaab018c3cc17c5feac) - **docs:** update related packages sections [(#4135)](https://github.com/stdlib-js/stdlib/pull/4135) _(by stdlib-bot, Athan Reines)_
-   [`a1b543a`](https://github.com/stdlib-js/stdlib/commit/a1b543a2a1bdf4d1fb9438bd4a13cb971af62063) - **docs:** update related packages sections [(#4009)](https://github.com/stdlib-js/stdlib/pull/4009) _(by stdlib-bot, Philipp Burckhardt)_
-   [`32deb11`](https://github.com/stdlib-js/stdlib/commit/32deb11c6a2453748d8db9554b6bb3fdb73a077f) - **docs:** update related packages sections [(#3976)](https://github.com/stdlib-js/stdlib/pull/3976) _(by stdlib-bot)_
-   [`ff25e13`](https://github.com/stdlib-js/stdlib/commit/ff25e1324e1507cc076078e82badce7fdf7915f6) - **docs:** remove excess whitespace _(by Philipp Burckhardt)_
-   [`b8c41df`](https://github.com/stdlib-js/stdlib/commit/b8c41df78cd2cdc9cd3c3c6b223759d32f4f6e14) - **docs:** update related packages sections [(#3915)](https://github.com/stdlib-js/stdlib/pull/3915) _(by stdlib-bot)_
-   [`2825b42`](https://github.com/stdlib-js/stdlib/commit/2825b42e8cd7483d15dfed1c6b389bfcb86d7ca0) - **docs:** update related packages sections [(#3898)](https://github.com/stdlib-js/stdlib/pull/3898) _(by stdlib-bot)_
-   [`ac06419`](https://github.com/stdlib-js/stdlib/commit/ac06419c2a8358dfd80818823f571077eb58958e) - **docs:** update related packages sections [(#3387)](https://github.com/stdlib-js/stdlib/pull/3387) _(by stdlib-bot)_
-   [`7e8187a`](https://github.com/stdlib-js/stdlib/commit/7e8187a766886c2fb9cdc356cf781f0a1802172c) - **docs:** update related packages sections [(#3368)](https://github.com/stdlib-js/stdlib/pull/3368) _(by stdlib-bot)_
-   [`9ba0dbd`](https://github.com/stdlib-js/stdlib/commit/9ba0dbd839707695a05fda5d4f50d67c5aba52f7) - **chore:** use relative paths to load main package export _(by Philipp Burckhardt)_
-   [`b6a2b0b`](https://github.com/stdlib-js/stdlib/commit/b6a2b0b27dc8cc1e9fc02d9679a3ce468cf49b9d) - **docs:** update namespace table of contents [(#3192)](https://github.com/stdlib-js/stdlib/pull/3192) _(by stdlib-bot, Philipp Burckhardt)_
-   [`2507d8e`](https://github.com/stdlib-js/stdlib/commit/2507d8eea8259c4ebc393a8150202b60c8302ec0) - **build:** support bundling of tests and benchmarks _(by Athan Reines)_
-   [`8b1548f`](https://github.com/stdlib-js/stdlib/commit/8b1548fb45c1ff131f5edac20cb984344a2d28ec) - **feat:** update namespace TypeScript declarations [(#3190)](https://github.com/stdlib-js/stdlib/pull/3190) _(by stdlib-bot, Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

</section>

<!-- /.release -->

<section class="release" id="v0.3.3">

## 0.3.3 (2024-11-05)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.3.2">

## 0.3.2 (2024-11-05)

<section class="packages">

### Packages

<section class="package" id="assert-v0.3.2">

#### [@stdlib/assert](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert)

<details>

<section class="features">

##### Features

-   [`786e74e`](https://github.com/stdlib-js/stdlib/commit/786e74e1a1eb5ca959ac7150cb6c1a75cd86c843) - add `isndarrayLikeWithDataType` to namespace
-   [`5279713`](https://github.com/stdlib-js/stdlib/commit/527971383e70a0e92dbca647dabfef27f294f149) - add `isWebAssemblyMemory` to namespace
-   [`e97215f`](https://github.com/stdlib-js/stdlib/commit/e97215fbf9f4d1ec8548086f78ed04a0ec80a43f) - add `hasBtoaSupport` to namespace
-   [`80b8061`](https://github.com/stdlib-js/stdlib/commit/80b8061c5888d04dcaa48f0363669ba2606856df) - add `hasAtobSupport` to namespace
-   [`1123204`](https://github.com/stdlib-js/stdlib/commit/11232044680f87bb3b53b447dab24e4e54b659ef) - add `isEqualArray` to namespace
-   [`d64eaf8`](https://github.com/stdlib-js/stdlib/commit/d64eaf86a770b6d7fad0078d65afe7e2a79361cb) - add `isSameArrayLike` to namespace

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-has-atob-support-v0.3.2">

#### [@stdlib/assert/has-atob-support](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/has-atob-support)

<details>

<section class="features">

##### Features

-   [`f8e39ea`](https://github.com/stdlib-js/stdlib/commit/f8e39ea1a6d25ebb156f0d37219c6680d87c454f) - add `assert/has-atob-support`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-has-btoa-support-v0.3.2">

#### [@stdlib/assert/has-btoa-support](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/has-btoa-support)

<details>

<section class="features">

##### Features

-   [`33219ce`](https://github.com/stdlib-js/stdlib/commit/33219cecbc347a85b4bb9659d00005fe7b5a6e64) - add `assert/has-btoa-support`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-equal-array-v0.3.2">

#### [@stdlib/assert/is-equal-array](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-equal-array)

<details>

<section class="features">

##### Features

-   [`c992288`](https://github.com/stdlib-js/stdlib/commit/c99228859333cce71cb2f913aa8acb2020cda9a0) - add `assert/is-equal-array`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-ndarray-like-with--v0.3.2">

#### [@stdlib/assert/is-ndarray-like-with-](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-ndarray-like-with-)

<details>

<section class="features">

##### Features

-   [`755425a`](https://github.com/stdlib-js/stdlib/commit/755425a26f81cc16d2d37d8217efaab339c6416a) - add `assert/is-ndarray-like-with-data-type`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-same-accessor-array-v0.3.2">

#### [@stdlib/assert/is-same-accessor-array](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-same-accessor-array)

<details>

<section class="features">

##### Features

-   [`7bb8e20`](https://github.com/stdlib-js/stdlib/commit/7bb8e2020d334d9f9a838291e78d2f7442b24a67) - add `@stdlib/assert/is-same-accessor-array`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-same-array-like-v0.3.2">

#### [@stdlib/assert/is-same-array-like](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-same-array-like)

<details>

<section class="features">

##### Features

-   [`4e4d18d`](https://github.com/stdlib-js/stdlib/commit/4e4d18d142ca65c1257c2e2b7fa979dbbafb4741) - add `assert/is-same-array-like`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-same-array-like-object-v0.3.2">

#### [@stdlib/assert/is-same-array-like-object](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-same-array-like-object)

<details>

<section class="features">

##### Features

-   [`15e6c71`](https://github.com/stdlib-js/stdlib/commit/15e6c71cac991fadbb8f804a7811650daa0d5e87) - add `assert/is-same-array-like-object`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-same-typed-array-like-v0.3.2">

#### [@stdlib/assert/is-same-typed-array-like](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-same-typed-array-like)

<details>

<section class="features">

##### Features

-   [`4927336`](https://github.com/stdlib-js/stdlib/commit/4927336d5b2b4a7d2baf0e7d854b406d309fac17) - add `assert/is-same-typed-array-like` [(#2939)](https://github.com/stdlib-js/stdlib/pull/2939)

</section>

<!-- /.features -->

<section class="issues">

##### Closed Issues

This release closes the following issue:

[#2887](https://github.com/stdlib-js/stdlib/issues/2887)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-wasm-memory-v0.3.2">

#### [@stdlib/assert/is-wasm-memory](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-wasm-memory)

<details>

<section class="features">

##### Features

-   [`718ba36`](https://github.com/stdlib-js/stdlib/commit/718ba365fd18e0e35582433c22f6878a0e744675) - add `assert/is-wasm-memory`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

</section>

<!-- /.packages -->

<section class="issues">

### Closed Issues

This release closes the following issue:

[#2887](https://github.com/stdlib-js/stdlib/issues/2887)

</section>

<!-- /.issues -->

<section class="contributors">

### Contributors

A total of 6 people contributed to this release. Thank you to the following contributors:

-   Aayush Khanna
-   Aditya Sapra
-   Athan Reines
-   Philipp Burckhardt
-   Soumajit Chatterjee
-   Yaswanth Kosuru

</section>

<!-- /.contributors -->

<section class="commits">

### Commits

<details>

-   [`43e7a33`](https://github.com/stdlib-js/stdlib/commit/43e7a3386606e54475e872d24ddf11fa6c122c42) - **chore:** minor clean-up after code review _(by Philipp Burckhardt)_
-   [`4927336`](https://github.com/stdlib-js/stdlib/commit/4927336d5b2b4a7d2baf0e7d854b406d309fac17) - **feat:** add `assert/is-same-typed-array-like` [(#2939)](https://github.com/stdlib-js/stdlib/pull/2939) _(by Aditya Sapra, Philipp Burckhardt)_
-   [`abf0407`](https://github.com/stdlib-js/stdlib/commit/abf040787f6598438b0100a729a8331b7f80f62f) - **chore:** resolve lint errors in TS files _(by Philipp Burckhardt)_
-   [`ff9fa81`](https://github.com/stdlib-js/stdlib/commit/ff9fa81f917d539f1a11fba5580e1744991a8a11) - **docs:** fix TSDoc lint errors _(by Philipp Burckhardt)_
-   [`f477e26`](https://github.com/stdlib-js/stdlib/commit/f477e26a03e5e365f2e7c4035959a2fb789698a3) - **chore:** move functions to parent scope _(by Philipp Burckhardt)_
-   [`8f72b43`](https://github.com/stdlib-js/stdlib/commit/8f72b432c0fc81a78641d5689722ecc9671c6f02) - **style:** add missing spaces around parentheses _(by Philipp Burckhardt)_
-   [`6e9f42e`](https://github.com/stdlib-js/stdlib/commit/6e9f42e4c912485d9896eaa16c88b70fd3688e97) - **docs:** harmonize list formatting in repl.txt and ensure starting newline _(by Philipp Burckhardt)_
-   [`50ab973`](https://github.com/stdlib-js/stdlib/commit/50ab973780d5569b7a5e30d7cd9236abcca8d648) - **docs:** fix description _(by Athan Reines)_
-   [`786e74e`](https://github.com/stdlib-js/stdlib/commit/786e74e1a1eb5ca959ac7150cb6c1a75cd86c843) - **feat:** add `isndarrayLikeWithDataType` to namespace _(by Athan Reines)_
-   [`755425a`](https://github.com/stdlib-js/stdlib/commit/755425a26f81cc16d2d37d8217efaab339c6416a) - **feat:** add `assert/is-ndarray-like-with-data-type` _(by Athan Reines)_
-   [`f387603`](https://github.com/stdlib-js/stdlib/commit/f387603e739f88a38af3263ce6ff675ad903ee8c) - **docs:** consistently use declarative instead of imperative sentences outside of intros _(by Philipp Burckhardt)_
-   [`ed44fee`](https://github.com/stdlib-js/stdlib/commit/ed44feecb9eaa5e0849d1a533e5415624d0aa338) - **style:** use imperative in package.json description and end with period _(by Philipp Burckhardt)_
-   [`31fd427`](https://github.com/stdlib-js/stdlib/commit/31fd42744ec5d7073041f97c6f72350b8005c0fc) - **style:** remove unwanted empty lines _(by Philipp Burckhardt)_
-   [`5279713`](https://github.com/stdlib-js/stdlib/commit/527971383e70a0e92dbca647dabfef27f294f149) - **feat:** add `isWebAssemblyMemory` to namespace _(by Athan Reines)_
-   [`718ba36`](https://github.com/stdlib-js/stdlib/commit/718ba365fd18e0e35582433c22f6878a0e744675) - **feat:** add `assert/is-wasm-memory` _(by Athan Reines)_
-   [`15e6c71`](https://github.com/stdlib-js/stdlib/commit/15e6c71cac991fadbb8f804a7811650daa0d5e87) - **feat:** add `assert/is-same-array-like-object` _(by Yaswanth Kosuru, Philipp Burckhardt)_
-   [`7bb8e20`](https://github.com/stdlib-js/stdlib/commit/7bb8e2020d334d9f9a838291e78d2f7442b24a67) - **feat:** add `@stdlib/assert/is-same-accessor-array` _(by Aayush Khanna, Philipp Burckhardt)_
-   [`1f6fc8b`](https://github.com/stdlib-js/stdlib/commit/1f6fc8b5b99837f9d8b378413298f7544f1cb38e) - **bench:** update benchmarks to measure affirmative/negative test values _(by Soumajit Chatterjee, Philipp Burckhardt)_
-   [`e97215f`](https://github.com/stdlib-js/stdlib/commit/e97215fbf9f4d1ec8548086f78ed04a0ec80a43f) - **feat:** add `hasBtoaSupport` to namespace _(by Athan Reines)_
-   [`33219ce`](https://github.com/stdlib-js/stdlib/commit/33219cecbc347a85b4bb9659d00005fe7b5a6e64) - **feat:** add `assert/has-btoa-support` _(by Athan Reines)_
-   [`80b8061`](https://github.com/stdlib-js/stdlib/commit/80b8061c5888d04dcaa48f0363669ba2606856df) - **feat:** add `hasAtobSupport` to namespace _(by Athan Reines)_
-   [`f8e39ea`](https://github.com/stdlib-js/stdlib/commit/f8e39ea1a6d25ebb156f0d37219c6680d87c454f) - **feat:** add `assert/has-atob-support` _(by Athan Reines)_
-   [`1123204`](https://github.com/stdlib-js/stdlib/commit/11232044680f87bb3b53b447dab24e4e54b659ef) - **feat:** add `isEqualArray` to namespace _(by Athan Reines)_
-   [`c992288`](https://github.com/stdlib-js/stdlib/commit/c99228859333cce71cb2f913aa8acb2020cda9a0) - **feat:** add `assert/is-equal-array` _(by Athan Reines)_
-   [`d64eaf8`](https://github.com/stdlib-js/stdlib/commit/d64eaf86a770b6d7fad0078d65afe7e2a79361cb) - **feat:** add `isSameArrayLike` to namespace _(by Athan Reines)_
-   [`4e4d18d`](https://github.com/stdlib-js/stdlib/commit/4e4d18d142ca65c1257c2e2b7fa979dbbafb4741) - **feat:** add `assert/is-same-array-like` _(by Athan Reines)_

</details>

</section>

<!-- /.commits -->

</section>

<!-- /.release -->

<section class="release" id="v0.3.1">

## 0.3.1 (2024-08-18)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.3.0">

## 0.3.0 (2024-08-17)

<section class="packages">

### Packages

<section class="package" id="assert-v0.3.0">

#### [@stdlib/assert](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert)

<details>

<section class="features">

##### Features

-   [`e624c49`](https://github.com/stdlib-js/stdlib/commit/e624c49ec5d522b7dd606df464fc65c7ff01e893) - update namespace TypeScript declarations [(#1937)](https://github.com/stdlib-js/stdlib/pull/1937)
-   [`9948198`](https://github.com/stdlib-js/stdlib/commit/99481980825b0aeae43a3074a4d6ce96c9eafef7) - add `isNonNegativeFinite` to namespace

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is--v0.3.0">

#### [@stdlib/assert/is-](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`30112b7`](https://github.com/stdlib-js/stdlib/commit/30112b7202358710becc8ea77f4261dd3e7459f3) - replace use of type guards with boolean return type

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-absolute-http-uri-v0.3.0">

#### [@stdlib/assert/is-absolute-http-uri](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-absolute-http-uri)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`30112b7`](https://github.com/stdlib-js/stdlib/commit/30112b7202358710becc8ea77f4261dd3e7459f3) - replace use of type guards with boolean return type

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-absolute-path-v0.3.0">

#### [@stdlib/assert/is-absolute-path](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-absolute-path)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`30112b7`](https://github.com/stdlib-js/stdlib/commit/30112b7202358710becc8ea77f4261dd3e7459f3) - replace use of type guards with boolean return type

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-absolute-uri-v0.3.0">

#### [@stdlib/assert/is-absolute-uri](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-absolute-uri)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`30112b7`](https://github.com/stdlib-js/stdlib/commit/30112b7202358710becc8ea77f4261dd3e7459f3) - replace use of type guards with boolean return type

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-alphagram-v0.3.0">

#### [@stdlib/assert/is-alphagram](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-alphagram)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`30112b7`](https://github.com/stdlib-js/stdlib/commit/30112b7202358710becc8ea77f4261dd3e7459f3) - replace use of type guards with boolean return type

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-alphanumeric-v0.3.0">

#### [@stdlib/assert/is-alphanumeric](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-alphanumeric)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`30112b7`](https://github.com/stdlib-js/stdlib/commit/30112b7202358710becc8ea77f4261dd3e7459f3) - replace use of type guards with boolean return type

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-array-length-v0.3.0">

#### [@stdlib/assert/is-array-length](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-array-length)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`b77ddf7`](https://github.com/stdlib-js/stdlib/commit/b77ddf74c62c7031c7a542d8a661a51e19fd6ebd) - replace use of type guards with boolean return type

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-ascii-v0.3.0">

#### [@stdlib/assert/is-ascii](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-ascii)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`30112b7`](https://github.com/stdlib-js/stdlib/commit/30112b7202358710becc8ea77f4261dd3e7459f3) - replace use of type guards with boolean return type

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-between-v0.3.0">

#### [@stdlib/assert/is-between](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-between)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`b77ddf7`](https://github.com/stdlib-js/stdlib/commit/b77ddf74c62c7031c7a542d8a661a51e19fd6ebd) - replace use of type guards with boolean return type

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-blank-string-v0.3.0">

#### [@stdlib/assert/is-blank-string](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-blank-string)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`30112b7`](https://github.com/stdlib-js/stdlib/commit/30112b7202358710becc8ea77f4261dd3e7459f3) - replace use of type guards with boolean return type

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-booleanarray-v0.3.0">

#### [@stdlib/assert/is-booleanarray](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-booleanarray)

<details>

<section class="features">

##### Features

-   [`7c36ea3`](https://github.com/stdlib-js/stdlib/commit/7c36ea3437d16b7ce4fd86d76636b5a5d77d04c3) - add `assert/is-booleanarray` [(#2299)](https://github.com/stdlib-js/stdlib/pull/2299)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-camelcase-v0.3.0">

#### [@stdlib/assert/is-camelcase](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-camelcase)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`30112b7`](https://github.com/stdlib-js/stdlib/commit/30112b7202358710becc8ea77f4261dd3e7459f3) - replace use of type guards with boolean return type

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-capitalized-v0.3.0">

#### [@stdlib/assert/is-capitalized](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-capitalized)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`30112b7`](https://github.com/stdlib-js/stdlib/commit/30112b7202358710becc8ea77f4261dd3e7459f3) - replace use of type guards with boolean return type

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-composite-v0.3.0">

#### [@stdlib/assert/is-composite](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-composite)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`b77ddf7`](https://github.com/stdlib-js/stdlib/commit/b77ddf74c62c7031c7a542d8a661a51e19fd6ebd) - replace use of type guards with boolean return type

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-constantcase-v0.3.0">

#### [@stdlib/assert/is-constantcase](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-constantcase)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`30112b7`](https://github.com/stdlib-js/stdlib/commit/30112b7202358710becc8ea77f4261dd3e7459f3) - replace use of type guards with boolean return type

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-cube-number-v0.3.0">

#### [@stdlib/assert/is-cube-number](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-cube-number)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`b77ddf7`](https://github.com/stdlib-js/stdlib/commit/b77ddf74c62c7031c7a542d8a661a51e19fd6ebd) - replace use of type guards with boolean return type

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-digit-string-v0.3.0">

#### [@stdlib/assert/is-digit-string](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-digit-string)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`30112b7`](https://github.com/stdlib-js/stdlib/commit/30112b7202358710becc8ea77f4261dd3e7459f3) - replace use of type guards with boolean return type

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-docker-v0.3.0">

#### [@stdlib/assert/is-docker](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-docker)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`430a519`](https://github.com/stdlib-js/stdlib/commit/430a519e63cdbc09ca8df52d125067d43249185d) - use isError package so function works across realms

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-domain-name-v0.3.0">

#### [@stdlib/assert/is-domain-name](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-domain-name)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`30112b7`](https://github.com/stdlib-js/stdlib/commit/30112b7202358710becc8ea77f4261dd3e7459f3) - replace use of type guards with boolean return type

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-duration-string-v0.3.0">

#### [@stdlib/assert/is-duration-string](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-duration-string)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`30112b7`](https://github.com/stdlib-js/stdlib/commit/30112b7202358710becc8ea77f4261dd3e7459f3) - replace use of type guards with boolean return type

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-email-address-v0.3.0">

#### [@stdlib/assert/is-email-address](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-email-address)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`30112b7`](https://github.com/stdlib-js/stdlib/commit/30112b7202358710becc8ea77f4261dd3e7459f3) - replace use of type guards with boolean return type

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-empty-string-v0.3.0">

#### [@stdlib/assert/is-empty-string](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-empty-string)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`30112b7`](https://github.com/stdlib-js/stdlib/commit/30112b7202358710becc8ea77f4261dd3e7459f3) - replace use of type guards with boolean return type

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-even-v0.3.0">

#### [@stdlib/assert/is-even](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-even)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`b77ddf7`](https://github.com/stdlib-js/stdlib/commit/b77ddf74c62c7031c7a542d8a661a51e19fd6ebd) - replace use of type guards with boolean return type

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-finite-v0.3.0">

#### [@stdlib/assert/is-finite](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-finite)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`b77ddf7`](https://github.com/stdlib-js/stdlib/commit/b77ddf74c62c7031c7a542d8a661a51e19fd6ebd) - replace use of type guards with boolean return type

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-hex-string-v0.3.0">

#### [@stdlib/assert/is-hex-string](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-hex-string)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`30112b7`](https://github.com/stdlib-js/stdlib/commit/30112b7202358710becc8ea77f4261dd3e7459f3) - replace use of type guards with boolean return type

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-infinite-v0.3.0">

#### [@stdlib/assert/is-infinite](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-infinite)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`b77ddf7`](https://github.com/stdlib-js/stdlib/commit/b77ddf74c62c7031c7a542d8a661a51e19fd6ebd) - replace use of type guards with boolean return type

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-integer-v0.3.0">

#### [@stdlib/assert/is-integer](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-integer)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`b77ddf7`](https://github.com/stdlib-js/stdlib/commit/b77ddf74c62c7031c7a542d8a661a51e19fd6ebd) - replace use of type guards with boolean return type

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-json-v0.3.0">

#### [@stdlib/assert/is-json](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-json)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`30112b7`](https://github.com/stdlib-js/stdlib/commit/30112b7202358710becc8ea77f4261dd3e7459f3) - replace use of type guards with boolean return type

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-kebabcase-v0.3.0">

#### [@stdlib/assert/is-kebabcase](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-kebabcase)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`30112b7`](https://github.com/stdlib-js/stdlib/commit/30112b7202358710becc8ea77f4261dd3e7459f3) - replace use of type guards with boolean return type

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-localhost-v0.3.0">

#### [@stdlib/assert/is-localhost](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-localhost)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`30112b7`](https://github.com/stdlib-js/stdlib/commit/30112b7202358710becc8ea77f4261dd3e7459f3) - replace use of type guards with boolean return type

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-lowercase-v0.3.0">

#### [@stdlib/assert/is-lowercase](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-lowercase)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`30112b7`](https://github.com/stdlib-js/stdlib/commit/30112b7202358710becc8ea77f4261dd3e7459f3) - replace use of type guards with boolean return type

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-nan-v0.3.0">

#### [@stdlib/assert/is-nan](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-nan)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`b77ddf7`](https://github.com/stdlib-js/stdlib/commit/b77ddf74c62c7031c7a542d8a661a51e19fd6ebd) - replace use of type guards with boolean return type

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-negative-finite-v0.3.0">

#### [@stdlib/assert/is-negative-finite](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-negative-finite)

<details>

<section class="features">

##### Features

-   [`609682c`](https://github.com/stdlib-js/stdlib/commit/609682c8ef64ecf0fb6a4d7094e226a99a985ab5) - add assert/is-negative-finite

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`b77ddf7`](https://github.com/stdlib-js/stdlib/commit/b77ddf74c62c7031c7a542d8a661a51e19fd6ebd) - replace use of type guards with boolean return type

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-negative-integer-v0.3.0">

#### [@stdlib/assert/is-negative-integer](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-negative-integer)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`b77ddf7`](https://github.com/stdlib-js/stdlib/commit/b77ddf74c62c7031c7a542d8a661a51e19fd6ebd) - replace use of type guards with boolean return type

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-negative-number-v0.3.0">

#### [@stdlib/assert/is-negative-number](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-negative-number)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`b77ddf7`](https://github.com/stdlib-js/stdlib/commit/b77ddf74c62c7031c7a542d8a661a51e19fd6ebd) - replace use of type guards with boolean return type

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-negative-zero-v0.3.0">

#### [@stdlib/assert/is-negative-zero](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-negative-zero)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`b77ddf7`](https://github.com/stdlib-js/stdlib/commit/b77ddf74c62c7031c7a542d8a661a51e19fd6ebd) - replace use of type guards with boolean return type

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-nonnegative-finite-v0.3.0">

#### [@stdlib/assert/is-nonnegative-finite](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-nonnegative-finite)

<details>

<section class="features">

##### Features

-   [`50616dc`](https://github.com/stdlib-js/stdlib/commit/50616dccd4e5fdda898315358bf5f1d91a254b22) - add @stdlib/assert/is-nonnegative-finite [(#1354)](https://github.com/stdlib-js/stdlib/pull/1354)

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`b77ddf7`](https://github.com/stdlib-js/stdlib/commit/b77ddf74c62c7031c7a542d8a661a51e19fd6ebd) - replace use of type guards with boolean return type
-   [`0a081ce`](https://github.com/stdlib-js/stdlib/commit/0a081ce87dec3491252ffb9c45cc9fa6e695cbe5) - use `valueOf` to return primitive value

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-nonnegative-integer-v0.3.0">

#### [@stdlib/assert/is-nonnegative-integer](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-nonnegative-integer)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`b77ddf7`](https://github.com/stdlib-js/stdlib/commit/b77ddf74c62c7031c7a542d8a661a51e19fd6ebd) - replace use of type guards with boolean return type

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-nonnegative-number-v0.3.0">

#### [@stdlib/assert/is-nonnegative-number](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-nonnegative-number)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`b77ddf7`](https://github.com/stdlib-js/stdlib/commit/b77ddf74c62c7031c7a542d8a661a51e19fd6ebd) - replace use of type guards with boolean return type

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-nonpositive-finite-v0.3.0">

#### [@stdlib/assert/is-nonpositive-finite](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-nonpositive-finite)

<details>

<section class="features">

##### Features

-   [`f36bef4`](https://github.com/stdlib-js/stdlib/commit/f36bef4200f32f136243c0ff1ebd083dfcf1c133) - add `assert/is-nonpositive-finite` [(#1396)](https://github.com/stdlib-js/stdlib/pull/1396)

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`b77ddf7`](https://github.com/stdlib-js/stdlib/commit/b77ddf74c62c7031c7a542d8a661a51e19fd6ebd) - replace use of type guards with boolean return type

</section>

<!-- /.bug-fixes -->

<section class="issues">

##### Closed Issues

This release closes the following issue:

[#1343](https://github.com/stdlib-js/stdlib/issues/1343)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-nonpositive-integer-v0.3.0">

#### [@stdlib/assert/is-nonpositive-integer](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-nonpositive-integer)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`b77ddf7`](https://github.com/stdlib-js/stdlib/commit/b77ddf74c62c7031c7a542d8a661a51e19fd6ebd) - replace use of type guards with boolean return type

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-nonpositive-number-v0.3.0">

#### [@stdlib/assert/is-nonpositive-number](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-nonpositive-number)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`b77ddf7`](https://github.com/stdlib-js/stdlib/commit/b77ddf74c62c7031c7a542d8a661a51e19fd6ebd) - replace use of type guards with boolean return type

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-odd-v0.3.0">

#### [@stdlib/assert/is-odd](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-odd)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`b77ddf7`](https://github.com/stdlib-js/stdlib/commit/b77ddf74c62c7031c7a542d8a661a51e19fd6ebd) - replace use of type guards with boolean return type

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-pascalcase-v0.3.0">

#### [@stdlib/assert/is-pascalcase](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-pascalcase)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`30112b7`](https://github.com/stdlib-js/stdlib/commit/30112b7202358710becc8ea77f4261dd3e7459f3) - replace use of type guards with boolean return type

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-positive-finite-v0.3.0">

#### [@stdlib/assert/is-positive-finite](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-positive-finite)

<details>

<section class="features">

##### Features

-   [`a4e21fb`](https://github.com/stdlib-js/stdlib/commit/a4e21fbfa3d03a1213c0cf4ec3e7305cd2a0c215) - add `assert/is-positive-finite` [(#1358)](https://github.com/stdlib-js/stdlib/pull/1358)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-positive-integer-v0.3.0">

#### [@stdlib/assert/is-positive-integer](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-positive-integer)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`b77ddf7`](https://github.com/stdlib-js/stdlib/commit/b77ddf74c62c7031c7a542d8a661a51e19fd6ebd) - replace use of type guards with boolean return type

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-positive-number-v0.3.0">

#### [@stdlib/assert/is-positive-number](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-positive-number)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`b77ddf7`](https://github.com/stdlib-js/stdlib/commit/b77ddf74c62c7031c7a542d8a661a51e19fd6ebd) - replace use of type guards with boolean return type

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-positive-zero-v0.3.0">

#### [@stdlib/assert/is-positive-zero](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-positive-zero)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`b77ddf7`](https://github.com/stdlib-js/stdlib/commit/b77ddf74c62c7031c7a542d8a661a51e19fd6ebd) - replace use of type guards with boolean return type

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-prime-v0.3.0">

#### [@stdlib/assert/is-prime](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-prime)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`b77ddf7`](https://github.com/stdlib-js/stdlib/commit/b77ddf74c62c7031c7a542d8a661a51e19fd6ebd) - replace use of type guards with boolean return type

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-probability-v0.3.0">

#### [@stdlib/assert/is-probability](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-probability)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`b77ddf7`](https://github.com/stdlib-js/stdlib/commit/b77ddf74c62c7031c7a542d8a661a51e19fd6ebd) - replace use of type guards with boolean return type

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-ragged-nested-array-v0.3.0">

#### [@stdlib/assert/is-ragged-nested-array](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-ragged-nested-array)

<details>

<section class="features">

##### Features

-   [`0fb4869`](https://github.com/stdlib-js/stdlib/commit/0fb486917502a8397c281872831c70b2e58b7f27) - add `assert/is-ragged-nested-array` (#1368) [(#1368)](https://github.com/stdlib-js/stdlib/pull/1368 )

</section>

<!-- /.features -->

<section class="issues">

##### Closed Issues

This release closes the following issue:

[#1347](https://github.com/stdlib-js/stdlib/issues/1347)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-regexp-string-v0.3.0">

#### [@stdlib/assert/is-regexp-string](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-regexp-string)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`30112b7`](https://github.com/stdlib-js/stdlib/commit/30112b7202358710becc8ea77f4261dd3e7459f3) - replace use of type guards with boolean return type

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-relative-path-v0.3.0">

#### [@stdlib/assert/is-relative-path](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-relative-path)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`30112b7`](https://github.com/stdlib-js/stdlib/commit/30112b7202358710becc8ea77f4261dd3e7459f3) - replace use of type guards with boolean return type

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-relative-uri-v0.3.0">

#### [@stdlib/assert/is-relative-uri](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-relative-uri)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`30112b7`](https://github.com/stdlib-js/stdlib/commit/30112b7202358710becc8ea77f4261dd3e7459f3) - replace use of type guards with boolean return type

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-safe-integer-v0.3.0">

#### [@stdlib/assert/is-safe-integer](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-safe-integer)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`b77ddf7`](https://github.com/stdlib-js/stdlib/commit/b77ddf74c62c7031c7a542d8a661a51e19fd6ebd) - replace use of type guards with boolean return type

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-same-booleanarray-v0.3.0">

#### [@stdlib/assert/is-same-booleanarray](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-same-booleanarray)

<details>

<section class="features">

##### Features

-   [`a5c9e56`](https://github.com/stdlib-js/stdlib/commit/a5c9e56a3ea7198ae4fe3248d4bfaa9e1d19bfcd) - add `assert/is-same-booleanarray` [(#2401)](https://github.com/stdlib-js/stdlib/pull/2401)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-same-date-object-v0.3.0">

#### [@stdlib/assert/is-same-date-object](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-same-date-object)

<details>

<section class="features">

##### Features

-   [`2bde735`](https://github.com/stdlib-js/stdlib/commit/2bde7358e1b5aabf93639742026eda57d79cce17) - add `assert/is-same-date-object`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-semver-v0.3.0">

#### [@stdlib/assert/is-semver](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-semver)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`30112b7`](https://github.com/stdlib-js/stdlib/commit/30112b7202358710becc8ea77f4261dd3e7459f3) - replace use of type guards with boolean return type

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-snakecase-v0.3.0">

#### [@stdlib/assert/is-snakecase](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-snakecase)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`30112b7`](https://github.com/stdlib-js/stdlib/commit/30112b7202358710becc8ea77f4261dd3e7459f3) - replace use of type guards with boolean return type

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-square-triangular-number-v0.3.0">

#### [@stdlib/assert/is-square-triangular-number](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-square-triangular-number)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`b77ddf7`](https://github.com/stdlib-js/stdlib/commit/b77ddf74c62c7031c7a542d8a661a51e19fd6ebd) - replace use of type guards with boolean return type

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-startcase-v0.3.0">

#### [@stdlib/assert/is-startcase](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-startcase)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`30112b7`](https://github.com/stdlib-js/stdlib/commit/30112b7202358710becc8ea77f4261dd3e7459f3) - replace use of type guards with boolean return type

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-triangular-number-v0.3.0">

#### [@stdlib/assert/is-triangular-number](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-triangular-number)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`b77ddf7`](https://github.com/stdlib-js/stdlib/commit/b77ddf74c62c7031c7a542d8a661a51e19fd6ebd) - replace use of type guards with boolean return type

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-typed-array-length-v0.3.0">

#### [@stdlib/assert/is-typed-array-length](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-typed-array-length)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`b77ddf7`](https://github.com/stdlib-js/stdlib/commit/b77ddf74c62c7031c7a542d8a661a51e19fd6ebd) - replace use of type guards with boolean return type

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-unc-path-v0.3.0">

#### [@stdlib/assert/is-unc-path](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-unc-path)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`30112b7`](https://github.com/stdlib-js/stdlib/commit/30112b7202358710becc8ea77f4261dd3e7459f3) - replace use of type guards with boolean return type

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-uppercase-v0.3.0">

#### [@stdlib/assert/is-uppercase](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-uppercase)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`30112b7`](https://github.com/stdlib-js/stdlib/commit/30112b7202358710becc8ea77f4261dd3e7459f3) - replace use of type guards with boolean return type

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-uri-v0.3.0">

#### [@stdlib/assert/is-uri](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-uri)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`30112b7`](https://github.com/stdlib-js/stdlib/commit/30112b7202358710becc8ea77f4261dd3e7459f3) - replace use of type guards with boolean return type

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-well-formed-string-v0.3.0">

#### [@stdlib/assert/is-well-formed-string](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-well-formed-string)

<details>

<section class="features">

##### Features

-   [`0f3838c`](https://github.com/stdlib-js/stdlib/commit/0f3838c60707ee9e1fd9632c8117f598ff8a60eb) - add `assert/is-well-formed-string` [(#1388)](https://github.com/stdlib-js/stdlib/pull/1388)

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`30112b7`](https://github.com/stdlib-js/stdlib/commit/30112b7202358710becc8ea77f4261dd3e7459f3) - replace use of type guards with boolean return type

</section>

<!-- /.bug-fixes -->

<section class="issues">

##### Closed Issues

This release closes the following issue:

[#1065](https://github.com/stdlib-js/stdlib/issues/1065)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-whitespace-v0.3.0">

#### [@stdlib/assert/is-whitespace](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-whitespace)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`30112b7`](https://github.com/stdlib-js/stdlib/commit/30112b7202358710becc8ea77f4261dd3e7459f3) - replace use of type guards with boolean return type

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-napi-v0.3.0">

#### [@stdlib/assert/napi](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/napi)

<details>

<section class="features">

##### Features

-   [`b5a5da6`](https://github.com/stdlib-js/stdlib/commit/b5a5da64e43f449318e74136c291a482e2fd1c39) - add API to check for a specified property

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-napi-has-property-v0.3.0">

#### [@stdlib/assert/napi/has-property](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/napi/has-property)

<details>

<section class="features">

##### Features

-   [`16ab7f7`](https://github.com/stdlib-js/stdlib/commit/16ab7f7f7ebef7cb2dad98930d5306d03ec700a1) - add `assert/napi/has-property`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

</section>

<!-- /.packages -->

<section class="issues">

### Closed Issues

A total of 3 issues were closed in this release:

[#1065](https://github.com/stdlib-js/stdlib/issues/1065), [#1343](https://github.com/stdlib-js/stdlib/issues/1343), [#1347](https://github.com/stdlib-js/stdlib/issues/1347)

</section>

<!-- /.issues -->

<section class="contributors">

### Contributors

A total of 9 people contributed to this release. Thank you to the following contributors:

-   Aditya Sapra
-   Athan Reines
-   Gunj Joshi
-   Jaysukh Makvana
-   Philipp Burckhardt
-   Rutam Kathale
-   Shubham Mishra
-   Snehil Shah
-   Spandan Barve

</section>

<!-- /.contributors -->

<section class="commits">

### Commits

<details>

-   [`dca9cf7`](https://github.com/stdlib-js/stdlib/commit/dca9cf7b5d08dccdc3487ddc245e9a22a74a274a) - **docs:** change indentation from tabs to spaces in JSDoc example code _(by Philipp Burckhardt)_
-   [`d04dcbd`](https://github.com/stdlib-js/stdlib/commit/d04dcbd6dc3b0bf4a89bd3947d317fa5ff15bb38) - **docs:** remove private annotations in C comments _(by Philipp Burckhardt)_
-   [`659f752`](https://github.com/stdlib-js/stdlib/commit/659f752db18317bf5fc237fdbcad0d74b61e1ed9) - **style:** add missing spaces _(by Philipp Burckhardt)_
-   [`a5c9e56`](https://github.com/stdlib-js/stdlib/commit/a5c9e56a3ea7198ae4fe3248d4bfaa9e1d19bfcd) - **feat:** add `assert/is-same-booleanarray` [(#2401)](https://github.com/stdlib-js/stdlib/pull/2401) _(by Jaysukh Makvana, Athan Reines)_
-   [`7c36ea3`](https://github.com/stdlib-js/stdlib/commit/7c36ea3437d16b7ce4fd86d76636b5a5d77d04c3) - **feat:** add `assert/is-booleanarray` [(#2299)](https://github.com/stdlib-js/stdlib/pull/2299) _(by Jaysukh Makvana, Athan Reines)_
-   [`3a3b1e0`](https://github.com/stdlib-js/stdlib/commit/3a3b1e08f73a54c5ee46d73045805aee0bb1196d) - **docs:** update package URLs [(#2269)](https://github.com/stdlib-js/stdlib/pull/2269) _(by stdlib-bot)_
-   [`8089b88`](https://github.com/stdlib-js/stdlib/commit/8089b886a4d7d89f15abb068b1021d93f9c4f64e) - **docs:** update paths _(by Athan Reines)_
-   [`038b199`](https://github.com/stdlib-js/stdlib/commit/038b199c32842c02cf678e3ae8305a17aacda05e) - **docs:** update paths _(by Athan Reines)_
-   [`bab31c8`](https://github.com/stdlib-js/stdlib/commit/bab31c85d8793ebae625c2b5146a714294e3003f) - **refactor:** update paths _(by Athan Reines)_
-   [`e77b013`](https://github.com/stdlib-js/stdlib/commit/e77b0137cccdd22b6c63581ac4f3f370c8e6d671) - **refactor:** update paths _(by Athan Reines)_
-   [`db69d04`](https://github.com/stdlib-js/stdlib/commit/db69d047d51336e71ea14e732b20d6b9401c5cf9) - **refactor:** update path _(by Athan Reines)_
-   [`75d4f83`](https://github.com/stdlib-js/stdlib/commit/75d4f83cb85610d23a04dc21a03f8075f6d3665f) - **refactor:** update require and include paths _(by Athan Reines)_
-   [`ec98887`](https://github.com/stdlib-js/stdlib/commit/ec9888724c28aa7218d88ff62b91b71c0089c559) - **docs:** update related packages sections [(#2241)](https://github.com/stdlib-js/stdlib/pull/2241) _(by stdlib-bot)_
-   [`53fd65d`](https://github.com/stdlib-js/stdlib/commit/53fd65de03a466f6cf3ca0752c0908a57ef151b1) - **docs:** update related packages sections [(#2240)](https://github.com/stdlib-js/stdlib/pull/2240) _(by stdlib-bot)_
-   [`8a7e5fb`](https://github.com/stdlib-js/stdlib/commit/8a7e5fb11dee8930ac73b69302065a701966146a) - **chore:** address lint errors _(by Philipp Burckhardt)_
-   [`430a519`](https://github.com/stdlib-js/stdlib/commit/430a519e63cdbc09ca8df52d125067d43249185d) - **fix:** use isError package so function works across realms _(by Philipp Burckhardt)_
-   [`5e61bcf`](https://github.com/stdlib-js/stdlib/commit/5e61bcfda50814e22d77598e3128be21b7d21c94) - **docs:** update related packages sections [(#2184)](https://github.com/stdlib-js/stdlib/pull/2184) _(by stdlib-bot)_
-   [`b5a5da6`](https://github.com/stdlib-js/stdlib/commit/b5a5da64e43f449318e74136c291a482e2fd1c39) - **feat:** add API to check for a specified property _(by Athan Reines)_
-   [`16ab7f7`](https://github.com/stdlib-js/stdlib/commit/16ab7f7f7ebef7cb2dad98930d5306d03ec700a1) - **feat:** add `assert/napi/has-property` _(by Athan Reines)_
-   [`1c8b757`](https://github.com/stdlib-js/stdlib/commit/1c8b7574ebb41a431e5728457dee2c1f4f372ac5) - **docs:** update related packages sections [(#2135)](https://github.com/stdlib-js/stdlib/pull/2135) _(by stdlib-bot)_
-   [`98ae85e`](https://github.com/stdlib-js/stdlib/commit/98ae85e1daf32d48a1d3173cfbcb229c722fc79c) - **docs:** update related packages sections [(#2107)](https://github.com/stdlib-js/stdlib/pull/2107) _(by stdlib-bot)_
-   [`8a88ec1`](https://github.com/stdlib-js/stdlib/commit/8a88ec1f450ddc7cc4e9004f94299fe864bf7acb) - **docs:** update related packages sections [(#2006)](https://github.com/stdlib-js/stdlib/pull/2006) _(by stdlib-bot)_
-   [`e624c49`](https://github.com/stdlib-js/stdlib/commit/e624c49ec5d522b7dd606df464fc65c7ff01e893) - **feat:** update namespace TypeScript declarations [(#1937)](https://github.com/stdlib-js/stdlib/pull/1937) _(by stdlib-bot)_
-   [`5c03720`](https://github.com/stdlib-js/stdlib/commit/5c037206504ac00cb49d1d70b39e7345505d3ed2) - **docs:** update namespace table of contents [(#1920)](https://github.com/stdlib-js/stdlib/pull/1920) _(by stdlib-bot, Philipp Burckhardt)_
-   [`9948198`](https://github.com/stdlib-js/stdlib/commit/99481980825b0aeae43a3074a4d6ce96c9eafef7) - **feat:** add `isNonNegativeFinite` to namespace _(by Athan Reines)_
-   [`6cbdcae`](https://github.com/stdlib-js/stdlib/commit/6cbdcae47542aa4a7ca9a1691f584fc1ff03c4f9) - **docs:** update test messages, comments, and benchmarks _(by Athan Reines)_
-   [`72a7f44`](https://github.com/stdlib-js/stdlib/commit/72a7f44f1706450692122c2b05eccd03672a0dad) - **docs:** remove blank line [(#1726)](https://github.com/stdlib-js/stdlib/pull/1726) _(by stdlib-bot)_
-   [`06ab422`](https://github.com/stdlib-js/stdlib/commit/06ab4229dfdef730026182aefc086d35e11d503a) - **style:** use two spaces for indentation _(by Philipp Burckhardt)_
-   [`a8676e3`](https://github.com/stdlib-js/stdlib/commit/a8676e399ca6a29d83904c1ec8ec816e4041a2de) - **bench:** update `assert/is-boolean` benchmarks to measure affirmative/negative test values [(#1458)](https://github.com/stdlib-js/stdlib/pull/1458) _(by Snehil Shah)_
-   [`2bde735`](https://github.com/stdlib-js/stdlib/commit/2bde7358e1b5aabf93639742026eda57d79cce17) - **feat:** add `assert/is-same-date-object` _(by Aditya Sapra, Athan Reines, Philipp Burckhardt)_
-   [`5cfd0a8`](https://github.com/stdlib-js/stdlib/commit/5cfd0a8712299d680aff7f9d8fca0c0ac69de56b) - **chore:** update package meta data [(#1462)](https://github.com/stdlib-js/stdlib/pull/1462) _(by stdlib-bot)_
-   [`615bcf1`](https://github.com/stdlib-js/stdlib/commit/615bcf165b0a9a9aad5f6591024e2dd1655c8914) - **docs:** update related packages sections [(#1441)](https://github.com/stdlib-js/stdlib/pull/1441) _(by stdlib-bot)_
-   [`5b2f0f6`](https://github.com/stdlib-js/stdlib/commit/5b2f0f6a9e071b74a3eee86c85546ef8fc083042) - **docs:** update related packages sections [(#1415)](https://github.com/stdlib-js/stdlib/pull/1415) _(by stdlib-bot, Athan Reines)_
-   [`b77ddf7`](https://github.com/stdlib-js/stdlib/commit/b77ddf74c62c7031c7a542d8a661a51e19fd6ebd) - **fix:** replace use of type guards with boolean return type _(by Philipp Burckhardt)_
-   [`30112b7`](https://github.com/stdlib-js/stdlib/commit/30112b7202358710becc8ea77f4261dd3e7459f3) - **fix:** replace use of type guards with boolean return type _(by Philipp Burckhardt)_
-   [`0f3838c`](https://github.com/stdlib-js/stdlib/commit/0f3838c60707ee9e1fd9632c8117f598ff8a60eb) - **feat:** add `assert/is-well-formed-string` [(#1388)](https://github.com/stdlib-js/stdlib/pull/1388) _(by Gunj Joshi, Philipp Burckhardt)_
-   [`f36bef4`](https://github.com/stdlib-js/stdlib/commit/f36bef4200f32f136243c0ff1ebd083dfcf1c133) - **feat:** add `assert/is-nonpositive-finite` [(#1396)](https://github.com/stdlib-js/stdlib/pull/1396) _(by Shubham Mishra, Philipp Burckhardt)_
-   [`0fb4869`](https://github.com/stdlib-js/stdlib/commit/0fb486917502a8397c281872831c70b2e58b7f27) - **feat:** add `assert/is-ragged-nested-array` (#1368) [(#1368)](https://github.com/stdlib-js/stdlib/pull/1368 ) _(by Rutam Kathale, Athan Reines)_
-   [`2f1f30e`](https://github.com/stdlib-js/stdlib/commit/2f1f30e14ba74c4e767eadd5650a84e3c3901b6c) - **refactor:** avoid duplicate assertion logic and fix documentation errors _(by Athan Reines)_
-   [`8ebd6f7`](https://github.com/stdlib-js/stdlib/commit/8ebd6f770e563cc7cce79e11424c3fb85736ad42) - **refactor:** avoid assertion duplication and fix package meta data _(by Athan Reines)_
-   [`0a081ce`](https://github.com/stdlib-js/stdlib/commit/0a081ce87dec3491252ffb9c45cc9fa6e695cbe5) - **fix:** use `valueOf` to return primitive value _(by Athan Reines)_
-   [`e5f293c`](https://github.com/stdlib-js/stdlib/commit/e5f293c29515cb19432fde637fab6c08aa5aed61) - **test:** add object test _(by Athan Reines)_
-   [`e1d5359`](https://github.com/stdlib-js/stdlib/commit/e1d5359fbfd549658b8a1fe8c8c14930384d29ef) - **refactor:** avoid assertion duplication and update examples _(by Athan Reines)_
-   [`a4e21fb`](https://github.com/stdlib-js/stdlib/commit/a4e21fbfa3d03a1213c0cf4ec3e7305cd2a0c215) - **feat:** add `assert/is-positive-finite` [(#1358)](https://github.com/stdlib-js/stdlib/pull/1358) _(by Aditya Sapra, Philipp Burckhardt)_
-   [`609682c`](https://github.com/stdlib-js/stdlib/commit/609682c8ef64ecf0fb6a4d7094e226a99a985ab5) - **feat:** add assert/is-negative-finite _(by Gunj Joshi, Philipp Burckhardt)_
-   [`50616dc`](https://github.com/stdlib-js/stdlib/commit/50616dccd4e5fdda898315358bf5f1d91a254b22) - **feat:** add @stdlib/assert/is-nonnegative-finite [(#1354)](https://github.com/stdlib-js/stdlib/pull/1354) _(by Spandan Barve, Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

</section>

<!-- /.release -->

<section class="release" id="v0.2.1">

## 0.2.1 (2024-02-05)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.2.0">

## 0.2.0 (2024-02-05)

<section class="packages">

### Packages

<section class="package" id="assert-v0.2.0">

#### [@stdlib/assert](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert)

<details>

<section class="features">

##### Features

-   [`2693e3b`](https://github.com/stdlib-js/stdlib/commit/2693e3b3f0382542a51fc57d78e9ab59e2dc0681) - update namespace TypeScript declarations [(#1287)](https://github.com/stdlib-js/stdlib/pull/1287)
-   [`c4a7321`](https://github.com/stdlib-js/stdlib/commit/c4a7321ab22c50f9248d79a64946c97aea3c5609) - add `isSameArray` to namespace
-   [`d5b056e`](https://github.com/stdlib-js/stdlib/commit/d5b056e5fbd46e8a11bfc299e086d9c38fabb804) - add `isSameComplex64` to namespace
-   [`8149b5e`](https://github.com/stdlib-js/stdlib/commit/8149b5e1d6dff960a24fbd12618f347c61ac94f7) - add `isSameComplex128` to namespace
-   [`8866658`](https://github.com/stdlib-js/stdlib/commit/8866658bedebc42efa27641918f33ab9a6315b83) - add `isSameComplex64Array` to namespace
-   [`a6f4960`](https://github.com/stdlib-js/stdlib/commit/a6f4960ccd3d2cd6f07f91badd41639f0a226ae3) - add `isSameComplex128Array` to namespace
-   [`4d88146`](https://github.com/stdlib-js/stdlib/commit/4d88146f1d794aaecad463dd22df5a3da8385ed3) - add `isSameFloat32Array` to namespace
-   [`4ae83bb`](https://github.com/stdlib-js/stdlib/commit/4ae83bbddc5ca8f29a478bd8d5023f41a69a7d92) - add `isSameFloat64Array` to namespace
-   [`783804d`](https://github.com/stdlib-js/stdlib/commit/783804dbc9b3899c5227c5593e0ca1e8a6a9f195) - update namespace TypeScript declarations [(#1170)](https://github.com/stdlib-js/stdlib/pull/1170)
-   [`a30ae15`](https://github.com/stdlib-js/stdlib/commit/a30ae1551f88de4a9a7950ed6146f4882220fc5f) - add `isComplex128VectorLike` to namespace
-   [`c7b40d0`](https://github.com/stdlib-js/stdlib/commit/c7b40d0569d231846137c10b54444c295458fceb) - add `isComplex128ndarrayLike` to namespace
-   [`174df9f`](https://github.com/stdlib-js/stdlib/commit/174df9f03fe0a51b21539cc1acf02cb0ec74943f) - add `isComplex128MatrixLike` to namespace
-   [`82ee4a5`](https://github.com/stdlib-js/stdlib/commit/82ee4a5e90ee55bbb01c0977151ac5e8b25fbf10) - add `isComplex64VectorLike` to namespace
-   [`98d82b5`](https://github.com/stdlib-js/stdlib/commit/98d82b5df39ae6b4acf7ebfb7bb4df5eb74a045d) - add `isComplex64ndarrayLike` to namespace
-   [`df4de54`](https://github.com/stdlib-js/stdlib/commit/df4de54149eab31b6a44439f42a6a8b08c2fb0de) - add `isComplex64MatrixLike` to namespace

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-complex128matrix-like-v0.2.0">

#### [@stdlib/assert/is-complex128matrix-like](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-complex128matrix-like)

<details>

<section class="features">

##### Features

-   [`6e4eb77`](https://github.com/stdlib-js/stdlib/commit/6e4eb77b2e4c3ade92e0661c4663182ecee95eff) - add `assert/is-complex128matrix-like`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-complex128ndarray-like-v0.2.0">

#### [@stdlib/assert/is-complex128ndarray-like](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-complex128ndarray-like)

<details>

<section class="features">

##### Features

-   [`59bd897`](https://github.com/stdlib-js/stdlib/commit/59bd897bbd551c3066b98d16ff43b12c6908f576) - add `assert/is-complex128ndarray-like`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-complex128vector-like-v0.2.0">

#### [@stdlib/assert/is-complex128vector-like](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-complex128vector-like)

<details>

<section class="features">

##### Features

-   [`55a2359`](https://github.com/stdlib-js/stdlib/commit/55a2359b8c6e619c6fed03c48f9e804f4f400212) - add `assert/is-complex128vector-like`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-complex64matrix-like-v0.2.0">

#### [@stdlib/assert/is-complex64matrix-like](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-complex64matrix-like)

<details>

<section class="features">

##### Features

-   [`af81f5b`](https://github.com/stdlib-js/stdlib/commit/af81f5b5439e293ae6552d11a87c1a30939badbd) - add `assert/is-complex64matrix-like`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-complex64ndarray-like-v0.2.0">

#### [@stdlib/assert/is-complex64ndarray-like](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-complex64ndarray-like)

<details>

<section class="features">

##### Features

-   [`ae603fb`](https://github.com/stdlib-js/stdlib/commit/ae603fb03e8a80b383a321a79f63c5dc3c5bb9b7) - add `assert/is-complex64ndarray-like`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-complex64vector-like-v0.2.0">

#### [@stdlib/assert/is-complex64vector-like](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-complex64vector-like)

<details>

<section class="features">

##### Features

-   [`38e466c`](https://github.com/stdlib-js/stdlib/commit/38e466c86a86daeccbe3ad879a18b3b99b004be4) - add `assert/is-complex64vector-like`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-same-array-v0.2.0">

#### [@stdlib/assert/is-same-array](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-same-array)

<details>

<section class="features">

##### Features

-   [`0319dc2`](https://github.com/stdlib-js/stdlib/commit/0319dc25597fc13a88570aff9b234d8fdd84011f) - add `assert/is-same-array`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-same-complex128-v0.2.0">

#### [@stdlib/assert/is-same-complex128](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-same-complex128)

<details>

<section class="features">

##### Features

-   [`e3a6668`](https://github.com/stdlib-js/stdlib/commit/e3a6668c6eecd75ce4a72cbb6e87d3ff20beda38) - add `assert/is-same-complex128`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-same-complex128array-v0.2.0">

#### [@stdlib/assert/is-same-complex128array](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-same-complex128array)

<details>

<section class="features">

##### Features

-   [`70a9e53`](https://github.com/stdlib-js/stdlib/commit/70a9e53b48eda497d92b08490a55903efff1b76b) - add `assert/is-same-complex128array`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-same-complex64-v0.2.0">

#### [@stdlib/assert/is-same-complex64](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-same-complex64)

<details>

<section class="features">

##### Features

-   [`2fe3462`](https://github.com/stdlib-js/stdlib/commit/2fe34629a275457211b7765ce1e3424f11a49a11) - add `assert/is-same-complex64`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-same-complex64array-v0.2.0">

#### [@stdlib/assert/is-same-complex64array](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-same-complex64array)

<details>

<section class="features">

##### Features

-   [`3bf2698`](https://github.com/stdlib-js/stdlib/commit/3bf269856dee72622be566a641e29e4fbcd9646a) - add `assert/is-same-complex64array`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-same-float32array-v0.2.0">

#### [@stdlib/assert/is-same-float32array](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-same-float32array)

<details>

<section class="features">

##### Features

-   [`c19c4b5`](https://github.com/stdlib-js/stdlib/commit/c19c4b5e800b065ad5855f95b9bccf5a8d8224e8) - add `assert/is-same-float32array`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-same-float64array-v0.2.0">

#### [@stdlib/assert/is-same-float64array](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-same-float64array)

<details>

<section class="features">

##### Features

-   [`cf9a17f`](https://github.com/stdlib-js/stdlib/commit/cf9a17ff9ac1f00968a6a4656694a5b4fee88bb8) - add `assert/is-same-float64array`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-same-value-v0.2.0">

#### [@stdlib/assert/is-same-value](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-same-value)

<details>

<section class="features">

##### Features

-   [`5c01d25`](https://github.com/stdlib-js/stdlib/commit/5c01d258ced2e4946317fab531ba52e7173a3448) - add support for complex number objects

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-same-value-zero-v0.2.0">

#### [@stdlib/assert/is-same-value-zero](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-same-value-zero)

<details>

<section class="features">

##### Features

-   [`207083b`](https://github.com/stdlib-js/stdlib/commit/207083bbcc3586f22b9d304b92fef7effbcdb782) - add support for complex number objects

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

</section>

<!-- /.packages -->

<section class="contributors">

### Contributors

A total of 2 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

<section class="commits">

### Commits

<details>

-   [`18c2502`](https://github.com/stdlib-js/stdlib/commit/18c250220e23aa825b05ec5898927ea6b261ca43) - **docs:** update related packages sections [(#1303)](https://github.com/stdlib-js/stdlib/pull/1303) _(by stdlib-bot)_
-   [`2693e3b`](https://github.com/stdlib-js/stdlib/commit/2693e3b3f0382542a51fc57d78e9ab59e2dc0681) - **feat:** update namespace TypeScript declarations [(#1287)](https://github.com/stdlib-js/stdlib/pull/1287) _(by stdlib-bot, Athan Reines)_
-   [`322d1ca`](https://github.com/stdlib-js/stdlib/commit/322d1cac1bb150c548b5ad3b3086acd8e74a7bbd) - **docs:** update namespace table of contents [(#1284)](https://github.com/stdlib-js/stdlib/pull/1284) _(by stdlib-bot, Philipp Burckhardt)_
-   [`2786c2e`](https://github.com/stdlib-js/stdlib/commit/2786c2e5c22e189f1d29eabc5a2225f3b728f051) - **docs:** update related packages sections [(#1283)](https://github.com/stdlib-js/stdlib/pull/1283) _(by stdlib-bot)_
-   [`afa953b`](https://github.com/stdlib-js/stdlib/commit/afa953bde057e396e614ea35b7a32fd5b77479ea) - **docs:** update related packages sections [(#1281)](https://github.com/stdlib-js/stdlib/pull/1281) _(by stdlib-bot)_
-   [`c4a7321`](https://github.com/stdlib-js/stdlib/commit/c4a7321ab22c50f9248d79a64946c97aea3c5609) - **feat:** add `isSameArray` to namespace _(by Athan Reines)_
-   [`0319dc2`](https://github.com/stdlib-js/stdlib/commit/0319dc25597fc13a88570aff9b234d8fdd84011f) - **feat:** add `assert/is-same-array` _(by Athan Reines)_
-   [`a2158dd`](https://github.com/stdlib-js/stdlib/commit/a2158dda7817e0cd367300884a6c78fd0dcbf4c0) - **docs:** update related packages sections [(#1275)](https://github.com/stdlib-js/stdlib/pull/1275) _(by stdlib-bot)_
-   [`d5b056e`](https://github.com/stdlib-js/stdlib/commit/d5b056e5fbd46e8a11bfc299e086d9c38fabb804) - **feat:** add `isSameComplex64` to namespace _(by Athan Reines)_
-   [`2fe3462`](https://github.com/stdlib-js/stdlib/commit/2fe34629a275457211b7765ce1e3424f11a49a11) - **feat:** add `assert/is-same-complex64` _(by Athan Reines)_
-   [`8149b5e`](https://github.com/stdlib-js/stdlib/commit/8149b5e1d6dff960a24fbd12618f347c61ac94f7) - **feat:** add `isSameComplex128` to namespace _(by Athan Reines)_
-   [`e3a6668`](https://github.com/stdlib-js/stdlib/commit/e3a6668c6eecd75ce4a72cbb6e87d3ff20beda38) - **feat:** add `assert/is-same-complex128` _(by Athan Reines)_
-   [`8866658`](https://github.com/stdlib-js/stdlib/commit/8866658bedebc42efa27641918f33ab9a6315b83) - **feat:** add `isSameComplex64Array` to namespace _(by Athan Reines)_
-   [`3bf2698`](https://github.com/stdlib-js/stdlib/commit/3bf269856dee72622be566a641e29e4fbcd9646a) - **feat:** add `assert/is-same-complex64array` _(by Athan Reines)_
-   [`713a080`](https://github.com/stdlib-js/stdlib/commit/713a080680ea57d95f1925f065b5fa5b8a70dd79) - **docs:** fix description _(by Athan Reines)_
-   [`3ecf1c9`](https://github.com/stdlib-js/stdlib/commit/3ecf1c9840938b0c81d6503f4e752626d0bef0a0) - **docs:** fix description _(by Athan Reines)_
-   [`7195517`](https://github.com/stdlib-js/stdlib/commit/719551775362d649ca905a171b33d8b9abd75b6e) - **docs:** fix description _(by Athan Reines)_
-   [`a6f4960`](https://github.com/stdlib-js/stdlib/commit/a6f4960ccd3d2cd6f07f91badd41639f0a226ae3) - **feat:** add `isSameComplex128Array` to namespace _(by Athan Reines)_
-   [`70a9e53`](https://github.com/stdlib-js/stdlib/commit/70a9e53b48eda497d92b08490a55903efff1b76b) - **feat:** add `assert/is-same-complex128array` _(by Athan Reines)_
-   [`4d88146`](https://github.com/stdlib-js/stdlib/commit/4d88146f1d794aaecad463dd22df5a3da8385ed3) - **feat:** add `isSameFloat32Array` to namespace _(by Athan Reines)_
-   [`c19c4b5`](https://github.com/stdlib-js/stdlib/commit/c19c4b5e800b065ad5855f95b9bccf5a8d8224e8) - **feat:** add `assert/is-same-float32array` _(by Athan Reines)_
-   [`4ae83bb`](https://github.com/stdlib-js/stdlib/commit/4ae83bbddc5ca8f29a478bd8d5023f41a69a7d92) - **feat:** add `isSameFloat64Array` to namespace _(by Athan Reines)_
-   [`cf9a17f`](https://github.com/stdlib-js/stdlib/commit/cf9a17ff9ac1f00968a6a4656694a5b4fee88bb8) - **feat:** add `assert/is-same-float64array` _(by Athan Reines)_
-   [`207083b`](https://github.com/stdlib-js/stdlib/commit/207083bbcc3586f22b9d304b92fef7effbcdb782) - **feat:** add support for complex number objects _(by Athan Reines)_
-   [`d8cc963`](https://github.com/stdlib-js/stdlib/commit/d8cc96345ccb3cfc89383f339d4a92eedbdb724d) - **docs:** update note _(by Athan Reines)_
-   [`5c01d25`](https://github.com/stdlib-js/stdlib/commit/5c01d258ced2e4946317fab531ba52e7173a3448) - **feat:** add support for complex number objects _(by Athan Reines)_
-   [`dea49e0`](https://github.com/stdlib-js/stdlib/commit/dea49e03ab5571233e3da26835a6a6d3256d5737) - **docs:** use single quotes in require calls instead of backticks _(by Philipp Burckhardt)_
-   [`cf3668f`](https://github.com/stdlib-js/stdlib/commit/cf3668f92234f5b25369001ca6a05a434d577ba1) - **docs:** update related packages sections [(#1210)](https://github.com/stdlib-js/stdlib/pull/1210) _(by stdlib-bot)_
-   [`1879534`](https://github.com/stdlib-js/stdlib/commit/18795348ac0c51d3b13c1b26c0f5921ec5fd010c) - **docs:** update related packages sections [(#1179)](https://github.com/stdlib-js/stdlib/pull/1179) _(by stdlib-bot)_
-   [`783804d`](https://github.com/stdlib-js/stdlib/commit/783804dbc9b3899c5227c5593e0ca1e8a6a9f195) - **feat:** update namespace TypeScript declarations [(#1170)](https://github.com/stdlib-js/stdlib/pull/1170) _(by stdlib-bot, Athan Reines)_
-   [`d575e8b`](https://github.com/stdlib-js/stdlib/commit/d575e8b063a37d90c3178fcff7b425314ae73c98) - **docs:** update related packages sections [(#1167)](https://github.com/stdlib-js/stdlib/pull/1167) _(by stdlib-bot)_
-   [`74bf172`](https://github.com/stdlib-js/stdlib/commit/74bf172cde4e19feaf4840c9e03b904bf9819934) - **docs:** update related packages sections [(#1165)](https://github.com/stdlib-js/stdlib/pull/1165) _(by stdlib-bot)_
-   [`6ff6caf`](https://github.com/stdlib-js/stdlib/commit/6ff6cafeb4e71cb856ded8e0b42957a627fe617d) - **docs:** update namespace table of contents [(#1162)](https://github.com/stdlib-js/stdlib/pull/1162 ) _(by stdlib-bot)_
-   [`26cf434`](https://github.com/stdlib-js/stdlib/commit/26cf4347b243f1f363273481512e1ffebcb27ad5) - **docs:** update related packages sections [(#1156)](https://github.com/stdlib-js/stdlib/pull/1156) _(by stdlib-bot)_
-   [`73f98e4`](https://github.com/stdlib-js/stdlib/commit/73f98e4e8dea53ece4a617b042f9d817643b4850) - **docs:** update related packages sections [(#1150)](https://github.com/stdlib-js/stdlib/pull/1150) _(by stdlib-bot)_
-   [`a30ae15`](https://github.com/stdlib-js/stdlib/commit/a30ae1551f88de4a9a7950ed6146f4882220fc5f) - **feat:** add `isComplex128VectorLike` to namespace _(by Athan Reines)_
-   [`55a2359`](https://github.com/stdlib-js/stdlib/commit/55a2359b8c6e619c6fed03c48f9e804f4f400212) - **feat:** add `assert/is-complex128vector-like` _(by Athan Reines)_
-   [`c7b40d0`](https://github.com/stdlib-js/stdlib/commit/c7b40d0569d231846137c10b54444c295458fceb) - **feat:** add `isComplex128ndarrayLike` to namespace _(by Athan Reines)_
-   [`59bd897`](https://github.com/stdlib-js/stdlib/commit/59bd897bbd551c3066b98d16ff43b12c6908f576) - **feat:** add `assert/is-complex128ndarray-like` _(by Athan Reines)_
-   [`174df9f`](https://github.com/stdlib-js/stdlib/commit/174df9f03fe0a51b21539cc1acf02cb0ec74943f) - **feat:** add `isComplex128MatrixLike` to namespace _(by Athan Reines)_
-   [`6e4eb77`](https://github.com/stdlib-js/stdlib/commit/6e4eb77b2e4c3ade92e0661c4663182ecee95eff) - **feat:** add `assert/is-complex128matrix-like` _(by Athan Reines)_
-   [`82ee4a5`](https://github.com/stdlib-js/stdlib/commit/82ee4a5e90ee55bbb01c0977151ac5e8b25fbf10) - **feat:** add `isComplex64VectorLike` to namespace _(by Athan Reines)_
-   [`38e466c`](https://github.com/stdlib-js/stdlib/commit/38e466c86a86daeccbe3ad879a18b3b99b004be4) - **feat:** add `assert/is-complex64vector-like` _(by Athan Reines)_
-   [`98d82b5`](https://github.com/stdlib-js/stdlib/commit/98d82b5df39ae6b4acf7ebfb7bb4df5eb74a045d) - **feat:** add `isComplex64ndarrayLike` to namespace _(by Athan Reines)_
-   [`ae603fb`](https://github.com/stdlib-js/stdlib/commit/ae603fb03e8a80b383a321a79f63c5dc3c5bb9b7) - **feat:** add `assert/is-complex64ndarray-like` _(by Athan Reines)_
-   [`df4de54`](https://github.com/stdlib-js/stdlib/commit/df4de54149eab31b6a44439f42a6a8b08c2fb0de) - **feat:** add `isComplex64MatrixLike` to namespace _(by Athan Reines)_
-   [`af81f5b`](https://github.com/stdlib-js/stdlib/commit/af81f5b5439e293ae6552d11a87c1a30939badbd) - **feat:** add `assert/is-complex64matrix-like` _(by Athan Reines)_
-   [`d42deeb`](https://github.com/stdlib-js/stdlib/commit/d42deeb6dca3be081bf4a0b5fa0886eadb841937) - **refactor:** rely on `dtype` to indicate underlying data type _(by Athan Reines)_
-   [`76e1741`](https://github.com/stdlib-js/stdlib/commit/76e1741244c3e90dd9255598aaa4858d229bf7bb) - **refactor:** rely on `dtype` to indicate underlying data type _(by Athan Reines)_
-   [`de3a1ba`](https://github.com/stdlib-js/stdlib/commit/de3a1baedcee50f6f7a9d0a23910fe9ffc690e00) - **refactor:** rely on `dtype` to indicate underlying data type _(by Athan Reines)_
-   [`2c7bf58`](https://github.com/stdlib-js/stdlib/commit/2c7bf58f717f9010645d30c395cf89efbb6faaf8) - **refactor:** rely on `dtype` to indicate underlying data type _(by Athan Reines)_
-   [`3017e7c`](https://github.com/stdlib-js/stdlib/commit/3017e7c8157b81dc392e2102ba9c07585d9cffa2) - **refactor:** rely on `dtype` to indicate underlying data type _(by Athan Reines)_
-   [`2b0c52e`](https://github.com/stdlib-js/stdlib/commit/2b0c52e2f06dfad4042b7287a094836b930425fd) - **refactor:** rely on `dtype` to indicate underlying data type _(by Athan Reines)_
-   [`bcb4079`](https://github.com/stdlib-js/stdlib/commit/bcb4079adf3e31d33d28db5dff21558c9e6bd5be) - **build:** remove and replace tslint directives _(by Philipp Burckhardt)_
-   [`9502ed2`](https://github.com/stdlib-js/stdlib/commit/9502ed27e2853e312c556a48bdd7775095e66709) - **build:** replace tslint directive with eslint equivalent _(by Philipp Burckhardt)_
-   [`8b7e032`](https://github.com/stdlib-js/stdlib/commit/8b7e0325d5c3040171114c332e23a1e932302cb7) - **build:** replace tslint directives _(by Philipp Burckhardt)_
-   [`710ba8a`](https://github.com/stdlib-js/stdlib/commit/710ba8a93eda1c94667d3c610c0b286be84e7463) - **build:** replace tslint directive _(by Philipp Burckhardt)_
-   [`a73f94f`](https://github.com/stdlib-js/stdlib/commit/a73f94f37271dda3ad9a2afa7fea4e864f604577) - **build:** insert ESLint directive instead of just removing TSLint one _(by Philipp Burckhardt)_
-   [`46d049b`](https://github.com/stdlib-js/stdlib/commit/46d049b5d38f9ef6e426d6a517ac8925c94d7642) - **build:** replace tslint directive _(by Philipp Burckhardt)_
-   [`b5b276d`](https://github.com/stdlib-js/stdlib/commit/b5b276db941f756c15952708713d04dd26443b9d) - **docs:** remove link _(by Athan Reines)_
-   [`45a2bec`](https://github.com/stdlib-js/stdlib/commit/45a2becb6d02b484aaddcdd8c501f2e4dff90967) - **docs:** update links _(by Athan Reines)_
-   [`e98868f`](https://github.com/stdlib-js/stdlib/commit/e98868f6490ccd52789f9ff515c931415a15ef45) - **style:** disable lint rule _(by Athan Reines)_
-   [`d9aa5ae`](https://github.com/stdlib-js/stdlib/commit/d9aa5aef6a564693b6b575d151c758af685b6793) - **style:** disable lint rule _(by Athan Reines)_
-   [`14bdb9c`](https://github.com/stdlib-js/stdlib/commit/14bdb9c0279ede04563b4699d4c3061c52ca5fa1) - **style:** disable lint rule _(by Athan Reines)_
-   [`0342d6f`](https://github.com/stdlib-js/stdlib/commit/0342d6f1a5a9a346413ff9bdf31579b1e2ad5d3c) - **docs:** resolve lint errors _(by Athan Reines)_
-   [`1c169c2`](https://github.com/stdlib-js/stdlib/commit/1c169c2d60ac0f84e950acb31e44321a1500f847) - **docs:** fix lint errors _(by Athan Reines)_
-   [`305b44a`](https://github.com/stdlib-js/stdlib/commit/305b44a00a7fb8ced6371232e9e4eb63e7e4e27b) - **docs:** resolve lint errors _(by Athan Reines)_
-   [`5cb76e8`](https://github.com/stdlib-js/stdlib/commit/5cb76e832b91b54a063b5accf3dbbd2584f6c45c) - **docs:** resolve lint errors _(by Athan Reines)_
-   [`1787cc8`](https://github.com/stdlib-js/stdlib/commit/1787cc8d71f6ce7fb52467b570e403d4928313ef) - **style:** disable lint rule _(by Athan Reines)_
-   [`ebceacd`](https://github.com/stdlib-js/stdlib/commit/ebceacd36b4ff184151534cf9411988758d77a5c) - **style:** disable lint rule _(by Athan Reines)_
-   [`6ae17a9`](https://github.com/stdlib-js/stdlib/commit/6ae17a99773f73fe9917d3fd83f4efac45e61e42) - **docs:** resolve lint errors _(by Athan Reines)_
-   [`961eedc`](https://github.com/stdlib-js/stdlib/commit/961eedcac3e01fe7a165a92f1993ce2551934771) - **style:** disable lint rule _(by Athan Reines)_
-   [`1d30303`](https://github.com/stdlib-js/stdlib/commit/1d303039cbe2b49076eb63759a2514467e787754) - **docs:** resolve lint errors _(by Athan Reines)_
-   [`725a77c`](https://github.com/stdlib-js/stdlib/commit/725a77cf5c97463980b62b18e71fc5d58ffcfae4) - **docs:** resolve lint errors _(by Athan Reines)_

</details>

</section>

<!-- /.commits -->

</section>

<!-- /.release -->

<section class="release" id="v0.1.1">

## 0.1.1 (2023-11-08)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.1.0">

## 0.1.0 (2023-11-08)

<section class="packages">

### Packages

<section class="package" id="assert-v0.1.0">

#### [@stdlib/assert](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert)

<details>

<section class="features">

##### Features

-   [`e18b248`](https://github.com/stdlib-js/stdlib/commit/e18b248464425863019a841795a7e5fc7d01d0ea) - update namespace TypeScript declarations [(#1100)](https://github.com/stdlib-js/stdlib/pull/1100)
-   [`5b2a031`](https://github.com/stdlib-js/stdlib/commit/5b2a0316d4dfddb30848a62727f8e75586786b41) - add `isMultiSlice` to namespace
-   [`59cbf7d`](https://github.com/stdlib-js/stdlib/commit/59cbf7d9b0cbae52b9ed33dcad0140a974591158) - add `isSlice` to namespace
-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`421e1ae`](https://github.com/stdlib-js/stdlib/commit/421e1ae86e3d7fb31d156af9cd522303a6645220) - update namespace TypeScript declarations [(#1044)](https://github.com/stdlib-js/stdlib/pull/1044)

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-contains-v0.1.0">

#### [@stdlib/assert/contains](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/contains)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-deep-equal-v0.1.0">

#### [@stdlib/assert/deep-equal](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/deep-equal)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-deep-has-own-property-v0.1.0">

#### [@stdlib/assert/deep-has-own-property](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/deep-has-own-property)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-deep-has-property-v0.1.0">

#### [@stdlib/assert/deep-has-property](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/deep-has-property)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-has--v0.1.0">

#### [@stdlib/assert/has-](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/has-)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`b4dbeae`](https://github.com/stdlib-js/stdlib/commit/b4dbeaebb752c2494a156cd6f92d7055bea024ec) - set correct package names

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-has-arraybuffer-support-v0.1.0">

#### [@stdlib/assert/has-arraybuffer-support](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/has-arraybuffer-support)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-has-arrow-function-support-v0.1.0">

#### [@stdlib/assert/has-arrow-function-support](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/has-arrow-function-support)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`ff35f38`](https://github.com/stdlib-js/stdlib/commit/ff35f3846e467adce5c8244342a04e2fd4a2ac84) - make CLI scripts executable [(#1111)](https://github.com/stdlib-js/stdlib/pull/1111)

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-has-async-await-support-v0.1.0">

#### [@stdlib/assert/has-async-await-support](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/has-async-await-support)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-has-async-iterator-symbol-support-v0.1.0">

#### [@stdlib/assert/has-async-iterator-symbol-support](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/has-async-iterator-symbol-support)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-has-bigint-support-v0.1.0">

#### [@stdlib/assert/has-bigint-support](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/has-bigint-support)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-has-bigint64array-support-v0.1.0">

#### [@stdlib/assert/has-bigint64array-support](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/has-bigint64array-support)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`ff35f38`](https://github.com/stdlib-js/stdlib/commit/ff35f3846e467adce5c8244342a04e2fd4a2ac84) - make CLI scripts executable [(#1111)](https://github.com/stdlib-js/stdlib/pull/1111)

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-has-biguint64array-support-v0.1.0">

#### [@stdlib/assert/has-biguint64array-support](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/has-biguint64array-support)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`ff35f38`](https://github.com/stdlib-js/stdlib/commit/ff35f3846e467adce5c8244342a04e2fd4a2ac84) - make CLI scripts executable [(#1111)](https://github.com/stdlib-js/stdlib/pull/1111)

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-has-class-support-v0.1.0">

#### [@stdlib/assert/has-class-support](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/has-class-support)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-has-define-properties-support-v0.1.0">

#### [@stdlib/assert/has-define-properties-support](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/has-define-properties-support)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-has-define-property-support-v0.1.0">

#### [@stdlib/assert/has-define-property-support](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/has-define-property-support)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-has-float32array-support-v0.1.0">

#### [@stdlib/assert/has-float32array-support](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/has-float32array-support)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-has-float64array-support-v0.1.0">

#### [@stdlib/assert/has-float64array-support](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/has-float64array-support)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-has-function-name-support-v0.1.0">

#### [@stdlib/assert/has-function-name-support](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/has-function-name-support)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-has-generator-support-v0.1.0">

#### [@stdlib/assert/has-generator-support](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/has-generator-support)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-has-globalthis-support-v0.1.0">

#### [@stdlib/assert/has-globalthis-support](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/has-globalthis-support)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-has-int16array-support-v0.1.0">

#### [@stdlib/assert/has-int16array-support](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/has-int16array-support)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-has-int32array-support-v0.1.0">

#### [@stdlib/assert/has-int32array-support](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/has-int32array-support)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-has-int8array-support-v0.1.0">

#### [@stdlib/assert/has-int8array-support](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/has-int8array-support)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-has-iterator-symbol-support-v0.1.0">

#### [@stdlib/assert/has-iterator-symbol-support](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/has-iterator-symbol-support)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-has-map-support-v0.1.0">

#### [@stdlib/assert/has-map-support](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/has-map-support)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-has-node-buffer-support-v0.1.0">

#### [@stdlib/assert/has-node-buffer-support](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/has-node-buffer-support)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-has-own-property-v0.1.0">

#### [@stdlib/assert/has-own-property](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/has-own-property)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-has-property-v0.1.0">

#### [@stdlib/assert/has-property](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/has-property)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-has-proxy-support-v0.1.0">

#### [@stdlib/assert/has-proxy-support](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/has-proxy-support)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-has-set-support-v0.1.0">

#### [@stdlib/assert/has-set-support](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/has-set-support)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-has-sharedarraybuffer-support-v0.1.0">

#### [@stdlib/assert/has-sharedarraybuffer-support](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/has-sharedarraybuffer-support)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-has-symbol-support-v0.1.0">

#### [@stdlib/assert/has-symbol-support](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/has-symbol-support)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-has-tostringtag-support-v0.1.0">

#### [@stdlib/assert/has-tostringtag-support](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/has-tostringtag-support)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-has-uint16array-support-v0.1.0">

#### [@stdlib/assert/has-uint16array-support](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/has-uint16array-support)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-has-uint32array-support-v0.1.0">

#### [@stdlib/assert/has-uint32array-support](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/has-uint32array-support)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-has-uint8array-support-v0.1.0">

#### [@stdlib/assert/has-uint8array-support](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/has-uint8array-support)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-has-uint8clampedarray-support-v0.1.0">

#### [@stdlib/assert/has-uint8clampedarray-support](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/has-uint8clampedarray-support)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-has-utf16-surrogate-pair-at-v0.1.0">

#### [@stdlib/assert/has-utf16-surrogate-pair-at](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/has-utf16-surrogate-pair-at)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-has-wasm-support-v0.1.0">

#### [@stdlib/assert/has-wasm-support](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/has-wasm-support)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-has-weakmap-support-v0.1.0">

#### [@stdlib/assert/has-weakmap-support](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/has-weakmap-support)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-has-weakset-support-v0.1.0">

#### [@stdlib/assert/has-weakset-support](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/has-weakset-support)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-instance-of-v0.1.0">

#### [@stdlib/assert/instance-of](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/instance-of)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is--v0.1.0">

#### [@stdlib/assert/is-](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`6423e41`](https://github.com/stdlib-js/stdlib/commit/6423e41d745c0dedb7f6631cc03146b569a48a10) - use type predicates for narrowing
-   [`b121c69`](https://github.com/stdlib-js/stdlib/commit/b121c695c2fd48724feb0ffbc313a532e30966c6) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`ff35f38`](https://github.com/stdlib-js/stdlib/commit/ff35f3846e467adce5c8244342a04e2fd4a2ac84) - make CLI scripts executable [(#1111)](https://github.com/stdlib-js/stdlib/pull/1111)

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-absolute-http-uri-v0.1.0">

#### [@stdlib/assert/is-absolute-http-uri](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-absolute-http-uri)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`3c153c4`](https://github.com/stdlib-js/stdlib/commit/3c153c4341c58db2fde9b616f1990be964482cf8) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`ff35f38`](https://github.com/stdlib-js/stdlib/commit/ff35f3846e467adce5c8244342a04e2fd4a2ac84) - make CLI scripts executable [(#1111)](https://github.com/stdlib-js/stdlib/pull/1111)

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-absolute-path-v0.1.0">

#### [@stdlib/assert/is-absolute-path](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-absolute-path)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`3c153c4`](https://github.com/stdlib-js/stdlib/commit/3c153c4341c58db2fde9b616f1990be964482cf8) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-absolute-uri-v0.1.0">

#### [@stdlib/assert/is-absolute-uri](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-absolute-uri)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`3c153c4`](https://github.com/stdlib-js/stdlib/commit/3c153c4341c58db2fde9b616f1990be964482cf8) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`ff35f38`](https://github.com/stdlib-js/stdlib/commit/ff35f3846e467adce5c8244342a04e2fd4a2ac84) - make CLI scripts executable [(#1111)](https://github.com/stdlib-js/stdlib/pull/1111)

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-accessor-array-v0.1.0">

#### [@stdlib/assert/is-accessor-array](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-accessor-array)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`3c153c4`](https://github.com/stdlib-js/stdlib/commit/3c153c4341c58db2fde9b616f1990be964482cf8) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-accessor-property-v0.1.0">

#### [@stdlib/assert/is-accessor-property](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-accessor-property)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-accessor-property-in-v0.1.0">

#### [@stdlib/assert/is-accessor-property-in](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-accessor-property-in)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-alphagram-v0.1.0">

#### [@stdlib/assert/is-alphagram](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-alphagram)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`3c153c4`](https://github.com/stdlib-js/stdlib/commit/3c153c4341c58db2fde9b616f1990be964482cf8) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`ff35f38`](https://github.com/stdlib-js/stdlib/commit/ff35f3846e467adce5c8244342a04e2fd4a2ac84) - make CLI scripts executable [(#1111)](https://github.com/stdlib-js/stdlib/pull/1111)

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-alphanumeric-v0.1.0">

#### [@stdlib/assert/is-alphanumeric](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-alphanumeric)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`3c153c4`](https://github.com/stdlib-js/stdlib/commit/3c153c4341c58db2fde9b616f1990be964482cf8) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`ff35f38`](https://github.com/stdlib-js/stdlib/commit/ff35f3846e467adce5c8244342a04e2fd4a2ac84) - make CLI scripts executable [(#1111)](https://github.com/stdlib-js/stdlib/pull/1111)

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-anagram-v0.1.0">

#### [@stdlib/assert/is-anagram](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-anagram)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`ff35f38`](https://github.com/stdlib-js/stdlib/commit/ff35f3846e467adce5c8244342a04e2fd4a2ac84) - make CLI scripts executable [(#1111)](https://github.com/stdlib-js/stdlib/pull/1111)

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-arguments-v0.1.0">

#### [@stdlib/assert/is-arguments](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-arguments)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`3c153c4`](https://github.com/stdlib-js/stdlib/commit/3c153c4341c58db2fde9b616f1990be964482cf8) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-array-v0.1.0">

#### [@stdlib/assert/is-array](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-array)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`3c153c4`](https://github.com/stdlib-js/stdlib/commit/3c153c4341c58db2fde9b616f1990be964482cf8) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-array-array-v0.1.0">

#### [@stdlib/assert/is-array-array](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-array-array)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`3c153c4`](https://github.com/stdlib-js/stdlib/commit/3c153c4341c58db2fde9b616f1990be964482cf8) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-array-length-v0.1.0">

#### [@stdlib/assert/is-array-length](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-array-length)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`3c153c4`](https://github.com/stdlib-js/stdlib/commit/3c153c4341c58db2fde9b616f1990be964482cf8) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-array-like-v0.1.0">

#### [@stdlib/assert/is-array-like](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-array-like)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`3c153c4`](https://github.com/stdlib-js/stdlib/commit/3c153c4341c58db2fde9b616f1990be964482cf8) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-array-like-object-v0.1.0">

#### [@stdlib/assert/is-array-like-object](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-array-like-object)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`3c153c4`](https://github.com/stdlib-js/stdlib/commit/3c153c4341c58db2fde9b616f1990be964482cf8) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-arraybuffer-v0.1.0">

#### [@stdlib/assert/is-arraybuffer](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-arraybuffer)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`3c153c4`](https://github.com/stdlib-js/stdlib/commit/3c153c4341c58db2fde9b616f1990be964482cf8) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-arraybuffer-view-v0.1.0">

#### [@stdlib/assert/is-arraybuffer-view](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-arraybuffer-view)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`3c153c4`](https://github.com/stdlib-js/stdlib/commit/3c153c4341c58db2fde9b616f1990be964482cf8) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-arrow-function-v0.1.0">

#### [@stdlib/assert/is-arrow-function](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-arrow-function)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`3c153c4`](https://github.com/stdlib-js/stdlib/commit/3c153c4341c58db2fde9b616f1990be964482cf8) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-ascii-v0.1.0">

#### [@stdlib/assert/is-ascii](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-ascii)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`3c153c4`](https://github.com/stdlib-js/stdlib/commit/3c153c4341c58db2fde9b616f1990be964482cf8) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`ff35f38`](https://github.com/stdlib-js/stdlib/commit/ff35f3846e467adce5c8244342a04e2fd4a2ac84) - make CLI scripts executable [(#1111)](https://github.com/stdlib-js/stdlib/pull/1111)

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-between-v0.1.0">

#### [@stdlib/assert/is-between](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-between)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`b121c69`](https://github.com/stdlib-js/stdlib/commit/b121c695c2fd48724feb0ffbc313a532e30966c6) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-between-array-v0.1.0">

#### [@stdlib/assert/is-between-array](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-between-array)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`b121c69`](https://github.com/stdlib-js/stdlib/commit/b121c695c2fd48724feb0ffbc313a532e30966c6) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-big-endian-v0.1.0">

#### [@stdlib/assert/is-big-endian](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-big-endian)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-bigint-v0.1.0">

#### [@stdlib/assert/is-bigint](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-bigint)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`b121c69`](https://github.com/stdlib-js/stdlib/commit/b121c695c2fd48724feb0ffbc313a532e30966c6) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-bigint64array-v0.1.0">

#### [@stdlib/assert/is-bigint64array](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-bigint64array)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`b121c69`](https://github.com/stdlib-js/stdlib/commit/b121c695c2fd48724feb0ffbc313a532e30966c6) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`b4dbeae`](https://github.com/stdlib-js/stdlib/commit/b4dbeaebb752c2494a156cd6f92d7055bea024ec) - set correct package names

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-biguint64array-v0.1.0">

#### [@stdlib/assert/is-biguint64array](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-biguint64array)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`b121c69`](https://github.com/stdlib-js/stdlib/commit/b121c695c2fd48724feb0ffbc313a532e30966c6) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-blank-string-v0.1.0">

#### [@stdlib/assert/is-blank-string](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-blank-string)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`b121c69`](https://github.com/stdlib-js/stdlib/commit/b121c695c2fd48724feb0ffbc313a532e30966c6) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`ff35f38`](https://github.com/stdlib-js/stdlib/commit/ff35f3846e467adce5c8244342a04e2fd4a2ac84) - make CLI scripts executable [(#1111)](https://github.com/stdlib-js/stdlib/pull/1111)

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-boolean-v0.1.0">

#### [@stdlib/assert/is-boolean](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-boolean)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`b121c69`](https://github.com/stdlib-js/stdlib/commit/b121c695c2fd48724feb0ffbc313a532e30966c6) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-boolean-array-v0.1.0">

#### [@stdlib/assert/is-boolean-array](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-boolean-array)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`b121c69`](https://github.com/stdlib-js/stdlib/commit/b121c695c2fd48724feb0ffbc313a532e30966c6) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-boxed-primitive-v0.1.0">

#### [@stdlib/assert/is-boxed-primitive](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-boxed-primitive)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`b121c69`](https://github.com/stdlib-js/stdlib/commit/b121c695c2fd48724feb0ffbc313a532e30966c6) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-browser-v0.1.0">

#### [@stdlib/assert/is-browser](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-browser)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-buffer-v0.1.0">

#### [@stdlib/assert/is-buffer](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-buffer)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`b121c69`](https://github.com/stdlib-js/stdlib/commit/b121c695c2fd48724feb0ffbc313a532e30966c6) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-camelcase-v0.1.0">

#### [@stdlib/assert/is-camelcase](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-camelcase)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`091a743`](https://github.com/stdlib-js/stdlib/commit/091a74301e438c6411ed34f94c668ec3f42ec339) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`ff35f38`](https://github.com/stdlib-js/stdlib/commit/ff35f3846e467adce5c8244342a04e2fd4a2ac84) - make CLI scripts executable [(#1111)](https://github.com/stdlib-js/stdlib/pull/1111)

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-capitalized-v0.1.0">

#### [@stdlib/assert/is-capitalized](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-capitalized)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`091a743`](https://github.com/stdlib-js/stdlib/commit/091a74301e438c6411ed34f94c668ec3f42ec339) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`ff35f38`](https://github.com/stdlib-js/stdlib/commit/ff35f3846e467adce5c8244342a04e2fd4a2ac84) - make CLI scripts executable [(#1111)](https://github.com/stdlib-js/stdlib/pull/1111)

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-centrosymmetric-matrix-v0.1.0">

#### [@stdlib/assert/is-centrosymmetric-matrix](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-centrosymmetric-matrix)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`091a743`](https://github.com/stdlib-js/stdlib/commit/091a74301e438c6411ed34f94c668ec3f42ec339) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-circular-v0.1.0">

#### [@stdlib/assert/is-circular](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-circular)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-circular-array-v0.1.0">

#### [@stdlib/assert/is-circular-array](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-circular-array)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-circular-plain-object-v0.1.0">

#### [@stdlib/assert/is-circular-plain-object](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-circular-plain-object)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-class-v0.1.0">

#### [@stdlib/assert/is-class](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-class)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-collection-v0.1.0">

#### [@stdlib/assert/is-collection](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-collection)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`091a743`](https://github.com/stdlib-js/stdlib/commit/091a74301e438c6411ed34f94c668ec3f42ec339) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`aad0c02`](https://github.com/stdlib-js/stdlib/commit/aad0c02e72463e7421eddf4c055e44d9b306f380) - update import path for `Collection` type definition

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-complex-v0.1.0">

#### [@stdlib/assert/is-complex](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-complex)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`091a743`](https://github.com/stdlib-js/stdlib/commit/091a74301e438c6411ed34f94c668ec3f42ec339) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`32a2827`](https://github.com/stdlib-js/stdlib/commit/32a282799ffd272d2a0554e81755a14923564e51) - update import paths for complex type defs

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-complex-like-v0.1.0">

#### [@stdlib/assert/is-complex-like](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-complex-like)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`091a743`](https://github.com/stdlib-js/stdlib/commit/091a74301e438c6411ed34f94c668ec3f42ec339) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`32a2827`](https://github.com/stdlib-js/stdlib/commit/32a282799ffd272d2a0554e81755a14923564e51) - update import paths for complex type defs

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-complex-typed-array-v0.1.0">

#### [@stdlib/assert/is-complex-typed-array](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-complex-typed-array)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`091a743`](https://github.com/stdlib-js/stdlib/commit/091a74301e438c6411ed34f94c668ec3f42ec339) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-complex-typed-array-like-v0.1.0">

#### [@stdlib/assert/is-complex-typed-array-like](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-complex-typed-array-like)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`091a743`](https://github.com/stdlib-js/stdlib/commit/091a74301e438c6411ed34f94c668ec3f42ec339) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-complex128-v0.1.0">

#### [@stdlib/assert/is-complex128](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-complex128)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`091a743`](https://github.com/stdlib-js/stdlib/commit/091a74301e438c6411ed34f94c668ec3f42ec339) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`32a2827`](https://github.com/stdlib-js/stdlib/commit/32a282799ffd272d2a0554e81755a14923564e51) - update import paths for complex type defs

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-complex128array-v0.1.0">

#### [@stdlib/assert/is-complex128array](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-complex128array)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`091a743`](https://github.com/stdlib-js/stdlib/commit/091a74301e438c6411ed34f94c668ec3f42ec339) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-complex64-v0.1.0">

#### [@stdlib/assert/is-complex64](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-complex64)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`091a743`](https://github.com/stdlib-js/stdlib/commit/091a74301e438c6411ed34f94c668ec3f42ec339) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`32a2827`](https://github.com/stdlib-js/stdlib/commit/32a282799ffd272d2a0554e81755a14923564e51) - update import paths for complex type defs

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-complex64array-v0.1.0">

#### [@stdlib/assert/is-complex64array](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-complex64array)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`091a743`](https://github.com/stdlib-js/stdlib/commit/091a74301e438c6411ed34f94c668ec3f42ec339) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-composite-v0.1.0">

#### [@stdlib/assert/is-composite](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-composite)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`091a743`](https://github.com/stdlib-js/stdlib/commit/091a74301e438c6411ed34f94c668ec3f42ec339) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-configurable-property-v0.1.0">

#### [@stdlib/assert/is-configurable-property](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-configurable-property)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-configurable-property-in-v0.1.0">

#### [@stdlib/assert/is-configurable-property-in](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-configurable-property-in)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-constantcase-v0.1.0">

#### [@stdlib/assert/is-constantcase](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-constantcase)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`091a743`](https://github.com/stdlib-js/stdlib/commit/091a74301e438c6411ed34f94c668ec3f42ec339) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`ff35f38`](https://github.com/stdlib-js/stdlib/commit/ff35f3846e467adce5c8244342a04e2fd4a2ac84) - make CLI scripts executable [(#1111)](https://github.com/stdlib-js/stdlib/pull/1111)

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-cube-number-v0.1.0">

#### [@stdlib/assert/is-cube-number](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-cube-number)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`091a743`](https://github.com/stdlib-js/stdlib/commit/091a74301e438c6411ed34f94c668ec3f42ec339) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-current-year-v0.1.0">

#### [@stdlib/assert/is-current-year](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-current-year)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`091a743`](https://github.com/stdlib-js/stdlib/commit/091a74301e438c6411ed34f94c668ec3f42ec339) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`ff35f38`](https://github.com/stdlib-js/stdlib/commit/ff35f3846e467adce5c8244342a04e2fd4a2ac84) - make CLI scripts executable [(#1111)](https://github.com/stdlib-js/stdlib/pull/1111)

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-darwin-v0.1.0">

#### [@stdlib/assert/is-darwin](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-darwin)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-date-object-v0.1.0">

#### [@stdlib/assert/is-date-object](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-date-object)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`6423e41`](https://github.com/stdlib-js/stdlib/commit/6423e41d745c0dedb7f6631cc03146b569a48a10) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-date-object-array-v0.1.0">

#### [@stdlib/assert/is-date-object-array](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-date-object-array)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`6423e41`](https://github.com/stdlib-js/stdlib/commit/6423e41d745c0dedb7f6631cc03146b569a48a10) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-digit-string-v0.1.0">

#### [@stdlib/assert/is-digit-string](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-digit-string)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`6423e41`](https://github.com/stdlib-js/stdlib/commit/6423e41d745c0dedb7f6631cc03146b569a48a10) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`ff35f38`](https://github.com/stdlib-js/stdlib/commit/ff35f3846e467adce5c8244342a04e2fd4a2ac84) - make CLI scripts executable [(#1111)](https://github.com/stdlib-js/stdlib/pull/1111)

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-docker-v0.1.0">

#### [@stdlib/assert/is-docker](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-docker)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-domain-name-v0.1.0">

#### [@stdlib/assert/is-domain-name](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-domain-name)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`6423e41`](https://github.com/stdlib-js/stdlib/commit/6423e41d745c0dedb7f6631cc03146b569a48a10) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`ff35f38`](https://github.com/stdlib-js/stdlib/commit/ff35f3846e467adce5c8244342a04e2fd4a2ac84) - make CLI scripts executable [(#1111)](https://github.com/stdlib-js/stdlib/pull/1111)

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-duration-string-v0.1.0">

#### [@stdlib/assert/is-duration-string](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-duration-string)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`6423e41`](https://github.com/stdlib-js/stdlib/commit/6423e41d745c0dedb7f6631cc03146b569a48a10) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`ff35f38`](https://github.com/stdlib-js/stdlib/commit/ff35f3846e467adce5c8244342a04e2fd4a2ac84) - make CLI scripts executable [(#1111)](https://github.com/stdlib-js/stdlib/pull/1111)

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-electron-v0.1.0">

#### [@stdlib/assert/is-electron](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-electron)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-electron-main-v0.1.0">

#### [@stdlib/assert/is-electron-main](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-electron-main)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-electron-renderer-v0.1.0">

#### [@stdlib/assert/is-electron-renderer](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-electron-renderer)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-email-address-v0.1.0">

#### [@stdlib/assert/is-email-address](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-email-address)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`581e4be`](https://github.com/stdlib-js/stdlib/commit/581e4be2c0c4d5d93879848cbe5c02c6c9a53e71) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-empty-array-v0.1.0">

#### [@stdlib/assert/is-empty-array](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-empty-array)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`581e4be`](https://github.com/stdlib-js/stdlib/commit/581e4be2c0c4d5d93879848cbe5c02c6c9a53e71) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-empty-array-like-object-v0.1.0">

#### [@stdlib/assert/is-empty-array-like-object](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-empty-array-like-object)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`581e4be`](https://github.com/stdlib-js/stdlib/commit/581e4be2c0c4d5d93879848cbe5c02c6c9a53e71) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-empty-collection-v0.1.0">

#### [@stdlib/assert/is-empty-collection](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-empty-collection)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`581e4be`](https://github.com/stdlib-js/stdlib/commit/581e4be2c0c4d5d93879848cbe5c02c6c9a53e71) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`aad0c02`](https://github.com/stdlib-js/stdlib/commit/aad0c02e72463e7421eddf4c055e44d9b306f380) - update import path for `Collection` type definition

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-empty-object-v0.1.0">

#### [@stdlib/assert/is-empty-object](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-empty-object)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`581e4be`](https://github.com/stdlib-js/stdlib/commit/581e4be2c0c4d5d93879848cbe5c02c6c9a53e71) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-empty-string-v0.1.0">

#### [@stdlib/assert/is-empty-string](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-empty-string)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`581e4be`](https://github.com/stdlib-js/stdlib/commit/581e4be2c0c4d5d93879848cbe5c02c6c9a53e71) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-enumerable-property-v0.1.0">

#### [@stdlib/assert/is-enumerable-property](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-enumerable-property)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-enumerable-property-in-v0.1.0">

#### [@stdlib/assert/is-enumerable-property-in](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-enumerable-property-in)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-error-v0.1.0">

#### [@stdlib/assert/is-error](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-error)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`581e4be`](https://github.com/stdlib-js/stdlib/commit/581e4be2c0c4d5d93879848cbe5c02c6c9a53e71) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-eval-error-v0.1.0">

#### [@stdlib/assert/is-eval-error](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-eval-error)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`581e4be`](https://github.com/stdlib-js/stdlib/commit/581e4be2c0c4d5d93879848cbe5c02c6c9a53e71) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-even-v0.1.0">

#### [@stdlib/assert/is-even](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-even)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`581e4be`](https://github.com/stdlib-js/stdlib/commit/581e4be2c0c4d5d93879848cbe5c02c6c9a53e71) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-falsy-v0.1.0">

#### [@stdlib/assert/is-falsy](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-falsy)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-falsy-array-v0.1.0">

#### [@stdlib/assert/is-falsy-array](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-falsy-array)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-finite-v0.1.0">

#### [@stdlib/assert/is-finite](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-finite)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`d42a3f0`](https://github.com/stdlib-js/stdlib/commit/d42a3f011e1ff7b8f25d602a103b206955b44450) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-finite-array-v0.1.0">

#### [@stdlib/assert/is-finite-array](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-finite-array)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`d42a3f0`](https://github.com/stdlib-js/stdlib/commit/d42a3f011e1ff7b8f25d602a103b206955b44450) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-float32array-v0.1.0">

#### [@stdlib/assert/is-float32array](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-float32array)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`d42a3f0`](https://github.com/stdlib-js/stdlib/commit/d42a3f011e1ff7b8f25d602a103b206955b44450) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-float32matrix-like-v0.1.0">

#### [@stdlib/assert/is-float32matrix-like](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-float32matrix-like)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-float32ndarray-like-v0.1.0">

#### [@stdlib/assert/is-float32ndarray-like](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-float32ndarray-like)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-float32vector-like-v0.1.0">

#### [@stdlib/assert/is-float32vector-like](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-float32vector-like)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-float64array-v0.1.0">

#### [@stdlib/assert/is-float64array](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-float64array)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`d42a3f0`](https://github.com/stdlib-js/stdlib/commit/d42a3f011e1ff7b8f25d602a103b206955b44450) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-float64matrix-like-v0.1.0">

#### [@stdlib/assert/is-float64matrix-like](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-float64matrix-like)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-float64ndarray-like-v0.1.0">

#### [@stdlib/assert/is-float64ndarray-like](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-float64ndarray-like)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-float64vector-like-v0.1.0">

#### [@stdlib/assert/is-float64vector-like](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-float64vector-like)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-function-v0.1.0">

#### [@stdlib/assert/is-function](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-function)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`d42a3f0`](https://github.com/stdlib-js/stdlib/commit/d42a3f011e1ff7b8f25d602a103b206955b44450) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-function-array-v0.1.0">

#### [@stdlib/assert/is-function-array](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-function-array)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`d42a3f0`](https://github.com/stdlib-js/stdlib/commit/d42a3f011e1ff7b8f25d602a103b206955b44450) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-generator-object-v0.1.0">

#### [@stdlib/assert/is-generator-object](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-generator-object)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`8c3555f`](https://github.com/stdlib-js/stdlib/commit/8c3555fb953efb7600d5cd2bd7e11072f344e476) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-generator-object-like-v0.1.0">

#### [@stdlib/assert/is-generator-object-like](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-generator-object-like)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-gzip-buffer-v0.1.0">

#### [@stdlib/assert/is-gzip-buffer](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-gzip-buffer)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`0f2e209`](https://github.com/stdlib-js/stdlib/commit/0f2e20930092fbc21ea0591fe68f4484d2dee33e) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-hex-string-v0.1.0">

#### [@stdlib/assert/is-hex-string](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-hex-string)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`8c3555f`](https://github.com/stdlib-js/stdlib/commit/8c3555fb953efb7600d5cd2bd7e11072f344e476) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`ff35f38`](https://github.com/stdlib-js/stdlib/commit/ff35f3846e467adce5c8244342a04e2fd4a2ac84) - make CLI scripts executable [(#1111)](https://github.com/stdlib-js/stdlib/pull/1111)

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-infinite-v0.1.0">

#### [@stdlib/assert/is-infinite](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-infinite)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`9c1c9f8`](https://github.com/stdlib-js/stdlib/commit/9c1c9f823881c9bbe150f8d23a0d2f061e4df672) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-inherited-property-v0.1.0">

#### [@stdlib/assert/is-inherited-property](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-inherited-property)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-int16array-v0.1.0">

#### [@stdlib/assert/is-int16array](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-int16array)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`9c1c9f8`](https://github.com/stdlib-js/stdlib/commit/9c1c9f823881c9bbe150f8d23a0d2f061e4df672) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-int32array-v0.1.0">

#### [@stdlib/assert/is-int32array](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-int32array)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`9c1c9f8`](https://github.com/stdlib-js/stdlib/commit/9c1c9f823881c9bbe150f8d23a0d2f061e4df672) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-int8array-v0.1.0">

#### [@stdlib/assert/is-int8array](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-int8array)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`9c1c9f8`](https://github.com/stdlib-js/stdlib/commit/9c1c9f823881c9bbe150f8d23a0d2f061e4df672) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-integer-v0.1.0">

#### [@stdlib/assert/is-integer](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-integer)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`9c1c9f8`](https://github.com/stdlib-js/stdlib/commit/9c1c9f823881c9bbe150f8d23a0d2f061e4df672) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-integer-array-v0.1.0">

#### [@stdlib/assert/is-integer-array](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-integer-array)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`9c1c9f8`](https://github.com/stdlib-js/stdlib/commit/9c1c9f823881c9bbe150f8d23a0d2f061e4df672) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-iterable-like-v0.1.0">

#### [@stdlib/assert/is-iterable-like](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-iterable-like)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-iterator-like-v0.1.0">

#### [@stdlib/assert/is-iterator-like](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-iterator-like)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-json-v0.1.0">

#### [@stdlib/assert/is-json](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-json)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`dfc4ca9`](https://github.com/stdlib-js/stdlib/commit/dfc4ca9922c4415cc78d1cb7b69e303c5e26d125) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-kebabcase-v0.1.0">

#### [@stdlib/assert/is-kebabcase](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-kebabcase)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`fa8b441`](https://github.com/stdlib-js/stdlib/commit/fa8b441f153cf21d10f49cea43d2f7cbe35fa5e6) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`ff35f38`](https://github.com/stdlib-js/stdlib/commit/ff35f3846e467adce5c8244342a04e2fd4a2ac84) - make CLI scripts executable [(#1111)](https://github.com/stdlib-js/stdlib/pull/1111)

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-leap-year-v0.1.0">

#### [@stdlib/assert/is-leap-year](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-leap-year)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-little-endian-v0.1.0">

#### [@stdlib/assert/is-little-endian](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-little-endian)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-localhost-v0.1.0">

#### [@stdlib/assert/is-localhost](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-localhost)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`b14cb4a`](https://github.com/stdlib-js/stdlib/commit/b14cb4ad8d17b0c0a2994412e386c35569965293) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-lowercase-v0.1.0">

#### [@stdlib/assert/is-lowercase](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-lowercase)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`b14cb4a`](https://github.com/stdlib-js/stdlib/commit/b14cb4ad8d17b0c0a2994412e386c35569965293) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-matrix-like-v0.1.0">

#### [@stdlib/assert/is-matrix-like](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-matrix-like)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-method-v0.1.0">

#### [@stdlib/assert/is-method](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-method)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-method-in-v0.1.0">

#### [@stdlib/assert/is-method-in](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-method-in)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-mobile-v0.1.0">

#### [@stdlib/assert/is-mobile](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-mobile)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-multi-slice-v0.1.0">

#### [@stdlib/assert/is-multi-slice](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-multi-slice)

<details>

<section class="features">

##### Features

-   [`527ed19`](https://github.com/stdlib-js/stdlib/commit/527ed198cb76ca8623b388d049d2006bb03cd2e7) - add `assert/is-multi-slice`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-named-typed-tuple-like-v0.1.0">

#### [@stdlib/assert/is-named-typed-tuple-like](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-named-typed-tuple-like)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-nan-v0.1.0">

#### [@stdlib/assert/is-nan](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-nan)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`3aba9d6`](https://github.com/stdlib-js/stdlib/commit/3aba9d694251469838128853c6f11399d769dee8) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-nan-array-v0.1.0">

#### [@stdlib/assert/is-nan-array](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-nan-array)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`3aba9d6`](https://github.com/stdlib-js/stdlib/commit/3aba9d694251469838128853c6f11399d769dee8) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-native-function-v0.1.0">

#### [@stdlib/assert/is-native-function](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-native-function)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`3aba9d6`](https://github.com/stdlib-js/stdlib/commit/3aba9d694251469838128853c6f11399d769dee8) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-ndarray-like-v0.1.0">

#### [@stdlib/assert/is-ndarray-like](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-ndarray-like)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-negative-integer-v0.1.0">

#### [@stdlib/assert/is-negative-integer](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-negative-integer)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`3aba9d6`](https://github.com/stdlib-js/stdlib/commit/3aba9d694251469838128853c6f11399d769dee8) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-negative-integer-array-v0.1.0">

#### [@stdlib/assert/is-negative-integer-array](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-negative-integer-array)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`3aba9d6`](https://github.com/stdlib-js/stdlib/commit/3aba9d694251469838128853c6f11399d769dee8) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-negative-number-v0.1.0">

#### [@stdlib/assert/is-negative-number](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-negative-number)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`3aba9d6`](https://github.com/stdlib-js/stdlib/commit/3aba9d694251469838128853c6f11399d769dee8) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-negative-number-array-v0.1.0">

#### [@stdlib/assert/is-negative-number-array](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-negative-number-array)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`3aba9d6`](https://github.com/stdlib-js/stdlib/commit/3aba9d694251469838128853c6f11399d769dee8) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-negative-zero-v0.1.0">

#### [@stdlib/assert/is-negative-zero](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-negative-zero)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`3aba9d6`](https://github.com/stdlib-js/stdlib/commit/3aba9d694251469838128853c6f11399d769dee8) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-node-v0.1.0">

#### [@stdlib/assert/is-node](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-node)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-node-builtin-v0.1.0">

#### [@stdlib/assert/is-node-builtin](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-node-builtin)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`ff35f38`](https://github.com/stdlib-js/stdlib/commit/ff35f3846e467adce5c8244342a04e2fd4a2ac84) - make CLI scripts executable [(#1111)](https://github.com/stdlib-js/stdlib/pull/1111)

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-node-duplex-stream-like-v0.1.0">

#### [@stdlib/assert/is-node-duplex-stream-like](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-node-duplex-stream-like)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-node-readable-stream-like-v0.1.0">

#### [@stdlib/assert/is-node-readable-stream-like](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-node-readable-stream-like)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-node-repl-v0.1.0">

#### [@stdlib/assert/is-node-repl](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-node-repl)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-node-stream-like-v0.1.0">

#### [@stdlib/assert/is-node-stream-like](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-node-stream-like)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-node-transform-stream-like-v0.1.0">

#### [@stdlib/assert/is-node-transform-stream-like](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-node-transform-stream-like)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-node-writable-stream-like-v0.1.0">

#### [@stdlib/assert/is-node-writable-stream-like](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-node-writable-stream-like)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-nonconfigurable-property-v0.1.0">

#### [@stdlib/assert/is-nonconfigurable-property](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-nonconfigurable-property)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-nonconfigurable-property-in-v0.1.0">

#### [@stdlib/assert/is-nonconfigurable-property-in](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-nonconfigurable-property-in)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-nonenumerable-property-v0.1.0">

#### [@stdlib/assert/is-nonenumerable-property](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-nonenumerable-property)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-nonenumerable-property-in-v0.1.0">

#### [@stdlib/assert/is-nonenumerable-property-in](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-nonenumerable-property-in)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-nonnegative-integer-v0.1.0">

#### [@stdlib/assert/is-nonnegative-integer](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-nonnegative-integer)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`886d7f9`](https://github.com/stdlib-js/stdlib/commit/886d7f9cd3bb190f49e3d08c20f5b817b4b249f4) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-nonnegative-integer-array-v0.1.0">

#### [@stdlib/assert/is-nonnegative-integer-array](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-nonnegative-integer-array)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`886d7f9`](https://github.com/stdlib-js/stdlib/commit/886d7f9cd3bb190f49e3d08c20f5b817b4b249f4) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-nonnegative-number-v0.1.0">

#### [@stdlib/assert/is-nonnegative-number](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-nonnegative-number)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`886d7f9`](https://github.com/stdlib-js/stdlib/commit/886d7f9cd3bb190f49e3d08c20f5b817b4b249f4) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-nonnegative-number-array-v0.1.0">

#### [@stdlib/assert/is-nonnegative-number-array](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-nonnegative-number-array)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`886d7f9`](https://github.com/stdlib-js/stdlib/commit/886d7f9cd3bb190f49e3d08c20f5b817b4b249f4) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-nonpositive-integer-v0.1.0">

#### [@stdlib/assert/is-nonpositive-integer](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-nonpositive-integer)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`886d7f9`](https://github.com/stdlib-js/stdlib/commit/886d7f9cd3bb190f49e3d08c20f5b817b4b249f4) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-nonpositive-integer-array-v0.1.0">

#### [@stdlib/assert/is-nonpositive-integer-array](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-nonpositive-integer-array)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`886d7f9`](https://github.com/stdlib-js/stdlib/commit/886d7f9cd3bb190f49e3d08c20f5b817b4b249f4) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-nonpositive-number-v0.1.0">

#### [@stdlib/assert/is-nonpositive-number](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-nonpositive-number)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`886d7f9`](https://github.com/stdlib-js/stdlib/commit/886d7f9cd3bb190f49e3d08c20f5b817b4b249f4) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-nonpositive-number-array-v0.1.0">

#### [@stdlib/assert/is-nonpositive-number-array](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-nonpositive-number-array)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`886d7f9`](https://github.com/stdlib-js/stdlib/commit/886d7f9cd3bb190f49e3d08c20f5b817b4b249f4) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-nonsymmetric-matrix-v0.1.0">

#### [@stdlib/assert/is-nonsymmetric-matrix](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-nonsymmetric-matrix)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-null-v0.1.0">

#### [@stdlib/assert/is-null](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-null)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`fc5b401`](https://github.com/stdlib-js/stdlib/commit/fc5b401ff99a4612f27f078fdb4d3574b3463a1f) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-null-array-v0.1.0">

#### [@stdlib/assert/is-null-array](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-null-array)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`fc5b401`](https://github.com/stdlib-js/stdlib/commit/fc5b401ff99a4612f27f078fdb4d3574b3463a1f) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-number-v0.1.0">

#### [@stdlib/assert/is-number](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-number)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`fc5b401`](https://github.com/stdlib-js/stdlib/commit/fc5b401ff99a4612f27f078fdb4d3574b3463a1f) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-number-array-v0.1.0">

#### [@stdlib/assert/is-number-array](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-number-array)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`fc5b401`](https://github.com/stdlib-js/stdlib/commit/fc5b401ff99a4612f27f078fdb4d3574b3463a1f) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-numeric-array-v0.1.0">

#### [@stdlib/assert/is-numeric-array](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-numeric-array)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`3faabda`](https://github.com/stdlib-js/stdlib/commit/3faabda3a0e780c45af544396f78960a8f6a3c4c) - use type predicates for narrowing
-   [`fc5b401`](https://github.com/stdlib-js/stdlib/commit/fc5b401ff99a4612f27f078fdb4d3574b3463a1f) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-object-v0.1.0">

#### [@stdlib/assert/is-object](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-object)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`107f54d`](https://github.com/stdlib-js/stdlib/commit/107f54d78bb5dfa53ced17b0e6a8dd996f946783) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-object-array-v0.1.0">

#### [@stdlib/assert/is-object-array](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-object-array)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`107f54d`](https://github.com/stdlib-js/stdlib/commit/107f54d78bb5dfa53ced17b0e6a8dd996f946783) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-object-like-v0.1.0">

#### [@stdlib/assert/is-object-like](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-object-like)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-odd-v0.1.0">

#### [@stdlib/assert/is-odd](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-odd)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`107f54d`](https://github.com/stdlib-js/stdlib/commit/107f54d78bb5dfa53ced17b0e6a8dd996f946783) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-pascalcase-v0.1.0">

#### [@stdlib/assert/is-pascalcase](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-pascalcase)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`196225d`](https://github.com/stdlib-js/stdlib/commit/196225d10e7b4ea9dc2f99d4015c12cebf6648ac) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`ff35f38`](https://github.com/stdlib-js/stdlib/commit/ff35f3846e467adce5c8244342a04e2fd4a2ac84) - make CLI scripts executable [(#1111)](https://github.com/stdlib-js/stdlib/pull/1111)

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-persymmetric-matrix-v0.1.0">

#### [@stdlib/assert/is-persymmetric-matrix](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-persymmetric-matrix)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-plain-object-v0.1.0">

#### [@stdlib/assert/is-plain-object](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-plain-object)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`196225d`](https://github.com/stdlib-js/stdlib/commit/196225d10e7b4ea9dc2f99d4015c12cebf6648ac) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-plain-object-array-v0.1.0">

#### [@stdlib/assert/is-plain-object-array](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-plain-object-array)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`196225d`](https://github.com/stdlib-js/stdlib/commit/196225d10e7b4ea9dc2f99d4015c12cebf6648ac) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-positive-integer-v0.1.0">

#### [@stdlib/assert/is-positive-integer](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-positive-integer)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`196225d`](https://github.com/stdlib-js/stdlib/commit/196225d10e7b4ea9dc2f99d4015c12cebf6648ac) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-positive-integer-array-v0.1.0">

#### [@stdlib/assert/is-positive-integer-array](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-positive-integer-array)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`196225d`](https://github.com/stdlib-js/stdlib/commit/196225d10e7b4ea9dc2f99d4015c12cebf6648ac) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-positive-number-v0.1.0">

#### [@stdlib/assert/is-positive-number](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-positive-number)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`196225d`](https://github.com/stdlib-js/stdlib/commit/196225d10e7b4ea9dc2f99d4015c12cebf6648ac) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-positive-number-array-v0.1.0">

#### [@stdlib/assert/is-positive-number-array](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-positive-number-array)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`196225d`](https://github.com/stdlib-js/stdlib/commit/196225d10e7b4ea9dc2f99d4015c12cebf6648ac) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-positive-zero-v0.1.0">

#### [@stdlib/assert/is-positive-zero](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-positive-zero)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`196225d`](https://github.com/stdlib-js/stdlib/commit/196225d10e7b4ea9dc2f99d4015c12cebf6648ac) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-prime-v0.1.0">

#### [@stdlib/assert/is-prime](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-prime)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`196225d`](https://github.com/stdlib-js/stdlib/commit/196225d10e7b4ea9dc2f99d4015c12cebf6648ac) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-primitive-v0.1.0">

#### [@stdlib/assert/is-primitive](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-primitive)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`196225d`](https://github.com/stdlib-js/stdlib/commit/196225d10e7b4ea9dc2f99d4015c12cebf6648ac) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-primitive-array-v0.1.0">

#### [@stdlib/assert/is-primitive-array](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-primitive-array)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`196225d`](https://github.com/stdlib-js/stdlib/commit/196225d10e7b4ea9dc2f99d4015c12cebf6648ac) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-prng-like-v0.1.0">

#### [@stdlib/assert/is-prng-like](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-prng-like)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-probability-v0.1.0">

#### [@stdlib/assert/is-probability](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-probability)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`196225d`](https://github.com/stdlib-js/stdlib/commit/196225d10e7b4ea9dc2f99d4015c12cebf6648ac) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-probability-array-v0.1.0">

#### [@stdlib/assert/is-probability-array](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-probability-array)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`196225d`](https://github.com/stdlib-js/stdlib/commit/196225d10e7b4ea9dc2f99d4015c12cebf6648ac) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-property-key-v0.1.0">

#### [@stdlib/assert/is-property-key](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-property-key)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`196225d`](https://github.com/stdlib-js/stdlib/commit/196225d10e7b4ea9dc2f99d4015c12cebf6648ac) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-prototype-of-v0.1.0">

#### [@stdlib/assert/is-prototype-of](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-prototype-of)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-range-error-v0.1.0">

#### [@stdlib/assert/is-range-error](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-range-error)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`757db5e`](https://github.com/stdlib-js/stdlib/commit/757db5e1806c30c389b5f4c6f04f6cf7035d3c97) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-read-only-property-v0.1.0">

#### [@stdlib/assert/is-read-only-property](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-read-only-property)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-read-only-property-in-v0.1.0">

#### [@stdlib/assert/is-read-only-property-in](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-read-only-property-in)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-read-write-property-v0.1.0">

#### [@stdlib/assert/is-read-write-property](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-read-write-property)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-read-write-property-in-v0.1.0">

#### [@stdlib/assert/is-read-write-property-in](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-read-write-property-in)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-readable-property-v0.1.0">

#### [@stdlib/assert/is-readable-property](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-readable-property)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-readable-property-in-v0.1.0">

#### [@stdlib/assert/is-readable-property-in](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-readable-property-in)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-reference-error-v0.1.0">

#### [@stdlib/assert/is-reference-error](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-reference-error)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`757db5e`](https://github.com/stdlib-js/stdlib/commit/757db5e1806c30c389b5f4c6f04f6cf7035d3c97) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-regexp-v0.1.0">

#### [@stdlib/assert/is-regexp](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-regexp)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`757db5e`](https://github.com/stdlib-js/stdlib/commit/757db5e1806c30c389b5f4c6f04f6cf7035d3c97) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-regexp-string-v0.1.0">

#### [@stdlib/assert/is-regexp-string](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-regexp-string)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`757db5e`](https://github.com/stdlib-js/stdlib/commit/757db5e1806c30c389b5f4c6f04f6cf7035d3c97) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-relative-path-v0.1.0">

#### [@stdlib/assert/is-relative-path](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-relative-path)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`757db5e`](https://github.com/stdlib-js/stdlib/commit/757db5e1806c30c389b5f4c6f04f6cf7035d3c97) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-relative-uri-v0.1.0">

#### [@stdlib/assert/is-relative-uri](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-relative-uri)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`757db5e`](https://github.com/stdlib-js/stdlib/commit/757db5e1806c30c389b5f4c6f04f6cf7035d3c97) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`ff35f38`](https://github.com/stdlib-js/stdlib/commit/ff35f3846e467adce5c8244342a04e2fd4a2ac84) - make CLI scripts executable [(#1111)](https://github.com/stdlib-js/stdlib/pull/1111)

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-safe-integer-v0.1.0">

#### [@stdlib/assert/is-safe-integer](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-safe-integer)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`815ed35`](https://github.com/stdlib-js/stdlib/commit/815ed35a90f09f95b12287902c747fbb519a3aa5) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-safe-integer-array-v0.1.0">

#### [@stdlib/assert/is-safe-integer-array](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-safe-integer-array)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`815ed35`](https://github.com/stdlib-js/stdlib/commit/815ed35a90f09f95b12287902c747fbb519a3aa5) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-same-native-class-v0.1.0">

#### [@stdlib/assert/is-same-native-class](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-same-native-class)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-same-type-v0.1.0">

#### [@stdlib/assert/is-same-type](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-same-type)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-same-value-v0.1.0">

#### [@stdlib/assert/is-same-value](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-same-value)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-same-value-zero-v0.1.0">

#### [@stdlib/assert/is-same-value-zero](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-same-value-zero)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-semver-v0.1.0">

#### [@stdlib/assert/is-semver](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-semver)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`815ed35`](https://github.com/stdlib-js/stdlib/commit/815ed35a90f09f95b12287902c747fbb519a3aa5) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`ff35f38`](https://github.com/stdlib-js/stdlib/commit/ff35f3846e467adce5c8244342a04e2fd4a2ac84) - make CLI scripts executable [(#1111)](https://github.com/stdlib-js/stdlib/pull/1111)

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-sharedarraybuffer-v0.1.0">

#### [@stdlib/assert/is-sharedarraybuffer](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-sharedarraybuffer)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`815ed35`](https://github.com/stdlib-js/stdlib/commit/815ed35a90f09f95b12287902c747fbb519a3aa5) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-skew-centrosymmetric-matrix-v0.1.0">

#### [@stdlib/assert/is-skew-centrosymmetric-matrix](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-skew-centrosymmetric-matrix)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-skew-persymmetric-matrix-v0.1.0">

#### [@stdlib/assert/is-skew-persymmetric-matrix](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-skew-persymmetric-matrix)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-skew-symmetric-matrix-v0.1.0">

#### [@stdlib/assert/is-skew-symmetric-matrix](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-skew-symmetric-matrix)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-slice-v0.1.0">

#### [@stdlib/assert/is-slice](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-slice)

<details>

<section class="features">

##### Features

-   [`f35ebd9`](https://github.com/stdlib-js/stdlib/commit/f35ebd921cbecda6a6e770e93b1fec7348987c6c) - add `assert/is-slice`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-snakecase-v0.1.0">

#### [@stdlib/assert/is-snakecase](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-snakecase)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`815ed35`](https://github.com/stdlib-js/stdlib/commit/815ed35a90f09f95b12287902c747fbb519a3aa5) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`ff35f38`](https://github.com/stdlib-js/stdlib/commit/ff35f3846e467adce5c8244342a04e2fd4a2ac84) - make CLI scripts executable [(#1111)](https://github.com/stdlib-js/stdlib/pull/1111)

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-square-matrix-v0.1.0">

#### [@stdlib/assert/is-square-matrix](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-square-matrix)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-square-number-v0.1.0">

#### [@stdlib/assert/is-square-number](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-square-number)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-square-triangular-number-v0.1.0">

#### [@stdlib/assert/is-square-triangular-number](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-square-triangular-number)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`815ed35`](https://github.com/stdlib-js/stdlib/commit/815ed35a90f09f95b12287902c747fbb519a3aa5) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-startcase-v0.1.0">

#### [@stdlib/assert/is-startcase](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-startcase)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`815ed35`](https://github.com/stdlib-js/stdlib/commit/815ed35a90f09f95b12287902c747fbb519a3aa5) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`ff35f38`](https://github.com/stdlib-js/stdlib/commit/ff35f3846e467adce5c8244342a04e2fd4a2ac84) - make CLI scripts executable [(#1111)](https://github.com/stdlib-js/stdlib/pull/1111)

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-strict-equal-v0.1.0">

#### [@stdlib/assert/is-strict-equal](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-strict-equal)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-string-v0.1.0">

#### [@stdlib/assert/is-string](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-string)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`815ed35`](https://github.com/stdlib-js/stdlib/commit/815ed35a90f09f95b12287902c747fbb519a3aa5) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-string-array-v0.1.0">

#### [@stdlib/assert/is-string-array](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-string-array)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`815ed35`](https://github.com/stdlib-js/stdlib/commit/815ed35a90f09f95b12287902c747fbb519a3aa5) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-symbol-v0.1.0">

#### [@stdlib/assert/is-symbol](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-symbol)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`815ed35`](https://github.com/stdlib-js/stdlib/commit/815ed35a90f09f95b12287902c747fbb519a3aa5) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-symbol-array-v0.1.0">

#### [@stdlib/assert/is-symbol-array](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-symbol-array)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`815ed35`](https://github.com/stdlib-js/stdlib/commit/815ed35a90f09f95b12287902c747fbb519a3aa5) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-symmetric-matrix-v0.1.0">

#### [@stdlib/assert/is-symmetric-matrix](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-symmetric-matrix)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-syntax-error-v0.1.0">

#### [@stdlib/assert/is-syntax-error](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-syntax-error)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`815ed35`](https://github.com/stdlib-js/stdlib/commit/815ed35a90f09f95b12287902c747fbb519a3aa5) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-touch-device-v0.1.0">

#### [@stdlib/assert/is-touch-device](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-touch-device)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-triangular-number-v0.1.0">

#### [@stdlib/assert/is-triangular-number](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-triangular-number)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`d88aba7`](https://github.com/stdlib-js/stdlib/commit/d88aba7b024258e4f494b43d2cf8236d6965cc0b) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-truthy-v0.1.0">

#### [@stdlib/assert/is-truthy](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-truthy)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-truthy-array-v0.1.0">

#### [@stdlib/assert/is-truthy-array](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-truthy-array)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`d88aba7`](https://github.com/stdlib-js/stdlib/commit/d88aba7b024258e4f494b43d2cf8236d6965cc0b) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-type-error-v0.1.0">

#### [@stdlib/assert/is-type-error](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-type-error)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`d88aba7`](https://github.com/stdlib-js/stdlib/commit/d88aba7b024258e4f494b43d2cf8236d6965cc0b) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-typed-array-v0.1.0">

#### [@stdlib/assert/is-typed-array](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-typed-array)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`d88aba7`](https://github.com/stdlib-js/stdlib/commit/d88aba7b024258e4f494b43d2cf8236d6965cc0b) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-typed-array-length-v0.1.0">

#### [@stdlib/assert/is-typed-array-length](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-typed-array-length)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`d88aba7`](https://github.com/stdlib-js/stdlib/commit/d88aba7b024258e4f494b43d2cf8236d6965cc0b) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-typed-array-like-v0.1.0">

#### [@stdlib/assert/is-typed-array-like](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-typed-array-like)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-uint16array-v0.1.0">

#### [@stdlib/assert/is-uint16array](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-uint16array)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`e2c4238`](https://github.com/stdlib-js/stdlib/commit/e2c4238d759b782cabc8c0e2c98274bd364e5241) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-uint32array-v0.1.0">

#### [@stdlib/assert/is-uint32array](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-uint32array)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`e2c4238`](https://github.com/stdlib-js/stdlib/commit/e2c4238d759b782cabc8c0e2c98274bd364e5241) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-uint8array-v0.1.0">

#### [@stdlib/assert/is-uint8array](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-uint8array)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`e2c4238`](https://github.com/stdlib-js/stdlib/commit/e2c4238d759b782cabc8c0e2c98274bd364e5241) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-uint8clampedarray-v0.1.0">

#### [@stdlib/assert/is-uint8clampedarray](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-uint8clampedarray)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`e2c4238`](https://github.com/stdlib-js/stdlib/commit/e2c4238d759b782cabc8c0e2c98274bd364e5241) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-unc-path-v0.1.0">

#### [@stdlib/assert/is-unc-path](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-unc-path)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`e2c4238`](https://github.com/stdlib-js/stdlib/commit/e2c4238d759b782cabc8c0e2c98274bd364e5241) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-undefined-v0.1.0">

#### [@stdlib/assert/is-undefined](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-undefined)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`e2c4238`](https://github.com/stdlib-js/stdlib/commit/e2c4238d759b782cabc8c0e2c98274bd364e5241) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-undefined-or-null-v0.1.0">

#### [@stdlib/assert/is-undefined-or-null](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-undefined-or-null)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`e2c4238`](https://github.com/stdlib-js/stdlib/commit/e2c4238d759b782cabc8c0e2c98274bd364e5241) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-unity-probability-array-v0.1.0">

#### [@stdlib/assert/is-unity-probability-array](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-unity-probability-array)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`e2c4238`](https://github.com/stdlib-js/stdlib/commit/e2c4238d759b782cabc8c0e2c98274bd364e5241) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-uppercase-v0.1.0">

#### [@stdlib/assert/is-uppercase](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-uppercase)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`e2c4238`](https://github.com/stdlib-js/stdlib/commit/e2c4238d759b782cabc8c0e2c98274bd364e5241) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-uri-v0.1.0">

#### [@stdlib/assert/is-uri](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-uri)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`e2c4238`](https://github.com/stdlib-js/stdlib/commit/e2c4238d759b782cabc8c0e2c98274bd364e5241) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-uri-error-v0.1.0">

#### [@stdlib/assert/is-uri-error](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-uri-error)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`e2c4238`](https://github.com/stdlib-js/stdlib/commit/e2c4238d759b782cabc8c0e2c98274bd364e5241) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-vector-like-v0.1.0">

#### [@stdlib/assert/is-vector-like](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-vector-like)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-web-worker-v0.1.0">

#### [@stdlib/assert/is-web-worker](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-web-worker)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-whitespace-v0.1.0">

#### [@stdlib/assert/is-whitespace](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-whitespace)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version
-   [`f3f86f0`](https://github.com/stdlib-js/stdlib/commit/f3f86f08470dcb1187e3c45890ada58c59002c0c) - use type predicates for narrowing

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`ff35f38`](https://github.com/stdlib-js/stdlib/commit/ff35f3846e467adce5c8244342a04e2fd4a2ac84) - make CLI scripts executable [(#1111)](https://github.com/stdlib-js/stdlib/pull/1111)

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-windows-v0.1.0">

#### [@stdlib/assert/is-windows](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-windows)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-writable-property-v0.1.0">

#### [@stdlib/assert/is-writable-property](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-writable-property)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-writable-property-in-v0.1.0">

#### [@stdlib/assert/is-writable-property-in](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-writable-property-in)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-write-only-property-v0.1.0">

#### [@stdlib/assert/is-write-only-property](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-write-only-property)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-is-write-only-property-in-v0.1.0">

#### [@stdlib/assert/is-write-only-property-in](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-write-only-property-in)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-napi-v0.1.0">

#### [@stdlib/assert/napi](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/napi)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-napi-equal-typedarray-types-v0.1.0">

#### [@stdlib/assert/napi/equal-typedarray-types](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/napi/equal-typedarray-types)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-napi-equal-types-v0.1.0">

#### [@stdlib/assert/napi/equal-types](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/napi/equal-types)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-napi-is-type-v0.1.0">

#### [@stdlib/assert/napi/is-type](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/napi/is-type)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-napi-is-typedarray-v0.1.0">

#### [@stdlib/assert/napi/is-typedarray](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/napi/is-typedarray)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-napi-status-ok-v0.1.0">

#### [@stdlib/assert/napi/status-ok](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/napi/status-ok)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-tools-v0.1.0">

#### [@stdlib/assert/tools](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/tools)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-tools-array-function-v0.1.0">

#### [@stdlib/assert/tools/array-function](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/tools/array-function)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-tools-array-like-function-v0.1.0">

#### [@stdlib/assert/tools/array-like-function](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/tools/array-like-function)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="assert-tools-typed-array-function-v0.1.0">

#### [@stdlib/assert/tools/typed-array-function](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/tools/typed-array-function)

<details>

<section class="features">

##### Features

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

</section>

<!-- /.packages -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

<section class="contributors">

### Contributors

A total of 2 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

<section class="commits">

### Commits

<details>

-   [`d73bbf4`](https://github.com/stdlib-js/stdlib/commit/d73bbf43d222f935085f8ecf7526e5f57835f74e) - **build:** replace lint directives _(by Philipp Burckhardt)_
-   [`df3c9b3`](https://github.com/stdlib-js/stdlib/commit/df3c9b368d8a3dd7dd38f8768deb53c2a780c055) - **build:** remove tslint directives _(by Philipp Burckhardt)_
-   [`453dd85`](https://github.com/stdlib-js/stdlib/commit/453dd85b5dd186d2b4d458256fe84906e1503fe2) - **build:** remove tslint directives _(by Philipp Burckhardt)_
-   [`ff35f38`](https://github.com/stdlib-js/stdlib/commit/ff35f3846e467adce5c8244342a04e2fd4a2ac84) - **fix:** make CLI scripts executable [(#1111)](https://github.com/stdlib-js/stdlib/pull/1111) _(by stdlib-bot, Philipp Burckhardt)_
-   [`4f2310d`](https://github.com/stdlib-js/stdlib/commit/4f2310de3494fe36f4b74db309593f63e9d24dcc) - **docs:** update namespace table of contents  [(#1102)](https://github.com/stdlib-js/stdlib/pull/1102 ) _(by stdlib-bot)_
-   [`e18b248`](https://github.com/stdlib-js/stdlib/commit/e18b248464425863019a841795a7e5fc7d01d0ea) - **feat:** update namespace TypeScript declarations [(#1100)](https://github.com/stdlib-js/stdlib/pull/1100) _(by stdlib-bot, Athan Reines)_
-   [`5b2a031`](https://github.com/stdlib-js/stdlib/commit/5b2a0316d4dfddb30848a62727f8e75586786b41) - **feat:** add `isMultiSlice` to namespace _(by Athan Reines)_
-   [`527ed19`](https://github.com/stdlib-js/stdlib/commit/527ed198cb76ca8623b388d049d2006bb03cd2e7) - **feat:** add `assert/is-multi-slice` _(by Athan Reines)_
-   [`59cbf7d`](https://github.com/stdlib-js/stdlib/commit/59cbf7d9b0cbae52b9ed33dcad0140a974591158) - **feat:** add `isSlice` to namespace _(by Athan Reines)_
-   [`f35ebd9`](https://github.com/stdlib-js/stdlib/commit/f35ebd921cbecda6a6e770e93b1fec7348987c6c) - **feat:** add `assert/is-slice` _(by Athan Reines)_
-   [`5200ce2`](https://github.com/stdlib-js/stdlib/commit/5200ce2447b32d7a8d351daa5b1868194878d7be) - **feat:** update minimum TypeScript version _(by Philipp Burckhardt)_
-   [`aad0c02`](https://github.com/stdlib-js/stdlib/commit/aad0c02e72463e7421eddf4c055e44d9b306f380) - **fix:** update import path for `Collection` type definition _(by Athan Reines)_
-   [`32a2827`](https://github.com/stdlib-js/stdlib/commit/32a282799ffd272d2a0554e81755a14923564e51) - **fix:** update import paths for complex type defs _(by Athan Reines)_
-   [`1f51c66`](https://github.com/stdlib-js/stdlib/commit/1f51c66e77ea894ea752a1d6901287792b94fd28) - **build:** update table formatting _(by Philipp Burckhardt)_
-   [`b4dbeae`](https://github.com/stdlib-js/stdlib/commit/b4dbeaebb752c2494a156cd6f92d7055bea024ec) - **fix:** set correct package names _(by Philipp Burckhardt)_
-   [`3f60609`](https://github.com/stdlib-js/stdlib/commit/3f6060905121938ee8c8a7d9c6ab93d5d82ed2be) - **test:** use strictEqual checks _(by Philipp Burckhardt)_
-   [`421e1ae`](https://github.com/stdlib-js/stdlib/commit/421e1ae86e3d7fb31d156af9cd522303a6645220) - **feat:** update namespace TypeScript declarations [(#1044)](https://github.com/stdlib-js/stdlib/pull/1044) _(by stdlib-bot, Athan Reines)_
-   [`8038d42`](https://github.com/stdlib-js/stdlib/commit/8038d42ebb7db4e55d35c3760e4b3409d9d13dce) - **style:** fix spacing _(by Athan Reines)_
-   [`3faabda`](https://github.com/stdlib-js/stdlib/commit/3faabda3a0e780c45af544396f78960a8f6a3c4c) - **feat:** use type predicates for narrowing _(by Philipp Burckhardt)_
-   [`196225d`](https://github.com/stdlib-js/stdlib/commit/196225d10e7b4ea9dc2f99d4015c12cebf6648ac) - **feat:** use type predicates for narrowing _(by Philipp Burckhardt)_
-   [`757db5e`](https://github.com/stdlib-js/stdlib/commit/757db5e1806c30c389b5f4c6f04f6cf7035d3c97) - **feat:** use type predicates for narrowing _(by Philipp Burckhardt)_
-   [`815ed35`](https://github.com/stdlib-js/stdlib/commit/815ed35a90f09f95b12287902c747fbb519a3aa5) - **feat:** use type predicates for narrowing _(by Philipp Burckhardt)_
-   [`d88aba7`](https://github.com/stdlib-js/stdlib/commit/d88aba7b024258e4f494b43d2cf8236d6965cc0b) - **feat:** use type predicates for narrowing _(by Philipp Burckhardt)_
-   [`e2c4238`](https://github.com/stdlib-js/stdlib/commit/e2c4238d759b782cabc8c0e2c98274bd364e5241) - **feat:** use type predicates for narrowing _(by Philipp Burckhardt)_
-   [`f3f86f0`](https://github.com/stdlib-js/stdlib/commit/f3f86f08470dcb1187e3c45890ada58c59002c0c) - **feat:** use type predicates for narrowing _(by Philipp Burckhardt)_
-   [`107f54d`](https://github.com/stdlib-js/stdlib/commit/107f54d78bb5dfa53ced17b0e6a8dd996f946783) - **feat:** use type predicates for narrowing _(by Philipp Burckhardt)_
-   [`fc5b401`](https://github.com/stdlib-js/stdlib/commit/fc5b401ff99a4612f27f078fdb4d3574b3463a1f) - **feat:** use type predicates for narrowing _(by Philipp Burckhardt)_
-   [`886d7f9`](https://github.com/stdlib-js/stdlib/commit/886d7f9cd3bb190f49e3d08c20f5b817b4b249f4) - **feat:** use type predicates for narrowing _(by Philipp Burckhardt)_
-   [`3aba9d6`](https://github.com/stdlib-js/stdlib/commit/3aba9d694251469838128853c6f11399d769dee8) - **feat:** use type predicates for narrowing _(by Philipp Burckhardt)_
-   [`b14cb4a`](https://github.com/stdlib-js/stdlib/commit/b14cb4ad8d17b0c0a2994412e386c35569965293) - **feat:** use type predicates for narrowing _(by Philipp Burckhardt)_
-   [`fa8b441`](https://github.com/stdlib-js/stdlib/commit/fa8b441f153cf21d10f49cea43d2f7cbe35fa5e6) - **feat:** use type predicates for narrowing _(by Philipp Burckhardt)_
-   [`dfc4ca9`](https://github.com/stdlib-js/stdlib/commit/dfc4ca9922c4415cc78d1cb7b69e303c5e26d125) - **feat:** use type predicates for narrowing _(by Philipp Burckhardt)_
-   [`9c1c9f8`](https://github.com/stdlib-js/stdlib/commit/9c1c9f823881c9bbe150f8d23a0d2f061e4df672) - **feat:** use type predicates for narrowing _(by Philipp Burckhardt)_
-   [`8c3555f`](https://github.com/stdlib-js/stdlib/commit/8c3555fb953efb7600d5cd2bd7e11072f344e476) - **feat:** use type predicates for narrowing _(by Philipp Burckhardt)_
-   [`0f2e209`](https://github.com/stdlib-js/stdlib/commit/0f2e20930092fbc21ea0591fe68f4484d2dee33e) - **feat:** use type predicates for narrowing _(by Philipp Burckhardt)_
-   [`d42a3f0`](https://github.com/stdlib-js/stdlib/commit/d42a3f011e1ff7b8f25d602a103b206955b44450) - **feat:** use type predicates for narrowing _(by Philipp Burckhardt)_
-   [`581e4be`](https://github.com/stdlib-js/stdlib/commit/581e4be2c0c4d5d93879848cbe5c02c6c9a53e71) - **feat:** use type predicates for narrowing _(by Philipp Burckhardt)_
-   [`6423e41`](https://github.com/stdlib-js/stdlib/commit/6423e41d745c0dedb7f6631cc03146b569a48a10) - **feat:** use type predicates for narrowing _(by Philipp Burckhardt)_
-   [`091a743`](https://github.com/stdlib-js/stdlib/commit/091a74301e438c6411ed34f94c668ec3f42ec339) - **feat:** use type predicates for narrowing _(by Philipp Burckhardt)_
-   [`b121c69`](https://github.com/stdlib-js/stdlib/commit/b121c695c2fd48724feb0ffbc313a532e30966c6) - **feat:** use type predicates for narrowing _(by Philipp Burckhardt)_
-   [`3c153c4`](https://github.com/stdlib-js/stdlib/commit/3c153c4341c58db2fde9b616f1990be964482cf8) - **feat:** use type predicates for narrowing _(by Philipp Burckhardt)_
-   [`16fb143`](https://github.com/stdlib-js/stdlib/commit/16fb143aba60e6e1f8ed9370226d169fdb3256c0) - **docs:** render equations via math code blocks _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

</section>

<!-- /.release -->

<section class="release" id="v0.0.12">

## 0.0.12 (2021-08-23)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.11">

## 0.0.11 (2021-07-10)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.10">

## 0.0.10 (2021-07-07)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.9">

## 0.0.9 (2021-06-28)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.8">

## 0.0.8 (2021-06-16)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.7">

## 0.0.7 (2021-06-15)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.6">

## 0.0.6 (2021-06-13)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.5">

## 0.0.5 (2021-06-12)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.4">

## 0.0.4 (2021-06-12)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.3">

## 0.0.3 (2021-06-10)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.2">

## 0.0.2 (2021-06-10)

No changes reported for this release.

</section>

<!-- /.release -->

