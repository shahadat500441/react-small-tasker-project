import "./App.css";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Hero from "./component/Hero";
import TaskBord from "./component/task/TaskBord";

function App() {
  return (
    <>
      <Header></Header>
      <div className="flex flex-col items-center justify-center">
        <Hero></Hero>
        <TaskBord></TaskBord>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
