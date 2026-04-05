const fs = require('fs');

const content = fs.readFileSync('src/data02.ts', 'utf-8');
const lines = content.split('\n');

const allWords = [];
for (const line of lines) {
    if (line.trim().startsWith('{')) {
        allWords.push(line.trim());
    }
}

const buckets = {
    science: [],
    math: [],
    chinese: [],
    history: []
};

for (const wordStr of allWords) {
    if (wordStr.includes('Science') || wordStr.includes('Needs') || wordStr.includes('Skeleton') || wordStr.includes('Circulatory') || wordStr.includes('Survival') || wordStr.includes('Dispersal') || wordStr.includes('Adaptation') || wordStr.includes('Wait')) {
        buckets.science.push(wordStr);
    } else if (wordStr.includes('Math') || wordStr.includes('Directives') || wordStr.includes('Problems')) {
        buckets.math.push(wordStr);
    } else if (wordStr.includes('Monarchy') || wordStr.includes('Sovereignty') || wordStr.includes('Religious Harmony') || wordStr.includes('Heritage') || wordStr.includes('Colonization') || wordStr.includes('Local Struggle')) {
        buckets.history.push(wordStr);
    } else {
        buckets.chinese.push(wordStr);
    }
}

const result = [];
const bucketOrder = ['science', 'math', 'chinese', 'history'];
const indices = { science: 0, math: 0, chinese: 0, history: 0 };
const groupSize = 5;

let added = true;
while (added) {
  added = false;
  for (const bucketName of bucketOrder) {
    const bucket = buckets[bucketName];
    if (indices[bucketName] < bucket.length) {
      const chunk = bucket.slice(indices[bucketName], indices[bucketName] + groupSize);
      result.push(`  // Group - ${bucketName.toUpperCase()}`);
      result.push(...chunk.map(s => {
          const formatted = s.endsWith(',') ? s : s + ',';
          return `  ${formatted}`;
      }));
      indices[bucketName] += groupSize;
      added = true;
    }
  }
}

const output = `import type { Word } from './data';

export const ALL_WORDS_02: Word[] = [
${result.join('\n').replace(/,$/, '')}
];
`;

fs.writeFileSync('src/data02.ts', output);
console.log('data02.ts scrambled successfully. Total words:', allWords.length);
