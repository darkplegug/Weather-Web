export const GetApi = async ({ city, index }) => {
  const res = await fetch(
    `https://api.weatherapi.com/v1/${index}.json?key=${process.env.NEXT_API_KEY}&q=${city}&days=3&aqi=yes&alerts=yes`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch weather data");
  }

  return res.json();
};
