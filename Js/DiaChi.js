/*Chỉ cho nhập số ở Sdt */
function inputValidation(event) {
    event.target.value = event.target.value.replace(/[^0-9]/, '').slice(0, 10);
}
document.getElementById('phoneInput').addEventListener('input', inputValidation);

/*Điều kiện gửi phản hồi*/
function GuiPhanHoi() {
const name = document.getElementById('nameInput').value;
const phone = document.getElementById('phoneInput').value;
const feedback = document.getElementById('feedbackInput').value;

if (phone.length === 10 && name.length !== 0 && feedback.length !== 0) {
    alert('Đã báo cáo thành công, chúng tôi sẽ cố gắng phản hồi cho bạn sớm nhất!');
    
    document.getElementById('nameInput').value = '';
    document.getElementById('phoneInput').value = '';
    document.getElementById('feedbackInput').value = '';
}else if(name.length === 0){
    alert('Bạn cần phải điền tên.');
}else if(phone.length !== 10){
    alert('Số điện thoại phải là chuỗi 10 số.');
}else if(feedback.length === 0){
    alert('Bạn cần phải ghi thêm báo cáo vấn đề.');
}
}
