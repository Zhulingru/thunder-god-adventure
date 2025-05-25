# 雷震子遇難記 | Thunder God Adventure

## 📖 專案簡介

這是一個以台南歷史文化為背景的互動式解謎遊戲，改編自許丙丁的《小封神》作品。玩家將跟隨雷震子的腳步，走訪台南各大古蹟，解開謎題並了解在地文史。

## 🎮 遊戲特色

- **實境解謎**：結合台南真實地景的解謎遊戲
- **文史教育**：融合台南歷史文化與民俗傳說
- **互動故事**：豐富的角色對話與劇情發展
- **響應式設計**：支援手機與電腦瀏覽

## 🏛️ 遊戲場景

### 測試版內容
1. **萬福庵** - 第一回：與齊天大聖的初次相遇
2. **大天后宮** - 第二回：千里眼順風耳的考驗
3. **普濟殿** - 第三回：蜘蛛精的陷阱
4. **結局** - 故事收尾與和解

### 完整版規劃
5. **風神廟** - 第四回：萬年龜的秘密
6. **藥王廟** - 第五回：仙藥的求取
7. **大團圓** - 第六回：完整結局

## 🚀 線上遊玩

遊戲網址：https://zhulingru.github.io/thunder-god-adventure/

## 💻 技術架構

- **前端**：HTML5 + CSS3 + JavaScript (ES6)
- **資料格式**：JSON
- **部署平台**：GitHub Pages
- **版本控制**：Git

## 📁 專案結構

```
thunder-god-adventure/
├── index.html          # 主要遊戲頁面
├── style.css           # 樣式表（古典廟宇風格，響應式設計）
├── main.js             # 遊戲邏輯（章節渲染、謎題驗證、提示系統）
├── data/
│   └── gameData.json   # 遊戲資料（故事、謎題、對話分段格式）
├── images/             # 圖片資源（章節場景、謎題圖片）
└── README.md           # 專案說明與開發歷程
```

## 🎯 開發原則與需求

### 核心開發理念
- **最小段落更新**：每次只修改最小必要的程式碼段落
- **可擴展性**：架構設計要能輕鬆添加新章節和功能
- **可彈性調整性**：程式碼結構要能快速適應需求變更
- **可維護性**：程式碼要清晰易懂，便於後續維護

### 內容設計原則
- **對話分段規範**：每個角色的話都要獨立成段，避免混雜在同一段落
- **角色標示清楚**：保留說話者標示，如「孫悟空說：」、「雷震子說：」
- **敘述對話分離**：純敘述部分保持完整，只分離角色對話
- **閱讀舒適度優先**：文字間距適當，段落層次分明

### 技術限制與規範
- **程式碼行數限制**：每個分支頁面程式碼控制在 1500 行以內
- **漸進式開發**：先完善第一回，再複製到其他回
- **模組化設計**：功能分離，便於獨立測試和修改
- **文檔同步更新**：每次更新都要記錄在 README 和 AI_NOTE

### 專案定位
- **測試專案**：為未來正式遊戲提供開發經驗
- **學習目標**：建立可重複使用的開發模式
- **技術驗證**：測試各種功能的可行性和最佳實踐

## 📝 開發歷程

### 2024-12-19

#### 初始化階段
- **建立基本架構**：HTML + CSS + JavaScript 基礎結構
- **設置 GitHub Pages**：完成線上部署和 Git 連動
- **實現第一回內容**：萬福庵的故事與謎題功能

#### 確立開發原則
- **最小段落更新**：每次只修改必要的程式碼段落
- **可擴展性**：架構設計便於添加新章節
- **可維護性**：程式碼清晰易懂
- **1500行限制**：控制每個檔案的複雜度
- **漸進式開發**：先完善第一回，再複製其他回

#### 介面框架建立
- **古典廟宇風格**：深色背景 + 金色文字設計
- **響應式佈局**：支援手機和電腦瀏覽
- **卡片式設計**：內容用半透明卡片包裝
- **CSS 變數系統**：便於統一管理顏色主題
- **互動效果**：按鈕懸停、輸入框焦點等

#### 技術決策記錄
- **純前端架構**：無後端依賴，適合 GitHub Pages
- **JSON 資料格式**：便於管理遊戲內容
- **模組化 CSS**：使用 CSS 變數和類別系統
- **文檔整合**：移除重複的 AI_NOTE.md，統一使用 README

