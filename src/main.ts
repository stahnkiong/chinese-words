import './style.css';
import { loadState, saveState, getDailyWords, exportState, importState } from './logic';
import type { AppState } from './logic';

let state: AppState = loadState();
let currentModuleIndex = 0;

declare global {
  interface Window {
    setModule: (index: number) => void;
    completeModule: (index: number) => void;
    handleWordClick: (word: string, index: number) => void;
    resetWriter: () => void;
    hintWriter: () => void;
    handleRecallChoice: (choice: string, correct: string) => void;
    checkMasteryInput: (correct: string) => void;
    nextMasteryWord: () => void;
    toggleSettings: () => void;
    saveSettings: () => void;
    copyProgress: () => void;
    importProgress: () => void;
    finishDay: () => void;
    confetti: any;
    HanziWriter: any;
    clickedWords: Record<number, boolean>;
    discoveryClicks: number;
    structureIndex: number;
    recallIndex: number;
    masteryIndex: number;
    isSentenceMode: boolean;
  }
}

const app = document.querySelector<HTMLDivElement>('#app')!;

// --- UI Components ---

function renderHeader() {
  const progress = (state.currentStudyDay / 365) * 100;
  const totalWords = state.currentStudyDay * state.pace;
  
  return `
    <header class="sticky top-0 z-50 glass px-6 py-4 flex justify-between items-center mb-8 select-none" id="main-header">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">学</div>
        <h1 class="text-xl font-bold tracking-tight">Scholar's Path</h1>
      </div>
      <div class="flex flex-col items-end">
        <span class="text-xs font-semibold text-slate-500 uppercase tracking-wider">Day ${state.currentStudyDay + 1}</span>
        <div class="w-32 h-2 bg-slate-200 rounded-full mt-1 overflow-hidden">
          <div class="h-full bg-indigo-600 transition-all duration-500" style="width: ${progress}%"></div>
        </div>
      </div>
    </header>
    
    <div class="max-w-2xl mx-auto px-6 mb-12">
      <div class="flex justify-center mb-6">
        ${renderTree(totalWords)}
      </div>
      <p class="text-center text-slate-500 text-sm font-medium">${totalWords} words mastered</p>
    </div>
  `;
}

function renderTree(wordCount: number) {
  // 1 leaf = 1 word. Progression: Seedling -> Small Plant -> Tree -> Large Tree
  // We'll use a simple SVG that grows based on wordCount
  const scale = Math.min(1 + wordCount / 100, 3);
  const leafColor = wordCount > 10 ? '#22c55e' : '#86efac';
  
  return `
    <div class="relative w-32 h-32 flex items-end justify-center">
      <svg viewBox="0 0 100 100" class="w-full h-full transition-transform duration-1000" style="transform: scale(${scale})">
        <!-- Trunk -->
        <path d="M45 100 L45 80 Q50 75 55 80 L55 100 Z" fill="#78350f" />
        <!-- Leaves (simplified) -->
        ${wordCount > 0 ? `<circle cx="50" cy="70" r="15" fill="${leafColor}" />` : ''}
        ${wordCount > 5 ? `<circle cx="40" cy="60" r="12" fill="${leafColor}" />` : ''}
        ${wordCount > 15 ? `<circle cx="60" cy="60" r="12" fill="${leafColor}" />` : ''}
        ${wordCount > 30 ? `<circle cx="50" cy="50" r="18" fill="${leafColor}" />` : ''}
      </svg>
    </div>
  `;
}

function renderModuleTabs() {
  const modules = [
    { name: 'Discovery', icon: '🔍' },
    { name: 'Structure', icon: '✍️' },
    { name: 'Recall', icon: '🧠' },
    { name: 'Mastery', icon: '🏆' }
  ];

  return `
    <div class="flex gap-2 px-6 max-w-2xl mx-auto mb-8 overflow-x-auto pb-2 no-scrollbar">
      ${modules.map((m, i) => `
        <button 
          class="flex-1 min-w-[100px] flex flex-col items-center gap-1 p-3 rounded-2xl transition-all ${currentModuleIndex === i ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' : 'bg-white text-slate-500 border border-slate-100'}"
          onclick="window.setModule(${i})"
          ${i > 0 && !state.completedModules[i-1] ? 'disabled opacity-50' : ''}
        >
          <span class="text-xl">${m.icon}</span>
          <span class="text-xs font-bold uppercase tracking-tighter">${m.name}</span>
          ${state.completedModules[i] ? '<span class="absolute top-1 right-1 text-[10px]">✅</span>' : ''}
        </button>
      `).join('')}
    </div>
  `;
}

// --- Module Content ---

