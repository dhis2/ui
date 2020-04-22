# [5.0.0-alpha.7](https://github.com/dhis2/ui/compare/v5.0.0-alpha.6...v5.0.0-alpha.7) (2020-04-22)


### Bug Fixes

* update final-form to fix setstate warning ([1bc62b9](https://github.com/dhis2/ui/commit/1bc62b9dc0d2215fc60f3cdacd2304f7a09730d3))

# [5.0.0-alpha.6](https://github.com/dhis2/ui/compare/v5.0.0-alpha.5...v5.0.0-alpha.6) (2020-04-20)


### Bug Fixes

* **icons:** add missing icon file ([de0a157](https://github.com/dhis2/ui/commit/de0a1578ad70d127a184868f54d53723acedd29c))

# [5.0.0-alpha.5](https://github.com/dhis2/ui/compare/v5.0.0-alpha.4...v5.0.0-alpha.5) (2020-04-16)

### Code Refactoring

* layers and overlay components ([24ead4c](https://github.com/dhis2/ui/commit/24ead4c31a650cfedf3221a5086baf911ea1e544))


### BREAKING CHANGES

* These new components replace the `Backdrop` and the `ScreenCover`, which had a slightly unclear scope and have now been removed.

# [5.0.0-alpha.4](https://github.com/dhis2/ui/compare/v5.0.0-alpha.3...v5.0.0-alpha.4) (2020-04-08)


### Features

* add noticebox component ([357ef6d](https://github.com/dhis2/ui/commit/357ef6d45e739d53cf1cef7933ed121259016f54))

# [5.0.0-alpha.3](https://github.com/dhis2/ui/compare/v5.0.0-alpha.2...v5.0.0-alpha.3) (2020-04-01)


### Code Refactoring

* use string based selection in multi- and single-select ([e3627a4](https://github.com/dhis2/ui/commit/e3627a479577a7bbd3d78e86f5fbf93e2ca57971))


### BREAKING CHANGES

* - SingleSelect selection is now a string instead of an object with a value and label property
- MultiSelect selection is now an array of strings instead of an array of objects with a value and label property

# [5.0.0-alpha.2](https://github.com/dhis2/ui/compare/v5.0.0-alpha.1...v5.0.0-alpha.2) (2020-03-24)


### Code Refactoring

* **core:** add forward refs to base components ([699b194](https://github.com/dhis2/ui/commit/699b1945e83f6551d34137b9a650a580a0918d53))
* move all core components to widgets ([d6f8a7b](https://github.com/dhis2/ui/commit/d6f8a7b0a379e27a4a0a38968efc2514c3938be5))


### BREAKING CHANGES

* **core:** base components can hold a ref.
* All @dhis2/ui-core exports have been migrated to
@dhis2/ui-widgets.

# [5.0.0-alpha.1](https://github.com/dhis2/ui/compare/v4.0.0...v5.0.0-alpha.1) (2020-03-19)


### Bug Fixes

* **root:** update repourl ([7e6eedc](https://github.com/dhis2/ui/commit/7e6eedc9e9048cc98b04a5d25e76b7471249310c))


### Code Refactoring

* **checkboxfield:** move to ui-widgets ([d979d96](https://github.com/dhis2/ui/commit/d979d96010347d7f22fe40b8af126f9901f5230c))
* **fileinputfield:** move to ui-widgets ([6059625](https://github.com/dhis2/ui/commit/6059625a46329858e5cc9180ff837d1f3474c796))
* **fileinputfieldwithlist:** move to ui-widgets ([a512f00](https://github.com/dhis2/ui/commit/a512f007e4716f925502216824ad9a8ac925f2f8))
* **forms:** add suffix 'Control' ([06896ea](https://github.com/dhis2/ui/commit/06896eadc63dc0aaadfd3d06081e224d4eea5fef))
* **inputfield:** move to ui-widgets ([50d9009](https://github.com/dhis2/ui/commit/50d9009b5c6fa5effdbcb67fed985f0a87c1cac0))
* **multiselectfield:** move to ui-widgets ([c3d42ad](https://github.com/dhis2/ui/commit/c3d42ad495eae9858b946dfc8acaa4027febacf7))
* **singleselectfield:** move to ui-widgets ([e09c70c](https://github.com/dhis2/ui/commit/e09c70cb6a15cd28d28f93a2e11f2c68b7033774))
* **switchfield:** move to ui-widgets ([2baa52a](https://github.com/dhis2/ui/commit/2baa52a0048818312d0fd3f6b0591341615d604b))
* **textareafield:** move to ui-widgets ([3ef63da](https://github.com/dhis2/ui/commit/3ef63da69ce5c377a298d9b2af55bac567495e08))
* **togglegroupfield:** migrate to ui-widgets ([db55448](https://github.com/dhis2/ui/commit/db55448e4aa50d98eafe3d21cefd3b89439b66be))
* **ui:** list breaking changes ([7ceddf0](https://github.com/dhis2/ui/commit/7ceddf087562e04f70116a9d6ff696ae416cfd59))


### Features

* **constants:** move and expose the common proptypes ([1bb0f9d](https://github.com/dhis2/ui/commit/1bb0f9d42077bc204923ecd502225c5fa5da3c3a))
* **forms:** integrate @dhis2/ui-forms ([af49144](https://github.com/dhis2/ui/commit/af49144e20c5b01197e01472c6514129d2abce6f))
* **ui:** expose @dhis2/ui-forms through metapackage ([88a3782](https://github.com/dhis2/ui/commit/88a3782db4f337e80079824138f76cc5b5c4a6b1))


### BREAKING CHANGES

* **forms:** Postfix all the @dhis2/ui-forms components with
'Control' to avoid conflicts with the base components in @dhis2/ui-core
and @dhis2/ui-widgets, since all components are now exported in
@dhis2/ui.
* **textareafield:** Import path changes from @dhis2/ui-core to
@dhis2/ui or @dhis2/ui-widgets.
* **switchfield:** Import path for SwichField changes from @dhis2/ui-core
to @dhis2/ui or @dhis2/ui-widgets.
* **singleselectfield:** Import path for SingleSelectField changes from
@dhis2/ui-core to @dhis2/ui or @dhis2/ui-widgets.
* **multiselectfield:** MultiSelectField import path changes from
@dhis2/ui-core to @dhis2/ui-widgets or @dhis2/ui
* **inputfield:** Move InputField from ui-core to ui-widgets, new import
path at @dhis2/ui-widgets or @dhis2/ui.
* **fileinputfieldwithlist:** Move FileInputFieldWithList from ui-core to ui-widgets,
new import from @dhis2/ui-widgets or @dhis2/ui.
* **fileinputfield:** Move FileInputField from ui-core to ui-widgets. New
import path from '@dhis2/ui-widgets' or '@dhis2/ui'.
* **checkboxfield:** CheckboxField has moved from ui-core to ui-widgets.
* **togglegroupfield:** move the ToggleGroupField component from ui-core to
ui-widgets.
* **ui:** Rename the Constrictor component to Box, which is
shorter and thus easier to type. This also expands the capabilities of
Box to make it more Box-like.
* **ui:** Replace SwitchGroupField, RadioGroupField,
CheckboxGroupField with ToggleGroupField.
* **ui:** Replace SwitchGroup, RadioGroup, CheckboxGroup with
ToggleGroup.
* **ui:** The exports: colors, theme, layers, spacers,
spacersNum, and elevations, have been moved from @dhis2/ui-core to
@dhis2/ui-constants for better code reuse.
