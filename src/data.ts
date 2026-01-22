export interface Word {
  cn: string;
  en: string;
  pinyin: string;
  parts: string[];
}

export const ALL_WORDS: Word[] = [
  // Root: 一 (One)
  { cn: "一个", en: "One item", pinyin: "yí gè", parts: ["一"] },
  { cn: "一月", en: "January", pinyin: "yī yuè", parts: ["一"] },
  { cn: "一起", en: "Together", pinyin: "yì qǐ", parts: ["一"] },
  { cn: "第一", en: "First", pinyin: "dì yī", parts: ["一"] },
  { cn: "一样", en: "Same", pinyin: "yí yàng", parts: ["一"] },

  // Root: 人 (Person)
  { cn: "人口", en: "Population", pinyin: "rén kǒu", parts: ["人"] },
  { cn: "工人", en: "Worker", pinyin: "gōng rén", parts: ["人"] },
  { cn: "人们", en: "People", pinyin: "rén men", parts: ["人"] },
  { cn: "老人", en: "Old person", pinyin: "lǎo rén", parts: ["人"] },
  { cn: "别人", en: "Others", pinyin: "bié rén", parts: ["人"] },

  // Root: 大 (Big)
  { cn: "大人", en: "Adult", pinyin: "dà rén", parts: ["大"] },
  { cn: "大小", en: "Size", pinyin: "dà xiǎo", parts: ["大"] },
  { cn: "大家", en: "Everyone", pinyin: "dà jiā", parts: ["大"] },
  { cn: "大雨", en: "Heavy rain", pinyin: "dà yǔ", parts: ["大"] },
  { cn: "大学", en: "University", pinyin: "dà xué", parts: ["大"] },

  // Root: 小 (Small)
  { cn: "小孩", en: "Child", pinyin: "xiǎo hái", parts: ["小"] },
  { cn: "小时", en: "Hour", pinyin: "xiǎo shí", parts: ["小"] },
  { cn: "小说", en: "Novel", pinyin: "xiǎo shuō", parts: ["小"] },
  { cn: "小心", en: "Careful", pinyin: "xiǎo xīn", parts: ["小"] },
  { cn: "小鸟", en: "Bird", pinyin: "xiǎo niǎo", parts: ["小"] },

  // Root: 工 (Work)
  { cn: "工作", en: "Job", pinyin: "gōng zuò", parts: ["工"] },
  { cn: "手工", en: "Handmade", pinyin: "shǒu gōng", parts: ["工"] },
  { cn: "开工", en: "Start work", pinyin: "kāi gōng", parts: ["工"] },
  { cn: "义工", en: "Volunteer", pinyin: "yì gōng", parts: ["工"] },
  { cn: "工具", en: "Tool", pinyin: "gōng jù", parts: ["工"] },

  // Root: 口 (Mouth)
  { cn: "门口", en: "Doorway", pinyin: "mén kǒu", parts: ["口"] },
  { cn: "出口", en: "Exit", pinyin: "chū kǒu", parts: ["口"] },
  { cn: "胃口", en: "Appetite", pinyin: "wèi kǒu", parts: ["口"] },
  { cn: "口袋", en: "Pocket", pinyin: "kǒu dài", parts: ["口"] },
  { cn: "借口", en: "Excuse", pinyin: "jiè kǒu", parts: ["口"] },

  // Root: 女 (Female)
  { cn: "女儿", en: "Daughter", pinyin: "nǚ ér", parts: ["女"] },
  { cn: "女人", en: "Woman", pinyin: "nǚ rén", parts: ["女"] },
  { cn: "女生", en: "Girl student", pinyin: "nǚ shēng", parts: ["女"] },
  { cn: "美女", en: "Beauty", pinyin: "měi nǚ", parts: ["女"] },
  { cn: "少女", en: "Maiden", pinyin: "shào nǚ", parts: ["女"] },

  // Root: 子 (Child/Suffix)
  { cn: "儿子", en: "Son", pinyin: "ér zi", parts: ["子"] },
  { cn: "椅子", en: "Chair", pinyin: "yǐ zi", parts: ["子"] },
  { cn: "杯子", en: "Cup", pinyin: "bēi zi", parts: ["子"] },
  { cn: "孩子", en: "Child", pinyin: "hái zi", parts: ["子"] },
  { cn: "肚子", en: "Belly", pinyin: "dù zi", parts: ["子"] },

  // Root: 日 (Sun/Day)
  { cn: "日子", en: "Day", pinyin: "rì zi", parts: ["日"] },
  { cn: "节日", en: "Festival", pinyin: "jié rì", parts: ["日"] },
  { cn: "日记", en: "Diary", pinyin: "rì jì", parts: ["日"] },
  { cn: "生日", en: "Birthday", pinyin: "shēng rì", parts: ["日"] },
  { cn: "日常", en: "Daily", pinyin: "rì cháng", parts: ["日"] },

  // Root: 月 (Moon/Month)
  { cn: "月亮", en: "Moon", pinyin: "yuè liang", parts: ["月"] },
  { cn: "月份", en: "Month", pinyin: "yuè fèn", parts: ["月"] },
  { cn: "岁月", en: "Years", pinyin: "suì yuè", parts: ["月"] },
  { cn: "蜜月", en: "Honeymoon", pinyin: "mì yuè", parts: ["月"] },
  { cn: "半月", en: "Half moon", pinyin: "bàn yuè", parts: ["月"] },

  // Root: 山 (Mountain)
  { cn: "山口", en: "Mountain pass", pinyin: "shān kǒu", parts: ["山"] },
  { cn: "上山", en: "Go up mountain", pinyin: "shàng shān", parts: ["山"] },
  { cn: "下山", en: "Go down mountain", pinyin: "xià shān", parts: ["山"] },
  { cn: "山水", en: "Scenery", pinyin: "shān shuǐ", parts: ["山"] },
  { cn: "火山", en: "Volcano", pinyin: "huǒ shān", parts: ["山"] },

  // Root: 水 (Water)
  { cn: "水果", en: "Fruit", pinyin: "shuǐ guǒ", parts: ["水"] },
  { cn: "开水", en: "Boiled water", pinyin: "kāi shuǐ", parts: ["水"] },
  { cn: "汽水", en: "Soda", pinyin: "qì shuǐ", parts: ["水"] },
  { cn: "洪水", en: "Flood", pinyin: "hóng shuǐ", parts: ["水"] },
  { cn: "汗水", en: "Sweat", pinyin: "hàn shuǐ", parts: ["水"] },

  // Root: 中 (Middle)
  { cn: "中国", en: "China", pinyin: "zhōng guó", parts: ["中"] },
  { cn: "中文", en: "Chinese", pinyin: "zhōng wén", parts: ["中"] },
  { cn: "中间", en: "Middle", pinyin: "zhōng jiān", parts: ["中"] },
  { cn: "中午", en: "Noon", pinyin: "zhōng wǔ", parts: ["中"] },
  { cn: "中心", en: "Center", pinyin: "zhōng xīn", parts: ["中"] },

  // Root: 手 (Hand)
  { cn: "手机", en: "Cellphone", pinyin: "shǒu jī", parts: ["手"] },
  { cn: "手表", en: "Watch", pinyin: "shǒu biǎo", parts: ["手"] },
  { cn: "歌手", en: "Singer", pinyin: "gē shǒu", parts: ["手"] },
  { cn: "握手", en: "Handshake", pinyin: "wò shǒu", parts: ["手"] },
  { cn: "动手", en: "Start work", pinyin: "dòng shǒu", parts: ["手"] },

  // Root: 心 (Heart)
  { cn: "心情", en: "Mood", pinyin: "xīn qíng", parts: ["心"] },
  { cn: "关心", en: "Care", pinyin: "guān xīn", parts: ["心"] },
  { cn: "信心", en: "Confidence", pinyin: "xìn xīn", parts: ["心"] },
  { cn: "担心", en: "Worry", pinyin: "dān xīn", parts: ["心"] },
  { cn: "爱心", en: "Compassion", pinyin: "ài xīn", parts: ["心"] },

  // Root: 木 (Wood)
  { cn: "木头", en: "Wood", pinyin: "mù tou", parts: ["木"] },
  { cn: "树木", en: "Trees", pinyin: "shù mù", parts: ["木"] },
  { cn: "木板", en: "Plank", pinyin: "mù bǎn", parts: ["木"] },
  { cn: "土木", en: "Civil engineering", pinyin: "tǔ mù", parts: ["木"] },
  { cn: "麻木", en: "Numb", pinyin: "má mù", parts: ["木"] },

  // Root: 天 (Sky)
  { cn: "天气", en: "Weather", pinyin: "tiān qì", parts: ["天"] },
  { cn: "今天", en: "Today", pinyin: "jīn tiān", parts: ["天"] },
  { cn: "明天", en: "Tomorrow", pinyin: "míng tiān", parts: ["天"] },
  { cn: "天空", en: "Sky", pinyin: "tiān kōng", parts: ["天"] },
  { cn: "聊天", en: "Chat", pinyin: "liáo tiān", parts: ["天"] },

  // Root: 生 (Birth/Life)
  { cn: "学生", en: "Student", pinyin: "xué shēng", parts: ["生"] },
  { cn: "生活", en: "Life", pinyin: "shēng huó", parts: ["生"] },
  { cn: "先生", en: "Mr.", pinyin: "xiān sheng", parts: ["生"] },
  { cn: "医生", en: "Doctor", pinyin: "yī shēng", parts: ["生"] },
  { cn: "出生", en: "Born", pinyin: "chū shēng", parts: ["生"] },

  // Root: 白 (White)
  { cn: "白色", en: "White color", pinyin: "bái sè", parts: ["白"] },
  { cn: "明白", en: "Understand", pinyin: "míng bai", parts: ["白"] },
  { cn: "白天", en: "Daytime", pinyin: "bái tiān", parts: ["白"] },
  { cn: "空白", en: "Blank", pinyin: "kòng bái", parts: ["白"] },
  { cn: "白菜", en: "Cabbage", pinyin: "bái cài", parts: ["白"] },

  // Root: 目 (Eye)
  { cn: "目前", en: "Currently", pinyin: "mù qián", parts: ["目"] },
  { cn: "目的", en: "Goal", pinyin: "mù dì", parts: ["目"] },
  { cn: "题目", en: "Topic", pinyin: "tí mù", parts: ["目"] },
  { cn: "节目", en: "Program", pinyin: "jié mù", parts: ["目"] },
  { cn: "目录", en: "Catalog", pinyin: "mù lù", parts: ["目"] },
];
