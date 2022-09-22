import React from 'react'
import { Tag } from './tag.js'

const subtitle =
    'Used to display categorizing labels or information for other elements in a collection.'

const description = `
Tags are used whenever an element in a collection needs to display its category or status. Tags should not be used for one-off, unique information. Tags can be displayed in any kind of component.

Tags are useful when displaying multiple elements in a collection that have the same basic attributes but belong to different categories or have different statuses. Do not use tags for elements that will always be the same, instead use a heading or other grouping method.

Tags are never used for primary interaction and should not be used as buttons. Clicking a tag could sort a collection by that tag, or open a page to display all elements that have that tag type. Tags should not be used as navigation elements.

\`\`\`js
import { Tag } from '@dhis2/ui'
\`\`\`

`

const tagArgType = {
    table: { type: { summary: 'bool' } },
    control: { type: 'boolean' },
}

export default {
    title: 'Tag',
    component: Tag,
    parameters: {
        componentSubtitle: subtitle,
        docs: { description: { component: description } },
    },
    argTypes: {
        negative: { ...tagArgType },
        neutral: { ...tagArgType },
        positive: { ...tagArgType },
    },
    args: {
        children: 'Dog',
    },
}

const ExampleIcon = () => (
    <svg
        height="12"
        viewBox="0 0 12 12"
        width="12"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g fill="inherit">
            <path d="m6.00003329 5c-.40449432-.00016901-.76925356.24336235-.92416402.61701786-.15491047.3736555-.06945918.80383558.21650172 1.08991608s.71610521.37171165 1.08982546.21695745c.37372025-.15475421.61740424-.51941158.61740424-.92390594.00011082-.26517416-.10515147-.51952543-.29261873-.70707109-.18746725-.18754566-.44177449-.29291436-.70694867-.29291436z" />
            <path d="m9.10419761 8.52484537c.76535472-.94655629 1.06135379-2.18836523.80523589-3.37821761-.05634956-.27032079-.32125073-.44379594-.59167333-.38746761-.2704226.05632834-.4439631.32112977-.38761355.59145056.19496765.89486787-.02567692 1.82986482-.60017581 2.5432874-.72092529.88419157-1.88113225 1.28314793-2.99364655 1.02941488-1.11251431-.25373305-1.98479962-1.11624341-2.25073114-2.22550911-.26593151-1.10926569.12051398-2.27331263.99713349-3.00355471.69583114-.57340823 1.61098701-.80724221 2.4967314-.63794667.17734061.03661596.36062942-.02545013.47919689-.16226782.11856746-.1368177.15389197-.32701448.09235365-.49725733s-.21032645-.29393785-.38899706-.32339268c-1.92234735-.37212623-3.83170501.70111683-4.5123533 2.53637752s.06739468 3.8933194 1.76783755 4.86377602c1.70044287.97045659 3.85367697.56818039 5.08870246-.95069268z" />
            <path d="m5.99960069 0c-1.97689694.00113-3.82650358.97550158-4.94544231 2.60525583-1.11893874 1.62975425-1.3637448 3.70593215-.65455769 5.55124417.05611465.17686038.20555481.3081025.38818046.34090985.18262565.03280736.36840126-.03821571.48256414-.18448699.11416287-.14627127.13793722-.34373427.0617554-.51292286-.85968765-2.23032693-.01933119-4.75713774 2.00488351-6.02834816s4.66524393-.93071599 6.30084518.81233583c1.63560122 1.74305182 1.80759312 4.40037955.41033032 6.33972937-1.39726277 1.93934986-3.97236477 2.61745126-6.14355901 1.61778296-.16228789-.0750258-.35227387-.0577729-.49839205.0452597-.14611818.1030325-.22616973.2761916-.21000001.45425.01616973.1780583.12610416.3339645.28839206.4089903.78810364.364813 1.64655922.5525468 2.515.5500256 3.31370847 0 5.99999991-2.68631714 5.99999991-6.0000256s-2.68629144-6-5.99999991-6z" />
            <path d="m8.99960069 3.5c0-.20225265-.1218571-.38459013-.30873435-.46195903-.18687725-.07736891-.40196034-.03452776-.54492981.1085414-.14296946.14306916-.18566067.35818204-.10816151.5450053.07749917.18682326.25992156.30855316.46218139.30841233.27600227-.00019246.49964428-.22399048.49964428-.5z" />
            <circle cx="1.499601" cy="9.5" r="1" />
        </g>
    </svg>
)

const ExampleLargeIcon = () => (
    <svg
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm0 14.5c-2.49 0-4.5-2.01-4.5-4.5s2.01-4.5 4.5-4.5 4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5zm0-5.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z"
            fill="inherit"
        />
    </svg>
)

const Template = (args) => <Tag {...args} />

export const Default = Template.bind({})

export const WithIcon = Template.bind({})
WithIcon.args = { icon: <ExampleIcon /> }

export const Neutral = Template.bind({})
Neutral.args = { neutral: true }

export const Positive = Template.bind({})
Positive.args = { positive: true }

export const Negative = Template.bind({})
Negative.args = { negative: true }

export const Bold = Template.bind({})
Bold.args = { bold: true }

export const WithLargeIcon = Template.bind({})
WithLargeIcon.args = { icon: <ExampleLargeIcon /> }

export const WithClippedLongText = Template.bind({})
WithClippedLongText.args = {
    icon: <ExampleIcon />,
    children: 'I am long text, therefore I get clipped before I finish',
}

export const WithClippedTextAndMaxWidth = Template.bind({})
WithClippedTextAndMaxWidth.args = {
    children: 'I am long text',
    maxWidth: '50px',
}
