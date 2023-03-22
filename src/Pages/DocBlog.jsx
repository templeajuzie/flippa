import CompNavbar from "../Components/CompNavbar";
import CompFooter from "../Components/CompFooter";
import styled from "styled-components";
import headerbg from "../../src/Resources/images/headerbg.png";

const Blogcontainer1 = styled.div`
  .blogheader h2 {
    font-weight: 500;
    font-size: 35px;
    padding-top: 75px;
    align-items: center;
    margin-bottom: 800px;
    text-align: center;
    background-image: url(${headerbg});
  }
`;

const DocBlog = () => {
  return (
    <Blogcontainer1>
      <CompNavbar />
      <div className="blogheader">
        <h2>Blog</h2>
      </div>

      <CompFooter />
    </Blogcontainer1>
  );
};

export default DocBlog;
