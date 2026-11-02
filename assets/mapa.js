(function(){
  var INC = window.INCIDENCIA, PESOS = window.PESOS;
  if(!INC) return;

  // ---------- barras de incidência ----------
  function barras(el, dados, unidade){
    if(!el) return;
    var max = Math.max.apply(null, dados.map(function(d){return d[1];}));
    el.innerHTML = dados.map(function(d){
      var pc = Math.round(d[1]/max*100);
      return '<div class="bar"><span class="rot">' + d[0] + '</span>' +
             '<span class="trilho"><span class="preench" style="width:' + pc + '%"></span></span>' +
             '<span class="val">' + d[1] + '</span></div>';
    }).join("");
    if(unidade){ el.insertAdjacentHTML("beforeend",
      '<p class="meta" style="margin-top:8px">' + unidade + '</p>'); }
  }
  Object.keys(INC).forEach(function(k){
    var b = INC[k];
    barras(document.getElementById("inc-" + k.toLowerCase()), b.dados, b.escopo);
  });
  var m = document.getElementById("metodologia");
  if(m && window.METODOLOGIA) m.textContent = window.METODOLOGIA;

  // ---------- mapa de prioridade ----------
  var alvo = document.getElementById("prioridade");
  if(!alvo || !PESOS) return;
  var NIVEIS = [["pouco","Sei pouco",3],["medio","Mais ou menos",2],["bem","Sei bem",1]];
  var CHAVE = "mapa-estudo-v1";
  var estado = {};
  try { estado = JSON.parse(localStorage.getItem(CHAVE) || "{}") || {}; } catch(e){ estado = {}; }
  function salvar(){ try { localStorage.setItem(CHAVE, JSON.stringify(estado)); } catch(e){} }

  var banca = "ITA";
  var abas = document.getElementById("abas-banca");
  var saida = document.getElementById("plano");

  function desenha(){
    if(abas) abas.querySelectorAll("button").forEach(function(b){
      b.setAttribute("aria-pressed", b.dataset.b === banca ? "true" : "false"); });
    var lista = PESOS[banca];
    alvo.innerHTML = lista.map(function(t){
      var id = banca + "|" + t[0];
      var at = estado[id] || "";
      var bots = NIVEIS.map(function(n){
        return '<button type="button" class="nv" data-id="' + id + '" data-n="' + n[0] + '"' +
               (at === n[0] ? ' aria-pressed="true"' : ' aria-pressed="false"') + '>' + n[1] + '</button>';
      }).join("");
      return '<div class="tema"><div class="tnome">' + t[0] +
             '<span class="peso">' + t[1] + '% do esforço</span></div>' +
             '<div class="niveis">' + bots + '</div></div>';
    }).join("");
    alvo.querySelectorAll("button.nv").forEach(function(b){
      b.addEventListener("click", function(){
        var id = b.dataset.id;
        estado[id] = (estado[id] === b.dataset.n) ? "" : b.dataset.n;
        salvar(); desenha();
      });
    });
    plano();
  }

  function plano(){
    if(!saida) return;
    var lista = PESOS[banca];
    var avaliados = lista.filter(function(t){ return estado[banca + "|" + t[0]]; });
    if(avaliados.length === 0){
      saida.innerHTML = '<p class="meta">Marque os temas acima e a ordem de estudo aparece aqui.</p>';
      return;
    }
    var fator = {pouco:3, medio:2, bem:1};
    var ord = lista.map(function(t){
      var n = estado[banca + "|" + t[0]] || "medio";
      return {nome:t[0], peso:t[1], nivel:n, score:t[1] * fator[n]};
    }).sort(function(a,b){ return b.score - a.score; });

    var prio = ord.filter(function(t){ return t.nivel === "pouco"; });
    var manter = ord.filter(function(t){ return t.nivel === "bem"; });
    var meio = ord.filter(function(t){ return t.nivel === "medio" && estado[banca + "|" + t.nome]; });

    var html = '<h4>Estude nesta ordem</h4><ol class="ordem">' +
      ord.map(function(t, i){
        return '<li><b>' + t.nome + '</b> <span class="meta">' + t.peso + '% · ' +
               ({pouco:"sei pouco", medio:"mais ou menos", bem:"sei bem"})[t.nivel] + '</span></li>';
      }).join("") + "</ol>";

    var obs = [];
    if(prio.length) obs.push("<b>" + prio.length + "</b> tema" + (prio.length>1?"s":"") +
      " de peso alto que você marcou como fraco: é aqui que está o ganho de nota, e é onde vai a maior parte das suas horas.");
    if(meio.length) obs.push("Os " + meio.length + " temas de meio-termo entram depois — são os que mais sobem com pouco esforço.");
    if(manter.length) obs.push("Os seus <b>" + manter.length + "</b> pontos fortes não saem do plano: uma lista curta por semana, para não enferrujar. Ponto forte abandonado vira ponto fraco em dois meses.");
    html += '<p class="obs">' + obs.join(" ") + "</p>";
    saida.innerHTML = html;
  }

  if(abas) abas.addEventListener("click", function(e){
    var b = e.target.closest("button[data-b]"); if(!b) return;
    banca = b.dataset.b; desenha();
  });
  var limpar = document.getElementById("limpar");
  if(limpar) limpar.addEventListener("click", function(){
    Object.keys(estado).forEach(function(k){ if(k.indexOf(banca + "|") === 0) delete estado[k]; });
    salvar(); desenha();
  });
  desenha();
})();
