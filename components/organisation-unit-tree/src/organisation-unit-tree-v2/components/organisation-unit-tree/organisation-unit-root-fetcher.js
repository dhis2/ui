import { colors } from '@dhis2/ui-constants'
import React from 'react'
import { useOrganisationUnitTreeFetcher } from '../../hooks/index.js'

/* A white translucent overlay was chosen because a dark one
 * will cause the container outline to show. When used against
 * a white background the white overlay won't do this, but
 * the tree will have a "greyed out", disabled look.
 * An animated line at the top was chosen because a centered
 * circular loader obscures the view of the tree and keeps
 * appearing on a different location depending on the amount
 * of expanded/visible nodes.
 * A custom component was chosen, because basing this on the
 * `LinearLoader` took even more lines of CSS than below. */

const OrganisationUnitRootFetcher = () => {
    const { isFetching, isFetchingChildren } = useOrganisationUnitTreeFetcher()
    /* A very common fetch case is when a node is opened and
     * children are requested. this fetching state should be
     * visualised at node level, so there is no need to show
     * the fetch indicator now. It would also be pretty annoying
     * to see it each time a user opens a node. */
    const showFetchIndicator = isFetching && !isFetchingChildren

    if (!showFetchIndicator) {
        return null
    }

    return (
        <div>
            <div className="progressbar">
                <div className="progress"></div>
            </div>
            <style jsx>{`
                div {
                    position: absolute;
                    background-color: rgba(255, 255, 255, 0.6);
                    inset: 0;
                    display: flex;
                    align-items: flex-start;
                    justify-content: flex-start;
                    cursor: not-allowed;
                }
                .progressbar {
                    background-color: rgba(110, 122, 138, 0.15);
                    height: 2px;
                }
                .progress {
                    width: 100%;
                    height: 2px;
                    background-color: ${colors.blue600};
                    animation-name: grow;
                    transform-origin: left;
                    animation-duration: 2000ms;
                    animation-fill-mode: forwards;
                    animation-timing-function: linear;
                    animation-iteration-count: 1;
                }

                @keyframes grow {
                    0% {
                        transform: scaleX(0);
                    }
                    40% {
                        transform: scaleX(1);
                    }
                    92% {
                        transform: scaleX(1);
                    }
                    100% {
                        transform: scaleX(0);
                    }
                }
            `}</style>
        </div>
    )
}

export { OrganisationUnitRootFetcher }
