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

# What are hook in React?

Hooks là một function đặc biêt trong React để quản lý các state, side effects mà không cần sử dụng class components.

# 7. What is the useState hook?

useState hook thêm state management vào functional components. Nó trả về một biến state và một function để update.
Lúc gọi đến function update để trigger re-render với một state mới.

# 8. What is the useEffect hook?

Nó sử lý các side-effect trong một function components, ví dụ như data fetching, subscriptions, or DOM manipulation. Nó run sau khi render và có thể có thể cấu hình để run được với một số state và prop changes sử dụng các dependencies array.

# 9. What is prop drilling?

Prop drilling là một quá trình truyền data thông qua nhiều lớp của components, từ một component cha xuống dưới những component con sâu bên trong nó, thậm chí nhiều khi những component trung gian không sử dụng tới data đó. Nó có thể khiến code trở nên cồng kềnh. Để giải quyết bài toán này thì mình đã có Redux, Context.

# 10. What is difference between props and state?

Props: data được truyền từ component cha tới component con. Chúng chỉ được đọc và sử dụng để điểu khiển các logic, behavior, appearance của component đó.

State: Nó là data được quản lý bên trong một component, có thể thay đổi theo thời gian, dùng để bắn tín hiệu re-render khi đã được update.

# 11. How does React handle forms?

React handles forms bằng việc quản lý các input values, một là thông quan controlled components( ở đó các form data được quản lý bởi React State) hoặc là uncontrolled components ( ở đó form data dược xử lý bằng DOM). Bạn gán một thay đổi của sự kiện ( onChange, onSubmit) để thay đổi state hoặc quá trình gửi form.

A controlled component là một form element (<input>) những giá trị được kiểm soát React state. Giá trị input được set thông qua state variable, và thay đổi được xử lý bằng onChange event, bảo đảm rằng React nó là single source của một sự thật.

A uncontrolled components là một form element mà giá trị của nó được quản lý bởi DOM, không phải là React state. Bạn có thể tiếp cấn value của nó bằng việc dùng refs (useRef) hoặc các thuộc tính mặc định như là **defaultValue**.

# 12. What is the useContext hook?

useContext hook cho phép các components được tiếp cận data từ React Context mà không cần thông qua prop drilling. Nó nhận giá trị hiện thời của Context object tạo bởi React.createContext.

# 13. What is the Context API?

Context API là một tính năng của React dùng để share các data ở scope global.(theme, user info) xuyên suốt các component mà không cần thông qua việc truyền dữ liệu qua nhiều components (prop drilling), Một **Provider** sẽ set value và người **Consumser**( useContext, or Context.Consumer) để tiếp cận nó

# 14. What is lifting state up?

Lifting state up là một kiểu pattern ở đó state được di chuyển tới nhưng component cha chung để share nó cho các component con khác. Điều này đảm bảo việc thống nhất data giữa các components tránh việc duplicate state logic, sử dụng thường xuyên với nhiều components cần phải ánh xạ hoặc thay đổi cùng một data.

# 15. What is the useRef hook?

useRef hook tạo một mutable object mới một **.current** property mà nó tồn tại trong nhiều lần render. Nó sử dụng trong việc acccess DOM elements hoặc lưu values mà không muốn trigger render khi thay đổi data đó, khác với state.

# 16. What is the useMemo?

The **useMemo** hook để ghi nhớ các giá trị tính toán, chỉ tính toán lại khi những sự phụ thuộc của nó thay đổi. Nó tối ưu hiệu năng bằng việc không tính toán lại các công việc tính toán phức tạp tốn time cho mỗi lần re-render.

# 17. What is the useCallback?

The **useCallback** hook nó ghi nhớ một function, trả về cùng một function instance nếu mà các sự phụ thuộc không thay đổi. Nó hưu ích cho việc chặn không re-renders ở các component con dựa vào các callback props

```
// Install React: npm create vite@latest my-react-app -- --template react
// Run: npm install && npm run dev

import React, { useState, useRef, useMemo, useCallback, createContext, useContext } from 'react';
import ReactDOM from 'react-dom/client';

// Context for sharing theme
const ThemeContext = createContext();

// Controlled and Uncontrolled Form Component
function FormComponent({ updateSharedData }) {
  // Controlled component state
  const [inputValue, setInputValue] = useState('');

  // Uncontrolled component ref
  const inputRef = useRef(null);

  // useContext to access theme
  const theme = useContext(ThemeContext);

  // Handle controlled input change
  const handleChange = (e) => {
    setInputValue(e.target.value);
    updateSharedData(e.target.value); // Lift state up
  };

  // Handle form submission (uncontrolled)
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    alert(`Uncontrolled Input: ${inputRef.current.value}`);
  }, []); // Empty deps: memoized function

  // Memoized value (expensive calculation example)
  const computedLength = useMemo(() => {
    console.log('Computing length...');
    return inputValue.length;
  }, [inputValue]);

  return (
    <div style={{ background: theme.background, padding: '10px' }}>
      <h2>Form Component</h2>
      {/* Controlled Input */}
      <label>
        Controlled Input:
        <input value={inputValue} onChange={handleChange} />
      </label>
      <p>Input Length: {computedLength}</p>
      {/* Uncontrolled Input */}
      <form onSubmit={handleSubmit}>
        <label>
          Uncontrolled Input:
          <input ref={inputRef} defaultValue="Initial" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

// Main App Component
function App() {
  // Lifted state
  const [sharedData, setSharedData] = useState('');

  // Memoized callback for lifting state up
  const updateSharedData = useCallback((data) => {
    setSharedData(data);
  }, []);

  // Theme context value
  const theme = useMemo(() => ({ background: '#f0f0f0' }), []);

  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <h1>React Concepts Example</h1>
        <p>Shared Data (Lifted State): {sharedData}</p>
        <FormComponent updateSharedData={updateSharedData} />
      </div>
    </ThemeContext.Provider>
  );
}

// Render to DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```
