Feature: Text style parsing

  Scenario Outline: String wrapped by tags
      Given there is a text string preceded by <string>
      Then the parsed text will be rendered as <result>

      Examples:
          | string       | result                                 |
          | *sky*        | <strong>sky</strong>                   |
          | _sky_        | <em>sky</em>                           |
          | *_sky_*      | <strong><em>sky</em></strong>          |
          | *_sky*_      | *<em>sky*</em>                         |
          | * sky *      | * sky *                                |
          | **sky**      | <strong><strong>sky</strong></strong>  |
          | _sky*        | _sky*                                  |
          | _*sky*_      | <em><strong>sky</strong></em>          |
          | _*_sky_*_    | <em><strong><em>sky</em></strong></em> |
          | *the sky*    | <strong>the sky</strong>               |
          | _the *sky*_  | <em>the <strong>sky</strong></em>      |
          | *_the* _sky* | <strong><em>the</strong> </em>sky*     |
