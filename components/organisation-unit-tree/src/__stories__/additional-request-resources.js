import { CustomDataProvider } from '@dhis2/app-runtime'
import React from 'react'
import { OrganisationUnitTree } from '../index.js'
import { customData } from './customData.js'

const customDataWithApprovals = {
    ...customData,
    'dataApprovals/approvals': (type, { params }) => {
        return [
            {
                wf: params.wf,
                pe: params.pe,
                ou: params.ou,
                aoc: "aocUID",
                state: "ACCEPTED_HERE",
                level: "KaTJLhGmU95",
                permissions: {
                    mayApprove: true,
                    mayUnapprove: true,
                    mayAccept: false,
                    mayUnaccept: true,
                    mayReadData: true
                }
            }
        ]
    },
}

export const AdditionalRequestResources = () => (
    <CustomDataProvider data={customDataWithApprovals}>
        <OrganisationUnitTree
            name="Root org unit"
            roots={['A0000000000']}
            initiallyExpanded={['/A0000000000/A0000000001']}
            additionalQueryResources={{
                approvalData: {
                    resource: 'dataApprovals/approvals',
                    params: ({ id: orgUnitId }) => ({
                        wf: 'rIUL4hYOjJc',
                        pe: '202101',
                        ou: orgUnitId,
                    })
                }
            }}
            renderNodeLabel={data => {
                const nextData = !data.loading ? {
                    ...data,
                    node: {
                        ...data.node,
                        displayName: `${data.node.displayName} (mayApprove: ${data?.additional?.approvalData?.[0].permissions.mayApprove})`,
                    }
                } : data

                return OrganisationUnitTree.defaultProps.renderNodeLabel(nextData)
            }}
        />
    </CustomDataProvider>
)
