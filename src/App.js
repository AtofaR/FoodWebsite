import Pages from "./Pages/Pages";
import Categories from "./Comp/Categories";
import {BrowserRouter} from 'react-router-dom';
import Search from "./Comp/Search";
import styled from "styled-components";
import {BiBowlHot} from "react-icons/bi";
import { Link } from "react-router-dom";
import StarRating from "./Comp/Star";
function App() {
 return(
    <div className="App">
      <BrowserRouter>
      <Nav>
      <BiBowlHot />
         <Logo to={"/"}>Cook from scraps</Logo>
      </Nav>
   <Search />
   <Categories />
   <Pages />
   </BrowserRouter>
    </div>
 );
}

const Logo = styled(Link)`
text-decoration: none;
font-size: 1.5rem;
font-weight: 400;
font-family: 'lobster two', cursive;
margin-right: auto;
`;

const Nav = styled.div`
padding: 4rem 0rem;
display: flex;
justify-content: flex-start;
align-items: center;
svg{
   font-size: 2rem;
}

`;

export default App;
