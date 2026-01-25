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
  // Root: 石 (Stone)
  { cn: "石头", en: "Stone", pinyin: "shí tou", parts: ["石"], bm: "Batu", en_pronounce: "stoʊn", bm_pronounce: "ba-tu" },
  { cn: "石油", en: "Petroleum", pinyin: "shí yóu", parts: ["石"], bm: "Petroleum", en_pronounce: "pəˈtroʊ.li.əm", bm_pronounce: "pe-tro-li-um" },
  { cn: "宝石", en: "Gem", pinyin: "bǎo shí", parts: ["石"], bm: "Permata", en_pronounce: "dʒɛm", bm_pronounce: "per-ma-ta" },
  { cn: "化石", en: "Fossil", pinyin: "huà shí", parts: ["石"], bm: "Fosil", en_pronounce: "ˈfɒs.əl", bm_pronounce: "fo-sil" },
  { cn: "磁石", en: "Magnet", pinyin: "cí shí", parts: ["石"], bm: "Magnet", en_pronounce: "ˈmæɡ.nɪt", bm_pronounce: "mag-net" },

  // Root: 田 (Field)
  { cn: "田地", en: "Field", pinyin: "tián dì", parts: ["田"], bm: "Ladang", en_pronounce: "jiːld", bm_pronounce: "la-dang" },
  { cn: "种田", en: "Farming", pinyin: "zhòng tián", parts: ["田"], bm: "Bercucuk tanam", en_pronounce: "ˈfɑːr.mɪŋ", bm_pronounce: "ber-cu-cuk ta-nam" },
  { cn: "田野", en: "Countryside", pinyin: "tián yě", parts: ["田"], bm: "Luar bandar", en_pronounce: "ˈkʌn.tri.saɪd", bm_pronounce: "lu-ar ban-dar" },
  { cn: "稻田", en: "Paddy field", pinyin: "dào tián", parts: ["田"], bm: "Sawah padi", en_pronounce: "ˈpæd.i jiːld", bm_pronounce: "sa-wah pa-di" },
  { cn: "油田", en: "Oilfield", pinyin: "yóu tián", parts: ["田"], bm: "Ladang minyak", en_pronounce: "ˈɔɪl.jiːld", bm_pronounce: "la-dang mi-nyak" },

  // Root: 电 (Electricity)
  { cn: "电话", en: "Telephone", pinyin: "diàn huà", parts: ["电"], bm: "Telefon", en_pronounce: "ˈtɛl.ɪ.foʊn", bm_pronounce: "te-le-fon" },
  { cn: "电脑", en: "Computer", pinyin: "diàn nǎo", parts: ["电"], bm: "Komputer", en_pronounce: "kəmˈpjuː.tər", bm_pronounce: "kom-pu-ter" },
  { cn: "电视", en: "Television", pinyin: "diàn shì", parts: ["电"], bm: "Televisyen", en_pronounce: "ˈtɛl.ə.vɪʒ.ən", bm_pronounce: "te-le-vi-syen" },
  { cn: "电影", en: "Movie", pinyin: "diàn yǐng", parts: ["电"], bm: "Filem", en_pronounce: "ˈmuː.vi", bm_pronounce: "fi-lem" },
  { cn: "电池", en: "Battery", pinyin: "diàn chí", parts: ["电"], bm: "Bateri", en_pronounce: "ˈbæt.ər.i", bm_pronounce: "ba-te-ri" },

  // Root: 火 (Fire)
  { cn: "火锅", en: "Hotpot", pinyin: "huǒ guō", parts: ["火"], bm: "Kuali panas", en_pronounce: "hɒt.pɒt", bm_pronounce: "ku-a-li pa-nas" },
  { cn: "火苗", en: "Flame", pinyin: "huǒ miáo", parts: ["火"], bm: "Nyalaan api", en_pronounce: "fleɪm", bm_pronounce: "nya-la-an a-pi" },
  { cn: "大火", en: "Big fire", pinyin: "dà huǒ", parts: ["火"], bm: "Api besar", en_pronounce: "bɪɡ faɪər", bm_pronounce: "a-pi be-sar" },
  { cn: "灭火", en: "Extinguish fire", pinyin: "miè huǒ", parts: ["火"], bm: "Padam api", en_pronounce: "ɪkˈstɪŋ.ɡwɪʃ faɪər", bm_pronounce: "pa-dam a-pi" },
  { cn: "火把", en: "Torch", pinyin: "huǒ bǎ", parts: ["火"], bm: "Obor", en_pronounce: "tɔːrtʃ", bm_pronounce: "o-bor" },

  // Root: 耳 (Ear)
  { cn: "耳朵", en: "Ear", pinyin: "ěr duo", parts: ["耳"], bm: "Telinga", en_pronounce: "ɪər", bm_pronounce: "te-li-nga" },
  { cn: "耳机", en: "Headphones", pinyin: "ěr jī", parts: ["耳"], bm: "Fon kepala", en_pronounce: "ˈhɛd.foʊnz", bm_pronounce: "fon ke-pa-la" },
  { cn: "木耳", en: "Wood ear", pinyin: "mù ěr", parts: ["耳"], bm: "Kulat telinga kera", en_pronounce: "wʊd ɪər", bm_pronounce: "ku-lat te-li-nga ke-ra" },
  { cn: "刺耳", en: "Piercing", pinyin: "cì ěr", parts: ["耳"], bm: "Menyakitkan telinga", en_pronounce: "ˈpɪər.sɪŋ", bm_pronounce: "me-nya-kit-kan te-li-nga" },
  { cn: "悦耳", en: "Melodious", pinyin: "yuè ěr", parts: ["耳"], bm: "Merdu", en_pronounce: "məˈloʊ.di.əs", bm_pronounce: "mer-du" },

  // Root: 雨 (Rain)
  { cn: "下雨", en: "Raining", pinyin: "xià yǔ", parts: ["雨"], bm: "Hujan", en_pronounce: "ˈreɪ.nɪŋ", bm_pronounce: "hu-jan" },
  { cn: "雨衣", en: "Raincoat", pinyin: "yǔ yī", parts: ["雨"], bm: "Baju hujan", en_pronounce: "ˈreɪn.koʊt", bm_pronounce: "ba-ju hu-jan" },
  { cn: "雨伞", en: "Umbrella", pinyin: "yǔ sǎn", parts: ["雨"], bm: "Payung", en_pronounce: "ʌmˈbrɛl.ə", bm_pronounce: "pa-yung" },
  { cn: "风雨", en: "Wind and rain", pinyin: "fēng yǔ", parts: ["雨"], bm: "Angin dan hujan", en_pronounce: "wɪnd ənd reɪn", bm_pronounce: "a-ngin dan hu-jan" },
  { cn: "暴雨", en: "Rainstorm", pinyin: "bào yǔ", parts: ["雨"], bm: "Ribut hujan", en_pronounce: "ˈreɪn.stɔːrm", bm_pronounce: "ri-but hu-jan" },

  // Root: 车 (Car)
  { cn: "汽车", en: "Car", pinyin: "qì chē", parts: ["车"], bm: "Kereta", en_pronounce: "kɑːr", bm_pronounce: "ke-re-ta" },
  { cn: "车站", en: "Station", pinyin: "chē zhàn", parts: ["车"], bm: "Stesen", en_pronounce: "ˈsteɪ.ʃən", bm_pronounce: "ste-sen" },
  { cn: "马车", en: "Carriage", pinyin: "mǎ chē", parts: ["车"], bm: "Kereta kuda", en_pronounce: "ˈkær.ɪdʒ", bm_pronounce: "ke-re-ta ku-da" },
  { cn: "卡车", en: "Truck", pinyin: "kǎ chē", parts: ["车"], bm: "Lori", en_pronounce: "trʌk", bm_pronounce: "lo-ri" },
  { cn: "跑车", en: "Sports car", pinyin: "pǎo chē", parts: ["车"], bm: "Kereta sukan", en_pronounce: "spɔːrts kɑːr", bm_pronounce: "ke-re-ta su-kan" },

  // Root: 马 (Horse)
  { cn: "马路", en: "Road", pinyin: "mǎ lù", parts: ["马"], bm: "Jalan raya", en_pronounce: "roʊd", bm_pronounce: "ja-lan ra-ya" },
  { cn: "马上", en: "Immediately", pinyin: "mǎ shàng", parts: ["马"], bm: "Segera", en_pronounce: "ɪˈmiː.di.ət.li", bm_pronounce: "se-ge-ra" },
  { cn: "木马", en: "Wooden horse", pinyin: "mù mǎ", parts: ["马"], bm: "Kuda kayu", en_pronounce: "ˈwʊd.ən hɔːrs", bm_pronounce: "ku-da ka-yu" },
  { cn: "斑马", en: "Zebra", pinyin: "bān mǎ", parts: ["马"], bm: "Kuda belang", en_pronounce: "ˈziː.brə", bm_pronounce: "ku-da be-lang" },
  { cn: "海马", en: "Seahorse", pinyin: "hǎi mǎ", parts: ["马"], bm: "Kuda laut", en_pronounce: "ˈsiː.hɔːrs", bm_pronounce: "ku-da la-ut" },

  // Root: 足 (Foot)
  { cn: "足球", en: "Soccer", pinyin: "zú qiú", parts: ["足"], bm: "Bola sepak", en_pronounce: "ˈsɒk.ər", bm_pronounce: "bo-la se-pak" },
  { cn: "手足", en: "Siblings", pinyin: "shǒu zú", parts: ["足"], bm: "Adik-beradik", en_pronounce: "ˈsɪb.lɪŋz", bm_pronounce: "a-dik be-ra-dik" },
  { cn: "远足", en: "Hiking", pinyin: "yuǎn zú", parts: ["足"], bm: "Mengembara", en_pronounce: "ˈhaɪ.kɪŋ", bm_pronounce: "me-ngem-ba-ra" },
  { cn: "足够", en: "Enough", pinyin: "zú gòu", parts: ["足"], bm: "Cukup", en_pronounce: "ɪˈnʌf", bm_pronounce: "cu-kup" },
  { cn: "满足", en: "Satisfied", pinyin: "mǎn zú", parts: ["足"], bm: "Puas hati", en_pronounce: "ˈsæt.ɪs.faɪd", bm_pronounce: "pu-as ha-ti" },

  // Root: 门 (Door)
  { cn: "大门", en: "Main gate", pinyin: "dà mén", parts: ["门"], bm: "Pintu pagar", en_pronounce: "meɪn ɡeɪt", bm_pronounce: "pin-tu pa-gar" },
  { cn: "开门", en: "Open door", pinyin: "kāi mén", parts: ["门"], bm: "Buka pintu", en_pronounce: "ˈoʊ.pən dɔːr", bm_pronounce: "bu-ka pin-tu" },
  { cn: "关门", en: "Close door", pinyin: "guān mén", parts: ["门"], bm: "Tutup pintu", en_pronounce: "kloʊs dɔːr", bm_pronounce: "tu-tup pin-tu" },
  { cn: "出门", en: "Go out", pinyin: "chū mén", parts: ["门"], bm: "Keluar", en_pronounce: "ɡoʊ aʊt", bm_pronounce: "ke-lu-ar" },
  { cn: "门票", en: "Ticket", pinyin: "mén piào", parts: ["门"], bm: "Tiket", en_pronounce: "ˈtɪk.ɪt", bm_pronounce: "ti-ket" }
];
