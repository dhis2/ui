import * as React from 'react'
import { LayerBackdropClickHandler } from '@dhis2-ui/layer'

type ModalOnCloseEventHandler = LayerBackdropClickHandler

type SharingAccess = {
    data: 'ACCESS_NONE' | 'ACCESS_VIEW_ONLY' | 'ACCESS_VIEW_AND_EDIT'
    metadata: 'ACCESS_NONE' | 'ACCESS_VIEW_ONLY' | 'ACCESS_VIEW_AND_EDIT'
}

type SharingObject = {
    access: SharingAccess
    id: string
    name: string
}

type SharingType =
    | 'aggregateDataExchange'
    | 'apiToken'
    | 'attribute'
    | 'category'
    | 'categoryCombo'
    | 'categoryOption'
    | 'categoryOptionGroup'
    | 'categoryOptionGroupSet'
    | 'constant'
    | 'dashboard'
    | 'dataApprovalLevel'
    | 'dataApprovalWorkflow'
    | 'dataElement'
    | 'dataElementGroup'
    | 'dataElementGroupSet'
    | 'dataSet'
    | 'document'
    | 'eventChart'
    | 'eventFilter'
    | 'eventReport'
    | 'eventVisualization'
    | 'expressionDimensionItem'
    | 'externalMapLayer'
    | 'identifiableObject'
    | 'identifiableObject'
    | 'identifiableObject'
    | 'indicator'
    | 'indicatorGroup'
    | 'indicatorGroupSet'
    | 'interpretation'
    | 'legendSet'
    | 'map'
    | 'optionGroup'
    | 'optionGroupSet'
    | 'optionSet'
    | 'organisationUnitGroup'
    | 'organisationUnitGroupSet'
    | 'predictorGroup'
    | 'program'
    | 'programIndicator'
    | 'programIndicatorGroup'
    | 'programStage'
    | 'programStageWorkingList'
    | 'relationshipType'
    | 'report'
    | 'route'
    | 'sqlView'
    | 'trackedEntityAttribute'
    | 'trackedEntityFilter'
    | 'trackedEntityType'
    | 'userGroup'
    | 'userRole'
    | 'validationRule'
    | 'validationRuleGroup'
    | 'visualization'

export interface SharingDialogInitialSharingSettings {
    allowPublic: boolean
    groups?: SharingObject[]
    name?: string
    public?: SharingAccess
    users?: SharingObject[]
}

export interface SharingDialogProps {
    /**
     * The id of the object to share
     */
    id: string
    /**
     * The type of object to share
     */
    type: SharingType
    /**
     * Used to seed the component with data to show whilst loading
     */
    initialSharingSettings?: SharingDialogInitialSharingSettings
    dataSharing?: boolean
    cascadeDashboardSharing?: boolean
    onClose?: ModalOnCloseEventHandler
    onError?: (error: any) => void
    onSave?: () => void
}

export const SharingDialog: React.FC<SharingDialogProps>
