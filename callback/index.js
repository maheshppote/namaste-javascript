function getCount() {
  let count = 0;
  document.getElementById("clickMe").addEventListener("click", function xyz() {
    console.log(`Button click count: ${count++}`);
  });
}

getCount();
    