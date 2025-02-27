// var question = document.getElementById("question");
// var answer = document.getElementById("answer");
// var loading = document.getElementById("loading");

// var apiUrl = "https://widipe.com/openai";
// async function sendReq() {
//   try {
//     const url = `${apiUrl}?text=${question.value}`;
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(`Request failed with status: ${response.status}`);
//     }
//     const data = await response.json();
//     answer.innerHTML = data.result;
//     console.log(data);
//   } catch (error) {
//     console.error(error.massage);
//   }
// }

var question = document.getElementById("question");
var answer = document.getElementById("answer");
var loading = document.getElementById("loading"); // Mengambil elemen loading

var apiURL = "https://widipe.com/openai"; // URL API

async function sendReq() {
  try {
    // Tampilkan animasi loading
    loading.classList.remove("hidden");
    answer.innerHTML = ""; // Kosongkan jawaban sebelumnya

    const url = `${apiURL}?text=${encodeURIComponent(question.value)}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }

    const data = await response.json();
    answer.innerHTML = data.result; // Tampilkan hasil
  } catch (error) {
    answer.innerHTML = `Error: ${error.message}`;
  } finally {
    // Sembunyikan animasi loading
    loading.classList.add("hidden");
  }
}