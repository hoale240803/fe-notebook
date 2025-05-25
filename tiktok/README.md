# fe-notebook

Tiktok pet project

## Tạo dự án

```
npx create-react-app tiktok-ui
```

## 1. Cài đặt customize-cra tùy chỉnh cấu hình webpack

```
npm install customize-cra react-app-rewired --dev
```

[Xem thêm](https://github.com/arackaf/customize-cra)

Create a config-overrides.js

```
/* config-overrides.js */

module.exports = function override(config, env) {
  //do stuff with the webpack config...
  return config;
}
```

Change

```
  /* package.json */

  "scripts": {
-   "start": "react-scripts start",
+   "start": "react-app-rewired start",
-   "build": "react-scripts build",
+   "build": "react-app-rewired build",
-   "test": "react-scripts test",
+   "test": "react-app-rewired test",
    "eject": "react-scripts eject"
}
```

## 2. Cấu hình barbel

Cài đặt babel resolve

```
npm install --save-dev babel-plugin-module-resolver
```

Create .babelrc at the same level folder /src

```
{
    "plugins": [
        [
            "module-resolver",
            {
                "root": [
                    "./src"
                ],
                "alias": {
                    "~": "./src"
                }
            }
        ]
    ]
}
```

Create file jsconfig.json

```
{
    "compilerOptions": {
        "baseUrl": ".",
        "paths": {
            "~/*": [
                "src/*"
            ]
        }
    }
}
```

Create .prettierrc

```
{
    "arrowParens": "always",
    "bracketSameLine": false,
    "bracketSpacing": true,
    "embeddedLanguageFormatting": "auto",
    "htmlWhitespaceSensitivity": "css",
    "insertPragma": false,
    "jsxSingleQuote": false,
    "printWidth": 120,
    "proseWrap": "preserve",
    "quoteProps": "as-needed",
    "requirePragma": false,
    "semi": true,
    "singleQuote": true,
    "tabWidth": 4,
    "trailingComma": "all",
    "useTabs": false,
    "vueIndentScriptAndStyle": false
}
```

## 3. Cấu hình css, scss

1. Tạo GlobalStyles component

2. Cài thư viện scss

```
npm i sass -D
```

3. Reset css:

```
npm install --save normalize.css
```

```
<GlobalStyles>
    <App />
</GlobalStyles>
```

4. Default css: font-family, font-size, line-height

## 4. Cấu hình router

1. Phân tích tổng quan layout

-Navbar:
-Sidebar:
-Main Layout: 3-4 cái

2. Cài đặt react-router-dom

```
npm i react-router-dom
```

3. Xây dựng cơ chế tải layout

-   check layout null

## 5. Dựng khung DefaultLayout dự án Tiktok clone

-   Responsive trên pc
    -   Thừa nhiều thể không dùng
    -   Code vừa cho pc, mobile bị rối và phức tạp

## 6. Xây dựng UI phần Header dự án Tiktok

-   Logo

-   Search

    -   Inner

        -   input
        -   close icon
        -   loading icon
        -   Spacer cal(var(--search-height) - var(--search-spacer) \* 2)

    -   Button search

-   Actions

```css
* install fontawesome
* css to caret
* focus the input => then clear content itself and change background color of search button

```

6.1 Handle tippy for search

[Github](https://github.com/atomiks/tippyjs-react)
[All props of Tippy](https://atomiks.github.io/tippyjs/v6/all-props/)

-   Control search result

if you're got error

```
Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.
```

You need to wrap Tippy in to Wrapper

```
// Custom Tippy wrapper to handle ref forwarding
const TippyWrapper = forwardRef(({ children, ...props }, ref) => {
    return (
        <Tippy {...props} ref={ref}>
            {children}
        </Tippy>
    );
});
```

```
<TippyWrapper
    interactive
    visible={searchResult.length > 0}
    render={(attrs) => (
        <PopperWrapper>
            <div className="box" tabIndex="-1" {...attrs}>
                Kết quả
            </div>
        </PopperWrapper>
    )}
>
    {/* Your Search component */}
</TippyWrapper>
```

## 7. Xây dựng Logic phần Header dự án tiktok

## 8. Sử dụng tư viện Axios | Gọi API từ trình duyệt hoặc Nodejs

## 9. Sửa lỗi và hoàn thiện phần Header

## 10. Tái cấu trúc và tối ưu code

## 11. Tìm hiểu và ứng dụng thư viện PropTypes trong React

## 12. Áp dụng PropTypes vào dự án Tiktok Clone

## 13. Khắc phục vấn đề nhiều File index.js

## 14. Tối ưu Header dự án tiktok

## 15. Xây dựng UI phần Sidebar
