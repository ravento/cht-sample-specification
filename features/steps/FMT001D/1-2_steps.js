module.exports = function() {
    this.Given(/^開始進行輸入欄位文字測試$/, function () {  
                       
    });
    this.When(/^填入文字欄位轉全型"([^"]*)"$/, function (word1) {        
        browser.waitForExist('#word1');
        browser.setValue('input[name="word1"]', word1);
    });
    this.When(/^填入文字欄位小寫轉大寫"([^"]*)"$/, function (word2) {        
        browser.waitForExist('#word2');
        browser.setValue('input[name="word2"]', word2);
    });
    this.Then(/^轉換後的結果為轉全型後的"([^"]*)"與小寫轉大寫後的"([^"]*)"$/, function (result1,result2) {
        expect(browser.getValue('#word1')).toEqual(result1);        
        expect(browser.getValue('#word2')).toEqual(result2);
    });
};

