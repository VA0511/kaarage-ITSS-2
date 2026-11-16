// Static glossary for the MVP. Will be replaced by an API call once backend/ exists.
//
// Fields:
//   kanji, reading, en, vi  – headword and translations
//   shortDesc               – one-line meaning shown on S02
//   plainJp                 – explanation in plain Japanese (S03, level 1)
//   deepExpl                – deeper IT context (S03, level 2)
//   quote                   – example sentence from lecture slides

export const TERMS = [
  {
    id: 'term-01',
    lesson: 'itss09',
    kanji: '画面遷移図',
    reading: 'がめんせんいず (gamen seni-zu)',
    en: 'Screen Transition Diagram',
    vi: 'Sơ đồ chuyển màn hình',
    shortDesc: 'Sơ đồ mô tả luồng di chuyển giữa các màn hình và thao tác của người dùng.',
    quote: '限られたインタビュー時間で効率よく検証するためには画面遷移図が必要です。',
    plainJp: '画面がどう変わるかを図にしたもの。ボタンを押すとどの画面に行くかを示す。',
    deepExpl: 'Dùng trong Solution Interview để đối tượng phỏng vấn thao tác trực tiếp mà không cần giải thích dài dòng.'
  },
  {
    id: 'term-02',
    lesson: 'itss09',
    kanji: '実用最小限の製品',
    reading: 'じつようさいしょうげんのせいひん (MVP)',
    en: 'Minimum Viable Product (MVP)',
    vi: 'Sản phẩm khả dụng tối thiểu',
    shortDesc: 'Phiên bản tinh gọn nhất chứa tính năng cốt lõi để kiểm chứng nhu cầu khách hàng.',
    quote: 'ソリューションインタビューに向けてMVPを短時間で開発する。',
    plainJp: '一番大事な機能だけを作ったお試しアプリ。無駄な機能は作らない。',
    deepExpl: 'Trong Phase 1 tập trung tốc độ: dùng Mock, dummy data, không cần nối CSDL phức tạp.'
  },
  {
    id: 'term-03',
    lesson: 'itss09',
    kanji: '課題の検証',
    reading: 'かだいのけんしょう (kadai no kenshou)',
    en: 'Problem Validation',
    vi: 'Kiểm chứng vấn đề',
    shortDesc: 'Xác nhận xem người dùng có thực sự gặp khó khăn và cảm thấy bức xúc hay không.',
    quote: 'プロブレムインタビューを通じて課題①と課題②を明確にする。',
    plainJp: 'ユーザーが本当に困っているかどうかを確かめること。',
    deepExpl: 'Phỏng vấn 14 sinh viên HEDSPI cho thấy 85% gặp khó khăn từ vựng chuyên ngành mỗi buổi học.'
  },
  {
    id: 'term-04',
    lesson: 'itss09',
    kanji: '定量的評価',
    reading: 'ていりょうてきひょうか (teiryou-teki hyouka)',
    en: 'Quantitative Evaluation',
    vi: 'Đánh giá định lượng',
    shortDesc: 'Đánh giá bằng các con số cụ thể (tỷ lệ %, điểm số) thay vì chỉ nói chung chung.',
    quote: '「どの程度魅力的か」に対して何％なのか定量的な回答を探る。',
    plainJp: '数字（％や点数）を使って、どれくらい良いかを測ること。',
    deepExpl: 'Tránh các câu trả lời mơ hồ như "rất tốt" hay "khá hay" trong Solution Interview.'
  },
  {
    id: 'term-05',
    lesson: 'dbnet',
    kanji: '主キー',
    reading: 'しゅきー (shu-kii)',
    en: 'Primary Key (PK)',
    vi: 'Khóa chính',
    shortDesc: 'Trường dữ liệu duy nhất dùng để định danh cho mỗi bản ghi trong bảng CSDL.',
    quote: '各レコードを一意に識別するために主キーを設定する。',
    plainJp: 'データが重ならないようにする「背番号」のようなもの。',
    deepExpl: 'Đảm bảo tính toàn vẹn thực thể (Entity Integrity), không được phép chứa giá trị NULL.'
  },
  {
    id: 'term-06',
    lesson: 'dbnet',
    kanji: '外部キー制約',
    reading: 'がいぶきーせいやく (gaibu-kii seiyaku)',
    en: 'Foreign Key Constraint',
    vi: 'Ràng buộc khóa ngoại',
    shortDesc: 'Liên kết giữa hai bảng đảm bảo tính nhất quán dữ liệu quan hệ.',
    quote: 'テーブル間の整合性を保つために外部キー制約をつける。',
    plainJp: '別のテーブルにあるデータと正しく結びつけるためのルール。',
    deepExpl: 'Ngăn chặn việc xóa hoặc sửa các bản ghi cha khi dữ liệu con vẫn đang tham chiếu.'
  },
  {
    id: 'term-07',
    lesson: 'dbnet',
    kanji: '遅延・レイテンシ',
    reading: 'ちえん (chien / latency)',
    en: 'Latency',
    vi: 'Độ trễ',
    shortDesc: 'Khoảng thời gian từ khi gửi yêu cầu đến khi nhận được phản hồi đầu tiên.',
    quote: 'リアルタイム性を担保するため低遅延で通信を行う。',
    plainJp: 'お願いを送ってから返事が来るまでの待ち時間。',
    deepExpl: '35.7% sinh viên được phỏng vấn phàn nàn độ trễ của AI dịch thuật làm lỡ nhịp bài giảng.'
  },
  {
    id: 'term-08',
    lesson: 'dbnet',
    kanji: '排他制御',
    reading: 'はいたせいぎょ (haita seigyo)',
    en: 'Mutual Exclusion / Concurrency Lock',
    vi: 'Điều khiển loại trừ (khóa đồng thời)',
    shortDesc: 'Cơ chế khóa để tránh xung đột khi nhiều người cùng cập nhật dữ liệu một lúc.',
    quote: '同時に同じデータを更新しないよう排他制御を行う。',
    plainJp: '同時に2人が同じものを変更してバグが出ないように、鍵をかけること。',
    deepExpl: 'Áp dụng Optimistic Locking hoặc Pessimistic Locking trong giao dịch Database.'
  },
  {
    id: 'term-09',
    lesson: 'swe',
    kanji: '要件定義',
    reading: 'ようけんていぎ (youken teigi)',
    en: 'Requirements Definition',
    vi: 'Định nghĩa yêu cầu',
    shortDesc: 'Giai đoạn làm rõ hệ thống cần làm gì, đáp ứng nhu cầu gì của khách hàng.',
    quote: '演習・課題の要件定義を正しく理解する。',
    plainJp: 'システムが何をするべきかをはっきり決めること。',
    deepExpl: 'Phân tách giữa Functional Requirements và Non-functional Requirements.'
  },
  {
    id: 'term-10',
    lesson: 'swe',
    kanji: '認証と認可',
    reading: 'にんしょう と にんか (ninshou to ninka)',
    en: 'Authentication & Authorization',
    vi: 'Xác thực và phân quyền',
    shortDesc: 'Xác thực: bạn là ai (đăng nhập). Phân quyền: bạn được làm gì (role/permission).',
    quote: 'セキュリティの観点から認証と認可を分離して設計する。',
    plainJp: '「あなたは誰か」を確かめる（認証）と、「何をしていいか」を決める（認可）。',
    deepExpl: 'Tránh nhầm lẫn giữa 401 Unauthorized (thiếu xác thực) và 403 Forbidden (không có quyền).'
  },
  {
    id: 'term-11',
    lesson: 'swe',
    kanji: '疎結合',
    reading: 'そけつごう (soketsugou)',
    en: 'Loose Coupling',
    vi: 'Liên kết lỏng',
    shortDesc: 'Các module hoạt động độc lập, thay đổi bên trong ít ảnh hưởng module khác.',
    quote: 'マイクロサービスアーキテクチャで疎結合なシステムを構築する。',
    plainJp: '部品同士が強くくっついておらず、1つを直しても他に影響しにくい状態。',
    deepExpl: 'Nguyên lý cơ bản trong thiết kế kiến trúc hướng đối tượng và microservices.'
  },
  {
    id: 'term-12',
    lesson: 'swe',
    kanji: '冪等性',
    reading: 'べきとうせい (bekitousei)',
    en: 'Idempotency',
    vi: 'Tính lũy đẳng',
    shortDesc: 'Thực hiện thao tác một lần hay nhiều lần đều cho cùng một kết quả.',
    quote: 'APIの再試行処理に耐えられるよう冪等性を保証する。',
    plainJp: '何回同じボタンを押しても、結果が1回目と同じになる仕組み。',
    deepExpl: 'Quan trọng với HTTP PUT, DELETE và các hệ thống thanh toán, Message Queue.'
  },
  {
    id: 'term-13',
    lesson: 'itss09',
    kanji: '言い換え表現',
    reading: 'いいかえひょうげん (iikae hyougen)',
    en: 'Paraphrasing',
    vi: 'Diễn đạt lại',
    shortDesc: 'Dùng từ đơn giản hơn để giải thích khái niệm khi không nhớ thuật ngữ chính xác.',
    quote: '専門用語を簡単な日本語で言い換える表現・パラフレーズ集を活用する。',
    plainJp: '難しい言葉を忘れても、簡単な言葉で自分の言いたいことを伝えること。',
    deepExpl: 'Giải quyết trực tiếp Thách thức ② trong MVP của nhóm.'
  },
  {
    id: 'term-14',
    lesson: 'dbnet',
    kanji: '整合性',
    reading: 'せいごうせい (seigousei)',
    en: 'Consistency',
    vi: 'Tính nhất quán dữ liệu',
    shortDesc: 'Dữ liệu luôn hợp lệ và tuân theo mọi quy tắc nghiệp vụ trong toàn hệ thống.',
    quote: 'データベーストランザクションにおける整合性を維持する。',
    plainJp: 'データがあちこちで矛盾せず、つじつまが合っていること。',
    deepExpl: 'Chữ C trong mô hình ACID của hệ quản trị cơ sở dữ liệu quan hệ.'
  }
];

// Terms saved on first visit so S03 is not empty during demos.
export const DEFAULT_SAVED_IDS = ['term-01', 'term-02', 'term-04', 'term-13'];