function renderDiscovery() {
  const { newWords } = getDailyWords(state);
  const clickedCount = state.completedModules[0] ? 3 : (window as any).discoveryClicks || 0;

  return `
    <div class="card max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2 class="text-2xl font-bold mb-2">New Words</h2>
      <p class="text-slate-500 mb-6">Click each word to see what it looks like!</p>
      
      <div class="grid gap-4">
        ${newWords.map((w, i) => `
          <div 
            class="flex items-center justify-between p-4 rounded-xl border-2 transition-all cursor-pointer ${((window as any).clickedWords?.[i]) ? 'border-green-500 bg-green-50' : 'border-slate-100 hover:border-indigo-300'}"
            onclick="window.handleWordClick('${w.cn}', ${i})"
          >
            <div>
              <div class="text-3xl font-bold mb-1">${w.cn}</div>
              <div class="text-sm text-slate-500">${w.pinyin} • ${w.en}</div>
            </div>
            <div class="text-2xl">${((window as any).clickedWords?.[i]) ? '✅' : '🖼️'}</div>
          </div>
        `).join('')}
      </div>

      ${clickedCount >= 3 ? `
        <button class="btn-primary w-full mt-8" onclick="window.completeModule(0)">
          Finish Discovery
        </button>
      ` : ''}
    </div>
  `;
}

function renderStructure() {
  const { review1 } = getDailyWords(state);
  if (review1.length === 0) {
    return `
      <div class="card max-w-2xl mx-auto text-center">
        <p class="text-slate-500 mb-6">No words to review for Structure yet. (Day 3+)</p>
        <button class="btn-primary w-full" onclick="window.completeModule(1)">Skip</button>
      </div>
    `;
  }

  const currentWordIndex = (window as any).structureIndex || 0;
  const word = review1[currentWordIndex];

  return `
    <div class="card max-w-2xl mx-auto">
      <h2 class="text-2xl font-bold mb-2">Structure Quiz</h2>
      <p class="text-slate-500 mb-6">Draw the character correctly!</p>
      
      <div class="flex flex-col items-center gap-6">
        <div id="hanzi-target" class="border-4 border-indigo-100 rounded-2xl bg-slate-50"></div>
        <div class="text-center">
          <div class="text-xl font-bold">${word.pinyin}</div>
          <div class="text-slate-500">${word.en}</div>
        </div>
        
        <div class="flex gap-2 w-full">
          <button class="flex-1 py-2 bg-slate-100 rounded-lg text-sm font-bold" onclick="window.resetWriter()">Reset</button>
          <button class="flex-1 py-2 bg-slate-100 rounded-lg text-sm font-bold" onclick="window.hintWriter()">Hint</button>
        </div>
      </div>

      <div class="mt-8 flex justify-between items-center">
        <span class="text-sm font-bold text-slate-400">Word ${currentWordIndex + 1} of ${review1.length}</span>
      </div>
    </div>
  `;
}

function renderRecall() {
  const { review2 } = getDailyWords(state);
  if (review2.length === 0) {
    return `
      <div class="card max-w-2xl mx-auto text-center">
        <p class="text-slate-500 mb-6">No words to review for Recall yet. (Day 8+)</p>
        <button class="btn-primary w-full" onclick="window.completeModule(2)">Skip</button>
      </div>
    `;
  }

  const currentWordIndex = (window as any).recallIndex || 0;
  const word = review2[currentWordIndex];
  // Shuffle options
  const options = [...review2].sort(() => Math.random() - 0.5);

  return `
    <div class="card max-w-2xl mx-auto">
      <h2 class="text-2xl font-bold mb-2">Recall Quiz</h2>
      <p class="text-slate-500 mb-6">Choose the correct Chinese word.</p>
      
      <div class="text-center mb-10">
        <div class="text-4xl font-bold text-indigo-600">${word.en}</div>
      </div>

      <div class="grid gap-3">
        ${options.map(opt => `
          <button 
            class="p-4 rounded-xl border-2 border-slate-100 hover:border-indigo-300 text-xl font-bold transition-all active:scale-95"
            onclick="window.handleRecallChoice('${opt.cn}', '${word.cn}')"
          >
            ${opt.cn}
          </button>
        `).join('')}
      </div>

      <div class="mt-8 flex justify-between items-center">
        <span class="text-sm font-bold text-slate-400">Word ${currentWordIndex + 1} of ${review2.length}</span>
      </div>
    </div>
  `;
}

