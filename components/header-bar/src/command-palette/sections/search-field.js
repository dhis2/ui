import { colors, theme } from '@dhis2/ui-constants'
import { IconSearch16 } from '@dhis2/ui-icons'
import PropTypes from 'prop-types'
import React from 'react'
import { InputField } from '../../../../input/src/input-field/input-field.js'
import i18n from '../../locales/index.js'

function Search({ value, onChange }) {
    return (
        <>
            <InputField
                value={value}
                name="filter"
                placeholder={i18n.t('Search apps, shortcuts, commands')}
                onChange={onChange}
                initialFocus
                className="input"
                autoComplete={'off'}
                prefixIcon={<IconSearch16 />}
                clearable
            />
            <style>{`
                .input {
                    max-width: 100%;
                    border: none;
                    border-bottom: 1px solid grey;
                    height: 40px;
                }
                .input input {
                    border: none;
                }
                .input input::placeholder {
                    color: ${colors.grey600};
                }
                .input input:focus {
                    outline: 2px solid ${theme.focus};
                    outline-offset: -2px;
                }
            `}</style>
        </>
    )
}

Search.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default Search
