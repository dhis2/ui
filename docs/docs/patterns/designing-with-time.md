# Displaying time

Displaying a time, like a timestamp or the time since something happened, is a common feature in DHIS2 applications.

Knowing the time that something happened is useful for different reasons. Different ways of displaying time suit different use cases. This design pattern offers guidelines for how to display the time in different situations.

## Goal

Reduce the mental work required by the user by displaying the time in a way that suits the context.

## Relative time / from now

Relative time, or _from now_, takes the object timestamp, calculates the time to _now_, and turns that into a natural language phrase. Relative time often has boundaries set for when to use different labels. For example:

-   4 minutes ago
-   3 days ago
-   a week ago
-   2 months ago
-   a year ago
    ([Check out the moment.js implementation of _fromNow_ for commonly used boundary labels.](https://momentjs.com/docs/#/displaying/fromnow/))

### When to use relative time

Use relative time when the time information is interesting based on its relationship to the current time. For example:

-   Searching for a patient: showing when records were last updated helps a user find the right patient.
-   Browsing a list of visualizations: showing how long ago a visualization was created makes it clear which visualizations are more recent and relevant.
-   Reading through a list of comments: showing when a comment was written helps frame the information in the right context.

In each of these examples, the relative time label is the right choice because it reduces the work needed to get to the useful information. If a user would be mentally making the comparison, then doing it automatically saves time and lightens the mental load.

Only use relative time when the approximate time is useful. The level of precision goes down as time passes (_a year ago_ applies for a long time.)

### How to use relative time

#### Context

Make the context clear with a contextual prefix, like _last updated_. For example:

-   Last updated 3 days ago.
-   Imported 2 months ago.
-   Created a year ago.

Only omit a contextual prefix when it's completely clear what the time refers to, or if the relative time appears in a table column with an appropriate header.

#### Make the timestamp available

A relative label might offer enough information most of the time, but it helps to make the timestamp available if it's needed.

##### Tooltip

![example using a tooltip to display timestamp](/images/pattern/time/timestamp-tooltip.png)

One useful pattern is displaying the timestamp in a tooltip when hovering the cursor over the relative label. This offers detailed information when needed, but hides it for the majority of cases where it's unnecessary. Tooltips are good if only a single timestamp needs to be seen at a time, and if the user doesn't need to interact with the timestamp.

##### Expansion

![example using a expandable label to display timestamp](/images/pattern/time/timestamp-expand.png)
Another pattern is using the relative time as an expandable label that can be opened to show the full timestamp. Use this pattern if it could be useful to compare several timestamps, or when a user might want to select and copy the timestamp.

## Timestamp

A timestamp is the raw time information. Timestamps are formatted in different ways and include varying amounts of detail. Some examples of how timestamps can look are:

-   `2005-10-30 T 10:45 UTC`
-   `Friday July 30, 2021`
-   `2009-10-31T01:48:52Z`

### When to use timestamps

Timestamps are useful when the recorded moment in time is useful alone, in relation to other timestamps, or in relation to another unit of time (like a year or season). For example:

-   Comparing the end time of one automation job with the start time of another.
-   Comparing test results to seasonal averages.
-   Reading the output logs of an automated task.

In these examples, the timestamp is useful because it offers the right amount of precision and allows comparison to another unit of time. Knowing that a test result was recorded 23 July is useful when comparing it to seasonal averages. A relative label here would mean more mental work of subtracting the relative time from the current time.

#### Timezone

Timestamps are useful when working with several timezones. Including the timezone removes any doubt of which timezone applies.

### How to use timestamps

Use the right timestamp format and level of precision for the use case. For example, consider whether the time _to the second_ (10:48:02) is useful, or if _to the minute_ (10:48) is enough precision.

When hiding levels of precision, consider making the full timestamp available as a tooltip [as discussed earlier](#Make-the-timestamp-available).
