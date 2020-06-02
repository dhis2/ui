Feature: Automatic url detection

  Scenario Outline: Automatic URL detection
      Given there is a text string that contains the URL of <URL>
      And the URL is not preceded or followed immediately by a non-space character
      Then the rendered URL is a <result>

      Examples:
        | URL                                        | result                                                                                                                                        |
        | duck.com                                   | <a href="http://duck.com" target="_blank" rel="noopener noreferrer">duck.com</a>                                                              |
        | www.duck.com                               | <a href="http://www.duck.com" target="_blank" rel="noopener noreferrer">www.duck.com</a>                                                      |
        | https://www.eff.org/                       | <a href="https://www.eff.org/" target="_blank" rel="noopener noreferrer">https://www.eff.org/</a>                                             |
        | https://www.eff.org/about                  | <a href="https://www.eff.org/about" target="_blank" rel="noopener noreferrer">https://www.eff.org/about</a>                                   |
        | act.eff.org                                | <a href="http://act.eff.org" target="_blank" rel="noopener noreferrer">act.eff.org</a>                                                        |
        | https://www.eff.org/events/list?type=event | <a href="https://www.eff.org/events/list?type=event" target="_blank" rel="noopener noreferrer">https://www.eff.org/events/list?type=event</a> |
        | ef*f*.org                                  | <a href="http://ef*f*.org" target="_blank" rel="noopener noreferrer">ef*f*.org</a>                                                            |
        | e_f_f.org                                  | <a href="http://e_f_f.org" target="_blank" rel="noopener noreferrer">e_f_f.org</a>                                                            |
        | example.com/path_to                        | <a href="http://example.com/path_to" target="_blank" rel="noopener noreferrer">example.com/path_to</a>                                        |
        | notion.so                                  | <a href="http://notion.so" target="_blank" rel="noopener noreferrer">notion.so</a>                                                            |
