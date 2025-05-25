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

6.2 Phân tích nút

-   có thể gom nhiều nút của UI design về cùng một component để xài chung không
-   Nếu có thì phân biệt nó như primary, outline, link buton, icon button
-   Nếu nó đặt sát nhau thì có cách nhau ra hay dính liền vào nhau
-   Nếu nút click vào muốn mở sang tab mới
-   size của nút là small, medium hay là large
-   nội dung bên trong button của nó là gì
-   Disabled hay không

```
Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    text: PropTypes.bool,
    rounded: PropTypes.bool,
    disabled: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    onClick: PropTypes.func,
};
```

## 7. Xây dựng Logic phần Header dự án tiktok

**Yêu Cầu**

-   Khi gõ trên thanh search thì hiển thị icon x để user có thể xóa toàn bộ text.

-   Xử gõ nhiều ký tự hoặc gõ 2-3s mới request api một lần. Nếu không nó sẽ bị lag

=> chúng ta sẽ dùng debouce để xác định đc là khi nào thì user nhập liệu xong. Đơn giản nó sẽ xác định đc khi nào user dừng nhập trong x time => call api để lấy dữ liệu về.

-   Khi f5 thì Search bar có forcus vào search bar hay không
-   Icon close sẽ hiện khi người dùng tìm kiếm, đang tìm kiếm thì sẽ hiển thị icon loading
-   Khi nào outfocus khỏi search result thì sẽ ẩn đi panel đó
-   Không có kết quả thì không hiển thị gì cả

**Làm việc với API**

-   install json viewer => để dễ dàng đọc json data từ be trả về

Xử lý data do người dùng nhập vào

-   Không có ký tự
-   Ký tự có nhiều khoảng trắng
-   Nhấp ký tứ đặc biết ?, &, | giống như parameter trên url => dùng encodeURIComponent() để mã hóa string truyền vào
-   chú ý phần tìm kiếm có tình năng loadmore để tránh load toàn bộ data từ be.

## 8. Sử dụng tư viện Axios | Gọi API từ trình duyệt hoặc Nodejs

Có nhiều cách để gọi api trên vs js.
https://www.npmjs.com/package/axios

-   XMLHTTPRequest trên trình duyệt
-   Fetch
-   Hổ trợ chuyển đổi data trước và sau khi gửi request
    ex:
    database hay làm việc với snake_case. js thì hay làm việc với camelCase =>
    Cài đặt package axios

```
Make XMLHttpRequests from the browser
Make http requests from node.js
Supports the Promise API
Intercept request and response
Transform request and response data
Cancel requests
Automatic transforms for JSON data
🆕 Automatic data object serialization to multipart/form-data and x-www-form-urlencoded body encodings
Client side support for protecting against XSRF
```

```
npm i axios
```

Tách request thành các api service để hạn chế đụng code, để tái sử dụng code.

## 9. Sửa lỗi và hoàn thiện phần Header

-   Link logo về trang chủ
-   Sửa phông chữ trong ô tìm kiếm
-   Không cho nhập kí tự đầu tiên là space trong o tìm kiếm
-   Bỏ qua hành vi focus vào ô tìm kiếm khi nhấn submit
-   Không ẩn menu khi click vào avatar => truyền tham số vào hàm handleOnClick true/false
-   Xử lý thanh cuộn trong menu đa cấp, khi có nhiều content
-   Thêm styles overlay cho thanh cuộn body
    => tìm keyword overlay-y
-   Sửa title trang và update favicon
-   Fix warning thư viện Tippy

## 10. Tái cấu trúc và tối ưu code

-   apiService => services, find and replace import chú ý sau khi replace kết quả có đúng không.
-   src/components/Layout => src/layouts
-   routes config

## 11. Tìm hiểu và ứng dụng thư viện PropTypes trong React

## 12. Áp dụng PropTypes vào dự án Tiktok Clone

## 13. Khắc phục vấn đề nhiều File index.js

## 14. Tối ưu Header dự án tiktok

## 15. Xây dựng UI phần Sidebar

## Extension

1. Cách xử lý khi gặp vấn đề

-   Gặp vấn đề
-   Search keyword error
-   Đọc hiểu code mới
-   Copy hoặc dùng nhiều lần bỏ vào trong snippets
-   Note lại trong docs liên quan. ví dụ css, scss thì lưu lại ở blog hoặc note-book cho phần đó
