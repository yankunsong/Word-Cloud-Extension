// Initialize button with user's preferred color
let changeColor = document.getElementById("changeColor");

chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});

// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
let changeColor = document.getElementById("changeColor");

  console.log(tab.url);
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: wordRank,
  });
});

// The body of this function will be executed as a content script inside the
// current page
// function setPageBackgroundColor() {
//   chrome.storage.sync.get("color", ({ color }) => {
//     document.body.style.backgroundColor = color;
//   });
// }

function wordRank() {
  function contentGetter() {
    var bodyScripts = document.querySelectorAll("body script");
    for (var i = 0; i < bodyScripts.length; i++) {
      bodyScripts[i].remove();
    }
    var str = document.body.innerText;
    return str;
  }

  function contentToArr(content) {
    const arr = [];
    paragraphs = content.split("\n").filter((el) => el.length > 15);
    for (let para of paragraphs) {
      para = para.replace(/[^\w\s]|_/g, "");
      arr.push(...para.split(" ").filter((el) => el.length > 4));
    }
    return arr;
  }

  function sortArrayByFreq(words) {
    const counter = Object.create(null);
    words.forEach(function (word) {
      counter[word] = (counter[word] || 0) + 1;
    });
    const blacklist = ["their", "about"];
    blacklist.forEach((el) => (counter[el] = 0));
    let entries = Object.entries(counter);
    let sorted = entries.sort((a, b) => -a[1] + b[1]);
    return sorted.slice(0, 5);
  }
  const str = contentGetter();
  const words = contentToArr(str);
  const word5 = sortArrayByFreq(words);
}
