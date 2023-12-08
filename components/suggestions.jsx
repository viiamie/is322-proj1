import { ctoF } from "@/components/helpers";

export default function getSuggestions(weatherData) {
  const temp = Math.round(ctoF(weatherData.main.temp))

   const temperatureCards = [
    { temperatureRange: [80, Number.POSITIVE_INFINITY], cards: [
      { image: '/tanktop.png', label: 'tank top' },
      { image: '/skirt.png', label: 'skirt' },
      { image: '/shorts.png', label: 'shorts' },
      { image: '/dress.png', label: 'dress' },
      { image: '/flipflops.png', label: 'flip flops' },
    ] },
    { temperatureRange: [60, 79], cards: [
      { image: '/tshirt.png', label: 't-shirt' },
      { image: '/skirt.png', label: 'skirt' },
      { image: '/shorts.png', label: 'shorts' },
      { image: '/dress.png', label: 'dress' },
      { image: '/sandals.png', label: 'sandals' },
    ] },
    { temperatureRange: [50, 59], cards: [
      { image: '/longsleeve.png', label: 'long sleeves' },
      { image: '/longpants.png', label: 'long pants' },
      { image: '/hoodie.png', label: 'hoodie' },
      { image: '/socks.png', label: 'socks' },
      { image: '/sneakers.png', label: 'sneakers' },
    ] },
    { temperatureRange: [35, 49], cards: [
      { image: '/sweater.png', label: 'sweater' },
      { image: '/jacket.png', label: 'jacket' },
      { image: '/hoodie.png', label: 'hoodie' },
      { image: '/longpants.png', label: 'long pants' },
      { image: '/socks.png', label: 'socks' },
      { image: '/sneakers.png', label: 'sneakers' },
      { image: '/boots.png', label: 'boots' },
    ] },
    { temperatureRange: [Number.NEGATIVE_INFINITY, 34], cards: [
      { image: '/sweater.png', label: 'sweater' },
      { image: '/heavyjacket.png', label: 'heavy jacket' },
      { image: '/hoodie.png', label: 'hoodie' },
      { image: '/longpants.png', label: 'long pants' },
      { image: '/socks.png', label: 'socks' },
      { image: '/boots.png', label: 'boots' },
      { image: '/scarf.png', label: 'scarf' },
      { image: '/winterhat.png', label: 'winter hat' },
      { image: '/gloves.png', label: 'gloves' },
    ] },
  ];

  const specialWeatherCards = [
    { condition: 'Rain', cards: [
      { image: '/rainjacket.png', label: 'rain jacket' },
      { image: '/socks.png', label: 'socks' },
      { image: '/boots.png', label: 'boots' },
      { image: '/umbrella.png', label: 'umbrella' },
    ] }
  ];

  // default card for unknown conditions
  const defaultCard = { image: '/tshirt.png', label: 'default' };

  const specialWeatherCard = specialWeatherCards.find(({ condition }) =>
    weatherData.weather[0].main.toLowerCase().includes(condition.toLowerCase())
  )?.cards || [];

  const temperatureCard = temperatureCards.find(({ temperatureRange }) => {
    const [minTemp, maxTemp] = temperatureRange;
    return temp >= minTemp && temp <= maxTemp;
  })?.cards || [];

  // concatenate special weather and temperature cards
  const selectedCards = [...specialWeatherCard, ...temperatureCard];

  // return the selected cards or default card
  return selectedCards.length > 0 ? selectedCards : [defaultCard];
};