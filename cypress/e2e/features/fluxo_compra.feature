Feature: Compra de produtos no SauceDemo

    Scenario: Usuário finaliza compra com sucesso
        Given que estou na página de login
        When faço login como "standard_user" com senha "secret_sauce"
        And adiciono 3 produtos ao carrinho
        And finalizo o checkout com os dados "Lucas", "QA", "30140-000"
        Then devo ver a mensagem "THANK YOU FOR YOUR ORDER"