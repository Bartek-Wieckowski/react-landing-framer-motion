const landingSettings = {
  title: "Co pomaga, a co szkodzi na trądzik?",
  date: {
    day: 23,
    month: 8,
    year: 2023,
    hours: 20,
    minutes: 0,
  },
  gift: true,
};

const webinarNumberAndDate = `Webinar ${landingSettings.date.year}-${landingSettings.date.month}-${landingSettings.date.day}`;

const webinarTopTitle = "TEGO NIE WIEDZIAŁAŚ O TRĄDZIKU!";
const webinarTopLi1 = "banany nie są polecane w diecie przeciwtrądzikowej";
const webinarTopLi2 = "trądzik współistnieje z osłabioną pracą wątroby";
const webinarTopLi3 = "otulanie twarzy kocykiem z poliestru pogarsza stan cery";
const webinarTopLi4 = "suplementacja witaminy D3 i kwasów EPA i DHA pomaga redukować krosty";
const webinarTopInfo =
  "O tym i wielu innych rzeczach które nasilają i wyciszają trądzik opowiem na DARMOWYM WEBINARZE";

const webinarBottomTitle1 = "CZEGO DOWIESZ SIĘ Z WEBINARU";
const webinarBottomTitle2 = landingSettings.title;
const webinarBottomInfo = "Opowiem o:";
const webinarBottomLi1 = 'Zasadzie "klucz", aby zrozumieć trądzik,';
const webinarBottomLi2 = "O tym czego unikać w pielęgnacji, diecie i stylu życia";
const webinarBottomLi3 = "Co wprowadzić w diecie, pielęgnacji i stylu życia, aby wspomagać leczenie trądziku";

const webinarContentTop = {
  topTitle: [webinarTopTitle],
  topLi: [webinarTopLi1, webinarTopLi2, webinarTopLi3, webinarTopLi4],
  topText: [webinarTopInfo],
};
const webinarContentBottom = {
  bottomTitle1: [webinarBottomTitle1],
  bottomTitle2: [webinarBottomTitle2],
  bottomText: [webinarBottomInfo],
  bottomLi: [webinarBottomLi1, webinarBottomLi2, webinarBottomLi3],
};

export { landingSettings, webinarContentTop, webinarContentBottom, webinarNumberAndDate };
