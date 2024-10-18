import { colors, spacers, theme } from '@dhis2/ui-constants'
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
                className="search"
                autoComplete={'off'}
                prefixIcon={<IconSearch16 />}
                clearable
            />
            <style>{`
                .search {
                    
                    border-bottom: 1px solid ${colors.grey300};
                    
                }
                .search input {
                    font-size: 14px;
                    color: ${colors.grey900};
                    padding: ${spacers.dp12};
                    margin: 0;
                    border: none;
                    width: 100%;
                    height: 40px;
                    border-radius: 3px 3px 0px 0px;
                }
                .search input::placeholder {
                    color: ${colors.grey600};
                }
                .search input:focus {
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
