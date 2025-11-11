### HeaderBar

#### Usage

To use `HeaderBar`, you can import the component from the `@dhis2/ui` library  


```js
import { HeaderBar } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|appName|string||||
|className|string||||
|skipI18n|boolean|||`skipI18n` skips initalising internationalisation in the UI component<br/>This is useful for app-platform apps, as the platform already sets i18n, so it can skip i18n (and avoid race conditions).<br/>For non-platform apps, they can continue relying on this logic running for backwards compatibility.|
|updateAvailable|boolean||||
|onApplyAvailableUpdate|function||||
