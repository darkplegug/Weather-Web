export async function translateToEnglish(text) {
  if (!text) return ""

  try {
    const res = await fetch("https://libretranslate.de/translate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        q: text,
        source: "auto", // otomatis deteksi bahasa
        target: "en",
        format: "text",
      }),
    })

    const data = await res.json()
    return data.translatedText
  } catch (error) {
    console.error("Translate error:", error)
    return text // fallback: tampilkan teks asli
  }
}
