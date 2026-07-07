# CalendarInput

`CalendarInput` wraps the `Calendar` widget (`../calendar/`) with a text input, validation, and a clear button. It renders dates via `@dhis2/multi-calendar-dates`, which wraps `@js-temporal/polyfill` (vendored as of `2.2.0-alpha.x`, see that package's `src/vendor/README.md`).

## Test coverage

Two separate test surfaces exist, covering different things. Scope below is limited to the three calendars this project cares about: **Gregorian, Ethiopic, Nepali** (Islamic and others are exercised too but are out of scope for coverage decisions here).

| | Jest (`__tests__/calendar-input.test.js`) | Cypress + Cucumber e2e (`../features/*.feature`, driven off `../__e2e__/calendar-input.e2e.stories.js`) |
|---|---|---|
| Run by | `yarn test` in `components/calendar` | separate `yarn cy:test` at repo root (spins up Storybook + a real browser) |
| Drives | `CalendarInput` in isolation / inside a form | fully rendered stories, real DOM + i18n |

### Coverage matrix

| Capability | Gregorian | Ethiopic | Nepali |
|---|---|---|---|
| Render + localized weekday/month names (native + English) | e2e | e2e | e2e |
| Month navigation (prev/next) | e2e | e2e | e2e |
| Select a day via calendar widget click | Jest + e2e | Jest + e2e | Jest + e2e |
| Enter a date by typing into the input | Jest | Jest | Jest (validation test) |
| minDate validation message | Jest | Jest | not exercised |
| maxDate validation message | Jest | not exercised | Jest |
| Invalid-date-in-calendar message | not exercised | Jest | Jest |
| Clear button + "today" becomes selected | e2e | e2e | e2e |
| Day-cell text shows the bare day number, not a full date string | e2e (`highlight today as the selected date` step) + Jest (`getByText('17')`) | e2e only | e2e only |
| Ethiopic: era not shown in year select | n/a | e2e | n/a |
| Manual clear (deleting text, not clicking Clear) | Jest | not exercised | not exercised |
| Bare `Calendar` widget without the `CalendarInput` wrapper | no direct unit test for any calendar — everything goes through `CalendarInput` | | |

Also covered (Gregorian only, calendar-agnostic behavior — not worth tripling up per calendar): `strictValidation` (warning instead of error), `format`/`DD-MM-YYYY` detection and mismatch rejection, `pastOnly` (year selector upper bound), `dir` (RTL wrapper attribute), `numberingSystem` (day-cell digits), `weekDayFormat` (weekday header length).

### Known gaps

1. **Ethiopic has no e2e-equivalent test for validation error *text*** — only the Jest suite checks min/max-date and invalid-date messages for it (now un-skipped and passing, see below); there's no Cypress scenario for validation text in any calendar.
2. `inputWidth` is untested — it's a passthrough to a `styled-jsx` CSS width, purely cosmetic, and `styled-jsx` output is fragile to assert on in jsdom. Deliberately skipped rather than an oversight.
3. Only two assertions in the whole suite check that a day cell's *visible text* is the bare day number rather than something else: Jest's `getByText('17')` (Gregorian) and the e2e `highlight today as the selected date` step (all three calendars, via `.isSelected` text). The e2e "select a day" scenarios target cells by `data-test` attribute, not visible text, so they would **not** catch a day-label rendering regression on their own (this is exactly what broke during the `multi-calendar-dates` `2.2.0-alpha.1` upgrade — see git history around that dependency bump). The new Ethiopic/Nepali widget-click Jest tests added below use the same `data-test`-based click, for the same reason (parity with the existing Gregorian test) — they don't independently close this gap for those two calendars.

The previously-skipped Ethiopic validation test and the previously-flaky-on-CI Nepali test are now both active, unconditionally (see the performance fix below — the timeout root cause is gone). Also added: Jest-level widget-click selection for Ethiopic and Nepali (closing gap 3 above, as it stood before this update), and coverage for every previously-untested prop except `inputWidth`.

## Performance: typing lag / CI timeouts (LIBS-763)

The skipped Ethiopic test and the Nepali validation test (flagged in a `ToDo` comment referencing [LIBS-763](https://dhis2.atlassian.net/browse/LIBS-763)) were timing out on CI. Root-caused and fixed upstream in `multi-calendar-dates`; the fix shipped in `@dhis2/multi-calendar-dates@3.0.0-alpha.1` and this package is pinned to it.

Two separate memoization bugs in `useDatePicker`:

1. **`useNavigation` args unstable**: `useDatePicker` called `useNavigation` with two arguments freshly constructed on every render (deriving the visible month's date, and an options object, both recreated inline each call). `useNavigation`'s own `useMemo` compares dependencies by reference, so it never actually cached anything — it rebuilt the year dropdown (up to 126 entries) and month list, each entry formatted through `Intl`, on **every single render**, including every keystroke while typing (`useDatePicker` runs on every render regardless of whether the dropdown is open).
2. **`calendarWeekDays` never memoized at all**: the day-grid (~35-42 cells), each formatted through the same Intl-backed `localiseWeekLabel`, was built inline in the returned object on every render — not wrapped in `useMemo` in the first place. The selected-date value driving it had the same instability problem.

Fix: memoized all of the above against their real dependencies, routing the day-click handler through a ref so it still always calls the latest `onDateSelect` without needing to be a memo dependency. In `3.0.0-alpha.1` this landed as part of a broader refactor that also stopped leaking raw `Temporal` objects from the hook's public surface (hence the major version bump).

**Impact measured**, 10-keystroke typing benchmark with the calendar dropdown open, against the real published `3.0.0-alpha.1`:

| Calendar | Before either fix | After |
|---|---|---|
| Gregorian | ~2000ms | ~22ms |
| Ethiopic | crashed outright (separate CLDR48 era-code bug, also fixed in this line of work) | ~9ms |
| Nepali | ~760ms | ~13ms |

Root cause of the pre-fix *difference* between calendars: Gregorian/Ethiopic are native-ICU calendars, so `localiseWeekLabel`/`localiseYear`/`localiseMonth` go through `Temporal.*.toLocaleString()`, which constructs a brand-new native `Intl.DateTimeFormat` per call (confirmed by instrumenting `Intl.DateTimeFormat.prototype.resolvedOptions`: ~500 constructions triggered by a single keystroke before the fix). Nepali is a custom (non-ICU) calendar, so those helpers skip Intl entirely via a lookup table — cheaper, but still wasted work from the same broken memoization.

This was entirely a `multi-calendar-dates` bug — nothing in this directory (`CalendarInput`/`Calendar`) needed to change.
