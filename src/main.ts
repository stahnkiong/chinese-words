import './style.css';
import { loadState, saveState, getDailyWords, exportState, importState } from './logic';
import type { AppState } from './logic';
import { ALL_WORDS } from './data';

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

    isListening: boolean;
    lastHeard: string | null;
    playAudio: (text: string, lang: string) => void;
    resetMasteryWriter: () => void;
    hintMasteryWriter: () => void;
    handleRecallHint: (cn: string) => void;
    recallHintState: number;
    toggleSpeechRecognition: (correct: string) => void;
    toggleMasterySpeechRecognition: (correct: string) => void;
    finishSentenceCreation: () => void;
    revealMasteryMalay: () => void;
    
    // Mastery State
    masteryStep: number; // 0: Write, 1: Sentence, 2: Speak Malay, 3: Next Word
    isMasteryMalayRevealed: boolean;
  }
}

let activeRecognition: any = null;
let activeMasteryRecognition: any = null;
let recognitionTimeout: any = null;

const app = document.querySelector<HTMLDivElement>('#app')!;

(window as any).playAudio = (text: string, lang: string) => {
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.8;

  const voices = window.speechSynthesis.getVoices();
  
  // Force Indonesian for Malay as it's often better supported and very similar
  if (lang === 'ms-MY') {
    lang = 'id-ID';
  }

  // Try exact match
  let selectedVoice = voices.find(v => v.lang === lang);

  // Prefix fallback (e.g. en-US -> en-GB if US missing)
  if (!selectedVoice) {
    const shortLang = lang.split('-')[0];
    selectedVoice = voices.find(v => v.lang.startsWith(shortLang));
  }

  if (selectedVoice) {
    utterance.voice = selectedVoice;
    utterance.lang = selectedVoice.lang;
  } else {
    utterance.lang = lang;
  }

  window.speechSynthesis.speak(utterance);
};
// --- UI Components ---

