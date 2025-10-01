///<reference types="cypress" />

//const { each } = require("hammerjs")
/**
 * @param {number} collectionNumer - number element from the product list at the Collection tab
 * @param {number} favoritesNumer - number element from the product list to be adding to the favorite list
 * @param {number} productNumer - number element from the product list to be adding to the basket
 * @param {string} size - S, M, L or(0,1,2)
 */
function addFewPossition_toBacked_fromNewCollectioTab(collectionNumer, favoritesNumer, productNumer, size) {
         if (typeof collectionNumer !== 'number') {
        throw new Error('collectionNumber shoul be Number');
        }
    
        cy.get('.s-nav').find('li').eq(1).click()         //go to the New Collection tab
        cy.get('.s-container').find('[class="s-feed__list swiper-wrapper"]').find('a').eq(collectionNumer).click() //choose category
        cy.get('.s-container').find('.s-catalog__list').find('.s-catalog__item').eq(favoritesNumer).find('.s-product__image-wrapper').find('[class="s-product__favorites-link"]').click() //add to favorites
        //-----add to the cart - click on it, choose size, click on button-----
        cy.get('.s-container').find('.s-catalog__list').find('.s-catalog__item').eq(productNumer).click()
        cy.wait(200)
        //cy.get('.s-card__description').find('.s-card__size').find('label').eq(sizeNumer).click() //or
        cy.get('.s-card__description').find('.s-card__size').find('label').contains(size).click()
        cy.get('.s-card__btns').find('[class="s-btn -lg -dark"]').should('contain', 'DODAJ DO KOSZYKA').click()
}

