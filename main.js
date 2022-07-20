// Bái 1 : Tính tiền lương nhân viên
// input : 
//     - Lương 1 ngày
//     - Số ngày làm của người dùng
// handle :
//     - tạo biến: workDays = số ngày làm người dùng
//     - tạo biến: oneDaySalary = số lương
//     - tạo biến: result = oneDaySalary * workDays
// output :
//     - Kết quả của biến result 

document.getElementById("bai1").onclick = function () {
    var oneDaySalary = document.getElementById("oneDaySalary").value;
    var workDays = document.getElementById("workDays").value;
    var result = oneDaySalary * workDays * 1;
    document.getElementById("txtSalary").innerHTML = result.toLocaleString("vn");
}

// =================================================================================================================
// Bài 2: Tính giá trị trung bình.
// Input: 
//     - 5 số thực.
// Handle:
//     - B1: Tạo 5 biến lưu 5 giá trị số thực và biến myResult = 0.
//     - B2: result = 5 biến công lại chia 5.
// Output:
//     - In giá trị biến result

document.getElementById("bai2").onclick = function () {
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
    var number3 = document.getElementById("number3").value;
    var number4 = document.getElementById("number4").value;
    var number5 = document.getElementById("number5").value;
    var result = (Number(number1) + Number(number2) + Number(number3) + Number(number4) + Number(number5))/5;
    document.getElementById("txtSalary2").innerHTML = result;
}

// =================================================================================================================
// Bài 3: Quy đổi tiền. 
// Input: 
//     - USD = 23.500 VND
//     - Số tiền người dùng quy đổi.
// Handle:
//     - B1: Tạo hằng USD và gán = 23.500.
//     - B2: Tạo biến vietNamDong = với giá trị muốn quy đổi.
//     - B3: vietNamDong *= USD,
// Output:
//     - in gái trị vietNamDong

document.getElementById("bai3").onclick = function () {
    const USD = 23500;
    var vietNamDong = document.getElementById("vnd-money").value;
    var result3 = Number(vietNamDong) * USD;
    document.getElementById("txtSalary3").innerHTML = result3.toLocaleString("vn") + " VND";
}

// =================================================================================================================
// Bài 4: Tính diện tích, chu vi hình chữ nhật.
// Input: 
//     - Chiều dài hình chữ nhật.
//     - Chiều rộng hình chữ nhật.
// Handle:
//     - B1: Tạo biến widthRectangle lưu chiều rộng HCN
//     - B2: Tạo biến lengthRectangle lưu chiều dài HCN
//     - B3: Tạo biến areaRectangle = 0 và gán widthRectangle * lengthRectangle
//     - B4: Tạo biến perimeterRectangle = 0 và gán (widthRectangle + lengthRectangle) *2
// Output:
//     - In giá trị perimeterRectangle và areaRectangle

document.getElementById("bai4").onclick = function () {
    var lengthRectangle = document.getElementById("lengthRectangle").value;
    var widthRectangle = document.getElementById("widthRectangle").value;
    var areaRectangle = Number(widthRectangle) * Number(lengthRectangle);
    var perimeterRectangle = (Number(widthRectangle) + Number(lengthRectangle)) * 2;

    document.getElementById("txtSalary4").innerHTML = "chu vi: " + perimeterRectangle + " " + "Diện tích: " + areaRectangle;
}

// =================================================================================================================

// Bài 5: Tính tổng 2 ký số
// Input: 
//     - Số có hai chữ số
// Handle:
//     - B1: Tạo biến towNumber lưu giá trị 2 kỳ số
//     - B2: Tạo biến unitPosition và gán = towNumber % 10
//     - B3: Tạo biến tensDigit và gán = towNumber / 10
//     - B4: Tạo biến result5 = unitPosition + tensDigit
// Output:
//     - In giá trị result5

document.getElementById("bai5").onclick = function () {
    var towNumber = document.getElementById("towNumber").value;
    var unitPosition = Number(towNumber) % 10;
    var tensDigit = Math.floor(towNumber % 100 / 10);
    var result5 = unitPosition + tensDigit;
    document.getElementById("txtSalary5").innerHTML = result5;
}