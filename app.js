// KARAAGE Lexicon - MVP Phase 1
// Matching exact Screen Transitions: S01 -> S02 <-> S03, S01 -> S04 <-> S05

(function () {
  'use strict';

  // Sample Lexicon Data tailored for ITSS in Japanese (HEDSPI K67/K68)
  const TERMS_DATA = [
    {
      id: 'term-01',
      lesson: 'itss09',
      lessonLabel: 'ITSS Bài 09',
      kanji: '画面遷移図',
      reading: 'がめんせんいず (gamen seni-zu)',
      en: 'Screen Transition Diagram',
      vi: 'Sơ đồ chuyển màn hình',
      shortDesc: 'Sơ đồ mô tả luồng di chuyển giữa các màn hình và thao tác của người dùng.',
      quote: '限られたインタビュー時間で効率よく検証するためには画面遷移図が必要です。',
      plainJp: '画面がどう変わるかを図にしたもの。ボタンを押すとどの画面に行くかを示す。',
      deepExpl: 'Dùng trong Solution Interview để đối tượng phỏng vấn thao tác trực tiếp mà không cần giải thích dài dòng.',
      bookmarked: true
    },
    {
      id: 'term-02',
      lesson: 'itss09',
      lessonLabel: 'ITSS Bài 09',
      kanji: '実用最小限の製品',
      reading: 'じつようさいしょうげんのせいひん (MVP)',
      en: 'Minimum Viable Product (MVP)',
      vi: 'Sản phẩm khả dụng tối thiểu',
      shortDesc: 'Phiên bản tinh gọn nhất chứa tính năng cốt lõi để kiểm chứng nhu cầu khách hàng.',
      quote: 'ソリューションインタビューに向けてMVPを短時間で開発する。',
      plainJp: '一番大事な機能だけを作ったお試しアプリ。無駄な機能は作らない。',
      deepExpl: 'Trong Phase 1 tập trung tốc độ: dùng Mock, dummy data, không cần nối CSDL phức tạp.',
      bookmarked: true
    },
    {
      id: 'term-03',
      lesson: 'itss09',
      lessonLabel: 'ITSS Bài 09',
      kanji: '課題の検証',
      reading: 'かだいのけんしょう (kadai no kenshou)',
      en: 'Problem Validation',
      vi: 'Kiểm chứng thách thức/vấn đề',
      shortDesc: 'Xác nhận xem người dùng có thực sự gặp khó khăn và cảm thấy bức xúc hay không.',
      quote: 'プロブレムインタビューを通じて課題①と課題②を明確にする。',
      plainJp: 'ユーザーが本当に困っているかどうかを確かめること。',
      deepExpl: 'Phỏng vấn 14 sinh viên HEDSPI cho thấy 85% gặp khó khăn từ vựng chuyên ngành mỗi buổi học.',
      bookmarked: false
    },
    {
      id: 'term-04',
      lesson: 'itss09',
      lessonLabel: 'ITSS Bài 09',
      kanji: '定量的評価',
      reading: 'ていりょうてきひょうか (teiryou-teki hyouka)',
      en: 'Quantitative Evaluation',
      vi: 'Đánh giá định lượng (số liệu)',
      shortDesc: 'Đánh giá bằng các con số cụ thể (tỷ lệ %, điểm số) thay vì chỉ nói chung chung.',
      quote: '「どの程度魅力的か」に対して何％なのか定量的な回答を探る。',
      plainJp: '数字（％や点数）を使って、どれくらい良いかを測ること。',
      deepExpl: 'Tránh các câu trả lời mơ hồ như "rất tốt" hay "khá hay" trong Solution Interview.',
      bookmarked: true
    },
    {
      id: 'term-05',
      lesson: 'dbnet',
      lessonLabel: 'CSDL & Mạng',
      kanji: '主キー',
      reading: 'しゅきー (shu-kii / Primary Key)',
      en: 'Primary Key (PK)',
      vi: 'Khóa chính',
      shortDesc: 'Trường dữ liệu duy nhất dùng để định danh cho mỗi bản ghi trong bảng CSDL.',
      quote: '各レコードを一意に識別するために主キーを設定する。',
      plainJp: 'データが重ならないようにする「背番号」のようなもの。',
      deepExpl: 'Đảm bảo tính toàn vẹn thực thể (Entity Integrity), không được phép chứa giá trị NULL.',
      bookmarked: false
    },
    {
      id: 'term-06',
      lesson: 'dbnet',
      lessonLabel: 'CSDL & Mạng',
      kanji: '外部キー制約',
      reading: 'がいぶきーせいやく (gaibu-kii seiyaku)',
      en: 'Foreign Key Constraint',
      vi: 'Ràng buộc khóa ngoại',
      shortDesc: 'Liên kết giữa hai bảng đảm bảo tính nhất quán dữ liệu quan hệ.',
      quote: 'テーブル間の整合性を保つために外部キー制約をつける。',
      plainJp: '別のテーブルにあるデータと正しく結びつけるためのルール。',
      deepExpl: 'Ngăn chặn việc xóa hoặc sửa các bản ghi cha khi dữ liệu con vẫn đang tham chiếu.',
      bookmarked: false
    },
    {
      id: 'term-07',
      lesson: 'dbnet',
      lessonLabel: 'CSDL & Mạng',
      kanji: '遅延・レイテンシ',
      reading: 'ちえん (chien / latency)',
      en: 'Latency',
      vi: 'Độ trễ truyền tải mạng',
      shortDesc: 'Khoảng thời gian trễ từ khi gửi yêu cầu đến khi nhận được phản hồi đầu tiên.',
      quote: 'リアルタイム性を担保するため低遅延で通信を行う。',
      plainJp: 'お願いを送ってから返事が来るまでの待ち時間。',
      deepExpl: 'Trong phỏng vấn vấn đề: 35.7% sinh viên phàn nàn độ trễ của AI dịch thuật làm lỡ nhịp bài giảng.',
      bookmarked: false
    },
    {
      id: 'term-08',
      lesson: 'dbnet',
      lessonLabel: 'CSDL & Mạng',
      kanji: '排他制御',
      reading: 'はいたせいぎょ (haita seigyo)',
      en: 'Mutual Exclusion / Concurrency Lock',
      vi: 'Khóa chống tranh chấp (Đồng thời)',
      shortDesc: 'Cơ chế khóa để tránh xung đột khi nhiều người cùng cập nhật dữ liệu một lúc.',
      quote: '同時に同じデータを更新しないよう排他制御を行う。',
      plainJp: '同時に2人が同じものを変更してバグが出ないように、鍵をかけること。',
      deepExpl: 'Áp dụng Optimistic Locking hoặc Pessimistic Locking trong giao dịch Database.',
      bookmarked: false
    },
    {
      id: 'term-09',
      lesson: 'swe',
      lessonLabel: 'Kỹ thuật Phần mềm',
      kanji: '要件定義',
      reading: 'ようけんていぎ (youken teigi)',
      en: 'Requirements Definition',
      vi: 'Định nghĩa yêu cầu hệ thống',
      shortDesc: 'Giai đoạn làm rõ hệ thống cần làm gì, đáp ứng nhu cầu gì của khách hàng.',
      quote: '演習・課題の要件定義を正しく理解する。',
      plainJp: 'システムが何をするべきかをはっきり決めること。',
      deepExpl: 'Phân tách giữa Functional Requirements (yêu cầu chức năng) và Non-functional Requirements.',
      bookmarked: false
    },
    {
      id: 'term-10',
      lesson: 'swe',
      lessonLabel: 'Kỹ thuật Phần mềm',
      kanji: '認証と認可',
      reading: 'にんしょう と にんか (ninshou to ninka)',
      en: 'Authentication & Authorization',
      vi: 'Xác thực và Phân quyền',
      shortDesc: 'Xác thực: bạn là ai (Login). Phân quyền: bạn có quyền làm gì (Role/Permission).',
      quote: 'セキュリティの観点から認証と認可を分離して設計する。',
      plainJp: '「あなたは誰か」を確かめる（認証）と、「何をしていいか」を決める（認可）。',
      deepExpl: 'Tránh nhầm lẫn giữa 401 Unauthorized (thiếu xác thực) và 403 Forbidden (không có quyền).',
      bookmarked: false
    },
    {
      id: 'term-11',
      lesson: 'swe',
      lessonLabel: 'Kỹ thuật Phần mềm',
      kanji: '疎結合',
      reading: 'そけつごう (soketsugou)',
      en: 'Loose Coupling',
      vi: 'Ghép nối lỏng lẻo',
      shortDesc: 'Các module hoạt động độc lập, thay đổi bên trong ít làm ảnh hưởng module khác.',
      quote: 'マイクロサービスアーキテクチャで疎結合なシステムを構築する。',
      plainJp: '部品同士が強くくっついておらず、1つを直しても他に影響しにくい状態。',
      deepExpl: 'Nguyên lý cơ bản trong thiết kế kiến trúc phần mềm hướng đối tượng và microservices.',
      bookmarked: false
    },
    {
      id: 'term-12',
      lesson: 'swe',
      lessonLabel: 'Kỹ thuật Phần mềm',
      kanji: '冪等性',
      reading: 'べきとうせい (bekitousei)',
      en: 'Idempotency',
      vi: 'Tính lũy đẳng (Idempotence)',
      shortDesc: 'Thực hiện thao tác 1 lần hay nhiều lần đều đem lại cùng một kết quả trạng thái.',
      quote: 'APIの再試行処理に耐えられるよう冪等性を保証する。',
      plainJp: '何回同じボタンを押しても、結果が1回目と同じになる仕組み。',
      deepExpl: 'Quan trọng với các phương thức HTTP PUT, DELETE và hệ thống xử lý thanh toán, Message Queue.',
      bookmarked: false
    },
    {
      id: 'term-13',
      lesson: 'itss09',
      lessonLabel: 'ITSS Bài 09',
      kanji: '言い換え表現',
      reading: 'いいかえひょうげん (iikae hyougen)',
      en: 'Paraphrasing',
      vi: 'Diễn giải / Paraphrase tiếng Nhật',
      shortDesc: 'Cách dùng từ đơn giản hơn để giải thích khái niệm khi không nhớ thuật ngữ chính xác.',
      quote: '専門用語を簡単な日本語で言い換える表現・パラフレーズ集を活用する。',
      plainJp: '難しい言葉を忘れても、簡単な言葉で自分の言いたいことを伝えること。',
      deepExpl: 'Giải quyết trực tiếp Thách thức ② trong MVP tài liệu của nhóm Karaoke.',
      bookmarked: true
    },
    {
      id: 'term-14',
      lesson: 'dbnet',
      lessonLabel: 'CSDL & Mạng',
      kanji: '整合性',
      reading: 'せいごうせい (seigousei)',
      en: 'Consistency',
      vi: 'Tính nhất quán dữ liệu',
      shortDesc: 'Dữ liệu luôn logic, hợp lệ và tuân theo mọi quy tắc nghiệp vụ trong toàn bộ hệ thống.',
      quote: 'データベーストランザクションにおける整合性を維持する。',
      plainJp: 'データがあちこちで矛盾せず、つじつまが合っていること。',
      deepExpl: 'Chữ C trong mô hình ACID của hệ thống quản trị cơ sở dữ liệu quan hệ (RDBMS).',
      bookmarked: false
    }
  ];

  // Presets for S04 / S05 Paraphrase Generation
  const CONCEPTS_PRESETS = [
    {
      id: 'gamen-seni',
      title: 'Sơ đồ chuyển màn hình (画面遷移図)',
      jpTerm: '画面遷移図（がめんせんいず）',
      enTerm: 'Screen Transition Diagram',
      plainJp: '「画面がどう動くかを示す図」です。ユーザーがボタンを押したときに、次にどの画面へ移動するかを表しています。',
      plainRomaji: "Gamen ga dou ugoku ka wo shimesu zu desu. Yuuzaa ga botan wo oshita toki ni, tsugi ni dono gamen he idou suru ka wo arawashite imasu.",
      plainVi: 'Là "sơ đồ thể hiện cách màn hình thay đổi". Nó chỉ ra khi người dùng bấm nút thì sẽ di chuyển tới màn hình nào tiếp theo.',
      metaphor: 'Giống như biển chỉ dẫn trên tàu điện: từ ga hiện tại bấm đi đâu thì sẽ dẫn tới ga tiếp theo tương ứng.',
      enMapping: 'Screen Transition (画面遷移) / Wireflow / Navigation Flow',
      templates: {
        explain: {
          lead: '専門用語の名前を忘れてしまったのですが、',
          phrase: 'ユーザーが操作したときに「画面が次にどう切り替わるか」を矢印でつないだ図のことです。英語では Screen Transition Diagram と言います。',
          vi: 'Em lỡ quên mất từ chuyên ngành chính xác, nhưng ý em là cái sơ đồ nối các mũi tên thể hiện "màn hình sẽ chuyển sang đâu tiếp theo" khi người dùng thao tác. Tiếng Anh gọi là Screen Transition Diagram.'
        },
        discuss: {
          lead: 'この部分の設計について提案ですが、',
          phrase: '画面が切り替わる流れ（画面遷移）をシンプルにして、ユーザーが迷わないように2ステップ以内で戻れるようにしませんか？',
          vi: 'Về thiết kế chỗ này, mình đề xuất làm luồng chuyển màn hình thật đơn giản, để người dùng không bị lạc và có thể quay lại trong vòng 2 bước.'
        },
        question: {
          lead: '先生、確認させていただきたいのですが、',
          phrase: 'ここで言う遷移とは、画面全体が変わることでしょうか？それとも同じ画面の中で表示が切り替わることでしょうか？',
          vi: 'Thưa thầy, em xin phép xác nhận lại: từ chuyển đổi ở đây là đổi toàn bộ màn hình mới hay chỉ là thay đổi nội dung bên trong cùng một màn hình ạ?'
        },
        qa: {
          lead: 'ご質問ありがとうございます。',
          phrase: '私たちが作成した画面遷移図では、ユーザーが説明を読まなくても直感的に操作できる最小限の5画面で構成しています。',
          vi: 'Cảm ơn câu hỏi của thầy/bạn. Trong sơ đồ luồng màn hình của nhóm em, hệ thống được cấu trúc bằng tối thiểu 5 màn hình để người dùng có thể thao tác trực quan mà không cần giải thích.'
        }
      }
    },
    {
      id: 'mvp-concept',
      title: 'Sản phẩm khả dụng tối thiểu (MVP)',
      jpTerm: '実用最小限の製品（MVP）',
      enTerm: 'Minimum Viable Product',
      plainJp: '「一番大事な機能だけを急いで作ったお試しアプリ」です。無駄な機能を作らず、早くユーザーの意見を聞くためのものです。',
      plainRomaji: "Ichiban daiji na kinou dake wo isoide tsukutta otameshi apuri desu. Muda na kinou wo tsukurazu, hayaku yuuzaa no iken wo kiku tame no mono desu.",
      plainVi: 'Là "ứng dụng dùng thử chỉ gồm đúng tính năng quan trọng nhất". Nhóm không tốn công làm tính năng thừa mà để nhanh chóng lấy ý kiến người dùng.',
      metaphor: 'Giống như làm bánh mì kẹp cơ bản trước để khách nếm thử vị xem có thích không, thay vì làm cả một bữa tiệc buffet cầu kỳ.',
      enMapping: 'MVP / Prototype / Core feature mockup',
      templates: {
        explain: {
          lead: 'このアプリの目的についてですが、',
          phrase: 'すべてを作るのではなく、「ユーザーの課題を解決する一番コアな機能」だけを最速で作って検証するアプローチです。',
          vi: 'Về mục đích ứng dụng này: nhóm em không làm tất cả, mà tập trung xây dựng tính năng cốt lõi nhất giải quyết vấn đề của sinh viên để kiểm chứng nhanh nhất.'
        },
        discuss: {
          lead: '開発スケジュールを考えると、',
          phrase: 'Phase 1 ではデータベース接続は行わず、ダミーデータだけで画面遷移を動かして、スピード重視でいきましょう。',
          vi: 'Xét tiến độ phát triển, ở Phase 1 chúng mình chưa cần nối Database, chỉ cần dùng dữ liệu mẫu để chạy luồng màn hình và ưu tiên tốc độ.'
        },
        question: {
          lead: 'インタビューの評価基準について質問です。',
          phrase: 'Phase 1 の MVP では、デザインの完成度よりも「価値が伝わったかどうか」を一番の指標にしてもよろしいでしょうか？',
          vi: 'Em xin hỏi về tiêu chí đánh giá phỏng vấn: Trong MVP Phase 1, nhóm em lấy tiêu chí "người dùng có hiểu được giá trị không" làm chỉ số hàng đầu thay vì độ hoàn thiện giao diện có được không ạ?'
        },
        qa: {
          lead: 'はい、その点についてお答えします。',
          phrase: 'プロブレムインタビューの結果に基づき、最も痛みが深かった「講義中の即時検索」と「言い換え補助」の2点だけに絞ってMVPを実装しました。',
          vi: 'Dạ em xin trả lời: Dựa trên kết quả phỏng vấn vấn đề, nhóm em đã thu gọn MVP chỉ tập trung vào 2 điểm nhức nhối nhất là tra cứu tức thời và gợi ý diễn đạt.'
        }
      }
    },
    {
      id: 'latency-chien',
      title: 'Độ trễ truyền tải / Phản hồi (遅延・レイテンシ)',
      jpTerm: '遅延（ちえん）／レイテンシ',
      enTerm: 'Latency / Network Delay',
      plainJp: '「リクエストを送ってから、結果が返ってくるまでの待ち時間」です。',
      plainRomaji: "Rikuesuto wo okutte kara, kekka ga kaette kuru made no machi jikan desu.",
      plainVi: 'Là "khoảng thời gian chờ đợi từ lúc gửi yêu cầu tới khi nhận được kết quả trả về".',
      metaphor: 'Giống như độ trễ khi gọi điện thoại quốc tế: mình nói xong phải mất 1 giây bên kia mới nghe thấy.',
      enMapping: 'Latency (遅延) / Real-time response (即時応答)',
      templates: {
        explain: {
          lead: 'この問題について説明しますと、',
          phrase: 'AIの翻訳結果が出るまでに待ち時間（遅延）があると、先生の次の説明を聞き逃してしまうということです。',
          vi: 'Em xin giải thích vấn đề này: Nếu có độ trễ khi chờ AI dịch từ vựng, sinh viên sẽ bị bỏ lỡ lời giảng tiếp theo của thầy cô.'
        },
        discuss: {
          lead: '技術的なアプローチとして、',
          phrase: 'APIを毎回呼ぶのではなく、よく出る単語をあらかじめローカルに持っておくことで、遅延をゼロに抑えたいと思います。',
          vi: 'Về hướng tiếp cận kỹ thuật, thay vì gọi API liên tục, mình muốn lưu sẵn danh sách từ hay gặp ở phía máy khách để đưa độ trễ về 0.'
        },
        question: {
          lead: '質問させてください。',
          phrase: 'リアルタイム処理において、許容される遅延（レイテンシ）の目安は何ミリ秒くらいでしょうか？',
          vi: 'Thưa thầy, trong xử lý thời gian thực thì mức độ trễ cho phép thông thường rơi vào khoảng bao nhiêu mili-giây ạ?'
        },
        qa: {
          lead: 'パフォーマンスに関するご指摘について、',
          phrase: '講義の流れを止めないため、1タップですぐに記録が完了し、待ち時間が発生しない設計にしております。',
          vi: 'Về hiệu năng, để không làm ngắt nhịp bài giảng, hệ thống được thiết kế để chỉ cần 1 chạm là hoàn tất ghi nhớ mà không có bất kỳ thời gian chờ nào.'
        }
      }
    },
    {
      id: 'primary-key',
      title: 'Khóa chính cơ sở dữ liệu (主キー / Primary Key)',
      jpTerm: '主キー（しゅきー）',
      enTerm: 'Primary Key (PK)',
      plainJp: '「データを1つだけに決めるためのID」です。学生番号のように、絶対に他の人と被らない番号のことです。',
      plainRomaji: "Deeta wo hitotsu dake ni kimeru tame no ID desu. Gakusei bangou no you ni, zettai ni hoka no hito to kaburanai bangou no koto desu.",
      plainVi: 'Là "mã số định danh duy nhất cho dữ liệu". Giống như mã số sinh viên, tuyệt đối không bị trùng với bất kỳ ai khác.',
      metaphor: 'Giống như Số Căn cước công dân hoặc Mã số sinh viên của mỗi bạn trong trường.',
      enMapping: 'Primary Key (主キー) / Unique Identifier',
      templates: {
        explain: {
          lead: 'このテーブルの構造について、',
          phrase: '各行を絶対に間違えずに特定するために、被ることのない固有のID（主キー）をつけて管理しています。',
          vi: 'Về cấu trúc bảng này, để định danh từng dòng một cách tuyệt đối chính xác, nhóm em gắn một mã ID duy nhất (khóa chính) không bị trùng lặp.'
        },
        discuss: {
          lead: '設計の見直しについてですが、',
          phrase: '名前を主キーにするのは同姓同名がいると重複するので、自動採番のIDを主キーに設定しましょう。',
          vi: 'Về thiết kế, việc dùng tên làm khóa chính sẽ bị trùng khi có người cùng tên, nên chúng mình hãy dùng ID tự tăng làm khóa chính.'
        },
        question: {
          lead: '確認の質問です。',
          phrase: 'このテーブルでは、複合キーを使うべきでしょうか？それともサロゲートキー（単一ID）の方が好ましいでしょうか？',
          vi: 'Thưa thầy, trong bảng này nhóm em nên dùng khóa phức hợp (Composite Key) hay tạo một mã ID đại diện đơn nhất thì tốt hơn ạ?'
        },
        qa: {
          lead: 'データ構造に関する質問にお答えします。',
          phrase: '各用語データにはユニークなIDを主キーとして割り振っているため、後からの復習リスト追加・削除も一意に処理できます。',
          vi: 'Em xin trả lời: mỗi thuật ngữ đều được cấp một ID khóa chính duy nhất, nên việc thêm hoặc xóa khỏi danh sách ôn tập được xử lý rất chính xác.'
        }
      }
    }
  ];

  // Current State
  let currentScreen = 'S01';
  let activeLesson = 'all';
  let searchQuery = '';
  let selectedConceptId = 'gamen-seni';
  let selectedSituation = 'explain';
  let isFlashcardMode = false;

  // Bookmarks State in localStorage or default
  let bookmarkedIds = new Set(
    TERMS_DATA.filter((t) => t.bookmarked).map((t) => t.id)
  );

  // DOM Elements
  const screens = {
    S01: document.getElementById('screen-S01'),
    S02: document.getElementById('screen-S02'),
    S03: document.getElementById('screen-S03'),
    S04: document.getElementById('screen-S04'),
    S05: document.getElementById('screen-S05')
  };

  const navFlowSteps = document.querySelectorAll('[data-flow-step]');
  const navSavedCount = document.getElementById('navSavedCount');
  const s02SavedBadge = document.getElementById('s02SavedBadge');
  const homeTermCount = document.getElementById('homeTermCount');
  const homeConceptCount = document.getElementById('homeConceptCount');

  const termSearchInput = document.getElementById('termSearchInput');
  const btnClearSearch = document.getElementById('btnClearSearch');
  const lessonTabs = document.querySelectorAll('.lesson-tab');
  const termListContainer = document.getElementById('termListContainer');
  const termResultSummary = document.getElementById('termResultSummary');

  const quickCaptureForm = document.getElementById('quickCaptureForm');
  const quickNoteInput = document.getElementById('quickNoteInput');

  const reviewListContainer = document.getElementById('reviewListContainer');
  const btnToggleFlashcard = document.getElementById('btnToggleFlashcard');
  const flashcardStateText = document.getElementById('flashcardStateText');

  const conceptChipsContainer = document.getElementById('conceptChipsContainer');
  const customConceptInput = document.getElementById('customConceptInput');
  const situationGrid = document.getElementById('situationGrid');
  const s04PreviewLabel = document.getElementById('s04PreviewLabel');
  const btnSubmitExpress = document.getElementById('btnSubmitExpress');
  const btnTopToSuggest = document.getElementById('btnTopToSuggest');
  const suggestionResultContainer = document.getElementById('suggestionResultContainer');
  const toastNotification = document.getElementById('toastNotification');

  // Show Toast
  function showToast(message) {
    if (!toastNotification) return;
    toastNotification.textContent = message;
    toastNotification.hidden = false;
    clearTimeout(toastNotification._timer);
    toastNotification._timer = setTimeout(() => {
      toastNotification.hidden = true;
    }, 2400);
  }

  // Update Counters
  function updateCounters() {
    const count = bookmarkedIds.size;
    if (navSavedCount) navSavedCount.textContent = count;
    if (s02SavedBadge) s02SavedBadge.textContent = count;
    if (homeTermCount) homeTermCount.textContent = TERMS_DATA.length;
    if (homeConceptCount) homeConceptCount.textContent = CONCEPTS_PRESETS.length;
  }

  // Screen Switcher
  function navigateTo(targetScreenId) {
    if (!screens[targetScreenId]) return;

    Object.keys(screens).forEach((screenKey) => {
      const el = screens[screenKey];
      if (screenKey === targetScreenId) {
        el.hidden = false;
        el.classList.add('is-active');
      } else {
        el.hidden = true;
        el.classList.remove('is-active');
      }
    });

    currentScreen = targetScreenId;

    // Update Topbar Flow Indicator
    navFlowSteps.forEach((step) => {
      const stepCode = step.dataset.flowStep;
      if (stepCode === targetScreenId) {
        step.classList.add('is-active');
      } else {
        step.classList.remove('is-active');
      }
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Screen specific triggers
    if (targetScreenId === 'S02') {
      renderTermList();
    } else if (targetScreenId === 'S03') {
      renderReviewList();
    } else if (targetScreenId === 'S05') {
      renderSuggestionResult();
    }
  }

  // Global Navigation Click Delegate
  document.addEventListener('click', (e) => {
    const navBtn = e.target.closest('[data-nav]');
    if (navBtn) {
      const target = navBtn.dataset.nav;
      navigateTo(target);
    }
  });

  // Flow Step button clicks in Topbar
  navFlowSteps.forEach((step) => {
    step.addEventListener('click', () => {
      const target = step.dataset.flowStep;
      navigateTo(target);
    });
  });

  // Bookmark Toggle
  function toggleBookmark(termId) {
    if (bookmarkedIds.has(termId)) {
      bookmarkedIds.delete(termId);
      showToast('Đã xóa khỏi danh sách Ôn tập');
    } else {
      bookmarkedIds.add(termId);
      showToast('Đã lưu 1 chạm vào màn hình S03: Ôn tập!');
    }
    updateCounters();
    if (currentScreen === 'S02') renderTermList();
    if (currentScreen === 'S03') renderReviewList();
  }

  // S02: Render Terms List
  function renderTermList() {
    if (!termListContainer) return;

    const filtered = TERMS_DATA.filter((term) => {
      const matchLesson = activeLesson === 'all' || term.lesson === activeLesson;
      if (!matchLesson) return false;

      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase().trim();
      return (
        term.kanji.toLowerCase().includes(q) ||
        term.reading.toLowerCase().includes(q) ||
        term.en.toLowerCase().includes(q) ||
        term.vi.toLowerCase().includes(q) ||
        term.shortDesc.toLowerCase().includes(q)
      );
    });

    if (termResultSummary) {
      termResultSummary.innerHTML = `Đang hiển thị <strong>${filtered.length}</strong> / ${TERMS_DATA.length} thuật ngữ`;
    }

    if (filtered.length === 0) {
      termListContainer.innerHTML = `
        <div class="empty-state">
          <h3>Không tìm thấy thuật ngữ phù hợp</h3>
          <p>Thử tìm bằng Kanji, phiên âm Romaji, từ khóa tiếng Việt hoặc dùng khung "Ghi tạm âm nghe được" ở trên.</p>
          <button type="button" class="btn btn-secondary" id="btnResetFilter">Xem toàn bộ Cheat-sheet</button>
        </div>
      `;
      const btnReset = document.getElementById('btnResetFilter');
      if (btnReset) {
        btnReset.addEventListener('click', () => {
          searchQuery = '';
          activeLesson = 'all';
          if (termSearchInput) termSearchInput.value = '';
          lessonTabs.forEach((t) => t.classList.toggle('is-active', t.dataset.lesson === 'all'));
          renderTermList();
        });
      }
      return;
    }

    termListContainer.innerHTML = filtered
      .map((term) => {
        const isSaved = bookmarkedIds.has(term.id);
        return `
        <article class="term-row ${isSaved ? 'is-bookmarked' : ''}" data-term-id="${term.id}">
          <div class="term-jp-col">
            <span class="term-lesson-badge">${term.lessonLabel}</span>
            <span class="term-kanji">${term.kanji}</span>
            <span class="term-reading">${term.reading}</span>
            <span class="term-en">${term.en}</span>
          </div>

          <div class="term-meaning-col">
            <div class="term-vi-title">${term.vi}</div>
            <p class="term-shortDesc">${term.shortDesc}</p>
            <div class="term-context-quote">
              <strong>Ví dụ trong slide:</strong> ${term.quote}
            </div>
          </div>

          <div class="term-actions-col">
            <button
              type="button"
              class="btn ${isSaved ? 'btn-saved' : 'btn-outline'}"
              data-action="toggle-bookmark"
              data-id="${term.id}"
              title="Đánh dấu 1 chạm để lưu vào danh sách ôn tập"
            >
              <svg class="icon-bookmark" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M5 3.5C5 2.94772 5.44772 2.5 6 2.5H14C14.5523 2.5 15 2.94772 15 3.5V17.5L10 14L5 17.5V3.5Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>
              <span>${isSaved ? '✓ Đã lưu ôn tập' : '+ Đánh dấu 1 chạm'}</span>
            </button>
          </div>
        </article>
      `;
      })
      .join('');
  }

  // Term list interaction delegation
  if (termListContainer) {
    termListContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-action="toggle-bookmark"]');
      if (btn) {
        const id = btn.dataset.id;
        toggleBookmark(id);
      }
    });
  }

  // S02 Search input handling
  if (termSearchInput) {
    termSearchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      if (btnClearSearch) btnClearSearch.hidden = !searchQuery;
      renderTermList();
    });
  }

  if (btnClearSearch) {
    btnClearSearch.addEventListener('click', () => {
      searchQuery = '';
      if (termSearchInput) termSearchInput.value = '';
      btnClearSearch.hidden = true;
      renderTermList();
    });
  }

  // Lesson Tabs Filter
  lessonTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      lessonTabs.forEach((t) => {
        t.classList.remove('is-active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('is-active');
      tab.setAttribute('aria-selected', 'true');
      activeLesson = tab.dataset.lesson;
      renderTermList();
    });
  });

  // Quick Capture form on S02
  if (quickCaptureForm) {
    quickCaptureForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const val = quickNoteInput ? quickNoteInput.value.trim() : '';
      if (!val) return;

      const newId = 'quick-' + Date.now();
      const newTerm = {
        id: newId,
        lesson: 'itss09',
        lessonLabel: 'Ghi chép nhanh tại lớp',
        kanji: val,
        reading: 'Ghi chú nghe thoáng qua',
        en: 'Phonetic Quick Note',
        vi: `Từ nghe được trong bài: "${val}"`,
        shortDesc: 'Được ghi nhận nhanh 1 chạm khi nghe giảng viên phát âm trên lớp.',
        quote: 'Ghi lại để đối chiếu và hỏi thầy cô hoặc bạn bè sau buổi học.',
        plainJp: `講義中にメモした言葉：「${val}」`,
        deepExpl: 'Cần xác nhận lại cách viết Kanji chuẩn và nghĩa chính xác với giảng viên hoặc nhóm.',
        bookmarked: true
      };

      TERMS_DATA.unshift(newTerm);
      bookmarkedIds.add(newId);
      quickNoteInput.value = '';
      updateCounters();
      renderTermList();
      showToast(`Đã lưu nhanh "${val}" vào màn hình S03: Ôn tập!`);
    });
  }

  // S03: Render Review List (Saved Terms with 2-level explanations)
  function renderReviewList() {
    if (!reviewListContainer) return;

    const savedTerms = TERMS_DATA.filter((t) => bookmarkedIds.has(t.id));

    if (savedTerms.length === 0) {
      reviewListContainer.innerHTML = `
        <div class="empty-state">
          <h3>Chưa có thuật ngữ nào được đánh dấu</h3>
          <p>Trong lúc nghe giảng ở màn hình <strong>S02: Tra cứu</strong>, bạn chỉ cần bấm nút <strong>+ Đánh dấu 1 chạm</strong> để gom từ vào đây.</p>
          <button type="button" class="btn btn-vermilion" data-nav="S02">
            Đến màn hình S02: Tra cứu ngay
          </button>
        </div>
      `;
      return;
    }

    reviewListContainer.innerHTML = savedTerms
      .map((term) => `
        <article class="review-item ${isFlashcardMode ? 'flashcard-hidden' : ''}">
          <div class="review-item-top">
            <div>
              <span class="term-lesson-badge">${term.lessonLabel}</span>
              <div style="font-family: var(--font-display); font-size: 1.4rem; font-weight: 700; margin: 0.2rem 0;">
                ${term.kanji}
                <small style="font-family: var(--font-body); font-size: 0.9rem; color: var(--accent-vermilion); margin-left: 0.5rem;">${term.reading}</small>
              </div>
              <div class="term-en">${term.en}</div>
            </div>

            <button
              type="button"
              class="btn btn-outline"
              data-action="remove-bookmark"
              data-id="${term.id}"
              style="font-size: 0.82rem; padding: 0.35rem 0.75rem;"
            >
              ✕ Xóa khỏi Ôn tập
            </button>
          </div>

          <div class="review-levels-grid">
            <div class="level-box">
              <span class="level-label">Mức 1: Tiếng Nhật đơn giản (やさしい日本語)</span>
              <p class="level-jp-text">${term.plainJp}</p>
              <p class="level-vi-text"><strong>Ý nghĩa:</strong> ${term.vi}</p>
            </div>

            <div class="level-box level-box-detail">
              <span class="level-label">Mức 2: Giải thích chuyên sâu &amp; Ngữ cảnh IT</span>
              <p class="level-jp-text" style="font-size: 0.9rem; font-weight: 500;">
                ${term.deepExpl}
              </p>
              <p class="level-vi-text"><strong>Ngữ cảnh slide:</strong> ${term.quote}</p>
            </div>
          </div>
        </article>
      `)
      .join('');
  }

  // Remove bookmark from S03
  if (reviewListContainer) {
    reviewListContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-action="remove-bookmark"]');
      if (btn) {
        const id = btn.dataset.id;
        toggleBookmark(id);
      }
    });
  }

  // S03 Flashcard Mode Toggle
  if (btnToggleFlashcard) {
    btnToggleFlashcard.addEventListener('click', () => {
      isFlashcardMode = !isFlashcardMode;
      if (flashcardStateText) flashcardStateText.textContent = isFlashcardMode ? 'BẬT' : 'TẮT';
      renderReviewList();
      showToast(isFlashcardMode ? 'Đã bật chế độ tự kiểm tra (rê chuột để xem nghĩa)' : 'Đã tắt chế độ tự kiểm tra');
    });
  }

  // S04: Concept Chips & Situations Initialization
  function initExpressBuilder() {
    if (conceptChipsContainer) {
      conceptChipsContainer.innerHTML = CONCEPTS_PRESETS.map(
        (c) => `
        <button
          type="button"
          class="concept-chip ${c.id === selectedConceptId ? 'is-selected' : ''}"
          data-concept-id="${c.id}"
        >
          ${c.title}
        </button>
      `
      ).join('');
    }

    updateExpressPreview();
  }

  function updateExpressPreview() {
    const customVal = customConceptInput ? customConceptInput.value.trim() : '';
    let label = '';
    if (customVal) {
      label = `Ý tưởng tùy chỉnh: "${customVal}"`;
    } else {
      const found = CONCEPTS_PRESETS.find((c) => c.id === selectedConceptId);
      label = found ? found.title : '';
    }
    if (s04PreviewLabel) s04PreviewLabel.textContent = label;
  }

  if (conceptChipsContainer) {
    conceptChipsContainer.addEventListener('click', (e) => {
      const chip = e.target.closest('.concept-chip');
      if (!chip) return;

      conceptChipsContainer.querySelectorAll('.concept-chip').forEach((c) => c.classList.remove('is-selected'));
      chip.classList.add('is-selected');
      selectedConceptId = chip.dataset.conceptId;

      if (customConceptInput) customConceptInput.value = '';
      updateExpressPreview();
    });
  }

  if (customConceptInput) {
    customConceptInput.addEventListener('input', () => {
      if (customConceptInput.value.trim()) {
        conceptChipsContainer.querySelectorAll('.concept-chip').forEach((c) => c.classList.remove('is-selected'));
      }
      updateExpressPreview();
    });
  }

  if (situationGrid) {
    situationGrid.addEventListener('click', (e) => {
      const opt = e.target.closest('.situation-option');
      if (!opt) return;

      situationGrid.querySelectorAll('.situation-option').forEach((o) => {
        o.classList.remove('is-selected');
        o.setAttribute('aria-checked', 'false');
      });
      opt.classList.add('is-selected');
      opt.setAttribute('aria-checked', 'true');
      selectedSituation = opt.dataset.situation;
    });
  }

  // Trigger S04 -> S05 Transition
  function goToSuggestions() {
    navigateTo('S05');
  }

  if (btnSubmitExpress) btnSubmitExpress.addEventListener('click', goToSuggestions);
  if (btnTopToSuggest) btnTopToSuggest.addEventListener('click', goToSuggestions);

  // S05: Render Suggestions
  function renderSuggestionResult() {
    if (!suggestionResultContainer) return;

    const customVal = customConceptInput ? customConceptInput.value.trim() : '';
    let concept = null;

    if (customVal) {
      // Dynamic fallback for custom inputs
      concept = {
        title: customVal,
        jpTerm: `${customVal} に関する技術概念`,
        enTerm: 'Custom IT Concept',
        plainJp: `「${customVal}」という機能・仕組みについて、簡単な言葉で言い換える練習です。`,
        plainRomaji: `${customVal} ni tsuite, kantan na kotoba de iikaeru renshuu desu.`,
        plainVi: `Giải thích bản chất của "${customVal}" bằng từ ngữ đời thường, kết hợp từ tiếng Anh chuẩn khi chưa nhớ từ tiếng Nhật.`,
        metaphor: `Liên hệ với thao tác thực tế mà sinh viên hay người dùng sử dụng hằng ngày trong ứng dụng.`,
        enMapping: `${customVal} / IT Keyword mapping`,
        templates: {
          explain: {
            lead: '専門用語の名前をはっきり覚えていないのですが、',
            phrase: `私たちが言いたいのは「${customVal}」のような機能・仕組みのことです。`,
            vi: `Em chưa nhớ chính xác từ chuyên ngành bằng tiếng Nhật, nhưng ý của nhóm em là cơ chế/chức năng giống như "${customVal}".`
          },
          discuss: {
            lead: 'グループでの提案ですが、',
            phrase: `この「${customVal}」の処理について、まずはPhase 1のMVPでシンプルに動かしてみませんか？`,
            vi: `Về phần "${customVal}" này, mình đề xuất trước hết hãy cho chạy thật đơn giản trong MVP Phase 1.`
          },
          question: {
            lead: '先生、確認させてください。',
            phrase: `講義でおっしゃっていた「${customVal}」の具体的な使い分けについて、もう一度教えていただけますか？`,
            vi: `Thưa thầy, thầy có thể hướng dẫn lại giúp em về cách phân biệt sử dụng cụ thể của "${customVal}" được không ạ?`
          },
          qa: {
            lead: '質疑への回答です。',
            phrase: `ご指摘の「${customVal}」については、次回のPhase 2の開発進捗管理シートにて改善要件として対応いたします。`,
            vi: `Về điểm "${customVal}" mà thầy/bạn vừa góp ý, nhóm em sẽ đưa vào yêu cầu cải tiến trong bảng tiến độ Phase 2 tới.`
          }
        }
      };
    } else {
      concept = CONCEPTS_PRESETS.find((c) => c.id === selectedConceptId) || CONCEPTS_PRESETS[0];
    }

    const templateData = concept.templates[selectedSituation] || concept.templates.explain;

    suggestionResultContainer.innerHTML = `
      <div class="suggest-hero">
        <div class="suggest-hero-top">
          <div>
            <span class="screen-id-pill" style="background-color: var(--accent-indigo);">Gợi ý giải quyết Thách thức ②</span>
            <div class="suggest-target-word">${concept.title}</div>
            <div class="term-en">${concept.enTerm}</div>
          </div>
          <button type="button" class="btn btn-vermilion" id="btnCopyAll">
            Sao chép câu phát biểu
          </button>
        </div>
      </div>

      <div class="suggest-grid">
        <!-- Panel 1: Paraphrase in Plain Japanese -->
        <article class="suggest-panel">
          <div>
            <div class="suggest-panel-header">
              <span class="suggest-kicker">Mẫu câu diễn đạt (発言テンプレート)</span>
              <h3 class="suggest-panel-title">Câu nói hoàn chỉnh để phát biểu ngay</h3>
            </div>
            <div class="phrase-box" style="margin-top: 0.85rem;">
              <p class="phrase-romaji">${templateData.lead}</p>
              <p class="phrase-jp">${templateData.lead} 「${templateData.phrase}」</p>
              <p class="phrase-vi"><strong>Dịch nghĩa:</strong> "${templateData.vi}"</p>
            </div>
          </div>
          <div class="panel-actions">
            <button type="button" class="btn btn-secondary" data-copy-text="${templateData.lead} ${templateData.phrase}">
              Sao chép câu tiếng Nhật
            </button>
          </div>
        </article>

        <!-- Panel 2: Plain Japanese Definition -->
        <article class="suggest-panel">
          <div>
            <div class="suggest-panel-header">
              <span class="suggest-kicker">Cách nói đơn giản (やさしい日本語)</span>
              <h3 class="suggest-panel-title">Diễn giải cơ chế bằng từ vựng N4/N3</h3>
            </div>
            <div class="phrase-box" style="margin-top: 0.85rem;">
              <p class="phrase-jp">${concept.plainJp}</p>
              <p class="phrase-romaji">${concept.plainRomaji}</p>
              <p class="phrase-vi"><strong>Ý nghĩa:</strong> ${concept.plainVi}</p>
            </div>
          </div>
          <div class="panel-actions">
            <button type="button" class="btn btn-secondary" data-copy-text="${concept.plainJp}">
              Sao chép định nghĩa đơn giản
            </button>
          </div>
        </article>

        <!-- Panel 3: Everyday Metaphor & English Mapping -->
        <article class="suggest-panel">
          <div>
            <div class="suggest-panel-header">
              <span class="suggest-kicker">Ví dụ gần gũi &amp; Từ nối tiếng Anh</span>
              <h3 class="suggest-panel-title">Bổ trợ khi giảng viên hỏi sâu</h3>
            </div>
            <div class="phrase-box" style="margin-top: 0.85rem;">
              <p class="phrase-jp" style="font-size: 0.95rem;">
                <strong>Ví dụ đời thường:</strong><br />${concept.metaphor}
              </p>
              <p class="phrase-vi" style="margin-top: 0.65rem;">
                <strong>Từ khóa tiếng Anh tương ứng:</strong><br />
                <code>${concept.enMapping}</code>
              </p>
            </div>
          </div>
          <div class="panel-actions">
            <button type="button" class="btn btn-indigo" data-nav="S04">
              ← Thử khái niệm hoặc tình huống khác (S04)
            </button>
          </div>
        </article>
      </div>
    `;

    // Copy event listeners inside S05
    suggestionResultContainer.querySelectorAll('[data-copy-text]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const text = btn.dataset.copyText;
        navigator.clipboard.writeText(text).then(() => {
          showToast('Đã sao chép vào bộ nhớ tạm!');
        });
      });
    });

    const btnCopyAll = document.getElementById('btnCopyAll');
    if (btnCopyAll) {
      btnCopyAll.addEventListener('click', () => {
        const full = `${templateData.lead} ${templateData.phrase}`;
        navigator.clipboard.writeText(full).then(() => {
          showToast('Đã sao chép câu phát biểu tiếng Nhật!');
        });
      });
    }
  }

  // App Initialization
  function init() {
    updateCounters();
    initExpressBuilder();
    renderTermList();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
