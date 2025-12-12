export const GetWeather = async ({ city }) => {
        const api = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/current.json?key=${process.env.NEXT_API_KEY}&q=${city}`)
        const weather = await api.json()
        return weather;
}