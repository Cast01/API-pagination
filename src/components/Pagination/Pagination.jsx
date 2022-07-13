import React, { useEffect, useState } from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { Container } from "./PaginationStyle";

export function Pagination({ limiteDeItens, totalItens, offset, setOffset }) {
  const [qtdButtons, setQtdButtons] = useState(0);

  const QTD_BOTOES_ESQUERDA = (qtdButtons - 1) / 2;
  const paginaAtual = offset ? offset / limiteDeItens + 1 : 1;
  const totalPaginas = Math.ceil(totalItens / limiteDeItens);
  const primeiroBotao = Math.max(paginaAtual - QTD_BOTOES_ESQUERDA, 1);

  const { width } = useWindowDimensions();

  function onPageChange(page) {
    setOffset((page - 1) * limiteDeItens);
  }

  useEffect(() => {
    if (width > 685 && width < 830) {
      setQtdButtons(7);
    } else if (width > 530 && width < 685) {
      setQtdButtons(5);
    } else if (width < 530) {
      setQtdButtons(3);
    } else {
      setQtdButtons(9);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [offset]);

  return (
    <Container>
      <ul className="button-pagination">
        <button onClick={() => onPageChange(paginaAtual - 1)} disabled={paginaAtual === 1}>Anterior</button>
        {Array.from({ length: Math.min(qtdButtons, totalPaginas) })
          .map((_, index) => index + primeiroBotao)
          .map((page) => {
            return (
              <button
                onClick={() => onPageChange(page)}
                className={
                  page === paginaAtual ? "pagination-item--active" : ""
                }
              >
                {page}
              </button>
            );
          })}
        <button onClick={() => onPageChange(paginaAtual + 1)} disabled={paginaAtual === totalPaginas}>Proximo</button>
      </ul>
    </Container>
  );
}
