export interface Word {
  cn: string;
  en: string;
  pinyin: string;
  parts: string[];
  bm?: string;
  en_pronounce?: string;
  bm_pronounce?: string;
}

export const ALL_WORDS: Word[] = [
  // Root: 一 (One)
  { cn: "一个", en: "One item", pinyin: "yí gè", parts: ["一"], bm: "Satu barang", en_pronounce: "wʌn aɪ.təm", bm_pronounce: "sa-tu ba-rang" },
  { cn: "一月", en: "January", pinyin: "yī yuè", parts: ["一"], bm: "Januari", en_pronounce: "dʒæn.ju.er.i", bm_pronounce: "ja-nu-a-ri" },
  { cn: "一起", en: "Together", pinyin: "yì qǐ", parts: ["一"], bm: "Bersama", en_pronounce: "təˈɡɛð.ər", bm_pronounce: "ber-sa-ma" },
  { cn: "第一", en: "First", pinyin: "dì yī", parts: ["一"], bm: "Pertama", en_pronounce: "fɜːrst", bm_pronounce: "per-ta-ma" },
  { cn: "一样", en: "Same", pinyin: "yí yàng", parts: ["一"], bm: "Sama", en_pronounce: "seɪm", bm_pronounce: "sa-ma" },

  // Root: 人 (Person)
  { cn: "人口", en: "Population", pinyin: "rén kǒu", parts: ["人"], bm: "Populasi", en_pronounce: "ˌpɒp.jʊˈleɪ.ʃən", bm_pronounce: "po-pu-la-si" },
  { cn: "工人", en: "Worker", pinyin: "gōng rén", parts: ["人"], bm: "Pekerja", en_pronounce: "ˈwɜːr.kər", bm_pronounce: "pe-ker-ja" },
  { cn: "人们", en: "People", pinyin: "rén men", parts: ["人"], bm: "Orang", en_pronounce: "ˈpiː.pəl", bm_pronounce: "o-rang" },
  { cn: "老人", en: "Old person", pinyin: "lǎo rén", parts: ["人"], bm: "Orang tua", en_pronounce: "oʊld ˈpɜːr.sən", bm_pronounce: "o-rang tu-a" },
  { cn: "别人", en: "Others", pinyin: "bié rén", parts: ["人"], bm: "Orang lain", en_pronounce: "ˈʌð.ərz", bm_pronounce: "o-rang la-in" },

  // Root: 大 (Big)
  { cn: "大人", en: "Adult", pinyin: "dà rén", parts: ["大"], bm: "Dewasa", en_pronounce: "əˈdʌlt", bm_pronounce: "de-wa-sa" },
  { cn: "大小", en: "Size", pinyin: "dà xiǎo", parts: ["大"], bm: "Saiz", en_pronounce: "saɪz", bm_pronounce: "sais" },
  { cn: "大家", en: "Everyone", pinyin: "dà jiā", parts: ["大"], bm: "Semua orang", en_pronounce: "ˈɛv.ri.wʌn", bm_pronounce: "se-mu-a o-rang" },
  { cn: "大雨", en: "Heavy rain", pinyin: "dà yǔ", parts: ["大"], bm: "Hujan lebat", en_pronounce: "ˈhɛv.i reɪn", bm_pronounce: "hu-jan le-bat" },
  { cn: "大学", en: "University", pinyin: "dà xué", parts: ["大"], bm: "Universiti", en_pronounce: "ˌjuː.nɪˈvɜːr.sɪ.ti", bm_pronounce: "u-ni-ver-si-ti" },

  // Root: 小 (Small)
  { cn: "小孩", en: "Child", pinyin: "xiǎo hái", parts: ["小"], bm: "Kanak-kanak", en_pronounce: "tʃaɪld", bm_pronounce: "ka-nak ka-nak" },
  { cn: "小时", en: "Hour", pinyin: "xiǎo shí", parts: ["小"], bm: "Jam", en_pronounce: "ˈaʊ.ər", bm_pronounce: "jam" },
  { cn: "小说", en: "Novel", pinyin: "xiǎo shuō", parts: ["小"], bm: "Novel", en_pronounce: "ˈnɒv.əl", bm_pronounce: "no-vel" },
  { cn: "小心", en: "Careful", pinyin: "xiǎo xīn", parts: ["小"], bm: "Berhati-hati", en_pronounce: "ˈkɛər.fəl", bm_pronounce: "ber-ha-ti ha-ti" },
  { cn: "小鸟", en: "Bird", pinyin: "xiǎo niǎo", parts: ["小"], bm: "Burung", en_pronounce: "bɜːrd", bm_pronounce: "bu-rung" },

  // Root: 工 (Work)
  { cn: "工作", en: "Job", pinyin: "gōng zuò", parts: ["工"], bm: "Kerja", en_pronounce: "dʒɒb", bm_pronounce: "ker-ja" },
  { cn: "手工", en: "Handmade", pinyin: "shǒu gōng", parts: ["工"], bm: "Buatan tangan", en_pronounce: "ˈhænd.meɪd", bm_pronounce: "bu-a-tan ta-ngan" },
  { cn: "开工", en: "Start work", pinyin: "kāi gōng", parts: ["工"], bm: "Mula kerja", en_pronounce: "stɑːrt wɜːrk", bm_pronounce: "mu-la ker-ja" },
  { cn: "义工", en: "Volunteer", pinyin: "yì gōng", parts: ["工"], bm: "Sukarelawan", en_pronounce: "ˌvɒl.ənˈtɪər", bm_pronounce: "su-ka-re-la-wan" },
  { cn: "工具", en: "Tool", pinyin: "gōng jù", parts: ["工"], bm: "Alat", en_pronounce: "tuːl", bm_pronounce: "a-lat" },

  // Root: 口 (Mouth)
  { cn: "门口", en: "Doorway", pinyin: "mén kǒu", parts: ["口"], bm: "Pintu masuk", en_pronounce: "ˈdɔːr.weɪ", bm_pronounce: "pin-tu ma-suk" },
  { cn: "出口", en: "Exit", pinyin: "chū kǒu", parts: ["口"], bm: "Keluar", en_pronounce: "ˈɛɡ.zɪt", bm_pronounce: "ke-lu-ar" },
  { cn: "胃口", en: "Appetite", pinyin: "wèi kǒu", parts: ["口"], bm: "Selera", en_pronounce: "ˈæp.ə.taɪt", bm_pronounce: "se-le-ra" },
  { cn: "口袋", en: "Pocket", pinyin: "kǒu dài", parts: ["口"], bm: "Poket", en_pronounce: "ˈpɒk.ɪt", bm_pronounce: "po-ket" },
  { cn: "借口", en: "Excuse", pinyin: "jiè kǒu", parts: ["口"], bm: "Alasan", en_pronounce: "ɪkˈskjuːs", bm_pronounce: "a-la-san" },

  // Root: 女 (Female)
  { cn: "女儿", en: "Daughter", pinyin: "nǚ ér", parts: ["女"], bm: "Anak perempuan", en_pronounce: "ˈdɔː.tər", bm_pronounce: "a-nak pe-rem-pu-an" },
  { cn: "女人", en: "Woman", pinyin: "nǚ rén", parts: ["女"], bm: "Wanita", en_pronounce: "ˈwʊm.ən", bm_pronounce: "wa-ni-ta" },
  { cn: "女生", en: "Girl student", pinyin: "nǚ shēng", parts: ["女"], bm: "Pelajar perempuan", en_pronounce: "ɡɜːrl ˈstjuː.dənt", bm_pronounce: "pe-la-jar pe-rem-pu-an" },
  { cn: "美女", en: "Beauty", pinyin: "měi nǚ", parts: ["女"], bm: "Jelitawan", en_pronounce: "ˈbjuː.ti", bm_pronounce: "je-li-ta-wan" },
  { cn: "少女", en: "Maiden", pinyin: "shào nǚ", parts: ["女"], bm: "Gadis", en_pronounce: "ˈmeɪ.dən", bm_pronounce: "ga-dis" },

  // Root: 子 (Child/Suffix)
  { cn: "儿子", en: "Son", pinyin: "ér zi", parts: ["子"], bm: "Anak lelaki", en_pronounce: "sʌn", bm_pronounce: "a-nak le-la-ki" },
  { cn: "椅子", en: "Chair", pinyin: "yǐ zi", parts: ["子"], bm: "Kerusi", en_pronounce: "tʃɛər", bm_pronounce: "ke-ru-si" },
  { cn: "杯子", en: "Cup", pinyin: "bēi zi", parts: ["子"], bm: "Cawan", en_pronounce: "kʌp", bm_pronounce: "ca-wan" },
  { cn: "孩子", en: "Child", pinyin: "hái zi", parts: ["子"], bm: "Anak", en_pronounce: "tʃaɪld", bm_pronounce: "a-nak" },
  { cn: "肚子", en: "Belly", pinyin: "dù zi", parts: ["子"], bm: "Perut", en_pronounce: "ˈbɛl.i", bm_pronounce: "pe-rut" },

  // Root: 日 (Sun/Day)
  { cn: "日子", en: "Day", pinyin: "rì zi", parts: ["日"], bm: "Hari", en_pronounce: "deɪ", bm_pronounce: "ha-ri" },
  { cn: "节日", en: "Festival", pinyin: "jié rì", parts: ["日"], bm: "Perayaan", en_pronounce: "ˈfɛs.tə.vəl", bm_pronounce: "pe-ra-ya-an" },
  { cn: "日记", en: "Diary", pinyin: "rì jì", parts: ["日"], bm: "Diari", en_pronounce: "ˈdaɪ.ə.ri", bm_pronounce: "di-a-ri" },
  { cn: "生日", en: "Birthday", pinyin: "shēng rì", parts: ["日"], bm: "Hari jadi", en_pronounce: "ˈbɜːrθ.deɪ", bm_pronounce: "ha-ri ja-di" },
  { cn: "日常", en: "Daily", pinyin: "rì cháng", parts: ["日"], bm: "Harian", en_pronounce: "ˈdeɪ.li", bm_pronounce: "ha-ri-an" },

  // Root: 月 (Moon/Month)
  { cn: "月亮", en: "Moon", pinyin: "yuè liang", parts: ["月"], bm: "Bulan", en_pronounce: "muːn", bm_pronounce: "bu-lan" },
  { cn: "月份", en: "Month", pinyin: "yuè fèn", parts: ["月"], bm: "Bulan", en_pronounce: "mʌnθ", bm_pronounce: "bu-lan" },
  { cn: "岁月", en: "Years", pinyin: "suì yuè", parts: ["月"], bm: "Tahun-tahun", en_pronounce: "jɪərz", bm_pronounce: "ta-hun ta-hun" },
  { cn: "蜜月", en: "Honeymoon", pinyin: "mì yuè", parts: ["月"], bm: "Bulan madu", en_pronounce: "ˈhʌn.i.muːn", bm_pronounce: "bu-lan ma-du" },
  { cn: "半月", en: "Half moon", pinyin: "bàn yuè", parts: ["月"], bm: "Separuh bulan", en_pronounce: "hæf muːn", bm_pronounce: "se-pa-ruh bu-lan" },

  // Root: 山 (Mountain)
  { cn: "山口", en: "Mountain pass", pinyin: "shān kǒu", parts: ["山"], bm: "Laluan gunung", en_pronounce: "ˈmaʊn.tɪn pæs", bm_pronounce: "la-lu-an gu-nung" },
  { cn: "上山", en: "Go up mountain", pinyin: "shàng shān", parts: ["山"], bm: "Naik gunung", en_pronounce: "ɡoʊ ʌp ˈmaʊn.tɪn", bm_pronounce: "na-ik gu-nung" },
  { cn: "下山", en: "Go down mountain", pinyin: "xià shān", parts: ["山"], bm: "Turun gunung", en_pronounce: "ɡoʊ daʊn ˈmaʊn.tɪn", bm_pronounce: "tu-run gu-nung" },
  { cn: "山水", en: "Scenery", pinyin: "shān shuǐ", parts: ["山"], bm: "Pemandangan", en_pronounce: "ˈsiː.nə.ri", bm_pronounce: "pe-man-da-ngan" },
  { cn: "火山", en: "Volcano", pinyin: "huǒ shān", parts: ["山"], bm: "Gunung berapi", en_pronounce: "vɒlˈkeɪ.noʊ", bm_pronounce: "gu-nung be-ra-pi" },

  // Root: 水 (Water)
  { cn: "水果", en: "Fruit", pinyin: "shuǐ guǒ", parts: ["水"], bm: "Buah-buahan", en_pronounce: "fruːt", bm_pronounce: "bu-ah bu-a-han" },
  { cn: "开水", en: "Boiled water", pinyin: "kāi shuǐ", parts: ["水"], bm: "Air masak", en_pronounce: "bɔɪld ˈwɔː.tər", bm_pronounce: "a-ir ma-sak" },
  { cn: "汽水", en: "Soda", pinyin: "qì shuǐ", parts: ["水"], bm: "Minuman ringan", en_pronounce: "ˈsoʊ.də", bm_pronounce: "mi-nu-man ri-ngan" },
  { cn: "洪水", en: "Flood", pinyin: "hóng shuǐ", parts: ["水"], bm: "Banjir", en_pronounce: "flʌd", bm_pronounce: "ban-jir" },
  { cn: "汗水", en: "Sweat", pinyin: "hàn shuǐ", parts: ["水"], bm: "Peluh", en_pronounce: "swɛt", bm_pronounce: "pe-luh" },

  // Root: 中 (Middle)
  { cn: "中国", en: "China", pinyin: "zhōng guó", parts: ["中"], bm: "China", en_pronounce: "ˈtʃaɪ.nə", bm_pronounce: "chi-na" },
  { cn: "中文", en: "Chinese", pinyin: "zhōng wén", parts: ["中"], bm: "Bahasa Cina", en_pronounce: "tʃaɪˈniːz", bm_pronounce: "ba-ha-sa ci-na" },
  { cn: "中间", en: "Middle", pinyin: "zhōng jiān", parts: ["中"], bm: "Tengah", en_pronounce: "ˈmɪd.əl", bm_pronounce: "te-ngah" },
  { cn: "中午", en: "Noon", pinyin: "zhōng wǔ", parts: ["中"], bm: "Tengah hari", en_pronounce: "nuːn", bm_pronounce: "te-ngah ha-ri" },
  { cn: "中心", en: "Center", pinyin: "zhōng xīn", parts: ["中"], bm: "Pusat", en_pronounce: "ˈsɛn.tər", bm_pronounce: "pu-sat" },

  // Root: 手 (Hand)
  { cn: "手机", en: "Cellphone", pinyin: "shǒu jī", parts: ["手"], bm: "Telefon bimbit", en_pronounce: "ˈsɛl.foʊn", bm_pronounce: "te-le-fon bim-bit" },
  { cn: "手表", en: "Watch", pinyin: "shǒu biǎo", parts: ["手"], bm: "Jam tangan", en_pronounce: "wɒtʃ", bm_pronounce: "jam ta-ngan" },
  { cn: "歌手", en: "Singer", pinyin: "gē shǒu", parts: ["手"], bm: "Penyanyi", en_pronounce: "ˈsɪŋ.ər", bm_pronounce: "pe-nya-nyi" },
  { cn: "握手", en: "Handshake", pinyin: "wò shǒu", parts: ["手"], bm: "Jabat tangan", en_pronounce: "ˈhænd.ʃeɪk", bm_pronounce: "ja-bat ta-ngan" },
  { cn: "动手", en: "Start work", pinyin: "dòng shǒu", parts: ["手"], bm: "Mula buat", en_pronounce: "stɑːrt wɜːrk", bm_pronounce: "mu-la bu-at" },

  // Root: 心 (Heart)
  { cn: "心情", en: "Mood", pinyin: "xīn qíng", parts: ["心"], bm: "Mood", en_pronounce: "muːd", bm_pronounce: "mud" },
  { cn: "关心", en: "Care", pinyin: "guān xīn", parts: ["心"], bm: "Ambil berat", en_pronounce: "kɛər", bm_pronounce: "am-bil be-rat" },
  { cn: "信心", en: "Confidence", pinyin: "xìn xīn", parts: ["心"], bm: "Keyakinan", en_pronounce: "ˈkɒn.fɪ.dəns", bm_pronounce: "ke-ya-ki-nan" },
  { cn: "担心", en: "Worry", pinyin: "dān xīn", parts: ["心"], bm: "Risau", en_pronounce: "ˈwʌr.i", bm_pronounce: "ri-sau" },
  { cn: "爱心", en: "Compassion", pinyin: "ài xīn", parts: ["心"], bm: "Kasih sayang", en_pronounce: "kəmˈpæʃ.ən", bm_pronounce: "ka-sih sa-yang" },

  // Root: 木 (Wood)
  { cn: "木头", en: "Wood", pinyin: "mù tou", parts: ["木"], bm: "Kayu", en_pronounce: "wʊd", bm_pronounce: "ka-yu" },
  { cn: "树木", en: "Trees", pinyin: "shù mù", parts: ["木"], bm: "Pokok", en_pronounce: "triːz", bm_pronounce: "po-kok" },
  { cn: "木板", en: "Plank", pinyin: "mù bǎn", parts: ["木"], bm: "Papan", en_pronounce: "plæŋk", bm_pronounce: "pa-pan" },
  { cn: "土木", en: "Civil engineering", pinyin: "tǔ mù", parts: ["木"], bm: "Kejuruteraan awam", en_pronounce: "ˈsɪv.əl ˌɛn.dʒɪˈnɪər.ɪŋ", bm_pronounce: "ke-ju-ru-te-ra-an a-wam" },
  { cn: "麻木", en: "Numb", pinyin: "má mù", parts: ["木"], bm: "Kebas", en_pronounce: "nʌm", bm_pronounce: "ke-bas" },

  // Root: 天 (Sky)
  { cn: "天气", en: "Weather", pinyin: "tiān qì", parts: ["天"], bm: "Cuaca", en_pronounce: "ˈwɛð.ər", bm_pronounce: "cu-a-ca" },
  { cn: "今天", en: "Today", pinyin: "jīn tiān", parts: ["天"], bm: "Hari ini", en_pronounce: "təˈdeɪ", bm_pronounce: "ha-ri i-ni" },
  { cn: "明天", en: "Tomorrow", pinyin: "míng tiān", parts: ["天"], bm: "Esok", en_pronounce: "təˈmɒr.oʊ", bm_pronounce: "e-sok" },
  { cn: "天空", en: "Sky", pinyin: "tiān kōng", parts: ["天"], bm: "Langit", en_pronounce: "skaɪ", bm_pronounce: "la-ngit" },
  { cn: "聊天", en: "Chat", pinyin: "liáo tiān", parts: ["天"], bm: "Berbual", en_pronounce: "tʃæt", bm_pronounce: "ber-bu-al" },

  // Root: 生 (Birth/Life)
  { cn: "学生", en: "Student", pinyin: "xué shēng", parts: ["生"], bm: "Pelajar", en_pronounce: "ˈstjuː.dənt", bm_pronounce: "pe-la-jar" },
  { cn: "生活", en: "Life", pinyin: "shēng huó", parts: ["生"], bm: "Kehidupan", en_pronounce: "laɪf", bm_pronounce: "ke-hi-du-pan" },
  { cn: "先生", en: "Mr.", pinyin: "xiān sheng", parts: ["生"], bm: "Encik", en_pronounce: "ˈmɪs.tər", bm_pronounce: "en-cik" },
  { cn: "医生", en: "Doctor", pinyin: "yī shēng", parts: ["生"], bm: "Doktor", en_pronounce: "ˈdɒk.tər", bm_pronounce: "dok-tor" },
  { cn: "出生", en: "Born", pinyin: "chū shēng", parts: ["生"], bm: "Lahir", en_pronounce: "bɔːrn", bm_pronounce: "la-hir" },

  // Root: 白 (White)
  { cn: "白色", en: "White color", pinyin: "bái sè", parts: ["白"], bm: "Warna putih", en_pronounce: "waɪt ˈkʌl.ər", bm_pronounce: "war-na pu-tih" },
  { cn: "明白", en: "Understand", pinyin: "míng bai", parts: ["白"], bm: "Faham", en_pronounce: "ˌʌn.dəˈstænd", bm_pronounce: "fa-ham" },
  { cn: "白天", en: "Daytime", pinyin: "bái tiān", parts: ["白"], bm: "Siang", en_pronounce: "ˈdeɪ.taɪm", bm_pronounce: "si-ang" },
  { cn: "空白", en: "Blank", pinyin: "kòng bái", parts: ["白"], bm: "Kosong", en_pronounce: "blæŋk", bm_pronounce: "ko-song" },
  { cn: "白菜", en: "Cabbage", pinyin: "bái cài", parts: ["白"], bm: "Kobis", en_pronounce: "ˈkæb.ɪdʒ", bm_pronounce: "ko-bis" },

  // Root: 目 (Eye)
  { cn: "目前", en: "Currently", pinyin: "mù qián", parts: ["目"], bm: "Semasa", en_pronounce: "ˈkʌr.ənt.li", bm_pronounce: "se-ma-sa" },
  { cn: "目的", en: "Goal", pinyin: "mù dì", parts: ["目"], bm: "Matlamat", en_pronounce: "ɡoʊl", bm_pronounce: "mat-la-mat" },
  { cn: "题目", en: "Topic", pinyin: "tí mù", parts: ["目"], bm: "Tajuk", en_pronounce: "ˈtɒp.ɪk", bm_pronounce: "ta-juk" },
  { cn: "节目", en: "Program", pinyin: "jié mù", parts: ["目"], bm: "Program", en_pronounce: "ˈproʊ.ɡræm", bm_pronounce: "pro-gram" },
  { cn: "目录", en: "Catalog", pinyin: "mù lù", parts: ["目"], bm: "Katalog", en_pronounce: "ˈkæt.əl.ɒɡ", bm_pronounce: "ka-ta-log" },
];
