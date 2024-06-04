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

export const ACCESS = 'access'
export const AGGREGATE_DATA_EXCHANGE = 'aggregateDataExchange'
export const ANALYTICS_PERIOD_BOUNDARY = 'analyticsPeriodBoundary'
export const ANALYTICS_TABLE_HOOK = 'analyticsTableHook'
export const API_TOKEN = 'apiToken'
export const ATTRIBUTE = 'attribute'
export const ATTRIBUTE_VALUE = 'attributeValue'
export const AXIS = 'axis'
export const CATEGORY = 'category'
export const CATEGORY_COMBO = 'categoryCombo'
export const CATEGORY_DIMENSION = 'categoryDimension'
export const CATEGORY_OPTION = 'categoryOption'
export const CATEGORY_OPTION_COMBO = 'categoryOptionCombo'
export const CATEGORY_OPTION_GROUP = 'categoryOptionGroup'
export const CATEGORY_OPTION_GROUP_SET = 'categoryOptionGroupSet'
export const CATEGORY_OPTION_GROUP_SET_DIMENSION =
    'categoryOptionGroupSetDimension'
export const CONSTANT = 'constant'
export const DASHBOARD = 'dashboard'
export const DASHBOARD_ITEM = 'dashboardItem'
export const DATA_APPROVAL_LEVEL = 'dataApprovalLevel'
export const DATA_APPROVAL_WORKFLOW = 'dataApprovalWorkflow'
export const DATA_ELEMENT = 'dataElement'
export const DATA_ELEMENT_DIMENSION = 'dataElementDimension'
export const DATA_ELEMENT_GROUP = 'dataElementGroup'
export const DATA_ELEMENT_GROUP_SET = 'dataElementGroupSet'
export const DATA_ELEMENT_GROUP_SET_DIMENSION = 'dataElementGroupSetDimension'
export const DATA_ELEMENT_OPERAND = 'dataElementOperand'
export const DATA_ENTRY_FORM = 'dataEntryForm'
export const DATA_INPUT_PERIOD = 'dataInputPeriod'
export const DATA_SET = 'dataSet'
export const DATA_SET_ELEMENT = 'dataSetElement'
export const DATA_SET_NOTIFICATION_TEMPLATE = 'dataSetNotificationTemplate'
export const DATA_STORE = 'dataStore'
export const DOCUMENT = 'document'
export const EVENT_CHART = 'eventChart'
export const EVENT_FILTER = 'eventFilter'
export const EVENT_HOOK = 'eventHook'
export const EVENT_REPETITION = 'eventRepetition'
export const EVENT_REPORT = 'eventReport'
export const EVENT_VISUALIZATION = 'eventVisualization'
export const EXPRESSION = 'expression'
export const EXPRESSION_DIMENSION_ITEM = 'expressionDimensionItem'
export const EXTERNAL_FILE_RESOURCE = 'externalFileResource'
export const EXTERNAL_MAP_LAYER = 'externalMapLayer'
export const FILE_RESOURCE = 'fileResource'
export const ICON = 'icon'
export const INDICATOR = 'indicator'
export const INDICATOR_GROUP = 'indicatorGroup'
export const INDICATOR_GROUP_SET = 'indicatorGroupSet'
export const INDICATOR_TYPE = 'indicatorType'
export const INTERPRETATION = 'interpretation'
export const INTERPRETATION_COMMENT = 'interpretationComment'
export const ITEM_CONFIG = 'itemConfig'
export const JOB_CONFIGURATION = 'jobConfiguration'
export const LEGEND = 'legend'
export const LEGEND_DEFINITIONS = 'legendDefinitions'
export const LEGEND_SET = 'legendSet'
export const MAP = 'map'
export const MAP_VIEW = 'mapView'
export const MESSAGE_CONVERSATION = 'messageConversation'
export const METADATA_VERSION = 'metadataVersion'
export const MIN_MAX_DATA_ELEMENT = 'minMaxDataElement'
export const O_AUTH_2_CLIENT = 'oAuth2Client'
export const OBJECT_STYLE = 'objectStyle'
export const OPTION = 'option'
export const OPTION_GROUP = 'optionGroup'
export const OPTION_GROUP_SET = 'optionGroupSet'
export const OPTION_SET = 'optionSet'
export const ORGANISATION_UNIT = 'organisationUnit'
export const ORGANISATION_UNIT_GROUP = 'organisationUnitGroup'
export const ORGANISATION_UNIT_GROUP_SET = 'organisationUnitGroupSet'
export const ORGANISATION_UNIT_GROUP_SET_DIMENSION =
    'organisationUnitGroupSetDimension'
