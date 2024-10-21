function register() {
    var newUsername = document.getElementById('newUsername').value;
    var newPassword = document.getElementById('newPassword').value;
    var hoTen = document.getElementById('hoTen').value;
    var email = document.getElementById('email').value;

    var existingUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];

    var userExists = existingUsers.some(function(user) {
        return user.username === newUsername; 
    });

    var userExists2 = existingUsers.some(function(user) { 
        return user.email === email;
    });

    if (newUsername && newPassword && hoTen && email) {
        if (userExists) {
            alert('Tài khoản đã tồn tại. Vui lòng chọn một tài khoản khác.');
        } else if (userExists2) {
            alert('Email đã được sử dụng. Vui lòng sử dụng email khác.');
        } else {    
            existingUsers.push({ username: newUsername, password: newPassword, hoTen: hoTen, email: email });

            localStorage.setItem('registeredUsers', JSON.stringify(existingUsers));

            alert('Đăng ký thành công!');
            window.location.href = 'DangNhap.html';
        }
    } else {
        alert('Vui lòng điền đầy đủ thông tin đăng ký!');
    }
}
