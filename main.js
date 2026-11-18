/*
CHALLENGE 1:
Tüm <img> etiketlerine mouseenter ve mouseleave eventleri ekleyin.
- Mouse üzerine geldiğinde (mouseenter): ilgili resme "grayscale" class'ı ekleyin.
- Mouse çıktığında (mouseleave): "grayscale" class'ını kaldırın.
*/

const images = document.querySelectorAll("img");

images.forEach((image) => {
  image.addEventListener("mouseenter", (event) => {
    event.target.classList.add("grayscale");
  });

  image.addEventListener("mouseleave", (event) => {
    event.target.classList.remove("grayscale");
  });
});
/*
CHALLENGE 2:
Sayfa aktifken (herhangi bir yere tıklandığında), klavye dinlemeye başlasın.
- Klavyeden "1" tuşuna basılırsa <body> elementine "theme1" class'ı eklensin
- "2" → "theme2", "3" → "theme3" olarak eklensin
- "Escape" (Esc) tuşuna basılırsa body'deki tüm bu class'lar kaldırılsın
NOT: Klavye eventlerini document yerine **window** nesnesine ekleyin.
*/
const bodyElement = document.querySelector("body");
window.addEventListener("keydown", (event) => {
  if (event.key === "1") {
    bodyElement.classList.add("theme1");
  } else if (event.key === "2") {
    bodyElement.classList.add("theme2");
  } else if (event.key === "3") {
    bodyElement.classList.add("theme3");
  } else if (event.key === "Escape") {
    bodyElement.classList.remove("theme1", "theme2", "theme3");
  }
});

/*
CHALLENGE 3:
<input id="full_name"> alanına yazı yazıldıkça:
- Girilen metni otomatik olarak BÜYÜK HARFE çevirin
- Metin 5 karakterden UZUNSA <button> elementini "enabled" yapın
- Aksi halde (5 veya daha az karakter) buton "disabled" olmalı
*/
const fullNameInput = document.getElementById("full_name");
fullNameInput.addEventListener("input", (event) => {
  const inputValue = event.target.value.toUpperCase();
  event.target.value = inputValue;
  if (inputValue.length > 5) {
    document.querySelector("button").disabled = false;
  } else {
    document.querySelector("button").disabled = true;
  }
});

/*
CHALLENGE 4:
Form submit edildiğinde (Kaydet butonuna basıldığında):
- Input alanındaki metni alıp, <p id="submitResult"> içerisine şu metni yazın:
  "{inputa_yazılan_metin} başarı ile kaydedildi."
- Input alanını temizleyin
- <button> tekrar disabled hale gelsin
*/
const button = document.querySelector("button");
button.addEventListener("click", (event) => {
  const inputValue = fullNameInput.value;
  const submitResult = document.getElementById("submitResult");
  submitResult.textContent = `${inputValue} başarı ile kaydedildi.`;
  fullNameInput.value = "";
  button.disabled = true;
});
