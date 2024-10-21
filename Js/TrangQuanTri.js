//Quản lý Figure//
function addFigure() {
    var maFigure = document.getElementById("MaFigure").value;
    var tenFigure = document.getElementById("TenFigure").value;
    var loaiFigure = document.getElementById("LoaiFigure").value;
    var nhaCungCap = document.getElementById("NhaCungCap").value;
    var tinhTrang = document.getElementById("TinhTrang").value;
    var donGia = document.getElementById("DonGia").value;
    var moTa = document.getElementById("MoTa").value;
    var imageInput = document.getElementById("image");

    if (maFigure && tenFigure && loaiFigure && nhaCungCap && tinhTrang && donGia && moTa && imageInput.files.length > 0) {
        var figureList = document.getElementById("figure-list");

        var figureItem = document.createElement("tr");
        figureItem.className = "figure-item";

        var checkboxCell = document.createElement("td");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "figure-checkbox";
        checkboxCell.appendChild(checkbox);

        var maFigureCell = document.createElement("td");
        var tenFigureCell = document.createElement("td");
        var loaiFigureCell = document.createElement("td");
        var nhaCungCapCell = document.createElement("td");
        var tinhTrangCell = document.createElement("td");
        var donGiaCell = document.createElement("td");
        var moTaCell = document.createElement("td");
        var imageCell = document.createElement("td");

        maFigureCell.textContent = maFigure;
        tenFigureCell.textContent = tenFigure;
        loaiFigureCell.textContent = loaiFigure;
        nhaCungCapCell.textContent = nhaCungCap;
        tinhTrangCell.textContent = tinhTrang;
        donGiaCell.textContent = donGia;
        moTaCell.textContent = moTa;

        var image = document.createElement("img");
        image.src = URL.createObjectURL(imageInput.files[0]);
        image.alt = "Figure Image";
        image.style.maxWidth = "100px";
        imageCell.appendChild(image);

        figureItem.appendChild(checkboxCell);
        figureItem.appendChild(maFigureCell);
        figureItem.appendChild(tenFigureCell);
        figureItem.appendChild(loaiFigureCell);
        figureItem.appendChild(nhaCungCapCell);
        figureItem.appendChild(tinhTrangCell);
        figureItem.appendChild(donGiaCell);
        figureItem.appendChild(moTaCell);
        figureItem.appendChild(imageCell);

        figureList.appendChild(figureItem);

        // Reset giá trị các input
        document.getElementById("MaFigure").value = "";
        document.getElementById("TenFigure").value = "";
        document.getElementById("LoaiFigure").value = "";
        document.getElementById("NhaCungCap").value = "";
        document.getElementById("TinhTrang").value = "";
        document.getElementById("DonGia").value = "";
        document.getElementById("MoTa").value = "";
        imageInput.value = "";

        alert("Nhập thông tin figure thành công.");
    } else {
        alert("Vui lòng nhập đủ thông tin figure.");
    }
}
function deleteSelectedFigures() {
    var checkboxes = document.getElementsByClassName("figure-checkbox");
    var nhanvienList = document.getElementById("figure-list");

    for (var i = checkboxes.length - 1; i >= 0; i--) {
        if (checkboxes[i].checked) {
            nhanvienList.removeChild(checkboxes[i].parentNode.parentNode);
        }
    }
}




//Quản lý nhân viên//
function addNhanvien() {
    var maNV = document.getElementById("MaNV").value;
    var tenNV = document.getElementById("TenNV").value;
    var chucVu = document.getElementById("ChucVu").value;
    var tuoi = document.getElementById("Tuoi").value;
    var diaChi = document.getElementById("DiaChi").value;

    function inputValidation1(event) {
        event.target.value = event.target.value.replace(/[^0-9]/, '').slice(0, 10);
    }
    document.getElementById('Tuoi').addEventListener('input', inputValidation1);

    if (maNV && tenNV && chucVu && tuoi && diaChi) {
        var nhanvienList = document.getElementById("nhanvien-list");

        var nhanvienItem = document.createElement("tr");
        nhanvienItem.className = "nhanvien-item";

        var checkboxCell = document.createElement("td");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "nhanvien-checkbox";
        checkboxCell.appendChild(checkbox);

        var maNVCell = document.createElement("td");
        var tenNVCell = document.createElement("td");
        var chucVuCell = document.createElement("td");
        var tuoiCell = document.createElement("td");
        var diaChiCell = document.createElement("td");

        maNVCell.textContent = maNV;
        tenNVCell.textContent = tenNV;
        chucVuCell.textContent = chucVu;
        tuoiCell.textContent = tuoi;
        diaChiCell.textContent = diaChi;

        alert("Nhập thông tin nhân viên thành công.");

        nhanvienItem.appendChild(checkboxCell);
        nhanvienItem.appendChild(maNVCell);
        nhanvienItem.appendChild(tenNVCell);
        nhanvienItem.appendChild(chucVuCell);
        nhanvienItem.appendChild(tuoiCell);
        nhanvienItem.appendChild(diaChiCell);

        nhanvienList.appendChild(nhanvienItem);

        document.getElementById("MaNV").value = "";
        document.getElementById("TenNV").value = "";
        document.getElementById("ChucVu").value = "Ban";
        document.getElementById("Tuoi").value = "";
        document.getElementById("DiaChi").value = "";

    } else {
        alert("Vui lòng nhập đủ thông tin nhân viên.");
    }
}

