import { ALL_WORDS } from './data';
import { ALL_WORDS_02 } from './data02';

export const TOTAL_WORDS = [...ALL_WORDS, ...ALL_WORDS_02];

export interface AppState {
  currentStudyDay: number; // 0-indexed day
  pace: number; // words per day
  completedModules: boolean[]; // [discovery, structure, recall, mastery]
  lastCompletedDate: string | null;
  isDataV2Mode?: boolean;
  v2StudyDay?: number;
}

const STORAGE_KEY = 'scholars_path_state';

export const defaultState: AppState = {
  currentStudyDay: 0,
  pace: 3,
  completedModules: [false, false, false, false],
  lastCompletedDate: null,
};

export function loadState(): AppState {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {
      console.error("Failed to parse state", e);
    }
  }
  return { ...defaultState };
}

export function saveState(state: AppState) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function getEffectiveStudyDay(state: AppState): number {
  if (state.isDataV2Mode) {
    const baseDays = Math.ceil(ALL_WORDS.length / state.pace);
    return baseDays + (state.v2StudyDay || 0);
  }
  return state.currentStudyDay;
}

export function getDailyWords(state: AppState) {
  const { pace } = state;
  const effectiveDay = getEffectiveStudyDay(state);
  
  const getWordsForDay = (day: number) => {
    if (day < 0) return [];
    const start = day * pace;
    return TOTAL_WORDS.slice(start, start + pace);
  };

  return {
    newWords: getWordsForDay(effectiveDay),
    review1: getWordsForDay(effectiveDay - 2),
    review2: getWordsForDay(effectiveDay - 7),
    review3: getWordsForDay(effectiveDay - 15),
  };
}

export function exportState(state: AppState): string {
  return btoa(JSON.stringify(state));
}

export function importState(encoded: string): AppState | null {
  try {
    const decoded = atob(encoded);
    return JSON.parse(decoded);
  } catch (e) {
    console.error("Failed to import state", e);
    return null;
  }
}
