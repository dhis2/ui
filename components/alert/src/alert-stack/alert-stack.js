import { layers } from '@dhis2/ui-constants'
import { Portal } from '@dhis2-ui/portal'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

export const AlertStack = ({ className, children, dataTest }) => (
    <Portal>
        <div className={cx(className)} data-test={dataTest}>
            {children}
            <style jsx>{`
                div {
                    position: fixed;
                    top: auto;
                    inset-inline-end: auto;
                    bottom: 0;
                    inset-inline-start: 50%;
                    transform: translateX(-50%);

                    z-index: ${layers.alert};

                    display: flex;
                    flex-direction: column-reverse;

                    pointer-events: none;
                }

                div:dir(rtl) {
                    transform: translateX(50%);
                }
            `}</style>
        </div>
    </Portal>
)

AlertStack.defaultProps = {
    dataTest: 'dhis2-uicore-alertstack',
}

AlertStack.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    dataTest: PropTypes.string,
}