function deleteSelectedNhanVien() {
    var checkboxes = document.getElementsByClassName("nhanvien-checkbox");
    var nhanvienList = document.getElementById("nhanvien-list");

    for (var i = checkboxes.length - 1; i >= 0; i--) {
        if (checkboxes[i].checked) {
            nhanvienList.removeChild(checkboxes[i].parentNode.parentNode);
        }
    }
}


//Quản lý khách hàng//
function addKhachhang() {
    var maKH = document.getElementById("MaKH").value;
    var tenKH = document.getElementById("TenKH").value;
    var diaChiKH = document.getElementById("DiaChi").value;

    if (maKH && tenKH && diaChiKH) {
        var khachhangList = document.getElementById("khachhang-list");

        var khachhangItem = document.createElement("tr");
        khachhangItem.className = "khachhang-item";

        var checkboxCell = document.createElement("td");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "khachhang-checkbox";
        checkboxCell.appendChild(checkbox);

        var maKHCell = document.createElement("td");
        var tenKHCell = document.createElement("td");
        var diaChiKHCell = document.createElement("td");

        maKHCell.textContent = maKH;
        tenKHCell.textContent = tenKH;
        diaChiKHCell.textContent = diaChiKH;

        alert("Nhập thông tin khách hàng thành công.");

        khachhangItem.appendChild(checkboxCell);
        khachhangItem.appendChild(maKHCell);
        khachhangItem.appendChild(tenKHCell);
        khachhangItem.appendChild(diaChiKHCell);

        khachhangList.appendChild(khachhangItem);

        document.getElementById("MaKH").value = "";
        document.getElementById("TenKH").value = "";
        document.getElementById("DiaChi").value = "";

    } else {
        alert("Vui lòng nhập đủ thông tin khách hàng.");
    }
}

function deleteSelectedKhachHang() {
    var checkboxes = document.getElementsByClassName("khachhang-checkbox");
    var khachhangList = document.getElementById("khachhang-list");

    for (var i = checkboxes.length - 1; i >= 0; i--) {
        if (checkboxes[i].checked) {
            khachhangList.removeChild(checkboxes[i].parentNode.parentNode);
        }
    }
};


//Quản lý nhà cung cấp//
function addNCC() {
    var maNCC = document.getElementById("MaNCC").value;
    var tenNCC = document.getElementById("TenNCC").value;
    var emailNCC = document.getElementById("Email").value;
    var diaChiNCC = document.getElementById("DiaChi").value;

    if (maNCC && tenNCC && emailNCC && diaChiNCC) {
        var nhacungcapList = document.getElementById("nhacungcap-list");

        var nhacungcapItem = document.createElement("tr");
        nhacungcapItem.className = "nhacungcap-item";

        var checkboxCell = document.createElement("td");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "nhacungcap-checkbox";
        checkboxCell.appendChild(checkbox);

        var maNCCCell = document.createElement("td");
        var tenNCCCell = document.createElement("td");
        var emailNCCCell = document.createElement("td");
        var diaChiNCCCell = document.createElement("td");

        maNCCCell.textContent = maNCC;
        tenNCCCell.textContent = tenNCC;
        emailNCCCell.textContent = emailNCC;
        diaChiNCCCell.textContent = diaChiNCC;

        alert("Nhập thông tin nhà cung cấp thành công.");

        nhacungcapItem.appendChild(checkboxCell);
        nhacungcapItem.appendChild(maNCCCell);
        nhacungcapItem.appendChild(tenNCCCell);
        nhacungcapItem.appendChild(emailNCCCell);
        nhacungcapItem.appendChild(diaChiNCCCell);

        nhacungcapList.appendChild(nhacungcapItem);

        document.getElementById("MaNCC").value = "";
        document.getElementById("TenNCC").value = "";
        document.getElementById("Email").value = "";
        document.getElementById("DiaChi").value = "";

    } else {
        alert("Vui lòng nhập đủ thông tin nhà cung cấp.");
    }
}

function deleteSelectedNCC() {
    var checkboxes = document.getElementsByClassName("nhacungcap-checkbox");
    var nhacungcapList = document.getElementById("nhacungcap-list");

    for (var i = checkboxes.length - 1; i >= 0; i--) {
        if (checkboxes[i].checked) {
            nhacungcapList.removeChild(checkboxes[i].parentNode.parentNode);
        }
    }
};