function renderHeader() {
  const progress = (state.currentStudyDay / 365) * 100;
  // Calculate mastered words based on Library availability (Day 15 onwards)
  const totalWords = Math.max(0, (state.currentStudyDay - 15) * state.pace);
  
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
        ${renderMedals(totalWords)}
      </div>
      <p class="text-center text-slate-500 text-sm font-medium">${totalWords} words mastered</p>
    </div>
  `;
}

function renderMedals(wordCount: number) {
  const medals = [];

  // Seed (Always present as the start)
  medals.push(`
    <div class="flex flex-col items-center animate-in zoom-in duration-500">
      <div class="w-12 h-12 rounded-full bg-green-100 border-2 border-green-200 flex items-center justify-center text-2xl shadow-sm" title="Beginner's Seed">
        🌱
      </div>
      <span class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">Start</span>
    </div>
  `);

  if (wordCount >= 10) {
     medals.push(`
      <div class="flex flex-col items-center animate-in zoom-in duration-500 delay-100">
        <div class="w-12 h-12 rounded-full bg-orange-100 border-2 border-orange-300 flex items-center justify-center text-xl shadow-md text-orange-700 font-black relative" title="10 Words">
          <span>10</span>
          <div class="absolute -bottom-1 -right-1 text-xs">🥉</div>
        </div>
        <span class="text-[10px] font-bold text-orange-400 mt-1 uppercase tracking-wider">Bronze</span>
      </div>
    `);
  }

  if (wordCount >= 100) {
     medals.push(`
      <div class="flex flex-col items-center animate-in zoom-in duration-500 delay-200">
        <div class="w-12 h-12 rounded-full bg-slate-100 border-2 border-slate-300 flex items-center justify-center text-xl shadow-md text-slate-600 font-black relative" title="100 Words">
          <span>100</span>
          <div class="absolute -bottom-1 -right-1 text-xs">🥈</div>
        </div>
        <span class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">Silver</span>
      </div>
    `);
  }

  if (wordCount >= 200) {
     medals.push(`
      <div class="flex flex-col items-center animate-in zoom-in duration-500 delay-250">
        <div class="w-12 h-12 rounded-full bg-teal-100 border-2 border-teal-300 flex items-center justify-center text-sm shadow-md text-teal-700 font-black relative" title="200 Words">
          <span>200</span>
          <div class="absolute -bottom-1 -right-1 text-xs">🥉+</div>
        </div>
        <span class="text-[10px] font-bold text-teal-500 mt-1 uppercase tracking-wider">Bronze+</span>
      </div>
    `);
  }

  if (wordCount >= 500) {
     medals.push(`
      <div class="flex flex-col items-center animate-in zoom-in duration-500 delay-275">
        <div class="w-12 h-12 rounded-full bg-violet-100 border-2 border-violet-300 flex items-center justify-center text-sm shadow-md text-violet-700 font-black relative" title="500 Words">
          <span>500</span>
          <div class="absolute -bottom-1 -right-1 text-xs">🥈+</div>
        </div>
        <span class="text-[10px] font-bold text-violet-500 mt-1 uppercase tracking-wider">Silver+</span>
      </div>
    `);
  }

  if (wordCount >= 1000) {
     medals.push(`
      <div class="flex flex-col items-center animate-in zoom-in duration-500 delay-300">
        <div class="w-12 h-12 rounded-full bg-yellow-100 border-2 border-yellow-300 flex items-center justify-center text-sm shadow-md text-yellow-700 font-black relative" title="1000 Words">
          <span>1k</span>
          <div class="absolute -bottom-1 -right-1 text-xs">🥇</div>
        </div>
        <span class="text-[10px] font-bold text-yellow-500 mt-1 uppercase tracking-wider">Gold</span>
      </div>
    `);
  }
  
  // Thousands logic (2k, 3k, etc.)
  for (let k = 2; k * 1000 <= wordCount; k++) {
      // Cap animations delay to avoid waiting too long if they have many medals
      const delay = Math.min(300 + (k-1)*100, 1000); 
      medals.push(`
        <div class="flex flex-col items-center animate-in zoom-in duration-500 delay-[${delay}ms]">
          <div class="w-12 h-12 rounded-full bg-indigo-100 border-2 border-indigo-300 flex items-center justify-center text-sm shadow-md text-indigo-700 font-black relative" title="${k}000 Words">
            <span>${k}k</span>
            <div class="absolute -bottom-1 -right-1 text-xs">💎</div>
          </div>
          <span class="text-[10px] font-bold text-indigo-400 mt-1 uppercase tracking-wider">${k}k</span>
        </div>
      `);
  }

  return `
    <div class="flex flex-wrap justify-center gap-4 py-4">
      ${medals.join('')}
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

  if (state.currentStudyDay >= 15) {
    modules.push({ name: 'Library', icon: '📚' });
  }

  return `
    <div class="flex gap-2 px-6 max-w-2xl mx-auto mb-8 overflow-x-auto pb-2 no-scrollbar">
      ${modules.map((m, i) => `
        <button 
          class="flex-1 min-w-[100px] flex flex-col items-center gap-1 p-3 rounded-2xl transition-all ${currentModuleIndex === i ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' : 'bg-white text-slate-500 border border-slate-100'}"
          onclick="window.setModule(${i})"
          ${(i < 4 && i > 0 && !state.completedModules[i-1]) ? 'disabled opacity-50' : ''}
        >
          <span class="text-xl">${m.icon}</span>
          <span class="text-xs font-bold uppercase tracking-tighter">${m.name}</span>
          ${(i < 4 && state.completedModules[i]) ? '<span class="absolute top-1 right-1 text-[10px]">✅</span>' : ''}
        </button>
      `).join('')}
    </div>
  `;
}

// --- Module Content ---

