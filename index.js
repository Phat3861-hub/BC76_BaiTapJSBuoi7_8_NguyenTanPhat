let arrSoNguyen = [];
let soNguyen = document.getElementById("soNguyen");
document.getElementById("inputArray").onclick = function () {
  if (soNguyen.value === "" || isNaN(soNguyen.value)) {
    alert(`Vui lòng nhập một số`);
    return;
  }
  arrSoNguyen.push(soNguyen.value * 1);
  document.getElementById("inputArray_html").innerHTML = arrSoNguyen.join(", ");
};

// CÂU 1 : TÍNH TỔNG SỐ DƯƠNG

function tongSoDuong() {
  let tong_cau1 = 0;
  let flag = -1;
  for (let index = 0; index < arrSoNguyen.length; index++) {
    if (arrSoNguyen[index] > 0) {
      tong_cau1 += arrSoNguyen[index];
      flag = 1;
    }
  }
  return flag == 1 ? tong_cau1 : flag;
}
document.getElementById("cau1_btn").onclick = function () {
  document.getElementById("cau1_html").innerHTML = `
    ${
      tongSoDuong() == -1
        ? "Không có số dương trong mảng"
        : `Tổng số dương trong mảng  : ${tongSoDuong()}`
    }
    `;
};

// CÂU 2 : ĐẾM SỐ DƯƠNG TRONG MẢNG
function countPositive() {
  let count = 0;
  let flag = -1;
  for (let index = 0; index < arrSoNguyen.length; index++) {
    if (arrSoNguyen[index] > 0) {
      count++;
      flag = 1;
    }
  }
  return flag == 1 ? count : flag;
}
document.getElementById("cau2_btn").onclick = function () {
  document.getElementById("cau2_html").innerHTML = `
  ${
    countPositive() == -1
      ? "Không có số dương trong mảng"
      : `Có ${countPositive()} số dương trong mảng`
  }
  `;
};

// CÂU 3 : TÌM SỐ NHỎ NHẤT TRONG MẢNG
function findMinNumber() {
  let min = arrSoNguyen[0];
  for (let index = 0; index < arrSoNguyen.length; index++) {
    if (arrSoNguyen[index] < min) {
      min = arrSoNguyen[index];
    }
  }
  return min;
}
document.getElementById("cau3_btn").onclick = function () {
  document.getElementById("cau3_html").innerHTML = `
  Số nhỏ nhất trong mảng  : ${findMinNumber()}
  `;
};

// CÂU 4 : TÌM SỐ DƯƠNG NHỎ NHẤT TRONG MẢNG
let arrPositiveNumber = [];
function findMinpositiveNumber() {
  let flag = -1;
  for (let index in arrSoNguyen) {
    if (arrSoNguyen[index] > 0) {
      arrPositiveNumber.push(arrSoNguyen[index]);
      flag = 1;
    }
  }
  if (flag == -1) return flag;
  let min = arrPositiveNumber[0];
  for (let index in arrPositiveNumber) {
    if (arrPositiveNumber[index] <= min) {
      min = arrPositiveNumber[index];
    }
  }
  return min;
}

document.getElementById("cau4_btn").onclick = function () {
  let result = findMinpositiveNumber();
  document.getElementById("cau4_html").innerHTML = `
  ${
    result == -1
      ? "Không có số dương trong mảng"
      : `Số dương nhỏ nhất trong mảng là : ${result}`
  }
  `;
};

// CÂU 5 : TÌM SỐ CHẴN CUỐI CÙNG TRONG MẢNG
function lastEvenNumber() {
  flag = -1;
  for (let index = arrSoNguyen.length; index >= 0; index--) {
    if (arrSoNguyen[index] % 2 == 0) {
      flag = arrSoNguyen[index];
      break;
    }
  }
  return flag;
}
document.getElementById("cau5_btn").onclick = function () {
  let result = lastEvenNumber();
  document.getElementById("cau5_html").innerHTML = `
  ${
    result == -1
      ? "Không có số chẵn trong mảng : -1"
      : `Số chẵn cuối cùng trong mảng là : ${result}`
  }
  `;
};

