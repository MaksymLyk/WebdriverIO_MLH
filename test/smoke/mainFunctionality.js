const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');
const data = require('../../data/testData.json');
const inputValues4 = require('../../helpers/inputValues4')

describe('Checking the main functionality', function () {
    describe('Happy path', function () {
        it('TC-021 Create button is clickable after 1-4 are filled in', function () {
            browser.url('');
            const inputName = $(sel.name).setValue(data.name);
            const inputGender = $$(sel.gender)[data.gender.she].click();
            const inputAge = $(sel.age).setValue(data.age);
            const click = $(sel.storyClick).click();
            const inputStory = $$(sel.storyType)[data.storyType].click();
            const create = $(sel.create).isEnabled();
            browser.pause(3000);
            expect(create).toEqual(true);
        });

        it('TC-022 Create button is clickable after 1-4 are filled in with function ', function () {
            browser.url('');
            inputValues4(data.name, data.gender.she, data.age,data.storyType);
            const create = $(sel.create).isEnabled();
            browser.pause(3000);
            expect(create).toEqual(true);
        });
    });
});