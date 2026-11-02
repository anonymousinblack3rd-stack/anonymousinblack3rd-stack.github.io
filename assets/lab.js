/* Laboratorio — animacoes em canvas. Sem bibliotecas. */
(function () {
  "use strict";

  function cor(nome) {
    return getComputedStyle(document.documentElement).getPropertyValue(nome).trim();
  }

  /* ajusta o canvas a largura do contenedor, com nitidez em telas retina */
  function ajusta(cv, razao) {
    var larg = cv.parentNode.clientWidth;
    var alt = Math.round(larg / razao);
    var dpr = window.devicePixelRatio || 1;
    cv.width = Math.round(larg * dpr);
    cv.height = Math.round(alt * dpr);
    cv.style.width = larg + "px";
    cv.style.height = alt + "px";
    var ctx = cv.getContext("2d");
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    return { ctx: ctx, W: larg, H: alt };
  }

  function laco(pintar) {
    var rodando = true, t = 0, ultimo = null;
    function quadro(agora) {
      if (ultimo === null) ultimo = agora;
      var dt = (agora - ultimo) / 1000; ultimo = agora;
      if (rodando) t += dt;
      pintar(t);
      requestAnimationFrame(quadro);
    }
    requestAnimationFrame(quadro);
    return {
      alterna: function () { rodando = !rodando; return rodando; },
      ehRodando: function () { return rodando; },
      def: function (v) { t = v; },
      ler: function () { return t; }
    };
  }

  /* ============================================================
     1. O seno como altura no circulo trigonometrico
     ============================================================ */
  function circuloTrig(raiz) {
    var cv = raiz.querySelector("canvas");
    var btn = raiz.querySelector("[data-play]");
    var vel = raiz.querySelector("[data-vel]");
    var cosChk = raiz.querySelector("[data-cos]");
    var leitura = raiz.querySelector("[data-leitura]");

    function pintar(t) {
      var g = ajusta(cv, 2.1), ctx = g.ctx, W = g.W, H = g.H;
      var preto = cor("--tx"), azul = cor("--ac2"), cinza = cor("--mu");
      ctx.clearRect(0, 0, W, H);

      var th = (t * (+vel.value)) % (2 * Math.PI);
      var R = Math.min(H * 0.38, W * 0.17);
      var cx = R + 34, cy = H / 2;
      var x0 = cx + R + 34, x1 = W - 14, esc = (x1 - x0) / (2 * Math.PI);

      /* eixos do circulo */
      ctx.lineWidth = 1; ctx.strokeStyle = cinza; ctx.globalAlpha = 0.5;
      ctx.beginPath();
      ctx.moveTo(cx - R - 12, cy); ctx.lineTo(cx + R + 12, cy);
      ctx.moveTo(cx, cy - R - 12); ctx.lineTo(cx, cy + R + 12);
      ctx.stroke(); ctx.globalAlpha = 1;

      /* circunferencia */
      ctx.lineWidth = 1.4; ctx.strokeStyle = preto;
      ctx.beginPath(); ctx.arc(cx, cy, R, 0, 2 * Math.PI); ctx.stroke();

      var px = cx + R * Math.cos(th), py = cy - R * Math.sin(th);

      /* projecoes */
      ctx.save();
      ctx.setLineDash([4, 4]); ctx.lineWidth = 1.2; ctx.strokeStyle = cinza;
      ctx.beginPath();
      ctx.moveTo(px, py); ctx.lineTo(px, cy);
      ctx.moveTo(px, py); ctx.lineTo(cx, py);
      ctx.stroke();
      ctx.restore();

      /* altura = seno, em azul e cheia */
      ctx.lineWidth = 2.6; ctx.strokeStyle = azul;
      ctx.beginPath(); ctx.moveTo(px, cy); ctx.lineTo(px, py); ctx.stroke();

      /* raio */
      ctx.lineWidth = 1.6; ctx.strokeStyle = preto;
      ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(px, py); ctx.stroke();

      /* arco do angulo */
      ctx.lineWidth = 1.2; ctx.strokeStyle = azul;
      ctx.beginPath(); ctx.arc(cx, cy, R * 0.26, -th, 0, th > 0); ctx.stroke();

      /* ponto P */
      ctx.fillStyle = preto;
      ctx.beginPath(); ctx.arc(px, py, 3.6, 0, 2 * Math.PI); ctx.fill();

      /* eixo da curva */
      ctx.lineWidth = 1; ctx.strokeStyle = cinza; ctx.globalAlpha = 0.5;
      ctx.beginPath(); ctx.moveTo(x0, cy); ctx.lineTo(x1, cy); ctx.stroke();
      ctx.globalAlpha = 1;

      /* marcas em pi/2 */
      ctx.font = "11px 'Source Sans 3', sans-serif";
      ctx.fillStyle = cinza; ctx.textAlign = "center";
      var marcas = [[Math.PI / 2, "π/2"], [Math.PI, "π"],
                    [3 * Math.PI / 2, "3π/2"], [2 * Math.PI, "2π"]];
      ctx.globalAlpha = 0.65;
      for (var i = 0; i < marcas.length; i++) {
        var mx = x0 + marcas[i][0] * esc;
        ctx.beginPath(); ctx.moveTo(mx, cy - 3); ctx.lineTo(mx, cy + 3); ctx.stroke();
        ctx.fillText(marcas[i][1], mx, cy + 16);
      }
      ctx.globalAlpha = 1;

      /* cosseno, opcional */
      if (cosChk.checked) {
        ctx.lineWidth = 1.4; ctx.strokeStyle = cinza;
        ctx.beginPath();
        for (var u = 0; u <= th + 1e-9; u += 0.01) {
          var X = x0 + u * esc, Y = cy - R * Math.cos(u);
          if (u === 0) ctx.moveTo(X, Y); else ctx.lineTo(X, Y);
        }
        ctx.stroke();
        ctx.fillStyle = cinza;
        ctx.beginPath(); ctx.arc(x0 + th * esc, cy - R * Math.cos(th), 3, 0, 2 * Math.PI); ctx.fill();
      }

      /* curva do seno */
      ctx.lineWidth = 2.2; ctx.strokeStyle = azul;
      ctx.beginPath();
      for (var v = 0; v <= th + 1e-9; v += 0.01) {
        var Xs = x0 + v * esc, Ys = cy - R * Math.sin(v);
        if (v === 0) ctx.moveTo(Xs, Ys); else ctx.lineTo(Xs, Ys);
      }
      ctx.stroke();

      /* guia horizontal: a altura de P e a ordenada da curva */
      var qx = x0 + th * esc, qy = cy - R * Math.sin(th);
      ctx.save();
      ctx.setLineDash([3, 4]); ctx.lineWidth = 1.1; ctx.strokeStyle = azul;
      ctx.globalAlpha = 0.75;
      ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(qx, qy); ctx.stroke();
      ctx.restore();
      ctx.fillStyle = azul;
      ctx.beginPath(); ctx.arc(qx, qy, 3.6, 0, 2 * Math.PI); ctx.fill();

      var gr = th * 180 / Math.PI;
      leitura.textContent = "θ = " + gr.toFixed(0) + "°   ·   sen θ = "
        + Math.sin(th).toFixed(3) + (cosChk.checked ? "   ·   cos θ = " + Math.cos(th).toFixed(3) : "");
    }

    var l = laco(pintar);
    btn.addEventListener("click", function () {
      btn.textContent = l.alterna() ? "Pausar" : "Continuar";
    });
    window.addEventListener("resize", function () { pintar(l.ler()); });
  }

  /* ============================================================
     2. Cubo girando, com as arestas do fundo tracejadas
     ============================================================ */
  function cuboGirando(raiz) {
    var cv = raiz.querySelector("canvas");
    var btn = raiz.querySelector("[data-play]");
    var incl = raiz.querySelector("[data-incl]");

    var V = [[-1,-1,-1],[1,-1,-1],[1,1,-1],[-1,1,-1],
             [-1,-1, 1],[1,-1, 1],[1,1, 1],[-1,1, 1]];
    var F = [[0,1,2,3],[4,5,6,7],[0,1,5,4],[1,2,6,5],[2,3,7,6],[3,0,4,7]];
    var N = [[0,0,-1],[0,0,1],[0,-1,0],[1,0,0],[0,1,0],[-1,0,0]];

    function gira(p, a, b) {
      var x = p[0]*Math.cos(a) - p[1]*Math.sin(a);
      var y = p[0]*Math.sin(a) + p[1]*Math.cos(a);
      var z = p[2];
      return [x, y*Math.cos(b) - z*Math.sin(b), y*Math.sin(b) + z*Math.cos(b)];
    }

    function pintar(t) {
      var g = ajusta(cv, 1.85), ctx = g.ctx, W = g.W, H = g.H;
      var preto = cor("--tx"), azul = cor("--ac2"), cinza = cor("--mu");
      ctx.clearRect(0, 0, W, H);

      var a = t * 0.55, b = (+incl.value) * Math.PI / 180;
      var s = Math.min(W * 0.17, H * 0.30), cx = W / 2, cy = H / 2;

      var P = V.map(function (p) {
        var q = gira(p, a, b);
        return [cx + q[0]*s, cy - q[2]*s, q[1]];
      });
      var vis = N.map(function (n) { return gira(n, a, b)[1] < -1e-9; });

      /* faces visiveis, azul bem leve */
      ctx.fillStyle = azul; ctx.globalAlpha = 0.13;
      for (var i = 0; i < F.length; i++) {
        if (!vis[i]) continue;
        ctx.beginPath();
        for (var k = 0; k < 4; k++) {
          var p = P[F[i][k]];
          if (k === 0) ctx.moveTo(p[0], p[1]); else ctx.lineTo(p[0], p[1]);
        }
        ctx.closePath(); ctx.fill();
      }
      ctx.globalAlpha = 1;

      /* arestas: por face adjacente */
      var E = {};
      for (var f = 0; f < F.length; f++) {
        for (var j = 0; j < 4; j++) {
          var u = F[f][j], w = F[f][(j+1)%4];
          var ch = Math.min(u,w) + "-" + Math.max(u,w);
          (E[ch] = E[ch] || { a: Math.min(u,w), b: Math.max(u,w), v: false }).v |= vis[f];
        }
      }
      var chaves = Object.keys(E);
      /* escondidas primeiro */
      ctx.save();
      ctx.setLineDash([5, 4]); ctx.lineWidth = 1.1; ctx.strokeStyle = cinza;
      ctx.beginPath();
      chaves.forEach(function (c) {
        if (E[c].v) return;
        ctx.moveTo(P[E[c].a][0], P[E[c].a][1]);
        ctx.lineTo(P[E[c].b][0], P[E[c].b][1]);
      });
      ctx.stroke(); ctx.restore();

      ctx.lineWidth = 1.8; ctx.strokeStyle = preto; ctx.lineCap = "round";
      ctx.beginPath();
      chaves.forEach(function (c) {
        if (!E[c].v) return;
        ctx.moveTo(P[E[c].a][0], P[E[c].a][1]);
        ctx.lineTo(P[E[c].b][0], P[E[c].b][1]);
      });
      ctx.stroke();
    }

    var l = laco(pintar);
    btn.addEventListener("click", function () {
      btn.textContent = l.alterna() ? "Pausar" : "Continuar";
    });
    incl.addEventListener("input", function () { pintar(l.ler()); });
    window.addEventListener("resize", function () { pintar(l.ler()); });
  }

  /* ============================================================
     3. GeoGebra: o applet so carrega quando o visitante pede
     ============================================================ */
  function geogebra() {
    var caixas = document.querySelectorAll("[data-ggb]");
    if (!caixas.length) return;
    var carregado = false;
    function carregaScript(ok) {
      if (carregado) return ok();
      var s = document.createElement("script");
      s.src = "https://www.geogebra.org/apps/deployggb.js";
      s.onload = function () { carregado = true; ok(); };
      document.head.appendChild(s);
    }
    Array.prototype.forEach.call(caixas, function (caixa, i) {
      var btn = caixa.querySelector("[data-abrir]");
      var alvo = caixa.querySelector(".ggb-alvo");
      alvo.id = "ggb-" + i;
      btn.addEventListener("click", function () {
        btn.disabled = true; btn.textContent = "Carregando…";
        carregaScript(function () {
          var app = new GGBApplet({
            material_id: caixa.getAttribute("data-ggb"),
            width: alvo.clientWidth || 800,
            height: Math.round((alvo.clientWidth || 800) * 0.62),
            showToolBar: false, showAlgebraInput: false, showMenuBar: false,
            showResetIcon: true, enableRightClick: false,
            borderColor: "transparent"
          }, true);
          app.inject(alvo.id);
          btn.remove();
        });
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    var a = document.getElementById("anim-seno");
    if (a) circuloTrig(a);
    var c = document.getElementById("anim-cubo");
    if (c) cuboGirando(c);
    geogebra();
  });
})();