//Quản ký hoá đơn nhập//
function addHoadonnhap() {
    var maHDN = document.getElementById("MaHDN").value;
    var maFigure = document.getElementById("MaFigure").value;
    var tenNV = document.getElementById("Ten").value;
    var donGiaN = document.getElementById("DonGiaN").value;
    var soLuongN = document.getElementById("SoLuongN").value;

    if (maHDN && maFigure && tenNV && donGiaN && soLuongN) {
        var hoadonnhapList = document.getElementById("hoadonnhap-list");

        var hoadonnhapItem = document.createElement("tr");
        hoadonnhapItem.className = "hoadonnhap-item";

        var checkboxCell = document.createElement("td");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "hoadonnhap-checkbox";
        checkboxCell.appendChild(checkbox);

        var maHDNCell = document.createElement("td");
        var maFigureCell = document.createElement("td");
        var tenNVCell = document.createElement("td");
        var donGiaNCell = document.createElement("td");
        var soLuongNCell = document.createElement("td");
        var tongTienNCell = document.createElement("td");
        var tongTienN = parseFloat(donGiaN) * parseInt(soLuongN);

        maHDNCell.textContent = maHDN;
        maFigureCell.textContent = maFigure;
        tenNVCell.textContent = tenNV;
        donGiaNCell.textContent = donGiaN;
        soLuongNCell.textContent = soLuongN;
        tongTienNCell.textContent = tongTienN;

        hoadonnhapItem.appendChild(checkboxCell);
        hoadonnhapItem.appendChild(maHDNCell);
        hoadonnhapItem.appendChild(maFigureCell);
        hoadonnhapItem.appendChild(tenNVCell);
        hoadonnhapItem.appendChild(donGiaNCell);
        hoadonnhapItem.appendChild(soLuongNCell);
        hoadonnhapItem.appendChild(tongTienNCell);

        hoadonnhapList.appendChild(hoadonnhapItem);

        document.getElementById("MaHDN").value = "";
        document.getElementById("MaFigure").value = "";
        document.getElementById("Ten").value = "";
        document.getElementById("DonGiaN").value = "";
        document.getElementById("SoLuongN").value = "";
        document.getElementById("TongTienN").value = "";

    } else {
        alert("Vui lòng nhập đủ thông tin hóa đơn nhập.");
    }
}

function deleteSelectedHoadonnhap() {
    var checkboxes = document.getElementsByClassName("hoadonnhap-checkbox");
    var hoadonnhapList = document.getElementById("hoadonnhap-list");

    for (var i = checkboxes.length - 1; i >= 0; i--) {
        if (checkboxes[i].checked) {
            hoadonnhapList.removeChild(checkboxes[i].parentNode.parentNode);
        }
    }
};


//Quản lý hóa đơn bán//
function addHoadonban() {
    var maHDB = document.getElementById("MaHDB").value;
    var maFigure = document.getElementById("MaFigure").value;
    var maKH = document.getElementById("MaKH").value;
    var tenNV = document.getElementById("Ten").value;
    var donGiaB = document.getElementById("DonGiaB").value;
    var soLuongB = document.getElementById("SoLuongB").value;

    if (maHDB && maFigure && maKH && tenNV && donGiaB && soLuongB) {
        var hoadonbanList = document.getElementById("hoadonban-list");

        var hoadonbanItem = document.createElement("tr");
        hoadonbanItem.className = "hoadonban-item";

        var checkboxCell = document.createElement("td");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "hoadonban-checkbox";
        checkboxCell.appendChild(checkbox);

        var maHDBCell = document.createElement("td");
        var maFigureCell = document.createElement("td");
        var maKHCell = document.createElement("td");
        var tenNVCell = document.createElement("td");
        var donGiaBCell = document.createElement("td");
        var soLuongBCell = document.createElement("td");
        var tongTienBCell = document.createElement("td");
        var tongTienB = parseFloat(donGiaB) * parseInt(soLuongB);

        maHDBCell.textContent = maHDB;
        maFigureCell.textContent = maFigure;
        maKHCell.textContent = maKH;
        tenNVCell.textContent = tenNV;
        donGiaBCell.textContent = donGiaB;
        soLuongBCell.textContent = soLuongB;
        tongTienBCell.textContent = tongTienB;

        hoadonbanItem.appendChild(checkboxCell);
        hoadonbanItem.appendChild(maHDBCell);
        hoadonbanItem.appendChild(maFigureCell);
        hoadonbanItem.appendChild(maKHCell);
        hoadonbanItem.appendChild(tenNVCell);
        hoadonbanItem.appendChild(donGiaBCell);
        hoadonbanItem.appendChild(soLuongBCell);
        hoadonbanItem.appendChild(tongTienBCell);

        hoadonbanList.appendChild(hoadonbanItem);

        document.getElementById("MaHDB").value = "";
        document.getElementById("MaFigure").value = "";
        document.getElementById("MaKH").value = "";
        document.getElementById("Ten").value = "";
        document.getElementById("DonGiaB").value = "";
        document.getElementById("SoLuongB").value = "";

    } else {
        alert("Vui lòng nhập đủ thông tin hóa đơn.");
    }
}

function deleteSelectedHoadonban() {
    var checkboxes = document.getElementsByClassName("hoadonban-checkbox");
    var hoadonbanList = document.getElementById("hoadonban-list");

    for (var i = checkboxes.length - 1; i >= 0; i--) {
        if (checkboxes[i].checked) {
            hoadonbanList.removeChild(checkboxes[i].parentNode.parentNode);
        }
    }
}
