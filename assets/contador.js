/* Contador de visitas — GoatCounter (sem cookies, sem rastreio pessoal).
   Para ligar: crie a conta gratuita em https://www.goatcounter.com, escolha o
   código do site e troque SEUCODIGO abaixo pelo código escolhido. Em
   Settings → "Allow adding visitor counts to your website", deixe marcado. */
(function () {
  "use strict";
  var CODIGO = "SEUCODIGO";
  if (CODIGO === "SEU" + "CODIGO") return;      // ainda não configurado
  var base = "https://" + CODIGO + ".goatcounter.com";

  // 1. registra a visita
  var s = document.createElement("script");
  s.async = true;
  s.src = base + "/count.js";
  s.setAttribute("data-goatcounter", base + "/count");
  document.head.appendChild(s);

  // 2. mostra o total acumulado
  var alvo = document.getElementById("visitas");
  if (!alvo) return;
  fetch(base + "/counter/TOTAL.json")
    .then(function (r) { return r.ok ? r.json() : Promise.reject(r.status); })
    .then(function (d) {
      var n = parseInt(String(d.count).replace(/\D/g, ""), 10);
      if (!isFinite(n)) return;
      alvo.querySelector("b").textContent = n.toLocaleString("pt-BR");
      alvo.hidden = false;
    })
    .catch(function () { /* silencioso: nada aparece se o serviço falhar */ });
})();
