# Stylus2

## 3.0.0 - 05/11/2023

- Đổi tên các hàm built-in của Stylus sau thành tên mới với số 2 đằng sau, để tránh xung đột với hàm CSS: rgba, rgb, hsl, hsla, sin, cos, tan, abs, round.

## 2.0.0 - 08/10/2023

- Bỏ comment hàm p() (dòng 1, cột 31177). Ngày trước khai báo biến tên p bị lỗi thì phải, nên phải comment hàm lại, nhưng như vậy thì hàm p vẫn tồn tại, chỉ là khi gọi thì nó không làm gì, vậy có ý nghĩa gì? Bây giờ test lại thì không thấy lỗi gì.

## 1.1.0

- Đổi tên hàm built-in min và max thành min2 và max2, để tránh xung đột với hàm CSS.

## 1.0.0

- Tách ra từ package "tieens".
