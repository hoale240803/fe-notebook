import './GlobalStyle.scss';
function GlobalStyles({ children }) {
    console.log(children);
    console.log(typeof children);

    return children;
}

export default GlobalStyles;
