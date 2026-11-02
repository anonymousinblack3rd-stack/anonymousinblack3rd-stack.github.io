// Dados do levantamento próprio de incidência (os mesmos da plataforma ITA·IME·EN)
// e os programas oficiais de Matemática das bancas.
window.INCIDENCIA = {
  ITA: { rotulo:"ITA — 1ª fase", escopo:"2015 a 2025 · 146 questões em nove concursos",
    dados:[["Geometria analítica",19],["Matrizes, determinantes e sistemas",17],["Trigonometria",17],
      ["Combinatória e probabilidade",16],["Geometria plana",15],["Funções, logaritmos e equações",15],
      ["Números complexos",13],["Polinômios",11],["Geometria espacial",11],["Sequências e séries",7],
      ["Conjuntos e números inteiros",5]] },
  IME: { rotulo:"IME — provas objetivas", escopo:"2010 e 2014 · 30 questões — amostra pequena, leia como tendência",
    dados:[["Geometria (plana, espacial, analítica)",8],["Álgebra e funções",7],["Trigonometria",4],
      ["Sequências e séries",3],["Matrizes e sistemas",3],["Combinatória e probabilidade",3],
      ["Números complexos",2]] },
  EN: { rotulo:"Escola Naval", escopo:"2014 a 2023 · 206 questões em dez concursos",
    dados:[["Cálculo",48],["Geometria espacial",26],["Geometria analítica",26],
      ["Combinatória e probabilidade",22],["Geometria plana",20],["Números complexos",16],
      ["Sequências",14],["Matrizes e sistemas",14],["Trigonometria",10],["Outros",10]] }
};

// Pesos (% do esforço sugerido) usados no mapa de prioridade
window.PESOS = {
  ITA:[["Álgebra e funções",20],["Geometria analítica e cônicas",15],["Trigonometria",13],
    ["Números complexos",12],["Geometria plana e espacial",12],["Sequências e recorrências",10],
    ["Combinatória e probabilidade",10],["Polinômios e aritmética",8]],
  IME:[["Geometria (plana, espacial, analítica)",26],["Álgebra e funções",22],["Trigonometria",13],
    ["Sequências e séries",10],["Matrizes e sistemas",10],["Combinatória e probabilidade",10],
    ["Números complexos",9]],
  EN:[["Cálculo",23],["Geometria analítica",13],["Geometria espacial",13],
    ["Combinatória e probabilidade",11],["Geometria plana",10],["Números complexos",8],
    ["Sequências",7],["Matrizes e sistemas",7],["Trigonometria",5],["Revisão geral",3]]
};

window.METODOLOGIA =
  "O levantamento é meu, feito questão a questão sobre as provas do período indicado. " +
  "Questão que mistura dois temas foi classificada pelo assunto que resolve o problema, não pelo " +
  "que aparece no enunciado. Ficaram de fora o ITA de 2019 e de 2020. O conjunto de 2023 da Escola " +
  "Naval não teve conferência em segunda fonte. A amostra do IME é pequena — trate como tendência, " +
  "não como estatística.";

