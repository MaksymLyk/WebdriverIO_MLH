const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');
const data = require('../../data/testData.json');
const inputValues4 = require('../../helpers/inputValues4');
const inputValues4andClick = require('../../helpers/inputValues4andClick');
const path = require('path');


    describe('Image upload', function () {

        it('TC-024  Image is uploading', function () {
            browser.url('');
            inputValues4(data.name, data.gender.he, data.age,data.storyType);
             browser.pause(2000);
             const inputDiv = $('.ant-upload input');
             const SubmitButton = $(sel.create);
             const filePath = path.join(__dirname, '../../data/qa-course.jpg');
             const removeFilePath = browser.uploadFile(filePath);
             browser.execute(function (){
                 document.getElementsByTagName('input')[6].style.display = 'block';
             });
             inputDiv.waitForDisplayed();
             browser.pause(2000);
             inputDiv.setValue(removeFilePath);
             browser.pause(2000);
             SubmitButton.click();
             browser.pause(3000);
             const btn = $(sel.tryAgain).isDisplayed();
             expect(btn).toEqual(true);
        });
    });