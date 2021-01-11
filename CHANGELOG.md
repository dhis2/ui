## [6.1.2](https://github.com/dhis2/ui/compare/v6.1.1...v6.1.2) (2021-01-11)


### Bug Fixes

* **icons:** add missing prop-types dependency ([fd7a448](https://github.com/dhis2/ui/commit/fd7a4488156be3224369060bc7fe936c4f2c1a25))
* **icons:** add missing react peer dependencies ([a7971fb](https://github.com/dhis2/ui/commit/a7971fb1f5cd115b673765ddd327d2132fc47b50))

## [6.1.1](https://github.com/dhis2/ui/compare/v6.1.0...v6.1.1) (2021-01-11)


### Bug Fixes

* **button:** pass name prop to button element ([c584b21](https://github.com/dhis2/ui/commit/c584b21121940c3095821b601c4cd07e101111f6))

# [6.1.0](https://github.com/dhis2/ui/compare/v6.0.2...v6.1.0) (2021-01-05)


### Features

* **ui-icons:** add visualization type icons in 24px ([1ae3876](https://github.com/dhis2/ui/commit/1ae3876e5e522569bda42cfae8f32a0cbbca416a))

## [6.0.2](https://github.com/dhis2/ui/compare/v6.0.1...v6.0.2) (2020-12-17)


### Bug Fixes

* **npm:** add consistent per-package readme ([e07fc7c](https://github.com/dhis2/ui/commit/e07fc7c76319186f6bd6e13062fb1d6e226d99db))
* **npm:** add homepage field to packages ([7cc5652](https://github.com/dhis2/ui/commit/7cc565245f9253a9eb50f1a80837bacd9d14a9ba))
* **npm:** remove outdated or superseded files ([100d04a](https://github.com/dhis2/ui/commit/100d04aca42e2ba151eb61c7f9d5c0978424e1b5))

## [6.0.1](https://github.com/dhis2/ui/compare/v6.0.0...v6.0.1) (2020-12-15)


### Bug Fixes

* **core:** fix circular dependencies ([#411](https://github.com/dhis2/ui/issues/411)) ([342f114](https://github.com/dhis2/ui/commit/342f1149c1a7905ac414e9f3a5adaeb73d36d117))

# [6.0.0](https://github.com/dhis2/ui/compare/v5.7.8...v6.0.0) (2020-12-10)


### Bug Fixes

* **ui-icons:** change world-16 icon color to black ([10790d3](https://github.com/dhis2/ui/commit/10790d3131477232cebe940bc601cc8e78134fd5))
* **ui-icons:** fix svg fill colors ([6d040fb](https://github.com/dhis2/ui/commit/6d040fbc7b7081f096f74e7e92972e78eb820972))


### Code Refactoring

* **ui-icons:** remove legacy icons ([d39857b](https://github.com/dhis2/ui/commit/d39857b91130b50099c38db91960c50317ac8ca0))


### Features

* **ui-icons:** add new icons ([e1a994e](https://github.com/dhis2/ui/commit/e1a994ed30e3ebbbca97d7a6dafff76e1e77b3ae))


### BREAKING CHANGES

* **ui-icons:** the existing ui-icons have been removed. These were
mostly meant for internal use. The components that have been removed
are: Account, Apps, ArrowDown, ArrowUp, AttachFile, CancelOutline,
Cancel, CheckboxRegular, CheckboxDense, ChevronRight, ChevronLeft,
Close, Email, Empty, Exit, FileUpload, FolderClosed, FolderOpen, Help,
Info, Message, RadioRegular, RadioDense, Settings, Single, Valid,
Warning, Info, Loading, StatusIcon, SwitchRegular and Upload. Please
ensure that you are not depending on these components before upgrading.

## [5.7.8](https://github.com/dhis2/ui/compare/v5.7.7...v5.7.8) (2020-11-27)


### Bug Fixes

* **IntersectionDetector:** use mixed export prop-types style ([6b18d8f](https://github.com/dhis2/ui/commit/6b18d8ffe58ab717f96224b462a45c467ec1b0d7))

## [5.7.7](https://github.com/dhis2/ui/compare/v5.7.6...v5.7.7) (2020-11-18)


### Bug Fixes

* use helpLink from settings end-point ([e2a1ac6](https://github.com/dhis2/ui/commit/e2a1ac6dbbd4b43331896678f0e8ca9e758f6a81))

## [5.7.6](https://github.com/dhis2/ui/compare/v5.7.5...v5.7.6) (2020-11-17)


### Bug Fixes

* **popover:** attach portal to current layer root ([e187ebf](https://github.com/dhis2/ui/commit/e187ebf7ddb9c656822f3ac9c7089e7e380f7573))

## [5.7.5](https://github.com/dhis2/ui/compare/v5.7.4...v5.7.5) (2020-11-17)


### Bug Fixes

* **headerbar:** adjust focus styles for accessibility ([ac85384](https://github.com/dhis2/ui/commit/ac85384f7a75d7d385bb7003837340d7afbc0f4b))
* **headerbar:** allow keyboard focus on apps drawer trigger ([16c847b](https://github.com/dhis2/ui/commit/16c847b89ad61d6982e299ed00d52f13f9b7c2cd))

## [5.7.4](https://github.com/dhis2/ui/compare/v5.7.3...v5.7.4) (2020-11-13)


### Bug Fixes

* cut release to finish jira migration ([ddf3bf4](https://github.com/dhis2/ui/commit/ddf3bf4f376a81cc4bed2cbf34931c60feb8434d))

## [5.7.3](https://github.com/dhis2/ui/compare/v5.7.2...v5.7.3) (2020-10-29)


### Bug Fixes

* **split-button:** adjust test and add demo story ([3b36404](https://github.com/dhis2/ui/commit/3b364048a6eb70a0eccb8bae36103d32258e7d06))
* **split-button:** stop showing icon in right button ([ec34e40](https://github.com/dhis2/ui/commit/ec34e404287b3a4ab2c24d400edae1404d70a04a))

## [5.7.2](https://github.com/dhis2/ui/compare/v5.7.1...v5.7.2) (2020-09-29)


### Bug Fixes

* **alertbar:** skip init on component update ([a6171a4](https://github.com/dhis2/ui/commit/a6171a4c42e6b0b27646c9d41440a5ab457cc69c))

## [5.7.1](https://github.com/dhis2/ui/compare/v5.7.0...v5.7.1) (2020-09-28)


### Bug Fixes

* **button:** adjust icon button sizes ([d811515](https://github.com/dhis2/ui/commit/d811515f63a580a3702f449b489e1e722cfcf33b))

# [5.7.0](https://github.com/dhis2/ui/compare/v5.6.2...v5.7.0) (2020-09-24)


### Features

* **orgunittree:** sort org units alphabetically ([1273d76](https://github.com/dhis2/ui/commit/1273d76e69e0cb12dd26c36980d1de26aeb0356c))
* **orgunittree:** sort org units alphabetically ([36c0369](https://github.com/dhis2/ui/commit/36c03698f38bc18b6acffb5c447e108d1e384fdb))

## [5.6.2](https://github.com/dhis2/ui/compare/v5.6.1...v5.6.2) (2020-09-23)


### Bug Fixes

* **input field ff:** forward type property of Field component ([a90ae09](https://github.com/dhis2/ui/commit/a90ae099306e6801d99f799ed5f15924dd7d97ae))
* **input field ff:** forward type property of Field component ([855e93c](https://github.com/dhis2/ui/commit/855e93c94609831047812b176d4227925a01bf75))

## [5.6.1](https://github.com/dhis2/ui/compare/v5.6.0...v5.6.1) (2020-09-21)


### Bug Fixes

* **menu:** stop using child's dense prop to set value of hideDivider ([162924d](https://github.com/dhis2/ui/commit/162924db1e41ee3db10263c8d16dcabf8fda39df))

# [5.6.0](https://github.com/dhis2/ui/compare/v5.5.11...v5.6.0) (2020-09-17)


### Features

* introduce pagination component with unit-tests, docs and demo ([d309081](https://github.com/dhis2/ui/commit/d30908113b80719d7f3a7603c20c59e811484163))

## [5.5.11](https://github.com/dhis2/ui/compare/v5.5.10...v5.5.11) (2020-09-17)


### Bug Fixes

* use > as ns separator for translation with : ([f52499d](https://github.com/dhis2/ui/commit/f52499dc0fbca8d612be72251087e2b2ae4639ac))

## [5.5.10](https://github.com/dhis2/ui/compare/v5.5.9...v5.5.10) (2020-09-17)


### Bug Fixes

* **button:** adjust disabled styles ([0001fd0](https://github.com/dhis2/ui/commit/0001fd002cf7fde3a9a7625c224d61f0d1064126))

## [5.5.9](https://github.com/dhis2/ui/compare/v5.5.8...v5.5.9) (2020-09-16)


### Bug Fixes

* remove name property for select field labels ([b993e27](https://github.com/dhis2/ui/commit/b993e27a5733afdde29d9bce131addfeb8603574))

## [5.5.8](https://github.com/dhis2/ui/compare/v5.5.7...v5.5.8) (2020-09-16)


### Bug Fixes

* **intersection detector:** remove observer state variabe and condition ([3fc4637](https://github.com/dhis2/ui/commit/3fc4637029da277eef0e8d7049f64ba44f73aa85))
* **transfer:** make inifinite loading work when selecting options ([#257](https://github.com/dhis2/ui/issues/257)) ([04f0884](https://github.com/dhis2/ui/commit/04f0884dff80c35230f57d7a4c870aae5c68fe34))

## [5.5.7](https://github.com/dhis2/ui/compare/v5.5.6...v5.5.7) (2020-09-16)


### Bug Fixes

* use white background color for textarea instead of transparent ([e8c8f9d](https://github.com/dhis2/ui/commit/e8c8f9d766135d34cddea7fad5dd08c6dbc5418f))

## [5.5.6](https://github.com/dhis2/ui/compare/v5.5.5...v5.5.6) (2020-09-15)


### Bug Fixes

* add background to transfer option containers ([a0fa81f](https://github.com/dhis2/ui/commit/a0fa81fe8c6c9d743bfce27b0c0a07d7ed62c093))

## [5.5.5](https://github.com/dhis2/ui/compare/v5.5.4...v5.5.5) (2020-09-07)


### Bug Fixes

* **checkbox:** set label position to relative ([6f48565](https://github.com/dhis2/ui/commit/6f4856525e382aea0b1963f848ae5364ae811e50))

## [5.5.4](https://github.com/dhis2/ui/compare/v5.5.3...v5.5.4) (2020-09-07)


### Bug Fixes

* stop using css transform for centering modal and centered-content ([2b326d0](https://github.com/dhis2/ui/commit/2b326d09c82db78a5abc5341c73fecfebf60e8b2))

## [5.5.3](https://github.com/dhis2/ui/compare/v5.5.2...v5.5.3) (2020-08-31)


### Bug Fixes

* **menu-item:** make sure onClick is undefined when disabled ([1bcd1f8](https://github.com/dhis2/ui/commit/1bcd1f8117cf2afb928bc50984f8611f701f5d65))

## [5.5.2](https://github.com/dhis2/ui/compare/v5.5.1...v5.5.2) (2020-08-24)


### Bug Fixes

* **radio:** no margin if no label ([5cae414](https://github.com/dhis2/ui/commit/5cae414c8381ddf5fba260803fabb05e43952acc))

## [5.5.1](https://github.com/dhis2/ui/compare/v5.5.0...v5.5.1) (2020-08-20)


### Bug Fixes

* **transfer:** pass correct "selected" value to renderOption call ([96c19db](https://github.com/dhis2/ui/commit/96c19dbedbec8b468fb832157c298ff3339f737d))
* **transfer:** pass correct selected value to renderOption ([5cc0242](https://github.com/dhis2/ui/commit/5cc0242d952807ffee8d4fa288c821b82d604551))

# [5.5.0](https://github.com/dhis2/ui/compare/v5.4.2...v5.5.0) (2020-08-14)


### Features

* **transfer:** add loading props ([ce6fa84](https://github.com/dhis2/ui/commit/ce6fa8465f5e7763a1a99846246f754d6ed5fb1e))
* **transfer:** add onSourceEndReached & onPickedEndReached callbacks ([2a51e79](https://github.com/dhis2/ui/commit/2a51e79f147b0355531dae8a2d1c6c3cc1dfd74f))
* **transfer:** add requested improvements ([5ccddf3](https://github.com/dhis2/ui/commit/5ccddf3bf816b9c23d37d45ae37b33bf75c6d7a5))
* **transfer:** allow filtering the picked options ([479c091](https://github.com/dhis2/ui/commit/479c091652c8378476d758683dddd68dedc9ce15))

## [5.4.2](https://github.com/dhis2/ui/compare/v5.4.1...v5.4.2) (2020-08-14)


### Bug Fixes

* **radio:** position: relative on label to fix modal jumps ([c8a2671](https://github.com/dhis2/ui/commit/c8a26712e5d703a64fc10c6a806d7fdbd3da74f1))

## [5.4.1](https://github.com/dhis2/ui/compare/v5.4.0...v5.4.1) (2020-08-13)


### Bug Fixes

* **button:** add disabled style for toggled button ([626f88d](https://github.com/dhis2/ui/commit/626f88dc9e1d20e0cca23ea6df930bd8c71b80cc))
* **button:** minor style changes for toggled-button ([f2542a1](https://github.com/dhis2/ui/commit/f2542a1ef8aa302ecaff33d7e27730c732e46419))

# [5.4.0](https://github.com/dhis2/ui/compare/v5.3.3...v5.4.0) (2020-08-12)


### Features

* **togglebutton:** add toggled as button prop ([cf79513](https://github.com/dhis2/ui/commit/cf79513017614fd4717c6a3f4249dcd6fb4ed3e7))

## [5.3.3](https://github.com/dhis2/ui/compare/v5.3.2...v5.3.3) (2020-08-11)


### Bug Fixes

* move internal and singleton dependencies to peerDependencies ([7e8a827](https://github.com/dhis2/ui/commit/7e8a827d6ad0de7d810e4e643fa6f3a6f801e540))

## [5.3.2](https://github.com/dhis2/ui/compare/v5.3.1...v5.3.2) (2020-08-11)


### Bug Fixes

* remove margin of first child conditionally for correct alignment ([d212ced](https://github.com/dhis2/ui/commit/d212ced73920062a06c7b43f91b9589549239387))
* **button strip:** allow everything as children ([db6a725](https://github.com/dhis2/ui/commit/db6a7259168cd858cc801223aa47951f947ea6df))
* **button strip:** ensure spacing by wrapping children with div ([82532f2](https://github.com/dhis2/ui/commit/82532f2f384153f2f69b972bf7e6fc918ce80445))
* **button strip:** remove margin of first child for correct alignment ([a2b5c2e](https://github.com/dhis2/ui/commit/a2b5c2e18917021ff485c4f6cc4145af79759a18))

## [5.3.1](https://github.com/dhis2/ui/compare/v5.3.0...v5.3.1) (2020-08-10)


### Bug Fixes

* **button:** reduce small button icon only padding ([92d7058](https://github.com/dhis2/ui/commit/92d70588d3274271f6169d6da1356d69e0e0a228))

# [5.3.0](https://github.com/dhis2/ui/compare/v5.2.0...v5.3.0) (2020-07-28)


### Features

* **intersectiondetector:** add component ([4d96be1](https://github.com/dhis2/ui/commit/4d96be19a9330dc403af1cb65615f2aa55c6b7c0))

# [5.2.0](https://github.com/dhis2/ui/compare/v5.1.3...v5.2.0) (2020-07-23)


### Features

* **table:** add alternateRowBgColor prop (default: true) (TECH-416) ([c33168f](https://github.com/dhis2/ui/commit/c33168fd90f1e8967bb194e931eed094f824eb5a))
* **table:** add alternateRowBgColor prop (default: true) (TECH-416) ([fec8008](https://github.com/dhis2/ui/commit/fec8008029f228dd7b1b4ae9cd0c5417e7bc28e8))

## [5.1.3](https://github.com/dhis2/ui/compare/v5.1.2...v5.1.3) (2020-07-23)


### Bug Fixes

* **button:** fix padding of icon only button & don't use ButtonBase ([39564cc](https://github.com/dhis2/ui/commit/39564cc5d42235598e57b7bc0dd0a1657d8fec06))
* **button:** use correct padding when displaying only the icon ([a2445b9](https://github.com/dhis2/ui/commit/a2445b90646f9b0737636d87b59347c4b8ca45f9))

## [5.1.2](https://github.com/dhis2/ui/compare/v5.1.1...v5.1.2) (2020-07-10)


### Bug Fixes

* add prop selected to renderOption ([4a61df0](https://github.com/dhis2/ui/commit/4a61df0f8c752e5f07ad0a2dc57d2c8369aff2ef))

## [5.1.1](https://github.com/dhis2/ui/compare/v5.1.0...v5.1.1) (2020-07-10)


### Bug Fixes

* add prop placeholder to Filter and filterPlaceholder to Transfer ([388b556](https://github.com/dhis2/ui/commit/388b55686ff91e6c132b8f06e2fa86fcdbf9ef00))
* add prop rightHeader to Transfer ([f9a1042](https://github.com/dhis2/ui/commit/f9a1042fb495effa3444792fc1db9f0b43f73bbb))

# [5.1.0](https://github.com/dhis2/ui/compare/v5.0.7...v5.1.0) (2020-07-09)


### Features

* **organisation-unit-tree:** include displayName in onChange payload ([23f0eed](https://github.com/dhis2/ui/commit/23f0eedc17d9f28b8694b670a25271f9a917f881))

## [5.0.7](https://github.com/dhis2/ui/compare/v5.0.6...v5.0.7) (2020-07-02)


### Bug Fixes

* **switch:** use input value for value instead of checked prop ([65c6406](https://github.com/dhis2/ui/commit/65c64067e5ddef49f22f4c08ed898c0daf9e3482))

## [5.0.6](https://github.com/dhis2/ui/compare/v5.0.5...v5.0.6) (2020-07-02)


### Bug Fixes

* **switchfield:** use correct prop-type for value prop ([05576c2](https://github.com/dhis2/ui/commit/05576c2a4c9d96eaefac90fab5de7ed8912dad8e))

## [5.0.5](https://github.com/dhis2/ui/compare/v5.0.4...v5.0.5) (2020-06-24)


### Bug Fixes

* **box:** add missing semicolon to fix styles not being applied ([2ea7ca0](https://github.com/dhis2/ui/commit/2ea7ca0a07fcb8ccbff7316c0c6169e9e29e53f7))

## [5.0.4](https://github.com/dhis2/ui/compare/v5.0.3...v5.0.4) (2020-06-23)


### Bug Fixes

* **select:** check if select has been mounted before accessing ref ([d1d70cb](https://github.com/dhis2/ui/commit/d1d70cba311729b52ae2bf13b49bf2882156b4f4))

## [5.0.3](https://github.com/dhis2/ui/compare/v5.0.2...v5.0.3) (2020-06-10)


### Bug Fixes

* **modal:** add max height and width so Modal become scrollable ([61bf5b8](https://github.com/dhis2/ui/commit/61bf5b8457bdb4d4647b4d0c74aa75a78deb54ff))

## [5.0.2](https://github.com/dhis2/ui/compare/v5.0.1...v5.0.2) (2020-06-09)


### Bug Fixes

* **popper:** use correct sharedPropType name for reference prop ([262ac0a](https://github.com/dhis2/ui/commit/262ac0aa62bd134b8346250ade027ceba1bc9982))

## [5.0.1](https://github.com/dhis2/ui/compare/v5.0.0...v5.0.1) (2020-06-03)


### Bug Fixes

* **headerbar:** hide app links from unprivileged users ([7d12f40](https://github.com/dhis2/ui/commit/7d12f40aad13e28768befadb63939d10334eb6c2))
* **headerbar:** hide app links from unprivileged users ([4cf5ed8](https://github.com/dhis2/ui/commit/4cf5ed8f74fee26aacbc3f2d3d4af7fde8649416))
* **headerbar:** prevent error if authorities is not an array ([ecd1ba4](https://github.com/dhis2/ui/commit/ecd1ba4201cf70f767a87af2772d13b36349a0ef))

# [5.0.0](https://github.com/dhis2/ui/compare/v4.0.0...v5.0.0) (2020-05-28)


### Bug Fixes

* **headerbar:** correctly select and use user locale and application title text ([1c9d055](https://github.com/dhis2/ui/commit/1c9d055e735f6e32706b91e4f75d8be6e6096860))
* **headerbar:** escape regex special chars in search ([2f11c96](https://github.com/dhis2/ui/commit/2f11c96d27398a612ce80beeb52046255d4f8776))
* **field:** fix prop-type warning ([d55d049](https://github.com/dhis2/ui/commit/d55d0495e20590820e331d251642e528cea30add))
* **icons:** add missing icon file ([de0a157](https://github.com/dhis2/ui/commit/de0a1578ad70d127a184868f54d53723acedd29c))
* **popover:** fix arrow rotation ([880395b](https://github.com/dhis2/ui/commit/880395b7631a62281b66aced1a7044d70ed6c878))
* **field:** no top margin if no label for field ([a2d0bad](https://github.com/dhis2/ui/commit/a2d0badea9e384d9047dc2f05a2a0705249a4561))
* **noticebox:** add missing export ([ec2a739](https://github.com/dhis2/ui/commit/ec2a739d19215196b148459f1b00d6d627aa1d10))
* **prop-types:** add missing dhis2 prop-types for ui-icons ([c207524](https://github.com/dhis2/ui/commit/c2075240b70c39ccc380d2817b387911a29cebc5))
* **select:** debounce menu width measurement ([0e17c59](https://github.com/dhis2/ui/commit/0e17c598e1e82d40c5145e5135007bffe507200f))
* **widgets:** add translated default texts ([c85342d](https://github.com/dhis2/ui/commit/c85342df741a960cd44a8f53a9a250be9e56d7f1))
* **forms:** display submit errors ([9f74e89](https://github.com/dhis2/ui/commit/9f74e897f9ee60ae121b05e1442ff356aff9468a))
* **forms:** update final-form to fix setstate warning ([1bc62b9](https://github.com/dhis2/ui/commit/1bc62b9dc0d2215fc60f3cdacd2304f7a09730d3))
* **createnumberrange:** update number range validation error to match actual bounds ([646f782](https://github.com/dhis2/ui/commit/646f782e7dbbc6bb2da4340d76ce55c7d5ab25db))


### Code Refactoring

* **transfer:** align with select & monorepo structure ([c15477d](https://github.com/dhis2/ui/commit/c15477dcaa582fc059dab35adfc24a19527b7f0c)), closes [#50](https://github.com/dhis2/ui/issues/50)
* **transfer:** align with select & monorepo structure ([d50f960](https://github.com/dhis2/ui/commit/d50f960a675941d8052bae473003895c837a737a))
* **layering:** layers and overlay components ([24ead4c](https://github.com/dhis2/ui/commit/24ead4c31a650cfedf3221a5086baf911ea1e544))
* **menu:** make menu click-based and reorganise related components ([a8b26a0](https://github.com/dhis2/ui/commit/a8b26a0984f892ec9ea61a2c40bb6226e66903a9))
* **forms:** move to more explicit final-form api ([a76da00](https://github.com/dhis2/ui/commit/a76da00bffed6e1a7fce2a6a29505ae58ea0db52))
* **popover:** rename popover prop ([f7d5c20](https://github.com/dhis2/ui/commit/f7d5c20dd111789fa7230aa0f84eeaf0487df4be))
* **checkboxfield:** move to ui-widgets ([d979d96](https://github.com/dhis2/ui/commit/d979d96010347d7f22fe40b8af126f9901f5230c))
* **core:** add forward refs to base components ([699b194](https://github.com/dhis2/ui/commit/699b1945e83f6551d34137b9a650a580a0918d53))
* **core:** move fields to widgets ([3b763fa](https://github.com/dhis2/ui/commit/3b763fa8b3f1d36b8090cf037dd2d4135ca1d56c))
* **core:** reimplement Field ([fbdafb8](https://github.com/dhis2/ui/commit/fbdafb800eb2033ad9b673350243bdc0d49a8f02))
* **forms:** namespace final-form and react-final-form re-exports ([c59e0bb](https://github.com/dhis2/ui/commit/c59e0bb50ddb82a6c79589727a15483b98b45261))
* **select:** use string based selection in multi- and single-select ([e3627a4](https://github.com/dhis2/ui/commit/e3627a479577a7bbd3d78e86f5fbf93e2ca57971))
* **fileinputfield:** move to ui-widgets ([6059625](https://github.com/dhis2/ui/commit/6059625a46329858e5cc9180ff837d1f3474c796))
* **fileinputfieldwithlist:** move to ui-widgets ([a512f00](https://github.com/dhis2/ui/commit/a512f007e4716f925502216824ad9a8ac925f2f8))
* **inputfield:** move to ui-widgets ([50d9009](https://github.com/dhis2/ui/commit/50d9009b5c6fa5effdbcb67fed985f0a87c1cac0))
* **multiselectfield:** move to ui-widgets ([c3d42ad](https://github.com/dhis2/ui/commit/c3d42ad495eae9858b946dfc8acaa4027febacf7))
* **singleselectfield:** move to ui-widgets ([e09c70c](https://github.com/dhis2/ui/commit/e09c70cb6a15cd28d28f93a2e11f2c68b7033774))
* **switchfield:** move to ui-widgets ([2baa52a](https://github.com/dhis2/ui/commit/2baa52a0048818312d0fd3f6b0591341615d604b))
* **textareafield:** move to ui-widgets ([3ef63da](https://github.com/dhis2/ui/commit/3ef63da69ce5c377a298d9b2af55bac567495e08))
* **togglegroupfield:** migrate to ui-widgets ([db55448](https://github.com/dhis2/ui/commit/db55448e4aa50d98eafe3d21cefd3b89439b66be))
* **ui:** list breaking changes ([7ceddf0](https://github.com/dhis2/ui/commit/7ceddf087562e04f70116a9d6ff696ae416cfd59))
* **forms:** rename form components ([7479f613](https://github.com/dhis2/ui/commit/7479f6135a2a695a85c0d93d7841729d738767ef))


### Features

* **constants:** export constants as well ([51c2eb0](https://github.com/dhis2/ui/commit/51c2eb0b62fdb222708b8a08c13d1aab0192a2b6))
* **noticebox:** add noticebox component ([357ef6d](https://github.com/dhis2/ui/commit/357ef6d45e739d53cf1cef7933ed121259016f54))
* **constants:** move and expose the common proptypes ([1bb0f9d](https://github.com/dhis2/ui/commit/1bb0f9d42077bc204923ecd502225c5fa5da3c3a))
* **forms:** integrate @dhis2/ui-forms ([af49144](https://github.com/dhis2/ui/commit/af49144e20c5b01197e01472c6514129d2abce6f))
* **ui:** expose @dhis2/ui-forms through metapackage ([88a3782](https://github.com/dhis2/ui/commit/88a3782db4f337e80079824138f76cc5b5c4a6b1))


### BREAKING CHANGES

* **transfer:** The Transfer component now expects options to be passed in as objects, not as children. Custom components can be provided via the optionComponent prop for all options or via the component property on an individual option.
* **transfer:** The Transfer component now expects strings as selected values instead of option objects.
* **transfer:** The Transfer component is now part of `widgets`
* **popover:** The Popover's `onBackdropClick` prop has been renamed to `onClickOutside`
* **menu:** MenuList was renamed to Menu
* **menu:** Menu was renamed to FlyoutMenu
* **menu:** The sub-menus now open on click instead of hover
* **menu:** We have introduced a dedicated `MenuDivider` and `MenuSectionHeader`
* **menu:** To create sub-menus, you can now add MenuItems directly under a parent MenuItem, no need to wrap them in a Menu/FlyoutMenu anymore
* **core:** Relocate all *Field components to @dhis2/ui-widgets. They can be accessed from `@dhis2/ui` using named exports.
* **core:** Field has been reimplemented to compose a field control, it now adds the Label, Help, Validation components instead of being a simple div wrapper, which allows us to avoid the code duplication in each *Field component.
* **core:** ToggleGroup has been removed. Use a FieldSet for grouping form controls.
* **togglegroupfield:** ToggleGroupField has been renamed to FieldSetField, which adds the necessary Label, Help, and Validation components to an entire group of components.
* **field:** Field now provides a composition to provide all necessary things for a *Field component.
* **radiogroup:** RadioGroup has been deleted.
* **checkboxgroup:** CheckboxGroup has been deleted.
* **checkboxgroupcontrol:** CheckboxGroupControl has been deleted.
* **radiogroupcontrol:** RadioGroupControl has been deleted.
* **forms:** final-form and react-final-form exports are now re-exported under the named exports FinalForm and ReactFinalForm respectively.
* **layering:** We changed the set of components used to produce various types of overlays: `Layer` is an overlay component that fills the entire screen/page. Besides that it is also a key component to stack various components on top of one another. `ComponentCover` is a similar component that only fills its parent, provided that has a non-static position. Both the `Layer` and the `ComponentCover` accept an `onClick` and a `translucent` prop. `CenterContent` is a component that does exactly what it says on the tin. It also has a `position` prop which can be used to vertically align the content at the `top`, `middle` (default), or `bottom`. These new components replace the `Backdrop` and the `ScreenCover`, which had a slightly unclear scope and have now been removed. The `Layer` uses the `LayerContext` internally to control the stacking logic. This context has also been exposed via the `useLayerContext` hook, which can be used to append portals to the current layer-node.
* **singleselect:** SingleSelect selection is now a string instead of an object with a value and label property
* **multiselect:** MultiSelect selection is now an array of strings instead of an array of objects with a value and label property
* **core:** base components can hold a ref.
* **forms:** Postfix all the `@dhis2/ui-forms` components with 'FieldFF' to avoid conflicts with the base components in `@dhis2/ui-core` and `@dhis2/ui-widgets`, since all components are now exported in `@dhis2/ui`. The FF stands for final-form, clarifying that the component is tied to final-form and making the relation with our regular Field components more clear. So, for example, instead of the regular `<Input />` we used to export from `ui-forms` we now have `<InputFieldFF />`
* **widgets:** The `<FieldSetField />` component has been renamed to `<FieldGroup />`
* **forms:** The `<GroupControl />` component has been renamed to `<FieldGroupFF />`
* **textareafield:** Import path changes from @dhis2/ui-core to @dhis2/ui or @dhis2/ui-widgets.
* **switchfield:** Import path for SwichField changes from @dhis2/ui-core to @dhis2/ui or @dhis2/ui-widgets.
* **singleselectfield:** Import path for SingleSelectField changes from @dhis2/ui-core to @dhis2/ui or @dhis2/ui-widgets.
* **multiselectfield:** MultiSelectField import path changes from @dhis2/ui-core to @dhis2/ui-widgets or @dhis2/ui
* **inputfield:** Move InputField from ui-core to ui-widgets, new import path at @dhis2/ui-widgets or @dhis2/ui.
* **fileinputfieldwithlist:** Move FileInputFieldWithList from ui-core to ui-widgets, new import from @dhis2/ui-widgets or @dhis2/ui.
* **fileinputfield:** Move FileInputField from ui-core to ui-widgets. New import path from '@dhis2/ui-widgets' or '@dhis2/ui'.
* **checkboxfield:** CheckboxField has moved from ui-core to ui-widgets.
* **togglegroupfield:** move the ToggleGroupField component from ui-core to ui-widgets.
* **ui:** Rename the Constrictor component to Box, which is shorter and thus easier to type. This also expands the capabilities of Box to make it more Box-like.
* **ui:** Replace SwitchGroupField, RadioGroupField, CheckboxGroupField with ToggleGroupField.
* **ui:** Replace SwitchGroup, RadioGroup, CheckboxGroup with ToggleGroup.
* **ui:** The exports: colors, theme, layers, spacers, spacersNum, and elevations, have been moved from @dhis2/ui-core to @dhis2/ui-constants for better code reuse.

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
