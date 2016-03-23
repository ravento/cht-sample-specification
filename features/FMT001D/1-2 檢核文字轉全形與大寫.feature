Feature: 1-2 檢核文字轉全形與大寫

  In order to 文字半型轉全型，文字小寫轉大寫
  As 使用者
  I want 透過文字的格式轉換標籤  
    
  @watch
  Scenario: 數字與文字的格式轉換(文字)
    Given 開始進行輸入欄位文字測試
    When 填入文字欄位轉全型"abc"
    And 填入文字欄位小寫轉大寫"abc"
    Then 轉換後的結果為轉全型後的"ａｂｃ"與小寫轉大寫後的"ABC"