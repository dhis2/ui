# Glossary

This document offers recommendations for the terms and language to use in a DHIS2 app. The guidelines below aren't strict rules, but recommendations to keep consistency across similar themes and concepts. Always strive to use terminology users are familiar with. 

This document also outlines some DHIS2-specific terms that should be used with care. Using these terms inconsistently creates a confusing user experience.

## A-Z term glossary

#### &  ⛔
- Avoid. Use the full word _and_ instead.
- ✅ **Recommended:** _Patients and records_.
- ❌ **Not recommended:** _Patients & records_.

#### Access ⚠️
- OK to use when referring to permission to access an object.
- Don't use as a verb. Use a clearer, more action specific term like _open_, _edit_, or _view_.

- ✅ **Recommended:** _You don't have access to this object_.
- ✅ **Recommended:** _Open the visualization_.
- ❌ **Not recommended:** _Access the visualization_.

#### Add ✔️
- Use when the action will perform an additive action, like adding an existing item to a group.
- Don't use at the end of a form, where it might be misunderstood as _adding_ something to the form. Use _create_ or _save_ instead.
- _Create_ can be used if the action isn't strictly additive, like making a new dashboard that's a collection of other items. _Add_ works, but _create_ may be clearer. 

#### App ✔️
- Use instead of _application_ in most situations.
- Use _application_ in technical situations.
- Where possible, be specific and refer to the app name instead (without app).
- ✅ **Recommended:** _Open Data Visualizer to make charts and tables_.

#### Box ⚠️
- OK to use to refer to a specific control, but use the label name instead.
- Always prefix with the label name.
- ✅ **Recommended:** _Enter your username in the username box_.
- ❌ **Not recommended:** _Enter your username in the box_.

#### Cancel ✔️
- Use as an action word that signals abandoning the current action without applying or saving changes.

#### Clear ⚠️
- Use when all values will be removed from the current selection, for example when clearing filters or clearing all choices.
- Don't use when permanently deleting items, use _remove_ or _delete_ instead.

#### Copy ✔️
- Use _copy_ instead of _duplicate_.
- Combine with the item name for clarity. _Copy Antenatal care program_, for example.
- Use the action phrase _make a copy_ where a new item is created.

#### Config ⛔
- Avoid. Where necessary, use the full word, _configuration_, instead, but only in technical settings.
- Use _settings_ or _setup_ instead.

#### Create ✔️
- Use when an action will finish an additive action, like the end of a _New item_ form.
- Related: *add* and *new*.

#### Delete ✔️
- Use when an item will be destroyed. 
- Use *remove* if an item will only be removed from the current context, but still exist elsewhere.

#### Display ⛔
- Avoid. *Show* is a clearer action term.
- ✅ **Recommended:** _Show legend key_.
- ❌ **Not recommended:** _Display legend key_.

#### Documentation ✔️
- Use the full word, _documentation_. Avoid _docs_.
- ✅ **Recommended:** _Check out the metadata documentation for more information_.
- ❌ **Not recommended:** _Check out the metadata docs for more information_.

#### Download ✔️
- Use where data isn't being manipulated before download.
- _Export_ may be clearer if the data will be manipulated or processed before download.

#### Drag ✔️
- Use _drag_ instead of _drag and drop_ if possible.
- ✅ **Recommended:** _Drag the dimension chip to the layout area_.
- ❌ **Not recommended:** _Drag and drop the dimension chip to the layout area_.

#### Dropdown ⛔
- Avoid. If referring to a set of options opening from a control, use _menu_ instead. Consider removing the term completely.
✅ **Recommended (best):** _Choose a program from the available sectors_.
- ✅ **Recommended:** _Choose a program from the available sectors menu_.
- ❌ **Not recommended:** _Choose a program from the available sectors dropdown_.

#### E.g. ⛔
- Avoid. Use _for example_ or _such as_ instead.
- If giving an example in a form input placeholder text, use _Example: …_.
- ✅ **Recommended:** _Give programs clear names, such as Malaria Registration_.
- ❌ **Not recommended:** _Give programs clear names, e.g. Malaria Registration_.

#### Edit ✔️
- Use when referring to an item, like _Edit program_.
- If referring to a single change on a value, use _change_. _Change username_, for example, is clear. For the whole user profile, _edit profile_ would be clear.

#### Emoji ✔️
- Use _emoji_ for image-based icons.
- Use _emoticon_ for text-based icons, like `:)` and `:(`. Note that these emoticons may be converted to images.

#### Enable ⚠️
- OK if used consistently in an app, though _turn on_ can be simpler. 

#### Enter ✔️
- Use to refer to user input in form controls.
- Use instead of _write_ or _add_.
- ✅ **Recommended:** _Enter the organization name_.
- ❌ **Not recommended:** _Write the organization name_.

#### Etc. ⛔
- Avoid. Give several representative examples instead.
- ✅ **Recommended:** _Import metadata here, such as events, attributes, or programs_.
- ❌ **Not recommended:** _Import metadata here, such as events, etc_.

