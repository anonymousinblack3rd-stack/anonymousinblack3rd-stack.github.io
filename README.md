# Site — Prof. Haroldo Costa Silva Filho

Site estático: só HTML, CSS, JavaScript e os PDFs. Não depende de servidor nem de banco de dados.
Funciona de graça no GitHub Pages e abre direto no navegador se você clicar em `index.html`.

## Estrutura

    index.html           início
    livros.html          os cinco livros, com as amostras
    material.html        listas de exercícios e provas resolvidas
    laboratorio.html     animações e construções do GeoGebra
    pesquisa.html        artigos, tese e código de teoria dos grafos
    servicos.html        simulados sob encomenda e mentoria
    resolucoes/cap1.html resoluções do capítulo 1 de Geometria Espacial
    assets/estilo.css    todo o estilo do site
    assets/lab.js        as animações do Laboratório
    assets/*.jpg         as capas
    arquivos/*.pdf       tudo que o visitante baixa

## Publicar no GitHub Pages

O domínio é `matematica-haroldofilho.com.br` e a conta do GitHub é `haroldosfilho`.

1. Em github.com, crie um repositório **público** com o nome exato `haroldosfilho.github.io`.
2. Em **Add file → Upload files**, arraste para dentro **o conteúdo desta pasta** — os
   arquivos e as subpastas, não a pasta inteira. Inclua o arquivo `CNAME`, que já vem
   pronto com o domínio dentro. Confirme em *Commit changes*.
3. Em **Settings → Pages**, em *Branch*, escolha `main` e `/ (root)`, e salve.
4. Em dois ou três minutos o site está no ar em `https://haroldosfilho.github.io`.

## Apontar matematica-haroldofilho.com.br

O domínio continua usando os servidores DNS do registro.br. Não troque os nameservers e
não mexa no DNSSEC: quem assina a zona é o registro.br, e assim continua funcionando.

No painel do registro.br, abra o domínio e clique em **Configurar endereçamento**. Cadastre:

| Tipo  | Nome  | Valor                 |
|-------|-------|-----------------------|
| A     | @     | 185.199.108.153       |
| A     | @     | 185.199.109.153       |
| A     | @     | 185.199.110.153       |
| A     | @     | 185.199.111.153       |
| CNAME | www   | haroldosfilho.github.io |

São quatro registros A no domínio raiz, um para cada endereço, e um CNAME em `www`.

Depois, no GitHub, em **Settings → Pages → Custom domain**, escreva
`matematica-haroldofilho.com.br` e salve. O GitHub verifica o DNS e, quando a verificação
passar, libera a opção **Enforce HTTPS** — marque.

A propagação costuma levar de minutos a algumas horas. O certificado HTTPS sai depois da
propagação, então é normal o site abrir primeiro em http e só depois em https.

## Acrescentar material

**Lista ou prova.** Cada item é um bloco `<li class="item">` dentro de `material.html`. Copie um
bloco, troque o título, a descrição e o nome do arquivo, e ponha o PDF em `arquivos/`.

**Livro.** Mesmo princípio em `livros.html`, no bloco `<article class="livro">`.

**Construção do GeoGebra.** Publique a construção na sua conta do geogebra.org e pegue o código do
material — é o pedaço final do endereço, em `geogebra.org/m/CODIGO`. Depois cole em
`laboratorio.html`:

    <article class="lab" data-ggb="CODIGO">
      <h3>Título da construção</h3>
      <p>Uma ou duas linhas dizendo o que a construção mostra.</p>
      <div class="palco"><div class="ggb-alvo"></div></div>
      <div class="ctrl"><button class="btn" data-abrir>Abrir a construção</button></div>
    </article>

O applet só é carregado quando o visitante clica em *Abrir* — assim a página continua leve mesmo
com várias construções.

**Vídeo.** Ponha o arquivo em `arquivos/` e cole em `laboratorio.html`:

    <article class="lab">
      <h3>Título do vídeo</h3>
      <p>Uma ou duas linhas sobre o que ele mostra.</p>
      <div class="palco">
        <video controls preload="metadata" style="width:100%;display:block"
               src="arquivos/NOME-DO-VIDEO.mp4"></video>
      </div>
    </article>

Vídeo grande pesa no repositório: acima de uns 50 MB, prefira subir no YouTube e embutir.

## O que ainda falta preencher

- **Construções do GeoGebra.** A seção está pronta e sem nenhuma construção ainda.
- **E-mail de contato.** O botão de orçamento em `servicos.html` abre um e-mail para
  `haroldosfilho@gmail.com`. Se quiser um endereço só para isso, troque nas duas ocorrências
  dentro daquele arquivo.
- **Links de compra.** Todos os botões *Comprar* apontam hoje para a sua página de autor na
  Amazon. Para mandar cada livro direto à sua página de venda, troque o endereço no `href`
  daquele botão.
