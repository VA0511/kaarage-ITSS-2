# KARAAGE Lexicon — MVP Phase 1

Tra cứu thuật ngữ IT tiếng Nhật và gợi ý cách diễn đạt đơn giản cho sinh viên.
HTML, CSS, JavaScript thuần (ES modules), chưa có backend.

## Chạy thử

ES modules không chạy khi mở trực tiếp `index.html` bằng `file://`, cần một web server tĩnh:

```bash
# Cách 1: Python
python -m http.server 8080 --directory frontend

# Cách 2: Node (lần đầu npx sẽ tải gói serve; --yes để khỏi hỏi)
npx --yes serve frontend -l 8080

# Cách 3: Docker
docker build -t karaage . && docker run -p 8080:80 karaage
```

Mở http://localhost:8080

## Deploy

Workflow `.github/workflows/pages.yml` tự đưa `frontend/` lên GitHub Pages mỗi khi push lên `main`.
Lần đầu cần bật: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

URL: https://va0511.github.io/kaarage-ITSS-2/

## Sơ đồ chuyển màn hình

| Từ | Thao tác | Đến |
|---|---|---|
| S01 Trang chủ | Chọn Tra cứu | S02 Tra cứu |
| S01 Trang chủ | Chọn Diễn đạt | S04 Diễn đạt |
| S02 Tra cứu | Trang chủ | S01 |
| S02 Tra cứu | Xem từ đã lưu | S03 Ôn tập |
| S03 Ôn tập | Quay lại | S02 |
| S03 Ôn tập | Trang chủ | S01 |
| S04 Diễn đạt | Trang chủ | S01 |
| S04 Diễn đạt | Nhấn Xem gợi ý | S05 Gợi ý |
| S05 Gợi ý | Nhấn Thử lại | S04 |
| S05 Gợi ý | Trang chủ | S01 |

Bảng này được khai báo duy nhất ở `frontend/js/core/routes.js`; router từ chối mọi chuyển màn hình khác.

## Cấu trúc

```
frontend/
├── index.html              # Khung trang: header, #app, toast
├── css/
│   ├── base.css            # Biến màu/font, reset, layout
│   ├── components.css      # Nút, input, chip, card, toast…
│   └── screens.css         # Bố cục riêng của từng màn hình
└── js/
    ├── main.js             # Gắn các màn hình và khởi động router
    ├── core/
    │   ├── routes.js       # Sơ đồ chuyển màn hình S01–S05
    │   ├── router.js       # Điều hướng theo data-nav, chặn cạnh không hợp lệ
    │   └── state.js        # Trạng thái UI dùng chung giữa các màn hình
    ├── data/               # Dữ liệu tĩnh (thay bằng API khi có backend)
    │   ├── terms.js
    │   ├── lessons.js
    │   ├── concepts.js
    │   └── situations.js
    ├── services/           # Logic xử lý, không đụng tới DOM
    │   ├── termService.js        # Tìm kiếm, lưu từ, ghi nhanh
    │   ├── suggestionService.js  # Tạo gợi ý diễn đạt
    │   └── storage.js            # localStorage
    ├── screens/            # Giao diện + sự kiện của từng màn hình
    │   ├── s01-home.js
    │   ├── s02-lookup.js
    │   ├── s03-review.js
    │   ├── s04-express.js
    │   └── s05-suggest.js
    ├── ui/                 # Icon, toast, clipboard
    └── utils/              # Hàm tiện ích (escape HTML, chuẩn hoá chuỗi)
```

Mỗi màn hình export `{ id, mount(root), onEnter() }`: `mount` dựng giao diện một lần,
`onEnter` vẽ lại dữ liệu mỗi khi vào màn hình.

## Thêm backend sau này

Tạo thư mục `backend/` cạnh `frontend/`. Phía frontend, thay đổi chủ yếu nằm ở lớp `services/`
(ví dụ `termService.searchTerms` gọi `fetch('/api/terms')` thay vì đọc `data/`);
các màn hình chỉ cần `await` kết quả trả về.
