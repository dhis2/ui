# [5.0.0-alpha.21](https://github.com/dhis2/ui/compare/v5.0.0-alpha.20...v5.0.0-alpha.21) (2020-05-28)


### Bug Fixes

* correctly select and use user locale and application title text ([1c9d055](https://github.com/dhis2/ui/commit/1c9d055e735f6e32706b91e4f75d8be6e6096860))
* escape regex special chars in search ([2f11c96](https://github.com/dhis2/ui/commit/2f11c96d27398a612ce80beeb52046255d4f8776))

# [5.0.0-alpha.20](https://github.com/dhis2/ui/compare/v5.0.0-alpha.19...v5.0.0-alpha.20) (2020-05-28)


### Code Refactoring

* **transfer:** align with select & monorepo structure ([c15477d](https://github.com/dhis2/ui/commit/c15477dcaa582fc059dab35adfc24a19527b7f0c)), closes [#50](https://github.com/dhis2/ui/issues/50)
* **transfer:** align with select & monorepo structure ([d50f960](https://github.com/dhis2/ui/commit/d50f960a675941d8052bae473003895c837a737a))


### BREAKING CHANGES

* **transfer:** The Transfer component now expects options to be passed in as objects, not as children. Custom components can be provided via the optionComponent prop for all options or via the component property on an individual option.
* **transfer:** The Transfer component now expects strings as selected
values instead of option objects.
* **transfer:** The Transfer component is now part of widgets
* **transfer:** The Transfer component now expects strings as selected
values instead of option objects.
* **transfer:** The Transfer component is now part of `widgets`

# [5.0.0-alpha.19](https://github.com/dhis2/ui/compare/v5.0.0-alpha.18...v5.0.0-alpha.19) (2020-05-26)


### Bug Fixes

* **popover:** fix arrow rotation ([880395b](https://github.com/dhis2/ui/commit/880395b7631a62281b66aced1a7044d70ed6c878))
* fix improper merge resolution ([0daeffb](https://github.com/dhis2/ui/commit/0daeffb88f0e3791352f25945f442a0d6b3624e6))


### Code Refactoring

* rename popover prop ([f7d5c20](https://github.com/dhis2/ui/commit/f7d5c20dd111789fa7230aa0f84eeaf0487df4be))


### BREAKING CHANGES

* The Popover's `onBackdropClick` prop has been renamed to `onClickOutside`

# [5.0.0-alpha.18](https://github.com/dhis2/ui/compare/v5.0.0-alpha.17...v5.0.0-alpha.18) (2020-05-26)


### Code Refactoring

* make menu click-based and reorganise related components ([a8b26a0](https://github.com/dhis2/ui/commit/a8b26a0984f892ec9ea61a2c40bb6226e66903a9))


### BREAKING CHANGES

* Fully overhauled Menu and related components:
- MenuList was renamed to Menu
- Menu was renamed to FlyoutMenu
- The sub-menus now open on click instead of hover
- We have introduced a dedicated `MenuDivider` and `MenuSectionHeader`
- To create sub-menus, you can now add MenuItems directly under a parent MenuItem, no need to wrap them in a Menu/FlyoutMenu anymore

# [5.0.0-alpha.17](https://github.com/dhis2/ui/compare/v5.0.0-alpha.16...v5.0.0-alpha.17) (2020-05-20)


### Bug Fixes

* **select:** debounce menu width measurement ([0e17c59](https://github.com/dhis2/ui/commit/0e17c598e1e82d40c5145e5135007bffe507200f))

# [5.0.0-alpha.16](https://github.com/dhis2/ui/compare/v5.0.0-alpha.15...v5.0.0-alpha.16) (2020-05-20)


### Bug Fixes

* **widgets:** add translated default texts ([c85342d](https://github.com/dhis2/ui/commit/c85342df741a960cd44a8f53a9a250be9e56d7f1))

# [5.0.0-alpha.15](https://github.com/dhis2/ui/compare/v5.0.0-alpha.14...v5.0.0-alpha.15) (2020-05-19)


### Features

* **constants:** export constants as well ([51c2eb0](https://github.com/dhis2/ui/commit/51c2eb0b62fdb222708b8a08c13d1aab0192a2b6))

# [5.0.0-alpha.14](https://github.com/dhis2/ui/compare/v5.0.0-alpha.13...v5.0.0-alpha.14) (2020-04-30)


### Bug Fixes

* **prop-types:** add missing dhis2 prop-types for ui-icons ([c207524](https://github.com/dhis2/ui/commit/c2075240b70c39ccc380d2817b387911a29cebc5))

# [5.0.0-alpha.13](https://github.com/dhis2/ui/compare/v5.0.0-alpha.12...v5.0.0-alpha.13) (2020-04-30)


### Bug Fixes

* **noticebox:** add missing export ([ec2a739](https://github.com/dhis2/ui/commit/ec2a739d19215196b148459f1b00d6d627aa1d10))

# [5.0.0-alpha.12](https://github.com/dhis2/ui/compare/v5.0.0-alpha.11...v5.0.0-alpha.12) (2020-04-30)


### Bug Fixes

* **field:** fix prop-type warning ([d55d049](https://github.com/dhis2/ui/commit/d55d0495e20590820e331d251642e528cea30add))

# [5.0.0-alpha.11](https://github.com/dhis2/ui/compare/v5.0.0-alpha.10...v5.0.0-alpha.11) (2020-04-29)


### Bug Fixes

* **core:** no top margin if no label for field ([a2d0bad](https://github.com/dhis2/ui/commit/a2d0badea9e384d9047dc2f05a2a0705249a4561))


### Code Refactoring

* **core:** move fields to widgets ([3b763fa](https://github.com/dhis2/ui/commit/3b763fa8b3f1d36b8090cf037dd2d4135ca1d56c))
* **core:** reimplement Field ([fbdafb8](https://github.com/dhis2/ui/commit/fbdafb800eb2033ad9b673350243bdc0d49a8f02))
* move to more explicit final-form api ([a76da00](https://github.com/dhis2/ui/commit/a76da00bffed6e1a7fce2a6a29505ae58ea0db52))


### BREAKING CHANGES

* **core:** Relocate all *Field components to @dhis2/ui-widgets.
They can be accessed from `@dhis2/ui` using named exports.
* **core:** Field has been reimplemented to compose a field
control, it now adds the Label, Help, Validation components instead of
being a simple div wrapper, which allows us to avoid the code
duplication in each *Field component.
* **core:** ToggleGroup has been removed. Use a FieldSet for
grouping form controls.

BREKING CHANGE: ToggleGroupField has been renamed to FieldSetField,
which adds the necessary Label, Help, and Validation components to an
entire group of components.
* Field now provides a composition to provide all
necessary things for a *Field component.
* RadioGroup has been deleted.
* CheckboxGroup has been deleted.
* CheckboxGroupControl has been deleted.
* RadioGroupControl has been deleted.

# [5.0.0-alpha.10](https://github.com/dhis2/ui/compare/v5.0.0-alpha.9...v5.0.0-alpha.10) (2020-04-23)


### Code Refactoring

* **forms:** namespace final-form and react-final-form re-exports ([c59e0bb](https://github.com/dhis2/ui/commit/c59e0bb50ddb82a6c79589727a15483b98b45261))


### BREAKING CHANGES

* **forms:** final-form and react-final-form exports are now re-exported under the named exports FinalForm and ReactFinalForm respectively.

# [5.0.0-alpha.9](https://github.com/dhis2/ui/compare/v5.0.0-alpha.8...v5.0.0-alpha.9) (2020-04-23)


### Bug Fixes

* display submit errors ([9f74e89](https://github.com/dhis2/ui/commit/9f74e897f9ee60ae121b05e1442ff356aff9468a))

# [5.0.0-alpha.8](https://github.com/dhis2/ui/compare/v5.0.0-alpha.7...v5.0.0-alpha.8) (2020-04-22)


### Bug Fixes

* update number range validation error to match actual bounds ([646f782](https://github.com/dhis2/ui/commit/646f782e7dbbc6bb2da4340d76ce55c7d5ab25db))

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
