// --- クイズデータ(QD)はここに貼り付けてください ---
window.QUIZ_DATA = [
                  // 問題 1 (例題類似)
                {
                    question: "次の式を展開せよ。<br>$\\left(x+2y+z\\right)^2$",
                    options: [ "$x^2+4y^2+z^2+4xy+4yz+2zx$", "$x^2+2y^2+z^2+4xy+4yz+2zx$", "$x^2+4y^2+z^2+2xy+2yz+2zx$", "$x^2+4y^2+z^2+4xy+2yz+2zx$" ],
                    answer: "$x^2+4y^2+z^2+4xy+4yz+2zx$",
                    rationale: "公式 $\\left(a+b+c\\right)^2=a^2+b^2+c^2+2ab+2bc+2ca$ を使います。<br>この問題では、$a=x, b=2y, c=z$ と置き換えて計算します。<br>各項を計算すると、<br> $a^2 = x^2$<br> $b^2 = \\left(2y\\right)^2 = 4y^2$<br> $c^2 = z^2$<br> $2ab = 2\\cdot x\\cdot 2y = 4xy$<br> $2bc = 2\\cdot 2y\\cdot z = 4yz$<br> $2ca = 2\\cdot z\\cdot x = 2zx$<br>これらをすべて足し合わせると、<br>$x^2+4y^2+z^2+4xy+4yz+2zx$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7708/63118' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 2 (例題類似)
                {
                    question: "次の式を展開せよ。<br>$\\left(x-y-z\\right)^2$",
                    options: [ "$x^2+y^2+z^2-2xy+2yz-2zx$", "$x^2+y^2+z^2+2xy-2yz-2zx$", "$x^2+y^2+z^2-2xy-2yz+2zx$", "$x^2-y^2-z^2-2xy+2yz-2zx$" ],
                    answer: "$x^2+y^2+z^2-2xy+2yz-2zx$",
                    rationale: "公式 $\\left(a+b+c\\right)^2=a^2+b^2+c^2+2ab+2bc+2ca$ を使います。<br>この問題では、$a=x, b=-y, c=-z$ と置き換えて計算します。<br>各項を計算すると、<br> $a^2 = x^2$<br> $b^2 = \\left(-y\\right)^2 = y^2$ （負の数の2乗は正）<br> $c^2 = \\left(-z\\right)^2 = z^2$ （負の数の2乗は正）<br> $2ab = 2\\cdot x\\cdot\\left(-y\\right) = -2xy$<br> $2bc = 2\\cdot\\left(-y\\right)\\cdot\\left(-z\\right) = 2yz$ （負×負は正）<br> $2ca = 2\\cdot\\left(-z\\right)\\cdot x = -2zx$<br>これらをすべて足し合わせると、<br>$x^2+y^2+z^2-2xy+2yz-2zx$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7708/63118' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 3 (例題類似)
                {
                    question: "次の式を展開せよ。<br>$\\left(x-3y+2\\right)^2$",
                    options: [ "$x^2+9y^2+4-6xy-12y+4x$", "$x^2+9y^2+4+6xy-12y+4x$", "$x^2+9y^2+4-6xy+12y-4x$", "$x^2+3y^2+4-6xy-12y+4x$" ],
                    answer: "$x^2+9y^2+4-6xy-12y+4x$",
                    rationale: "公式 $\\left(a+b+c\\right)^2=a^2+b^2+c^2+2ab+2bc+2ca$ を使います。<br>この問題では、$a=x, b=-3y, c=2$ と置き換えて計算します。<br>各項を計算すると、<br> $a^2 = x^2$<br> $b^2 = \\left(-3y\\right)^2 = 9y^2$<br> $c^2 = 2^2 = 4$<br> $2ab = 2\\cdot x\\cdot\\left(-3y\\right) = -6xy$<br> $2bc = 2\\cdot\\left(-3y\\right)\\cdot 2 = -12y$<br> $2ca = 2\\cdot 2\\cdot x = 4x$<br>これらをすべて足し合わせると、<br>$x^2+9y^2+4-6xy-12y+4x$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7708/63118' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 4
                {
                    question: "次の式を展開せよ。<br>$\\left(a+b+c\\right)^2$",
                    options: [ "$a^2+b^2+c^2+2ab+2bc+2ca$", "$a^2+b^2+c^2+ab+bc+ca$", "$a^2+b^2+c^2$", "$a^2+b^2+c^2-2ab-2bc-2ca$" ],
                    answer: "$a^2+b^2+c^2+2ab+2bc+2ca$",
                    rationale: "公式 $\\left(a+b+c\\right)^2=a^2+b^2+c^2+2ab+2bc+2ca$ そのものです。<br>この公式は、3つの項の和の2乗を展開する基本的なものです。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7708/63118' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 5
                {
                    question: "次の式を展開せよ。<br>$\\left(a+b-c\\right)^2$",
                    options: [ "$a^2+b^2+c^2+2ab-2bc-2ca$", "$a^2+b^2+c^2-2ab-2bc-2ca$", "$a^2+b^2+c^2+2ab+2bc+2ca$", "$a^2+b^2-c^2+2ab-2bc-2ca$" ],
                    answer: "$a^2+b^2+c^2+2ab-2bc-2ca$",
                    rationale: "公式 $\\left(x+y+z\\right)^2=x^2+y^2+z^2+2xy+2yz+2zx$ を使います。<br>この問題では、$x=a, y=b, z=-c$ と置き換えて計算します。<br>各項を計算すると、<br> $x^2 = a^2$<br> $y^2 = b^2$<br> $z^2 = \\left(-c\\right)^2 = c^2$<br> $2xy = 2\\cdot a\\cdot b = 2ab$<br> $2yz = 2\\cdot b\\cdot\\left(-c\\right) = -2bc$<br> $2zx = 2\\cdot\\left(-c\\right)\\cdot a = -2ca$<br>これらをすべて足し合わせると、<br>$a^2+b^2+c^2+2ab-2bc-2ca$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7708/63118' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 6
                {
                    question: "次の式を展開せよ。<br>$\\left(a-b+c\\right)^2$",
                    options: [ "$a^2+b^2+c^2-2ab-2bc+2ca$", "$a^2+b^2+c^2+2ab-2bc-2ca$", "$a^2-b^2+c^2-2ab-2bc+2ca$", "$a^2+b^2+c^2-2ab+2bc-2ca$" ],
                    answer: "$a^2+b^2+c^2-2ab-2bc+2ca$",
                    rationale: "公式 $\\left(x+y+z\\right)^2=x^2+y^2+z^2+2xy+2yz+2zx$ を使います。<br>この問題では、$x=a, y=-b, z=c$ と置き換えて計算します。<br>各項を計算すると、<br> $x^2 = a^2$<br> $y^2 = \\left(-b\\right)^2 = b^2$<br> $z^2 = c^2$<br> $2xy = 2\\cdot a\\cdot\\left(-b\\right) = -2ab$<br> $2yz = 2\\cdot\\left(-b\\right)\\cdot c = -2bc$<br> $2zx = 2\\cdot c\\cdot a = 2ca$<br>これらをすべて足し合わせると、<br>$a^2+b^2+c^2-2ab-2bc+2ca$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7708/63118' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 7
                {
                    question: "次の式を展開せよ。<br>$\\left(2x+y+1\\right)^2$",
                    options: [ "$4x^2+y^2+1+4xy+2y+4x$", "$4x^2+y^2+1+2xy+y+2x$", "$4x^2+y^2+1+4xy+4y+4x$", "$2x^2+y^2+1+4xy+2y+4x$" ],
                    answer: "$4x^2+y^2+1+4xy+2y+4x$",
                    rationale: "公式 $\\left(a+b+c\\right)^2=a^2+b^2+c^2+2ab+2bc+2ca$ を使います。<br>この問題では、$a=2x, b=y, c=1$ と置き換えて計算します。<br>各項を計算すると、<br> $a^2 = \\left(2x\\right)^2 = 4x^2$<br> $b^2 = y^2$<br> $c^2 = 1^2 = 1$<br> $2ab = 2\\cdot 2x\\cdot y = 4xy$<br> $2bc = 2\\cdot y\\cdot 1 = 2y$<br> $2ca = 2\\cdot 1\\cdot 2x = 4x$<br>これらをすべて足し合わせると、<br>$4x^2+y^2+1+4xy+2y+4x$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7708/63118' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 8
                {
                    question: "次の式を展開せよ。<br>$\\left(3a-b+2\\right)^2$",
                    options: [ "$9a^2+b^2+4-6ab-4b+12a$", "$9a^2+b^2+4+6ab-4b+12a$", "$9a^2-b^2+4-6ab-4b+12a$", "$9a^2+b^2+4-6ab+4b-12a$" ],
                    answer: "$9a^2+b^2+4-6ab-4b+12a$",
                    rationale: "公式 $\\left(x+y+z\\right)^2=x^2+y^2+z^2+2xy+2yz+2zx$ を使います。<br>この問題では、$x=3a, y=-b, z=2$ と置き換えて計算します。<br>各項を計算すると、<br> $x^2 = \\left(3a\\right)^2 = 9a^2$<br> $y^2 = \\left(-b\\right)^2 = b^2$<br> $z^2 = 2^2 = 4$<br> $2xy = 2\\cdot 3a\\cdot\\left(-b\\right) = -6ab$<br> $2yz = 2\\cdot\\left(-b\\right)\\cdot 2 = -4b$<br> $2zx = 2\\cdot 2\\cdot 3a = 12a$<br>これらをすべて足し合わせると、<br>$9a^2+b^2+4-6ab-4b+12a$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7708/63118' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 9
                {
                    question: "次の式を展開せよ。<br>$\\left(x-2y-3z\\right)^2$",
                    options: [ "$x^2+4y^2+9z^2-4xy+12yz-6zx$", "$x^2+4y^2+9z^2+4xy-12yz-6zx$", "$x^2+4y^2+9z^2-4xy-12yz+6zx$", "$x^2+4y^2+9z^2-4xy+12yz+6zx$" ],
                    answer: "$x^2+4y^2+9z^2-4xy+12yz-6zx$",
                    rationale: "公式 $\\left(a+b+c\\right)^2=a^2+b^2+c^2+2ab+2bc+2ca$ を使います。<br>この問題では、$a=x, b=-2y, c=-3z$ と置き換えて計算します。<br>各項を計算すると、<br> $a^2 = x^2$<br> $b^2 = \\left(-2y\\right)^2 = 4y^2$<br> $c^2 = \\left(-3z\\right)^2 = 9z^2$<br> $2ab = 2\\cdot x\\cdot\\left(-2y\\right) = -4xy$<br> $2bc = 2\\cdot\\left(-2y\\right)\\cdot\\left(-3z\\right) = 12yz$<br> $2ca = 2\\cdot\\left(-3z\\right)\\cdot x = -6zx$<br>これらをすべて足し合わせると、<br>$x^2+4y^2+9z^2-4xy+12yz-6zx$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7708/63118' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 10
                {
                    question: "次の式を展開せよ。<br>$\\left(a+2b-3c\\right)^2$",
                    options: [ "$a^2+4b^2+9c^2+4ab-12bc-6ca$", "$a^2+4b^2+9c^2-4ab-12bc-6ca$", "$a^2+4b^2+9c^2+4ab+12bc-6ca$", "$a^2+4b^2+9c^2+4ab-12bc+6ca$" ],
                    answer: "$a^2+4b^2+9c^2+4ab-12bc-6ca$",
                    rationale: "公式 $\\left(x+y+z\\right)^2=x^2+y^2+z^2+2xy+2yz+2zx$ を使います。<br>この問題では、$x=a, y=2b, z=-3c$ と置き換えて計算します。<br>各項を計算すると、<br> $x^2 = a^2$<br> $y^2 = \\left(2b\\right)^2 = 4b^2$<br> $z^2 = \\left(-3c\\right)^2 = 9c^2$<br> $2xy = 2\\cdot a\\cdot 2b = 4ab$<br> $2yz = 2\\cdot 2b\\cdot\\left(-3c\\right) = -12bc$<br> $2zx = 2\\cdot\\left(-3c\\right)\\cdot a = -6ca$<br>これらをすべて足し合わせると、<br>$a^2+4b^2+9c^2+4ab-12bc-6ca$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7708/63118' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 11
                {
                    question: "次の式を展開せよ。<br>$\\left(2x-y+z\\right)^2$",
                    options: [ "$4x^2+y^2+z^2-4xy-2yz+4zx$", "$4x^2+y^2+z^2+4xy-2yz+4zx$", "$4x^2+y^2+z^2-4xy+2yz-4zx$", "$4x^2+y^2+z^2-4xy-2yz-4zx$" ],
                    answer: "$4x^2+y^2+z^2-4xy-2yz+4zx$",
                    rationale: "公式 $\\left(a+b+c\\right)^2=a^2+b^2+c^2+2ab+2bc+2ca$ を使います。<br>この問題では、$a=2x, b=-y, c=z$ と置き換えて計算します。<br>各項を計算すると、<br> $a^2 = \\left(2x\\right)^2 = 4x^2$<br> $b^2 = \\left(-y\\right)^2 = y^2$<br> $c^2 = z^2$<br> $2ab = 2\\cdot 2x\\cdot\\left(-y\\right) = -4xy$<br> $2bc = 2\\cdot\\left(-y\\right)\\cdot z = -2yz$<br> $2ca = 2\\cdot z\\cdot 2x = 4zx$<br>これらをすべて足し合わせると、<br>$4x^2+y^2+z^2-4xy-2yz+4zx$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7708/63118' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 12
                {
                    question: "次の式を展開せよ。<br>$\\left(3x+2y+z\\right)^2$",
                    options: [ "$9x^2+4y^2+z^2+12xy+4yz+6zx$", "$9x^2+4y^2+z^2+6xy+4yz+3zx$", "$9x^2+4y^2+z^2+12xy+4yz+3zx$", "$9x^2+2y^2+z^2+12xy+4yz+6zx$" ],
                    answer: "$9x^2+4y^2+z^2+12xy+4yz+6zx$",
                    rationale: "公式 $\\left(a+b+c\\right)^2=a^2+b^2+c^2+2ab+2bc+2ca$ を使います。<br>この問題では、$a=3x, b=2y, c=z$ と置き換えて計算します。<br>各項を計算すると、<br> $a^2 = \\left(3x\\right)^2 = 9x^2$<br> $b^2 = \\left(2y\\right)^2 = 4y^2$<br> $c^2 = z^2$<br> $2ab = 2\\cdot 3x\\cdot 2y = 12xy$<br> $2bc = 2\\cdot 2y\\cdot z = 4yz$<br> $2ca = 2\\cdot z\\cdot 3x = 6zx$<br>これらをすべて足し合わせると、<br>$9x^2+4y^2+z^2+12xy+4yz+6zx$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7708/63118' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 13
                {
                    question: "次の式を展開せよ。<br>$\\left(x+y-1\\right)^2$",
                    options: [ "$x^2+y^2+1+2xy-2y-2x$", "$x^2+y^2+1+2xy+2y+2x$", "$x^2+y^2-1+2xy-2y-2x$", "$x^2+y^2+1-2xy-2y-2x$" ],
                    answer: "$x^2+y^2+1+2xy-2y-2x$",
                    rationale: "公式 $\\left(a+b+c\\right)^2=a^2+b^2+c^2+2ab+2bc+2ca$ を使います。<br>この問題では、$a=x, b=y, c=-1$ と置き換えて計算します。<br>各項を計算すると、<br> $a^2 = x^2$<br> $b^2 = y^2$<br> $c^2 = \\left(-1\\right)^2 = 1$<br> $2ab = 2\\cdot x\\cdot y = 2xy$<br> $2bc = 2\\cdot y\\cdot\\left(-1\\right) = -2y$<br> $2ca = 2\\cdot\\left(-1\\right)\\cdot x = -2x$<br>これらをすべて足し合わせると、<br>$x^2+y^2+1+2xy-2y-2x$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7708/63118' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 14
                {
                    question: "次の式を展開せよ。<br>$\\left(a-b-1\\right)^2$",
                    options: [ "$a^2+b^2+1-2ab+2b-2a$", "$a^2+b^2+1+2ab-2b-2a$", "$a^2+b^2+1-2ab-2b+2a$", "$a^2-b^2-1-2ab+2b-2a$" ],
                    answer: "$a^2+b^2+1-2ab+2b-2a$",
                    rationale: "公式 $\\left(x+y+z\\right)^2=x^2+y^2+z^2+2xy+2yz+2zx$ を使います。<br>この問題では、$x=a, y=-b, z=-1$ と置き換えて計算します。<br>各項を計算すると、<br> $x^2 = a^2$<br> $y^2 = \\left(-b\\right)^2 = b^2$<br> $z^2 = \\left(-1\\right)^2 = 1$<br> $2xy = 2\\cdot a\\cdot\\left(-b\\right) = -2ab$<br> $2yz = 2\\cdot\\left(-b\\right)\\cdot\\left(-1\\right) = 2b$<br> $2zx = 2\\cdot\\left(-1\\right)\\cdot a = -2a$<br>これらをすべて足し合わせると、<br>$a^2+b^2+1-2ab+2b-2a$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7708/63118' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 15
                {
                    question: "次の式を展開せよ。<br>$\\left(x+2y+3z\\right)^2$",
                    options: [ "$x^2+4y^2+9z^2+4xy+12yz+6zx$", "$x^2+4y^2+9z^2+2xy+6yz+3zx$", "$x^2+2y^2+3z^2+4xy+12yz+6zx$", "$x^2+4y^2+9z^2-4xy-12yz-6zx$" ],
                    answer: "$x^2+4y^2+9z^2+4xy+12yz+6zx$",
                    rationale: "公式 $\\left(a+b+c\\right)^2=a^2+b^2+c^2+2ab+2bc+2ca$ を使います。<br>この問題では、$a=x, b=2y, c=3z$ と置き換えて計算します。<br>各項を計算すると、<br> $a^2 = x^2$<br> $b^2 = \\left(2y\\right)^2 = 4y^2$<br> $c^2 = \\left(3z\\right)^2 = 9z^2$<br> $2ab = 2\\cdot x\\cdot 2y = 4xy$<br> $2bc = 2\\cdot 2y\\cdot 3z = 12yz$<br> $2ca = 2\\cdot 3z\\cdot x = 6zx$<br>これらをすべて足し合わせると、<br>$x^2+4y^2+9z^2+4xy+12yz+6zx$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7708/63118' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 16
                {
                    question: "次の式を展開せよ。<br>$\\left(x-y-2\\right)^2$",
                    options: [ "$x^2+y^2+4-2xy+4y-4x$", "$x^2+y^2+4-2xy-4y-4x$", "$x^2+y^2+4-2xy+4y+4x$", "$x^2+y^2+4+2xy+4y-4x$" ],
                    answer: "$x^2+y^2+4-2xy+4y-4x$",
                    rationale: "公式 $\\left(a+b+c\\right)^2=a^2+b^2+c^2+2ab+2bc+2ca$ を使います。<br>この問題では、$a=x, b=-y, c=-2$ と置き換えて計算します。<br>各項を計算すると、<br> $a^2 = x^2$<br> $b^2 = \\left(-y\\right)^2 = y^2$<br> $c^2 = \\left(-2\\right)^2 = 4$<br> $2ab = 2\\cdot x\\cdot\\left(-y\\right) = -2xy$<br> $2bc = 2\\cdot\\left(-y\\right)\\cdot\\left(-2\\right) = 4y$<br> $2ca = 2\\cdot\\left(-2\\right)\\cdot x = -4x$<br>これらをすべて足し合わせると、<br>$x^2+y^2+4-2xy+4y-4x$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7708/63118' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 17
                {
                    question: "次の式を展開せよ。<br>$\\left(a+b+1\\right)^2$",
                    options: [ "$a^2+b^2+1+2ab+2b+2a$", "$a^2+b^2+1+ab+b+a$", "$a^2+b^2+1+2ab+b+a$", "$a^2+b^2+1+2ab+2b+a$" ],
                    answer: "$a^2+b^2+1+2ab+2b+2a$",
                    rationale: "公式 $\\left(x+y+z\\right)^2=x^2+y^2+z^2+2xy+2yz+2zx$ を使います。<br>この問題では、$x=a, y=b, z=1$ と置き換えて計算します。<br>各項を計算すると、<br> $x^2 = a^2$<br> $y^2 = b^2$<br> $z^2 = 1^2 = 1$<br> $2xy = 2\\cdot a\\cdot b = 2ab$<br> $2yz = 2\\cdot b\\cdot 1 = 2b$<br> $2zx = 2\\cdot 1\\cdot a = 2a$<br>これらをすべて足し合わせると、<br>$a^2+b^2+1+2ab+2b+2a$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7708/63118' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 18
                {
                    question: "次の式を展開せよ。<br>$\\left(x-y+1\\right)^2$",
                    options: [ "$x^2+y^2+1-2xy-2y+2x$", "$x^2+y^2+1+2xy-2y+2x$", "$x^2+y^2+1-2xy+2y-2x$", "$x^2-y^2+1-2xy-2y+2x$" ],
                    answer: "$x^2+y^2+1-2xy-2y+2x$",
                    rationale: "公式 $\\left(a+b+c\\right)^2=a^2+b^2+c^2+2ab+2bc+2ca$ を使います。<br>この問題では、$a=x, b=-y, c=1$ と置き換えて計算します。<br>各項を計算すると、<br> $a^2 = x^2$<br> $b^2 = \\left(-y\\right)^2 = y^2$<br> $c^2 = 1^2 = 1$<br> $2ab = 2\\cdot x\\cdot\\left(-y\\right) = -2xy$<br> $2bc = 2\\cdot\\left(-y\\right)\\cdot 1 = -2y$<br> $2ca = 2\\cdot 1\\cdot x = 2x$<br>これらをすべて足し合わせると、<br>$x^2+y^2+1-2xy-2y+2x$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7708/63118' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 19
                {
                    question: "次の式を展開せよ。<br>$\\left(a-b+5\\right)^2$",
                    options: [ "$a^2+b^2+25-2ab-10b+10a$", "$a^2+b^2+25+2ab-10b+10a$", "$a^2+b^2+25-2ab-10b-10a$", "$a^2+b^2+5-2ab-10b+10a$" ],
                    answer: "$a^2+b^2+25-2ab-10b+10a$",
                    rationale: "公式 $\\left(x+y+z\\right)^2=x^2+y^2+z^2+2xy+2yz+2zx$ を使います。<br>この問題では、$x=a, y=-b, z=5$ と置き換えて計算します。<br>各項を計算すると、<br> $x^2 = a^2$<br> $y^2 = \\left(-b\\right)^2 = b^2$<br> $z^2 = 5^2 = 25$<br> $2xy = 2\\cdot a\\cdot\\left(-b\\right) = -2ab$<br> $2yz = 2\\cdot\\left(-b\\right)\\cdot 5 = -10b$<br> $2zx = 2\\cdot 5\\cdot a = 10a$<br>これらをすべて足し合わせると、<br>$a^2+b^2+25-2ab-10b+10a$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7708/63118' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 20
                {
                    question: "次の式を展開せよ。<br>$\\left(x+y-z\\right)^2$",
                    options: [ "$x^2+y^2+z^2+2xy-2yz-2zx$", "$x^2+y^2+z^2-2xy-2yz-2zx$", "$x^2+y^2+z^2+2xy+2yz+2zx$", "$x^2+y^2-z^2+2xy-2yz-2zx$" ],
                    answer: "$x^2+y^2+z^2+2xy-2yz-2zx$",
                    rationale: "公式 $\\left(a+b+c\\right)^2=a^2+b^2+c^2+2ab+2bc+2ca$ を使います。<br>この問題では、$a=x, b=y, c=-z$ と置き換えて計算します。<br>各項を計算すると、<br> $a^2 = x^2$<br> $b^2 = y^2$<br> $c^2 = \\left(-z\\right)^2 = z^2$<br> $2ab = 2\\cdot x\\cdot y = 2xy$<br> $2bc = 2\\cdot y\\cdot\\left(-z\\right) = -2yz$<br> $2ca = 2\\cdot\\left(-z\\right)\\cdot x = -2zx$<br>これらをすべて足し合わせると、<br>$x^2+y^2+z^2+2xy-2yz-2zx$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7708/63118' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 21
                {
                    question: "次の式を展開せよ。<br>$\\left(a-b-c\\right)^2$",
                    options: [ "$a^2+b^2+c^2-2ab+2bc-2ca$", "$a^2+b^2+c^2+2ab+2bc-2ca$", "$a^2+b^2+c^2-2ab-2bc+2ca$", "$a^2+b^2+c^2-2ab-2bc-2ca$" ],
                    answer: "$a^2+b^2+c^2-2ab+2bc-2ca$",
                    rationale: "公式 $\\left(x+y+z\\right)^2=x^2+y^2+z^2+2xy+2yz+2zx$ を使います。<br>この問題では、$x=a, y=-b, z=-c$ と置き換えて計算します。<br>各項を計算すると、<br> $x^2 = a^2$<br> $y^2 = \\left(-b\\right)^2 = b^2$<br> $z^2 = \\left(-c\\right)^2 = c^2$<br> $2xy = 2\\cdot a\\cdot\\left(-b\\right) = -2ab$<br> $2yz = 2\\cdot\\left(-b\\right)\\cdot\\left(-c\\right) = 2bc$<br> $2zx = 2\\cdot\\left(-c\\right)\\cdot a = -2ca$<br>これらをすべて足し合わせると、<br>$a^2+b^2+c^2-2ab+2bc-2ca$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7708/63118' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 22
                {
                    question: "次の式を展開せよ。<br>$\\left(x-1+y\\right)^2$",
                    options: [ "$x^2+1+y^2-2x-2y+2xy$", "$x^2+1+y^2+2x-2y-2xy$", "$x^2+1+y^2-2x+2y-2xy$", "$x^2+1+y^2-2x-2y-2xy$" ],
                    answer: "$x^2+1+y^2-2x-2y+2xy$",
                    rationale: "公式 $\\left(a+b+c\\right)^2=a^2+b^2+c^2+2ab+2bc+2ca$ を使います。<br>問題の式 $\\left(x-1+y\\right)^2$ は $\\left(x+y-1\\right)^2$ と同じです。<br>ここで、$a=x, b=y, c=-1$ と置き換えて計算します。<br>各項を計算すると、<br> $a^2 = x^2$<br> $b^2 = y^2$<br> $c^2 = \\left(-1\\right)^2 = 1$<br> $2ab = 2\\cdot x\\cdot y = 2xy$<br> $2bc = 2\\cdot y\\cdot\\left(-1\\right) = -2y$<br> $2ca = 2\\cdot\\left(-1\\right)\\cdot x = -2x$<br>これらをすべて足し合わせ、整理すると、<br>$x^2+y^2+1+2xy-2y-2x$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7708/63118' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 23
                {
                    question: "次の式を展開せよ。<br>$\\left(a+2b+3\\right)^2$",
                    options: [ "$a^2+4b^2+9+4ab+12b+6a$", "$a^2+4b^2+9+2ab+6b+3a$", "$a^2+4b^2+9+4ab+6b+6a$", "$a^2+2b^2+9+4ab+12b+6a$" ],
                    answer: "$a^2+4b^2+9+4ab+12b+6a$",
                    rationale: "公式 $\\left(x+y+z\\right)^2=x^2+y^2+z^2+2xy+2yz+2zx$ を使います。<br>この問題では、$x=a, y=2b, z=3$ と置き換えて計算します。<br>各項を計算すると、<br> $x^2 = a^2$<br> $y^2 = \\left(2b\\right)^2 = 4b^2$<br> $z^2 = 3^2 = 9$<br> $2xy = 2\\cdot a\\cdot 2b = 4ab$<br> $2yz = 2\\cdot 2b\\cdot 3 = 12b$<br> $2zx = 2\\cdot 3\\cdot a = 6a$<br>これらをすべて足し合わせると、<br>$a^2+4b^2+9+4ab+12b+6a$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7708/63118' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 24
                {
                    question: "次の式を展開せよ。<br>$\\left(2x-y+3z\\right)^2$",
                    options: [ "$4x^2+y^2+9z^2-4xy-6yz+12zx$", "$4x^2+y^2+9z^2+4xy-6yz+12zx$", "$4x^2+y^2+9z^2-4xy-6yz-12zx$", "$4x^2+y^2+9z^2-4xy+6yz-12zx$" ],
                    answer: "$4x^2+y^2+9z^2-4xy-6yz+12zx$",
                    rationale: "公式 $\\left(a+b+c\\right)^2=a^2+b^2+c^2+2ab+2bc+2ca$ を使います。<br>この問題では、$a=2x, b=-y, c=3z$ と置き換えて計算します。<br>各項を計算すると、<br> $a^2 = \\left(2x\\right)^2 = 4x^2$<br> $b^2 = \\left(-y\\right)^2 = y^2$<br> $c^2 = \\left(3z\\right)^2 = 9z^2$<br> $2ab = 2\\cdot 2x\\cdot\\left(-y\\right) = -4xy$<br> $2bc = 2\\cdot\\left(-y\\right)\\cdot 3z = -6yz$<br> $2ca = 2\\cdot 3z\\cdot 2x = 12zx$<br>これらをすべて足し合わせると、<br>$4x^2+y^2+9z^2-4xy-6yz+12zx$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7708/63118' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 25
                {
                    question: "次の式を展開せよ。<br>$\\left(a+b+2\\right)^2$",
                    options: [ "$a^2+b^2+4+2ab+4b+4a$", "$a^2+b^2+4+2ab+2b+2a$", "$a^2+b^2+2+2ab+4b+4a$", "$a^2+b^2+4+ab+2b+2a$" ],
                    answer: "$a^2+b^2+4+2ab+4b+4a$",
                    rationale: "公式 $\\left(x+y+z\\right)^2=x^2+y^2+z^2+2xy+2yz+2zx$ を使います。<br>この問題では、$x=a, y=b, z=2$ と置き換えて計算します。<br>各項を計算すると、<br> $x^2 = a^2$<br> $y^2 = b^2$<br> $z^2 = 2^2 = 4$<br> $2xy = 2\\cdot a\\cdot b = 2ab$<br> $2yz = 2\\cdot b\\cdot 2 = 4b$<br> $2zx = 2\\cdot 2\\cdot a = 4a$<br>これらをすべて足し合わせると、<br>$a^2+b^2+4+2ab+4b+4a$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7708/63118' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 26
                {
                    question: "次の式を展開せよ。<br>$\\left(x-y-5\\right)^2$",
                    options: [ "$x^2+y^2+25-2xy+10y-10x$", "$x^2+y^2+25+2xy+10y-10x$", "$x^2+y^2+25-2xy-10y+10x$", "$x^2+y^2+5-2xy+10y-10x$" ],
                    answer: "$x^2+y^2+25-2xy+10y-10x$",
                    rationale: "公式 $\\left(a+b+c\\right)^2=a^2+b^2+c^2+2ab+2bc+2ca$ を使います。<br>この問題では、$a=x, b=-y, c=-5$ と置き換えて計算します。<br>各項を計算すると、<br> $a^2 = x^2$<br> $b^2 = \\left(-y\\right)^2 = y^2$<br> $c^2 = \\left(-5\\right)^2 = 25$<br> $2ab = 2\\cdot x\\cdot\\left(-y\\right) = -2xy$<br> $2bc = 2\\cdot\\left(-y\\right)\\cdot\\left(-5\\right) = 10y$<br> $2ca = 2\\cdot\\left(-5\\right)\\cdot x = -10x$<br>これらをすべて足し合わせると、<br>$x^2+y^2+25-2xy+10y-10x$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7708/63118' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 27
                {
                    question: "次の式を展開せよ。<br>$\\left(2x+y-z\\right)^2$",
                    options: [ "$4x^2+y^2+z^2+4xy-2yz-4zx$", "$4x^2+y^2+z^2-4xy-2yz-4zx$", "$4x^2+y^2+z^2+4xy+2yz-4zx$", "$4x^2+y^2+z^2+4xy-2yz+4zx$" ],
                    answer: "$4x^2+y^2+z^2+4xy-2yz-4zx$",
                    rationale: "公式 $\\left(a+b+c\\right)^2=a^2+b^2+c^2+2ab+2bc+2ca$ を使います。<br>この問題では、$a=2x, b=y, c=-z$ と置き換えて計算します。<br>各項を計算すると、<br> $a^2 = \\left(2x\\right)^2 = 4x^2$<br> $b^2 = y^2$<br> $c^2 = \\left(-z\\right)^2 = z^2$<br> $2ab = 2\\cdot 2x\\cdot y = 4xy$<br> $2bc = 2\\cdot y\\cdot\\left(-z\\right) = -2yz$<br> $2ca = 2\\cdot\\left(-z\\right)\\cdot 2x = -4zx$<br>これらをすべて足し合わせると、<br>$4x^2+y^2+z^2+4xy-2yz-4zx$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7708/63118' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 28
                {
                    question: "次の式を展開せよ。<br>$\\left(x-2y+z\\right)^2$",
                    options: [ "$x^2+4y^2+z^2-4xy-4yz+2zx$", "$x^2+4y^2+z^2+4xy-4yz+2zx$", "$x^2+4y^2+z^2-4xy+4yz-2zx$", "$x^2+2y^2+z^2-4xy-4yz+2zx$" ],
                    answer: "$x^2+4y^2+z^2-4xy-4yz+2zx$",
                    rationale: "公式 $\\left(a+b+c\\right)^2=a^2+b^2+c^2+2ab+2bc+2ca$ を使います。<br>この問題では、$a=x, b=-2y, c=z$ と置き換えて計算します。<br>各項を計算すると、<br> $a^2 = x^2$<br> $b^2 = \\left(-2y\\right)^2 = 4y^2$<br> $c^2 = z^2$<br> $2ab = 2\\cdot x\\cdot\\left(-2y\\right) = -4xy$<br> $2bc = 2\\cdot\\left(-2y\\right)\\cdot z = -4yz$<br> $2ca = 2\\cdot z\\cdot x = 2zx$<br>これらをすべて足し合わせると、<br>$x^2+4y^2+z^2-4xy-4yz+2zx$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7708/63118' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 29
                {
                    question: "次の式を展開せよ。<br>$\\left(a-b+4\\right)^2$",
                    options: [ "$a^2+b^2+16-2ab-8b+8a$", "$a^2+b^2+16+2ab-8b+8a$", "$a^2+b^2+16-2ab+8b-8a$", "$a^2+b^2+16-2ab-8b-8a$" ],
                    answer: "$a^2+b^2+16-2ab-8b+8a$",
                    rationale: "公式 $\\left(x+y+z\\right)^2=x^2+y^2+z^2+2xy+2yz+2zx$ を使います。<br>この問題では、$x=a, y=-b, z=4$ と置き換えて計算します。<br>各項を計算すると、<br> $x^2 = a^2$<br> $y^2 = \\left(-b\\right)^2 = b^2$<br> $z^2 = 4^2 = 16$<br> $2xy = 2\\cdot a\\cdot\\left(-b\\right) = -2ab$<br> $2yz = 2\\cdot\\left(-b\\right)\\cdot 4 = -8b$<br> $2zx = 2\\cdot 4\\cdot a = 8a$<br>これらをすべて足し合わせると、<br>$a^2+b^2+16-2ab-8b+8a$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7708/63118' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 30
                {
                    question: "次の式を展開せよ。<br>$\\left(x+y+z\\right)^2$",
                    options: [ "$x^2+y^2+z^2+2xy+2yz+2zx$", "$x^2+y^2+z^2$", "$x^2+y^2+z^2+xy+yz+zx$", "$x^2+y^2+z^2-2xy-2yz-2zx$" ],
                    answer: "$x^2+y^2+z^2+2xy+2yz+2zx$",
                    rationale: "公式 $\\left(a+b+c\\right)^2=a^2+b^2+c^2+2ab+2bc+2ca$ を $\\left(x+y+z\\right)^2$ に適用したもので、公式そのものです。<br>この公式は、3つの項の和の2乗を展開する基本的なものです。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7708/63118' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 31
                {
                    question: "次の式を展開せよ。<br>$\\left(p+q-r\\right)^2$",
                    options: [ "$p^2+q^2+r^2+2pq-2qr-2rp$", "$p^2+q^2+r^2-2pq-2qr-2rp$", "$p^2+q^2-r^2+2pq-2qr-2rp$", "$p^2+q^2+r^2+2pq+2qr+2rp$" ],
                    answer: "$p^2+q^2+r^2+2pq-2qr-2rp$",
                    rationale: "公式 $\\left(a+b+c\\right)^2=a^2+b^2+c^2+2ab+2bc+2ca$ を使います。<br>この問題では、$a=p, b=q, c=-r$ と置き換えて計算します。<br>各項を計算すると、<br> $a^2 = p^2$<br> $b^2 = q^2$<br> $c^2 = \\left(-r\\right)^2 = r^2$<br> $2ab = 2\\cdot p\\cdot q = 2pq$<br> $2bc = 2\\cdot q\\cdot\\left(-r\\right) = -2qr$<br> $2ca = 2\\cdot\\left(-r\\right)\\cdot p = -2rp$<br>これらをすべて足し合わせると、<br>$p^2+q^2+r^2+2pq-2qr-2rp$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7708/63118' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 32
                {
                    question: "次の式を展開せよ。<br>$\\left(x-2y-1\\right)^2$",
                    options: [ "$x^2+4y^2+1-4xy+4y-2x$", "$x^2+4y^2+1+4xy+4y-2x$", "$x^2+4y^2+1-4xy-4y+2x$", "$x^2+4y^2+1-4xy+4y+2x$" ],
                    answer: "$x^2+4y^2+1-4xy+4y-2x$",
                    rationale: "公式 $\\left(a+b+c\\right)^2=a^2+b^2+c^2+2ab+2bc+2ca$ を使います。<br>この問題では、$a=x, b=-2y, c=-1$ と置き換えて計算します。<br>各項を計算すると、<br> $a^2 = x^2$<br> $b^2 = \\left(-2y\\right)^2 = 4y^2$<br> $c^2 = \\left(-1\\right)^2 = 1$<br> $2ab = 2\\cdot x\\cdot\\left(-2y\\right) = -4xy$<br> $2bc = 2\\cdot\\left(-2y\\right)\\cdot\\left(-1\\right) = 4y$<br> $2ca = 2\\cdot\\left(-1\\right)\\cdot x = -2x$<br>これらをすべて足し合わせると、<br>$x^2+4y^2+1-4xy+4y-2x$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7708/63118' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 33
                {
                    question: "次の式を展開せよ。<br>$\\left(3x+y-z\\right)^2$",
                    options: [ "$9x^2+y^2+z^2+6xy-2yz-6zx$", "$9x^2+y^2+z^2-6xy-2yz-6zx$", "$9x^2+y^2+z^2+6xy+2yz-6zx$", "$9x^2+y^2+z^2+6xy-2yz+6zx$" ],
                    answer: "$9x^2+y^2+z^2+6xy-2yz-6zx$",
                    rationale: "公式 $\\left(a+b+c\\right)^2=a^2+b^2+c^2+2ab+2bc+2ca$ を使います。<br>この問題では、$a=3x, b=y, c=-z$ と置き換えて計算します。<br>各項を計算すると、<br> $a^2 = \\left(3x\\right)^2 = 9x^2$<br> $b^2 = y^2$<br> $c^2 = \\left(-z\\right)^2 = z^2$<br> $2ab = 2\\cdot 3x\\cdot y = 6xy$<br> $2bc = 2\\cdot y\\cdot\\left(-z\\right) = -2yz$<br> $2ca = 2\\cdot\\left(-z\\right)\\cdot 3x = -6zx$<br>これらをすべて足し合わせると、<br>$9x^2+y^2+z^2+6xy-2yz-6zx$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7708/63118' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 34
                {
                    question: "次の式を展開せよ。<br>$\\left(x-4y+z\\right)^2$",
                    options: [ "$x^2+16y^2+z^2-8xy-8yz+2zx$", "$x^2+16y^2+z^2+8xy-8yz+2zx$", "$x^2+16y^2+z^2-8xy+8yz-2zx$", "$x^2+16y^2+z^2-8xy-8yz-2zx$" ],
                    answer: "$x^2+16y^2+z^2-8xy-8yz+2zx$",
                    rationale: "公式 $\\left(a+b+c\\right)^2=a^2+b^2+c^2+2ab+2bc+2ca$ を使います。<br>この問題では、$a=x, b=-4y, c=z$ と置き換えて計算します。<br>各項を計算すると、<br> $a^2 = x^2$<br> $b^2 = \\left(-4y\\right)^2 = 16y^2$<br> $c^2 = z^2$<br> $2ab = 2\\cdot x\\cdot\\left(-4y\\right) = -8xy$<br> $2bc = 2\\cdot\\left(-4y\\right)\\cdot z = -8yz$<br> $2ca = 2\\cdot z\\cdot x = 2zx$<br>これらをすべて足し合わせると、<br>$x^2+16y^2+z^2-8xy-8yz+2zx$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7708/63118' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 35
                {
                    question: "次の式を展開せよ。<br>$\\left(a+1-b\\right)^2$",
                    options: [ "$a^2+1+b^2+2a-2b-2ab$", "$a^2+1+b^2-2a-2b+2ab$", "$a^2+1+b^2+2a+2b-2ab$", "$a^2-1+b^2+2a-2b-2ab$" ],
                    answer: "$a^2+1+b^2+2a-2b-2ab$",
                    rationale: "公式 $\\left(x+y+z\\right)^2=x^2+y^2+z^2+2xy+2yz+2zx$ を使います。<br>問題の式 $\\left(a+1-b\\right)^2$ は $\\left(a-b+1\\right)^2$ と同じです。<br>ここで、$x=a, y=-b, z=1$ と置き換えて計算します。<br>各項を計算すると、<br> $x^2 = a^2$<br> $y^2 = \\left(-b\\right)^2 = b^2$<br> $z^2 = 1^2 = 1$<br> $2xy = 2\\cdot a\\cdot\\left(-b\\right) = -2ab$<br> $2yz = 2\\cdot\\left(-b\\right)\\cdot 1 = -2b$<br> $2zx = 2\\cdot 1\\cdot a = 2a$<br>これらをすべて足し合わせ、整理すると、<br>$a^2+b^2+1-2ab-2b+2a$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7708/63118' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 36
                {
                    question: "次の式を展開せよ。<br>$\\left(x-y-2z\\right)^2$",
                    options: [ "$x^2+y^2+4z^2-2xy+4yz-4zx$", "$x^2+y^2+4z^2+2xy+4yz-4zx$", "$x^2+y^2+4z^2-2xy-4yz+4zx$", "$x^2+y^2+4z^2-2xy-4yz-4zx$" ],
                    answer: "$x^2+y^2+4z^2-2xy+4yz-4zx$",
                    rationale: "公式 $\\left(a+b+c\\right)^2=a^2+b^2+c^2+2ab+2bc+2ca$ を使います。<br>この問題では、$a=x, b=-y, c=-2z$ と置き換えて計算します。<br>各項を計算すると、<br> $a^2 = x^2$<br> $b^2 = \\left(-y\\right)^2 = y^2$<br> $c^2 = \\left(-2z\\right)^2 = 4z^2$<br> $2ab = 2\\cdot x\\cdot\\left(-y\\right) = -2xy$<br> $2bc = 2\\cdot\\left(-y\\right)\\cdot\\left(-2z\\right) = 4yz$<br> $2ca = 2\\cdot\\left(-2z\\right)\\cdot x = -4zx$<br>これらをすべて足し合わせると、<br>$x^2+y^2+4z^2-2xy+4yz-4zx$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7708/63118' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 37
                {
                    question: "次の式を展開せよ。<br>$\\left(a+b+3\\right)^2$",
                    options: [ "$a^2+b^2+9+2ab+6b+6a$", "$a^2+b^2+9+ab+3b+3a$", "$a^2+b^2+9+2ab+3b+3a$", "$a^2+b^2+6+2ab+6b+6a$" ],
                    answer: "$a^2+b^2+9+2ab+6b+6a$",
                    rationale: "公式 $\\left(x+y+z\\right)^2=x^2+y^2+z^2+2xy+2yz+2zx$ を使います。<br>この問題では、$x=a, y=b, z=3$ と置き換えて計算します。<br>各項を計算すると、<br> $x^2 = a^2$<br> $y^2 = b^2$<br> $z^2 = 3^2 = 9$<br> $2xy = 2\\cdot a\\cdot b = 2ab$<br> $2yz = 2\\cdot b\\cdot 3 = 6b$<br> $2zx = 2\\cdot 3\\cdot a = 6a$<br>これらをすべて足し合わせると、<br>$a^2+b^2+9+2ab+6b+6a$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7708/63118' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 38
                {
                    question: "次の式を展開せよ。<br>$\\left(x-y+z\\right)^2$",
                    options: [ "$x^2+y^2+z^2-2xy-2yz+2zx$", "$x^2+y^2+z^2+2xy-2yz-2zx$", "$x^2-y^2+z^2-2xy-2yz+2zx$", "$x^2+y^2+z^2-2xy+2yz-2zx$" ],
                    answer: "$x^2+y^2+z^2-2xy-2yz+2zx$",
                    rationale: "公式 $\\left(a+b+c\\right)^2=a^2+b^2+c^2+2ab+2bc+2ca$ を使います。<br>この問題では、$a=x, b=-y, c=z$ と置き換えて計算します。<br>各項を計算すると、<br> $a^2 = x^2$<br> $b^2 = \\left(-y\\right)^2 = y^2$<br> $c^2 = z^2$<br> $2ab = 2\\cdot x\\cdot\\left(-y\\right) = -2xy$<br> $2bc = 2\\cdot\\left(-y\\right)\\cdot z = -2yz$<br> $2ca = 2\\cdot z\\cdot x = 2zx$<br>これらをすべて足し合わせると、<br>$x^2+y^2+z^2-2xy-2yz+2zx$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7708/63118' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 39
                {
                    question: "次の式を展開せよ。<br>$\\left(2a-3b-1\\right)^2$",
                    options: [ "$4a^2+9b^2+1-12ab+6b-4a$", "$4a^2+9b^2+1+12ab+6b-4a$", "$4a^2+9b^2+1-12ab-6b+4a$", "$4a^2+9b^2+1-12ab-6b-4a$" ],
                    answer: "$4a^2+9b^2+1-12ab+6b-4a$",
                    rationale: "公式 $\\left(x+y+z\\right)^2=x^2+y^2+z^2+2xy+2yz+2zx$ を使います。<br>この問題では、$x=2a, y=-3b, z=-1$ と置き換えて計算します。<br>各項を計算すると、<br> $x^2 = \\left(2a\\right)^2 = 4a^2$<br> $y^2 = \\left(-3b\\right)^2 = 9b^2$<br> $z^2 = \\left(-1\\right)^2 = 1$<br> $2xy = 2\\cdot 2a\\cdot\\left(-3b\\right) = -12ab$<br> $2yz = 2\\cdot\\left(-3b\\right)\\cdot\\left(-1\\right) = 6b$<br> $2zx = 2\\cdot\\left(-1\\right)\\cdot 2a = -4a$<br>これらをすべて足し合わせると、<br>$4a^2+9b^2+1-12ab+6b-4a$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7708/63118' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 40
                {
                    question: "次の式を展開せよ。<br>$\\left(x+y-5\\right)^2$",
                    options: [ "$x^2+y^2+25+2xy-10y-10x$", "$x^2+y^2+25-2xy-10y-10x$", "$x^2+y^2+25+2xy+10y+10x$", "$x^2+y^2+10+2xy-10y-10x$" ],
                    answer: "$x^2+y^2+25+2xy-10y-10x$",
                    rationale: "公式 $\\left(a+b+c\\right)^2=a^2+b^2+c^2+2ab+2bc+2ca$ を使います。<br>この問題では、$a=x, b=y, c=-5$ と置き換えて計算します。<br>各項を計算すると、<br> $a^2 = x^2$<br> $b^2 = y^2$<br> $c^2 = \\left(-5\\right)^2 = 25$<br> $2ab = 2\\cdot x\\cdot y = 2xy$<br> $2bc = 2\\cdot y\\cdot\\left(-5\\right) = -10y$<br> $2ca = 2\\cdot\\left(-5\\right)\\cdot x = -10x$<br>これらをすべて足し合わせると、<br>$x^2+y^2+25+2xy-10y-10x$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7708/63118' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 41
                {
                    question: "次の式を展開せよ。<br>$\\left(a^2+b+1\\right)^2$",
                    options: [ "$a^4+b^2+1+2a^2b+2b+2a^2$", "$a^4+b^2+1+a^2b+b+a^2$", "$a^4+b^2+1+2a^2b+2b+a^2$", "$a^2+b^2+1+2a^2b+2b+2a^2$" ],
                    answer: "$a^4+b^2+1+2a^2b+2b+2a^2$",
                    rationale: "公式 $\\left(x+y+z\\right)^2=x^2+y^2+z^2+2xy+2yz+2zx$ を使います。<br>この問題では、$x=a^2, y=b, z=1$ と置き換えて計算します。<br>各項を計算すると、<br> $x^2 = \\left(a^2\\right)^2 = a^4$<br> $y^2 = b^2$<br> $z^2 = 1^2 = 1$<br> $2xy = 2\\cdot a^2\\cdot b = 2a^2b$<br> $2yz = 2\\cdot b\\cdot 1 = 2b$<br> $2zx = 2\\cdot 1\\cdot a^2 = 2a^2$<br>これらをすべて足し合わせると、<br>$a^4+b^2+1+2a^2b+2b+2a^2$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7708/63118' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 42
                {
                    question: "次の式を展開せよ。<br>$\\left(x+y^2+z\\right)^2$",
                    options: [ "$x^2+y^4+z^2+2xy^2+2y^2z+2zx$", "$x^2+y^4+z^2+xy^2+y^2z+zx$", "$x^2+y^2+z^2+2xy^2+2y^2z+2zx$", "$x^2+y^4+z^2+2xy^2+2yz+2zx$" ],
                    answer: "$x^2+y^4+z^2+2xy^2+2y^2z+2zx$",
                    rationale: "公式 $\\left(a+b+c\\right)^2=a^2+b^2+c^2+2ab+2bc+2ca$ を使います。<br>この問題では、$a=x, b=y^2, c=z$ と置き換えて計算します。<br>各項を計算すると、<br> $a^2 = x^2$<br> $b^2 = \\left(y^2\\right)^2 = y^4$<br> $c^2 = z^2$<br> $2ab = 2\\cdot x\\cdot y^2 = 2xy^2$<br> $2bc = 2\\cdot y^2\\cdot z = 2y^2z$<br> $2ca = 2\\cdot z\\cdot x = 2zx$<br>これらをすべて足し合わせると、<br>$x^2+y^4+z^2+2xy^2+2y^2z+2zx$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7708/63118' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 43
                {
                    question: "次の式を展開せよ。<br>$\\left(a-b^2-c\\right)^2$",
                    options: [ "$a^2+b^4+c^2-2ab^2+2b^2c-2ca$", "$a^2+b^4+c^2+2ab^2-2b^2c-2ca$", "$a^2+b^4+c^2-2ab^2-2b^2c+2ca$", "$a^2+b^4+c^2-2ab^2+2b^2c+2ca$" ],
                    answer: "$a^2+b^4+c^2-2ab^2+2b^2c-2ca$",
                    rationale: "公式 $\\left(x+y+z\\right)^2=x^2+y^2+z^2+2xy+2yz+2zx$ を使います。<br>この問題では、$x=a, y=-b^2, z=-c$ と置き換えて計算します。<br>各項を計算すると、<br> $x^2 = a^2$<br> $y^2 = \\left(-b^2\\right)^2 = b^4$<br> $z^2 = \\left(-c\\right)^2 = c^2$<br> $2xy = 2\\cdot a\\cdot\\left(-b^2\\right) = -2ab^2$<br> $2yz = 2\\cdot\\left(-b^2\\right)\\cdot\\left(-c\\right) = 2b^2c$<br> $2zx = 2\\cdot\\left(-c\\right)\\cdot a = -2ca$<br>これらをすべて足し合わせると、<br>$a^2+b^4+c^2-2ab^2+2b^2c-2ca$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7708/63118' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 44
                {
                    question: "次の式を展開せよ。<br>$\\left(x^2+y+z^2\\right)^2$",
                    options: [ "$x^4+y^2+z^4+2x^2y+2yz^2+2z^2x^2$", "$x^4+y^2+z^4+x^2y+yz^2+z^2x^2$", "$x^4+y^2+z^4+2x^2y+2yz^2+2x^2z^2$", "$x^2+y^2+z^2+2x^2y+2yz^2+2z^2x^2$" ],
                    answer: "$x^4+y^2+z^4+2x^2y+2yz^2+2z^2x^2$",
                    rationale: "公式 $\\left(a+b+c\\right)^2=a^2+b^2+c^2+2ab+2bc+2ca$ を使います。<br>この問題では、$a=x^2, b=y, c=z^2$ と置き換えて計算します。<br>各項を計算すると、<br> $a^2 = \\left(x^2\\right)^2 = x^4$<br> $b^2 = y^2$<br> $c^2 = \\left(z^2\\right)^2 = z^4$<br> $2ab = 2\\cdot x^2\\cdot y = 2x^2y$<br> $2bc = 2\\cdot y\\cdot z^2 = 2yz^2$<br> $2ca = 2\\cdot z^2\\cdot x^2 = 2z^2x^2$<br>これらをすべて足し合わせると、<br>$x^4+y^2+z^4+2x^2y+2yz^2+2z^2x^2$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7708/63118' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 45
                {
                    question: "次の式を展開せよ。<br>$\\left(2a+3b+4c\\right)^2$",
                    options: [ "$4a^2+9b^2+16c^2+12ab+24bc+16ca$", "$4a^2+9b^2+16c^2+6ab+12bc+8ca$", "$4a^2+9b^2+16c^2+12ab+12bc+8ca$", "$4a^2+9b^2+16c^2+12ab+24bc+8ca$" ],
                    answer: "$4a^2+9b^2+16c^2+12ab+24bc+16ca$",
                    rationale: "公式 $\\left(x+y+z\\right)^2=x^2+y^2+z^2+2xy+2yz+2zx$ を使います。<br>この問題では、$x=2a, y=3b, z=4c$ と置き換えて計算します。<br>各項を計算すると、<br> $x^2 = \\left(2a\\right)^2 = 4a^2$<br> $y^2 = \\left(3b\\right)^2 = 9b^2$<br> $z^2 = \\left(4c\\right)^2 = 16c^2$<br> $2xy = 2\\cdot 2a\\cdot 3b = 12ab$<br> $2yz = 2\\cdot 3b\\cdot 4c = 24bc$<br> $2zx = 2\\cdot 4c\\cdot 2a = 16ca$<br>これらをすべて足し合わせると、<br>$4a^2+9b^2+16c^2+12ab+24bc+16ca$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7708/63118' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 46
                {
                    question: "次の式を展開せよ。<br>$\\left(x-2y+3\\right)^2$",
                    options: [ "$x^2+4y^2+9-4xy-12y+6x$", "$x^2+4y^2+9+4xy-12y+6x$", "$x^2+4y^2+9-4xy+12y-6x$", "$x^2+4y^2+9-4xy-12y-6x$" ],
                    answer: "$x^2+4y^2+9-4xy-12y+6x$",
                    rationale: "公式 $\\left(a+b+c\\right)^2=a^2+b^2+c^2+2ab+2bc+2ca$ を使います。<br>この問題では、$a=x, b=-2y, c=3$ と置き換えて計算します。<br>各項を計算すると、<br> $a^2 = x^2$<br> $b^2 = \\left(-2y\\right)^2 = 4y^2$<br> $c^2 = 3^2 = 9$<br> $2ab = 2\\cdot x\\cdot\\left(-2y\\right) = -4xy$<br> $2bc = 2\\cdot\\left(-2y\\right)\\cdot 3 = -12y$<br> $2ca = 2\\cdot 3\\cdot x = 6x$<br>これらをすべて足し合わせると、<br>$x^2+4y^2+9-4xy-12y+6x$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7708/63118' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 47
                {
                    question: "次の式を展開せよ。<br>$\\left(3a-b-c\\right)^2$",
                    options: [ "$9a^2+b^2+c^2-6ab+2bc-6ca$", "$9a^2+b^2+c^2+6ab+2bc-6ca$", "$9a^2+b^2+c^2-6ab-2bc+6ca$", "$9a^2+b^2+c^2-6ab-2bc-6ca$" ],
                    answer: "$9a^2+b^2+c^2-6ab+2bc-6ca$",
                    rationale: "公式 $\\left(x+y+z\\right)^2=x^2+y^2+z^2+2xy+2yz+2zx$ を使います。<br>この問題では、$x=3a, y=-b, z=-c$ と置き換えて計算します。<br>各項を計算すると、<br> $x^2 = \\left(3a\\right)^2 = 9a^2$<br> $y^2 = \\left(-b\\right)^2 = b^2$<br> $z^2 = \\left(-c\\right)^2 = c^2$<br> $2xy = 2\\cdot 3a\\cdot\\left(-b\\right) = -6ab$<br> $2yz = 2\\cdot\\left(-b\\right)\\cdot\\left(-c\\right) = 2bc$<br> $2zx = 2\\cdot\\left(-c\\right)\\cdot 3a = -6ca$<br>これらをすべて足し合わせると、<br>$9a^2+b^2+c^2-6ab+2bc-6ca$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7708/63118' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 48
                {
                    question: "次の式を展開せよ。<br>$\\left(x+y-ab\\right)^2$",
                    options: [ "$x^2+y^2+a^2b^2+2xy-2yab-2abx$", "$x^2+y^2+a^2b^2+2xy-2yab+2abx$", "$x^2+y^2+a^2b^2+2xy+2yab-2abx$", "$x^2+y^2+ab^2+2xy-2yab-2abx$" ],
                    answer: "$x^2+y^2+a^2b^2+2xy-2yab-2abx$",
                    rationale: "公式 $\\left(p+q+r\\right)^2=p^2+q^2+r^2+2pq+2qr+2rp$ を使います。<br>この問題では、$p=x, q=y, r=-ab$ と置き換えて計算します。<br>各項を計算すると、<br> $p^2 = x^2$<br> $q^2 = y^2$<br> $r^2 = \\left(-ab\\right)^2 = a^2b^2$<br> $2pq = 2\\cdot x\\cdot y = 2xy$<br> $2qr = 2\\cdot y\\cdot\\left(-ab\\right) = -2aby$<br> $2rp = 2\\cdot\\left(-ab\\right)\\cdot x = -2abx$<br>これらをすべて足し合わせると、<br>$x^2+y^2+a^2b^2+2xy-2aby-2abx$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7708/63118' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 49
                {
                    question: "次の式を展開せよ。<br>$\\left(\\dfrac{x}{2}+y+z\\right)^2$",
                    options: [ "$\\dfrac{x^2}{4}+y^2+z^2+xy+2yz+zx$", "$\\dfrac{x^2}{2}+y^2+z^2+xy+2yz+zx$", "$\\dfrac{x^2}{4}+y^2+z^2+2xy+2yz+zx$", "$\\dfrac{x^2}{4}+y^2+z^2+xy+yz+zx$" ],
                    answer: "$\\dfrac{x^2}{4}+y^2+z^2+xy+2yz+zx$",
                    rationale: "公式 $\\left(a+b+c\\right)^2=a^2+b^2+c^2+2ab+2bc+2ca$ を使います。<br>この問題では、$a=\\dfrac{x}{2}, b=y, c=z$ と置き換えて計算します。<br>各項を計算すると、<br> $a^2 = \\left(\\dfrac{x}{2}\\right)^2 = \\dfrac{x^2}{4}$<br> $b^2 = y^2$<br> $c^2 = z^2$<br> $2ab = 2\\cdot \\dfrac{x}{2}\\cdot y = xy$<br> $2bc = 2\\cdot y\\cdot z = 2yz$<br> $2ca = 2\\cdot z\\cdot \\dfrac{x}{2} = zx$<br>これらをすべて足し合わせると、<br>$\\dfrac{x^2}{4}+y^2+z^2+xy+2yz+zx$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7708/63118' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 50
                {
                    question: "次の式を展開せよ。<br>$\\left(x-y-\\dfrac{1}{2}\\right)^2$",
                    options: [ "$x^2+y^2+\\dfrac{1}{4}-2xy+y-x$", "$x^2+y^2+\\dfrac{1}{4}+2xy+y-x$", "$x^2+y^2+\\dfrac{1}{4}-2xy-y+x$", "$x^2+y^2+\\dfrac{1}{2}-2xy+y-x$" ],
                    answer: "$x^2+y^2+\\dfrac{1}{4}-2xy+y-x$",
                    rationale: "公式 $\\left(a+b+c\\right)^2=a^2+b^2+c^2+2ab+2bc+2ca$ を使います。<br>この問題では、$a=x, b=-y, c=-\\dfrac{1}{2}$ と置き換えて計算します。<br>各項を計算すると、<br> $a^2 = x^2$<br> $b^2 = \\left(-y\\right)^2 = y^2$<br> $c^2 = \\left(-\\dfrac{1}{2}\\right)^2 = \\dfrac{1}{4}$<br> $2ab = 2\\cdot x\\cdot\\left(-y\\right) = -2xy$<br> $2bc = 2\\cdot\\left(-y\\right)\\cdot\\left(-\\dfrac{1}{2}\\right) = y$<br> $2ca = 2\\cdot\\left(-\\dfrac{1}{2}\\right)\\cdot x = -x$<br>これらをすべて足し合わせると、<br>$x^2+y^2+\\dfrac{1}{4}-2xy+y-x$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7708/63118' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                }

            ]; // ← allQuizData をここで閉じる
            // --- 元のクイズデータの終わり ---
