const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');

describe('Inputs', function () { //define suite title by passing a string

    describe('Inputs are displayed', function () { //define sub-suite title by passing a string

        it('TC-014 Name ', function () { //define test title by passing a string
            browser.url('https://qa-apps.netlify.app/app_my_hero'); //open baseUrl

            browser.pause(1000); //just pause to visually see that something is happening on the page
            const name = $(sel.name).isDisplayed();
            expect(name).toEqual(true); //compare {title} (actual) and "MLH trial" (expected)
        });

        it('TC-015 Gender He', function () {
            const gender = $$(sel.gender)[0].isDisplayed();
            expect(gender).toEqual(true);
        });

        it('TC-016 Gender She', function () {
            const gender = $$(sel.gender)[1].isDisplayed();
            expect(gender).toEqual(true);
        });

        it('TC-017 Gender It', function () {
            const gender = $$(sel.gender)[2].isDisplayed();
            expect(gender).toEqual(true);
        });


        it('TC-018 Age', function () {
            const age = $(sel.age).isDisplayed();
            expect(age).toEqual(true);
        });

        it('TC-019 Story', function () {
            const story = $(sel.story).isDisplayed();
            expect(story).toEqual(true);
        });

        it('TC-020 Create', function () {
            const image = $(sel.create).isDisplayed();
            expect(image).toEqual(true);
        });


    });

    describe('Input Placeholders are correct', function () {

    });
})