function renderMastery() {
  const { review3 } = getDailyWords(state);
  if (review3.length === 0) {
    return `
      <div class="card max-w-2xl mx-auto text-center">
        <p class="text-slate-500 mb-6">No words to review for Mastery yet. (Day 16+)</p>
        <button class="btn-primary w-full" onclick="window.completeModule(3)">Skip</button>
      </div>
    `;
  }

  const currentWordIndex = (window as any).masteryIndex || 0;
  const word = review3[currentWordIndex];
  const isSentenceMode = (window as any).isSentenceMode || false;

  return `
    <div class="card max-w-2xl mx-auto">
      <h2 class="text-2xl font-bold mb-2">Mastery</h2>
      <p class="text-slate-500 mb-6">${isSentenceMode ? 'Say it out loud!' : 'Write the Chinese word.'}</p>
      
      <div class="text-center mb-8">
        <div class="text-4xl font-bold text-indigo-600 mb-2">${word.en}</div>
        ${isSentenceMode ? `<div class="text-2xl font-bold text-slate-800">${word.cn}</div>` : ''}
      </div>

      ${!isSentenceMode ? `
        <div class="space-y-4">
          <input 
            type="text" 
            id="mastery-input" 
            class="w-full p-4 text-2xl text-center font-bold border-2 border-slate-200 rounded-xl focus:border-indigo-500 outline-none"
            placeholder="输入中文"
            autofocus
          />
          <button class="btn-primary w-full" onclick="window.checkMasteryInput('${word.cn}')">Check</button>
        </div>
      ` : `
        <div class="bg-indigo-50 p-6 rounded-2xl border-2 border-indigo-100 text-center mb-8">
          <p class="text-indigo-900 font-semibold text-lg mb-4">"Now, say a sentence using this word to your Dad!"</p>
          <button class="btn-primary w-full" onclick="window.nextMasteryWord()">Done</button>
        </div>
      `}

      <div class="mt-8 flex justify-between items-center">
        <span class="text-sm font-bold text-slate-400">Word ${currentWordIndex + 1} of ${review3.length}</span>
      </div>
    </div>
  `;
}

function renderSettings() {
  return `
    <div id="settings-modal" class="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm items-center justify-center p-6 hidden">
      <div class="bg-white w-full max-w-md rounded-3xl p-8 shadow-2xl">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-2xl font-bold">Dad Settings</h2>
          <button onclick="window.toggleSettings()" class="text-slate-400 text-2xl">&times;</button>
        </div>
        
        <div class="space-y-6">
          <div>
            <label class="block text-sm font-bold text-slate-500 mb-2 uppercase tracking-wider">Current Study Day</label>
            <input type="number" id="setting-day" value="${state.currentStudyDay + 1}" class="w-full p-3 bg-slate-100 rounded-xl font-bold" />
          </div>
          
          <div>
            <label class="block text-sm font-bold text-slate-500 mb-2 uppercase tracking-wider">Words Per Day (Pace)</label>
            <input type="number" id="setting-pace" value="${state.pace}" class="w-full p-3 bg-slate-100 rounded-xl font-bold" />
          </div>

          <div class="pt-4 space-y-3">
            <button class="w-full py-3 bg-indigo-600 text-white rounded-xl font-bold" onclick="window.saveSettings()">Save & Restart Day</button>
            <button class="w-full py-3 bg-slate-100 text-slate-700 rounded-xl font-bold" onclick="window.copyProgress()">Copy Progress String</button>
            <button class="w-full py-3 bg-slate-100 text-slate-700 rounded-xl font-bold" onclick="window.importProgress()">Import Progress String</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderFinishDay() {
  const allDone = state.completedModules.every(m => m);
  if (!allDone) return '';

  return `
    <div class="max-w-2xl mx-auto px-6 mt-12 pb-20">
      <button class="w-full py-6 bg-green-500 text-white rounded-3xl font-bold text-2xl shadow-xl shadow-green-100 animate-bounce" onclick="window.finishDay()">
        FINISH DAY ${state.currentStudyDay + 1} 🚀
      </button>
    </div>
  `;
}

// --- Main Render Loop ---

function render() {
  app.innerHTML = `
    ${renderHeader()}
    ${renderModuleTabs()}
    <main class="px-6 pb-12">
      ${[renderDiscovery, renderStructure, renderRecall, renderMastery][currentModuleIndex]()}
    </main>
    ${renderFinishDay()}
    ${renderSettings()}
  `;

  if (currentModuleIndex === 1) initHanziWriter();
  setupLongPress();
}

// --- Logic & Handlers ---

(window as any).setModule = (index: number) => {
  if (index > 0 && !state.completedModules[index-1]) return;
  currentModuleIndex = index;
  render();
};

(window as any).completeModule = (index: number) => {
  state.completedModules[index] = true;
  saveState(state);
  (window as any).confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
  
  // Auto advance if possible
  if (index < 3) {
    currentModuleIndex = index + 1;
  }
  render();
};

// Discovery Handlers
(window as any).clickedWords = {};
(window as any).discoveryClicks = 0;
(window as any).handleWordClick = (word: string, index: number) => {
  if (!(window as any).clickedWords[index]) {
    (window as any).clickedWords[index] = true;
    (window as any).discoveryClicks++;
  }
  window.open(`https://www.google.com/search?q=${encodeURIComponent(word)}&tbm=isch`, '_blank');
  render();
};

