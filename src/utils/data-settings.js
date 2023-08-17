const landingSettings = {
  title: "ABC PRAWIDŁOWEJ PIELĘGNACJI DOMOWEJ",
  date: {
    day: 16,
    month: 8,
    year: 2024,
    hours: 16,
    minutes: 34,
  },
};

const webinarNumberAndDate = `Webinar ${landingSettings.date.year}-${landingSettings.date.month}-${landingSettings.date.day}`;

const webinarTitle =
  "Czy zgodzisz się, że misja to odpowiedzialne zadanie do spełnienia?\n To także drogowskaz, który wyznacza kierunek działań.";
const webinarTxt1 =
  "Naszą misją jest tworzenie miejsca, dzięki któremu polepszysz swoje zdrowie a poprawa wyglądu będzie tylko przyjemnym skutkiem ubocznym!";
const webinarTxt2 =
  'Wierzymy, że skóra to "lustro organizmu". Jeśli pojawia się na niej trądzik nadwrażliwość, zaczerwienienie, czy zmarszczki nieadekwatne do wieku, to jest to sygnał od ciała, że coś należy zmienić.';
const webinarTxt3 =
  "W Misji Perfekcji pomagamy naszym Klientom dotrzeć do źródła ich problemów z cerą przez wnikliwe konsultacje i badania laboratoryjne. Układamy plany suplementacji, pielęgnacji domowej i zabiegów w gabinecie, aby jak najszybciej dotrzeć do wspólnego celu, którym jest Twoja zdrowa cera.";
const webinarTxt4 =
  "Dążymy nie tylko do perfekcyjnego wykonywania zabiegów, ale także do perfekcyjnej obsługi, po to, abyś poczuła się zaopiekowania, bezpieczna i pewna efektów.";
const webinarTxt5 =
  "Nasz zespół tworzą ludzie z niepohamowaną potrzebą rozwoju. Uwielbiamy swoją pracę i naszych Klientów. Czujemy wspólną misję i wiemy, że razem możemy mieć realny wpływ na poprawę życia naszych Klientów.";
const webinarTxt6 = "Będziesz w najlepszych rękach!";

const webinarContentObj = {
  title: [webinarTitle],
  txts: [webinarTxt1, webinarTxt2, webinarTxt3, webinarTxt4, webinarTxt5, webinarTxt6],
};

export { landingSettings, webinarContentObj, webinarNumberAndDate };
