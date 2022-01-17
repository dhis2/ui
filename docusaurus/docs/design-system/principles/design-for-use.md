# Design for use

To build complex applications that are user-friendly, focus on:

-   what is the main purpose of the application?
-   who is the application for?
-   how will users of the application achieve their goals?

All applications on the DHIS2 platform should consider their user-experience. Not all apps can be simple, but all can be understandable by their intended users. Do not focus on simplicity, **focus on clarity**. An application should enable users to solve problems, understand information and achieve their goals.

## How to build usable, understandable applications

#### 1. Define the core purpose of the application

What will the application do? What won't it do? These are important questions to ask and answer before you start building. A clear, concise 'application definition' provides a guiding principle for all the design and implementation decisions.

Examples of 'application definitions' for core DHIS2 apps:

**Dashboards**
`Build and view dashboards with saved visualizations and static information`

**Data Visualizer**
`Create, save and share data visualizations from stored data`

**Capture**
`Create, edit and view data stored in event and tracker programs. View and edit data attached to tracked entities`

**Scheduler**
`Set up automatic system jobs via a visual user interface`

Remember, an application definition doesn't need to be simple, but it should be concise and focused. The point is not to try to list all the functionality, that will come later, but to try to understand the core purpose of the application. This core purpose will help throughout the design and development process. New or suggested features can be evaluated against the definition: "Does this suggested feature fit the core purpose of the application?".

When the core purpose of the application is known, the application definition, then features can be discussed and decided upon. Often it will be clear from the application definition what features are required.

#### 2. Understand the users

After establishing an application definition and an understanding of the required features, focus on who will be using the application. Who are the potential users, who will not be using it? Why do users need this application? DHIS2 is unique in its flexibility, it is difficult to know who will use the application when there are implementations all over the world solving different problems. But, as much as possible, try to identify the type of user that is expected to benefit most from the application. Research to understand who the users may be. What level of technical skills do they have? What typical network access do they have? What other apps do they use regularly? Try to gather as much information as possible, ideally by asking questions to potential users and listening and understanding their responses. Avoid making assumptions about how users work, or what they need.

Understanding potential users of the application will inform the whole design and development process. It is important to spend time at this stage to establish as much detail as possible. So, rather than simply "Data entry workers", it is better to know that users are "Data entry workers, not used to working with technology, logging in once per month, reading all on-screen instructions." Not all users will fit this pattern, but is there some common ground for the majority of users?

#### 3. Design for the users

'User-centered Design' is the design of solutions that are driven by the goals of a user. Applications that are 'user-centered' are built to reflect the way a user works, not necessarily how the technology works.

All applications on the DHIS2 platform should be user-centered. Design and implementation decisions should always be considered first and foremost from how they will impact users. Implementation and technical decisions should follow after the user has been considered.

Remember that an application developer or designer does not always have the ideal perspective of how applications should work, or how the interface should be laid out. As much as possible it is always best to refer to the user, using the research gathered in [step two](#2-understand-the-users). Applications interfaces should reflect where a user expects to find controls and information, not necessarily how they are arranged in the system or database.

#### 4. Allow configuration, but only where needed

Many DHIS2 apps are complex and flexible. They are powerful precisely because they allow for so many different ways of working. This comes with a trade-off in usability. Presenting a user with many options and configurations can be confusing and intimidating.

Understanding potential users is key to establishing the right balance between complexity and simplicity. How much configuration should be possible, and how should it be done?

Consider this sample application and its users:

-   90% of users will use the application with the 'default' options and configuration
-   users that do want to customize the interface or workflow are technically proficient
    This scenario is an obvious case for displaying the configuration options on a secondary screen. If 90% of the users will never need those options it would be best to hide them. Display all options to all users would cause unnecessary confusion and uncertainty. Expert users that wanted to configure their application would be able to do so, but it isn't the main use case.

Thinking about the opposite scenario for another application and its users:

-   there are few common use cases, all user groups have different requirements
-   different users in the same user groups work in different ways, the workflow is highly personal
    In this scenario, obvious and easily available configuration options are important. Options should not be hidden and it should be quick to adjust the interface. (In this extreme example, is it even right to have a single application? That would be a question to address in [step one](#1-define-the-core-purpose-of-the-application)).

Rarely are applications so well defined. Most applications will have user requirements that hover in the middle of these two example scenarios. The important thing to keep in mind is that the amount of customization and configuration included in an application should always be a conscious choice. Do not expose all options just because they exist. Only show configuration options that are useful and relevant. Decisions regarding the options included, and how they are displayed, should always be taken from a 'user-centered' perspective.

#### 5. Listen to feedback

The application development process does not end when the application is released. Users will start using the application and there will always be feedback. It is important to listen to all feedback. Use the feedback to better understand how users work. Not all feedback needs to be implemented, but it should always be heard.

Some feedback will come up often enough and have enough impact that the application should be updated or changed. Make sure, before making changes, that any change would be a positive one for the majority of users. All users have preferences, ensure that changes aren't made based on a vocal minority expressing a preference. Keep the application definition and main user group in mind at all times.

Remember that all changes will need to be documented and may impact the relevance of training materials, so only make major, or breaking, changes when it will be a meaningful positive to users.
