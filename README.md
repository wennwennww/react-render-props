# Render Props

#### 什麼是render props?
通過一個叫做render的函數將component的state作為props傳遞下去，有兩種形式
1. 使用props.render
2. 使用props.children

#### render props的缺點

- 使用起來比較繁瑣，HOC使⽤通常⼀⾏代碼就可以重複使用，ex: `hoc(component`)，Render Props做不到那麼簡單
- etc...