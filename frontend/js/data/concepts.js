// Paraphrase presets for S04 / S05.
// Each concept has one speaking template per situation id (see situations.js).

export const CONCEPTS = [
  {
    id: 'gamen-seni',
    label: 'Sơ đồ chuyển màn hình',
    jpTerm: '画面遷移図',
    enTerm: 'Screen Transition Diagram',
    plainJp: '「画面がどう動くかを示す図」です。ユーザーがボタンを押したときに、次にどの画面へ移動するかを表しています。',
    plainRomaji: 'Gamen ga dou ugoku ka wo shimesu zu desu. Yuuzaa ga botan wo oshita toki ni, tsugi ni dono gamen he idou suru ka wo arawashite imasu.',
    plainVi: 'Là "sơ đồ thể hiện cách màn hình thay đổi": khi người dùng bấm nút thì sẽ chuyển tới màn hình nào tiếp theo.',
    metaphor: 'Giống như bản đồ tuyến tàu điện: từ ga hiện tại đi theo hướng nào sẽ tới ga tiếp theo.',
    enMapping: 'Screen Transition / Wireflow / Navigation Flow',
    templates: {
      explain: {
        lead: '専門用語の名前を忘れてしまったのですが、',
        phrase: 'ユーザーが操作したときに「画面が次にどう切り替わるか」を矢印でつないだ図のことです。英語では Screen Transition Diagram と言います。',
        vi: 'Em lỡ quên từ chuyên ngành, nhưng ý em là sơ đồ nối các mũi tên thể hiện màn hình sẽ chuyển sang đâu khi người dùng thao tác. Tiếng Anh gọi là Screen Transition Diagram.'
      },
      discuss: {
        lead: 'この部分の設計について提案ですが、',
        phrase: '画面が切り替わる流れ（画面遷移）をシンプルにして、ユーザーが迷わないように2ステップ以内で戻れるようにしませんか？',
        vi: 'Về thiết kế chỗ này, mình đề xuất làm luồng chuyển màn hình thật đơn giản để người dùng không bị lạc và có thể quay lại trong vòng 2 bước.'
      },
      question: {
        lead: '先生、確認させていただきたいのですが、',
        phrase: 'ここで言う遷移とは、画面全体が変わることでしょうか？それとも同じ画面の中で表示が切り替わることでしょうか？',
        vi: 'Thưa thầy, "chuyển đổi" ở đây là đổi sang màn hình mới hay chỉ thay đổi nội dung trong cùng một màn hình ạ?'
      },
      qa: {
        lead: 'ご質問ありがとうございます。',
        phrase: '私たちが作成した画面遷移図では、ユーザーが説明を読まなくても直感的に操作できる最小限の5画面で構成しています。',
        vi: 'Cảm ơn câu hỏi. Sơ đồ chuyển màn hình của nhóm em gồm tối thiểu 5 màn hình để người dùng thao tác trực quan mà không cần đọc hướng dẫn.'
      }
    }
  },
  {
    id: 'mvp-concept',
    label: 'MVP',
    jpTerm: '実用最小限の製品（MVP）',
    enTerm: 'Minimum Viable Product',
    plainJp: '「一番大事な機能だけを急いで作ったお試しアプリ」です。無駄な機能を作らず、早くユーザーの意見を聞くためのものです。',
    plainRomaji: 'Ichiban daiji na kinou dake wo isoide tsukutta otameshi apuri desu. Muda na kinou wo tsukurazu, hayaku yuuzaa no iken wo kiku tame no mono desu.',
    plainVi: 'Là "ứng dụng dùng thử chỉ gồm tính năng quan trọng nhất", không làm tính năng thừa để nhanh chóng lấy ý kiến người dùng.',
    metaphor: 'Giống như làm một chiếc bánh mì kẹp cơ bản cho khách nếm thử, thay vì chuẩn bị cả bữa tiệc buffet.',
    enMapping: 'MVP / Prototype / Core feature mockup',
    templates: {
      explain: {
        lead: 'このアプリの目的についてですが、',
        phrase: 'すべてを作るのではなく、「ユーザーの課題を解決する一番コアな機能」だけを最速で作って検証するアプローチです。',
        vi: 'Về mục đích ứng dụng: nhóm em không làm tất cả, mà chỉ xây dựng tính năng cốt lõi nhất để kiểm chứng nhanh nhất.'
      },
      discuss: {
        lead: '開発スケジュールを考えると、',
        phrase: 'Phase 1 ではデータベース接続は行わず、ダミーデータだけで画面遷移を動かして、スピード重視でいきましょう。',
        vi: 'Xét tiến độ, ở Phase 1 mình chưa cần nối Database, chỉ dùng dữ liệu mẫu để chạy luồng màn hình và ưu tiên tốc độ.'
      },
      question: {
        lead: 'インタビューの評価基準について質問です。',
        phrase: 'Phase 1 の MVP では、デザインの完成度よりも「価値が伝わったかどうか」を一番の指標にしてもよろしいでしょうか？',
        vi: 'Trong MVP Phase 1, nhóm em lấy tiêu chí "người dùng có hiểu giá trị không" làm chỉ số chính thay vì độ hoàn thiện giao diện có được không ạ?'
      },
      qa: {
        lead: 'はい、その点についてお答えします。',
        phrase: 'プロブレムインタビューの結果に基づき、最も痛みが深かった「講義中の即時検索」と「言い換え補助」の2点だけに絞ってMVPを実装しました。',
        vi: 'Dựa trên kết quả phỏng vấn vấn đề, nhóm em thu gọn MVP vào 2 điểm: tra cứu tức thời và gợi ý diễn đạt.'
      }
    }
  },
  {
    id: 'latency-chien',
    label: 'Độ trễ',
    jpTerm: '遅延（ちえん）／レイテンシ',
    enTerm: 'Latency',
    plainJp: '「リクエストを送ってから、結果が返ってくるまでの待ち時間」です。',
    plainRomaji: 'Rikuesuto wo okutte kara, kekka ga kaette kuru made no machi jikan desu.',
    plainVi: 'Là "khoảng thời gian chờ từ lúc gửi yêu cầu tới khi nhận được kết quả".',
    metaphor: 'Giống như gọi điện thoại quốc tế: mình nói xong phải mất một giây bên kia mới nghe thấy.',
    enMapping: 'Latency / Real-time response',
    templates: {
      explain: {
        lead: 'この問題について説明しますと、',
        phrase: 'AIの翻訳結果が出るまでに待ち時間（遅延）があると、先生の次の説明を聞き逃してしまうということです。',
        vi: 'Nếu phải chờ AI dịch, sinh viên sẽ bỏ lỡ lời giảng tiếp theo của thầy cô.'
      },
      discuss: {
        lead: '技術的なアプローチとして、',
        phrase: 'APIを毎回呼ぶのではなく、よく出る単語をあらかじめローカルに持っておくことで、遅延をゼロに抑えたいと思います。',
        vi: 'Thay vì gọi API liên tục, mình muốn lưu sẵn từ hay gặp ở máy khách để đưa độ trễ về 0.'
      },
      question: {
        lead: '質問させてください。',
        phrase: 'リアルタイム処理において、許容される遅延（レイテンシ）の目安は何ミリ秒くらいでしょうか？',
        vi: 'Trong xử lý thời gian thực, độ trễ cho phép thường khoảng bao nhiêu mili-giây ạ?'
      },
      qa: {
        lead: 'パフォーマンスに関するご指摘について、',
        phrase: '講義の流れを止めないため、1タップですぐに記録が完了し、待ち時間が発生しない設計にしております。',
        vi: 'Để không ngắt nhịp bài giảng, hệ thống được thiết kế để chỉ một chạm là lưu xong, không có thời gian chờ.'
      }
    }
  },
  {
    id: 'primary-key',
    label: 'Khóa chính',
    jpTerm: '主キー（しゅきー）',
    enTerm: 'Primary Key',
    plainJp: '「データを1つだけに決めるためのID」です。学生番号のように、絶対に他の人と被らない番号のことです。',
    plainRomaji: 'Deeta wo hitotsu dake ni kimeru tame no ID desu. Gakusei bangou no you ni, zettai ni hoka no hito to kaburanai bangou no koto desu.',
    plainVi: 'Là "mã định danh duy nhất cho dữ liệu", giống mã số sinh viên, không bao giờ trùng với ai khác.',
    metaphor: 'Giống như số căn cước công dân hoặc mã số sinh viên.',
    enMapping: 'Primary Key / Unique Identifier',
    templates: {
      explain: {
        lead: 'このテーブルの構造について、',
        phrase: '各行を絶対に間違えずに特定するために、被ることのない固有のID（主キー）をつけて管理しています。',
        vi: 'Để định danh chính xác từng dòng, nhóm em gắn một ID duy nhất (khóa chính) không bị trùng lặp.'
      },
      discuss: {
        lead: '設計の見直しについてですが、',
        phrase: '名前を主キーにするのは同姓同名がいると重複するので、自動採番のIDを主キーに設定しましょう。',
        vi: 'Dùng tên làm khóa chính sẽ bị trùng khi có người cùng tên, nên hãy dùng ID tự tăng làm khóa chính.'
      },
      question: {
        lead: '確認の質問です。',
        phrase: 'このテーブルでは、複合キーを使うべきでしょうか？それともサロゲートキー（単一ID）の方が好ましいでしょうか？',
        vi: 'Bảng này nên dùng khóa phức hợp hay một ID đại diện đơn nhất thì tốt hơn ạ?'
      },
      qa: {
        lead: 'データ構造に関する質問にお答えします。',
        phrase: '各用語データにはユニークなIDを主キーとして割り振っているため、後からの復習リスト追加・削除も一意に処理できます。',
        vi: 'Mỗi thuật ngữ có một ID khóa chính duy nhất, nên việc thêm hoặc xóa khỏi danh sách ôn tập luôn chính xác.'
      }
    }
  }
];

