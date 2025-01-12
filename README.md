# JSX-Attributes-and-Styling
Created with CodeSandbox

Este projeto demonstra um exemplo simples de como usar o React para criar um componente que exibe imagens e um título editável.

## Funcionalidades

- Exibição de um título editável que descreve comidas favoritas.
- Renderização de uma galeria com imagens estáticas e dinâmicas:
- Três imagens estáticas de URLs externas.
- Uma imagem dinâmica com URL gerada e personalização de filtros (desfoque e escala de cinza).
- Habilitação/desabilitação de recursos específicos como contentEditable e spellCheck.


## Código do Projeto
``` javascript
import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/id/870/200/300?grayscale&blur=2";

ReactDOM.render(
  <div spellcheck="false">
    <h1 className="TitleFoods" contentEditable="true">
      My Favourite Foods
    </h1>
    <div className="imgs-foods">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOhm8a4oNJSeFB-anZnOAnyS9yXgme9hedng&s" />
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNfbQq_2MCnJ-52jrSpHCasao3_YSb8ndQ4w&s" />
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRP1FIvJt037W1O0aODGuqr7dqclYf3EuypQ&s" />
      <img src={img + "?blur"} />
    </div>
  </div>,
  document.getElementById("root")
);
```
## Estrutura do Projeto

- **Título Editável**:
  - O título My Favourite Foods pode ser editado diretamente no navegador.
    
- **Imagens**:
  - Três imagens de URLs externas.
  - Uma imagem dinâmica gerada pelo serviço Picsum, com filtros aplicados.
    
## Personalizações no Código

- **Habilitar/Desabilitar Recursos:**
  - contentEditable="true": Permite que o título seja editado.
  - spellCheck="false": Desativa a verificação ortográfica.

- **Galeria**:
  - Imagens estáticas e dinâmicas são estilizadas diretamente no componente.

## Exemplo de Saída

- **A página exibirá**:
  - Um título editável: My Favourite Foods.
  - Uma galeria de imagens, incluindo:
  - Imagens pré-definidas de comidas.
  - Uma imagem dinâmica com filtros de desfoque e escala de cinza.

## Tecnologias Utilizadas
- **React**: Para criação da interface.
- **HTML Dinâmico**: Renderização de elementos.
- **Serviços Externos**: Imagem dinâmica gerada com URL do Picsum.