function renderDiscovery() {
  const { newWords } = getDailyWords(state);
  const clickedCount = state.completedModules[0] ? state.pace : (window as any).discoveryClicks || 0;

  return `
    <div class="card max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2 class="text-2xl font-bold mb-2">New Words</h2>
      <p class="text-slate-500 mb-6">Explore the meanings and pronunciations.</p>
      
      <div class="grid gap-4">
        ${newWords.map((w, i) => `
          <div 
            class="flex flex-col p-6 rounded-2xl border-2 transition-all ${((window as any).clickedWords?.[i]) ? 'border-green-500 bg-green-50' : 'border-slate-100 bg-white shadow-sm'}"
          >
            <div class="flex justify-between items-start mb-4">
              <div>
                <div class="flex items-center gap-2">
                  <div class="text-4xl font-extrabold text-indigo-900 mb-1 tracking-tight">${w.cn}</div>
                  <button class="p-2 rounded-full bg-indigo-50 text-indigo-600 hover:bg-indigo-100" onclick="window.playAudio('${w.cn}', 'zh-CN')">🔊</button>
                </div>
                ${w.pinyin ? `<div class="text-sm font-mono text-indigo-400">/${w.pinyin}/</div>` : ''}
              </div>
              <div class="text-2xl">${((window as any).clickedWords?.[i]) ? '✅' : '🖼️'}</div>
            </div>

            <div class="grid grid-cols-1 gap-4 pt-4 border-t border-slate-100">
            <div>
                <div class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Bahasa Melayu</div>
                <div class="flex items-center gap-2">
                  <div class="text-xl font-bold text-slate-800">${w.bm || '-'}</div>
                  ${w.bm ? `<button class="p-1 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200" onclick="window.playAudio('${w.bm}', 'ms-MY')">🔊</button>` : ''}
                </div>
                ${w.bm_pronounce ? `<div class="text-sm text-slate-500 italic">${w.bm_pronounce}</div>` : ''}
              </div>  
            <div>
                <div class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">English</div>
                <div class="flex items-center gap-2">
                  <div class="text-xl font-bold text-slate-800">${w.en}</div>
                  <button class="p-1 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200" onclick="window.playAudio('${w.en}', 'en-US')">🔊</button>
                </div>
                <div class="text-sm text-slate-500">${w.en_pronounce}</div>
              </div>
              
              
            </div>

            <button 
              class="mt-4 w-full py-2 flex items-center justify-center gap-2 rounded-xl border-2 border-indigo-100 bg-indigo-50 text-indigo-700 font-bold hover:bg-indigo-100 active:scale-95 transition-all"
              onclick="window.handleWordClick('${w.cn}', ${i})"
            >
              <span>View Images</span>
              <span>🖼️</span>
            </button>
          </div>
        `).join('')}
      </div>

      ${clickedCount >= state.pace ? `
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
  const characters = word.cn.split('');

  return `
    <div class="card max-w-2xl mx-auto">
      <h2 class="text-2xl font-bold mb-2">Structure Quiz</h2>
      <p class="text-slate-500 mb-6">Draw the character correctly!</p>
      
      <div class="flex flex-col items-center gap-6">
        <div class="flex flex-wrap justify-center gap-4">
          ${characters.map((_, i) => `
            <div id="hanzi-target-${i}" class="border-4 border-indigo-100 rounded-2xl bg-slate-50"></div>
          `).join('')}
        </div>
        <div class="flex flex-col items-center gap-3">
          <div class="flex items-center gap-2">
            <div class="text-xl font-bold">${word.pinyin}</div>
            <button class="p-1 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200" onclick="window.playAudio('${word.cn}', 'zh-CN')">🔊</button>
          </div>
          
          <div class="flex items-center gap-2">
            <div class="text-lg font-bold text-slate-700">${word.bm || '-'}</div>
            ${word.bm ? `<button class="p-1 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200" onclick="window.playAudio('${word.bm}', 'ms-MY')">🔊</button>` : ''}
          </div>

          <div class="flex items-center gap-2">
            <div class="text-lg font-bold text-slate-700">${word.en}</div>
            <button class="p-1 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200" onclick="window.playAudio('${word.en}', 'en-US')">🔊</button>
          </div>
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
  const listening = (window as any).isListening || false;
  const lastHeard = (window as any).lastHeard || null;

  return `
    <div class="card max-w-2xl mx-auto">
      <h2 class="text-2xl font-bold mb-2">Recall Quiz</h2>
      <p class="text-slate-500 mb-6">Say the Chinese word!</p>
      
      <div class="text-center mb-10">
        <div class="flex flex-col items-center gap-2 mb-8">
          <div class="text-4xl font-bold text-indigo-600">${word.en}</div>
          <div class="text-2xl font-bold text-slate-500">${word.bm || ''}</div>
        </div>
        
        <button 
          class="w-24 h-24 rounded-full flex items-center justify-center mx-auto transition-all ${listening ? 'bg-red-500 animate-pulse ring-4 ring-red-200' : 'bg-indigo-600 hover:bg-indigo-700 shadow-xl shadow-indigo-200'}"
          onclick="window.toggleSpeechRecognition('${word.cn}')"
        >
          <span class="text-4xl">${listening ? '⏹️' : '🎙️'}</span>
        </button>

        <div class="mt-8 h-8 text-lg font-medium text-slate-500 mb-4">
          ${listening ? 'Listening...' : (lastHeard ? `Heard: "${lastHeard}" - Try again!` : 'Tap to speak')}
        </div>

        <button 
          class="mt-4 py-2 px-6 rounded-full bg-indigo-50 text-indigo-600 font-bold hover:bg-indigo-100 transition-all flex items-center gap-2 mx-auto"
          onclick="window.handleRecallHint('${word.cn}')"
        >
          <span>${getRecallHintText(word)}</span>
        </button>
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
  const isSentenceMode = ((window as any).masteryStep || 0) > 0;

  return `
    <div class="card max-w-2xl mx-auto">
      <h2 class="text-2xl font-bold mb-2">Mastery</h2>
      <p class="text-slate-500 mb-6">${isSentenceMode ? 'Say it out loud!' : 'Write the Chinese word (Blind Mode).'}</p>
      
      <div class="text-center mb-8">
        <div class="text-4xl font-bold text-indigo-600 mb-2">${word.en}</div>
        ${isSentenceMode ? `<div class="text-2xl font-bold text-slate-800">${word.cn}</div>` : ''}
      </div>

      ${!isSentenceMode ? `
        <div class="flex flex-col items-center gap-6">
          <div class="flex flex-wrap justify-center gap-4">
            ${word.cn.split('').map((_, i) => `
              <div id="hanzi-mastery-target-${i}" class="border-4 border-indigo-100 rounded-2xl bg-slate-50"></div>
            `).join('')}
          </div>
          <div class="flex gap-2 w-full max-w-md">
            <button class="flex-1 py-2 bg-slate-100 rounded-lg text-sm font-bold" onclick="window.resetMasteryWriter()">Reset</button>
            <button class="flex-1 py-2 bg-slate-100 rounded-lg text-sm font-bold" onclick="window.hintMasteryWriter()">Hint</button>
          </div>
        </div>
      ` : `
        <!-- Step 1: Sentence Creation -->
        ${(window as any).masteryStep === 1 ? `
          <div class="bg-indigo-50 p-6 rounded-2xl border-2 border-indigo-100 text-center mb-8">
            <p class="text-indigo-900 font-semibold text-lg mb-4">"Make a simple sentence using this word!"</p>
            <div class="grid gap-3">
              <button 
                class="w-full py-3 bg-white border-2 border-indigo-200 text-indigo-600 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-indigo-50 transition-all shadow-sm" 
                onclick="window.handleSentenceExampleClick('${word.cn}')"
              >
                <span>Open Sentence Examples</span>
                <span>🔗</span>
              </button>
              <button 
                class="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed" 
                onclick="window.finishSentenceCreation()"
                ${!(window as any).hasOpenedExamples ? 'disabled' : ''}
              >
                ${(window as any).hasOpenedExamples ? 'Done' : 'Open Link First ☝️'}
              </button>
            </div>
          </div>
        ` : ''}

        <!-- Step 2: Speak Malay -->
        ${(window as any).masteryStep === 2 ? `
          <div class="bg-slate-50 p-6 rounded-2xl border-2 border-slate-100 text-center mb-8">
              <h3 class="text-lg font-bold text-slate-700 mb-2">Speak Malay</h3>
              
              <div class="min-h-[3rem] mb-4 flex items-center justify-center">
                ${(window as any).isMasteryMalayRevealed 
                  ? `<p class="text-slate-500 text-xl font-medium animate-in fade-in">"${word.bm || 'No Malay translation'}"</p>`
                  : `<button class="text-sm font-bold text-slate-400 border-b-2 border-slate-300 hover:text-slate-600 hover:border-slate-400 transition-colors pb-0.5" onclick="window.revealMasteryMalay()">Reveal Malay Translation</button>`
                }
              </div>
              
              <button 
                class="w-16 h-16 rounded-full flex items-center justify-center mx-auto transition-all ${(window as any).isMasteryListening ? 'bg-red-500 animate-pulse ring-4 ring-red-200' : 'bg-indigo-600 hover:bg-indigo-700 shadow-xl shadow-indigo-200'}"
                onclick="window.toggleMasterySpeechRecognition('${word.bm || ''}')"
              >
                <span class="text-2xl">${(window as any).isMasteryListening ? '⏹️' : '🎙️'}</span>
              </button>
              
              <div class="mt-4 h-6 text-sm font-medium text-slate-500">
                ${(window as any).isMasteryListening ? 'Listening...' : ((window as any).lastMasteryHeard ? `Heard: "${(window as any).lastMasteryHeard}"` : 'Tap to practice pronunciation')}
              </div>
          </div>
        ` : ''}

        <!-- Step 3: Completed / Next Word -->
        ${(window as any).masteryStep === 3 ? `
          <div class="bg-green-50 p-6 rounded-2xl border-2 border-green-100 text-center mb-8 animate-in zoom-in duration-300">
             <div class="text-4xl mb-2">🎉</div>
             <p class="text-green-800 font-bold text-xl mb-4">Great Job!</p>
             <button class="btn-primary w-full bg-green-600 hover:bg-green-700 shadow-green-200" onclick="window.nextMasteryWord()">Next Word</button>
          </div>
        ` : ''}
      `}

      <div class="mt-8 flex justify-between items-center">
        <span class="text-sm font-bold text-slate-400">Word ${currentWordIndex + 1} of ${review3.length}</span>
      </div>
    </div>
  `;
}

