# ADR adoption

### Date: 31/10/2022

### Status: proposed

## Context

In a recent retro it was discussed that a process to assist the team with technical decisions might be useful. Something that helps the team with its democratic decision making (which is seen as very useful to the team), that helps support the freedom in technical approach but helps cut through the potential ambiguity that comes with that freedom. The question is could ADRs help the team with technical decisions?

## Considerations

Alternatives to the ADR format as presented here are numerous and varied. Some commonly used examples can be found here

-   https://github.com/joelparkerhenderson/architecture-decision-record#adr-example-templates

Working with a basic IDE or text editor is all you need to work with ADRs butthere are also cli tools for working with ADRs, such as

-   https://github.com/asiermarques/adrgen

In terms of folder structure for the storage of ADRs, some organisations separate `accepted` and `rejected` ADRs by folder so that developers can get up to speed quickly on the accepted decisions of a codebase without having to read through the rejected ones. As the number of ADR's increase we might want to consider if we want to adopt this too.

## Decision

When making decisions that have wider implications for a codebase we should consider using ADRs

Architectural Decision Records a.k.a. Any Decision Records are a tool that we can adopt to support our technical and architecture decision making.

As there is sometimes disagreement about what is "architectural" about some technical decisions therefore many choose to think of ADRs referring to "Any" decision records. The content of an ADR should provide a simple outline - this outline should be easy to understand and help a team of engineers understand the pros and cons of adopting that decision.

An ADR presents

-   The context of the problem - this is the reason " why" we want to adopt a new approach or technology. This often outlines a problem
-   The decision that will solve the problem - this is "what" we will do
-   The consequences - this defines the pro and cons of what we want to do. How does this solution help us, what other issues might arise from adopting this solution

Additional resources on ADRs can be found at https://adr.github.io/

The template for our ADR's can be found at [\_adr_template.md](_adr_template.md) which contains markdown like below. This template presents the sections - Date, Status, Context, Considerations, Decision, Consequences. Considerations and Consequences can be considered as optional, but ideally the ADR should always feature Date, Status, Context and Decision.

If a ADR supersedes or amends an existing ADR the existing ADR should be linked to and updated accordingly

```
# Any Decision Record Template

### Date: XX/XX/XXXX

[//]: # (status can be - proposed, accepted, rejected, superseded, amended, deprecated)
### Status: proposed

[//]: # (uncomment or delete the following depending on status)
[//]: # (Superseded by [link to ADR])
[//]: # (Supersedes [link to ADR])
[//]: # (Amended by [link to ADR])
[//]: # (Amends [link to ADR])

## Context

What is the problem that is motivating this decision? Why do we what to make this change?

## Considerations

Were there multiple options to consider that would present solutions to this problem?

## Decision

What is being proposed as a potential solution to this problem?

## Consequences

What are the pros and cons of this change? what becomes easier or more difficult?
```

This example draws on the simple structure from the [Decision record template by Michael Nygard](https://github.com/joelparkerhenderson/architecture-decision-record/blob/main/templates/decision-record-template-by-michael-nygard/index.md) , adds a considerations section in a similar way to that of the [MADR](https://adr.github.io/madr/) example and draws on statuses as defined by [adrgen cli](https://github.com/asiermarques/adrgen)

An IDE or simple text editor can be used to create and update ADRs

ADRs exist in the repo alongside the code that they inform. Here our ADRs will be kept in the `/decisions` folder. They will be stored in markdown format. New ADRs should be saved in the folder using the naming convention that follows.

`XXXX-title-separated-by-dashes.md`

For example this ADR has been saved as `0001-adr-adoption.md`. The prefix number should always be incremented for new ADRs - for example the next ADR might be `0002-the-next-adr.md`

### The process for decision adoption

1. If a developer (or a number of developers) has an idea for a technical improvement they should write an ADR and raise a PR. This could be an idea for a new code convention or the adoption of a new library etc. Developers might also add a working example of code to the PR to compliment the ADR.
2. That ADR should be presented to the rest of the team at a meeting. This is an opportunity to inform other developers about this change of, if needed, for the team refine the ADR further. Ultimately at this meeting the team should decide if the ADR should be accepted or rejected
3. Once the team has accepted or rejected an ADR, that ADR should be updated accordingly and merged into the codebase
4. If there is any additional work needed following on from the acceptance of a decision the team may need to consider raising tickets for that work too.

## Consequences

### Pros

-   Any member of the team will be able to submit an ADR for consideration
-   The team will be kept informed about new technical and architectural decisions
-   The team will be able to openly discuss and collectively decide what new approaches and technologies to adopt
-   Previous decisions will be easy to find and understand in terms of why something was done
-   The structure of an ADR and the discussion surrounding its adoption should help ensure that decisions are well informed

### Cons

-   Given that our work sometimes spans multiple repos storing ADR's may need more consideration if they apply to multiple repos
-   Waiting for all the team to be available could delay time sensitive decisions - there may still occasionally be a need for a "tie-break"
