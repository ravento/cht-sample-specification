Feature: 1-1 檢核數字千分位與小數點

  In order to 數字自動加上千分位符號與小數點
  As 使用者
  I want 透過數字的格式轉換標籤  

  @watch
  Scenario: 數字與文字的格式轉換(數字)
    Given 進入標準範例FMT001D數字與文字的格式轉換
    When 填入數字欄位blur"12345"
    And 填入數字欄位change"12345"
    Then 轉換後的結果為"12,345"

  @watch
  Scenario: 數字與文字的格式轉換(小數點)
    Given 開始進行輸入欄位小數點測試
    When 填入數字欄位blur小數點"12345"
    And 填入數字欄位change小數點"12345"
    Then 轉換後的結果為包含小數點"12,345.00000"