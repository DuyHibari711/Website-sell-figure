//Lưu sản phẩm vào giỏ hàng
function saveToLocalStorage(product) {
    // Lấy thông tin giỏ hàng từ localStorage (nếu có)
    var gioHang = JSON.parse(localStorage.getItem('gioHang')) || [];

    // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
    var existingProduct = gioHang.find(item => item.Ten === product.Ten);
    if (existingProduct) {
        alert('Đã cập nhật số lượng hàng bạn mua!');
        existingProduct.so += product.so;
    } else {
        alert('Đã thêm sản phẩm vào giỏ hàng!');
        gioHang.push(product);
    }

    localStorage.setItem('gioHang', JSON.stringify(gioHang));
}

// Hàm trích xuất thông tin sản phẩm từ trang chi tiết
function extractProductInfo() {
    var Ten = document.getElementById('Ten').textContent;
    var imgChiTiet = document.getElementById('imgChiTiet');
    var anhFigure = imgChiTiet.querySelector('img').src;
    var DonGiaString = document.getElementById('DonGia').textContent;
    var formatter = new Intl.NumberFormat('en-US');
    var DonGia = parseFloat(DonGiaString.replace(/[^0-9.-]+/g, ''));
    var so = parseInt(document.getElementById('so').textContent);

    return {
        Ten: Ten,
        anhFigure: anhFigure,
        DonGia: DonGia,
        so: so
    };
}

// Thêm sản phẩm vào giỏ hàng khi click nút "Thêm vào giỏ hàng" và cập nhật tổng tiền
function addGioHang() {
    var product = extractProductInfo();
    saveToLocalStorage(product);

    displayTotal();
}

// Xóa sản phẩm khỏi giỏ hàng khi click nút "Xóa khỏi giỏ hàng" và cập nhật tổng tiền
function deleteSelectedGioHang() {
    var selectedRows = document.querySelectorAll('#giohang-list input[type="checkbox"]:checked');
    var gioHang = JSON.parse(localStorage.getItem('gioHang')) || [];

    var selectedIndexes = Array.from(selectedRows).map(row => parseInt(row.getAttribute('data-index')));

    gioHang = gioHang.filter((item, index) => !selectedIndexes.includes(index));

    localStorage.setItem('gioHang', JSON.stringify(gioHang));
    alert("Xóa sản phẩm thành công!")

    displayGioHang();
    displayTotal();
}


// Hiển thị giỏ hàng
function displayGioHang() {
    var gioHang = JSON.parse(localStorage.getItem('gioHang')) || [];
    var giohangList = document.getElementById('giohang-list');
    giohangList.innerHTML = '';

    gioHang.forEach((product, index) => {
        var row = giohangList.insertRow();
        var cell0 = row.insertCell(0);
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = row.insertCell(3);
        var cell4 = row.insertCell(4);
        var cell5 = row.insertCell(5);

        cell0.innerHTML = '<input type="checkbox" data-index="' + index + '">';
        cell1.innerHTML = product.Ten;
        cell2.innerHTML = '<img src="' + product.anhFigure + '" alt="Ảnh Figure">';
        cell3.innerHTML = product.DonGia.toLocaleString('vi-VN') + 'đ';
        cell4.innerHTML = product.so;
        cell5.innerHTML = (product.DonGia * product.so).toLocaleString('vi-VN') + 'đ';
    });
}
displayGioHang();


// Tính tổng tiền hóa đơn
function calculateTotal() {
    var gioHang = JSON.parse(localStorage.getItem('gioHang')) || [];
    var total = 0;

    gioHang.forEach(product => {
        total += product.DonGia * product.so;
    });

    return total;
}

// Hiển thị tổng tiền hóa đơn
function displayTotal() {
    var total = calculateTotal();
    document.getElementById('TongHoaDon').textContent = total.toLocaleString('vi-VN') + 'đ';
}
displayTotal();


//Chuyển trang sau khi xác nhận
function PayFigure() {
    window.location.href = 'DiaChiMua.html';
}