function renderLibrary() {
  const masteredCount = Math.max(0, (state.currentStudyDay - 15) * state.pace);
  const masteredWords = ALL_WORDS.slice(0, masteredCount).reverse();

  return `
    <div class="card max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2 class="text-2xl font-bold mb-2">Mastered Words</h2>
      <p class="text-slate-500 mb-6">Review all the words you have mastered.</p>
      
      ${masteredWords.length === 0 ? `
        <div class="text-center py-12 text-slate-400">
          <div class="text-4xl mb-4">🌱</div>
          <p>No mastered words yet. Keep going!</p>
        </div>
      ` : `
        <div class="grid gap-3">
          ${masteredWords.map((w) => `
            <div class="flex items-center justify-between p-4 bg-white rounded-xl border border-slate-100 hover:border-indigo-100 hover:shadow-md transition-all">
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 flex items-center justify-center bg-indigo-50 rounded-lg text-xl font-bold text-indigo-700">
                  ${w.cn}
                </div>
                <div>
                  <div class="font-bold text-slate-800">${w.en}</div>
                  <div class="text-xs text-slate-400 font-mono">/${w.pinyin}/</div>
                </div>
              </div>
              
              <div class="flex items-center gap-3">
                <div class="text-right hidden sm:block">
                  <div class="text-sm font-bold text-slate-600">${w.bm || '-'}</div>
                </div>
                <button 
                  class="p-2 rounded-full bg-slate-50 text-indigo-600 hover:bg-slate-100"
                  onclick="window.playAudio('${w.cn}', 'zh-CN')"
                >
                  🔊
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      `}
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
  const allDone = state.completedModules.every((completed, index) => {
    // Only check first 4 modules (Discovery, Structure, Recall, Mastery)
    // Library (index 4) doesn't need to be completed
    if (index >= 4) return true;
    return completed;
  });
  
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
  // If we are on the Library tab (index 4) but logic doesn't support it (e.g. day < 15), reset to 0
  if (currentModuleIndex === 4 && state.currentStudyDay < 15) {
    currentModuleIndex = 0;
  }

  const moduleRenderers = [
    renderDiscovery, 
    renderStructure, 
    renderRecall, 
    renderMastery,
    renderLibrary
  ];

  app.innerHTML = `
    ${renderHeader()}
    ${renderModuleTabs()}
    <main class="px-6 pb-12">
      ${(moduleRenderers[currentModuleIndex] || renderDiscovery)()}
    </main>
    ${renderFinishDay()}
    ${renderSettings()}
  `;

  if (currentModuleIndex === 1) initHanziWriter();
  if (currentModuleIndex === 3) initMasteryWriter();
  setupLongPress();
}

// --- Logic & Handlers ---

(window as any).setModule = (index: number) => {
  // Library (index 4) is always accessible if visible, no dependency on previous modules
  if (index < 4 && index > 0 && !state.completedModules[index-1]) return;
  
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
let writers: any[] = [];
let activeWriterIndex = 0;

function initHanziWriter() {
  const { review1 } = getDailyWords(state);
  const index = (window as any).structureIndex || 0;
  if (!review1[index]) return;

  writers = [];
  activeWriterIndex = 0;
  const characters = review1[index].cn.split('');

  characters.forEach((char, i) => {
    const targetId = `hanzi-target-${i}`;
    const target = document.getElementById(targetId);
    if (!target) return;
    target.innerHTML = '';

    const writer = (window as any).HanziWriter.create(targetId, char, {
      width: 250,
      height: 250,
      showCharacter: false,
      padding: 5,
      strokeAnimationSpeed: 1,
      delayBetweenStrokes: 200
    });
    writers.push(writer);
  });

  startNextQuiz(review1, index);
}

function startNextQuiz(review1: any[], wordIndex: number) {
  if (activeWriterIndex >= writers.length) {
    // Word Complete
    (window as any).confetti({ particleCount: 50, spread: 60 });
    setTimeout(() => {
      const nextIndex = wordIndex + 1;
      if (nextIndex >= review1.length) {
        (window as any).structureIndex = 0;
        window.completeModule(1);
      } else {
        (window as any).structureIndex = nextIndex;
        render();
      }
    }, 1000);
    return;
  }

  writers[activeWriterIndex].quiz({
    onComplete: () => {
      activeWriterIndex++;
      startNextQuiz(review1, wordIndex);
    }
  });
}

(window as any).resetWriter = () => {
  if (writers[activeWriterIndex]) {
    writers[activeWriterIndex].quiz();
  }
};
(window as any).hintWriter = () => {
  if (writers[activeWriterIndex]) {
    writers[activeWriterIndex].animateCharacter();
  }
};

// Recall Handlers
(window as any).recallIndex = 0;
(window as any).isListening = false;
(window as any).lastHeard = null;

(window as any).toggleSpeechRecognition = (correct: string) => {
  if ((window as any).isListening && activeRecognition) {
    activeRecognition.stop();
    return;
  }

  const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
  if (!SpeechRecognition) {
    alert("Speech recognition not supported in this browser. Try Chrome!");
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = 'zh-CN';
  recognition.continuous = false;
  recognition.interimResults = true;
  activeRecognition = recognition;

  recognition.onstart = () => {
    (window as any).isListening = true;
    (window as any).lastHeard = null;
    render();

    // Auto stop after 4 seconds
    if (recognitionTimeout) clearTimeout(recognitionTimeout);
    recognitionTimeout = setTimeout(() => {
      if (activeRecognition === recognition) {
        recognition.stop();
      }
    }, 4000);
  };

  recognition.onresult = (event: any) => {
    // Check for match in interim results
    for (let i = event.resultIndex; i < event.results.length; ++i) {
      const transcriptRaw = event.results[i][0].transcript;
      
      // Normalize digits to Chinese characters
      const digitMap: Record<string, string> = {
        '0': '零', '1': '一', '2': '二', '3': '三', '4': '四',
        '5': '五', '6': '六', '7': '七', '8': '八', '9': '九'
      };
      
      const transcript = transcriptRaw.replace(/\d/g, (d: string) => digitMap[d] || d);

      // Simple matching (ignore punctuation) - Immediate stop on success
      if (transcript.includes(correct)) {
         recognition.stop(); 
         handleRecallSuccess(transcript);
         return;
      }

      if (event.results[i].isFinal) {
         (window as any).lastHeard = transcript;
         render();
      }
    }
  };

  recognition.onerror = (event: any) => {
    console.error("Speech Recognition Error", event.error);
    (window as any).isListening = false;
    (window as any).lastHeard = "Error: " + event.error;
    activeRecognition = null;
    render();
  };

  recognition.onend = () => {
    if ((window as any).isListening) {
      (window as any).isListening = false;
      render();
    }
    activeRecognition = null;
    if (recognitionTimeout) clearTimeout(recognitionTimeout);
  };

  recognition.start();
};

function handleRecallSuccess(transcript?: string) {
  (window as any).lastHeard = transcript ? `Correct! You said: "${transcript}"` : "Correct!"; 
  (window as any).confetti({ particleCount: 30 });
      
  const { review2 } = getDailyWords(state);
  const nextIndex = ((window as any).recallIndex || 0) + 1;
  
  setTimeout(() => {
    (window as any).lastHeard = null;
    (window as any).recallHintState = 0; // Reset hint state
    if (nextIndex >= review2.length) {
      (window as any).recallIndex = 0;
      window.completeModule(2);
    } else {
      (window as any).recallIndex = nextIndex;
      render();
    }
  }, 1000); // Delay to see success
}

function getRecallHintText(word: any) {
  const state = (window as any).recallHintState || 0;
  if (state === 0) return "Need a hint? 💡";
  if (state === 1) return word.cn; // Show Chinese characters
  if (state >= 2) return `🔊 ${word.pinyin}`; // Show Pinyin and allow audio
}

(window as any).recallHintState = 0;
(window as any).handleRecallHint = (correctCn: string) => {
  const currentState = (window as any).recallHintState || 0;
  
  if (currentState === 0) {
    (window as any).recallHintState = 1;
    render();
  } else if (currentState === 1) {
    (window as any).recallHintState = 2;
    render();
  } else if (currentState >= 2) {
    // Play audio
    (window as any).playAudio(correctCn, 'zh-CN');
  }
};

// Mastery Handlers
// Mastery Handlers
(window as any).masteryIndex = 0;
// Steps: 0 = Write, 1 = Sentence, 2 = Speak Malay, 3 = Next Word
(window as any).masteryStep = 0;
(window as any).isMasteryMalayRevealed = false;

(window as any).isMasteryListening = false;
(window as any).lastMasteryHeard = null;
(window as any).hasOpenedExamples = false;

(window as any).handleSentenceExampleClick = (word: string) => {
    window.open(`https://www.google.com/search?q=造句+简单+${word}`, '_blank');
    (window as any).hasOpenedExamples = true;
    render();
};

(window as any).finishSentenceCreation = () => {
    (window as any).masteryStep = 2;
    render();
};

(window as any).revealMasteryMalay = () => {
    (window as any).isMasteryMalayRevealed = true;
    render();
};

(window as any).toggleMasterySpeechRecognition = (correct: string) => {
    if ((window as any).isMasteryListening && activeMasteryRecognition) {
      activeMasteryRecognition.stop();
      return;
    }
  
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Speech recognition not supported in this browser. Try Chrome!");
      return;
    }
  
    const recognition = new SpeechRecognition();
    recognition.lang = 'ms-MY';
    recognition.continuous = false;
    recognition.interimResults = true;
    activeMasteryRecognition = recognition;
  
    recognition.onstart = () => {
      (window as any).isMasteryListening = true;
      (window as any).lastMasteryHeard = null;
      render();
  
      // Auto stop after 5 seconds
      setTimeout(() => {
        if (activeMasteryRecognition === recognition) {
          recognition.stop();
        }
      }, 5000);
    };
  
    recognition.onresult = (event: any) => {
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        const transcript = event.results[i][0].transcript;
        
        const normalize = (s: string) => s.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").trim();
        const normTranscript = normalize(transcript);
        const normCorrect = normalize(correct);
  
        if (normTranscript.includes(normCorrect) || normCorrect.includes(normTranscript)) {
           recognition.stop(); 
           (window as any).lastMasteryHeard = "Correct! 🎉";
           (window as any).confetti({ particleCount: 30, origin: { y: 0.7 } });
           
           // Transition to Step 3 (Next Word)
           (window as any).masteryStep = 3;
           render(); 
           return;
        }
  
        if (event.results[i].isFinal) {
           (window as any).lastMasteryHeard = transcript;
           render();
        }
      }
    };
  
    recognition.onerror = (event: any) => {
      console.error("Mastery Speech Error", event.error);
      (window as any).isMasteryListening = false;
      (window as any).lastMasteryHeard = "Error: " + event.error;
      activeMasteryRecognition = null;
      render();
    };
  
    recognition.onend = () => {
      if ((window as any).isMasteryListening) {
        (window as any).isMasteryListening = false;
        render();
      }
      activeMasteryRecognition = null;
    };
  
    recognition.start();
  };

let masteryWriters: any[] = [];
let activeMasteryWriterIndex = 0;

function initMasteryWriter() {
  const { review3 } = getDailyWords(state);
  const index = (window as any).masteryIndex || 0;
  // Only init writer if in Step 0
  if (!review3[index] || (window as any).masteryStep !== 0) return;

  masteryWriters = [];
  activeMasteryWriterIndex = 0;
  const characters = review3[index].cn.split('');

  characters.forEach((char, i) => {
    const targetId = `hanzi-mastery-target-${i}`;
    const target = document.getElementById(targetId);
    if (!target) return;
    target.innerHTML = '';

    const writer = (window as any).HanziWriter.create(targetId, char, {
      width: 250,
      height: 250, // Slightly smaller for mastery maybe? No, keep consist
      showCharacter: false,
      showOutline: false, // Hidden stroke mode!
      padding: 5,
      strokeAnimationSpeed: 1,
      delayBetweenStrokes: 200
    });
    masteryWriters.push(writer);
  });

  startNextMasteryQuiz();
}

function startNextMasteryQuiz() {
  if (activeMasteryWriterIndex >= masteryWriters.length) {
    // Word Complete -> Go to Sentence Mode
    (window as any).confetti({ particleCount: 50, spread: 60 });
    setTimeout(() => {
       // Transition to Step 1 (Sentence)
       (window as any).masteryStep = 1;
       (window as any).hasOpenedExamples = false;
       render();
    }, 1000);
    return;
  }

  masteryWriters[activeMasteryWriterIndex].quiz({
    onComplete: () => {
      activeMasteryWriterIndex++;
      startNextMasteryQuiz();
    }
  });
}

(window as any).resetMasteryWriter = () => {
  if (masteryWriters[activeMasteryWriterIndex]) {
    masteryWriters[activeMasteryWriterIndex].quiz();
  }
};
(window as any).hintMasteryWriter = () => {
  if (masteryWriters[activeMasteryWriterIndex]) {
    masteryWriters[activeMasteryWriterIndex].animateCharacter();
  }
};



(window as any).nextMasteryWord = () => {
  const { review3 } = getDailyWords(state);
  const nextIndex = ((window as any).masteryIndex || 0) + 1;
  (window as any).masteryStep = 0;
  (window as any).isMasteryMalayRevealed = false;
  (window as any).hasOpenedExamples = false;
  
  (window as any).isMasteryListening = false;
  (window as any).lastMasteryHeard = null;

  if (nextIndex >= review3.length) {
    (window as any).masteryIndex = 0;
    window.completeModule(3);
    
    // Auto navigate to Library for revision
    setTimeout(() => {
        window.setModule(4); // 4 is Library
    }, 1500); 

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