#### Execute ⛔
- Avoid. _Run_ is clearer.
- ✅ **Recommended:** _Run the following commands to import data_.
- ❌ **Not recommended:** _Execute the following commands to import data_.

#### Fill in / Fill out ✔️
- Use _fill in_ for single form inputs (or _enter_, for text inputs).
_ Use _fill out_ for an entire form. Don't use _complete_ to refer to a form.

#### Filter ✔️
- Use when applying a filtering criteria to an existing collection of items or data.
- Only use _filter_ when attributes are used, like _program type_ or _first name_.
- Use _search_ if free text is the only filter applied across multiple attributes.
- For search box placeholder text, _Search for a data item_ is usually clearer than _Filter data items_.

#### Impact ⛔
- Avoid. Use _affects_, or be more specific and describe what will happen.
- ✅ **Recommended (best):** _Large files can take a long time to upload_.
- ✅ **Recommended (OK):** _Large files can affect loading times_.
- ❌ **Not recommended:** _Large files can impact loading times_.

#### Import ✔️
- Use to refer to the data import process.
- For uploading a file, use _upload_. For example, to _import_ location data the user needs to _upload_ a GeoJSON file.

#### In order to ⛔
- Avoid. The clearer and shorter _to_ will usually work alone.
- ✅ **Recommended:** _Use the importer to add data from other instances_.
- ❌ **Not recommended:** _Use the importer in order to add data from other instances_.

#### Install ✔️
- Use to refer to installing applications.

#### Launch ⛔
- Avoid. Use _start_ or _open_ instead.
- ✅ **Recommended:** _Start program import wizard_.
- ❌ **Not recommended:** _Launch program import wizard_.
- ✅ **Recommended:** _Open Capture to add records_.
- ❌ **Not recommended:** _Launch Capture to add records_.

#### Learn more ✔️
- Use to link to contextual help or documentation.
- Combine with the context. A link may read _Learn more about user permissions_, for example.

#### Log in / Log out ✔️
- Use as an action, instead of _sign in_ or _sign out_.

#### New ✔️
- Use as an action label that proceeds the item it will create.
- Only use if the item didn't exist before. If moving or adding an existing item to a group, use _add_.
- Don't use at the end of forms, use _create_ as the final action.

#### Once ⚠️
- Only use to refer to a count, not a sequential event. Use _after_ to refer to sequential events.
- ✅ **Recommended:** _Add data after setting up a group_.
- ❌ **Not recommended:** _Add data once you set up a group_.

#### Refresh ✔️
- Use instead of _reload_ in most cases.

#### Remove ✔️
- Use when an item will be removed from a context, but not deleted.

#### Required ✔️
- Use instead of _mandatory_ or _compulsory_.

#### Reset ✔️
- Use for an action that will return something to its earlier value(s). _Reset user permissions_, for example.
- If there is a default value, _Reset to default_ can be used.

#### Run ✔️
- Start a process. Use instead of _execute_ or _initialize_.

#### Save ✔️
- Save changes to the current context.

#### Save as ✔️
- Save the current context, including changes, as a new object.

#### Search ✔️
- Use to refer to searching a collection of data with a user input, not when setting attributes to _filter_ by.

#### Select ⚠️
- Avoid unless explicitly selecting items. If instructing a user to make a selection, use _choose_ instead.
- Can be used when referring to data items in a select/deselect situation, like data table rows. In that case, a use can _Select rows_, _Select all_, or _Deselect all_.

#### Show ✔️
- Use as an action term instead of _display_.

#### Specify ⛔
- Avoid. Use _set_ instead.
- ✅ **Recommended:** _Set the refresh interval to match the network speed_.
- ❌ **Not recommended:** _Specific the refresh interval to match the network speed_.

#### Text box ⛔
- Avoid. Use _box_ instead, or refer to the control label.

#### This / that ⚠️
- Avoid unless the reference is clear. These terms can be ambiguous. Use the noun instead.
- ✅ **Recommended:** _The import settings are used to set the import rules_.
- ❌ **Not recommended:** _This is used to set the import rules_.

#### Update ✔️
- Use when applying changes to an object.

#### View details ✔️
- Use for an action label for a control that shows more information about an object. Use instead of _show details_ or _details_.

## DHIS2-specific glossary
These terms are used, or have been used, extensively across DHIS2. Use them with caution and avoid using these terms for new or different use cases. The full DHIS2 glossary can be found here.

#### Approve
- Used extensively across Data Approvals app. Using _approve_ in other contexts may not be clear.
- Avoid using unless the task relates to the DHIS2 data approving workflow.

#### Category
- An object in the DHIS2 data model. Avoid using for other purposes.
- Use `group` or `grouping` instead.

#### Complete
- Used in Data Entry and Tracker contexts to signal completion status. 
- Avoid using, unless the action is related to the data completion model. Use _fill out_ instead when referring to forms. 

#### Favorite
- Previously, used across analytics apps to refer to user saved charts, tables and maps. Replaced by _saved visualization_.
- Avoid using _favorite_ for any new concepts. Some references to _favorite_ may remain.

#### Indicator
- An object in the DHIS2 data model. Avoid using for other purposes.
- Use `sign` or `signal` instead.