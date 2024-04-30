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

  // if (resultEl.innerHTML.length === 3 || resultEl.innerHTML.length === 8) {
  //   resultEl.innerHTML += `-${number}`;
  // } else {
  //   resultEl.innerHTML += number;
  // }
}

// +, -, *, / 눌렀을 때
// 현재 입력한 숫자를 저장 (문자 -> 숫자)
// resultEl.innerHTML = 0;
function onClickOperator(inputOperator) {
  result = +resultEl.innerHTML;

  resultEl.innerHTML = 0;

  operator = inputOperator;

  console.log(operator);
}

function onClickEnter() {
  switch (operator) {
    case "+":
      result += +resultEl.innerHTML
      resultEl.innerHTML = result
      break;
    case "-":
      result -= +resultEl.innerHTML
      resultEl.innerHTML = result
      break;
    case "*":
      result *= +resultEl.innerHTML
      resultEl.innerHTML = result
      break;
    case "/":
      result = parseInt(result / +resultEl.innerHTML, 10);
      resultEl.innerHTML = result;
      break;
    default:
      console.log("잘못된 연산자입니다.");
      break;
  }
}

function onClickDelete() {
  resultEl.innerHTML = resultEl.innerHTML.substring(
    0,
    resultEl.innerHTML.length - 1
  );

  if (resultEl.innerHTML.length === 0) {
    resultEl.innerHTML = 0;
  }
}