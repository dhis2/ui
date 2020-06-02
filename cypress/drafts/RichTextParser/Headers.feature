Feature: Header items parsing

  Scenario Outline: Headers
    Given there is a text string of <string>
    Then the parsed text will be rendered as <result>

    Examples:
      | string        | result             |
      | # sky         | <h1>sky</h1>       |
      | ## sky        | <h2>sky</h2>       |
      | ### sky       | <h3>sky</h3>       |
      | #### sky      | <h4>sky</h4>       |
      | ##### sky     | <h5>sky</h5>       |
      | ###### sky    | <h6>sky</h6>       |
      | the # sky     | the # sky          |
      | #sky          | #sky               |
      | ### the # sky | <h3>the # sky</h3> |
