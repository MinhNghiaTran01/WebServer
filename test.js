
const axios = require('axios');

const aduinoServerUrl = 'http://localhost:80';  // Đổi URL này thành địa chỉ máy chủ Arduino của bạn

// Dữ liệu bạn muốn gửi
const dataToSend = {
  field1: 'value1',
  field2: 'value2',
  // Thêm các trường dữ liệu khác nếu cần
};

// Gửi yêu cầu POST đến máy chủ Arduino
axios.post(aduinoServerUrl, dataToSend)
  .then(response => {
    console.log('Data sent successfully:', response.data);
  })
  .catch(error => {
    console.error('Error sending data:', error.message);
  });

