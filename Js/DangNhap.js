function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Kiểm tra thông tin đăng nhập
    var existingUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];

    var isAdmin = username === 'admin' && password === 'admin';

    if (isAdmin) {
        alert('Đăng nhập thành công với tài khoản quản trị!');
        window.location.href = 'TrangQuanTri.html'; 
    } else {
        var user = existingUsers.find(function(user) {
            return user.username === username && user.password === password;
        });

        if (user) {
            alert('Đăng nhập thành công!');
            window.location.href = 'TrangChu.html'; 
        } else {
            alert('Sai tên đăng nhập hoặc mật khẩu. Vui lòng thử lại.');
        }
    }
}
