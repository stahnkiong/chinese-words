const fs = require('fs');

const MATH_ADDITIONS = [
  { cn: "从小到大", en: "Ascending", pinyin: "cóng xiǎo dào dà", parts: ["计算指令 (Math Directives)"], bm: "Turutan menaik", en_pronounce: "əˈsendɪŋ", bm_pronounce: "tu-ru-tan me-na-ik" },
  { cn: "从大到小", en: "Descending", pinyin: "cóng dà dào xiǎo", parts: ["计算指令 (Math Directives)"], bm: "Turutan menurun", en_pronounce: "dɪˈsendɪŋ", bm_pronounce: "tu-ru-tan me-nu-run" },
  { cn: "合计", en: "Sum/Total", pinyin: "hé jì", parts: ["应用运算 (Word Problems)"], bm: "Jumlah", en_pronounce: "sʌm", bm_pronounce: "jum-lah" },
  { cn: "增加了", en: "Increased by", pinyin: "zēng jiā le", parts: ["应用运算 (Word Problems)"], bm: "Bertambah", en_pronounce: "ɪnˈkriːst baɪ", bm_pronounce: "ber-tam-bah" },
  { cn: "多于", en: "More than", pinyin: "duō yú", parts: ["应用运算 (Word Problems)"], bm: "Lebih daripada", en_pronounce: "mɔːr ðən", bm_pronounce: "le-bih da-ri-pa-da" },
  { cn: "剩余", en: "Remaining", pinyin: "shèng yú", parts: ["应用运算 (Word Problems)"], bm: "Baki/Sisa", en_pronounce: "rɪˈmeɪ.nɪŋ", bm_pronounce: "ba-ki" },
  { cn: "找回", en: "Change (money)", pinyin: "zhǎo huí", parts: ["应用运算 (Word Problems)"], bm: "Baki wang", en_pronounce: "tʃeɪndʒ", bm_pronounce: "ba-ki wang" },
  { cn: "减少了", en: "Decreased by", pinyin: "jiǎn shǎo le", parts: ["应用运算 (Word Problems)"], bm: "Berkurang", en_pronounce: "dɪˈkriːst baɪ", bm_pronounce: "ber-ku-rang" },
  { cn: "少于", en: "Less than", pinyin: "shǎo yú", parts: ["应用运算 (Word Problems)"], bm: "Kurang daripada", en_pronounce: "les ðən", bm_pronounce: "ku-rang da-ri-pa-da" },
  { cn: "短于", en: "Shorter than", pinyin: "duǎn yú", parts: ["应用运算 (Word Problems)"], bm: "Lebih pendek daripada", en_pronounce: "ˈʃɔːr.tər ðən", bm_pronounce: "le-bih pen-dek" },
  { cn: "积", en: "Product", pinyin: "jī", parts: ["应用运算 (Word Problems)"], bm: "Hasil darab", en_pronounce: "ˈprɒd.ʌkt", bm_pronounce: "ha-sil da-rab" },
  { cn: "乘积", en: "Product", pinyin: "chéng jī", parts: ["应用运算 (Word Problems)"], bm: "Hasil darab", en_pronounce: "ˈprɒd.ʌkt", bm_pronounce: "ha-sil da-rab" },
  { cn: "每份", en: "Each / Per", pinyin: "měi fèn", parts: ["应用运算 (Word Problems)"], bm: "Setiap bahagian", en_pronounce: "iːtʃ", bm_pronounce: "se-ti-ap" },
  { cn: "每一个", en: "Each one", pinyin: "měi yī gè", parts: ["应用运算 (Word Problems)"], bm: "Setiap satu", en_pronounce: "iːtʃ wʌn", bm_pronounce: "se-ti-ap sa-tu" },
  { cn: "双", en: "Pair / Double", pinyin: "shuāng", parts: ["应用运算 (Word Problems)"], bm: "Sepasang/Ganda dua", en_pronounce: "peər", bm_pronounce: "se-pa-sang" },
  { cn: "打", en: "Dozen", pinyin: "dá", parts: ["应用运算 (Word Problems)"], bm: "Sedozen (12)", en_pronounce: "ˈdʌz.ən", bm_pronounce: "se-do-zen" },
  { cn: "平分", en: "Divide equally", pinyin: "píng fēn", parts: ["应用运算 (Word Problems)"], bm: "Bahagi sama rata", en_pronounce: "dɪˈvaɪd iː.kwə.li", bm_pronounce: "ba-ha-gi" },
  { cn: "均分", en: "Share equally", pinyin: "jūn fēn", parts: ["应用运算 (Word Problems)"], bm: "Bahagi saksama", en_pronounce: "ʃeər iː.kwə.li", bm_pronounce: "ba-ha-gi" },
  { cn: "其中的", en: "Part of", pinyin: "qí zhōng de", parts: ["应用运算 (Word Problems)"], bm: "Sebahagian daripada", en_pronounce: "pɑːrt ɒv", bm_pronounce: "se-ba-ha-gian" },
  { cn: "单位", en: "Unit", pinyin: "dān wèi", parts: ["应用运算 (Word Problems)"], bm: "Unit", en_pronounce: "ˈjuː.nɪt", bm_pronounce: "u-nit" },
  { cn: "原来", en: "Original", pinyin: "yuán lái", parts: ["应用运算 (Word Problems)"], bm: "Asalnya", en_pronounce: "əˈrɪdʒ.ən.əl", bm_pronounce: "a-sal-nya" },
  { cn: "现在", en: "Now / Present", pinyin: "xiàn zài", parts: ["应用运算 (Word Problems)"], bm: "Sekarang", en_pronounce: "naʊ", bm_pronounce: "se-ka-rang" },
  { cn: "大约", en: "Approximately", pinyin: "dà yuē", parts: ["应用运算 (Word Problems)"], bm: "Anggaran/Kira-kira", en_pronounce: "əˈprɒk.sɪ.mət.li", bm_pronounce: "ang-ga-ran" },
  { cn: "假设", en: "Assume / If", pinyin: "jiǎ shè", parts: ["应用运算 (Word Problems)"], bm: "Andaikan/Sekiranya", en_pronounce: "əˈsuːm", bm_pronounce: "an-dai-kan" },
  { cn: "占", en: "Constitute / Account for", pinyin: "zhàn", parts: ["应用运算 (Word Problems)"], bm: "Mewakili", en_pronounce: "ˈkɒn.stɪ.tjuːt", bm_pronounce: "me-wa-ki-li" },
  { cn: "占了", en: "Accounts for", pinyin: "zhàn le", parts: ["应用运算 (Word Problems)"], bm: "Mewakili/Menduduki", en_pronounce: "əˈkaʊnts fɔːr", bm_pronounce: "me-wa-ki-li" }
];