export const DEFAULT_CONCEPT_ID = CONCEPTS[0].id;

// Generic templates used when the user types their own concept on S04.
export function createCustomConcept(text) {
  return {
    id: 'custom',
    label: text,
    jpTerm: text,
    enTerm: '',
    plainJp: `「${text}」という機能・仕組みについて、簡単な言葉で言い換える練習です。`,
    plainRomaji: `"${text}" ni tsuite, kantan na kotoba de iikaeru renshuu desu.`,
    plainVi: `Giải thích bản chất của "${text}" bằng từ ngữ đời thường, kèm từ tiếng Anh khi chưa nhớ từ tiếng Nhật.`,
    metaphor: 'Liên hệ với một thao tác quen thuộc mà người dùng làm hằng ngày trong ứng dụng.',
    enMapping: text,
    templates: {
      explain: {
        lead: '専門用語の名前をはっきり覚えていないのですが、',
        phrase: `私たちが言いたいのは「${text}」のような機能・仕組みのことです。`,
        vi: `Em chưa nhớ chính xác từ chuyên ngành tiếng Nhật, nhưng ý nhóm em là cơ chế/chức năng giống như "${text}".`
      },
      discuss: {
        lead: 'グループでの提案ですが、',
        phrase: `この「${text}」の処理について、まずはPhase 1のMVPでシンプルに動かしてみませんか？`,
        vi: `Về phần "${text}", mình đề xuất trước hết cho chạy thật đơn giản trong MVP Phase 1.`
      },
      question: {
        lead: '先生、確認させてください。',
        phrase: `講義でおっしゃっていた「${text}」の具体的な使い分けについて、もう一度教えていただけますか？`,
        vi: `Thầy có thể giải thích lại cách dùng cụ thể của "${text}" được không ạ?`
      },
      qa: {
        lead: '質疑への回答です。',
        phrase: `ご指摘の「${text}」については、次回のPhase 2で改善要件として対応いたします。`,
        vi: `Về điểm "${text}" vừa được góp ý, nhóm em sẽ đưa vào yêu cầu cải tiến ở Phase 2.`
      }
    }
  };
}
