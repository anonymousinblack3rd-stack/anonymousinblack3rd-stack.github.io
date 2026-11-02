// Banco de questões do módulo eletrônico.
// Para acrescentar uma questão, copie um bloco e troque os campos.
// correta: índice da alternativa certa, começando em 0.
window.QUESTOES = [
{
  assunto: "Geometria de posição",
  enun: "Num cubo de aresta <i>a</i>, considere uma diagonal do cubo e uma aresta que não a intercepta. A distância entre essas duas retas é",
  alts: ["<i>a</i>&radic;2 / 2", "<i>a</i>&radic;3 / 3", "<i>a</i> / 2", "<i>a</i>&radic;3 / 2", "<i>a</i>&radic;6 / 3"],
  correta: 0,
  sol: "<p>As duas retas são reversas, então a distância entre elas é o comprimento da perpendicular comum. Em vez de procurá-la no espaço, projete tudo num plano perpendicular à aresta.</p><p>Tome o cubo com um vértice na origem e os eixos ao longo de três arestas. A diagonal vai de (0,&nbsp;0,&nbsp;0) a (<i>a</i>,&nbsp;<i>a</i>,&nbsp;<i>a</i>); a aresta escolhida tem a direção do eixo <i>y</i> e passa por (<i>a</i>,&nbsp;0,&nbsp;0).</p><p>Projetando no plano <i>xz</i>, que é perpendicular a essa aresta, a aresta vira o ponto (<i>a</i>,&nbsp;0) e a diagonal vira a reta <i>z</i>&nbsp;=&nbsp;<i>x</i>. Como a projeção é feita na direção da aresta, a distância entre as duas retas no espaço é exatamente a distância do ponto à reta no plano.</p><p>Essa distância é <i>a</i>&nbsp;/&nbsp;&radic;2.</p><p class=\"resp\">Resposta: <i>a</i>&radic;2 / 2</p>"
},
{
  assunto: "Poliedros regulares",
  enun: "O ângulo diedro entre duas faces de um tetraedro regular mede",
  alts: ["arccos(1/2)", "arccos(&radic;2 / 2)", "arccos(1/3)", "arccos(&radic;3 / 3)", "arccos(2/3)"],
  correta: 2,
  sol: "<p>Seja o tetraedro <i>ABCD</i> de aresta <i>a</i> e seja <i>M</i> o ponto médio da aresta <i>BC</i>. Os segmentos <i>AM</i> e <i>DM</i> são medianas das faces <i>ABC</i> e <i>DBC</i>, e ambos são perpendiculares a <i>BC</i> — logo o ângulo <i>AMD</i> é o ângulo diedro procurado.</p><p>Como cada face é equilátera, <i>AM</i>&nbsp;=&nbsp;<i>DM</i>&nbsp;=&nbsp;<i>a</i>&radic;3&nbsp;/&nbsp;2, e <i>AD</i>&nbsp;=&nbsp;<i>a</i>.</p><p>Na lei dos cossenos no triângulo <i>AMD</i>: cos&nbsp;&theta;&nbsp;=&nbsp;(3<i>a</i>&sup2;/4&nbsp;+&nbsp;3<i>a</i>&sup2;/4&nbsp;&minus;&nbsp;<i>a</i>&sup2;)&nbsp;/&nbsp;(2&nbsp;&middot;&nbsp;3<i>a</i>&sup2;/4)&nbsp;=&nbsp;(<i>a</i>&sup2;/2)&nbsp;/&nbsp;(3<i>a</i>&sup2;/2)&nbsp;=&nbsp;1/3.</p><p class=\"resp\">Resposta: arccos(1/3)</p>"
},
{
  assunto: "Poliedros regulares",
  enun: "O volume do octaedro regular de aresta <i>a</i> é",
  alts: ["<i>a</i>&sup3;&radic;2 / 12", "<i>a</i>&sup3;&radic;2 / 6", "<i>a</i>&sup3;&radic;2 / 3", "<i>a</i>&sup3;&radic;3 / 3", "<i>a</i>&sup3; / 3"],
  correta: 2,
  sol: "<p>O octaedro regular é a união de duas pirâmides de base quadrada coladas pela base. Essa decomposição é a ideia toda: o resto é contar.</p><p>A base comum é um quadrado de lado <i>a</i>, logo tem área <i>a</i>&sup2;. A altura de cada pirâmide é metade da diagonal que liga os dois vértices opostos do octaedro.</p><p>Essa diagonal é a diagonal de um quadrado de lado <i>a</i> formado por quatro arestas, e mede <i>a</i>&radic;2. A altura de cada pirâmide é, portanto, <i>a</i>&radic;2&nbsp;/&nbsp;2.</p><p>Somando as duas: <i>V</i>&nbsp;=&nbsp;2&nbsp;&middot;&nbsp;(1/3)&nbsp;&middot;&nbsp;<i>a</i>&sup2;&nbsp;&middot;&nbsp;<i>a</i>&radic;2/2&nbsp;=&nbsp;<i>a</i>&sup3;&radic;2&nbsp;/&nbsp;3.</p><p class=\"resp\">Resposta: <i>a</i>&sup3;&radic;2 / 3</p>"
},
{
  assunto: "Cones e esferas",
  enun: "Num cone equilátero de raio <i>R</i> — aquele cuja geratriz mede o dobro do raio — o raio da esfera inscrita é",
  alts: ["<i>R</i> / 2", "<i>R</i>&radic;3 / 3", "<i>R</i>&radic;2 / 2", "<i>R</i>&radic;3 / 2", "<i>R</i> / 3"],
  correta: 1,
  sol: "<p>Corte o cone pelo plano que contém o eixo. A secção é um triângulo isósceles de base 2<i>R</i> e lados iguais à geratriz, que vale 2<i>R</i> — ou seja, um triângulo equilátero de lado 2<i>R</i>.</p><p>A esfera inscrita no cone toca a base e toda a superfície lateral. No corte, ela aparece como o círculo inscrito nesse triângulo, e o raio da esfera é o raio desse círculo.</p><p>O inraio de um triângulo equilátero de lado <i>l</i> é <i>l</i>&radic;3&nbsp;/&nbsp;6. Com <i>l</i>&nbsp;=&nbsp;2<i>R</i>, isso dá 2<i>R</i>&radic;3&nbsp;/&nbsp;6&nbsp;=&nbsp;<i>R</i>&radic;3&nbsp;/&nbsp;3.</p><p class=\"resp\">Resposta: <i>R</i>&radic;3 / 3</p>"
},
{
  assunto: "Pirâmides e troncos",
  enun: "Um plano paralelo à base corta uma pirâmide de altura <i>h</i> e a divide em dois sólidos de mesmo volume. A pirâmide menor, que fica junto ao vértice, tem altura",
  alts: ["<i>h</i> / 2", "<i>h</i>&radic;2 / 2", "<i>h</i>&#8731;2 / 2", "<i>h</i>&#8731;4 / 2", "2<i>h</i> / 3"],
  correta: 3,
  sol: "<p>A pirâmide menor é semelhante à original. Se a razão de semelhança é <i>k</i>, os volumes estão na razão <i>k</i>&sup3;.</p><p>Como o sólido de cima tem metade do volume total, <i>k</i>&sup3;&nbsp;=&nbsp;1/2.</p><p>Daí <i>k</i>&nbsp;=&nbsp;1&nbsp;/&nbsp;&#8731;2. Racionalizando, <i>k</i>&nbsp;=&nbsp;&#8731;4&nbsp;/&nbsp;2.</p><p>A altura da pirâmide menor é <i>kh</i>, isto é, <i>h</i>&#8731;4&nbsp;/&nbsp;2. Repare que o corte fica acima da metade da altura, e não na metade — é o erro mais comum nessa questão.</p><p class=\"resp\">Resposta: <i>h</i>&#8731;4 / 2</p>"
},
{
  assunto: "Secções planas",
  enun: "Num cubo de aresta <i>a</i>, corta-se o sólido pelo plano que passa pelos três vértices vizinhos de um mesmo vértice. A área da secção é",
  alts: ["<i>a</i>&sup2;&radic;3 / 4", "<i>a</i>&sup2;&radic;2 / 2", "<i>a</i>&sup2;&radic;3 / 2", "<i>a</i>&sup2; / 2", "<i>a</i>&sup2;&radic;3"],
  correta: 2,
  sol: "<p>Os três vértices vizinhos de um vértice do cubo são dois a dois ligados por diagonais de face. A secção é, portanto, um triângulo equilátero de lado <i>a</i>&radic;2.</p><p>A área de um triângulo equilátero de lado <i>l</i> é <i>l</i>&sup2;&radic;3&nbsp;/&nbsp;4.</p><p>Com <i>l</i>&nbsp;=&nbsp;<i>a</i>&radic;2, temos <i>l</i>&sup2;&nbsp;=&nbsp;2<i>a</i>&sup2;, e a área vale 2<i>a</i>&sup2;&radic;3&nbsp;/&nbsp;4&nbsp;=&nbsp;<i>a</i>&sup2;&radic;3&nbsp;/&nbsp;2.</p><p class=\"resp\">Resposta: <i>a</i>&sup2;&radic;3 / 2</p>"
},
{
  assunto: "Relação de Euler",
  enun: "Um poliedro convexo tem 20 arestas e 10 vértices, e todas as suas faces são triângulos ou quadriláteros. O número de faces triangulares é",
  alts: ["4", "6", "8", "10", "12"],
  correta: 2,
  sol: "<p>Pela relação de Euler, <i>V</i>&nbsp;&minus;&nbsp;<i>A</i>&nbsp;+&nbsp;<i>F</i>&nbsp;=&nbsp;2, logo <i>F</i>&nbsp;=&nbsp;2&nbsp;&minus;&nbsp;10&nbsp;+&nbsp;20&nbsp;=&nbsp;12.</p><p>Chame de <i>t</i> o número de faces triangulares e de <i>q</i> o de quadrangulares. Então <i>t</i>&nbsp;+&nbsp;<i>q</i>&nbsp;=&nbsp;12.</p><p>A segunda equação vem de contar os lados das faces: cada aresta pertence a exatamente duas faces, de modo que 3<i>t</i>&nbsp;+&nbsp;4<i>q</i>&nbsp;=&nbsp;2<i>A</i>&nbsp;=&nbsp;40.</p><p>Substituindo <i>q</i>&nbsp;=&nbsp;12&nbsp;&minus;&nbsp;<i>t</i>: 3<i>t</i>&nbsp;+&nbsp;48&nbsp;&minus;&nbsp;4<i>t</i>&nbsp;=&nbsp;40, ou seja, <i>t</i>&nbsp;=&nbsp;8.</p><p class=\"resp\">Resposta: 8</p>"
},
{
  assunto: "Geometria de posição",
  enun: "Quantos pares de arestas reversas existem num cubo?",
  alts: ["12", "16", "24", "36", "48"],
  correta: 2,
  sol: "<p>Fixe uma aresta. Das onze restantes, três são paralelas a ela e quatro a encontram — duas em cada extremidade. Sobram quatro arestas reversas a ela.</p><p>Contando assim para cada uma das doze arestas, cada par reverso é contado duas vezes, uma por cada aresta do par.</p><p>Logo o número de pares é 12&nbsp;&middot;&nbsp;4&nbsp;/&nbsp;2&nbsp;=&nbsp;24.</p><p class=\"resp\">Resposta: 24</p>"
}
];
