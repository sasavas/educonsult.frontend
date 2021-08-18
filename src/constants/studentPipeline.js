const studentPipeline = [
  {
    title: "leadStatus",
    text: "Lead",
    status: "done",
    definition: "Henuz ogrenci degil, lead olarak ekleniyor",
  },
  {
    title: "sales",
    text: "Satış",
    status: "done",
    definition: "Ogrenci evraklari sisteme eklendi",
    comment: "Bu asamada hangi evraklar eklenecek?",
  },
  {
    title: "chooseSchoolAndProgram",
    text: "Bölüm Seç",
    status: "done",
    definition: "Ogrenci okul bolum secildi",
    comment:
      "Burada okul secilince ogrencinin profilinde on secim olarak mi gozukecek?",
  },
  {
    title: "uploadRequiredFiles",
    text: "Belge Yükle",
    status: "done",
    definition: "Gerekli evraklar yuklendi",
    comment: "Bu asamda hangi evraklar yuklenecek?",
  },
  {
    title: "checkDeadlinesForPrograms",
    text: "Deadline Kontrol Et",
    status: "done",
    definition: "Bu bolumler icin deadline lar kontrol edildi",
  },
  {
    title: "applicationMadeForprograms",
    text: "Bölüm Başvurusu Yap",
    status: "done",
    definition: "Bolumlere basvuru yapildi",
    comment: "Basvuru islemleri kac farkli isten olusuyor?",
  },
  {
    title: "waitingResponseForApplication",
    text: "Başvuru Yanıt Bekle",
    status: "inProgress",
    definition: "Basvurular icin cevap bekleniyor",
  },
  {
    title: "VisaProcess",
    text: "Vize Süreci",
    status: "todo",
    definition: "Vize Islemleri",
    comment:
      "Vize islemleri icin ayrica belge yuklenmesi gerekecek mi? Vize surecini detaylandirabiliriz.",
  },
  {
    title: "ScholarshipProcess",
    text: "Burs Süreci",
    status: "todo",
    definition: "Burs islemleri",
  },
  {
    title: "ThingsToDoInItaly",
    text: "Yerel Hizmetler",
    status: "todo",
    definition: "Gittigi yerde yapilacak yerel hizmetler vs.",
    comment: "Bunu da detaylandiralim. Konaklama, ...?",
  },
  {
    title: "DoneWithTheStudent",
    text: "Süreç Tamamlandı",
    status: "todo",
    definition: "Ogrenciyle is bitti",
  },
];

export default studentPipeline;

// const logPipelines = function () {
//   for (let i = 0; i < studentPipeline.length; i++) {
//     const p = studentPipeline[i];
//     console.log("-------------------------------------------------");
//     console.log(i + 1, p.definition);
//     if (p.comment) {
//       console.log("soru:", p.comment);
//     }
//   }
// };

// logPipelines();
