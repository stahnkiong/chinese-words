import { ALL_WORDS } from './data';

export interface AppState {
  currentStudyDay: number; // 0-indexed day
  pace: number; // words per day
  completedModules: boolean[]; // [discovery, structure, recall, mastery]
  lastCompletedDate: string | null;
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

export function getDailyWords(state: AppState) {
  const { currentStudyDay, pace } = state;
  
  const getWordsForDay = (day: number) => {
    if (day < 0) return [];
    const start = day * pace;
    return ALL_WORDS.slice(start, start + pace);
  };

  return {
    newWords: getWordsForDay(currentStudyDay),
    review1: getWordsForDay(currentStudyDay - 2),
    review2: getWordsForDay(currentStudyDay - 7),
    review3: getWordsForDay(currentStudyDay - 15),
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