export const ORGANISATION_UNIT_LEVEL = 'organisationUnitLevel'
export const OUTLIER_ANALYSIS = 'outlierAnalysis'
export const PREDICTOR = 'predictor'
export const PREDICTOR_GROUP = 'predictorGroup'
export const PROGRAM = 'program'
export const PROGRAM_DATA_ELEMENT = 'programDataElement'
export const PROGRAM_INDICATOR = 'programIndicator'
export const PROGRAM_INDICATOR_GROUP = 'programIndicatorGroup'
export const PROGRAM_NOTIFICATION_TEMPLATE = 'programNotificationTemplate'
export const PROGRAM_RULE = 'programRule'
export const PROGRAM_RULE_ACTION = 'programRuleAction'
export const PROGRAM_RULE_VARIABLE = 'programRuleVariable'
export const PROGRAM_SECTION = 'programSection'
export const PROGRAM_STAGE = 'programStage'
export const PROGRAM_STAGE_DATA_ELEMENT = 'programStageDataElement'
export const PROGRAM_STAGE_SECTION = 'programStageSection'
export const PROGRAM_STAGE_WORKING_LIST = 'programStageWorkingList'
export const PROGRAM_TRACKED_ENTITY_ATTRIBUTE = 'programTrackedEntityAttribute'
export const PROGRAM_TRACKED_ENTITY_ATTRIBUTE_DIMENSION_ITEM =
    'programTrackedEntityAttributeDimensionItem'
export const PROPOSAL = 'proposal'
export const PUSH_ANALYSIS = 'pushAnalysis'
export const RELATIONSHIP = 'relationship'
export const RELATIONSHIP_CONSTRAINT = 'relationshipConstraint'
export const RELATIONSHIP_ITEM = 'relationshipItem'
export const RELATIONSHIP_TYPE = 'relationshipType'
export const REPORT = 'report'
export const REPORTING_RATE = 'reportingRate'
export const ROUTE = 'route'
export const SECTION = 'section'
export const SERIES_KEY = 'seriesKey'
export const SHARING = 'sharing'
export const SMS_COMMAND = 'smsCommand'
export const SQL_VIEW = 'sqlView'
export const TRACKED_ENTITY_ATTRIBUTE = 'trackedEntityAttribute'
export const TRACKED_ENTITY_ATTRIBUTE_VALUE = 'trackedEntityAttributeValue'
export const TRACKED_ENTITY_DATA_ELEMENT_DIMENSION =
    'trackedEntityDataElementDimension'
export const TRACKED_ENTITY_INSTANCE_FILTER = 'trackedEntityInstanceFilter'
export const TRACKED_ENTITY_TYPE = 'trackedEntityType'
export const TRACKED_ENTITY_TYPE_ATTRIBUTE = 'trackedEntityTypeAttribute'
export const USER = 'user'
export const USER_ACCESS = 'userAccess'
export const USER_CREDENTIALS = 'userCredentials'
export const USER_GROUP = 'userGroup'
export const USER_GROUP_ACCESS = 'userGroupAccess'
export const USER_ROLE = 'userRole'
export const VALIDATION_NOTIFICATION_TEMPLATE = 'validationNotificationTemplate'
export const VALIDATION_RESULT = 'validationResult'
export const VALIDATION_RULE = 'validationRule'
export const VALIDATION_RULE_GROUP = 'validationRuleGroup'
export const VISUALIZATION = 'visualization'

