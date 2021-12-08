# Color

Color is used in DHIS2 to support effective communication. DHIS2 applications use color to help the user understand information, feedback and more. The colors used in an application should not be chosen based primarily on how they look, but how they convey information and aid understanding.

It is important to maintain consistent usage of colors throughout the DHIS2 platform. Globally, color meanings are relative. It is not possible to say "red = danger". However, using a consistent color palette we can establish that "red **in DHIS2** = danger".

Color alone should not be relied upon to communicate effectively. Read more about [color accessibility](#accessibility).

## DHIS2 Color Scale

![DHIS2 color scale](../images/color/color-scale.png)

The DHIS2 color scale contains 7 colors. Each color has 10 shades. This color system provides enough colors for all situations.

Reference: [Color codes and #hex values for the DHIS2 color scale](#color-scale-reference).

## General, simplified principles

Each color in the DHIS2 color scale has a purpose. Put simply:

-   **Grey**: general interface elements, neutral information
-   **Blue**: important neutral information, primary actions
-   **Teal**: selected or active elements
-   **Red**: danger, error, destructive action
-   **Yellow**: warning, non-blocking error
-   **Green**: positive feedback, valid, success

Generally speaking, for all colors, the values also have a purpose:

-   **900–700**: text, information, active or highlighted content
-   **600–300**: icons, states (inactive, disabled, etc.)
-   **200–050**: backgrounds, tints, accents

## Using color

Color usage in DHIS2 applications should be subtle. Reserve colors for when they need to communicate effectively. For example:

![Usage of color](../images/color/ex-color-1.png)

![Error and danger colors](../images/color/ex-color-2.png)

![Consistent use of color](../images/color/ex-color-3.png)

## Accessibility

Do not rely on color alone to communicate. Not everyone sees color the same. Relying on color to communicate will restrict access for partially sighted, color blind and users with low-quality display hardware.

**Always use color with another method, such as text formatting or icon usage, to communicate.**

Relying on color alone to signal an error to a user is problematic. For example:

![Colorblind simulation](../images/color/ex-color-4.png)

Pay attention to contrast too. Information dense text needs to satisfy a minimum contrast ratio of 7:1 to be accessible to all users and headers and secondary text should pass a 4.5:1 ratio:

![Contrast example](../images/color/ex-color-5.png)

Remember, when dealing with accessibility issues that designs may work or be understandable on your screen, but not necessarily on others. Make sure to think of all kinds of users with all kinds of hardware when designing with accessibility in mind. Use an [WCAG2.0 standard accessibility checker](http://accessible-colors.com/) to check contrast. Aim for AAA rating for all essential interface elements.

A DHIS2 instance can be themed. Adjusting theme colors will overwrite the `blue` and `teal` colors of the scale.

When selecting theme colors, make sure they do not clash with the colors established in the DHIS2 color scale. Using red for the main header bar will confuse: is the header bar in an error state?  -->

## Color Scale Reference

|                                                | Name      | Hex       |
| ---------------------------------------------- | --------- | --------- |
| ![grey050](../images/color/color-grey-050.png) | `grey050` | `#FBFCFD` |
| ![grey100](../images/color/color-grey-100.png) | `grey100` | `#F8F9FA` |
| ![grey200](../images/color/color-grey-200.png) | `grey200` | `#F3F5F7` |
| ![grey300](../images/color/color-grey-300.png) | `grey300` | `#E8EDF2` |
| ![grey400](../images/color/color-grey-400.png) | `grey400` | `#D5DDE5` |
| ![grey500](../images/color/color-grey-500.png) | `grey500` | `#A0ADBA` |
| ![grey600](../images/color/color-grey-600.png) | `grey600` | `#6E7A8A` |
| ![grey700](../images/color/color-grey-700.png) | `grey700` | `#4A5768` |
| ![grey800](../images/color/color-grey-800.png) | `grey800` | `#404B5A` |
| ![grey900](../images/color/color-grey-900.png) | `grey900` | `#212934` |

|                                                | Name      | Hex       |
| ---------------------------------------------- | --------- | --------- |
| ![blue050](../images/color/color-blue-050.png) | `blue050` | `#f5fbff` |
| ![blue100](../images/color/color-blue-100.png) | `blue100` | `#e3f2fd` |
| ![blue200](../images/color/color-blue-200.png) | `blue200` | `#c5e3fc` |
| ![blue300](../images/color/color-blue-300.png) | `blue300` | `#90caf9` |
| ![blue400](../images/color/color-blue-400.png) | `blue400` | `#42a5f5` |
| ![blue500](../images/color/color-blue-500.png) | `blue500` | `#2196f3` |
| ![blue600](../images/color/color-blue-600.png) | `blue600` | `#147cd7` |
| ![blue700](../images/color/color-blue-700.png) | `blue700` | `#1565c0` |
| ![blue800](../images/color/color-blue-800.png) | `blue800` | `#0d47a1` |
| ![blue900](../images/color/color-blue-900.png) | `blue900` | `#093371` |

|                                                | Name      | Hex       |
| ---------------------------------------------- | --------- | --------- |
| ![teal050](../images/color/color-teal-050.png) | `teal050` | `#f1f9f9` |
| ![teal100](../images/color/color-teal-100.png) | `teal100` | `#e0f2f1` |
| ![teal200](../images/color/color-teal-200.png) | `teal200` | `#b2dfdb` |
| ![teal300](../images/color/color-teal-300.png) | `teal300` | `#4db6ac` |
| ![teal400](../images/color/color-teal-400.png) | `teal400` | `#009688` |
| ![teal500](../images/color/color-teal-500.png) | `teal500` | `#00897b` |
| ![teal600](../images/color/color-teal-600.png) | `teal600` | `#00796b` |
| ![teal700](../images/color/color-teal-700.png) | `teal700` | `#00695c` |
| ![teal800](../images/color/color-teal-800.png) | `teal800` | `#004d40` |
| ![teal900](../images/color/color-teal-900.png) | `teal900` | `#00332b` |

|                                              | Name     | Hex       |
| -------------------------------------------- | -------- | --------- |
| ![red050](../images/color/color-red-050.png) | `red050` | `#fff5f6` |
| ![red100](../images/color/color-red-100.png) | `red100` | `#ffe5e8` |
| ![red200](../images/color/color-red-200.png) | `red200` | `#ffcdd2` |
| ![red300](../images/color/color-red-300.png) | `red300` | `#e57373` |
| ![red400](../images/color/color-red-400.png) | `red400` | `#f44336` |
| ![red500](../images/color/color-red-500.png) | `red500` | `#d32f2f` |
| ![red600](../images/color/color-red-600.png) | `red600` | `#c62828` |
| ![red700](../images/color/color-red-700.png) | `red700` | `#b71c1c` |
| ![red800](../images/color/color-red-800.png) | `red800` | `#891515` |
| ![red900](../images/color/color-red-900.png) | `red900` | `#330202` |

|                                                    | Name        | Hex       |
| -------------------------------------------------- | ----------- | --------- |
| ![yellow050](../images/color/color-yellow-050.png) | `yellow050` | `#fff8e1` |
| ![yellow100](../images/color/color-yellow-100.png) | `yellow100` | `#ffecb3` |
| ![yellow200](../images/color/color-yellow-200.png) | `yellow200` | `#ffe082` |
| ![yellow300](../images/color/color-yellow-300.png) | `yellow300` | `#ffc324` |
| ![yellow400](../images/color/color-yellow-400.png) | `yellow400` | `#ffa902` |
| ![yellow500](../images/color/color-yellow-500.png) | `yellow500` | `#ff9302` |
| ![yellow600](../images/color/color-yellow-600.png) | `yellow600` | `#ff8302` |
| ![yellow700](../images/color/color-yellow-700.png) | `yellow700` | `#e56408` |
| ![yellow800](../images/color/color-yellow-800.png) | `yellow800` | `#bb460d` |
| ![yellow900](../images/color/color-yellow-900.png) | `yellow900` | `#6f3205` |

|                                                  | Name       | Hex       |
| ------------------------------------------------ | ---------- | --------- |
| ![green050](../images/color/color-green-050.png) | `green050` | `#f4fbf4` |
| ![green100](../images/color/color-green-100.png) | `green100` | `#e8f5e9` |
| ![green200](../images/color/color-green-200.png) | `green200` | `#c8e6c9` |
| ![green300](../images/color/color-green-300.png) | `green300` | `#a5d6a7` |
| ![green400](../images/color/color-green-400.png) | `green400` | `#4caf50` |
| ![green500](../images/color/color-green-500.png) | `green500` | `#43a047` |
| ![green600](../images/color/color-green-600.png) | `green600` | `#388e3c` |
| ![green700](../images/color/color-green-700.png) | `green700` | `#2e7d32` |
| ![green800](../images/color/color-green-800.png) | `green800` | `#1b5e20` |
| ![green900](../images/color/color-green-900.png) | `green900` | `#103713` |

