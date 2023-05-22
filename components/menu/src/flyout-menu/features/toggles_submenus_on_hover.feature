Feature: The FlyoutMenu toggles SubMenus

    Scenario: a FlyoutMenu with two SubMenus and openSubmenuOnHover enabled
        Given a FlyoutMenu with two SubMenus is rendered
        When the user hovers the first SubMenu anchor
        Then first SubMenu is visible
        When the user hovers the second SubMenu anchor
        Then second SubMenu is visible
        And the first SubMenu is not rendered
