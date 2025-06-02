100 ReactJs Questions

# 1. React là gì?

- React là thư viện javascript cho giao diện người dùng, chủ yếu là cho SPA(single page applications). Nó cho phép ta tạo nhiều components để có thể tái sử dụng và update UI khi nào mà data change.

# 2 Đặc trưng của React?

Component-Based Architecture: Xây dựng nên các components dễ tái sử dụng và đóng gói

Virtual DOM: tối ưu quá trình render bằng việc giới hạn sự thay đổi DOM.

JSX: là một cú pháp mở rộng của Javascript mà tập hợp các thẻ HTML, làm cho UI trực quan hơn.

Unidirectional Data Flow: Data flows theo một chiều, đơn giản hóa quản lý state.

Declarative: mô tả làm sao để UI được show ra, và React xử lý các thay đổi đấy một cách tự động.

React Hooks: bật state và quản lý vòng đời trong functional component.

Ecosystem: ReactRouter, Redux

# 3. What is JSX?

- JSX(Javascript XML) là một cú pháp mở trộng cho phép javascript có thể viết html bên trong javascript. Nó sẽ được thông dịch sang javascript (e.g React.createElement) bằng tools như là Babel.

# 4. What is the Virtual DOM?

The Virtual DOM là một sử thể hiện của DOM thật trong bộ nhớ (in-memmory). React sử dụng nó để track, tính toán những sự thay đổi cần thiết, và hiệu quả để apply chúng vào cây DOM thật để cải thiện performance.

# 5. What are components in React?

Components là có thể tái sử dụng, các building blocks độc lập của React application's UI. Chúng có thể là function hay là class.

Function:

- đơn giản để trả về JSX
- Sử dụng hooks(e.g useState, useEffect) cho state và quản lý vòng đời
- Chúng ngắn gọn và dễ test hơn class

Class:

- ES6 classes extending React.Component.
- Sử dụng vòng đời và this.state, componentDidmount
