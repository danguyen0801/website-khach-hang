var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Trang chủ' });
});
/* Quản lý các tài khoản nguoi dung */
router.get('/tai-khoan-nguoi-dung', function(req, res, next) {
  res.render('quanly/nguoidung', { title: 'Quản lý tài khoản người dùng' });
});
/* Quản lý thay đổi thông tin cá nhân */
router.get('/thay-doi', function(req, res, next) {
  res.render('quanly/thaydoinguoidung', { title: 'Thay đổi thông tin' });
});
/* Quản lý hệ thống gian hàng */
router.get('/he-thong-gian-hang', function(req, res, next) {
  res.render('quanly/gianhang', { title: 'Quản lý hệ thống gian hàng' });
});
/* Quản lý sản phẩm trên đơn hàng */
router.get('/san-pham', function(req, res, next) {
  res.render('quanly/sanpham', { title: 'Quản lý sản phẩm' });
});
/* Quản lý đơn đặt hàng */
router.get('/don-dat-hang', function(req, res, next) {
  res.render('quanly/dathang', { title: 'Quản lý đơn đặt hàng' });
});
/* Thống kê doanh số bán hàng theo các ngày tháng năm quý */
router.get('/doanh-so-ban-hang', function(req, res, next) {
  res.render('doanhso/doanhso', { title: 'Doanh số bán hàng' });
});
/* Thống kê số lượng top 10 của sản phẩm, của gian hàng */
router.get('/top10-san-pham', function(req, res, next) {
  res.render('top10/top10', { title: 'Top 10 sản phẩm' });
});
/* 1.Quản lý:
+ Quản lý các tài khoản người dùng.
+ Quản lý hệ thống gian hàng.
+ Quản lý sản phẩm trên gian hàng.
+ Quản lý đơn đặt hàng.
2. Thống kê doanh số bán hàng theo các ngày, tháng, năm, quý.
3. Thống kế số lượng bán hàng top 10 của sản phẩm, của gian hàng.*/


module.exports = router;
