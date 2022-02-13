import styled from "styled-components";

export const Navbar = styled.div`
  width: 100%;
  background-color: #153C3C;
  color: white;
  display: flex;

  .logo {
    height: fit-content;
    margin: 18px 30px;
  }

  nav {
    margin: 6px 50px;
    display: flex;
    text-transform: capitalize;

    li {
      margin: 23px 10px;
      list-style: none;

      a {
        color: white;
        text-decoration: none;
      }
    }
  }

  button {
    width: fit-content;
    height: fit-content;
    margin: 21px auto;
    color: white;
    text-transform: capitalize;
    border: none;
    padding: 9px 14px;
    background-color: #84A17D;
  }
`

export const Homes = styled.div`
width: 100%;
  .align-text{
    padding: 10px 16px;
    margin: 49px auto;
    width: fit-content;
    background-color: #F3F7F2;
  }
  .logotip{
    text-align: center;
    font-size: 62px;
    margin: 1px auto;
    width: fit-content;
  }
`
