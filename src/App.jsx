import Philosophy from "./Components/Philosophy";
import Reflective from "./Components/Reflective";
import Navbar from "./Components/Navbar";
import {
  philosophyList,
  reflectiveList,
  curriculumList,
  excImages,
  TLMImages,
  Images,
} from "./document";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Curriculum from "./Components/Curriculum";
import Pictures from "./Components/Pictures";
import Footer from "./Components/Footer";
import Home from "./Components/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/philosophy"
            element={<Philosophy list={philosophyList} />}
          ></Route>
          <Route
            path="/reflective"
            element={<Reflective list={reflectiveList} />}
          ></Route>
          <Route
            path="/cv"
            element={<Curriculum list={curriculumList} />}
          ></Route>
          <Route
            path="/pictures"
            element={
              <Pictures images={Images} heading={"Pictures and Videos"} />
            }
          ></Route>
          <Route
            path="/exercise"
            element={
              <Pictures
                images={excImages}
                heading={"Exercises and Lesson plan"}
              />
            }
          ></Route>
          <Route
            path="/tlm"
            element={<Pictures images={TLMImages} heading={"Tlms"} />}
          ></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
