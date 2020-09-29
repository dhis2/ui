import React from 'react'
import propTypes from '@dhis2/prop-types'

const IconTranslate16 = ({ className, color }) => (
    <svg
        className={className}
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m12 7 3 7h-1l-.857-2h-3.286l-.857 2h-1l3-7zm-.5 1.167-1.214 2.833h2.428zm-5.5-6.167v1h4v1l-1.61050253.00012826c-.32746396 1.09295291-1.12112216 2.3364984-2.37943722 3.74269715.13053964.13691367.25884016.26374173.38396659.38171808.45560932.4295745.85329713.72520825 1.15536669.85870769l.10872035.04240717-.31622776.9486833c-.48364539-.16121513-1.02398365-.54717103-1.63387215-1.12220875-.12502614-.11788179-.25219999-.24311898-.38126016-.37514636-.49884635.51334839-1.05573231 1.04903363-1.67023259 1.60570466l-.3243393.2910135-.66436384-.74740936c.74538357-.66256317 1.40546677-1.29233911 1.98037652-1.88833204l.10645653.12405908c-.40362676-.45345723-.80068805-.93780812-1.17492607-1.42201183l-.43349285-.57575456-.05309895-.07363689.81373348-.5812382.26692146.36122825c.05906907.07816162.12500203.16451307.19715811.25787142.30766735.39807197.63115087.79603707.95937974 1.17385974 1.01318308-1.14327655 1.68063025-2.14635703 2.00437452-3.00279559l-6.33470057.00045528v-1h4v-1z"
            fill="inherit"
        />
        <style jsx>{`
            svg {
                fill: ${color};
                pointer-events: none;
            }
        `}</style>
    </svg>
)

IconTranslate16.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconTranslate24 = ({ className, color }) => (
    <svg
        className={className}
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m11.87 15.07-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53h1.93v-2h-6v-2h-2v2h-6v1.99h10.17c-.67 1.93-1.73 3.76-3.17 5.36-.93-1.03-1.7-2.16-2.31-3.35h-2c.73 1.63 1.73 3.17 2.98 4.56l-4.09 4.02 1.42 1.42 4-4 3.11 3.11zm6.63-5.07h-2l-4.5 12h2l1.12-3h4.75l1.13 3h2zm-2.62 7 1.62-4.33 1.62 4.33z"
            fill="inherit"
        />
        <style jsx>{`
            svg {
                fill: ${color};
                pointer-events: none;
            }
        `}</style>
    </svg>
)

IconTranslate24.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconTranslate = ({ className, color, size }) => {
    switch (size) {
        case 16:
            return <IconTranslate16 className={className} color={color} />

        case 24:
            return <IconTranslate24 className={className} color={color} />

        default:
            return null
    }
}

IconTranslate.defaultProps = {
    size: 16,
    color: 'inherit',
}

IconTranslate.propTypes = {
    className: propTypes.string,
    color: propTypes.string,
    size: propTypes.oneOf([16, 24]),
}

export { IconTranslate }
