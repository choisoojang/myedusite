document.getElementById("testButton").addEventListener("click", function () {
    console.log("✅ JavaScript 동작 테스트 완료!");
    document.getElementById("jsOutput").textContent = "✅ JavaScript 동작 테스트 완료! (콘솔도 확인해보세요)";
});

document.getElementById("goToPage").addEventListener("click", function () {
    window.location.href = "index2.html"; // 이동할 URL
  });
 