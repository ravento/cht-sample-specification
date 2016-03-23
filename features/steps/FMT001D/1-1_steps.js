module.exports = function() {
    this.Given(/^進入標準範例FMT001D數字與文字的格式轉換$/, function () {
        browser.url('http://localhost:8080/FMT001D/');  
        // browser.click('a[href="FMT001D/"]');        
    });
    this.When(/^填入數字欄位blur"([^"]*)"$/, function (num1) {        
        browser.waitForExist('#num1');
        browser.setValue('input[name="num1"]', num1);
    });
    this.When(/^填入數字欄位change"([^"]*)"$/, function (num2) {        
        browser.waitForExist('#num2');
        browser.setValue('input[name="num2"]', num2);
    });
    
    this.Then(/^轉換後的結果為"([^"]*)"$/, function (result) {
        expect(browser.getValue('#num1')).toEqual(result);        
        expect(browser.getValue('#num2')).toEqual(result);
    });

    this.Given(/^開始進行輸入欄位小數點測試$/, function () {  
                       
    });
    this.When(/^填入數字欄位blur小數點"([^"]*)"$/, function (num3) {        
        browser.waitForExist('#num3');
        browser.setValue('input[name="num3"]', num3);
    });
    this.When(/^填入數字欄位change小數點"([^"]*)"$/, function (num4) {        
        browser.waitForExist('#num4');
        browser.setValue('input[name="num4"]', num4);
    });
    this.Then(/^轉換後的結果為包含小數點"([^"]*)"$/, function (result) {
        expect(browser.getValue('#num3')).toEqual(result);        
        expect(browser.getValue('#num4')).toEqual(result);
    });
};

