function saveDataToStorage(key, data) {
  if (!(data instanceof String)) {
    data = JSON.stringify(data);
  }
  wx.setStorageSync(key, data);
}

function readDataFromStorage(key) {
  var content = wx.getStorageSync(key);

  if (!content) return '';

  return JSON.parse(content);
}

function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  saveDataToStorage: saveDataToStorage,
  readDataFromStorage: readDataFromStorage,
  formatTime: formatTime,
}