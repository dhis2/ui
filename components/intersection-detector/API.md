## IntersectionDetector

From [`src/intersection-detector.js`](./src/intersection-detector.js)

| prop                |     type      |                default                |      required      | description                                                                                                                                                                                                                                                                                     |
| ------------------- | :-----------: | :-----------------------------------: | :----------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **children**        |      `*`      |                                       |        :x:         |
| **className**       |   `String`    |                                       |        :x:         |
| **dataTest**        |   `String`    | `'dhis2-uicore-intersectiondetector'` |        :x:         |
| **onChange**        |  `Function`   |                                       | :white_check_mark: | Called with signature `({ isIntersecting: bool })`                                                                                                                                                                                                                                              |
| **rootRef**         |    `Shape`    |                                       | :white_check_mark: | React ref on other component to detect intersections with                                                                                                                                                                                                                                       |
| **rootRef.current** | `HTMLElement` |                                       |        :x:         |
| **threshold**       |   `Number`    |                  `0`                  |        :x:         | The [threshold](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options) value: a value from 0.0 to 1.0 that controls the point at which an intersecting component is considered 'intersected' or 'visible' and the onChange callback triggers |
