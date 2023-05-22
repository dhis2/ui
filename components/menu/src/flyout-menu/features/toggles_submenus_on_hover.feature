Feature: The FlyoutMenu toggles SubMenus on hover when openSubmenuOnHover is enabled

    Scenario: a FlyoutMenu with two SubMenus and openSubmenuOnHover enabled responds to hover
        Given a FlyoutMenu with two SubMenus is rendered
        When the user hovers the first SubMenu anchor
        Then first SubMenu is visible
        When the user hovers the second SubMenu anchor
        Then second SubMenu is visible
        And the first SubMenu is not rendered

    Scenario: a FlyoutMenu with two SubMenus and openSubmenuOnHover enabled ignores clicks
        Given a FlyoutMenu with two SubMenus is rendered
        When the user hovers the first SubMenu anchor
        Then first SubMenu is visible
        When the user clicks the first SubMenu anchor after the hover
        # Menu should not close due to a click
        Then first SubMenu is visible
