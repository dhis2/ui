### IntersectionDetector

#### Usage

To use `IntersectionDetector`, you can import the component from the `@dhis2/ui` library  


```js
import { IntersectionDetector } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|rootRef|{<br/>  "current": "instanceOf(HTMLElement)"<br/>}||*|React ref on other component to detect intersections with|
|onChange|function||*|Called with signature `({ isIntersecting: bool })`|
|children|any||||
|className|string||||
|dataTest|string|`'dhis2-uicore-intersectiondetector'`|||
|threshold|number|`0`||The [threshold](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options) value: a value from 0.0 to 1.0 that controls the point at which an intersecting component is considered 'intersected' or 'visible' and the onChange callback triggers|
