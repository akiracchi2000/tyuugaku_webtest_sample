// --- クイズデータ(QD)はここに貼り付けてください ---
window.QUIZ_DATA = [
                  // 問題 1
                {
                    question: "次の式を因数分解せよ。<br>$5x^2y+20x^2y^2$",
                    options: [ "$5x^2y\\left(1+4y\\right)$", "$5x^2y\\left(1+4xy\\right)$", "$5xy\\left(x+4y\\right)$", "$5x^2y\\left(4y\\right)$" ],
                    answer: "$5x^2y\\left(1+4y\\right)$",
                    rationale: "共通因数 $5x^2y$ をくくりだします。<br>$5x^2y \\cdot1 + 5x^2y \\cdot4y = 5x^2y\\left(1+4y\\right)$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7709/63120' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 2
                {
                    question: "次の式を因数分解せよ。<br>$9x^3y+3x^2y^2-3xy^3$",
                    options: [ "$3xy\\left(3x^2+xy-y^2\\right)$", "$3xy\\left(3x^2+xy-y\\right)$", "$3x^2y\\left(3x+y-y^2\\right)$", "$3xy\\left(3x^2-xy+y^2\\right)$" ],
                    answer: "$3xy\\left(3x^2+xy-y^2\\right)$",
                    rationale: "共通因数 $3xy$ をくくりだします。<br>$3xy \\cdot3x^2 + 3xy \\cdot xy + 3xy\\left(-y^2\\right) = 3xy\\left(3x^2+xy-y^2\\right)$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7709/63120' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 3
                {
                    question: "次の式を因数分解せよ。<br>$x\\left(y+z\\right)+x^2$",
                    options: [ "$x\\left(y+z+x\\right)$", "$x^2\\left(y+z\\right)$", "$x\\left(y+z\\right)+x$", "$x\\left(y+z\\right)$" ],
                    answer: "$x\\left(y+z+x\\right)$",
                    rationale: "共通因数 $x$ をくくりだします。<br>$x\\left(y+z\\right)+x \\cdot x = x\\left(y+z+x\\right)$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7709/63120' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 4
                {
                    question: "次の式を因数分解せよ。<br>$x\\left(z+w\\right)+y\\left(z+w\\right)$",
                    options: [ "$\\left(x+y\\right)\\left(z+w\\right)$", "$\\left(x-y\\right)\\left(z+w\\right)$", "$xy\\left(z+w\\right)$", "$\\left(x+y\\right)zw$" ],
                    answer: "$\\left(x+y\\right)\\left(z+w\\right)$",
                    rationale: "共通な多項式 $\\left(z+w\\right)$ を $A$ とおくと、$xA+yA = \\left(x+y\\right)A$。 $A$ を戻して $\\left(x+y\\right)\\left(z+w\\right)$。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7709/63120' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 5
                {
                    question: "次の式を因数分解せよ。<br>$2x\\left(z-3\\right)-y\\left(3-z\\right)$",
                    options: [ "$\\left(2x+y\\right)\\left(z-3\\right)$", "$\\left(2x-y\\right)\\left(z-3\\right)$", "$\\left(2x-y\\right)\\left(3-z\\right)$", "$\\left(2x+y\\right)\\left(3-z\\right)$" ],
                    answer: "$\\left(2x+y\\right)\\left(z-3\\right)$",
                    rationale: "$\\left(3-z\\right) = -\\left(z-3\\right)$ を利用します。<br>$2x\\left(z-3\\right)-y\\left(-\\left(z-3\\right)\\right) = 2x\\left(z-3\\right)+y\\left(z-3\\right)$<br>共通因数 $\\left(z-3\\right)$ をくくりだして $\\left(2x+y\\right)\\left(z-3\\right)$。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7709/63120' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 6
                {
                    question: "次の式を因数分解せよ。<br>$4a^2b - 2ab^2$",
                    options: [ "$2ab\\left(2a-b\\right)$", "$2ab\\left(2a+b\\right)$", "$4ab\\left(a-b\\right)$", "$2a^2b\\left(2-b\\right)$" ],
                    answer: "$2ab\\left(2a-b\\right)$",
                    rationale: "共通因数 $2ab$ をくくりだします。<br>$2ab \\cdot2a - 2ab \\cdot b = 2ab\\left(2a-b\\right)$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7709/63120' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 7
                {
                    question: "次の式を因数分解せよ。<br>$x^3+x^2+x$",
                    options: [ "$x\\left(x^2+x+1\\right)$", "$x^2\\left(x+1\\right)$", "$x\\left(x^2+x\\right)+1$", "$x\\left(x+1\\right)^2$" ],
                    answer: "$x\\left(x^2+x+1\\right)$",
                    rationale: "共通因数 $x$ をくくりだします。<br>$x \\cdot x^2 + x \\cdot x + x \\cdot1 = x\\left(x^2+x+1\\right)$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7709/63120' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 8
                {
                    question: "次の式を因数分解せよ。<br>$a\\left(x-y\\right)+b\\left(x-y\\right)$",
                    options: [ "$\\left(a+b\\right)\\left(x-y\\right)$", "$\\left(a-b\\right)\\left(x-y\\right)$", "$ab\\left(x-y\\right)$", "$ab\\left(x-y\\right)^2$" ],
                    answer: "$\\left(a+b\\right)\\left(x-y\\right)$",
                    rationale: "共通な多項式 $\\left(x-y\\right)$ をくくりだします。<br>$\\left(a+b\\right)\\left(x-y\\right)$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7709/63120' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 9
                {
                    question: "次の式を因数分解せよ。<br>$x\\left(a-b\\right)-y\\left(a-b\\right)$",
                    options: [ "$\\left(x-y\\right)\\left(a-b\\right)$", "$\\left(x+y\\right)\\left(a-b\\right)$", "$-xy\\left(a-b\\right)$", "$xy\\left(a-b\\right)$" ],
                    answer: "$\\left(x-y\\right)\\left(a-b\\right)$",
                    rationale: "共通な多項式 $\\left(a-b\\right)$ をくくりだします。<br>$\\left(x-y\\right)\\left(a-b\\right)$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7709/63120' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 10
                {
                    question: "次の式を因数分解せよ。<br>$a\\left(x-y\\right)+b\\left(y-x\\right)$",
                    options: [ "$\\left(a-b\\right)\\left(x-y\\right)$", "$\\left(a+b\\right)\\left(x-y\\right)$", "$\\left(a-b\\right)\\left(y-x\\right)$", "$\\left(a+b\\right)\\left(y-x\\right)$" ],
                    answer: "$\\left(a-b\\right)\\left(x-y\\right)$",
                    rationale: "$\\left(y-x\\right) = -\\left(x-y\\right)$ を利用します。<br>$a\\left(x-y\\right)+b\\left(-\\left(x-y\\right)\\right) = a\\left(x-y\\right)-b\\left(x-y\\right)$<br>共通因数 $\\left(x-y\\right)$ をくくりだして $\\left(a-b\\right)\\left(x-y\\right)$。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7709/63120' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 11
                {
                    question: "次の式を因数分解せよ。<br>$12a^3 - 4a^2$",
                    options: [ "$4a^2\\left(3a-1\\right)$", "$4a^2\\left(3a\\right)$", "$12a^2\\left(a-1\\right)$", "$4a\\left(3a^2-a\\right)$" ],
                    answer: "$4a^2\\left(3a-1\\right)$",
                    rationale: "共通因数 $4a^2$ をくくりだします。<br>$4a^2 \\cdot3a - 4a^2 \\cdot1 = 4a^2\\left(3a-1\\right)$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7709/63120' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 12
                {
                    question: "次の式を因数分解せよ。<br>$5xy^2+10x^2y$",
                    options: [ "$5xy\\left(y+2x\\right)$", "$5xy\\left(y+5x\\right)$", "$5x^2y\\left(y+2\\right)$", "$5xy\\left(y+2\\right)$" ],
                    answer: "$5xy\\left(y+2x\\right)$",
                    rationale: "共通因数 $5xy$ をくくりだします。<br>$5xy \\cdot y + 5xy \\cdot2x = 5xy\\left(y+2x\\right)$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7709/63120' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 13
                {
                    question: "次の式を因数分解せよ。<br>$2x\\left(y-1\\right)+3\\left(y-1\\right)$",
                    options: [ "$\\left(2x+3\\right)\\left(y-1\\right)$", "$\\left(2x-3\\right)\\left(y-1\\right)$", "$6x\\left(y-1\\right)$", "$5x\\left(y-1\\right)$" ],
                    answer: "$\\left(2x+3\\right)\\left(y-1\\right)$",
                    rationale: "共通な多項式 $\\left(y-1\\right)$ をくくりだします。<br>$\\left(2x+3\\right)\\left(y-1\\right)$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7709/63120' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 14
                {
                    question: "次の式を因数分解せよ。<br>$y\\left(x-z\\right)-5\\left(z-x\\right)$",
                    options: [ "$\\left(y+5\\right)\\left(x-z\\right)$", "$\\left(y-5\\right)\\left(x-z\\right)$", "$\\left(y-5\\right)\\left(z-x\\right)$", "$-5y\\left(x-z\\right)$" ],
                    answer: "$\\left(y+5\\right)\\left(x-z\\right)$",
                    rationale: "$\\left(z-x\\right) = -\\left(x-z\\right)$ を利用します。<br>$y\\left(x-z\\right)-5\\left(-\\left(x-z\\right)\\right) = y\\left(x-z\\right)+5\\left(x-z\\right)$<br>共通因数 $\\left(x-z\\right)$ をくくりだして $\\left(y+5\\right)\\left(x-z\\right)$。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7709/63120' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 15
                {
                    question: "次の式を因数分解せよ。<br>$m^2n + mn^2 - mn$",
                    options: [ "$mn\\left(m+n-1\\right)$", "$mn\\left(m+n\\right)$", "$mn\\left(m+n-mn\\right)$", "$m^2n^2\\left(m+n-1\\right)$" ],
                    answer: "$mn\\left(m+n-1\\right)$",
                    rationale: "共通因数 $mn$ をくくりだします。<br>$mn \\cdot m + mn \\cdot n - mn \\cdot1 = mn\\left(m+n-1\\right)$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7709/63120' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 16
                {
                    question: "次の式を因数分解せよ。<br>$8x^3y^2 - 4x^2y^3$",
                    options: [ "$4x^2y^2\\left(2x-y\\right)$", "$4x^2y^2\\left(2x+y\\right)$", "$4x^3y^2\\left(2-y\\right)$", "$8x^2y^2\\left(x-y\\right)$" ],
                    answer: "$4x^2y^2\\left(2x-y\\right)$",
                    rationale: "共通因数 $4x^2y^2$ をくくりだします。<br>$4x^2y^2 \\cdot2x - 4x^2y^2 \\cdot y = 4x^2y^2\\left(2x-y\\right)$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7709/63120' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 17
                {
                    question: "次の式を因数分解せよ。<br>$a\\left(b+c\\right)+a$",
                    options: [ "$a\\left(b+c+1\\right)$", "$a\\left(b+c\\right)$", "$a\\left(b+c\\right)+1$", "$a\\left(b+c+a\\right)$" ],
                    answer: "$a\\left(b+c+1\\right)$",
                    rationale: "共通因数 $a$ をくくりだします。<br>$a\\left(b+c\\right) + a \\cdot1 = a\\left(b+c+1\\right)$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7709/63120' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 18
                {
                    question: "次の式を因数分解せよ。<br>$3x\\left(a-2b\\right)-2y\\left(2b-a\\right)$",
                    options: [ "$\\left(3x+2y\\right)\\left(a-2b\\right)$", "$\\left(3x-2y\\right)\\left(a-2b\\right)$", "$\\left(3x-2y\\right)\\left(a+2b\\right)$", "$\\left(3x+2y\\right)\\left(a+2b\\right)$" ],
                    answer: "$\\left(3x+2y\\right)\\left(a-2b\\right)$",
                    rationale: "$\\left(2b-a\\right) = -\\left(a-2b\\right)$ を利用します。<br>$3x\\left(a-2b\\right)-2y\\left(-\\left(a-2b\\right)\\right) = 3x\\left(a-2b\\right)+2y\\left(a-2b\\right)$<br>共通因数 $\\left(a-2b\\right)$ をくくりだして $\\left(3x+2y\\right)\\left(a-2b\\right)$。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7709/63120' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 19
                {
                    question: "次の式を因数分解せよ。<br>$3a^2bc + 6ab^2c - 9abc^2$",
                    options: [ "$3abc\\left(a+2b-3c\\right)$", "$3abc\\left(a+2b-3\\right)$", "$3a^2b^2c^2\\left(a+b-c\\right)$", "$3abc\\left(a+b-c\\right)$" ],
                    answer: "$3abc\\left(a+2b-3c\\right)$",
                    rationale: "共通因数 $3abc$ をくくりだします。<br>$3abc \\cdot a + 3abc \\cdot2b - 3abc \\cdot3c = 3abc\\left(a+2b-3c\\right)$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7709/63120' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 20
                {
                    question: "次の式を因数分解せよ。<br>$x\\left(a+b\\right)-\\left(a+b\\right)$",
                    options: [ "$\\left(x-1\\right)\\left(a+b\\right)$", "$x\\left(a+b\\right)$", "$-x\\left(a+b\\right)$", "$x$" ],
                    answer: "$\\left(x-1\\right)\\left(a+b\\right)$",
                    rationale: "共通な多項式 $\\left(a+b\\right)$ をくくりだします。<br>$x\\left(a+b\\right)-1\\left(a+b\\right) = \\left(x-1\\right)\\left(a+b\\right)$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7709/63120' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 21
                {
                    question: "次の式を因数分解せよ。<br>$x^2y - xy^2$",
                    options: [ "$xy\\left(x-y\\right)$", "$xy\\left(x+y\\right)$", "$x^2y^2\\left(x-y\\right)$", "$xy\\left(y-x\\right)$" ],
                    answer: "$xy\\left(x-y\\right)$",
                    rationale: "共通因数 $xy$ をくくりだします。<br>$xy \\cdot x - xy \\cdot y = xy\\left(x-y\\right)$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7709/63120' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 22
                {
                    question: "次の式を因数分解せよ。<br>$y\\left(x-1\\right)+\\left(1-x\\right)$",
                    options: [ "$\\left(y-1\\right)\\left(x-1\\right)$", "$\\left(y+1\\right)\\left(x-1\\right)$", "$\\left(y-1\\right)\\left(1-x\\right)$", "$y\\left(x-1\\right)$" ],
                    answer: "$\\left(y-1\\right)\\left(x-1\\right)$",
                    rationale: "$\\left(1-x\\right) = -\\left(x-1\\right)$ を利用します。<br>$y\\left(x-1\\right)-\\left(x-1\\right) = y\\left(x-1\\right)-1\\left(x-1\\right)$<br>共通因数 $\\left(x-1\\right)$ をくくりだして $\\left(y-1\\right)\\left(x-1\\right)$。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7709/63120' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 23
                {
                    question: "次の式を因数分解せよ。<br>$4a^3b^2+6a^2b^3$",
                    options: [ "$2a^2b^2\\left(2a+3b\\right)$", "$2a^2b^2\\left(2a+3\\right)$", "$2a^2b^2\\left(2+3b\\right)$", "$6a^2b^2\\left(a+b\\right)$" ],
                    answer: "$2a^2b^2\\left(2a+3b\\right)$",
                    rationale: "共通因数 $2a^2b^2$ をくくりだします。<br>$2a^2b^2 \\cdot2a + 2a^2b^2 \\cdot3b = 2a^2b^2\\left(2a+3b\\right)$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7709/63120' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 24
                {
                    question: "次の式を因数分解せよ。<br>$10x^2 - 5x$",
                    options: [ "$5x\\left(2x-1\\right)$", "$5x\\left(2x+1\\right)$", "$5\\left(2x^2-x\\right)$", "$x\\left(10x-5\\right)$" ],
                    answer: "$5x\\left(2x-1\\right)$",
                    rationale: "共通因数 $5x$ をくくりだします。<br>$5x \\cdot2x - 5x \\cdot1 = 5x\\left(2x-1\\right)$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7709/63120' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 25
                {
                    question: "次の式を因数分解せよ。<br>$a\\left(x+1\\right)+b\\left(x+1\\right)$",
                    options: [ "$\\left(a+b\\right)\\left(x+1\\right)$", "$\\left(a-b\\right)\\left(x+1\\right)$", "$ab\\left(x+1\\right)$", "$ab\\left(x+1\\right)^2$" ],
                    answer: "$\\left(a+b\\right)\\left(x+1\\right)$",
                    rationale: "共通な多項式 $\\left(x+1\\right)$ をくくりだします。<br>$\\left(a+b\\right)\\left(x+1\\right)$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7709/63120' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 26
                {
                    question: "次の式を因数分解せよ。<br>$a\\left(x-y\\right)+b\\left(x-y\\right)+c\\left(x-y\\right)$",
                    options: [ "$\\left(a+b+c\\right)\\left(x-y\\right)$", "$\\left(abc\\right)\\left(x-y\\right)$", "$\\left(a+b+c\\right)\\left(x-y\\right)^3$", "$\\left(a+b+c\\right)x-y$" ],
                    answer: "$\\left(a+b+c\\right)\\left(x-y\\right)$",
                    rationale: "共通な多項式 $\\left(x-y\\right)$ をくくりだします。<br>$\\left(a+b+c\\right)\\left(x-y\\right)$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7709/63120' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 27
                {
                    question: "次の式を因数分解せよ。<br>$a^2b + ab + a$",
                    options: [ "$a\\left(ab+b+1\\right)$", "$a\\left(ab+b\\right)$", "$ab\\left(a+1\\right)$", "$a^2\\left(b+1\\right)$" ],
                    answer: "$a\\left(ab+b+1\\right)$",
                    rationale: "共通因数 $a$ をくくりだします。<br>$a \\cdot ab + a \\cdot b + a \\cdot1 = a\\left(ab+b+1\\right)$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7709/63120' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 28
                {
                    question: "次の式を因数分解せよ。<br>$x\\left(y+z\\right)+y+z$",
                    options: [ "$\\left(x+1\\right)\\left(y+z\\right)$", "$\\left(x-1\\right)\\left(y+z\\right)$", "$x\\left(y+z\\right)$", "$x\\left(y+z\\right)^2$" ],
                    answer: "$\\left(x+1\\right)\\left(y+z\\right)$",
                    rationale: "$y+z$ を $\\left(y+z\\right)$ と考えます。<br>$x\\left(y+z\\right) + 1\\left(y+z\\right)$<br>共通因数 $\\left(y+z\\right)$ をくくりだして $\\left(x+1\\right)\\left(y+z\\right)$。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7709/63120' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 29
                {
                    question: "次の式を因数分解せよ。<br>$7xy - 14y^2$",
                    options: [ "$7y\\left(x-2y\\right)$", "$7y\\left(x-7y\\right)$", "$7xy\\left(1-2y\\right)$", "$7y\\left(x+2y\\right)$" ],
                    answer: "$7y\\left(x-2y\\right)$",
                    rationale: "共通因数 $7y$ をくくりだします。<br>$7y \\cdot x - 7y \\cdot2y = 7y\\left(x-2y\\right)$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7709/63120' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 30
                {
                    question: "次の式を因数分解せよ。<br>$a\\left(x-y\\right)-x+y$",
                    options: [ "$\\left(a-1\\right)\\left(x-y\\right)$", "$\\left(a+1\\right)\\left(x-y\\right)$", "$\\left(a-1\\right)\\left(y-x\\right)$", "$a\\left(x-y-1\\right)$" ],
                    answer: "$\\left(a-1\\right)\\left(x-y\\right)$",
                    rationale: "$-x+y = -\\left(x-y\\right)$ を利用します。<br>$a\\left(x-y\\right)-\\left(x-y\\right) = a\\left(x-y\\right)-1\\left(x-y\\right)$<br>共通因数 $\\left(x-y\\right)$ をくくりだして $\\left(a-1\\right)\\left(x-y\\right)$。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7709/63120' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 31
                {
                    question: "次の式を因数分解せよ。<br>$x^3y^2 + x^2y^3 - x^2y^2$",
                    options: [ "$x^2y^2\\left(x+y-1\\right)$", "$x^2y^2\\left(x+y\\right)$", "$x^2y^2\\left(x+y-xy\\right)$", "$x^3y^3\\left(x+y-1\\right)$" ],
                    answer: "$x^2y^2\\left(x+y-1\\right)$",
                    rationale: "共通因数 $x^2y^2$ をくくりだします。<br>$x^2y^2 \\cdot x + x^2y^2 \\cdot y - x^2y^2 \\cdot1 = x^2y^2\\left(x+y-1\\right)$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7709/63120' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 32
                {
                    question: "次の式を因数分解せよ。<br>$2a\\left(x-1\\right)+b\\left(1-x\\right)$",
                    options: [ "$\\left(2a-b\\right)\\left(x-1\\right)$", "$\\left(2a+b\\right)\\left(x-1\\right)$", "$\\left(2a-b\\right)\\left(1-x\\right)$", "$\\left(2a+b\\right)\\left(1-x\\right)$" ],
                    answer: "$\\left(2a-b\\right)\\left(x-1\\right)$",
                    rationale: "$\\left(1-x\\right) = -\\left(x-1\\right)$ を利用します。<br>$2a\\left(x-1\\right)+b\\left(-\\left(x-1\\right)\\right) = 2a\\left(x-1\\right)-b\\left(x-1\\right)$<br>共通因数 $\\left(x-1\\right)$ をくくりだして $\\left(2a-b\\right)\\left(x-1\\right)$。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7709/63120' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 33
                {
                    question: "次の式を因数分解せよ。<br>$5a^2b - 10ab + 15ab^2$",
                    options: [ "$5ab\\left(a-2+3b\\right)$", "$5ab\\left(a-2+3\\right)$", "$5a^2b\\left(1-2+3b\\right)$", "$5ab\\left(a-2\\right)+15ab^2$" ],
                    answer: "$5ab\\left(a-2+3b\\right)$",
                    rationale: "共通因数 $5ab$ をくくりだします。<br>$5ab \\cdot a - 5ab \\cdot2 + 5ab \\cdot3b = 5ab\\left(a-2+3b\\right)$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7709/63120' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 34
                {
                    question: "次の式を因数分解せよ。<br>$\\left(a+b\\right)x - \\left(a+b\\right)y$",
                    options: [ "$\\left(a+b\\right)\\left(x-y\\right)$", "$\\left(a+b\\right)\\left(x+y\\right)$", "$\\left(a-b\\right)\\left(x-y\\right)$", "$xy\\left(a+b\\right)$" ],
                    answer: "$\\left(a+b\\right)\\left(x-y\\right)$",
                    rationale: "共通な多項式 $\\left(a+b\\right)$ をくくりだします。<br>$\\left(a+b\\right)\\left(x-y\\right)$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7709/63120' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 35
                {
                    question: "次の式を因数分解せよ。<br>$y^3-y^2$",
                    options: [ "$y^2\\left(y-1\\right)$", "$y\\left(y^2-y\\right)$", "$y^2\\left(y+1\\right)$", "$y\\left(y-1\\right)$" ],
                    answer: "$y^2\\left(y-1\\right)$",
                    rationale: "共通因数 $y^2$ をくくりだします。<br>$y^2 \\cdot y - y^2 \\cdot1 = y^2\\left(y-1\\right)$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7709/63120' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 36
                {
                    question: "次の式を因数分解せよ。<br>$2a\\left(x-y\\right)-\\left(y-x\\right)$",
                    options: [ "$\\left(2a+1\\right)\\left(x-y\\right)$", "$\\left(2a-1\\right)\\left(x-y\\right)$", "$2a\\left(x-y\\right)$", "$\\left(2a+1\\right)\\left(y-x\\right)$" ],
                    answer: "$\\left(2a+1\\right)\\left(x-y\\right)$",
                    rationale: "$\\left(y-x\\right) = -\\left(x-y\\right)$ を利用します。<br>$2a\\left(x-y\\right)-\\left(-\\left(x-y\\right)\\right) = 2a\\left(x-y\\right)+1\\left(x-y\\right)$<br>共通因数 $\\left(x-y\\right)$ をくくりだして $\\left(2a+1\\right)\\left(x-y\\right)$。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7709/63120' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 37
                {
                    question: "次の式を因数分解せよ。<br>$9x^2y - 6xy^2$",
                    options: [ "$3xy\\left(3x-2y\\right)$", "$3xy\\left(3x+2y\\right)$", "$3x^2y\\left(3-2y\\right)$", "$3xy\\left(3x-2\\right)$" ],
                    answer: "$3xy\\left(3x-2y\\right)$",
                    rationale: "共通因数 $3xy$ をくくりだします。<br>$3xy \\cdot3x - 3xy \\cdot2y = 3xy\\left(3x-2y\\right)$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7709/63120' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 38
                {
                    question: "次の式を因数分解せよ。<br>$8x^2+4x$",
                    options: [ "$4x\\left(2x+1\\right)$", "$4x\\left(2x\\right)$", "$8x\\left(x+1\\right)$", "$4x^2\\left(2x+1\\right)$" ],
                    answer: "$4x\\left(2x+1\\right)$",
                    rationale: "共通因数 $4x$ をくくりだします。<br>$4x \\cdot2x + 4x \\cdot1 = 4x\\left(2x+1\\right)$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7709/63120' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 39
                {
                    question: "次の式を因数分解せよ。<br>$m\\left(a-b\\right)-n\\left(b-a\\right)$",
                    options: [ "$\\left(m+n\\right)\\left(a-b\\right)$", "$\\left(m-n\\right)\\left(a-b\\right)$", "$\\left(m-n\\right)\\left(b-a\\right)$", "$mn\\left(a-b\\right)$" ],
                    answer: "$\\left(m+n\\right)\\left(a-b\\right)$",
                    rationale: "$\\left(b-a\\right) = -\\left(a-b\\right)$ を利用します。<br>$m\\left(a-b\\right)-n\\left(-\\left(a-b\\right)\\right) = m\\left(a-b\\right)+n\\left(a-b\\right)$<br>共通因数 $\\left(a-b\\right)$ をくくりだして $\\left(m+n\\right)\\left(a-b\\right)$。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7709/63120' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 40
                {
                    question: "次の式を因数分解せよ。<br>$15a^3b + 5a^2b^2$",
                    options: [ "$5a^2b\\left(3a+b\\right)$", "$5a^2b\\left(3a+1\\right)$", "$5a^2b\\left(3+b\\right)$", "$15a^2b\\left(a+b\\right)$" ],
                    answer: "$5a^2b\\left(3a+b\\right)$",
                    rationale: "共通因数 $5a^2b$ をくくりだします。<br>$5a^2b \\cdot3a + 5a^2b \\cdot b = 5a^2b\\left(3a+b\\right)$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7709/63120' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 41
                {
                    question: "次の式を因数分解せよ。<br>$3x^2 - 9x$",
                    options: [ "$3x\\left(x-3\\right)$", "$3x\\left(x-6\\right)$", "$3\\left(x^2-3x\\right)$", "$x\\left(3x-9\\right)$" ],
                    answer: "$3x\\left(x-3\\right)$",
                    rationale: "共通因数 $3x$ をくくりだします。<br>$3x \\cdot x - 3x \\cdot3 = 3x\\left(x-3\\right)$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7709/63120' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 42
                {
                    question: "次の式を因数分解せよ。<br>$2ab^2 + 4a^2b - 6ab$",
                    options: [ "$2ab\\left(b+2a-3\\right)$", "$2ab\\left(b+2a-6\\right)$", "$2ab\\left(b+2a\\right)-6ab$", "$2a^2b\\left(b+2a-3\\right)$" ],
                    answer: "$2ab\\left(b+2a-3\\right)$",
                    rationale: "共通因数 $2ab$ をくくりだします。<br>$2ab \\cdot b + 2ab \\cdot2a - 2ab \\cdot3 = 2ab\\left(b+2a-3\\right)$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7709/63120' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 43
                {
                    question: "次の式を因数分解せよ。<br>$a\\left(x-y\\right)-b\\left(y-x\\right)$",
                    options: [ "$\\left(a+b\\right)\\left(x-y\\right)$", "$\\left(a-b\\right)\\left(x-y\\right)$", "$\\left(a+b\\right)\\left(y-x\\right)$", "$ab\\left(x-y\\right)$" ],
                    answer: "$\\left(a+b\\right)\\left(x-y\\right)$",
                    rationale: "$\\left(y-x\\right) = -\\left(x-y\\right)$ を利用します。<br>$a\\left(x-y\\right)-b\\left(-\\left(x-y\\right)\\right) = a\\left(x-y\\right)+b\\left(x-y\\right)$<br>共通因数 $\\left(x-y\\right)$ をくくりだして $\\left(a+b\\right)\\left(x-y\\right)$。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7709/63120' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 44
                {
                    question: "次の式を因数分解せよ。<br>$x\\left(a-3\\right)-5\\left(a-3\\right)$",
                    options: [ "$\\left(x-5\\right)\\left(a-3\\right)$", "$\\left(x+5\\right)\\left(a-3\\right)$", "$-5x\\left(a-3\\right)$", "$\\left(a-3\\right)\\left(x-5a\\right)$" ],
                    answer: "$\\left(x-5\\right)\\left(a-3\\right)$",
                    rationale: "共通な多項式 $\\left(a-3\\right)$ をくくりだします。<br>$\\left(x-5\\right)\\left(a-3\\right)$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7709/63120' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 45
                {
                    question: "次の式を因数分解せよ。<br>$x^4 - 2x^3 - x^2$",
                    options: [ "$x^2\\left(x^2-2x-1\\right)$", "$x^2\\left(x-1\\right)^2$", "$x^2\\left(x^2-2x-x\\right)$", "$x^3\\left(x-2\\right)-x^2$" ],
                    answer: "$x^2\\left(x^2-2x-1\\right)$",
                    rationale: "共通因数 $x^2$ をくくりだします。<br>$x^2 \\cdot x^2 - x^2 \\cdot2x - x^2 \\cdot1 = x^2\\left(x^2-2x-1\\right)$<br>（$x^2-2x-1$ はこれ以上因数分解できません。）<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7709/63120' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 46
                {
                    question: "次の式を因数分解せよ。<br>$a^5b^3 - a^3b^4$",
                    options: [ "$a^3b^3\\left(a^2-b\\right)$", "$a^3b^3\\left(a-b\\right)$", "$a^3b^3\\left(a-b\\right)\\left(a+b\\right)$", "$a^3b^3\\left(a^2-b^2\\right)$" ],
                    answer: "$a^3b^3\\left(a^2-b\\right)$",
                    rationale: "共通因数 $a^3b^3$ をくくりだします。<br>$a^3b^3 \\cdot a^2 - a^3b^3 \\cdot b = a^3b^3\\left(a^2-b\\right)$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7709/63120' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 47
                {
                    question: "次の式を因数分解せよ。<br>$x\\left(y+2\\right)+y\\left(y+2\\right)$",
                    options: [ "$\\left(x+y\\right)\\left(y+2\\right)$", "$\\left(x-y\\right)\\left(y+2\\right)$", "$xy\\left(y+2\\right)$", "$y\\left(x+y+2\\right)$" ],
                    answer: "$\\left(x+y\\right)\\left(y+2\\right)$",
                    rationale: "共通な多項式 $\\left(y+2\\right)$ をくくりだします。<br>$\\left(x+y\\right)\\left(y+2\\right)$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7709/63120' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 48
                {
                    question: "次の式を因数分解せよ。<br>$a\\left(b-1\\right)+b\\left(1-b\\right)$",
                    options: [ "$\\left(a-b\\right)\\left(b-1\\right)$", "$\\left(a+b\\right)\\left(b-1\\right)$", "$\\left(a-b\\right)\\left(1-b\\right)$", "$\\left(a+b\\right)\\left(1-b\\right)$" ],
                    answer: "$\\left(a-b\\right)\\left(b-1\\right)$",
                    rationale: "$\\left(1-b\\right) = -\\left(b-1\\right)$ を利用します。<br>$a\\left(b-1\\right)+b\\left(-\\left(b-1\\right)\\right) = a\\left(b-1\\right)-b\\left(b-1\\right)$<br>共通因数 $\\left(b-1\\right)$ をくくりだして $\\left(a-b\\right)\\left(b-1\\right)$。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7709/63120' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 49
                {
                    question: "次の式を因数分解せよ。<br>$2x^3+4x^2-5x$",
                    options: [ "$x\\left(2x^2+4x-5\\right)$", "$2x\\left(x^2+2x-3\\right)$", "$x\\left(2x^2+4x\\right)-5x$", "$2x\\left(x^2+2x-5\\right)$" ],
                    answer: "$x\\left(2x^2+4x-5\\right)$",
                    rationale: "共通因数 $x$ をくくりだします。<br>$x \\cdot2x^2 + x \\cdot4x - x \\cdot5 = x\\left(2x^2+4x-5\\right)$<br>（$2x^2+4x-5$ はこれ以上因数分解できません。）<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7709/63120' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                },
                // 問題 50
                {
                    question: "次の式を因数分解せよ。<br>$p\\left(q-r\\right)+q-r$",
                    options: [ "$\\left(p+1\\right)\\left(q-r\\right)$", "$\\left(p-1\\right)\\left(q-r\\right)$", "$p\\left(q-r+1\\right)$", "$p\\left(q-r\\right)$" ],
                    answer: "$\\left(p+1\\right)\\left(q-r\\right)$",
                    rationale: "$q-r$ を $\\left(q-r\\right)$ と考えます。<br>$p\\left(q-r\\right) + 1\\left(q-r\\right)$<br>共通因数 $\\left(q-r\\right)$ をくくりだして $\\left(p+1\\right)\\left(q-r\\right)$。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7709/63120' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>",
                    layout: 'vertical'
                }

            ]; // ← allQuizData をここで閉じる
            // --- 元のクイズデータの終わり ---