Feature: Emoticon parsing

  Scenario Outline: Emoticons strings
      Given there is a text string of <string>
      And the string is not preceded immediately by a non-space character
      Then the parsed text string will be rendered as <result>

      Examples:
          | string | result                 |
          | :)     | <span>\u{1F642}</span> |
          | :-)    | <span>\u{1F642}</span> |
          | :(     | <span>\u{2639}</span>  |
          | :-(    | <span>\u{2639}</span>  |
          | :+1    | <span>\u{1F44D}</span> |
          | :-1    | <span>\u{1F44E}</span> |