// Structure Handlers
let writer: any = null;
function initHanziWriter() {
  const { review1 } = getDailyWords(state);
  const index = (window as any).structureIndex || 0;
  if (!review1[index]) return;

  const target = document.getElementById('hanzi-target');
  if (!target) return;
  target.innerHTML = '';

  writer = (window as any).HanziWriter.create('hanzi-target', review1[index].cn, {
    width: 250,
    height: 250,
    showCharacter: false,
    padding: 5,
    strokeAnimationSpeed: 1,
    delayBetweenStrokes: 200
  });

  writer.quiz({
    onComplete: () => {
      (window as any).confetti({ particleCount: 50, spread: 60 });
      setTimeout(() => {
        const nextIndex = index + 1;
        if (nextIndex >= review1.length) {
          (window as any).structureIndex = 0;
          window.completeModule(1);
        } else {
          (window as any).structureIndex = nextIndex;
          render();
        }
      }, 1000);
    }
  });
}

(window as any).resetWriter = () => writer?.quiz();
(window as any).hintWriter = () => writer?.animateCharacter();

// Recall Handlers
(window as any).recallIndex = 0;
(window as any).handleRecallChoice = (choice: string, correct: string) => {
  if (choice === correct) {
    (window as any).confetti({ particleCount: 30 });
    const { review2 } = getDailyWords(state);
    const nextIndex = ((window as any).recallIndex || 0) + 1;
    
    if (nextIndex >= review2.length) {
      (window as any).recallIndex = 0;
      window.completeModule(2);
    } else {
      (window as any).recallIndex = nextIndex;
      render();
    }
  } else {
    alert("Try again!");
  }
};

// Mastery Handlers
(window as any).masteryIndex = 0;
(window as any).isSentenceMode = false;
(window as any).checkMasteryInput = (correct: string) => {
  const input = document.getElementById('mastery-input') as HTMLInputElement;
  if (input.value.trim() === correct) {
    (window as any).isSentenceMode = true;
    render();
  } else {
    alert("Not quite! Check your spelling.");
  }
};

(window as any).nextMasteryWord = () => {
  const { review3 } = getDailyWords(state);
  const nextIndex = ((window as any).masteryIndex || 0) + 1;
  (window as any).isSentenceMode = false;

  if (nextIndex >= review3.length) {
    (window as any).masteryIndex = 0;
    window.completeModule(3);
  } else {
    (window as any).masteryIndex = nextIndex;
    render();
  }
};

// Settings Handlers
(window as any).toggleSettings = () => {
  const modal = document.getElementById('settings-modal');
  if (modal) {
    modal.classList.toggle('hidden');
    modal.classList.toggle('flex');
  }
};

(window as any).saveSettings = () => {
  const day = parseInt((document.getElementById('setting-day') as HTMLInputElement).value) - 1;
  const pace = parseInt((document.getElementById('setting-pace') as HTMLInputElement).value);
  
  state.currentStudyDay = day;
  state.pace = pace;
  state.completedModules = [false, false, false, false];
  saveState(state);
  window.location.reload();
};

(window as any).copyProgress = () => {
  const str = exportState(state);
  navigator.clipboard.writeText(str);
  alert("Progress copied to clipboard!");
};

(window as any).importProgress = () => {
  const str = prompt("Paste progress string:");
  if (str) {
    const newState = importState(str);
    if (newState) {
      state = newState;
      saveState(state);
      window.location.reload();
    } else {
      alert("Invalid progress string.");
    }
  }
};

(window as any).finishDay = () => {
  state.currentStudyDay++;
  state.completedModules = [false, false, false, false];
  (window as any).clickedWords = {};
  (window as any).discoveryClicks = 0;
  saveState(state);
  currentModuleIndex = 0;
  (window as any).confetti({
    particleCount: 200,
    spread: 100,
    origin: { y: 0.3 }
  });
  setTimeout(() => render(), 500);
};

// Long Press Logic
function setupLongPress() {
  const header = document.getElementById('main-header');
  if (!header) return;

  let timer: any;
  header.addEventListener('mousedown', () => {
    timer = setTimeout(() => (window as any).toggleSettings(), 2000);
  });
  header.addEventListener('mouseup', () => clearTimeout(timer));
  header.addEventListener('touchstart', () => {
    timer = setTimeout(() => (window as any).toggleSettings(), 2000);
  });
  header.addEventListener('touchend', () => clearTimeout(timer));
}

// Initial Render
render();
