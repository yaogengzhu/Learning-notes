/**
 *  如何匹配位置， 有6个锚
 *  ^ $ \b \B (?=p) (?!p)、
 *
 *  ^ 脱字符 匹配开头， 在多行匹配中匹配开头
 *  $ 美元符匹配结尾，在多行匹配中匹配结尾
 *  \b 单词边界，具体是\w 和 \W 之间的位置，也包括\w与^之间的位置 和 $和^之间的位置
 *  \B 非单词边界
 *  (?=p) 其中p是一个模式，即p前面的位置，或者说，该位置后面的字符要匹配p ---> 正向先行断言 positive lookahead
 *  (?!p) ---> 负向先行断言 negative lookahead
 */

// 单行匹配
'hello'.replace(/^|$/g, '#'); // #hello#
// 多行匹配
"I\nlove\njavascript".replace(/^|$/gm, '#') // 每个单词前后加#
// 单词边界处理
"[JS] ILOVE.YOU".replace(/\b/g, '#') // "[#JS#] #ILOVE#.#YOU#"
// 非单词边界处理
"[JS] ILOVE.YOU".replace(/\B/g, '#'); // "#[J#S]# I#L#O#V#E.Y#O#U"

// (?=p) 匹配p前面的字符
"hello".replace(/(?=p)/g, '#') // he#l#lo