describe('test Solmar webSite', () => {

    beforeEach('login', () => {
        cy.visit('https://solmar-shop.pl/')
    })

    it('verify Top menu', () => {
        cy.get('.s-header__inner').find('.s-header__logo')
        cy.get('[class="s-nav"]').find('li').eq(0).contains('Sklep')
        cy.get('[class="s-nav"]').find('li').eq(1).contains('New collection')
        cy.get('[class="s-nav"]').find('li').eq(2).contains('Top selling')
        cy.get('[class="s-nav"]').find('li').eq(3).contains('SALE')
        cy.get('[class="s-nav"]').find('li').eq(4).contains('Info')

        cy.wait(200)
        cy.get('[class="s-nav"]').find('li').eq(0).click()
        cy.get('[class="s-main"]').find('h1').contains('Katalog odzieży damskiej')
        cy.wait(200)
        cy.get('[class="s-nav"]').find('li').eq(1).click()
        cy.get('[class="s-main"]').find('h1').contains('Nowa kolekcja')
        cy.wait(200)
        cy.get('[class="s-nav"]').find('li').eq(2).click()
        cy.get('[class="s-main"]').find('h1').contains('Popularne modele odzieży damskiej')
        cy.wait(200)
        cy.get('[class="s-nav"]').find('li').eq(3).click()
        cy.get('[class="s-main"]').find('h1').contains('Wyprzedaż odzieży damskiej')
        cy.wait(200)
        cy.get('[class="s-nav"]').find('li').eq(4).click()        
    })

    it('verify Top menu - short version', () => {
        cy.get('.s-header__inner').find('.s-header__logo')
        
        const navArray = ['Sklep', 'New collection', 'Top selling', 'SALE', 'Info']
        for (let i = 0; i < 4; i++){
            cy.get('[class="s-nav"]').find('li').eq(i).should('contain.text', navArray[i])
        }

        const menuArray = ['Katalog odzieży damskiej', 'Nowa kolekcja', 'Popularne modele odzieży damskiej', 'Wyprzedaż odzieży damskiej', 'Katalog odzieży damskiej']
        for (let i = 0; i <= 4; i++){
            cy.get('[class="s-nav"]').find('li').eq(i).click()
            cy.get('[class="s-main"]').find('h1').contains(menuArray[i])
            cy.wait(200)
        }
        
    })

    it('verify "Login form" ', () => {
        
        cy.get('[class="s-header__inner"]').find('[class="s-header__item -account"]').click() //choose "My account"
    
        cy.get('[class="s-modal__body"]').find('[class="s-modal__title s-h2"]').contains('Moje konto') 
        cy.get('.popup-content').find('.s-modal__tabs-nav').find('a').eq(0).contains('Zaloguj sie').click()
        //-----email-----
        cy.get('[class="s-modal__label"]').find('[class="s-label__title"]').contains('E-mail:') 
        cy.get('.s-modal__label').find('.s-label').find('.s-label__body input[placeholder="Twój E-mail"]').should('have.attr', 'placeholder', 'Twój E-mail')
        //-----password-----
        cy.get('[class="s-modal__label"]').find('[class="s-label__title"]').contains('Hasło:')
        cy.get('.s-modal__label').find('.s-label').find('.s-label__body input[type="password"]').should('have.attr', 'type', 'password')
        //-----button-----
        cy.get('.s-modal__form').find('a').contains('Zapomniałeś hasła?')
        cy.get('.s-modal__form').find('input[value="Zaloguj sie"]').should('have.attr', 'value', 'Zaloguj sie')
        //-----click Login with empty fields-----
        cy.get('.s-modal__form').find('input[name="Login"]').click()
        //-----check that need to input name-----
        //cy.get('.s-modal__label').find('.s-label').find('.s-label__body input').should('have.css', 'color', 'rgb(235, 92, 93)')
        cy.get('.s-modal__label').find('.s-label').eq(0).find('.s-label__error').contains('Nieprawidłowy login lub hasło')
        //-----input name and e-mail fields and click Login button-----
        cy.get('[class="s-label"]').find('input').eq(0).type('asdf')
        cy.get('[class="s-label"]').find('input').eq(1).type('asdf')
        //cy.get('.s-modal__form').find('input[name="Login"]').click()

    })

    it('verify "Registration form"', () => {

        cy.get('[class="s-header__inner"]').find('[class="s-header__item -account"]').click() //choose "My account"
        //-----Go to Registation form-----
        cy.get('.popup-content').find('.s-modal__tabs-nav').find('a').eq(1).contains('Rejestracja').click() 
        
        //-----Check titles-----
        const label_titleArray = ['Imię:', 'Nazwisko:', 'Adres e-mail:', 'Hasło:', 'Potwierdzenie hasła:']
        label_titleArray.forEach(title => {
            cy.get('.s-modal__label').find('.s-label').contains(title)
        })

        cy.get('.s-modal__label').find('.s-label').find('.s-label__title').contains('(Hasło musi zawierać przynajmniej 6 znaków.)')
        cy.get('.s-modal__form').find('input[value="Rejestracja"]').should('have.attr', 'value', 'Rejestracja')
        
        //-----check fields-----
        const fields = [
    { placeholder: 'Twoje imię', type: 'text' },
    { placeholder: 'Twoje nazwisko', type: 'text' },
    { placeholder: 'Twój email', type: 'text' },
    { placeholder: '******', type: 'password' },
    { placeholder: '******', type: 'password' }
    ]

    fields.forEach(field => {
        cy.get('.s-modal__label').find('.s-label').find(`.s-label__body input[placeholder="${field.placeholder}"]`).should('have.attr', 'type', field.type)
    })
    // ----- click to "Registration" button (fields are empty) - expected to see error messages -----
        cy.get('.s-modal__form').find('input[value="Rejestracja"]').should('have.attr', 'value', 'Rejestracja').click()
        cy.get('.s-modal__label').find('.s-label').find('.s-label__error').contains('Pole "Adres e-mail" wymagane')
        cy.get('.s-modal__label').find('.s-label__error').contains('Pole "Hasło" wymagane')
        cy.get('.s-modal__label').find('.s-label').find('.s-label__error').contains('Pole "Potwierdzenie hasła" wymagane')
    
        //cy.get('button[type="submit"]').should('be.visible').and('contain.text', 'Zarejestruj się');
        
    })

    it.only('adding products to the basket (cart)', () => {
        
        addFewPossition_toBacked_fromNewCollectioTab(2, 1, 2, 'M')
        
        addFewPossition_toBacked_fromNewCollectioTab(3, 1, 0, 'S')
        
        addFewPossition_toBacked_fromNewCollectioTab(6, 4, 0, 'M')
    })

    it('verify "Sklep" drop down menu', () => {
        
        const menuStructure = [
            {
                title: 'Limited сollection',
                items: ['BACK TO CITY', 'DENIM DROP FW’25/26', 'BODY FIT Collection']
            },
            {
                title: 'Odzież',
                items: ['', '']
            },
            {
                title: 'Akcesoria',
                items: ['Paski']
            }
        ]
        //-----choose in Top menu - Sklep-----
        cy.get('.s-nav').find('li').eq(0).find('.s-nav-dropdown__navs nav') 
            .each(($nav, index) => {
                const groupMenu = menuStructure[index]
            
                // -----verify the titles of each group-----
                cy.wrap($nav).find('div').first().should('contain.text', groupMenu.title) 
                //-----verify elements inside the each group-----
                groupMenu.items.forEach((itemText, itemIndex) => {
                    cy.wrap($nav).find('a').eq(itemIndex).should('contain.text', itemText)
                })
            })
    })

})
