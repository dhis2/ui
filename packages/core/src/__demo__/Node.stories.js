import { storiesOf } from '@storybook/react'
import React from 'react'
import { resolve } from 'styled-jsx/css'

import { Checkbox, CircularLoader, Node } from '../index.js'

const say = something => () => alert(something)

window.onOpen = (payload, event) => {
    console.log('onOpen payload', payload)
    console.log('onOpen event', event)
}

window.onClose = (payload, event) => {
    console.log('onClose payload', payload)
    console.log('onClose event', event)
}

const onOpen = (...args) => window.onOpen(...args)
const onClose = (...args) => window.onClose(...args)

const loadingSpinnerStyles = resolve`
    .small {
        margin: 3px 0;
        width: 24px;
        height: 18px;
    }
`

const LoadingSpinner = () => (
    <React.Fragment>
        <CircularLoader small className={loadingSpinnerStyles.className} />
        <style>{loadingSpinnerStyles.styles}</style>
    </React.Fragment>
)

storiesOf('Component/Core/Node', module)
    .add('Custom icon', () => (
        <Node
            icon={<LoadingSpinner />}
            open={false}
            onOpen={onOpen}
            onClose={onClose}
            component={
                <Checkbox
                    label="Node label 1.1"
                    value="foobar"
                    name="l1.1"
                    onChange={say('checkbox 1.1 clicked')}
                    checked={false}
                />
            }
        />
    ))

    .add('Multiple roots', () => (
        <div>
            <Node
                open={false}
                onOpen={onOpen}
                onClose={onClose}
                component={
                    <Checkbox
                        label="Node label 1.1"
                        value="foobar"
                        name="l1.1"
                        onChange={say('checkbox 1.1 clicked')}
                        checked={false}
                    />
                }
            >
                <span>Placeholder content</span>
            </Node>

            <Node
                open={false}
                onOpen={onOpen}
                onClose={onClose}
                component={
                    <Checkbox
                        label="Node label 1.2"
                        value="foobar"
                        name="l1.2"
                        onChange={say('checkbox 1.2 clicked')}
                        checked={false}
                    />
                }
            >
                <span>Placeholder content</span>
            </Node>
        </div>
    ))

    .add('2 Levels open', () => (
        <Node
            open={true}
            onOpen={onOpen}
            onClose={onClose}
            component={
                <Checkbox
                    label="Node label"
                    value="foobar"
                    name="l1.1"
                    onChange={say('Check 1.1')}
                    checked={false}
                />
            }
        >
            <Node
                open={true}
                onOpen={onOpen}
                onClose={onClose}
                component={
                    <Checkbox
                        label="Node label"
                        value="foobar"
                        name="l2.1"
                        onChange={say('Check 2.1')}
                        checked={false}
                    />
                }
            >
                <Node
                    component={
                        <Checkbox
                            label="Node label"
                            name="l3.1"
                            value="foobar"
                            onChange={say('Check 3.1')}
                            checked={false}
                        />
                    }
                />
                <Node
                    component={
                        <Checkbox
                            label="Node label"
                            name="l3.2"
                            onChange={say('Check 3.2')}
                            value="foobar"
                            checked={false}
                        />
                    }
                />
                <Node
                    component={
                        <Checkbox
                            label="Node label"
                            name="l3.3"
                            onChange={say('Check 3.3')}
                            checked={false}
                            value="foobar"
                        />
                    }
                />
            </Node>
            <Node
                open={false}
                onOpen={onOpen}
                onClose={say('close tree 2.2')}
                component={
                    <Checkbox
                        label="Node label"
                        name="l3.1"
                        onChange={say('Check 2.2')}
                        value="foobar"
                        checked={false}
                    />
                }
            >
                <Node
                    component={
                        <Checkbox
                            label="Node label"
                            name="l3.4"
                            value="foobar"
                            onChange={say('Check 3.4')}
                            checked={false}
                        />
                    }
                />
                <Node
                    component={
                        <Checkbox
                            label="Node label"
                            name="l3.5"
                            onChange={say('Check 3.5')}
                            value="foobar"
                            checked={false}
                        />
                    }
                />
                <Node
                    component={
                        <Checkbox
                            label="Node label"
                            name="l3.6"
                            onChange={say('Check 3.6')}
                            value="foobar"
                            checked={false}
                        />
                    }
                />
            </Node>
            <Node
                open={false}
                onOpen={onOpen}
                onClose={onClose}
                component={
                    <Checkbox
                        label="Node label"
                        name="l2.3"
                        value="foobar"
                        onChange={say('Check 2.3')}
                        checked={false}
                    />
                }
            />
            <Node
                open={false}
                onOpen={onOpen}
                onClose={onClose}
                component={
                    <Checkbox
                        label="Node label"
                        name="l2.4"
                        onChange={say('Check 2.4')}
                        value="foobar"
                        checked={false}
                    />
                }
            />
            <Node
                open={false}
                onOpen={onOpen}
                onClose={onClose}
                component={
                    <Checkbox
                        label="Node label"
                        name="l2.5"
                        value="foobar"
                        onChange={say('Check 2.5')}
                        checked={false}
                    />
                }
            />
            <Node
                open={false}
                onOpen={onOpen}
                onClose={onClose}
                component={
                    <Checkbox
                        label="Node label"
                        name="l2.5"
                        value="foobar"
                        onChange={say('Check 2.5')}
                        checked={false}
                    />
                }
            >
                {false && 'Foo'}
            </Node>
        </Node>
    ))

    .add('Text leaves', () => (
        <div>
            <Node
                open={true}
                onOpen={onOpen}
                onClose={onClose}
                arrowTopOffset="10px"
                component={
                    <h2>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr
                    </h2>
                }
            >
                Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem ipsum dolor sit amet.
                <div className="sub-tree sub-tree--open">
                    <Node
                        open={true}
                        onOpen={onOpen}
                        onClose={onClose}
                        component={
                            <h2>
                                Lorem ipsum dolor sit amet, consetetur
                                sadipscing elitr
                            </h2>
                        }
                    >
                        Sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero
                        eos et accusam et justo duo dolores et ea rebum. Stet
                        clita kasd gubergren, no sea takimata sanctus est Lorem
                        ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                        consetetur sadipscing elitr, sed diam nonumy eirmod
                        tempor invidunt ut labore et dolore magna aliquyam erat,
                        sed diam voluptua. At vero eos et accusam et justo duo
                        dolores et ea rebum. Stet clita kasd gubergren, no sea
                        takimata sanctus est Lorem ipsum dolor sit amet.
                    </Node>
                </div>
                <div className="sub-tree">
                    <Node
                        open={false}
                        onOpen={onOpen}
                        onClose={onClose}
                        component={
                            <h2>
                                Lorem ipsum dolor sit amet, consetetur
                                sadipscing elitr
                            </h2>
                        }
                    >
                        <span>Dummy content</span>
                    </Node>
                </div>
                <div className="sub-tree">
                    <Node
                        open={false}
                        onOpen={onOpen}
                        onClose={onClose}
                        component={
                            <h2>
                                Lorem ipsum dolor sit amet, consetetur
                                sadipscing elitr
                            </h2>
                        }
                    >
                        <span>Dummy content</span>
                    </Node>
                </div>
                <div className="sub-tree">
                    <Node
                        open={false}
                        onOpen={onOpen}
                        onClose={onClose}
                        component={
                            <h2>
                                Lorem ipsum dolor sit amet, consetetur
                                sadipscing elitr
                            </h2>
                        }
                    >
                        <span>Dummy content</span>
                    </Node>
                </div>
                <div className="sub-tree">
                    <Node
                        open={false}
                        onOpen={onOpen}
                        onClose={onClose}
                        component={
                            <h2>
                                Lorem ipsum dolor sit amet, consetetur
                                sadipscing elitr
                            </h2>
                        }
                    >
                        <span>Dummy content</span>
                    </Node>
                </div>
            </Node>

            <style jsx>{`
                div {
                    font-size: 16px;
                    line-height: 24px;
                }

                h2 {
                    font-size: 24px;
                    line-height: 32px;
                    margin: 0 0 10px;
                }

                .sub-tree {
                    margin-top: 10px;
                }

                .sub-tree--open {
                    margin-bottom: 20px;
                }

                div :global(.tree__arrow > span) {
                    padding-top: 4px;
                }

                div :global(.tree__arrow.open:after) {
                    top: 17px;
                    height: calc(100% - 28px);
                }
            `}</style>
        </div>
    ))
