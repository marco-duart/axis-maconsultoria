import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BaseLayout } from "../components/base-layout";
import { Home } from "../pages";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