// Programas oficiais de Matemática
window.PROGRAMAS = {
  ITA: { fonte:"https://www.vestibular.ita.br/programa_2026.pdf", rotulo:"Programa oficial do ITA",
    nota:"Programa do exame de escolaridade, vestibular 2026.",
    itens:[
     ["Teoria dos conjuntos e conjuntos numéricos","Subconjuntos, união, interseção, diferença e complementar. Naturais, inteiros, racionais, irracionais e reais. Indução e princípio da casa dos pombos."],
     ["Números complexos","Forma algébrica e trigonométrica, operações, raízes, fórmula de De Moivre."],
     ["Progressões aritméticas e geométricas","Propriedades, soma dos termos, soma da PG infinita."],
     ["Funções","Injetoras, sobrejetoras e bijetoras. Pares, ímpares e periódicas. Composta e inversa. Afim, quadrática e modular. Logarítmica e exponencial, com equações e inequações."],
     ["Polinômios","Conceito, grau e propriedades. Operações, fatoração e produtos notáveis. Raízes. Teorema fundamental da álgebra."],
     ["Equações algébricas","Raízes, multiplicidade e número de raízes. Transformações aditiva e multiplicativa. Equações recíprocas. Relação entre coeficientes e raízes. Raízes reais e complexas."],
     ["Combinatória e probabilidade","Contagem, arranjos, permutações, combinações, binômio de Newton. Espaço amostral, probabilidade condicional, eventos independentes."],
     ["Matrizes e determinantes","Operações, propriedades e inversa. Determinantes. Matriz associada a sistema linear. Resolução e discussão de sistemas."],
     ["Trigonometria","Adição, subtração e bissecção de arcos. Funções trigonométricas e identidades. Transformação de soma em produto. Equações e inequações."],
     ["Geometria analítica","Coordenadas, distâncias, reta (paralelismo, perpendicularidade, ângulos, distância de ponto a reta). Circunferência e tangências. Elipse, hipérbole, parábola. Lugares geométricos e equações do 2º grau."],
     ["Geometria plana","Polígonos e círculos, congruência, semelhança, relações métricas, polígonos regulares, áreas de polígonos, círculos, coroas e setores."],
     ["Geometria espacial","Posições relativas de retas e planos, poliedros regulares, prismas, pirâmides e troncos, cilindros, cones, esferas, áreas e volumes."]] },
  IME: { fonte:"https://inscricoes.ime.eb.br/documentos/Edital_CFG_ATIVA_2026_2027.pdf",
    rotulo:"Programa oficial do IME — CFG", nota:"Anexo C do edital do concurso 2026/2027.",
    itens:[
     ["Teoria de conjuntos","Subconjuntos, operações, conjunto universo e vazio. Domínio e contradomínio. Conjuntos numéricos até os complexos. Sistemas de numeração e mudança de base."],
     ["Funções","Injetoras, sobrejetoras, bijetoras. Inversa e composta. Pares, ímpares, periódicas. Do 1º grau, quadrática, modular e máximo inteiro. Equações e inequações. Mínimo e máximo da quadrática. Gráficos. Indução finita e redução ao absurdo."],
     ["Números complexos","Forma algébrica e trigonométrica. Conjugado e módulo. Potenciação e radiciação. Fórmulas de De Moivre. Equações binomiais e trinomiais."],
     ["Polinômios","Grau, operações, identidades. Divisão por binômio do 1º grau e divisão de polinômios. Briot-Ruffini. Raízes e relação com os coeficientes. Regra de Descartes. Teorema fundamental da álgebra. MDC de polinômios."],
     ["Equações e inequações algébricas","Cálculo de raízes, multiplicidade, raízes comuns e múltiplas. Transformações aditiva e multiplicativa. Equações recíprocas."],
     ["Trinômio do 2º grau","Decomposição em fatores do 1º grau. Sinais do trinômio. Inequações."],
     ["Progressões aritméticas e geométricas","Termo geral, soma e produto dos termos. Interpolação aritmética e geométrica. PG infinita."],
     ["Combinatória, probabilidade e binômio de Newton","Princípio fundamental da contagem, arranjos, permutações (inclusive com repetição) e combinações. Espaço amostral discreto e contínuo. Leis da adição e da multiplicação. Probabilidade condicional e total."],
     ["Matrizes, determinantes e sistemas lineares","Operações e propriedades. Inversa e transposta. Matrizes equivalentes, elementar e não singular. Resolução e discussão de sistemas. Redução gaussiana, regra de Cramer, teorema de Rouché-Capelli."],
     ["Logaritmos e função exponencial","Propriedades, mudança de base, característica e mantissa, cologaritmos. Equações e inequações."],
     ["Trigonometria","Arcos e ângulos, relações trigonométricas. Adição, subtração e bissecção. Transformação de soma em produto. Redução ao primeiro quadrante. Funções trigonométricas e suas inversas. Equações, inequações e sistemas. Resolução de triângulos."],
     ["Geometria analítica","Ponto, distância, reta, paralelismo e perpendicularidade, ângulo entre retas, distância de ponto a reta. Circunferência e eixo radical. Elipse, parábola e hipérbole. Lugares geométricos e equações do 2º grau. No espaço: equações de retas e planos, distâncias, ângulos e lugares geométricos."],
     ["Geometria plana","Polígonos, circunferências e círculos. Semelhança e congruência. Relações métricas em triângulos, polígonos regulares e círculos. Áreas de polígonos, círculos, coroas e setores. Lugares geométricos. Linha poligonal."],
     ["Geometria espacial","Retas, planos e posições relativas. Poliedros. Prismas, pirâmides e troncos. Cilindros, cones e esferas. Áreas e volumes. Projeções. Sólidos de revolução. Lugares geométricos."]] }
};
