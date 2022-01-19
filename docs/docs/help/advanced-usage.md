# Advanced usage

## Overriding the styled-jsx from our libraries

### Recommendations

Usually there are better ways to achieve what you want than overriding the styled-jsx we use to style our library components. Consider the following alternatives:

1. If the component has a bug in the css, open an issue or PR here https://github.com/dhis2/ui.
2. If you want the component to do something that it currently doesn't, feel free to open a feature request in the above repository.
3. If it's not a bug, and the feature you want is not within scope for the component in the above repository, consider creating a custom component. You could use the building blocks we expose in https://github.com/dhis2/ui.

The solutions listed above are officially supported and would be stable. Overriding our styles is something we allow, but we don't consider it a part of our public API, so it could break at any time. That means that as a solution, overriding our css is extremely unstable and will probably eventually cost more maintenance effort than implementing any of the above three solutions.

So even though we strongly discourage it, if you still want to override the styles, this is how you would do so:

1. Add a custom className to the component that you want to style (all our components accept a `className` prop).
2. Target the element that you want to style, prefixed by the className, to scope your styles to the component in question.
3. Ensure your rules have higher specificity than the styled-jsx rules. In this case, an `!important` is an acceptable solution. Note that the usage of `!important` is discouraged in most other cases, see [this article](https://www.smashingmagazine.com/2010/11/the-important-css-declaration-how-and-when-to-use-it) for more information.

So, for example:

```jsx
import { Button } from '@dhis2/ui'
import styles from './styles.module.css'

const NotRecommended = () => <Button className={styles.button} />
```

With `./styles.module.css` containing:

```css
.button {
    color: red !important;
    font-size: 100px !important;
}
```
