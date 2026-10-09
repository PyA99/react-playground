import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Scope31 from "./pages/Scope31";
import Scope311 from "./pages/Scope311";
import Scope312 from "./pages/Scope312";

const pageComponents = {
  "scope-3.1": Scope31,
  "scope-3.11": Scope311,
  "scope-3.12": Scope312,
};

function App() {
  // null = startsidan (tom)
  const [activePage, setActivePage] = useState(null);
  const Page = pageComponents[activePage];

  return (
    <div className="d-flex flex-grow-1">
      <Sidebar activePage={activePage} onSelect={setActivePage} />
      <main className="flex-grow-1 p-4">
        {Page && <Page />}
      </main>
    </div>
  );
}

export default App;