#### 圖片系統開發
- **圖片顯示系統**：章節圖片 500x300px，謎題圖片 400x250px
- **佔位設計**：金色邊框，漸層背景，完美置中
- **響應式圖片**：手機自動調整尺寸，保持比例
- **AI 圖片生成**：提供詳細 prompt，用戶成功生成萬福庵場景圖和三寶殿匾額圖

#### 第一回內容完善
- **故事擴展**：從 3 段擴展到 17 段完整劇情
- **角色對話**：豐富雷震子與孫悟空的互動
- **背景設定**：封神戰爭、蓬萊仙島、贔屭失蹤事件
- **謎題改善**：情境化問題設計，三層提示系統
- **章節結尾**：解謎後完整劇情收尾和角色和解
- **流程優化**：「繼續冒險」按鈕自然銜接下一回

#### 需求調整
- **測試版範圍縮減**：從六回縮減為三回 + 結局
- **目標章節**：萬福庵 → 大天后宮 → 普濟殿 → 簡單結局
- **開發重點**：完整的三回劇情體驗，建立可複製的章節模式
- **手機優先設計**：主打手機實境解謎，玩家邊玩邊走訪古蹟

### 2025-01-25

#### 文字排版優化
- **段落間距改善**：增加段落間距，解決文字密集問題
- **互動效果增強**：段落懸停時顯示金色邊框和淡背景
- **章節結尾美化**：專門的結尾區塊，包含「✦ 章節結尾 ✦」標題
- **響應式間距**：針對桌面、手機、小手機調整適當間距
- **閱讀體驗提升**：文字左對齊，更適合中文閱讀習慣
- **視覺層次優化**：改善整體可讀性和視覺舒適度

#### 對話分段優化
- **角色對話獨立**：每個角色的話都分成獨立段落，提升閱讀清晰度
- **說話者標示保留**：維持「孫悟空說：」、「雷震子說：」等標示
- **對話節奏改善**：玩家更容易跟上角色間的對話流程
- **敘述對話分離**：純敘述保持完整，只分離角色對話部分
- **閱讀流暢性**：避免長段落中混雜多個角色的話，減少閱讀困惑

## 🎯 開發計畫

### 測試版目標（三回 + 結局）
- [x] 第一回：萬福庵（內容完整，包含豐富故事、圖片、謎題和結尾）
- [ ] 第二回：大天后宮（千里眼順風耳的考驗）
- [ ] 第三回：普濟殿（蜘蛛精的陷阱）
- [ ] 簡單結局：故事收尾

### 技術完善
- [x] 介面框架（古典廟宇風格）
- [x] 完善第一回內容和謎題
- [x] 建立章節切換機制
- [x] 優化使用者體驗（文字排版改善）

### 未來擴展（正式版）
- [ ] 擴展至完整六回
- [ ] 加入音效與背景音樂
- [ ] 實現多種謎題類型
- [ ] 加入成就系統

## 🤝 貢獻指南

本專案歡迎各種形式的貢獻：
- 🐛 回報 Bug
- 💡 提出新功能建議
- 📝 改善文檔
- 🎨 設計改善

## 📚 參考資料

- 許丙丁《小封神》原著
- 台南市文化資產資料
- 府城歷史古蹟導覽

## 🎨 AI 圖片生成 Prompt

### 萬福庵場景圖片 (`wanfuan.jpg`)
```
A traditional Taiwanese temple called "Wanfuan Temple" (萬福庵) in Tainan, Taiwan. Ancient Chinese architecture with red pillars, curved roof tiles, ornate decorations, and traditional lanterns. Warm golden lighting, atmospheric and mystical mood. The temple should look historic and sacred, with intricate wood carvings and traditional Chinese architectural details. Shot in cinematic style with rich colors and dramatic lighting. 500x300 pixels, landscape orientation.

Style: Traditional Chinese temple architecture, warm golden tones, atmospheric lighting, historic and sacred feeling.
```

### 三寶殿匾額圖片 (`puzzle1.png`)
```
A traditional Chinese temple plaque (匾額) with the characters "三寶殿" (San Bao Dian) written in elegant Chinese calligraphy. The plaque should be wooden with gold or red characters, hanging in a traditional temple interior. Include traditional decorative elements around the plaque like carved dragons, clouds, or floral patterns. The background should show part of a temple interior with red pillars and traditional decorations. Clear, readable Chinese characters are essential for the puzzle. 400x250 pixels, landscape orientation.

Style: Traditional Chinese calligraphy, temple interior, gold/red color scheme, ornate decorative elements, clear and readable text.
```

## 📄 授權

本專案採用 MIT 授權條款。

---

**開發者**：Zhulingru  
**最後更新**：2025-01-25
