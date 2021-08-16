const studentPipeline = [
  {
    title: "leadStatus",
    text: "Data",
    definition: "Henuz ogrenci degil, lead olarak ekleniyor",
  },
  {
    title: "sales",
    text: "Satış",
    definition: "Ogrenci evraklari sisteme eklendi",
    comment: "Bu asamada hangi evraklar eklenecek?",
  },
  {
    title: "chooseSchoolAndProgram",
    text: "Bölüm Seç",
    definition: "Ogrenci okul bolum secildi",
    comment:
      "Burada okul secilince ogrencinin profilinde on secim olarak mi gozukecek?",
  },
  {
    title: "uploadRequiredFiles",
    text: "Belge Yükle",
    definition: "Gerekli evraklar yuklendi",
    comment: "Bu asamda hangi evraklar yuklenecek?",
  },
  {
    title: "checkDeadlinesForPrograms",
    text: "Deadline Kontrol Et",
    definition: "Bu bolumler icin deadline lar kontrol edildi",
  },
  {
    title: "applicationMadeForprograms",
    text: "Bölüm Bşavurusu Yap",
    definition: "Bolumlere basvuru yapildi",
    comment: "Basvuru islemleri kac farkli isten olusuyor?",
  },
  {
    title: "waitingResponseForApplication",
    text: "Başvuru Yanıt Bekle",
    definition: "Basvurular icin cevap bekleniyor",
  },
  {
    title: "ProgressIfApplicationAccepted",
    text: "Başvuru Kabul Edildi",
    definition:
      "Ogrenci kabul aldiysa ilerler, almadiysa bu asamada kalabilir, bir nevi kirilma noktasi",
  },
  {
    title: "VisaProcess",
    text: "Vize Süreci",
    definition: "Vize Islemleri",
    comment:
      "Vize islemleri icin ayrica belge yuklenmesi gerekecek mi? Vize surecini detaylandirabiliriz.",
  },
  {
    title: "ScholarshipProcess",
    text: "Burs Süreci",
    definition: "Burs islemleri",
  },
  {
    title: "ThingsToDoInItaly",
    text: "Yerel Hizmetler",
    definition: "Gittigi yerde yapilacak yerel hizmetler vs.",
    comment: "Bunu da detaylandiralim. Konaklama, ...?",
  },
  {
    title: "DoneWithTheStudent",
    text: "Süreç Tamamlandı",
    definition: "Ogrenciyle is bitti",
  },
];

// export default studentPipeline;

const logPipelines = function () {
  for (let i = 0; i < studentPipeline.length; i++) {
    const p = studentPipeline[i];
    console.log("-------------------------------------------------");
    console.log(i + 1, p.definition);
    if (p.comment) {
      console.log("soru:", p.comment);
    }
  }
};

logPipelines();
