function inputValidation(event) {
    event.target.value = event.target.value.replace(/[^0-9]/, '').slice(0, 10);
}
document.getElementById('SoDienThoai').addEventListener('input', inputValidation);

function clearGioHang() {
    localStorage.removeItem('gioHang');
}

function thanhToan() {
    var hoTen = document.getElementById('HoTen').value;
    var email = document.getElementById('Email').value;
    var soDienThoai = document.getElementById('SoDienThoai').value;
    var diaChi = document.getElementById('DiaChi').value;

    if (hoTen && email && soDienThoai && diaChi) {
        alert('Xác nhận thông tin thanh toán thành công! Hãy quay lại trang chủ và tiếp tục mua sắm nhé!');
        clearGioHang();
        window.location.href = 'TrangChu.html'; 
    } else {
        alert('Vui lòng nhập đầy đủ thông tin liên hệ.');
    }
}
