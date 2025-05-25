let gameData;
let currentChapter = 0;
let currentHint = 0;

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
  document.getElementById('chapter-intro').textContent = chapter.intro || '';
  document.getElementById('story').innerHTML = chapter.story.map(p => `<p>${p}</p>`).join('');
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
  document.getElementById('story').innerHTML += `<div style="margin-top: 2rem; padding-top: 1.5rem; border-top: 2px solid var(--border-gold);">${conclusionHtml}</div>`;
  
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