const content = fs.readFileSync('src/data02.ts', 'utf-8');

const wordObjects = [];
const lines = content.split('\n');

for (const line of lines) {
    if (line.trim().startsWith('{')) {
        wordObjects.push(line.trim());
    }
}

// Convert additions to strings
const additionStrings = MATH_ADDITIONS.map(obj => JSON.stringify(obj).replace(/"([^"]+)":/g, '$1:').replace(/,/g, ', '));
// Re-map to ensure the formatting matches (pinyin, cn, en order doesn't strictly matter but JSON.stringify might change it, we try to match)
// Actually we can just push them as objects if we evaluate.
// For safety, let's just use string mapping.

const allWords = [...wordObjects, ...additionStrings];

const buckets = {
    science: [],
    math: [],
    chinese: [],
    history: []
};

for (const wordStr of allWords) {
    if (wordStr.includes('Science') || wordStr.includes('Needs') || wordStr.includes('Skeleton') || wordStr.includes('Circulatory') || wordStr.includes('Survival') || wordStr.includes('Dispersal') || wordStr.includes('Adaptation')) {
        buckets.science.push(wordStr);
    } else if (wordStr.includes('Math') || wordStr.includes('Directives') || wordStr.includes('Problems')) {
        buckets.math.push(wordStr);
    } else if (wordStr.includes('Monarchy') || wordStr.includes('Sovereignty') || wordStr.includes('Religious Harmony') || wordStr.includes('Heritage') || wordStr.includes('Colonization') || wordStr.includes('Local Struggle')) {
        buckets.history.push(wordStr);
    } else {
        // Default to Chinese for everything else (roots)
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
        const line = s.trim();
        const formatted = line.endsWith(',') ? line : line + ',';
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
console.log('data02.ts updated and scrambled. Total words:', allWords.length);
