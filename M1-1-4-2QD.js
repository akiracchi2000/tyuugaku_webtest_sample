// --- クイズデータ(QD)はここに貼り付けてください ---
window.QUIZ_DATA = [
                 // --- 「Nの平方根」の定義 ---
    // 問題 1
    {
        question: "次の文章は正しいか。<br>「$16$の平方根は $4$ である。」",
        options: [ "正しい", "正しくない" ],
        answer: "正しくない",
        rationale: "$16$の平方根は $\\pm 4$ ($4$と$-4$) の$2$つです。「$4$である」だけでは不十分です。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63135' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
    },
    // 問題 2
    {
        question: "次の文章は正しいか。<br>「$25$の平方根は $\\pm 5$ である。」",
        options: [ "正しい", "正しくない" ],
        answer: "正しい",
        rationale: "$2$乗して$25$になる数は $5$ と $-5$ (まとめて $\\pm 5$) の$2$つです。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63135' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
    },
    // 問題 3
    {
        question: "次の文章は正しいか。<br>「$9$の平方根は $3$ と $-3$ である。」",
        options: [ "正しい", "正しくない" ],
        answer: "正しい",
        rationale: "$2$乗して$9$になる数は $3$ と $-3$ の$2$つです。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63135' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
    },
    // 問題 4
    {
        question: "次の文章は正しいか。<br>「$7$の平方根は $\\sqrt{7}$ である。」",
        options: [ "正しい", "正しくない" ],
        answer: "正しくない",
        rationale: "$7$の平方根は $\\pm \\sqrt{7}$ ($\\sqrt{7}$ と $-\\sqrt{7}$) の$2$つです。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63135' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
    },
    // 問題 5
    {
        question: "次の文章は正しいか。<br>「$\\left(-5\\right)^2$ の平方根は $\\pm 5$ である。」",
        options: [ "正しい", "正しくない" ],
        answer: "正しい",
        rationale: "$\\left(-5\\right)^2 = 25$ です。$25$の平方根は $\\pm 5$ なので正しいです。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63135' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
    },
    // 問題 6
    {
        question: "次の文章は正しいか。<br>「$0$の平方根は $0$ である。」",
        options: [ "正しい", "正しくない" ],
        answer: "正しい",
        rationale: "$2$乗して$0$になる数は$0$のみです。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63135' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
    },
    // 問題 7
    {
        question: "次の文章は正しいか。<br>「$-4$の平方根は $-2$ である。」",
        options: [ "正しい", "正しくない" ],
        answer: "正しくない",
        rationale: "負の数の平方根は実数の範囲では存在しません。（数学IIの範囲では $\\pm 2i$ となります）<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63135' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
    },
    // 問題 8
    {
        question: "次の文章は正しいか。<br>「$2$の平方根は $\\pm 1.414$ である。」",
        options: [ "正しい", "正しくない" ],
        answer: "正しくない",
        rationale: "$\\sqrt{2}$ は $1.414...$ という循環しない小数（無理数）であり、$\\pm 1.414$ という有限小数ではありません。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63135' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
    },
    // 問題 9
    {
        question: "次の文章は正しいか。<br>「$a^2$ の平方根は $a$ である。」",
        options: [ "正しい", "正しくない" ],
        answer: "正しくない",
        rationale: "$a^2$ の平方根は $\\pm \\sqrt{a^2} = \\pm |a|$ です。$a$ とは限りません。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63135' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
    },
    // 問題 10
    {
        question: "次の文章は正しいか。<br>「$3^2$ の平方根は $\\pm 3$ である。」",
        options: [ "正しい", "正しくない" ],
        answer: "正しい",
        rationale: "$3^2 = 9$ です。$9$の平方根は $\\pm 3$ なので正しいです。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63135' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
    },
    // --- 「√N」の定義 ---
    // 問題 11
    {
        question: "次の文章は正しいか。<br>「$\\sqrt{9} = \\pm 3$ である。」",
        options: [ "正しい", "正しくない" ],
        answer: "正しくない",
        rationale: "$\\sqrt{9}$ は「$9$の平方根のうち**正（プラス）の方**」を表す記号です。よって $\\sqrt{9} = 3$ です。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63135' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
    },
    // 問題 12
    {
        question: "次の文章は正しいか。<br>「$\\sqrt{16} = 4$ である。」",
        options: [ "正しい", "正しくない" ],
        answer: "正しい",
        rationale: "$\\sqrt{16}$ は$16$の平方根のうち正の方、つまり$4$を表します。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63135' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
    },
    // 問題 13
    {
        question: "次の文章は正しいか。<br>「$\\sqrt{36} = 6$ である。」",
        options: [ "正しい", "正しくない" ],
        answer: "正しい",
        rationale: "$\\sqrt{36}$ は$36$の平方根のうち正の方、つまり$6$を表します。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63135' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
    },
    // 問題 14
    {
        question: "次の文章は正しいか。<br>「$\\sqrt{0} = 0$ である。」",
        options: [ "正しい", "正しくない" ],
        answer: "正しい",
        rationale: "$0$の平方根は$0$のみであり、$\\sqrt{0}$ も$0$を表します。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63135' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
    },
    // 問題 15
    {
        question: "次の文章は正しいか。<br>「$\\sqrt{49} = \\pm 7$ である。」",
        options: [ "正しい", "正しくない" ],
        answer: "正しくない",
        rationale: "$\\sqrt{49}$ は$49$の平方根のうち正の方、つまり $7$ を表します。$\\pm 7$ ではありません。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63135' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
    },
    // 問題 16
    {
        question: "次の文章は正しいか。<br>「$-\\sqrt{25} = -5$ である。」",
        options: [ "正しい", "正しくない" ],
        answer: "正しい",
        rationale: "$\\sqrt{25}=5$ です。したがって、$-\\sqrt{25} = -5$ となり正しいです。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63135' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
    },
    // 問題 17
    {
        question: "次の文章は正しいか。<br>「$\\sqrt{5}$ は無理数である。」",
        options: [ "正しい", "正しくない" ],
        answer: "正しい",
        rationale: "$\\sqrt{5}$ は循環しない無限小数であり、分数で表せないため無理数です。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63135' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
    },
    // 問題 18
    {
        question: "次の文章は正しいか。<br>「$\\left(\\sqrt{7}\\right)^2 = 7$ である。」",
        options: [ "正しい", "正しくない" ],
        answer: "正しい",
        rationale: "$\\sqrt{7}$ は「$2$乗すると$7$になる正の数」の定義そのものなので、$2$乗すれば$7$になります。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63135' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
    },
    // 問題 19
    {
        question: "次の文章は正しいか。<br>「$\\left(-\\sqrt{3}\\right)^2 = -3$ である。」",
        options: [ "正しい", "正しくない" ],
        answer: "正しくない",
        rationale: "$\\left(-\\sqrt{3}\\right)^2 = \\left(-1\\right)^2 \\times \\left(\\sqrt{3}\\right)^2 = 1 \\times 3 = 3$ です。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63135' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
    },
    // 問題 20
    {
        question: "次の文章は正しいか。<br>「$\\sqrt{81} = 9$ である。」",
        options: [ "正しい", "正しくない" ],
        answer: "正しい",
        rationale: "$\\sqrt{81}$ は$81$の平方根のうち正の方、つまり$9$を表します。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63135' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
    },
    // --- 「√(A^2)」の外し方 ---
    // 問題 21
    {
        question: "次の文章は正しいか。<br>「$\\sqrt{\\left(-3\\right)^2} = -3$ である。」",
        options: [ "正しい", "正しくない" ],
        answer: "正しくない",
        rationale: "$\\sqrt{\\left(-3\\right)^2} = \\sqrt{9} = 3$ です。一般に $\\sqrt{a^2} = |a|$ であり、負の数にはなりません。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63135' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
    },
    // 問題 22
    {
        question: "次の文章は正しいか。<br>「$\\sqrt{\\left(-7\\right)^2} = 7$ である。」",
        options: [ "正しい", "正しくない" ],
        answer: "正しい",
        rationale: "$\\sqrt{\\left(-7\\right)^2} = \\sqrt{49} = 7$ です。$\\sqrt{a^2} = |a|$ なので $|-7|=7$ となります。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63135' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
    },
    // 問題 23
    {
        question: "次の文章は正しいか。<br>「$\\sqrt{5^2} = 5$ である。」",
        options: [ "正しい", "正しくない" ],
        answer: "正しい",
        rationale: "$\\sqrt{5^2} = \\sqrt{25} = 5$ です。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63135' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
    },
    // 問題 24
    {
        question: "次の文章は正しいか。<br>「$\\sqrt{a^2} = a$ である。」",
        options: [ "正しい", "正しくない" ],
        answer: "正しくない",
        rationale: "$a<0$ の場合（例 $a=-2$） $\\sqrt{\\left(-2\\right)^2} = \\sqrt{4} = 2$ となり、$a$（つまり $-2$）と一致しません。正しくは $\\sqrt{a^2} = |a|$ です。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63135' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
    },
    // 問題 25
    {
        question: "次の文章は正しいか。<br>「$\\sqrt{a^2} = |a|$ である。」",
        options: [ "正しい", "正しくない" ],
        answer: "正しい",
        rationale: "平方根の定義より、$\\sqrt{A}$ は必ず$0$以上です。$a$ が負の場合でも $\\sqrt{a^2}$ は正になるため、絶対値 $|a|$ が正しい外し方です。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63135' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
    },
    // 問題 26
    {
        question: "次の文章は正しいか。<br>「$a>0$ のとき、$\\sqrt{a^2} = a$ である。」",
        options: [ "正しい", "正しくない" ],
        answer: "正しい",
        rationale: "$\\sqrt{a^2} = |a|$ です。$a>0$ のとき $|a| = a$ なので、正しいです。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63135' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
    },
    // 問題 27
    {
        question: "次の文章は正しいか。<br>「$a<0$ のとき、$\\sqrt{a^2} = a$ である。」",
        options: [ "正しい", "正しくない" ],
        answer: "正しくない",
        rationale: "$\\sqrt{a^2} = |a|$ です。$a<0$ のとき $|a| = -a$ なので、正しくありません。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63135' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
    },
    // 問題 28
    {
        question: "次の文章は正しいか。<br>「$a<0$ のとき、$\\sqrt{a^2} = -a$ である。」",
        options: [ "正しい", "正しくない" ],
        answer: "正しい",
        rationale: "$\\sqrt{a^2} = |a|$ です。$a$ が負の数なので、絶対値を外すにはマイナスを付けます。よって $|a| = -a$ となり正しいです。（例: $|-3| = -\\left(-3\\right) = 3$）<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63135' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
    },
    // 問題 29
    {
        question: "次の文章は正しいか。<br>「$\\sqrt{\\left(a-b\\right)^2} = a-b$ である。」",
        options: [ "正しい", "正しくない" ],
        answer: "正しくない",
        rationale: "$a<b$ のとき $a-b$ は負になります。正しくは $\\sqrt{\\left(a-b\\right)^2} = |a-b|$ です。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63135' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
    },
    // 問題 30
    {
        question: "次の文章は正しいか。<br>「$a > b$ のとき、$\\sqrt{\\left(a-b\\right)^2} = a-b$ である。」",
        options: [ "正しい", "正しくない" ],
        answer: "正しい",
        rationale: "$\\sqrt{\\left(a-b\\right)^2} = |a-b|$ です。$a > b$ のとき $a-b > 0$ なので、絶対値はそのまま外せます。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63135' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
    },
    // 問題 31
    {
        question: "次の文章は正しいか。<br>「$a < b$ のとき、$\\sqrt{\\left(a-b\\right)^2} = a-b$ である。」",
        options: [ "正しい", "正しくない" ],
        answer: "正しくない",
        rationale: "$\\sqrt{\\left(a-b\\right)^2} = |a-b|$ です。$a < b$ のとき $a-b < 0$ なので、絶対値を外すにはマイナスを付けます。よって $|a-b| = -\\left(a-b\\right) = -a+b$ となります。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63135' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
    },
    // 問題 32
    {
        question: "次の文章は正しいか。<br>「$a < b$ のとき、$\\sqrt{\\left(a-b\\right)^2} = -a+b$ である。」",
        options: [ "正しい", "正しくない" ],
        answer: "正しい",
        rationale: "$\\sqrt{\\left(a-b\\right)^2} = |a-b|$ です。$a < b$ のとき $a-b < 0$ なので、絶対値を外すにはマイナスを付けます。よって $|a-b| = -\\left(a-b\\right) = -a+b$ となります。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63135' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
    },
    // 問題 33
    {
        question: "次の文章は正しいか。<br>「$x < 1$ のとき、$\\sqrt{\\left(x-1\\right)^2} = x-1$ である。」",
        options: [ "正しい", "正しくない" ],
        answer: "正しくない",
        rationale: "$\\sqrt{\\left(x-1\\right)^2} = |x-1|$ です。$x < 1$ のとき $x-1 < 0$ なので、絶対値を外すにはマイナスを付けます。よって $|x-1| = -\\left(x-1\\right) = -x+1$ となります。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63135' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
    },
    // 問題 34
    {
        question: "次の文章は正しいか。<br>「$x > 3$ のとき、$\\sqrt{\\left(3-x\\right)^2} = x-3$ である。」",
        options: [ "正しい", "正しくない" ],
        answer: "正しい",
        rationale: "$\\sqrt{\\left(3-x\\right)^2} = |3-x|$ です。$x > 3$ のとき $3-x < 0$ なので、絶対値を外すにはマイナスを付けます。よって $|3-x| = -\\left(3-x\\right) = -3+x = x-3$ となります。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63135' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
    },
    // 問題 35
    {
        question: "次の文章は正しいか。<br>「$a>0, b<0$ のとき、$\\sqrt{a^2b^2} = -ab$ である。」",
        options: [ "正しい", "正しくない" ],
        answer: "正しい",
        rationale: "$\\sqrt{a^2b^2} = \\sqrt{\\left(ab\\right)^2} = |ab|$ です。$a>0, b<0$ なので、$ab$ は負の数です。よって絶対値を外すにはマイナスを付けます。$|ab| = -ab$。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63135' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
    },
    // 問題 36
    {
        question: "次の文章は正しいか。<br>「$a<0, b>0$ のとき、$\\sqrt{a^2b^2} = -ab$ である。」",
        options: [ "正しい", "正しくない" ],
        answer: "正しい",
        rationale: "$\\sqrt{a^2b^2} = \\sqrt{\\left(ab\\right)^2} = |ab|$ です。$a<0, b>0$ なので、$ab$ は負の数です。よって絶対値を外すにはマイナスを付けます。$|ab| = -ab$。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63135' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
    },
    // 問題 37
    {
        question: "次の文章は正しいか。<br>「$a<0, b<0$ のとき、$\\sqrt{a^2b^2} = -ab$ である。」",
        options: [ "正しい", "正しくない" ],
        answer: "正しくない",
        rationale: "$\\sqrt{a^2b^2} = \\sqrt{\\left(ab\\right)^2} = |ab|$ です。$a<0, b<0$ なので、$ab$ は正の数です。よって絶対値はそのまま外せます。$|ab| = ab$。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63135' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
    },
    // 問題 38
    {
        question: "次の文章は正しいか。<br>「$a<0, b<0$ のとき、$\\sqrt{a^2b^2} = ab$ である。」",
        options: [ "正しい", "正しくない" ],
        answer: "正しい",
        rationale: "$\\sqrt{a^2b^2} = |ab|$ です。$a<0, b<0$ なので、$ab > 0$ です。よって絶対値はそのまま外せます。$|ab| = ab$。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63135' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
    },
    // 問題 39
    {
        question: "次の文章は正しいか。<br>「$a>0, b>0$ のとき、$\\sqrt{a^2b^2} = ab$ である。」",
        options: [ "正しい", "正しくない" ],
        answer: "正しい",
        rationale: "$\\sqrt{a^2b^2} = |ab|$ です。$a>0, b>0$ なので、$ab > 0$ です。よって絶対値はそのまま外せます。$|ab| = ab$。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63135' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
    },
    // 問題 40
    {
        question: "次の文章は正しいか。<br>「$a>0$ のとき、$\\sqrt{a^2} = -a$ である。」",
        options: [ "正しい", "正しくない" ],
        answer: "正しくない",
        rationale: "$\\sqrt{a^2} = |a|$ です。$a>0$ のとき $|a| = a$ です。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63135' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
    },
    // --- 混合 ---
    // 問題 41
    {
        question: "次の文章は正しいか。<br>「$64$の平方根は $8$ と $-8$ である。」",
        options: [ "正しい", "正しくない" ],
        answer: "正しい",
        rationale: "$2$乗して$64$になる数は $8$ と $-8$ の$2$つです。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63135' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
    },
    // 問題 42
    {
        question: "次の文章は正しいか。<br>「$\\sqrt{81} = \\pm 9$ である。」",
        options: [ "正しい", "正しくない" ],
        answer: "正しくない",
        rationale: "$\\sqrt{81}$ は$81$の平方根のうち**正の方**、つまり $9$ を表します。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63135' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
    },
    // 問題 43
    {
        question: "次の文章は正しいか。<br>「$\\sqrt{\\left(-2\\right)^2} = 2$ である。」",
        options: [ "正しい", "正しくない" ],
        answer: "正しい",
        rationale: "$\\sqrt{\\left(-2\\right)^2} = \\sqrt{4} = 2$ です。$\\sqrt{a^2} = |a|$ なので $|-2|=2$ となります。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63135' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
    },
    // 問題 44
    {
        question: "次の文章は正しいか。<br>「$x < 5$ のとき、$\\sqrt{\\left(x-5\\right)^2} = 5-x$ である。」",
        options: [ "正しい", "正しくない" ],
        answer: "正しい",
        rationale: "$\\sqrt{\\left(x-5\\right)^2} = |x-5|$ です。$x < 5$ のとき $x-5 < 0$ なので、絶対値を外すにはマイナスを付けます。よって $|x-5| = -\\left(x-5\\right) = -x+5 = 5-x$ となります。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63135' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
    },
    // 問題 45
    {
        question: "次の文章は正しいか。<br>「$a>0, b<0$ のとき、$\\sqrt{a^2b^2} = ab$ である。」",
        options: [ "正しい", "正しくない" ],
        answer: "正しくない",
        rationale: "$\\sqrt{a^2b^2} = |ab|$ です。$a>0, b<0$ なので、$ab < 0$ です。よって絶対値を外すにはマイナスを付けます。$|ab| = -ab$。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63135' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
    },
    // 問題 46
    {
        question: "次の文章は正しいか。<br>「$5$の平方根は $\\pm \\sqrt{5}$ である。」",
        options: [ "正しい", "正しくない" ],
        answer: "正しい",
        rationale: "$2$乗して$5$になる数は $\\sqrt{5}$ と $-\\sqrt{5}$ の$2$つです。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63135' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
    },
    // 問題 47
    {
        question: "次の文章は正しいか。<br>「$\\sqrt{1} = \\pm 1$ である。」",
        options: [ "正しい", "正しくない" ],
        answer: "正しくない",
        rationale: "$\\sqrt{1}$ は$1$の平方根のうち**正の方**、つまり $1$ を表します。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63135' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
    },
    // 問題 48
    {
        question: "次の文章は正しいか。<br>「$a>2$ のとき、$\\sqrt{\\left(2-a\\right)^2} = a-2$ である。」",
        options: [ "正しい", "正しくない" ],
        answer: "正しい",
        rationale: "$\\sqrt{\\left(2-a\\right)^2} = |2-a|$ です。$a > 2$ のとき $2-a < 0$ なので、絶対値を外すにはマイナスを付けます。よって $|2-a| = -\\left(2-a\\right) = -2+a = a-2$ となります。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63135' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
    },
    // 問題 49
    {
        question: "次の文章は正しいか。<br>「$\\sqrt{13}$ は有理数である。」",
        options: [ "正しい", "正しくない" ],
        answer: "正しくない",
        rationale: "$\\sqrt{13}$ は循環しない無限小数であり、分数で表せないため無理数です。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63135' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
    },
    // 問題 50
    {
        question: "次の文章は正しいか。<br>「$\\left(-\\sqrt{6}\\right)^2 = 6$ である。」",
        options: [ "正しい", "正しくない" ],
        answer: "正しい",
        rationale: "$\\left(-\\sqrt{6}\\right)^2 = \\left(-1\\right)^2 \\times \\left(\\sqrt{6}\\right)^2 = 1 \\times 6 = 6$ です。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63135' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
    }

            ]; // ← allQuizData をここで閉じる
            // --- 元のクイズデータの終わり ---