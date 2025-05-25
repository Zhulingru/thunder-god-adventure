let gameData;
let currentChapter = 0;
let currentHint = 0;
let isTyping = false;

// 讀取 JSON 資料
fetch('data/gameData.json')
  .then(response => response.json())
  .then(data => {
    gameData = data;
    renderChapter();
  });

function renderChapter() {
  const chapter = gameData.chapters[currentChapter];
  document.getElementById('game-title').textContent = gameData.title;
  document.getElementById('chapter-title').textContent = chapter.title;
  
  // 更新進度條
  updateProgress();
  
  // 清空故事區域，準備打字機效果
  document.getElementById('story').innerHTML = '';
  document.getElementById('chapter-intro').textContent = chapter.intro || '';
  
  // 使用打字機效果顯示故事
  typewriterEffect(chapter.story, 'story');
  
  // 章節圖片
  if (chapter.image) {
    document.getElementById('chapter-image').innerHTML = `<img src="images/${chapter.image}" alt="章節場景" class="chapter-image">`;
  } else {
    document.getElementById('chapter-image').innerHTML = '';
  }

  // 謎題區
  if (chapter.puzzle) {
    document.getElementById('puzzle-section').style.display = '';
    document.getElementById('puzzle-question').textContent = chapter.puzzle.question;
    if (chapter.puzzle.image) {
      document.getElementById('puzzle-image').innerHTML = `<img src="images/${chapter.puzzle.image}" alt="謎題圖片" class="puzzle-image">`;
      document.getElementById('puzzle-image').style.display = '';
    } else {
      document.getElementById('puzzle-image').style.display = 'none';
    }
    document.getElementById('puzzle-answer').value = '';
    document.getElementById('hint').textContent = '';
    document.getElementById('puzzle-feedback').textContent = '';
    currentHint = 0;
  } else {
    document.getElementById('puzzle-section').style.display = 'none';
  }

  // 結局區
  document.getElementById('ending-section').style.display = 'none';
}

// 提交答案
document.getElementById('submit-answer').onclick = function() {
  const chapter = gameData.chapters[currentChapter];
  const userAnswer = document.getElementById('puzzle-answer').value.trim();
  const correctAnswers = chapter.puzzle.answer.map(ans => ans.trim());
  if (correctAnswers.includes(userAnswer)) {
    document.getElementById('puzzle-feedback').textContent = '答對了！';
    
    // 顯示章節結尾
    if (chapter.conclusion) {
      setTimeout(() => {
        showChapterConclusion(chapter.conclusion);
      }, 1000);
    } else {
      setTimeout(() => {
        nextChapter();
      }, 1000);
    }
  } else {
    document.getElementById('puzzle-feedback').textContent = '答錯了，請再試一次！';
  }
};

// 顯示提示
document.getElementById('show-hint').onclick = function() {
  const chapter = gameData.chapters[currentChapter];
  if (chapter.puzzle && chapter.puzzle.hints && currentHint < chapter.puzzle.hints.length) {
    document.getElementById('hint').textContent = chapter.puzzle.hints[currentHint];
    currentHint++;
  } else {
    document.getElementById('hint').textContent = '沒有更多提示了！';
  }
};

function nextChapter() {
  currentChapter++;
  if (currentChapter < gameData.chapters.length) {
    renderChapter();
  } else {
    showEnding();
  }
}

function showChapterConclusion(conclusion) {
  // 隱藏謎題區域
  document.getElementById('puzzle-section').style.display = 'none';
  
  // 顯示章節結尾
  const conclusionHtml = conclusion.map(p => `<p>${p}</p>`).join('');
  document.getElementById('story').innerHTML += `<div class="chapter-conclusion">${conclusionHtml}</div>`;
  
  // 添加繼續按鈕
  setTimeout(() => {
    const continueBtn = document.createElement('button');
    continueBtn.textContent = '繼續冒險';
    continueBtn.className = 'btn';
    continueBtn.style.marginTop = '1.5rem';
    continueBtn.onclick = () => nextChapter();
    
    document.getElementById('story').appendChild(continueBtn);
  }, 2000);
}

function showEnding() {
  document.getElementById('game-title').textContent = gameData.title;
  document.getElementById('chapter-title').textContent = '';
  document.getElementById('chapter-intro').textContent = '';
  document.getElementById('story').innerHTML = '';
  document.getElementById('chapter-image').innerHTML = '';
  document.getElementById('puzzle-section').style.display = 'none';
  document.getElementById('ending-section').style.display = '';
  document.getElementById('ending-title').textContent = gameData.ending.title;
  document.getElementById('ending-story').innerHTML = gameData.ending.story.map(p => `<p>${p}</p>`).join('');
}

// 打字機效果
function typewriterEffect(textArray, elementId, speed = 30) {
  if (isTyping) return;
  isTyping = true;
  
  // 顯示提示
  const hint = document.getElementById('typing-hint');
  if (hint) {
    hint.style.display = 'block';
  }
  
  const element = document.getElementById(elementId);
  let paragraphIndex = 0;
  
  function typeNextParagraph() {
    if (paragraphIndex >= textArray.length) {
      isTyping = false;
      // 隱藏提示
      if (hint) {
        hint.style.display = 'none';
      }
      return;
    }
    
    const paragraph = document.createElement('p');
    element.appendChild(paragraph);
    
    const text = textArray[paragraphIndex];
    let charIndex = 0;
    
    function typeChar() {
      if (charIndex < text.length) {
        paragraph.textContent += text[charIndex];
        charIndex++;
        setTimeout(typeChar, speed);
      } else {
        paragraphIndex++;
        setTimeout(typeNextParagraph, 200); // 段落間停頓
      }
    }
    
    typeChar();
  }
  
  typeNextParagraph();
}

// 更新進度條
function updateProgress() {
  const totalChapters = 3; // 測試版三回
  const currentProgress = ((currentChapter + 1) / totalChapters) * 100;
  
  document.getElementById('progress-fill').style.width = currentProgress + '%';
  
  const progressTexts = [
    '第一回 / 共三回',
    '第二回 / 共三回', 
    '第三回 / 共三回'
  ];
  
  if (currentChapter < progressTexts.length) {
    document.getElementById('progress-text').textContent = progressTexts[currentChapter];
  }
}

// 跳過打字機效果（點擊加速）
function skipTypewriter() {
  if (isTyping) {
    isTyping = false;
    const chapter = gameData.chapters[currentChapter];
    document.getElementById('story').innerHTML = chapter.story.map(p => `<p>${p}</p>`).join('');
    
    // 隱藏提示
    const hint = document.getElementById('typing-hint');
    if (hint) {
      hint.style.display = 'none';
    }
  }
}