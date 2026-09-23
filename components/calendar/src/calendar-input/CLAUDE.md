# CalendarInput

`CalendarInput` wraps the `Calendar` widget (`../calendar/`) with a text input, validation, and a clear button. Both get their date logic — parsing, localization, navigation — from `@dhis2/multi-calendar-dates`'s `useDatePicker`/`useResolvedDirection`/`validateDateString`; this directory has no date-math of its own.

## Data flow

Dates cross the public API as calendar-native `YYYY-MM-DD` strings (in whatever `calendar` prop is set — not necessarily Gregorian ISO), never as `Temporal` objects. Treat any change that would leak a `Temporal`/date-engine object through `onDateSelect`, `date`, or similar props as a breaking change. `CalendarInput`'s `onDateSelect` payload also carries a `validation` object that `CalendarInput` computes itself via `validateDateString` — it is *not* part of `multi-calendar-dates`'s types, so it's declared separately in `../../types/index.d.ts` (`CalendarInputValidation` / `CalendarInputOnDateSelectPayload`). If you change how validation is computed or shaped, update that file too.

## Testing

Two surfaces, used for different things:
- **Jest** (`__tests__/calendar-input.test.js`, run via `yarn test`) — component behavior and logic: prop handling, validation, callbacks.
- **Cypress + Cucumber e2e** (`../features/*.feature` + step defs, driven off `../__e2e__/calendar-input.e2e.stories.js`, run via `yarn cy:test` at the repo root) — real rendered output and localization across calendars. Heavier; not run by `yarn test`.

When adding a prop or behavior, add a Jest test. If it's about rendering or localized text for a specific calendar/locale, check whether a `.feature` scenario should exist too.

Coverage decisions in this component are scoped to the three calendars the project actually supports in practice: **Gregorian, Ethiopic, Nepali**. Ethiopic and Nepali behave differently enough from Gregorian (Ethiopic is a native-ICU calendar with its own era handling; Nepali is a custom, non-ICU calendar implemented in `multi-calendar-dates` via a lookup table, not `Intl`) that "tested for Gregorian" should not be assumed to mean "tested for the other two" — verify explicitly rather than assuming parity.

## Gotchas

- **Day-cell tests must assert on visible text, not just the `data-test` attribute.** `data-test` on a day cell is always the full date string (e.g. `2024-10-17`); the *rendered label* is a separate value from `multi-calendar-dates` and can silently regress into something else (it has, historically) without any `data-test`-based assertion catching it. Assert `within(cell).getByText('17')` (or the calendar-appropriate bare day number) in addition to clicking by `data-test`.
- **`useDatePicker` recomputes on every render of `CalendarInput`, regardless of whether the calendar dropdown is open.** Its output must stay properly memoized inside `multi-calendar-dates` — if you find yourself adding expensive work anywhere in this render path (here or upstream), verify it doesn't run on every keystroke. The `performance (LIBS-763)` describe block in the test file guards against this regressing again; keep it green.
- **`inputWidth` is deliberately untested.** It's a passthrough to a `styled-jsx` CSS width — purely cosmetic, and `styled-jsx` output is fragile to assert on in jsdom. Don't assume this is an oversight.
- **`minDate`/`maxDate`/`format`/`strictValidation` get passed to two different functions with different expectations**: `validateDateString` (via `validationOptions`, keyed `minDateString`/`maxDateString`) drives the visible error text, while `useDatePicker` takes the same values under its own key names (`minDate`/`maxDate`) to decide whether to fall back to today internally in strict mode. These used to silently disagree (the `validationOptions` object, keyed for `validateDateString`, was spread straight into `useDatePicker` too) — the widget would keep an out-of-range date selected in strict mode even though the input correctly rejected it. Pass `useDatePicker` its own correctly-named fields explicitly; don't assume an options object built for one of these functions is safe to reuse for the other.
