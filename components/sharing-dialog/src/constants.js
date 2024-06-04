/**
 * Access types
 */

export const ACCESS_NONE = 'ACCESS_NONE'
export const ACCESS_VIEW_ONLY = 'ACCESS_VIEW_ONLY'
export const ACCESS_VIEW_AND_EDIT = 'ACCESS_VIEW_AND_EDIT'

/**
 * Sharing targets
 */

export const SHARE_TARGET_EXTERNAL = 'SHARE_TARGET_EXTERNAL'
export const SHARE_TARGET_PUBLIC = 'SHARE_TARGET_PUBLIC'
export const SHARE_TARGET_USER = 'SHARE_TARGET_USER'
export const SHARE_TARGET_GROUP = 'SHARE_TARGET_GROUP'

/**
 * Sharing dialog types
 */

export const DIALOG_TYPES = {
    AGGREGATE_DATA_EXCHANGE: 'aggregateDataExchange',
    API_TOKEN: 'apiToken',
    ATTRIBUTE: 'attribute',
    CATEGORY: 'category',
    CATEGORY_COMBO: 'categoryCombo',
    CATEGORY_OPTION: 'categoryOption',
    CATEGORY_OPTION_GROUP: 'categoryOptionGroup',
    CATEGORY_OPTION_GROUP_SET: 'categoryOptionGroupSet',
    CONSTANT: 'constant',
    DASHBOARD: 'dashboard',
    DATA_APPROVAL_LEVEL: 'dataApprovalLevel',
    DATA_APPROVAL_WORKFLOW: 'dataApprovalWorkflow',
    DATA_ELEMENT: 'dataElement',
    DATA_ELEMENT_GROUP: 'dataElementGroup',
    DATA_ELEMENT_GROUP_SET: 'dataElementGroupSet',
    DATA_SET: 'dataSet',
    DOCUMENT: 'document',
    EVENT_CHART: 'eventChart',
    EVENT_FILTER: 'eventFilter',
    EVENT_REPORT: 'eventReport',
    EVENT_VISUALIZATION: 'eventVisualization',
    EXPRESSION_DIMENSION_ITEM: 'expressionDimensionItem',
    EXTERNAL_MAP_LAYER: 'externalMapLayer',
    IDENTIFIABLE_OBJECT: 'identifiableObject',
    INDICATOR: 'indicator',
    INDICATOR_GROUP: 'indicatorGroup',
    INDICATOR_GROUP_SET: 'indicatorGroupSet',
    INTERPRETATION: 'interpretation',
    LEGEND_SET: 'legendSet',
    MAP: 'map',
    OPTION_GROUP: 'optionGroup',
    OPTION_GROUP_SET: 'optionGroupSet',
    OPTION_SET: 'optionSet',
    ORGANISATION_UNIT_GROUP: 'organisationUnitGroup',
    ORGANISATION_UNIT_GROUP_SET: 'organisationUnitGroupSet',
    PREDICTOR_GROUP: 'predictorGroup',
    PROGRAM: 'program',
    PROGRAM_INDICATOR: 'programIndicator',
    PROGRAM_INDICATOR_GROUP: 'programIndicatorGroup',
    PROGRAM_STAGE: 'programStage',
    PROGRAM_STAGE_WORKING_LIST: 'programStageWorkingList',
    RELATIONSHIP_TYPE: 'relationshipType',
    REPORT: 'report',
    SQL_VIEW: 'sqlView',
    TRACKED_ENTITY_ATTRIBUTE: 'trackedEntityAttribute',
    TRACKED_ENTITY_FILTER: 'trackedEntityFilter',
    TRACKED_ENTITY_TYPE: 'trackedEntityType',
    USER_GROUP: 'userGroup',
    USER_ROLE: 'userRole',
    VALIDATION_RULE: 'validationRule',
    VALIDATION_RULE_GROUP: 'validationRuleGroup',
    VISUALIZATION: 'visualization',
}
export const DIALOG_TYPES_LIST = Object.values(DIALOG_TYPES)
