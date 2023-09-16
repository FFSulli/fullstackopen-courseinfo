import Header from "./components/Header.jsx";
import Content from "./components/Content.jsx";
import Total from "./components/Total.jsx";

const App = () => {
    const course = 'Half Stack application development'


    return (
        <div>
            <Header course={course} />
            <Content />
            <Total />
        </div>
    )
}

export default App