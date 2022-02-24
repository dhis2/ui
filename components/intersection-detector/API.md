### IntersectionDetector

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.

```js
import { IntersectionDetector } from '@dhis2-ui/intersection-detector'
```

#### Props

| Name    | Type | Default | Required | Description |
| ------- | ---- | ------- | -------- | ----------- |
| rootRef | `{   |

"current": "instanceOf(HTMLElement)"
}`||*|React ref on other component to detect intersections with| |onChange|`function`||*|Called with signature `({ isIntersecting: bool })`| |children|`any`|||| |className|`string`|||| |dataTest|`string`|`'dhis2-uicore-intersectiondetector'`||| |threshold|`number`|`0`||The [threshold](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options) value: a value from 0.0 to 1.0 that controls the point at which an intersecting component is considered 'intersected' or 'visible' and the onChange callback triggers|
