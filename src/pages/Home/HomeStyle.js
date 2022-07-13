import styled from "styled-components";

export const Container = styled.div`
  width: clamp(300px, 100%, 1400px);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: cadetblue;

  header {
    width: 100%;
    height: 65px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;

    .input-icon {
      position: relative;
      width: 60%;

      input {
        width: 100%;
        height: 30px;
        font-size: 18px;
      }

      svg {
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
      }
    }
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;

    .anime {
      width: 80%;
      list-style-type: none;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 15px;
      padding: 15px 0;

      li {
        width: 250px;
        height: 330px;
        display: flex;
        flex-direction: column;
        background: linear-gradient(to bottom, #c7c7c7, transparent);
        cursor: pointer;
        transition: 0.3s;

        &:hover {
          transform: scale(1.1, 1.1);
          background: #437778;
        }

        img {
          width: 100%;
          height: 70%;
          object-fit: cover;
          background: black;
        }

        .description {
          width: 100%;
          height: 30%;
          display: flex;
          justify-content: center;
          align-items: center;

          h1 {
            width: 90%;
            font-size: 20px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            cursor: default;
          }
        }
      }
    }
  }
`;
