import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from "./Configuration/ScrollToTop"
import DocHomepage from "../src/Pages/DocHomepage"
import DocBlog from "../src/Pages/DocBlog"
import DocFAQ from "../src/Pages/DocFAQ"
import DocTerms from "../src/Pages/DocTerms"
import DocPrivacy from "../src/Pages/DocPrivacy"
import DocSellersPolicy from "../src/Pages/DocSellersPolicy"
import DocAffiliatePolicy from "../src/Pages/DocAffiliatePolicy"

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Routes>

          <Route path="/" element={<DocHomepage />} />
          <Route path="/blog" element={<DocBlog />} />
          <Route path="/faq" element={<DocFAQ />} />
          <Route path="/terms" element={<DocTerms />} />
          <Route path="/privacy" element={<DocPrivacy />} />
          <Route
            path="sellerspolicy"
            element={<DocSellersPolicy />}
          />
          <Route
            path="/affiliatepolicy"
            element={<DocAffiliatePolicy />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
