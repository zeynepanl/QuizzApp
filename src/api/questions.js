const BASE_URL = "https://opentdb.com/api.php";

export async function fetchQuestions(amount = 10, difficulty = "easy", type = "multiple") {
  try {
    const response = await fetch(
      `${BASE_URL}?amount=${amount}&difficulty=${difficulty}&type=${type}`
    );
    if (!response.ok) {
      throw new Error("Sorular yüklenirken hata oluştu.");
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("API Hatası:", error);
    throw error;
  }
}