export const DIALOG_TYPES = [
    ACCESS,
    AGGREGATE_DATA_EXCHANGE,
    ANALYTICS_PERIOD_BOUNDARY,
    ANALYTICS_TABLE_HOOK,
    API_TOKEN,
    ATTRIBUTE,
    ATTRIBUTE_VALUE,
    AXIS,
    CATEGORY,
    CATEGORY_COMBO,
    CATEGORY_DIMENSION,
    CATEGORY_OPTION,
    CATEGORY_OPTION_COMBO,
    CATEGORY_OPTION_GROUP,
    CATEGORY_OPTION_GROUP_SET,
    CATEGORY_OPTION_GROUP_SET_DIMENSION,
    CONSTANT,
    DASHBOARD,
    DASHBOARD_ITEM,
    DATA_APPROVAL_LEVEL,
    DATA_APPROVAL_WORKFLOW,
    DATA_ELEMENT,
    DATA_ELEMENT_DIMENSION,
    DATA_ELEMENT_GROUP,
    DATA_ELEMENT_GROUP_SET,
    DATA_ELEMENT_GROUP_SET_DIMENSION,
    DATA_ELEMENT_OPERAND,
    DATA_ENTRY_FORM,
    DATA_INPUT_PERIOD,
    DATA_SET,
    DATA_SET_ELEMENT,
    DATA_SET_NOTIFICATION_TEMPLATE,
    DATA_STORE,
    DOCUMENT,
    EVENT_CHART,
    EVENT_FILTER,
    EVENT_HOOK,
    EVENT_REPETITION,
    EVENT_REPORT,
    EVENT_VISUALIZATION,
    EXPRESSION,
    EXPRESSION_DIMENSION_ITEM,
    EXTERNAL_FILE_RESOURCE,
    EXTERNAL_MAP_LAYER,
    FILE_RESOURCE,
    ICON,
    INDICATOR,
    INDICATOR_GROUP,
    INDICATOR_GROUP_SET,
    INDICATOR_TYPE,
    INTERPRETATION,
    INTERPRETATION_COMMENT,
    ITEM_CONFIG,
    JOB_CONFIGURATION,
    LEGEND,
    LEGEND_DEFINITIONS,
    LEGEND_SET,
    MAP,
    MAP_VIEW,
    MESSAGE_CONVERSATION,
    METADATA_VERSION,
    MIN_MAX_DATA_ELEMENT,
    O_AUTH_2_CLIENT,
    OBJECT_STYLE,
    OPTION,
    OPTION_GROUP,
    OPTION_GROUP_SET,
    OPTION_SET,
    ORGANISATION_UNIT,
    ORGANISATION_UNIT_GROUP,
    ORGANISATION_UNIT_GROUP_SET,
    ORGANISATION_UNIT_GROUP_SET_DIMENSION,
    ORGANISATION_UNIT_LEVEL,
    OUTLIER_ANALYSIS,
    PREDICTOR,
    PREDICTOR_GROUP,
    PROGRAM,
    PROGRAM_DATA_ELEMENT,
    PROGRAM_INDICATOR,
    PROGRAM_INDICATOR_GROUP,
    PROGRAM_NOTIFICATION_TEMPLATE,
    PROGRAM_RULE,
    PROGRAM_RULE_ACTION,
    PROGRAM_RULE_VARIABLE,
    PROGRAM_SECTION,
    PROGRAM_STAGE,
    PROGRAM_STAGE_DATA_ELEMENT,
    PROGRAM_STAGE_SECTION,
    PROGRAM_STAGE_WORKING_LIST,
    PROGRAM_TRACKED_ENTITY_ATTRIBUTE,
    PROGRAM_TRACKED_ENTITY_ATTRIBUTE_DIMENSION_ITEM,
    PROPOSAL,
    PUSH_ANALYSIS,
    RELATIONSHIP,
    RELATIONSHIP_CONSTRAINT,
    RELATIONSHIP_ITEM,
    RELATIONSHIP_TYPE,
    REPORT,
    REPORTING_RATE,
    ROUTE,
    SECTION,
    SERIES_KEY,
    SHARING,
    SMS_COMMAND,
    SQL_VIEW,
    TRACKED_ENTITY_ATTRIBUTE,
    TRACKED_ENTITY_ATTRIBUTE_VALUE,
    TRACKED_ENTITY_DATA_ELEMENT_DIMENSION,
    TRACKED_ENTITY_INSTANCE_FILTER,
    TRACKED_ENTITY_TYPE,
    TRACKED_ENTITY_TYPE_ATTRIBUTE,
    USER,
    USER_ACCESS,
    USER_CREDENTIALS,
    USER_GROUP,
    USER_GROUP_ACCESS,
    USER_ROLE,
    VALIDATION_NOTIFICATION_TEMPLATE,
    VALIDATION_RESULT,
    VALIDATION_RULE,
    VALIDATION_RULE_GROUP,
    VISUALIZATION,
]
