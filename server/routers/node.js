const express = require('express')
require('url-search-params-polyfill');
const router = express.Router()
const multer = require('multer')


// 设置存储配置
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'files/') // 确保这个文件夹已经存在
  },
  filename: function (req, file, cb) {
    console.log(file)
    cb(null, file.originalname)
  }
})
 
const upload = multer({ storage: storage });

// 群体通-获取场地信息
router.post('/uploadFiber', upload.single('fiber'), ((req, res, next) => {
  // req.file 是 `fiber` 文件的信息
  // req.body 将具有文本域数据, 如果存在的话
  if (req.file) {
    res.json({ success: true, message: '文件上传成功', file: req.file });
  } else {
    res.json({ success: false, message: '请上传一个文件' });
  }
}))

module.exports = router
