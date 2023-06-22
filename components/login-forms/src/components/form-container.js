import {colors, spacers} from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React from 'react'

export const FormContainer = ({ children, title, width }) => {
    return (
        <>
            <div className="form-container">
                {title && <p className="form-title">{title}</p>}
                {children}
            </div>
            <style>{`
        .form-container {
          width: ${width ?? '320px'};
        }
        .form-container span {
           color: var(--form-container-font-color, black);
        }
        .form-container a {
          color: var(--form-container-font-color, black);
       }        
        .form-title {
          font-weight: 500;
          margin: 0 0 ${spacers.dp16};
          color: var(--form-container-title-color, ${colors.grey900});
        }
      `}</style>
        </>
    )
}

FormContainer.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
    title: PropTypes.string,
    width: PropTypes.string,
}
