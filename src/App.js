import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<dev>Hello World</dev>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
