import styled from "styled-components";
import bgImage from '../../assest/bgImage.png';

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

  @media screen and (max-width: 768px) {
    width: 100%;
    text-align: center;
    display: flow-root;
    nav {
      display: flow-root;
    }
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    text-align: center;
    display: flow-root;
    nav {
      display: flow-root;
    }
  }
`;

export const Homes = styled.div`
  width: 100%;

  .align-text {
    padding: 10px 30px;
    margin: 49px auto;
    width: fit-content;
    background-color: #F3F7F2;
  }

  .logotip {
    text-align: center;
    font-size: 62px;
    margin: 1px auto;
    width: fit-content;
  }

  img {
    width: 94%;
    height: fit-content;
    margin: 40px;
  }

  @media screen and (max-width: 768px) {
    img {
      width: 100%;
      margin: 40px auto;
    }
  }

  @media screen and (max-width: 480px) {
    width: fit-content;
    .logotip {
      font-size: 40px;
    }
  }
`;

export const Landing = styled.div`
  width: 100%;
  margin: 20px auto;

  .landing {
    width: fit-content;
    background-color: #F3F7F2;
    padding: 10px 30px;
    text-transform: uppercase;
    margin: 20px auto;
  }

  .discover {
    width: fit-content;
    margin: 10px auto;
    font-size: 62px;
    text-align: center;
  }

  .card-wrapper {
    display: flex;
    flex-wrap: wrap;
    width: 100%;

    .cards {
      padding-bottom: 30px;
      background: #F2F8F8;
      width: fit-content;
      margin: 40px auto;
      border-radius: 8px;

      p {
        padding: 40px;
        font-weight: 600;
        text-transform: capitalize;
      }

      img {
        margin: 10px 40px auto;
        width: fit-content;
      }
    }
  }

  @media screen and (max-width: 768px) {
    width: fit-content;
    .discover {
      font-size: 52px;
    }
  }
  @media screen and (max-width: 480px) {
    width: fit-content;
    margin: 20px auto;
    text-align: center;
    .discover {
      font-size: 40px;
    }

    .card-wrapper {
      width: fit-content;
      margin: 20px 15px;

      .cards {
        width: available;
        padding: 0;
        margin: 20px 0;

        text-align: center;

        img {
          width: fit-content;
          margin: 20px auto;
        }
      }
    }
  }

`;

export const Additional = styled.div`
  width: 100%;

  .landing {
    width: fit-content;
    background-color: #F3F7F2;
    padding: 10px 30px;
    text-transform: uppercase;
    margin: 20px auto;
  }

  .add {
    width: fit-content;
    margin: 30px auto;
    text-transform: capitalize;
    font-size: 62px;
  }

  .card-wraper {
    width: 90%;
    margin: 10px auto;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;

    .card {
      background: #F2F8F8;
      width: 40%;
      text-transform: capitalize;
      padding: 30px 20px;
      font-weight: bold;
      margin: 20px;
    }
  }

  .bg-image {
    width: fit-content;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    text-align: center;
    .add {
      font-size: 40px;
    }

    .card-wraper {
      width: fit-content;

      .card {
        width: fit-content;
        font-size: 14px;
      }
    }
  }
`;

export const EndTitle = styled.div`
  width: 75%;
  background-size: 100%;
  margin: 30px auto;
  height: fit-content;
  color: white;
  background-image: url(${bgImage});

  .align-title {
    padding: 40px 0;
    font-size: 36px;
    margin: 0px 30px;
  }

  .sample-text {
    display: flex;
    padding: 1px 0px 20px 26px;

    .number-text {
      font-size: 12px;

      span {
        font-size: 30px;
      }
    }

    button {
      margin: 0px 30px;
      padding: 4px 25px;
      font-size: 13px;
      border: none;
      background: #84A17D;
      border-radius: 4px;
      color: white;
    }
  }


  @media screen and (max-width: 480px) {
    width: 100%;
    text-align: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin: 40px 0;
    .sample-text {
      width: fit-content;
      margin: auto;
      display: flow-root;

      button {
        padding: 10px 23px;
        margin: 20px 0;
      }
    }
  }
`;

export const Footer = styled.div`
  color: white;
  width: 100%;
  background-color: #153C3C;

  .build {
    font-size: 36px;
    margin: 0px 120px;
    padding: 70px 0;
  }

  .contain {
    padding: 0px 0 30px 0;
    margin: -30px 120px;
  }

  .nav-link {
    width: 40%;
    margin: -100px 700px;
    display: flex;
    position: relative;
    top: -110px;

    nav {
      margin: 10px 30px;
      list-style: none;
      text-transform: capitalize;
      width: fit-content;

      .overview {
        padding: 20px 0px;
      }

      li {
        cursor: pointer;
        color: #6C8989;
        font-size: 15px;
        width: 100%;
        margin: 17px 0;
      }
    }
  }

  .logos {
    width: fit-content;
    margin: 0px auto;
    display: flex;
    justify-content: space-between;
    padding: 30px 0;

    .template {
      text-transform: capitalize;
      padding: 0px 20px;
      margin: auto;
    }

    span {
      margin: auto;
      padding: 2px 30px;
      color: #6c8989;
    }
  }

  @media screen and  (max-width: 768px) {
    width: 100%;
    .build {
      width: fit-content;
      font-size: 33px;
      margin: 10px auto;
    }

    .contain {
      width: fit-content;
      margin: -20px auto;
    }

    .nav-link {
      width: fit-content;
      margin: 110px auto;
    }

    .logos {
      position: relative;
      top: -80px;
      padding: 0px 0px -100px 0;
    }
  }
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`
