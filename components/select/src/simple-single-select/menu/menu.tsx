import { colors, elevations } from '@dhis2/ui-constants'
import { Layer } from '@dhis2-ui/layer'
import { Popper } from '@dhis2-ui/popper'
import React, { useEffect, useState } from 'react'
import { OptionType } from '../shared-prop-types.ts'
import { Empty } from './empty.tsx'
import { Loading } from './loading.tsx'
import { NoMatch } from './no-match.tsx'
import { OptionsList } from './options-list.tsx'

export interface SimpleMenuProps {
    comboBoxId: string
    focussedOptionIndex: number
    listBoxRef: React.RefObject<HTMLElement>
    name: string
    options: OptionType[]
    onChange: (option: { value: string; label: string }) => void
    dataTest?: string
    disabled?: boolean
    empty?: React.ReactNode
    filterValue?: string
    hidden?: boolean
    labelledBy?: string
    loading?: boolean
    loadingText?: string
    maxHeight?: string
    noMatchText?: string
    optionComponent?: React.ElementType
    optionUpdateStrategy?: 'off' | 'polite' | 'assertive'
    selectRef?: HTMLElement | null
    selectedValue?: string
    onBlur?: (e: React.FocusEvent) => void
    onClose?: () => void
    onEndReached?: () => void
}

export function Menu({
    comboBoxId,
    focussedOptionIndex,
    name,
    options,
    onChange,
    optionComponent,
    dataTest,
    disabled,
    empty,
    filterValue,
    hidden,
    labelledBy,
    listBoxRef,
    loading,
    loadingText,
    maxHeight,
    noMatchText,
    optionUpdateStrategy,
    selectRef,
    selectedValue,
    onBlur,
    onClose,
    onEndReached,
}: SimpleMenuProps) {
    const [menuWidth, setWidth] = useState('auto')
    const dataTestPrefix = `${dataTest}-menu`

    useEffect(() => {
        if (selectRef) {
            const callback = () => setWidth(`${selectRef.offsetWidth}px`)
            callback() // We want to know the width as soon as the

            selectRef.addEventListener('resize', callback)
            return () => selectRef.removeEventListener('resize', callback)
        }
    }, [selectRef])

    if (hidden) {
        return null
    }

    const hasNoFilterMatch =
        !options.length &&
        filterValue &&
        // We don't want to show the noMatchText when
        // we're in the process of loading options
        !loading

    const isEmpty = !options.length && !filterValue

    return (
        <Layer onBackdropClick={onClose as never} translucent={false}>
            <Popper
                reference={selectRef}
                placement="bottom-start"
                observeReferenceResize
            >
                <div className="menu" style={{ width: menuWidth, maxHeight }}>
                    {isEmpty && <Empty>{empty as string}</Empty>}

                    {hasNoFilterMatch && (
                        <NoMatch>{noMatchText as string}</NoMatch>
                    )}

                    <div className="listbox-container">
                        <div className="listbox-wrapper">
                            <OptionsList
                                ref={
                                    listBoxRef as React.RefObject<HTMLDivElement>
                                }
                                comboBoxId={comboBoxId}
                                optionComponent={optionComponent}
                                dataTest={`${dataTestPrefix}-list`}
                                disabled={disabled}
                                focussedOptionIndex={focussedOptionIndex}
                                labelledBy={labelledBy}
                                loading={loading}
                                id={`${name}-listbox`}
                                optionUpdateStrategy={optionUpdateStrategy}
                                options={options}
                                selectedValue={selectedValue}
                                onBlur={onBlur}
                                onChange={onChange}
                                onEndReached={onEndReached}
                            />
                        </div>

                        {loading && (
                            <div className="menu-loading-container">
                                <Loading message={loadingText} />
                            </div>
                        )}
                    </div>

                    <style jsx>{`
                        .menu {
                            display: flex;
                            flex-direction: column;
                            height: auto;
                            background: ${colors.white};
                            border: 1px solid ${colors.grey200};
                            border-radius: 3px;
                            box-shadow: ${elevations.e300};

                            /* We want the provided height to be exact, otherwise
                               the consumer would have to know about the border's width */
                            box-sizing: content-box;
                        }

                        .listbox-container {
                            position: relative;
                            flex-grow: 1;
                            display: flex;
                            flex-direction: column;
                            overflow: hidden;
                        }

                        .listbox-wrapper {
                            overflow: auto;
                            flex-grow: 1;
                        }

                        .menu-loading-container {
                            position: absolute;
                            left: 0;
                            top: 0;
                            width: 100%;
                            height: 100%;
                        }
                    `}</style>
                </div>
            </Popper>
        </Layer>
    )
}
