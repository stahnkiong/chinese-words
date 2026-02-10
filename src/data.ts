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

  // Root: 二 (Two)
  { cn: "二十", en: "Twenty", pinyin: "èr shí", parts: ["二"], bm: "Dua puluh", en_pronounce: "ˈtwen.ti", bm_pronounce: "du-a pu-luh" },
  { cn: "二月", en: "February", pinyin: "èr yuè", parts: ["二"], bm: "Februari", en_pronounce: "ˈfeb.ru.er.i", bm_pronounce: "feb-ru-a-ri" },
  { cn: "第二", en: "Second", pinyin: "dì èr", parts: ["二"], bm: "Kedua", en_pronounce: "ˈsek.ənd", bm_pronounce: "ke-du-a" },
  { cn: "二手", en: "Second-hand", pinyin: "èr shǒu", parts: ["二"], bm: "Barangan terpakai", en_pronounce: "ˈsek.ənd.hænd", bm_pronounce: "ba-ra-ngan ter-pa-kai" },
  { cn: "二话", en: "Second thought", pinyin: "èr huà", parts: ["二"], bm: "Fikir dua kali", en_pronounce: "ˈsek.ənd θɔːt", bm_pronounce: "fi-kir du-a ka-li" },

  // Root: 三 (Three)
  { cn: "三个", en: "Three items", pinyin: "sān gè", parts: ["三"], bm: "Tiga barang", en_pronounce: "θriː aɪ.təmz", bm_pronounce: "ti-ga ba-rang" },
  { cn: "三月", en: "March", pinyin: "sān yuè", parts: ["三"], bm: "Mac", en_pronounce: "mɑːrtʃ", bm_pronounce: "mac" },
  { cn: "第三", en: "Third", pinyin: "dì sān", parts: ["三"], bm: "Ketiga", en_pronounce: "θɜːrd", bm_pronounce: "ke-ti-ga" },
  { cn: "三个月", en: "Three months", pinyin: "sān gè yuè", parts: ["三"], bm: "Tiga bulan", en_pronounce: "θriː mʌnθs", bm_pronounce: "ti-ga bu-lan" },
  { cn: "三心二意", en: "Indecisive", pinyin: "sān xīn èr yì", parts: ["三"], bm: "Tiduk tetap hati", en_pronounce: "ˌɪn.dɪˈsaɪ.sɪv", bm_pronounce: "ti-dak te-tap ha-ti" },

  // Root: 十 (Ten)
  { cn: "十个", en: "Ten items", pinyin: "shí gè", parts: ["十"], bm: "Sepuluh barang", en_pronounce: "ten aɪ.təmz", bm_pronounce: "se-pu-luh ba-rang" },
  { cn: "十月", en: "October", pinyin: "shí yuè", parts: ["十"], bm: "Oktober", en_pronounce: "ɒkˈtoʊ.bər", bm_pronounce: "ok-to-ber" },
  { cn: "十分", en: "Very", pinyin: "shí fēn", parts: ["十"], bm: "Sangat", en_pronounce: "ˈver.i", bm_pronounce: "sa-ngat" },
  { cn: "十字路口", en: "Crossroads", pinyin: "shí zì lù kǒu", parts: ["十"], bm: "Simpang empat", en_pronounce: "ˈkrɒs.roʊdz", bm_pronounce: "sim-pang em-pat" },
  { cn: "十足", en: "Full of", pinyin: "shí zú", parts: ["十"], bm: "Penuh", en_pronounce: "fʊl əv", bm_pronounce: "pe-nuh" },

  // Root: 上 (Up)
  { cn: "上面", en: "Above", pinyin: "shàng mian", parts: ["上"], bm: "Atas", en_pronounce: "əˈbʌv", bm_pronounce: "a-tas" },
  { cn: "上学", en: "Go to school", pinyin: "shàng xué", parts: ["上"], bm: "Pergi sekolah", en_pronounce: "ɡoʊ tuː skuːl", bm_pronounce: "per-gi se-ko-lah" },
  { cn: "上午", en: "Morning", pinyin: "shàng wǔ", parts: ["上"], bm: "Pagi", en_pronounce: "ˈmɔːr.nɪŋ", bm_pronounce: "pa-gi" },
  { cn: "上班", en: "Go to work", pinyin: "shàng bān", parts: ["上"], bm: "Pergi kerja", en_pronounce: "ɡoʊ tuː wɜːrk", bm_pronounce: "per-gi ker-ja" },
  { cn: "车上", en: "In the car", pinyin: "chē shàng", parts: ["上"], bm: "Dalam kereta", en_pronounce: "ɪn ðə kɑːr", bm_pronounce: "da-lam ke-re-ta" },

  // Root: 下 (Down)
  { cn: "下面", en: "Below", pinyin: "xià mian", parts: ["下"], bm: "Bawah", en_pronounce: "bɪˈloʊ", bm_pronounce: "ba-wah" },
  { cn: "下课", en: "Finish class", pinyin: "xià kè", parts: ["下"], bm: "Habis kelas", en_pronounce: "ˈfɪn.ɪʃ klæs", bm_pronounce: "ha-bis ke-las" },
  { cn: "下午", en: "Afternoon", pinyin: "xià wǔ", parts: ["下"], bm: "Petang", en_pronounce: "ˌæf.tərˈnuːn", bm_pronounce: "pe-tang" },
  { cn: "下班", en: "Finish work", pinyin: "xià bān", parts: ["下"], bm: "Habis kerja", en_pronounce: "ˈfɪn.ɪʃ wɜːrk", bm_pronounce: "ha-bis ker-ja" },
  { cn: "乡下", en: "Countryside", pinyin: "xiāng xià", parts: ["下"], bm: "Kampung", en_pronounce: "ˈkʌn.tri.saɪd", bm_pronounce: "kam-pung" },

  // Root: 爸 (Dad)
  { cn: "爸爸", en: "Father", pinyin: "bà ba", parts: ["爸"], bm: "Bapa", en_pronounce: "ˈfɑː.ðər", bm_pronounce: "ba-pa" },
  { cn: "老爸", en: "Dad", pinyin: "lǎo bà", parts: ["爸"], bm: "Ayah", en_pronounce: "dæd", bm_pronounce: "a-yah" },
  { cn: "干爸", en: "Godfather", pinyin: "gān bà", parts: ["爸"], bm: "Bapa angkat", en_pronounce: "ˈɡɒd.fɑː.ðər", bm_pronounce: "ba-pa ang-kat" },
  { cn: "爸妈", en: "Parents", pinyin: "bà mā", parts: ["爸"], bm: "Ibu bapa", en_pronounce: "ˈpeə.rənts", bm_pronounce: "i-bu ba-pa" },
  { cn: "好爸", en: "Good dad", pinyin: "hǎo bà", parts: ["爸"], bm: "Bapa yang baik", en_pronounce: "ɡʊd dæd", bm_pronounce: "ba-pa yang ba-ik" },

  // Root: 妈 (Mom)
  { cn: "妈妈", en: "Mother", pinyin: "mā ma", parts: ["妈"], bm: "Emak", en_pronounce: "ˈmʌð.ər", bm_pronounce: "e-mak" },
  { cn: "大妈", en: "Auntie", pinyin: "dà mā", parts: ["妈"], bm: "Makcik", en_pronounce: "ˈɑːn.ti", bm_pronounce: "mak-cik" },
  { cn: "奶妈", en: "Wet nurse", pinyin: "nǎi mā", parts: ["妈"], bm: "Ibu susuan", en_pronounce: "wet nɜːrs", bm_pronounce: "i-bu su-su-an" },
  { cn: "后妈", en: "Stepmother", pinyin: "hòu mā", parts: ["妈"], bm: "Ibu tiri", en_pronounce: "ˈstep.mʌð.ər", bm_pronounce: "i-bu ti-ri" },
  { cn: "母妈", en: "Motherly", pinyin: "mǔ mā", parts: ["妈"], bm: "Keibuan", en_pronounce: "ˈmʌð.ə.li", bm_pronounce: "ke-i-bu-an" },

  // Root: 头 (Head)
  { cn: "头发", en: "Hair", pinyin: "tóu fa", parts: ["头"], bm: "Rambut", en_pronounce: "heər", bm_pronounce: "ram-but" },
  { cn: "头痛", en: "Headache", pinyin: "tóu tòng", parts: ["头"], bm: "Sakit kepala", en_pronounce: "ˈhed.eɪk", bm_pronounce: "sa-kit ke-pa-la" },
  { cn: "口头", en: "Oral", pinyin: "kǒu tóu", parts: ["头"], bm: "Lisan", en_pronounce: "ˈɔː.rəl", bm_pronounce: "li-san" },
  { cn: "回头", en: "Turn head", pinyin: "huí tóu", parts: ["头"], bm: "Pusing belakang", en_pronounce: "tɜːrn hed", bm_pronounce: "pu-sing be-la-kang" },
  { cn: "低头", en: "Bow head", pinyin: "dī tóu", parts: ["头"], bm: "Tunduk kepala", en_pronounce: "baʊ hed", bm_pronounce: "tun-duk ke-pa-la" },

  // Root: 面 (Face/Noodles)
  { cn: "面条", en: "Noodles", pinyin: "miàn tiáo", parts: ["面"], bm: "Mee", en_pronounce: "ˈnuː.dəlz", bm_pronounce: "mi" },
  { cn: "面子", en: "Face/Pride", pinyin: "miàn zi", parts: ["面"], bm: "Maruah", en_pronounce: "praɪd", bm_pronounce: "ma-ru-ah" },
  { cn: "面包", en: "Bread", pinyin: "miàn bāo", parts: ["面"], bm: "Roti", en_pronounce: "bred", bm_pronounce: "ro-ti" },
  { cn: "洗面奶", en: "Face wash", pinyin: "xǐ miàn nǎi", parts: ["面"], bm: "Pencuci muka", en_pronounce: "feɪs wɒʃ", bm_pronounce: "pen-cu-ci mu-ka" },
  { cn: "当面", en: "In person", pinyin: "dāng miàn", parts: ["面"], bm: "Bersemuka", en_pronounce: "ɪn ˈpɜː.sən", bm_pronounce: "ber-se-mu-ka" },

  // Root: 牙 (Tooth)
  { cn: "牙刷", en: "Toothbrush", pinyin: "yá shuā", parts: ["牙"], bm: "Berus gigi", en_pronounce: "ˈtuːθ.brʌʃ", bm_pronounce: "be-rus gi-gi" },
  { cn: "牙膏", en: "Toothpaste", pinyin: "yá gāo", parts: ["牙"], bm: "Ubat gigi", en_pronounce: "ˈtuːθ.peɪst", bm_pronounce: "u-bat gi-gi" },
  { cn: "牙医", en: "Dentist", pinyin: "yá yī", parts: ["牙"], bm: "Doktor gigi", en_pronounce: "ˈden.tɪst", bm_pronounce: "dok-tor gi-gi" },
  { cn: "门牙", en: "Front tooth", pinyin: "mén yá", parts: ["牙"], bm: "Gigi depan", en_pronounce: "frʌnt tuːθ", bm_pronounce: "gi-gi de-pan" },
  { cn: "虫牙", en: "Cavity", pinyin: "chóng yá", parts: ["牙"], bm: "Gigi berlubang", en_pronounce: "ˈkæv.ə.ti", bm_pronounce: "gi-gi ber-lu-bang" },

  // Root: 耳 (Ear)
  { cn: "耳朵", en: "Ear", pinyin: "ěr duo", parts: ["耳"], bm: "Telinga", en_pronounce: "ɪər", bm_pronounce: "te-li-nga" },
  { cn: "耳机", en: "Headphones", pinyin: "ěr jī", parts: ["耳"], bm: "Fon kepala", en_pronounce: "ˈhɛd.foʊnz", bm_pronounce: "fon ke-pa-la" },
  { cn: "木耳", en: "Wood ear", pinyin: "mù ěr", parts: ["耳"], bm: "Kulat telinga kera", en_pronounce: "wʊd ɪər", bm_pronounce: "ku-lat te-li-nga ke-ra" },
  { cn: "刺耳", en: "Piercing", pinyin: "cì ěr", parts: ["耳"], bm: "Menyakitkan telinga", en_pronounce: "ˈpɪər.sɪŋ", bm_pronounce: "me-nya-kit-kan te-li-nga" },
  { cn: "悦耳", en: "Melodious", pinyin: "yuè ěr", parts: ["耳"], bm: "Merdu", en_pronounce: "məˈloʊ.di.əs", bm_pronounce: "mer-du" },

  // Root: 目 (Eye)
  { cn: "目前", en: "Currently", pinyin: "mù qián", parts: ["目"], bm: "Semasa", en_pronounce: "ˈkʌr.ənt.li", bm_pronounce: "se-ma-sa" },
  { cn: "目的", en: "Goal", pinyin: "mù dì", parts: ["目"], bm: "Matlamat", en_pronounce: "ɡoʊl", bm_pronounce: "mat-la-mat" },
  { cn: "题目", en: "Topic", pinyin: "tí mù", parts: ["目"], bm: "Tajuk", en_pronounce: "ˈtɒp.ɪk", bm_pronounce: "ta-juk" },
  { cn: "节目", en: "Program", pinyin: "jié mù", parts: ["目"], bm: "Program", en_pronounce: "ˈproʊ.ɡræm", bm_pronounce: "pro-gram" },
  { cn: "目录", en: "Catalog", pinyin: "mù lù", parts: ["目"], bm: "Katalog", en_pronounce: "ˈkæt.əl.ɒɡ", bm_pronounce: "ka-ta-log" },

  // Root: 足 (Foot)
  { cn: "足球", en: "Soccer", pinyin: "zú qiú", parts: ["足"], bm: "Bola sepak", en_pronounce: "ˈsɒk.ər", bm_pronounce: "bo-la se-pak" },
  { cn: "手足", en: "Siblings", pinyin: "shǒu zú", parts: ["足"], bm: "Adik-beradik", en_pronounce: "ˈsɪb.lɪŋz", bm_pronounce: "a-dik be-ra-dik" },
  { cn: "远足", en: "Hiking", pinyin: "yuǎn zú", parts: ["足"], bm: "Mengembara", en_pronounce: "ˈhaɪ.kɪŋ", bm_pronounce: "me-ngem-ba-ra" },
  { cn: "足够", en: "Enough", pinyin: "zú gòu", parts: ["足"], bm: "Cukup", en_pronounce: "ɪˈnʌf", bm_pronounce: "cu-kup" },
  { cn: "满足", en: "Satisfied", pinyin: "mǎn zú", parts: ["足"], bm: "Puas hati", en_pronounce: "ˈsæt.ɪs.faɪd", bm_pronounce: "pu-as ha-ti" },

  // Root: 心 (Heart)
  { cn: "心情", en: "Mood", pinyin: "xīn qíng", parts: ["心"], bm: "Mood", en_pronounce: "muːd", bm_pronounce: "mud" },
  { cn: "关心", en: "Care", pinyin: "guān xīn", parts: ["心"], bm: "Ambil berat", en_pronounce: "kɛər", bm_pronounce: "am-bil be-rat" },
  { cn: "信心", en: "Confidence", pinyin: "xìn xīn", parts: ["心"], bm: "Keyakinan", en_pronounce: "ˈkɒn.fɪ.dəns", bm_pronounce: "ke-ya-ki-nan" },
  { cn: "担心", en: "Worry", pinyin: "dān xīn", parts: ["心"], bm: "Risau", en_pronounce: "ˈwʌr.i", bm_pronounce: "ri-sau" },
  { cn: "爱心", en: "Compassion", pinyin: "ài xīn", parts: ["心"], bm: "Kasih sayang", en_pronounce: "kəmˈpæʃ.ən", bm_pronounce: "ka-sih sa-yang" },

  // Root: 牛 (Cow)
  { cn: "牛奶", en: "Milk", pinyin: "niú nǎi", parts: ["牛"], bm: "Susu", en_pronounce: "mɪlk", bm_pronounce: "su-su" },
  { cn: "牛肉", en: "Beef", pinyin: "niú ròu", parts: ["牛"], bm: "Daging lembu", en_pronounce: "biːf", bm_pronounce: "da-ging lem-bu" },
  { cn: "黄牛", en: "Scalper", pinyin: "huáng niú", parts: ["牛"], bm: "Ulat tiket", en_pronounce: "ˈskæl.pər", bm_pronounce: "u-lat ti-ket" },
  { cn: "小牛", en: "Calf", pinyin: "xiǎo niú", parts: ["牛"], bm: "Anak lembu", en_pronounce: "kæf", bm_pronounce: "a-nak lem-bu" },
  { cn: "牛油", en: "Butter", pinyin: "niú yóu", parts: ["牛"], bm: "Mentega", en_pronounce: "ˈbʌt.ər", bm_pronounce: "men-te-ga" },

  // Root: 羊 (Sheep/Goat)
  { cn: "羊肉", en: "Mutton", pinyin: "yáng ròu", parts: ["羊"], bm: "Daging kambing", en_pronounce: "ˈmʌt.ən", bm_pronounce: "da-ging kam-bing" },
  { cn: "羊奶", en: "Goat milk", pinyin: "yáng nǎi", parts: ["羊"], bm: "Susu kambing", en_pronounce: "ɡoʊt mɪlk", bm_pronounce: "su-su kam-bing" },
  { cn: "山羊", en: "Goat", pinyin: "shān yáng", parts: ["羊"], bm: "Kambing", en_pronounce: "ɡoʊt", bm_pronounce: "kam-bing" },
  { cn: "绵羊", en: "Sheep", pinyin: "mián yáng", parts: ["羊"], bm: "Biri-biri", en_pronounce: "ʃiːp", bm_pronounce: "bi-ri bi-ri" },
  { cn: "小羊", en: "Lamb", pinyin: "xiǎo yáng", parts: ["羊"], bm: "Anak kambing", en_pronounce: "læm", bm_pronounce: "a-nak kam-bing" },

  // Root: 鱼 (Fish)
  { cn: "小鱼", en: "Small fish", pinyin: "xiǎo yú", parts: ["鱼"], bm: "Ikan kecil", en_pronounce: "smɔːl fɪʃ", bm_pronounce: "i-kan ke-cil" },
  { cn: "鱼肉", en: "Fish meat", pinyin: "yú ròu", parts: ["鱼"], bm: "Daging ikan", en_pronounce: "fɪʃ miːt", bm_pronounce: "da-ging i-kan" },
  { cn: "金鱼", en: "Goldfish", pinyin: "jīn yú", parts: ["鱼"], bm: "Ikan emas", en_pronounce: "ˈɡəʊld.fɪʃ", bm_pronounce: "i-kan e-mas" },
  { cn: "钓鱼", en: "Fishing", pinyin: "diào yú", parts: ["鱼"], bm: "Memancing", en_pronounce: "ˈfɪʃ.ɪŋ", bm_pronounce: "me-man-cing" },
  { cn: "鱼缸", en: "Fish tank", pinyin: "yú gāng", parts: ["鱼"], bm: "Akuarium", en_pronounce: "fɪʃ tæŋk", bm_pronounce: "a-ku-a-ri-um" },

  // Root: 虫 (Insect/Worm)
  { cn: "小虫", en: "Small insect", pinyin: "xiǎo chóng", parts: ["虫"], bm: "Serangga kecil", en_pronounce: "smɔːl ˈɪn.sekt", bm_pronounce: "se-rang-ga ke-cil" },
  { cn: "毛毛虫", en: "Caterpillar", pinyin: "máo mao chóng", parts: ["虫"], bm: "Ulat bulu", en_pronounce: "ˈkæt.ə.pɪl.ər", bm_pronounce: "u-lat bu-lu" },
  { cn: "昆虫", en: "Insect", pinyin: "kūn chóng", parts: ["虫"], bm: "Serangga", en_pronounce: "ˈɪn.sekt", bm_pronounce: "se-rang-ga" },
  { cn: "萤火虫", en: "Firefly", pinyin: "yíng huǒ chóng", parts: ["虫"], bm: "Kelip-kelip", en_pronounce: "ˈfaɪə.flaɪ", bm_pronounce: "ke-lip ke-lip" },
  { cn: "书虫", en: "Bookworm", pinyin: "shū chóng", parts: ["虫"], bm: "Ulat buku", en_pronounce: "ˈbʊk.wɜːm", bm_pronounce: "u-lat bu-ku" },

  // Root: 马 (Horse)
  { cn: "马路", en: "Road", pinyin: "mǎ lù", parts: ["马"], bm: "Jalan raya", en_pronounce: "roʊd", bm_pronounce: "ja-lan ra-ya" },
  { cn: "马上", en: "Immediately", pinyin: "mǎ shàng", parts: ["马"], bm: "Segera", en_pronounce: "ɪˈmiː.di.ət.li", bm_pronounce: "se-ge-ra" },
  { cn: "木马", en: "Wooden horse", pinyin: "mù mǎ", parts: ["马"], bm: "Kuda kayu", en_pronounce: "ˈwʊd.ən hɔːrs", bm_pronounce: "ku-da ka-yu" },
  { cn: "斑马", en: "Zebra", pinyin: "bān mǎ", parts: ["马"], bm: "Kuda belang", en_pronounce: "ˈziː.brə", bm_pronounce: "ku-da be-lang" },
  { cn: "海马", en: "Seahorse", pinyin: "hǎi mǎ", parts: ["马"], bm: "Kuda laut", en_pronounce: "ˈsiː.hɔːrs", bm_pronounce: "ku-da la-ut" },

  // Root: 天 (Sky/Day)
  { cn: "天气", en: "Weather", pinyin: "tiān qì", parts: ["天"], bm: "Cuaca", en_pronounce: "ˈwɛð.ər", bm_pronounce: "cu-a-ca" },
  { cn: "今天", en: "Today", pinyin: "jīn tiān", parts: ["天"], bm: "Hari ini", en_pronounce: "təˈdeɪ", bm_pronounce: "ha-ri i-ni" },
  { cn: "明天", en: "Tomorrow", pinyin: "míng tiān", parts: ["天"], bm: "Esok", en_pronounce: "təˈmɒr.oʊ", bm_pronounce: "e-sok" },
  { cn: "天空", en: "Sky", pinyin: "tiān kōng", parts: ["天"], bm: "Langit", en_pronounce: "skaɪ", bm_pronounce: "la-ngit" },
  { cn: "聊天", en: "Chat", pinyin: "liáo tiān", parts: ["天"], bm: "Berbual", en_pronounce: "tʃæt", bm_pronounce: "ber-bu-al" },

  // Root: 云 (Cloud)
  { cn: "白云", en: "White cloud", pinyin: "bái yún", parts: ["云"], bm: "Awan putih", en_pronounce: "waɪt klaʊd", bm_pronounce: "a-wan pu-tih" },
  { cn: "云层", en: "Cloud layer", pinyin: "yún céng", parts: ["云"], bm: "Lapisan awan", en_pronounce: "klaʊd ˈleɪ.ər", bm_pronounce: "la-pi-san a-wan" },
  { cn: "多云", en: "Cloudy", pinyin: "duō yún", parts: ["云"], bm: "Berawan", en_pronounce: "ˈklaʊ.di", bm_pronounce: "ber-a-wan" },
  { cn: "乌云", en: "Dark cloud", pinyin: "wū yún", parts: ["云"], bm: "Awan mendung", en_pronounce: "dɑːrk klaʊd", bm_pronounce: "a-wan men-dung" },
  { cn: "彩云", en: "Rosy cloud", pinyin: "cǎi yún", parts: ["云"], bm: "Awan warna-warni", en_pronounce: "ˈroʊ.zi klaʊd", bm_pronounce: "a-wan war-na war-ni" },

  // Root: 风 (Wind)
  { cn: "大风", en: "Strong wind", pinyin: "dà fēng", parts: ["风"], bm: "Angin kencang", en_pronounce: "strɒŋ wɪnd", bm_pronounce: "a-ngin ken-cang" },
  { cn: "风车", en: "Windmill", pinyin: "fēng chē", parts: ["风"], bm: "Kincir angin", en_pronounce: "ˈwɪnd.mɪl", bm_pronounce: "kin-cir a-ngin" },
  { cn: "台风", en: "Typhoon", pinyin: "tái fēng", parts: ["风"], bm: "Taufan", en_pronounce: "taɪˈfuːn", bm_pronounce: "tau-fan" },
  { cn: "风筝", en: "Kite", pinyin: "fēng zheng", parts: ["风"], bm: "Layang-layang", en_pronounce: "kaɪt", bm_pronounce: "la-yang la-yang" },
  { cn: "风景", en: "Scenery", pinyin: "fēng jǐng", parts: ["风"], bm: "Pemandangan", en_pronounce: "ˈsiː.nə.ri", bm_pronounce: "pe-man-da-ngan" },

  // Root: 雨 (Rain)
  { cn: "下雨", en: "Raining", pinyin: "xià yǔ", parts: ["雨"], bm: "Hujan", en_pronounce: "ˈreɪ.nɪŋ", bm_pronounce: "hu-jan" },
  { cn: "雨衣", en: "Raincoat", pinyin: "yǔ yī", parts: ["雨"], bm: "Baju hujan", en_pronounce: "ˈreɪn.koʊt", bm_pronounce: "ba-ju hu-jan" },
  { cn: "雨伞", en: "Umbrella", pinyin: "yǔ sǎn", parts: ["雨"], bm: "Payung", en_pronounce: "ʌmˈbrɛl.ə", bm_pronounce: "pa-yung" },
  { cn: "风雨", en: "Wind and rain", pinyin: "fēng yǔ", parts: ["雨"], bm: "Angin dan hujan", en_pronounce: "wɪnd ənd reɪn", bm_pronounce: "a-ngin dan hu-jan" },
  { cn: "暴雨", en: "Rainstorm", pinyin: "bào yǔ", parts: ["雨"], bm: "Ribut hujan", en_pronounce: "ˈreɪn.stɔːrm", bm_pronounce: "ri-but hu-jan" },

  // Root: 花 (Flower)
  { cn: "花朵", en: "Flower", pinyin: "huā duǒ", parts: ["花"], bm: "Bunga", en_pronounce: "ˈflaʊ.ər", bm_pronounce: "bu-nga" },
  { cn: "红花", en: "Red flower", pinyin: "hóng huā", parts: ["花"], bm: "Bunga merah", en_pronounce: "red ˈflaʊ.ər", bm_pronounce: "bu-nga me-rah" },
  { cn: "花园", en: "Garden", pinyin: "huā yuán", parts: ["花"], bm: "Taman bunga", en_pronounce: "ˈɡɑː.dən", bm_pronounce: "ta-man bu-nga" },
  { cn: "开花", en: "Bloom", pinyin: "kāi huā", parts: ["花"], bm: "Berbunga", en_pronounce: "bluːm", bm_pronounce: "ber-bu-nga" },
  { cn: "花生", en: "Peanut", pinyin: "huā shēng", parts: ["花"], bm: "Kacang tanah", en_pronounce: "ˈpiː.nʌt", bm_pronounce: "ka-cang ta-nah" },

  // Root: 草 (Grass)
  { cn: "小草", en: "Small grass", pinyin: "xiǎo cǎo", parts: ["草"], bm: "Rumput kecil", en_pronounce: "smɔːl ɡrɑːs", bm_pronounce: "rum-put ke-cil" },
  { cn: "草地", en: "Lawn", pinyin: "cǎo dì", parts: ["草"], bm: "Padang rumput", en_pronounce: "lɔːn", bm_pronounce: "pa-dang rum-put" },
  { cn: "草原", en: "Grassland", pinyin: "cǎo yuán", parts: ["草"], bm: "Tanah ragut", en_pronounce: "ˈɡrɑːs.lænd", bm_pronounce: "ta-nah ra-gut" },
  { cn: "草稿", en: "Draft", pinyin: "cǎo gǎo", parts: ["草"], bm: "Draf", en_pronounce: "drɑːft", bm_pronounce: "draf" },
  { cn: "草莓", en: "Strawberry", pinyin: "cǎo méi", parts: ["草"], bm: "Strawberi", en_pronounce: "ˈstrɔː.ber.i", bm_pronounce: "stro-be-ri" },

  // Root: 木 (Wood)
  { cn: "木头", en: "Wood", pinyin: "mù tou", parts: ["木"], bm: "Kayu", en_pronounce: "wʊd", bm_pronounce: "ka-yu" },
  { cn: "树木", en: "Trees", pinyin: "shù mù", parts: ["木"], bm: "Pokok", en_pronounce: "triːz", bm_pronounce: "po-kok" },
  { cn: "木板", en: "Plank", pinyin: "mù bǎn", parts: ["木"], bm: "Papan", en_pronounce: "plæŋk", bm_pronounce: "pa-pan" },
  { cn: "土木", en: "Civil engineering", pinyin: "tǔ mù", parts: ["木"], bm: "Kejuruteraan awam", en_pronounce: "ˈsɪv.əl ˌɛn.dʒɪˈnɪər.ɪŋ", bm_pronounce: "ke-ju-ru-te-ra-an a-wam" },
  { cn: "麻木", en: "Numb", pinyin: "má mù", parts: ["木"], bm: "Kebas", en_pronounce: "nʌm", bm_pronounce: "ke-bas" },

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

  // Root: 火 (Fire)
  { cn: "火锅", en: "Hotpot", pinyin: "huǒ guō", parts: ["火"], bm: "Kuali panas", en_pronounce: "hɒt.pɒt", bm_pronounce: "ku-a-li pa-nas" },
  { cn: "火苗", en: "Flame", pinyin: "huǒ miáo", parts: ["火"], bm: "Nyalaan api", en_pronounce: "fleɪm", bm_pronounce: "nya-la-an a-pi" },
  { cn: "大火", en: "Big fire", pinyin: "dà huǒ", parts: ["火"], bm: "Api besar", en_pronounce: "bɪɡ faɪər", bm_pronounce: "a-pi be-sar" },
  { cn: "灭火", en: "Extinguish fire", pinyin: "miè huǒ", parts: ["火"], bm: "Padam api", en_pronounce: "ɪkˈstɪŋ.ɡwɪʃ faɪər", bm_pronounce: "pa-dam a-pi" },
  { cn: "火把", en: "Torch", pinyin: "huǒ bǎ", parts: ["火"], bm: "Obor", en_pronounce: "tɔːrtʃ", bm_pronounce: "o-bor" },

  // Root: 白 (White)
  { cn: "白色", en: "White color", pinyin: "bái sè", parts: ["白"], bm: "Warna putih", en_pronounce: "waɪt ˈkʌl.ər", bm_pronounce: "war-na pu-tih" },
  { cn: "明白", en: "Understand", pinyin: "míng bai", parts: ["白"], bm: "Faham", en_pronounce: "ˌʌn.dəˈstænd", bm_pronounce: "fa-ham" },
  { cn: "白天", en: "Daytime", pinyin: "bái tiān", parts: ["白"], bm: "Siang", en_pronounce: "ˈdeɪ.taɪm", bm_pronounce: "si-ang" },
  { cn: "空白", en: "Blank", pinyin: "kòng bái", parts: ["白"], bm: "Kosong", en_pronounce: "blæŋk", bm_pronounce: "ko-song" },
  { cn: "白菜", en: "Cabbage", pinyin: "bái cài", parts: ["白"], bm: "Kobis", en_pronounce: "ˈkæb.ɪdʒ", bm_pronounce: "ko-bis" },

  // Root: 门 (Door)
  { cn: "大门", en: "Main gate", pinyin: "dà mén", parts: ["门"], bm: "Pintu pagar", en_pronounce: "meɪn ɡeɪt", bm_pronounce: "pin-tu pa-gar" },
  { cn: "开门", en: "Open door", pinyin: "kāi mén", parts: ["门"], bm: "Buka pintu", en_pronounce: "ˈoʊ.pən dɔːr", bm_pronounce: "bu-ka pin-tu" },
  { cn: "关门", en: "Close door", pinyin: "guān mén", parts: ["门"], bm: "Tutup pintu", en_pronounce: "kloʊs dɔːr", bm_pronounce: "tu-tup pin-tu" },
  { cn: "出门", en: "Go out", pinyin: "chū mén", parts: ["门"], bm: "Keluar", en_pronounce: "ɡoʊ aʊt", bm_pronounce: "ke-lu-ar" },
  { cn: "门票", en: "Ticket", pinyin: "mén piào", parts: ["门"], bm: "Tiket", en_pronounce: "ˈtɪk.ɪt", bm_pronounce: "ti-ket" },

  // Root: 车 (Car)
  { cn: "汽车", en: "Car", pinyin: "qì chē", parts: ["车"], bm: "Kereta", en_pronounce: "kɑːr", bm_pronounce: "ke-re-ta" },
  { cn: "车站", en: "Station", pinyin: "chē zhàn", parts: ["车"], bm: "Stesen", en_pronounce: "ˈsteɪ.ʃən", bm_pronounce: "ste-sen" },
  { cn: "马车", en: "Carriage", pinyin: "mǎ chē", parts: ["车"], bm: "Kereta kuda", en_pronounce: "ˈkær.ɪdʒ", bm_pronounce: "ke-re-ta ku-da" },
  { cn: "卡车", en: "Truck", pinyin: "kǎ chē", parts: ["车"], bm: "Lori", en_pronounce: "trʌk", bm_pronounce: "lo-ri" },
  { cn: "跑车", en: "Sports car", pinyin: "pǎo chē", parts: ["车"], bm: "Kereta sukan", en_pronounce: "spɔːrts kɑːr", bm_pronounce: "ke-re-ta su-kan" },

  // Root: 书 (Book)
  { cn: "书包", en: "Schoolbag", pinyin: "shū bāo", parts: ["书"], bm: "Beg sekolah", en_pronounce: "ˈskuːl.bæɡ", bm_pronounce: "beg se-ko-lah" },
  { cn: "图书", en: "Books", pinyin: "tú shū", parts: ["书"], bm: "Buku-buku", en_pronounce: "bʊks", bm_pronounce: "bu-ku bu-ku" },
  { cn: "图书馆", en: "Library", pinyin: "tú shū guǎn", parts: ["书"], bm: "Perpustakaan", en_pronounce: "ˈlaɪ.brer.i", bm_pronounce: "per-pus-ta-ka-an" },
  { cn: "书店", en: "Bookstore", pinyin: "shū diàn", parts: ["书"], bm: "Kedai buku", en_pronounce: "ˈbʊk.stɔːr", bm_pronounce: "ke-dai bu-ku" },
  { cn: "书架", en: "Bookshelf", pinyin: "shū jià", parts: ["书"], bm: "Rak buku", en_pronounce: "ˈbʊk.ʃelf", bm_pronounce: "rak bu-ku" },

  // Root: 电 (Electricity)
  { cn: "电话", en: "Telephone", pinyin: "diàn huà", parts: ["电"], bm: "Telefon", en_pronounce: "ˈtɛl.ɪ.foʊn", bm_pronounce: "te-le-fon" },
  { cn: "电脑", en: "Computer", pinyin: "diàn nǎo", parts: ["电"], bm: "Komputer", en_pronounce: "kəmˈpjuː.tər", bm_pronounce: "kom-pu-ter" },
  { cn: "电视", en: "Television", pinyin: "diàn shì", parts: ["电"], bm: "Televisyen", en_pronounce: "ˈtɛl.ə.vɪʒ.ən", bm_pronounce: "te-le-vi-syen" },
  { cn: "电影", en: "Movie", pinyin: "diàn yǐng", parts: ["电"], bm: "Filem", en_pronounce: "ˈmuː.vi", bm_pronounce: "fi-lem" },
  { cn: "电池", en: "Battery", pinyin: "diàn chí", parts: ["电"], bm: "Bateri", en_pronounce: "ˈbæt.ər.i", bm_pronounce: "ba-te-ri" },

  // Root: 学 (Study)
  { cn: "学校", en: "School", pinyin: "xué xiào", parts: ["学"], bm: "Sekolah", en_pronounce: "skuːl", bm_pronounce: "se-ko-lah" },
  { cn: "学习", en: "Learn", pinyin: "xué xí", parts: ["学"], bm: "Belajar", en_pronounce: "lɜːrn", bm_pronounce: "be-la-jar" },
  { cn: "同学", en: "Classmate", pinyin: "tóng xué", parts: ["学"], bm: "Rakan sekelas", en_pronounce: "ˈklæs.meɪt", bm_pronounce: "ra-kan se-ke-las" },
  { cn: "学房", en: "Schooling", pinyin: "xué fáng", parts: ["学"], bm: "Persekolahan", en_pronounce: "ˈskuː.lɪŋ", bm_pronounce: "per-se-ko-la-han" },
  { cn: "学期", en: "Term", pinyin: "xué qī", parts: ["学"], bm: "Penggal", en_pronounce: "tɜːrm", bm_pronounce: "peng-gal" },

  // Root: 生 (Birth/Life) 250 words
  { cn: "学生", en: "Student", pinyin: "xué shēng", parts: ["生"], bm: "Pelajar", en_pronounce: "ˈstjuː.dənt", bm_pronounce: "pe-la-jar" },
  { cn: "生活", en: "Life", pinyin: "shēng huó", parts: ["生"], bm: "Kehidupan", en_pronounce: "laɪf", bm_pronounce: "ke-hi-du-pan" },
  { cn: "先生", en: "Mr.", pinyin: "xiān sheng", parts: ["生"], bm: "Encik", en_pronounce: "ˈmɪs.tər", bm_pronounce: "en-cik" },
  { cn: "医生", en: "Doctor", pinyin: "yī shēng", parts: ["生"], bm: "Doktor", en_pronounce: "ˈdɒk.tər", bm_pronounce: "dok-tor" },
  { cn: "出生", en: "Born", pinyin: "chū shēng", parts: ["生"], bm: "Lahir", en_pronounce: "bɔːrn", bm_pronounce: "la-hir" },
  // Root: 四 (Four)
  { cn: "四个", en: "Four items", pinyin: "sì gè", parts: ["四"], bm: "Empat barang", en_pronounce: "fɔːr aɪ.təmz", bm_pronounce: "em-pat ba-rang" },
  { cn: "四月", en: "April", pinyin: "sì yuè", parts: ["四"], bm: "April", en_pronounce: "ˈeɪ.prəl", bm_pronounce: "e-pril" },
  { cn: "第四", en: "Fourth", pinyin: "dì sì", parts: ["四"], bm: "Keempat", en_pronounce: "fɔːrθ", bm_pronounce: "ke-em-pat" },
  { cn: "四季", en: "Four Seasons", pinyin: "sì jì", parts: ["四"], bm: "Empat musim", en_pronounce: "fɔːr ˈsiː.zənz", bm_pronounce: "em-pat mu-sim" },
  { cn: "四周", en: "All around", pinyin: "sì zhōu", parts: ["四"], bm: "Sekeliling", en_pronounce: "ɔːl əˈraʊnd", bm_pronounce: "se-ke-li-ling" },

  // Root: 五 (Five)
  { cn: "五个", en: "Five items", pinyin: "wǔ gè", parts: ["五"], bm: "Lima barang", en_pronounce: "faɪv aɪ.təmz", bm_pronounce: "li-ma ba-rang" },
  { cn: "五月", en: "May", pinyin: "wǔ yuè", parts: ["五"], bm: "Mei", en_pronounce: "meɪ", bm_pronounce: "mei" },
  { cn: "第五", en: "Fifth", pinyin: "dì wǔ", parts: ["五"], bm: "Kelima", en_pronounce: "fɪfθ", bm_pronounce: "ke-li-ma" },
  { cn: "五官", en: "Facial features", pinyin: "wǔ guān", parts: ["五"], bm: "Pancaindera muka", en_pronounce: "ˈfeɪ.ʃəl ˈjiː.tʃərz", bm_pronounce: "pan-ca-in-de-ra mu-ka" },
  { cn: "五颜六色", en: "Colorful", pinyin: "wǔ yán liù sè", parts: ["五"], bm: "Warna-warni", en_pronounce: "ˈkʌl.ə.fəl", bm_pronounce: "war-na war-ni" },

  // Root: 六 (Six)
  { cn: "六个", en: "Six items", pinyin: "liù gè", parts: ["六"], bm: "Enam barang", en_pronounce: "sɪks aɪ.təmz", bm_pronounce: "e-nam ba-rang" },
  { cn: "六月", en: "June", pinyin: "liù yuè", parts: ["六"], bm: "Jun", en_pronounce: "dʒuːn", bm_pronounce: "jun" },
  { cn: "第六", en: "Sixth", pinyin: "dì liù", parts: ["六"], bm: "Keenam", en_pronounce: "sɪksθ", bm_pronounce: "ke-e-nam" },
  { cn: "六亲不认", en: "Ruthless", pinyin: "liù qīn bù rèn", parts: ["六"], bm: "Tidak berperikemanusiaan", en_pronounce: "ˈruːθ.ləs", bm_pronounce: "ti-dak ber-pe-ri-ke-ma-nu-si-a-an" },
  { cn: "六神无主", en: "Panic-stricken", pinyin: "liù shén wú zhǔ", parts: ["六"], bm: "Panik", en_pronounce: "ˈpæn.ɪk ˈstrɪk.ən", bm_pronounce: "pa-nik" },

  // Root: 七 (Seven)
  { cn: "七个", en: "Seven items", pinyin: "qī gè", parts: ["七"], bm: "Tujuh barang", en_pronounce: "ˈsev.ən aɪ.təmz", bm_pronounce: "tu-juh ba-rang" },
  { cn: "七月", en: "July", pinyin: "qī yuè", parts: ["七"], bm: "Julai", en_pronounce: "dʒuˈlaɪ", bm_pronounce: "ju-lai" },
  { cn: "第七", en: "Seventh", pinyin: "dì qī", parts: ["七"], bm: "Ketujuh", en_pronounce: "ˈsev.ənθ", bm_pronounce: "ke-tu-juh" },
  { cn: "七上八下", en: "Anxious", pinyin: "qī shàng bā xià", parts: ["七"], bm: "Gelisah", en_pronounce: "ˈæŋk.ʃəs", bm_pronounce: "ge-li-sah" },
  { cn: "乱七八糟", en: "Messy", pinyin: "luàn qī bā zāo", parts: ["七"], bm: "Berselerak", en_pronounce: "ˈmes.i", bm_pronounce: "ber-se-le-rak" },

  // Root: 八 (Eight)
  { cn: "八个", en: "Eight items", pinyin: "bā gè", parts: ["八"], bm: "Lapan barang", en_pronounce: "eɪt aɪ.təmz", bm_pronounce: "la-pan ba-rang" },
  { cn: "八月", en: "August", pinyin: "bā yuè", parts: ["八"], bm: "Ogos", en_pronounce: "ɔːˈɡʌst", bm_pronounce: "o-gos" },
  { cn: "第八", en: "Eighth", pinyin: "dì bā", parts: ["八"], bm: "Kelapan", en_pronounce: "eɪtθ", bm_pronounce: "ke-la-pan" },
  { cn: "八方", en: "All directions", pinyin: "bā fāng", parts: ["八"], bm: "Semua arah", en_pronounce: "ɔːl daɪˈrek.ʃənz", bm_pronounce: "se-mu-a a-rah" },
  { cn: "八卦", en: "Gossip", pinyin: "bā guà", parts: ["八"], bm: "Gosip", en_pronounce: "ˈɡɒs.ɪp", bm_pronounce: "go-sip" },

  // Root: 九 (Nine)
  { cn: "九个", en: "Nine items", pinyin: "jiǔ gè", parts: ["九"], bm: "Sembilan barang", en_pronounce: "naɪn aɪ.təmz", bm_pronounce: "sem-bi-lan ba-rang" },
  { cn: "九月", en: "September", pinyin: "jiǔ yuè", parts: ["九"], bm: "September", en_pronounce: "sepˈtem.bər", bm_pronounce: "sep-tem-ber" },
  { cn: "第九", en: "Ninth", pinyin: "dì jiǔ", parts: ["九"], bm: "Kesembilan", en_pronounce: "naɪnθ", bm_pronounce: "ke-sem-bi-lan" },
  { cn: "九死一生", en: "Narrow escape", pinyin: "jiǔ sǐ yī shēng", parts: ["九"], bm: "Nyaris maut", en_pronounce: "ˈnær.əʊ ɪˈskeɪp", bm_pronounce: "nya-ris ma-ut" },
  { cn: "九牛一毛", en: "Drop in bucket", pinyin: "jiǔ niú yī máo", parts: ["九"], bm: "Terlalu sedikit", en_pronounce: "drɒp ɪn ˈbʌk.ɪt", bm_pronounce: "ter-la-lu se-di-kit" },

  // Root: 东 (East)
  { cn: "东方", en: "East", pinyin: "dōng fāng", parts: ["东"], bm: "Timur", en_pronounce: "iːst", bm_pronounce: "ti-mur" },
  { cn: "东西", en: "Thing", pinyin: "dōng xi", parts: ["东"], bm: "Barang", en_pronounce: "θɪŋ", bm_pronounce: "ba-rang" },
  { cn: "东边", en: "East side", pinyin: "dōng biān", parts: ["东"], bm: "Sebelah timur", en_pronounce: "iːst saɪd", bm_pronounce: "se-be-lah ti-mur" },
  { cn: "房东", en: "Landlord", pinyin: "fáng dōng", parts: ["东"], bm: "Tuan rumah", en_pronounce: "ˈlænd.lɔːrd", bm_pronounce: "tu-an ru-mah" },
  { cn: "股东", en: "Shareholder", pinyin: "gǔ dōng", parts: ["东"], bm: "Pemegang saham", en_pronounce: "ˈʃeəˌhəʊl.də", bm_pronounce: "pe-me-gang sa-ham" },

  // Root: 西 (West)
  { cn: "西方", en: "West", pinyin: "xī fāng", parts: ["西"], bm: "Barat", en_pronounce: "west", bm_pronounce: "ba-rat" },
  { cn: "西瓜", en: "Watermelon", pinyin: "xī guā", parts: ["西"], bm: "Tembikai", en_pronounce: "ˈwɔː.təˌmel.ən", bm_pronounce: "tem-bi-kai" },
  { cn: "西餐", en: "Western food", pinyin: "xī cān", parts: ["西"], bm: "Makanan barat", en_pronounce: "ˈwes.tən fuːd", bm_pronounce: "ma-ka-nan ba-rat" },
  { cn: "西装", en: "Suit", pinyin: "xī zhuāng", parts: ["西"], bm: "Sut", en_pronounce: "suːt", bm_pronounce: "sut" },
  { cn: "西药", en: "Western medicine", pinyin: "xī yào", parts: ["西"], bm: "Ubat barat", en_pronounce: "ˈwes.tən ˈmed.ɪ.sən", bm_pronounce: "u-bat ba-rat" },

  // Root: 南 (South)
  { cn: "南方", en: "South", pinyin: "nán fāng", parts: ["南"], bm: "Selatan", en_pronounce: "saʊθ", bm_pronounce: "se-la-tan" },
  { cn: "南瓜", en: "Pumpkin", pinyin: "nán guā", parts: ["南"], bm: "Labu", en_pronounce: "ˈpʌmp.kɪn", bm_pronounce: "la-bu" },
  { cn: "南部", en: "Southern part", pinyin: "nán bù", parts: ["南"], bm: "Bahagian selatan", en_pronounce: "ˈsʌð.ən pɑːt", bm_pronounce: "ba-ha-gi-an se-la-tan" },
  { cn: "指南针", en: "Compass", pinyin: "zhǐ nán zhēn", parts: ["南"], bm: "Kompas", en_pronounce: "ˈkʌm.pəs", bm_pronounce: "kom-pas" },
  { cn: "南极", en: "South Pole", pinyin: "nán jí", parts: ["南"], bm: "Kutub Selatan", en_pronounce: "saʊθ pəʊl", bm_pronounce: "ku-tub se-la-tan" },

  // Root: 北 (North)
  { cn: "北方", en: "North", pinyin: "běi fāng", parts: ["北"], bm: "Utara", en_pronounce: "nɔːθ", bm_pronounce: "u-ta-ra" },
  { cn: "北京", en: "Beijing", pinyin: "běi jīng", parts: ["北"], bm: "Beijing", en_pronounce: "beɪˈdʒɪŋ", bm_pronounce: "bei-jing" },
  { cn: "北部", en: "Northern part", pinyin: "běi bù", parts: ["北"], bm: "Bahagian utara", en_pronounce: "ˈnɔː.ðən pɑːt", bm_pronounce: "ba-ha-gi-an u-ta-ra" },
  { cn: "北极", en: "North Pole", pinyin: "běi jí", parts: ["北"], bm: "Kutub Utara", en_pronounce: "nɔːθ pəʊl", bm_pronounce: "ku-tub u-ta-ra" },
  { cn: "败北", en: "Defeated", pinyin: "bài běi", parts: ["北"], bm: "Kalah", en_pronounce: "dɪˈfiː.tɪd", bm_pronounce: "ka-lah" },

  // Root: 左 (Left)
  { cn: "左手", en: "Left hand", pinyin: "zuǒ shǒu", parts: ["左"], bm: "Tangan kiri", en_pronounce: "left hænd", bm_pronounce: "ta-ngan ki-ri" },
  { cn: "左边", en: "Left side", pinyin: "zuǒ biān", parts: ["左"], bm: "Sebelah kiri", en_pronounce: "left saɪd", bm_pronounce: "se-be-lah ki-ri" },
  { cn: "左面", en: "Left side", pinyin: "zuǒ miàn", parts: ["左"], bm: "Muka kiri", en_pronounce: "left feɪs", bm_pronounce: "mu-ka ki-ri" },
  { cn: "左右", en: "Around/Approximately", pinyin: "zuǒ yòu", parts: ["左"], bm: "Lebih kurang", en_pronounce: "əˈraʊnd", bm_pronounce: "le-bih ku-rang" },
  { cn: "左转", en: "Turn left", pinyin: "zuǒ zhuǎn", parts: ["左"], bm: "Pusing kiri", en_pronounce: "tɜːrn left", bm_pronounce: "pu-sing ki-ri" },

  // Root: 右 (Right)
  { cn: "右手", en: "Right hand", pinyin: "yòu shǒu", parts: ["右"], bm: "Tangan kanan", en_pronounce: "raɪt hænd", bm_pronounce: "ta-ngan ka-nan" },
  { cn: "右边", en: "Right side", pinyin: "yòu biān", parts: ["右"], bm: "Sebelah kanan", en_pronounce: "raɪt saɪd", bm_pronounce: "se-be-lah ka-nan" },
  { cn: "右面", en: "Right side", pinyin: "yòu miàn", parts: ["右"], bm: "Muka kanan", en_pronounce: "raɪt feɪs", bm_pronounce: "mu-ka ka-nan" },
  { cn: "右转", en: "Turn right", pinyin: "yòu zhuǎn", parts: ["右"], bm: "Pusing kanan", en_pronounce: "tɜːrn raɪt", bm_pronounce: "pu-sing ka-nan" },
  { cn: "座右铭", en: "Motto", pinyin: "zuò yòu míng", parts: ["右"], bm: "Cogan kata", en_pronounce: "ˈmɒt.əʊ", bm_pronounce: "co-gan ka-ta" },

  // Root: 男 (Male)
  { cn: "男人", en: "Man", pinyin: "nán rén", parts: ["男"], bm: "Lelaki", en_pronounce: "mæn", bm_pronounce: "le-la-ki" },
  { cn: "男生", en: "Male student", pinyin: "nán shēng", parts: ["男"], bm: "Pelajar lelaki", en_pronounce: "meɪl ˈstjuː.dənt", bm_pronounce: "pe-la-jar le-la-ki" },
  { cn: "男友", en: "Boyfriend", pinyin: "nán yǒu", parts: ["男"], bm: "Teman lelaki", en_pronounce: "ˈbɔɪ.frend", bm_pronounce: "te-man le-la-ki" },
  { cn: "男孩", en: "Boy", pinyin: "nán hái", parts: ["男"], bm: "Budak lelaki", en_pronounce: "bɔɪ", bm_pronounce: "bu-dak le-la-ki" },
  { cn: "长男", en: "Eldest son", pinyin: "zhǎng nán", parts: ["男"], bm: "Anak sulung lelaki", en_pronounce: "ˈel.dɪst sʌn", bm_pronounce: "a-nak su-lung le-la-ki" },

  // Root: 见 (See)
  { cn: "看见", en: "See", pinyin: "kàn jiàn", parts: ["见"], bm: "Nampak", en_pronounce: "siː", bm_pronounce: "nam-pak" },
  { cn: "再见", en: "Goodbye", pinyin: "zài jiàn", parts: ["见"], bm: "Selamat tinggal", en_pronounce: "ɡʊdˈbaɪ", bm_pronounce: "se-la-mat ting-gal" },
  { cn: "见面", en: "Meet", pinyin: "jiàn miàn", parts: ["见"], bm: "Berjumpa", en_pronounce: "miːt", bm_pronounce: "ber-jum-pa" },
  { cn: "听见", en: "Hear", pinyin: "tīng jiàn", parts: ["见"], bm: "Dengar", en_pronounce: "hɪə", bm_pronounce: "de-ngar" },
  { cn: "见怪", en: "Take offense", pinyin: "jiàn guài", parts: ["见"], bm: "Tersinggung", en_pronounce: "teɪk əˈfens", bm_pronounce: "ter-sing-gung" },

  // Root: 飞 (Fly)
  { cn: "飞机", en: "Airplane", pinyin: "fēi jī", parts: ["飞"], bm: "Kapal terbang", en_pronounce: "ˈeə.pleɪn", bm_pronounce: "ka-pal ter-bang" },
  { cn: "飞鸟", en: "Flying bird", pinyin: "fēi niǎo", parts: ["飞"], bm: "Burung terbang", en_pronounce: "ˈflaɪ.ɪŋ bɜːd", bm_pronounce: "bu-rung ter-bang" },
  { cn: "飞快", en: "Very fast", pinyin: "fēi kuài", parts: ["飞"], bm: "Sangat laju", en_pronounce: "ˈver.i fɑːst", bm_pronounce: "sa-ngat la-ju" },
  { cn: "起飞", en: "Take off", pinyin: "qǐ fēi", parts: ["飞"], bm: "Berlepas", en_pronounce: "teɪk ɒf", bm_pronounce: "ber-le-pas" },
  { cn: "飞奔", en: "Dash", pinyin: "fēi bēn", parts: ["飞"], bm: "Lari pantas", en_pronounce: "dæʃ", bm_pronounce: "la-ri pan-tas" },

  // Root: 吃 (Eat)
  { cn: "吃饭", en: "Eat rice/meal", pinyin: "chī fàn", parts: ["吃"], bm: "Makan nasi", en_pronounce: "iːt raɪs", bm_pronounce: "ma-kan na-si" },
  { cn: "小吃", en: "Snack", pinyin: "xiǎo chī", parts: ["吃"], bm: "Makanan ringan", en_pronounce: "snæk", bm_pronounce: "ma-ka-nan ri-ngan" },
  { cn: "吃力", en: "Strenuous", pinyin: "chī lì", parts: ["吃"], bm: "Meletihkan", en_pronounce: "ˈstren.ju.əs", bm_pronounce: "me-le-tih-kan" },
  { cn: "好吃", en: "Delicious", pinyin: "hǎo chī", parts: ["吃"], bm: "Sedap", en_pronounce: "dɪˈlɪʃ.əs", bm_pronounce: "se-dap" },
  { cn: "吃惊", en: "Surprised", pinyin: "chī jīng", parts: ["吃"], bm: "Terkejut", en_pronounce: "səˈpraɪzd", bm_pronounce: "ter-ke-jut" },

  // Root: 喝 (Drink)
  { cn: "喝水", en: "Drink water", pinyin: "hē shuǐ", parts: ["喝"], bm: "Minum air", en_pronounce: "drɪŋk ˈwɔː.tə", bm_pronounce: "mi-num a-ir" },
  { cn: "喝茶", en: "Drink tea", pinyin: "hē chá", parts: ["喝"], bm: "Minum teh", en_pronounce: "drɪŋk tiː", bm_pronounce: "mi-num teh" },
  { cn: "喝汤", en: "Drink soup", pinyin: "hē tāng", parts: ["喝"], bm: "Minum sup", en_pronounce: "drɪŋk suːp", bm_pronounce: "mi-num sup" },
  { cn: "好喝", en: "Tasty (drink)", pinyin: "hǎo hē", parts: ["喝"], bm: "Sedap diminum", en_pronounce: "ˈteɪ.sti", bm_pronounce: "se-dap di-mi-num" },
  { cn: "喝采", en: "Cheer", pinyin: "hè cǎi", parts: ["喝"], bm: "Sorakan", en_pronounce: "tʃɪə", bm_pronounce: "so-ra-kan" },

  // Root: 写 (Write)
  { cn: "写字", en: "Write characters", pinyin: "xiě zì", parts: ["写"], bm: "Tulis tulisan", en_pronounce: "raɪt ˈkær.ək.təz", bm_pronounce: "tu-lis tu-li-san" },
  { cn: "听写", en: "Dictation", pinyin: "tīng xiě", parts: ["写"], bm: "Rencana", en_pronounce: "dɪkˈteɪ.ʃən", bm_pronounce: "ren-ca-na" },
  { cn: "写信", en: "Write letter", pinyin: "xiě xìn", parts: ["写"], bm: "Tulis surat", en_pronounce: "raɪt ˈlet.ə", bm_pronounce: "tu-lis su-rat" },
  { cn: "写作", en: "Writing", pinyin: "xiě zuò", parts: ["写"], bm: "Penulisan", en_pronounce: "ˈraɪ.tɪŋ", bm_pronounce: "pe-nu-li-san" },
  { cn: "大写", en: "Uppercase", pinyin: "dà xiě", parts: ["写"], bm: "Huruf besar", en_pronounce: "ˈʌp.ə.keɪs", bm_pronounce: "hu-ruf be-sar" },

  // Root: 听 (Listen)
  { cn: "听说", en: "Hear of", pinyin: "tīng shuō", parts: ["听"], bm: "Dengar khabar", en_pronounce: "hɪə ɒv", bm_pronounce: "de-ngar kha-bar" },
  { cn: "听话", en: "Obedient", pinyin: "tīng huà", parts: ["听"], bm: "Taat", en_pronounce: "əˈbiː.di.ənt", bm_pronounce: "ta-at" },
  { cn: "听众多", en: "Audience", pinyin: "tīng zhòng", parts: ["听"], bm: "Penonton", en_pronounce: "ˈɔː.di.əns", bm_pronounce: "pe-non-ton" },
  { cn: "好听", en: "Pleasant to hear", pinyin: "hǎo tīng", parts: ["听"], bm: "Merdu", en_pronounce: "ˈplez.ənt tuː hɪə", bm_pronounce: "mer-du" },
  { cn: "动听", en: "Melodious", pinyin: "dòng tīng", parts: ["听"], bm: "Sedap didengar", en_pronounce: "məˈləʊ.di.əs", bm_pronounce: "se-dap di-de-ngar" },

  // Root: 说 (Speak)
  { cn: "说话", en: "Speak", pinyin: "shuō huà", parts: ["说"], bm: "Bercakap", en_pronounce: "spiːk", bm_pronounce: "ber-ca-kap" },
  { cn: "说明", en: "Explain", pinyin: "shuō míng", parts: ["说"], bm: "Menerangkan", en_pronounce: "ɪkˈspleɪn", bm_pronounce: "me-ne-rang-kan" },
  { cn: "小说", en: "Novel", pinyin: "xiǎo shuō", parts: ["说"], bm: "Novel", en_pronounce: "ˈnɒv.əl", bm_pronounce: "no-vel" },
  { cn: "说谎", en: "Lie", pinyin: "shuō huǎng", parts: ["说"], bm: "Menipu", en_pronounce: "laɪ", bm_pronounce: "me-ni-pu" },
  { cn: "笑说", en: "Joke", pinyin: "xiào shuō", parts: ["说"], bm: "Bergurau", en_pronounce: "dʒəʊk", bm_pronounce: "ber-gu-rau" },

  // Total groups: 70
  // Root: 红 (Red)
  { cn: "红色", en: "Red color", pinyin: "hóng sè", parts: ["红"], bm: "Warna merah", en_pronounce: "red ˈkʌl.ər", bm_pronounce: "war-na me-rah" },
  { cn: "红花", en: "Red flower", pinyin: "hóng huā", parts: ["红"], bm: "Bunga merah", en_pronounce: "red ˈflaʊ.ər", bm_pronounce: "bu-nga me-rah" },
  { cn: "口红", en: "Lipstick", pinyin: "kǒu hóng", parts: ["红"], bm: "Gincu", en_pronounce: "ˈlɪp.stɪk", bm_pronounce: "gin-cu" },
  { cn: "红包", en: "Red packet", pinyin: "hóng bāo", parts: ["红"], bm: "Angpau", en_pronounce: "red ˈpæk.ɪt", bm_pronounce: "ang-pau" },
  { cn: "脸红", en: "Blush", pinyin: "liǎn hóng", parts: ["红"], bm: "Muka merah", en_pronounce: "blʌʃ", bm_pronounce: "mu-ka me-rah" },

  // Root: 黄 (Yellow)
  { cn: "黄色", en: "Yellow color", pinyin: "huáng sè", parts: ["黄"], bm: "Warna kuning", en_pronounce: "ˈjɛl.oʊ ˈkʌl.ər", bm_pronounce: "war-na ku-ning" },
  { cn: "黄瓜", en: "Cucumber", pinyin: "huáng guā", parts: ["黄"], bm: "Timun", en_pronounce: "ˈkjuː.kʌm.bər", bm_pronounce: "ti-mun" },
  { cn: "蛋黄", en: "Yolk", pinyin: "dàn huáng", parts: ["黄"], bm: "Kuning telur", en_pronounce: "joʊk", bm_pronounce: "ku-ning te-lur" },
  { cn: "黄金", en: "Gold", pinyin: "huáng jīn", parts: ["黄"], bm: "Emas", en_pronounce: "ɡoʊld", bm_pronounce: "e-mas" },
  { cn: "炎黄", en: "Yan Huang", pinyin: "yán huáng", parts: ["黄"], bm: "Yan Huang", en_pronounce: "jæn hwɑːŋ", bm_pronounce: "yan huang" },

  // Root: 蓝 (Blue)
  { cn: "蓝色", en: "Blue color", pinyin: "lán sè", parts: ["蓝"], bm: "Warna biru", en_pronounce: "bluː ˈkʌl.ər", bm_pronounce: "war-na bi-ru" },
  { cn: "蓝天", en: "Blue sky", pinyin: "lán tiān", parts: ["蓝"], bm: "Langit biru", en_pronounce: "bluː skaɪ", bm_pronounce: "la-ngit bi-ru" },
  { cn: "蓝莓", en: "Blueberry", pinyin: "lán méi", parts: ["蓝"], bm: "Blueberi", en_pronounce: "ˈbluːˌbɛr.i", bm_pronounce: "blu-be-ri" },
  { cn: "蓝球", en: "Blue ball", pinyin: "lán qiú", parts: ["蓝"], bm: "Bola biru", en_pronounce: "bluː bɔːl", bm_pronounce: "bo-la bi-ru" },
  { cn: "深蓝", en: "Deep blue", pinyin: "shēn lán", parts: ["蓝"], bm: "Biru tua", en_pronounce: "diːp bluː", bm_pronounce: "bi-ru tu-a" },

  // Root: 绿 (Green)
  { cn: "绿色", en: "Green color", pinyin: "lǜ sè", parts: ["绿"], bm: "Warna hijau", en_pronounce: "ɡriːn ˈkʌl.ər", bm_pronounce: "war-na hi-jau" },
  { cn: "绿茶", en: "Green tea", pinyin: "lǜ chá", parts: ["绿"], bm: "Teh hijau", en_pronounce: "ɡriːn tiː", bm_pronounce: "teh hi-jau" },
  { cn: "绿豆", en: "Mung bean", pinyin: "lǜ dòu", parts: ["绿"], bm: "Kacang hijau", en_pronounce: "mʌŋ biːn", bm_pronounce: "ka-cang hi-jau" },
  { cn: "草绿", en: "Grass green", pinyin: "cǎo lǜ", parts: ["绿"], bm: "Hijau rumput", en_pronounce: "ɡrɑːs ɡriːn", bm_pronounce: "hi-jau rum-put" },
  { cn: "绿化", en: "Greening", pinyin: "lǜ huà", parts: ["绿"], bm: "Penghijauan", en_pronounce: "ˈɡriː.nɪŋ", bm_pronounce: "peng-hi-jau-an" },

  // Root: 黑 (Black)
  { cn: "黑色", en: "Black color", pinyin: "hēi sè", parts: ["黑"], bm: "Warna hitam", en_pronounce: "blæk ˈkʌl.ər", bm_pronounce: "war-na hi-tam" },
  { cn: "黑板", en: "Blackboard", pinyin: "hēi bǎn", parts: ["黑"], bm: "Papan hitam", en_pronounce: "ˈblæk.bɔːrd", bm_pronounce: "pa-pan hi-tam" },
  { cn: "黑夜", en: "Dark night", pinyin: "hēi yè", parts: ["黑"], bm: "Malam gelap", en_pronounce: "dɑːrk naɪt", bm_pronounce: "ma-lam ge-lap" },
  { cn: "黑白", en: "Black and white", pinyin: "hēi bái", parts: ["黑"], bm: "Hitam putih", en_pronounce: "blæk ənd waɪt", bm_pronounce: "hi-tam pu-tih" },
  { cn: "黑发", en: "Black hair", pinyin: "hēi fà", parts: ["黑"], bm: "Rambut hitam", en_pronounce: "blæk heər", bm_pronounce: "ram-but hi-tam" },

  // Root: 星 (Star)
  { cn: "星星", en: "Star", pinyin: "xīng xing", parts: ["星"], bm: "Bintang", en_pronounce: "stɑːr", bm_pronounce: "bin-tang" },
  { cn: "明星", en: "Celebrity", pinyin: "míng xīng", parts: ["星"], bm: "Selebriti", en_pronounce: "səˈlɛb.rɪ.ti", bm_pronounce: "se-le-bri-ti" },
  { cn: "星球", en: "Planet", pinyin: "xīng qiú", parts: ["星"], bm: "Planet", en_pronounce: "ˈplæn.ɪt", bm_pronounce: "pla-net" },
  { cn: "火星", en: "Mars", pinyin: "huǒ xīng", parts: ["星"], bm: "Marikh", en_pronounce: "mɑːrz", bm_pronounce: "ma-rikh" },
  { cn: "星期", en: "Week", pinyin: "xīng qī", parts: ["星"], bm: "Minggu", en_pronounce: "wiːk", bm_pronounce: "ming-gu" },

  // Root: 海 (Sea)
  { cn: "大海", en: "Sea", pinyin: "dà hǎi", parts: ["海"], bm: "Laut", en_pronounce: "siː", bm_pronounce: "la-ut" },
  { cn: "海水", en: "Seawater", pinyin: "hǎi shuǐ", parts: ["海"], bm: "Air laut", en_pronounce: "ˈsiːˌwɔː.tər", bm_pronounce: "a-ir la-ut" },
  { cn: "海鲜", en: "Seafood", pinyin: "hǎi xiān", parts: ["海"], bm: "Makanan laut", en_pronounce: "ˈsiː.fuːd", bm_pronounce: "ma-ka-nan la-ut" },
  { cn: "海边", en: "Seaside", pinyin: "hǎi biān", parts: ["海"], bm: "Tepi laut", en_pronounce: "ˈsiː.saɪd", bm_pronounce: "te-pi la-ut" },
  { cn: "海洋", en: "Ocean", pinyin: "hǎi yáng", parts: ["海"], bm: "Lautan", en_pronounce: "ˈoʊ.ʃən", bm_pronounce: "la-u-tan" },

  // Root: 河 (River)
  { cn: "河水", en: "River water", pinyin: "hé shuǐ", parts: ["河"], bm: "Air sungai", en_pronounce: "ˈrɪv.ər ˈwɔː.tər", bm_pronounce: "a-ir su-ngai" },
  { cn: "小河", en: "Small river", pinyin: "xiǎo hé", parts: ["河"], bm: "Sungai kecil", en_pronounce: "smɔːl ˈrɪv.ər", bm_pronounce: "su-ngai ke-cil" },
  { cn: "河边", en: "Riverside", pinyin: "hé biān", parts: ["河"], bm: "Tepi sungai", en_pronounce: "ˈrɪv.ər.saɪd", bm_pronounce: "te-pi su-ngai" },
  { cn: "河马", en: "Hippo", pinyin: "hé mǎ", parts: ["河"], bm: "Badak air", en_pronounce: "ˈhɪp.oʊ", bm_pronounce: "ba-dak a-ir" },
  { cn: "黄河", en: "Yellow River", pinyin: "huáng hé", parts: ["河"], bm: "Sungai Kuning", en_pronounce: "ˈjɛl.oʊ ˈrɪv.ər", bm_pronounce: "su-ngai ku-ning" },

  // Root: 土 (Earth/Soil)
  { cn: "土地", en: "Land", pinyin: "tǔ dì", parts: ["土"], bm: "Tanah", en_pronounce: "lænd", bm_pronounce: "ta-nah" },
  { cn: "土豆", en: "Potato", pinyin: "tǔ dòu", parts: ["土"], bm: "Ubi kentang", en_pronounce: "pəˈteɪ.toʊ", bm_pronounce: "u-bi ken-tang" },
  { cn: "水土", en: "Water and soil", pinyin: "shuǐ tǔ", parts: ["土"], bm: "Air dan tanah", en_pronounce: "ˈwɔː.tər ənd sɔɪl", bm_pronounce: "a-ir dan ta-nah" },
  { cn: "泥土", en: "Soil", pinyin: "ní tǔ", parts: ["土"], bm: "Tanah liat", en_pronounce: "sɔɪl", bm_pronounce: "ta-nah li-at" },
  { cn: "尘土", en: "Dust", pinyin: "chén tǔ", parts: ["土"], bm: "Debu", en_pronounce: "dʌst", bm_pronounce: "de-bu" },

  // Root: 金 (Gold/Metal)
  { cn: "金子", en: "Gold", pinyin: "jīn zi", parts: ["金"], bm: "Emas", en_pronounce: "ɡoʊld", bm_pronounce: "e-mas" },
  { cn: "金黄", en: "Golden yellow", pinyin: "jīn huáng", parts: ["金"], bm: "Kuning emas", en_pronounce: "ˈɡoʊl.dən ˈjɛl.oʊ", bm_pronounce: "ku-ning e-mas" },
  { cn: "五金", en: "Hardware", pinyin: "wǔ jīn", parts: ["金"], bm: "Perkakasan", en_pronounce: "ˈhɑːrd.wɛər", bm_pronounce: "per-ka-ka-san" },
  { cn: "金钱", en: "Money", pinyin: "jīn qián", parts: ["金"], bm: "Wang", en_pronounce: "ˈmʌn.i", bm_pronounce: "wang" },
  { cn: "奖金", en: "Prize money", pinyin: "jiǎng jīn", parts: ["金"], bm: "Wang hadiah", en_pronounce: "praɪz ˈmʌn.i", bm_pronounce: "wang ha-di-ah" },

  // Root: 多 (Many)
  { cn: "多少", en: "How many/much", pinyin: "duō shao", parts: ["多"], bm: "Berapa banyak", en_pronounce: "haʊ ˈmɛn.i", bm_pronounce: "be-ra-pa ba-nyak" },
  { cn: "许多", en: "Many", pinyin: "xǔ duō", parts: ["多"], bm: "Banyak", en_pronounce: "ˈmɛn.i", bm_pronounce: "ba-nyak" },
  { cn: "更多", en: "More", pinyin: "gèng duō", parts: ["多"], bm: "Lebih banyak", en_pronounce: "mɔːr", bm_pronounce: "le-bih ba-nyak" },
  { cn: "多谢", en: "Many thanks", pinyin: "duō xiè", parts: ["多"], bm: "Terima kasih banyak", en_pronounce: "ˈmɛn.i θæŋks", bm_pronounce: "te-ri-ma ka-sih ba-nyak" },
  { cn: "多余", en: "Surplus", pinyin: "duō yú", parts: ["多"], bm: "Lebihan", en_pronounce: "ˈsɜːr.plʌs", bm_pronounce: "le-bih-an" },

  // Root: 少 (Few)
  { cn: "很少", en: "Very few", pinyin: "hěn shǎo", parts: ["少"], bm: "Sangat sedikit", en_pronounce: "ˈvɛr.i fjuː", bm_pronounce: "sa-ngat se-di-kit" },
  { cn: "少年", en: "Juvenile", pinyin: "shào nián", parts: ["少"], bm: "Remaja", en_pronounce: "ˈdʒuː.və.naɪl", bm_pronounce: "re-ma-ja" },
  { cn: "缺少", en: "Lack", pinyin: "quē shǎo", parts: ["少"], bm: "Kekurangan", en_pronounce: "læk", bm_pronounce: "ke-ku-ra-ngan" },
  { cn: "减少", en: "Reduce", pinyin: "jiǎn shǎo", parts: ["少"], bm: "Kurangkan", en_pronounce: "rɪˈduːs", bm_pronounce: "ku-rang-kan" },
  { cn: "多少", en: "How many", pinyin: "duō shao", parts: ["少"], bm: "Berapa", en_pronounce: "haʊ ˈmɛn.i", bm_pronounce: "be-ra-pa" },

  // Root: 高 (High)
  { cn: "高兴", en: "Happy", pinyin: "gāo xìng", parts: ["高"], bm: "Gembira", en_pronounce: "ˈhæp.i", bm_pronounce: "gem-bi-ra" },
  { cn: "高大", en: "Tall and big", pinyin: "gāo dà", parts: ["高"], bm: "Tinggi dan besar", en_pronounce: "tɔːl ənd bɪɡ", bm_pronounce: "ting-gi dan be-sar" },
  { cn: "高级", en: "High level", pinyin: "gāo jí", parts: ["高"], bm: "Tahap tinggi", en_pronounce: "haɪ ˈlɛv.əl", bm_pronounce: "ta-hap ting-gi" },
  { cn: "提高", en: "Improve", pinyin: "tí gāo", parts: ["高"], bm: "Meningkatkan", en_pronounce: "ɪmˈpruːv", bm_pronounce: "me-ning-kat-kan" },
  { cn: "身高", en: "Height", pinyin: "shēn gāo", parts: ["高"], bm: "Ketinggian", en_pronounce: "haɪt", bm_pronounce: "ke-ting-gi-an" },

  // Root: 长 (Long)
  { cn: "长短", en: "Length", pinyin: "cháng duǎn", parts: ["长"], bm: "Panjang pendek", en_pronounce: "lɛŋθ", bm_pronounce: "pan-jang pen-dek" },
  { cn: "长大", en: "Grow up", pinyin: "zhǎng dà", parts: ["长"], bm: "Membesar", en_pronounce: "ɡroʊ ʌp", bm_pronounce: "mem-be-sar" },
  { cn: "长发", en: "Long hair", pinyin: "cháng fà", parts: ["长"], bm: "Rambut panjang", en_pronounce: "lɒŋ hɛər", bm_pronounce: "ram-but pan-jang" },
  { cn: "长久", en: "Long time", pinyin: "cháng jiǔ", parts: ["长"], bm: "Lama", en_pronounce: "lɒŋ taɪm", bm_pronounce: "la-ma" },
  { cn: "家长", en: "Parent", pinyin: "jiā zhǎng", parts: ["长"], bm: "Ibu bapa", en_pronounce: "ˈpɛə.rənt", bm_pronounce: "i-bu ba-pa" },

  // Root: 冷 (Cold)
  { cn: "冷水", en: "Cold water", pinyin: "lěng shuǐ", parts: ["冷"], bm: "Air sejuk", en_pronounce: "koʊld ˈwɔː.tər", bm_pronounce: "a-ir se-juk" },
  { cn: "寒冷", en: "Cold", pinyin: "hán lěng", parts: ["冷"], bm: "Sejuk", en_pronounce: "koʊld", bm_pronounce: "se-juk" },
  { cn: "冷气", en: "Air conditioning", pinyin: "lěng qì", parts: ["冷"], bm: "Pendingin hawa", en_pronounce: "ˈɛər kənˌdɪʃ.ən.ɪŋ", bm_pronounce: "pen-di-ngin ha-wa" },
  { cn: "冷静", en: "Calm", pinyin: "lěng jìng", parts: ["冷"], bm: "Tenang", en_pronounce: "kɑːm", bm_pronounce: "te-nang" },
  { cn: "冰冷", en: "Ice cold", pinyin: "bīng lěng", parts: ["冷"], bm: "Sangat sejuk", en_pronounce: "aɪs koʊld", bm_pronounce: "sa-ngat se-juk" },

  // Root: 热 (Hot)
  { cn: "热水", en: "Hot water", pinyin: "rè shuǐ", parts: ["热"], bm: "Air panas", en_pronounce: "hɒt ˈwɔː.tər", bm_pronounce: "a-ir pa-nas" },
  { cn: "热闹", en: "Lively", pinyin: "rè nao", parts: ["热"], bm: "Meriah", en_pronounce: "ˈlaɪv.li", bm_pronounce: "me-ri-ah" },
  { cn: "热心", en: "Enthusiastic", pinyin: "rè xīn", parts: ["热"], bm: "Bersemangat", en_pronounce: "ɪnˌθjuː.ziˈæs.tɪk", bm_pronounce: "ber-se-ma-ngat" },
  { cn: "热狗", en: "Hot dog", pinyin: "rè gǒu", parts: ["热"], bm: "Hot dog", en_pronounce: "hɒt dɒɡ", bm_pronounce: "hot dog" },
  { cn: "闷热", en: "Sultry", pinyin: "mēn rè", parts: ["热"], bm: "Panas terik", en_pronounce: "ˈsʌl.tri", bm_pronounce: "pa-nas te-rik" },

  // Root: 衣 (Clothes)
  { cn: "衣服", en: "Clothes", pinyin: "yī fu", parts: ["衣"], bm: "Pakaian", en_pronounce: "kloʊðz", bm_pronounce: "pa-kai-an" },
  { cn: "上衣", en: "Upper garment", pinyin: "shàng yī", parts: ["衣"], bm: "Baju", en_pronounce: "ˈʌp.ər ˈɡɑːr.mənt", bm_pronounce: "ba-ju" },
  { cn: "大衣", en: "Coat", pinyin: "dà yī", parts: ["衣"], bm: "Kot", en_pronounce: "koʊt", bm_pronounce: "kot" },
  { cn: "毛衣", en: "Sweater", pinyin: "máo yī", parts: ["衣"], bm: "Baju sejuk", en_pronounce: "ˈswɛt.ər", bm_pronounce: "ba-ju se-juk" },
  { cn: "洗衣", en: "Wash clothes", pinyin: "xǐ yī", parts: ["衣"], bm: "Basuh baju", en_pronounce: "wɒʃ kloʊðz", bm_pronounce: "ba-suh ba-ju" },

  // Root: 身 (Body)
  { cn: "身体", en: "Body", pinyin: "shēn tǐ", parts: ["身"], bm: "Badan", en_pronounce: "ˈbɒd.i", bm_pronounce: "ba-dan" },
  { cn: "身边", en: "By one's side", pinyin: "shēn biān", parts: ["身"], bm: "Di sisi", en_pronounce: "baɪ wʌnz saɪd", bm_pronounce: "di si-si" },
  { cn: "身分", en: "Identity", pinyin: "shēn fèn", parts: ["身"], bm: "Identiti", en_pronounce: "aɪˈdɛn.tɪ.ti", bm_pronounce: "i-den-ti-ti" },
  { cn: "全身", en: "Whole body", pinyin: "quán shēn", parts: ["身"], bm: "Seluruh badan", en_pronounce: "hoʊl ˈbɒd.i", bm_pronounce: "se-lu-ruh ba-dan" },
  { cn: "转身", en: "Turn around", pinyin: "zhuǎn shēn", parts: ["身"], bm: "Pusing badan", en_pronounce: "tɜːrn əˈraʊnd", bm_pronounce: "pu-sing ba-dan" },

  // Root: 走 (Walk)
  { cn: "走路", en: "Walk", pinyin: "zǒu lù", parts: ["走"], bm: "Jalan kaki", en_pronounce: "wɔːk", bm_pronounce: "ja-lan ka-ki" },
  { cn: "走开", en: "Go away", pinyin: "zǒu kāi", parts: ["走"], bm: "Pergi", en_pronounce: "ɡoʊ əˈweɪ", bm_pronounce: "per-gi" },
  { cn: "走动", en: "Walk around", pinyin: "zǒu dòng", parts: ["走"], bm: "Berjalan-jalan", en_pronounce: "wɔːk əˈraʊnd", bm_pronounce: "ber-ja-lan ja-lan" },
  { cn: "走出", en: "Walk out", pinyin: "zǒu chū", parts: ["走"], bm: "Keluar", en_pronounce: "wɔːk aʊt", bm_pronounce: "ke-lu-ar" },
  { cn: "走运", en: "Lucky", pinyin: "zǒu yùn", parts: ["走"], bm: "Bernasib baik", en_pronounce: "ˈlʌk.i", bm_pronounce: "ber-na-sib ba-ik" },

  // Root: 来 (Come)
  { cn: "来回", en: "Back and forth", pinyin: "lái huí", parts: ["来"], bm: "Berulang-alik", en_pronounce: "bæk ənd fɔːrθ", bm_pronounce: "ber-u-lang a-lik" },
  { cn: "出来", en: "Come out", pinyin: "chū lái", parts: ["来"], bm: "Keluar", en_pronounce: "kʌm aʊt", bm_pronounce: "ke-lu-ar" },
  { cn: "进来", en: "Come in", pinyin: "jìn lái", parts: ["来"], bm: "Masuk", en_pronounce: "kʌm ɪn", bm_pronounce: "ma-suk" },
  { cn: "本来", en: "Originally", pinyin: "běn lái", parts: ["来"], bm: "Asalnya", en_pronounce: "əˈrɪdʒ.ɪ.nəl.i", bm_pronounce: "a-sal-nya" },
  { cn: "后来", en: "Later", pinyin: "hòu lái", parts: ["来"], bm: "Kemudian", en_pronounce: "ˈleɪ.tər", bm_pronounce: "ke-mu-di-an" },

  // Total groups: 90
];