// CÂU 6 : Đổi chỗ 2 giá trị trong mảng theo vị trí
function swap(arr, index1, index2) {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

document.getElementById("cau6_btn").onclick = function () {
  let viTri1 = document.getElementById("viTri1").value * 1;
  let viTri2 = document.getElementById("viTri2").value * 1;

  let arrBeforeSwap = arrSoNguyen.join(", ");

  swap(arrSoNguyen, viTri1, viTri2);

  let arrAfterSwap = arrSoNguyen.join(", ");

  document.getElementById("cau6_html").innerHTML = `
    Mảng trước khi đổi chỗ : ${arrBeforeSwap} <br>
    Mảng sau khi đổi chỗ : ${arrAfterSwap}
  `;
};
// CÂU 7 : SẮP XẾP MẢNG THEO THỨ TỰ TĂNG DẦN
document.getElementById("cau7_btn").onclick = function () {
  arrSoNguyen.sort((a, b) => a - b);
  let arrAfterSort = arrSoNguyen.join(", ");
  document.getElementById("cau7_html").innerHTML = `
    Mảng sau khi sắp xếp  : ${arrAfterSort}
  `;
};

// CÂU 8 : TÌM SỐ NGUYÊN TỐ ĐẦU TIÊN TRONG MẢNG
function checkPrime(number) {
  if (number < 2) return false;
  else {
    for (let i = 2; i < number - 1; i++) {
      if (number % i == 0) {
        return false;
      }
    }
  }
  return true;
}

function firstPrimeNumber() {
  let flag = -1;
  for (let index = 0; index < arrSoNguyen.length; index++) {
    if (checkPrime(arrSoNguyen[index])) {
      flag = arrSoNguyen[index];
      break;
    }
  }
  return flag;
}

document.getElementById("cau8_btn").onclick = function () {
  let result = firstPrimeNumber();
  document.getElementById("cau8_html").innerHTML = `
    Số nguyên tố đầu tiên trong mảng  : ${result}
  `;
};

// CÂU 9 : ĐẾM SỐ NGUYÊN
let arrSoThuc = [];
let soThuc = document.getElementById("soThuc");
document.getElementById("inputSoThuc").onclick = function () {
  if (soThuc.value === "" || isNaN(soThuc.value)) {
    alert(`Vui lòng nhập một số`);
    return;
  }
  arrSoThuc.push(soThuc.value * 1);
  document.getElementById("inputSoThuc_html").innerHTML = arrSoThuc.join(", ");
};

function countInteger() {
  flag = -1;
  let count = 0;
  for (index in arrSoThuc) {
    if (Number.isInteger(arrSoThuc[index])) {
      count++;
      flag = 1;
    }
  }
  if (flag == 1) return count;
  return flag;
}

document.getElementById("cau9_btn").onclick = function () {
  let ketQua = countInteger();
  document.getElementById("cau9_html").innerHTML = `
    ${
      ketQua == -1
        ? "Không có số nguyên trong mảng"
        : `Có ${ketQua} số nguyên trong mảng`
    }
  `;
};

// SO SÁNH SỐ LƯỢNG SỐ LƯỢNG SỐ DƯƠNG VÀ SỐ ÂM
document.getElementById("cau10_btn").onclick = function () {
  let positive = 0;
  let negative = 0;
  for (let index in arrSoNguyen) {
    if (arrSoNguyen[index] > 0) positive++;
    if (arrSoNguyen[index] < 0) negative++;
  }

  let comparisonResult;
  if (positive > negative) {
    comparisonResult = "Số dương > Số âm";
  } else if (positive < negative) {
    comparisonResult = "Số âm > Số dương  ";
  } else {
    comparisonResult = "Số dương = Số âm";
  }

  document.getElementById("cau10_html").innerHTML = `
    Có ${positive} số dương </br>
    Có ${negative} số âm </br>
    => ${comparisonResult}
  `;
};
