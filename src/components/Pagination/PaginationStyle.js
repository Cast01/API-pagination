import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 10px 0;
  background: #c6c6c6;
  display: flex;
  justify-content: center;

  .button-pagination {
    button {
      padding: 5px 15px;
      margin: 0 10px;
      cursor: pointer;

      @media (max-width: 530px) {
        padding: 5px 5px;
      }
    }

    .pagination-item--active {
      background: none;
    }
  }
`;
