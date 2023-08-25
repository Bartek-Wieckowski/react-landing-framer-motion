const landingSettings = {
  title: "Session: Capture the Moments, Crafted with Elegance",
  date: {
    day: 23,
    month: 11,
    year: 2025,
    hours: 20,
    minutes: 0,
  },
  gift: true,
  link: "https://www.total-unknown-l1nk.com",
};

const webinarNumberAndDate = `Session ${landingSettings.date.year}-${landingSettings.date.month}-${landingSettings.date.day}`;

const webinarTopTitle = "What Sets Us Apart:";
const webinarTopLi1 =
  "Artistic Vision: Our photographs are more than just pictures – they are art. Jake has an innate ability to see the world through a creative lens, resulting in photographs that are not only technically excellent but also artistically compelling.";
const webinarTopLi2 =
  "Personalized Experience: We understand that each client is unique, and so are their moments. We work closely with you to understand your vision, preferences, and the story you want to tell. This personalized approach ensures that each photograph captures the essence of your individuality.";
const webinarTopLi3 =
  "Passion for Storytelling: We believe that every photograph has a story to tell. Jake's passion for storytelling is evident in the way they capture fleeting moments that convey a range of emotions. Our photographs resonate with viewers, evoking powerful feelings and memories.";
const webinarTopInfo =
  "Are you searching for a photographer who can turn your precious moments into timeless pieces of art? Look no further!";

const webinarBottomTitle1 = "Come that day";
const webinarBottomTitle2 = landingSettings.title;
const webinarBottomLi1 = " Our photography style can be described as the best in the world.";
const webinarBottomLi2 =
  "Whether it's the play of light and shadows, candid moments, or carefully orchestrated compositions, our style adds a unique dimension to each photograph, making them stand out in a crowd.";

const webinarContentTop = {
  topTitle: [webinarTopTitle],
  topLi: [webinarTopLi1, webinarTopLi2, webinarTopLi3],
  topText: [webinarTopInfo],
};
const webinarContentBottom = {
  bottomTitle1: [webinarBottomTitle1],
  bottomTitle2: [webinarBottomTitle2],
  bottomLi: [webinarBottomLi1, webinarBottomLi2],
};

export { landingSettings, webinarContentTop, webinarContentBottom, webinarNumberAndDate };
