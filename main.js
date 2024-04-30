let result = 0;

const resultEl = document.querySelector(".result");

resultEl.innerHTML = result;

// 0일 때만 추가 -> 교체
// 13글자가 넘으면 입력이 안되게
function onClickNumber(number) {
  // 13글자 조건 비교 함수를 끝
  if (resultEl.innerHTML.length >= 13) return;

  if (resultEl.innerHTML === "0") {
    resultEl.innerHTML = number;
  } else {
    resultEl.innerHTML += number; 
  }

  console.log(resultEl.innerHTML.length);
}