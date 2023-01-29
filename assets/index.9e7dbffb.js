(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const n of document.querySelectorAll('link[rel="modulepreload"]')) a(n);
  new MutationObserver(n => {
    for (const o of n)
      if (o.type === "childList")
        for (const s of o.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && a(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(n) {
    const o = {};
    return (
      n.integrity && (o.integrity = n.integrity),
      n.referrerpolicy && (o.referrerPolicy = n.referrerpolicy),
      n.crossorigin === "use-credentials"
        ? (o.credentials = "include")
        : n.crossorigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function a(n) {
    if (n.ep) return;
    n.ep = !0;
    const o = r(n);
    fetch(n.href, o);
  }
})();
async function Re() {
  return await fetch(
    "https://free-to-play-games-database.p.rapidapi.com/api/games",
    {
      headers: {
        "X-RapidAPI-Key": "15cbb2ed7amsh8dd5fda7e2688fap122f1djsn4a6ac2c2c23f",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    }
  )
    .then(r => r.json())
    .then(r => r)
    .catch(r => console.log("error", r));
}
async function me(e = 0) {
  const t = {
    headers: {
      "X-RapidAPI-Key": "15cbb2ed7amsh8dd5fda7e2688fap122f1djsn4a6ac2c2c23f",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };
  return await fetch(
    `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${e}`,
    t
  )
    .then(a => a.json())
    .then(a => a)
    .catch(a => console.log("error", a));
}
let N = {};
function He(e) {
  const t = N[e] || 0;
  let r = "";
  for (let a = 1; a < 6; a++) {
    let n;
    a <= t ? (n = "star_active.svg") : (n = "star.svg"),
      (r += `
      <img
        data-rating = "${a}"
        class="star"
        src= ${n}
        alt="star"
      />
    `);
  }
  return r;
}
function Ne(e, t) {
  const r = t.querySelectorAll(".star"),
    a = t.dataset.id;
  for (let n = 0; n < 5; n++) r[n].setAttribute("src", "star.svg");
  for (let n = 0; n < e; n++) r[n].setAttribute("src", "star_active.svg");
  _e(a, e);
}
function _e(e, t) {
  N[e] = t;
  const r = JSON.stringify(N);
  localStorage.setItem("rating", r);
}
function qe() {
  const e = localStorage.getItem("rating") || "{}";
  N = JSON.parse(e);
}
function ze(e) {
  const { id: t, title: r, thumbnail: a, short_description: n } = e,
    o = r.replace(/\s/g, "_"),
    u = `${location.pathname}#/${o}/?game_id=${t}`;
  return `
  <article id="id_${t}" class="short-description-card" data-id=${t}>
      <a class="to-game" href=${u}>
        <img
          class = "img-card"
          src="${a}"
          alt="thumbnail"
        />
      <h3>${r}</h3>
        <p>${n}</p>
      </a>
      <div  class="stars">
      ${He(t)}
      </div>
  </article>
  `;
}
function Ue(e) {
  let t = "";
  return (
    e.forEach(r => {
      t += ze(r);
    }),
    t
  );
}
async function We() {
  qe();
  const e = document.querySelector("main"),
    t = document.createElement("div"),
    r = await Re(),
    a = Ue(r);
  t.classList.add("base"),
    (t.innerHTML = a),
    (e.innerHTML = ""),
    e.appendChild(t);
}
var ye = {
    update: null,
    begin: null,
    loopBegin: null,
    changeBegin: null,
    change: null,
    changeComplete: null,
    loopComplete: null,
    complete: null,
    loop: 1,
    direction: "normal",
    autoplay: !0,
    timelineOffset: 0,
  },
  G = {
    duration: 1e3,
    delay: 0,
    endDelay: 0,
    easing: "easeOutElastic(1, .5)",
    round: 0,
  },
  Ke = [
    "translateX",
    "translateY",
    "translateZ",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "scale",
    "scaleX",
    "scaleY",
    "scaleZ",
    "skew",
    "skewX",
    "skewY",
    "perspective",
    "matrix",
    "matrix3d",
  ],
  _ = { CSS: {}, springs: {} };
function L(e, t, r) {
  return Math.min(Math.max(e, t), r);
}
function R(e, t) {
  return e.indexOf(t) > -1;
}
function J(e, t) {
  return e.apply(null, t);
}
var f = {
  arr: function (e) {
    return Array.isArray(e);
  },
  obj: function (e) {
    return R(Object.prototype.toString.call(e), "Object");
  },
  pth: function (e) {
    return f.obj(e) && e.hasOwnProperty("totalLength");
  },
  svg: function (e) {
    return e instanceof SVGElement;
  },
  inp: function (e) {
    return e instanceof HTMLInputElement;
  },
  dom: function (e) {
    return e.nodeType || f.svg(e);
  },
  str: function (e) {
    return typeof e == "string";
  },
  fnc: function (e) {
    return typeof e == "function";
  },
  und: function (e) {
    return typeof e > "u";
  },
  nil: function (e) {
    return f.und(e) || e === null;
  },
  hex: function (e) {
    return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e);
  },
  rgb: function (e) {
    return /^rgb/.test(e);
  },
  hsl: function (e) {
    return /^hsl/.test(e);
  },
  col: function (e) {
    return f.hex(e) || f.rgb(e) || f.hsl(e);
  },
  key: function (e) {
    return (
      !ye.hasOwnProperty(e) &&
      !G.hasOwnProperty(e) &&
      e !== "targets" &&
      e !== "keyframes"
    );
  },
};
function be(e) {
  var t = /\(([^)]+)\)/.exec(e);
  return t
    ? t[1].split(",").map(function (r) {
        return parseFloat(r);
      })
    : [];
}
function we(e, t) {
  var r = be(e),
    a = L(f.und(r[0]) ? 1 : r[0], 0.1, 100),
    n = L(f.und(r[1]) ? 100 : r[1], 0.1, 100),
    o = L(f.und(r[2]) ? 10 : r[2], 0.1, 100),
    s = L(f.und(r[3]) ? 0 : r[3], 0.1, 100),
    u = Math.sqrt(n / a),
    i = o / (2 * Math.sqrt(n * a)),
    p = i < 1 ? u * Math.sqrt(1 - i * i) : 0,
    c = 1,
    l = i < 1 ? (i * u + -s) / p : -s + u;
  function h(m) {
    var d = t ? (t * m) / 1e3 : m;
    return (
      i < 1
        ? (d =
            Math.exp(-d * i * u) * (c * Math.cos(p * d) + l * Math.sin(p * d)))
        : (d = (c + l * d) * Math.exp(-d * u)),
      m === 0 || m === 1 ? m : 1 - d
    );
  }
  function P() {
    var m = _.springs[e];
    if (m) return m;
    for (var d = 1 / 6, b = 0, x = 0; ; )
      if (((b += d), h(b) === 1)) {
        if ((x++, x >= 16)) break;
      } else x = 0;
    var g = b * d * 1e3;
    return (_.springs[e] = g), g;
  }
  return t ? h : P;
}
function Ze(e) {
  return (
    e === void 0 && (e = 10),
    function (t) {
      return Math.ceil(L(t, 1e-6, 1) * e) * (1 / e);
    }
  );
}
var Je = (function () {
    var e = 11,
      t = 1 / (e - 1);
    function r(c, l) {
      return 1 - 3 * l + 3 * c;
    }
    function a(c, l) {
      return 3 * l - 6 * c;
    }
    function n(c) {
      return 3 * c;
    }
    function o(c, l, h) {
      return ((r(l, h) * c + a(l, h)) * c + n(l)) * c;
    }
    function s(c, l, h) {
      return 3 * r(l, h) * c * c + 2 * a(l, h) * c + n(l);
    }
    function u(c, l, h, P, m) {
      var d,
        b,
        x = 0;
      do (b = l + (h - l) / 2), (d = o(b, P, m) - c), d > 0 ? (h = b) : (l = b);
      while (Math.abs(d) > 1e-7 && ++x < 10);
      return b;
    }
    function i(c, l, h, P) {
      for (var m = 0; m < 4; ++m) {
        var d = s(l, h, P);
        if (d === 0) return l;
        var b = o(l, h, P) - c;
        l -= b / d;
      }
      return l;
    }
    function p(c, l, h, P) {
      if (!(0 <= c && c <= 1 && 0 <= h && h <= 1)) return;
      var m = new Float32Array(e);
      if (c !== l || h !== P) for (var d = 0; d < e; ++d) m[d] = o(d * t, c, h);
      function b(x) {
        for (var g = 0, v = 1, I = e - 1; v !== I && m[v] <= x; ++v) g += t;
        --v;
        var D = (x - m[v]) / (m[v + 1] - m[v]),
          w = g + D * t,
          $ = s(w, c, h);
        return $ >= 0.001 ? i(x, w, c, h) : $ === 0 ? w : u(x, g, g + t, c, h);
      }
      return function (x) {
        return (c === l && h === P) || x === 0 || x === 1 ? x : o(b(x), l, P);
      };
    }
    return p;
  })(),
  xe = (function () {
    var e = {
        linear: function () {
          return function (a) {
            return a;
          };
        },
      },
      t = {
        Sine: function () {
          return function (a) {
            return 1 - Math.cos((a * Math.PI) / 2);
          };
        },
        Circ: function () {
          return function (a) {
            return 1 - Math.sqrt(1 - a * a);
          };
        },
        Back: function () {
          return function (a) {
            return a * a * (3 * a - 2);
          };
        },
        Bounce: function () {
          return function (a) {
            for (var n, o = 4; a < ((n = Math.pow(2, --o)) - 1) / 11; );
            return (
              1 / Math.pow(4, 3 - o) -
              7.5625 * Math.pow((n * 3 - 2) / 22 - a, 2)
            );
          };
        },
        Elastic: function (a, n) {
          a === void 0 && (a = 1), n === void 0 && (n = 0.5);
          var o = L(a, 1, 10),
            s = L(n, 0.1, 2);
          return function (u) {
            return u === 0 || u === 1
              ? u
              : -o *
                  Math.pow(2, 10 * (u - 1)) *
                  Math.sin(
                    ((u - 1 - (s / (Math.PI * 2)) * Math.asin(1 / o)) *
                      (Math.PI * 2)) /
                      s
                  );
          };
        },
      },
      r = ["Quad", "Cubic", "Quart", "Quint", "Expo"];
    return (
      r.forEach(function (a, n) {
        t[a] = function () {
          return function (o) {
            return Math.pow(o, n + 2);
          };
        };
      }),
      Object.keys(t).forEach(function (a) {
        var n = t[a];
        (e["easeIn" + a] = n),
          (e["easeOut" + a] = function (o, s) {
            return function (u) {
              return 1 - n(o, s)(1 - u);
            };
          }),
          (e["easeInOut" + a] = function (o, s) {
            return function (u) {
              return u < 0.5 ? n(o, s)(u * 2) / 2 : 1 - n(o, s)(u * -2 + 2) / 2;
            };
          }),
          (e["easeOutIn" + a] = function (o, s) {
            return function (u) {
              return u < 0.5
                ? (1 - n(o, s)(1 - u * 2)) / 2
                : (n(o, s)(u * 2 - 1) + 1) / 2;
            };
          });
      }),
      e
    );
  })();
function X(e, t) {
  if (f.fnc(e)) return e;
  var r = e.split("(")[0],
    a = xe[r],
    n = be(e);
  switch (r) {
    case "spring":
      return we(e, t);
    case "cubicBezier":
      return J(Je, n);
    case "steps":
      return J(Ze, n);
    default:
      return J(a, n);
  }
}
function Me(e) {
  try {
    var t = document.querySelectorAll(e);
    return t;
  } catch {
    return;
  }
}
function q(e, t) {
  for (
    var r = e.length,
      a = arguments.length >= 2 ? arguments[1] : void 0,
      n = [],
      o = 0;
    o < r;
    o++
  )
    if (o in e) {
      var s = e[o];
      t.call(a, s, o, e) && n.push(s);
    }
  return n;
}
function z(e) {
  return e.reduce(function (t, r) {
    return t.concat(f.arr(r) ? z(r) : r);
  }, []);
}
function de(e) {
  return f.arr(e)
    ? e
    : (f.str(e) && (e = Me(e) || e),
      e instanceof NodeList || e instanceof HTMLCollection
        ? [].slice.call(e)
        : [e]);
}
function ee(e, t) {
  return e.some(function (r) {
    return r === t;
  });
}
function te(e) {
  var t = {};
  for (var r in e) t[r] = e[r];
  return t;
}
function Q(e, t) {
  var r = te(e);
  for (var a in e) r[a] = t.hasOwnProperty(a) ? t[a] : e[a];
  return r;
}
function U(e, t) {
  var r = te(e);
  for (var a in t) r[a] = f.und(e[a]) ? t[a] : e[a];
  return r;
}
function Qe(e) {
  var t = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e);
  return t ? "rgba(" + t[1] + ",1)" : e;
}
function Ye(e) {
  var t = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
    r = e.replace(t, function (u, i, p, c) {
      return i + i + p + p + c + c;
    }),
    a = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r),
    n = parseInt(a[1], 16),
    o = parseInt(a[2], 16),
    s = parseInt(a[3], 16);
  return "rgba(" + n + "," + o + "," + s + ",1)";
}
function Ge(e) {
  var t =
      /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e) ||
      /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e),
    r = parseInt(t[1], 10) / 360,
    a = parseInt(t[2], 10) / 100,
    n = parseInt(t[3], 10) / 100,
    o = t[4] || 1;
  function s(h, P, m) {
    return (
      m < 0 && (m += 1),
      m > 1 && (m -= 1),
      m < 1 / 6
        ? h + (P - h) * 6 * m
        : m < 1 / 2
        ? P
        : m < 2 / 3
        ? h + (P - h) * (2 / 3 - m) * 6
        : h
    );
  }
  var u, i, p;
  if (a == 0) u = i = p = n;
  else {
    var c = n < 0.5 ? n * (1 + a) : n + a - n * a,
      l = 2 * n - c;
    (u = s(l, c, r + 1 / 3)), (i = s(l, c, r)), (p = s(l, c, r - 1 / 3));
  }
  return "rgba(" + u * 255 + "," + i * 255 + "," + p * 255 + "," + o + ")";
}
function Xe(e) {
  if (f.rgb(e)) return Qe(e);
  if (f.hex(e)) return Ye(e);
  if (f.hsl(e)) return Ge(e);
}
function A(e) {
  var t =
    /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(
      e
    );
  if (t) return t[1];
}
function et(e) {
  if (R(e, "translate") || e === "perspective") return "px";
  if (R(e, "rotate") || R(e, "skew")) return "deg";
}
function Y(e, t) {
  return f.fnc(e) ? e(t.target, t.id, t.total) : e;
}
function C(e, t) {
  return e.getAttribute(t);
}
function re(e, t, r) {
  var a = A(t);
  if (ee([r, "deg", "rad", "turn"], a)) return t;
  var n = _.CSS[t + r];
  if (!f.und(n)) return n;
  var o = 100,
    s = document.createElement(e.tagName),
    u =
      e.parentNode && e.parentNode !== document ? e.parentNode : document.body;
  u.appendChild(s), (s.style.position = "absolute"), (s.style.width = o + r);
  var i = o / s.offsetWidth;
  u.removeChild(s);
  var p = i * parseFloat(t);
  return (_.CSS[t + r] = p), p;
}
function Pe(e, t, r) {
  if (t in e.style) {
    var a = t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
      n = e.style[t] || getComputedStyle(e).getPropertyValue(a) || "0";
    return r ? re(e, n, r) : n;
  }
}
function ne(e, t) {
  if (f.dom(e) && !f.inp(e) && (!f.nil(C(e, t)) || (f.svg(e) && e[t])))
    return "attribute";
  if (f.dom(e) && ee(Ke, t)) return "transform";
  if (f.dom(e) && t !== "transform" && Pe(e, t)) return "css";
  if (e[t] != null) return "object";
}
function Ie(e) {
  if (!!f.dom(e)) {
    for (
      var t = e.style.transform || "",
        r = /(\w+)\(([^)]*)\)/g,
        a = new Map(),
        n;
      (n = r.exec(t));

    )
      a.set(n[1], n[2]);
    return a;
  }
}
function tt(e, t, r, a) {
  var n = R(t, "scale") ? 1 : 0 + et(t),
    o = Ie(e).get(t) || n;
  return (
    r && (r.transforms.list.set(t, o), (r.transforms.last = t)),
    a ? re(e, o, a) : o
  );
}
function ae(e, t, r, a) {
  switch (ne(e, t)) {
    case "transform":
      return tt(e, t, a, r);
    case "css":
      return Pe(e, t, r);
    case "attribute":
      return C(e, t);
    default:
      return e[t] || 0;
  }
}
function ie(e, t) {
  var r = /^(\*=|\+=|-=)/.exec(e);
  if (!r) return e;
  var a = A(e) || 0,
    n = parseFloat(t),
    o = parseFloat(e.replace(r[0], ""));
  switch (r[0][0]) {
    case "+":
      return n + o + a;
    case "-":
      return n - o + a;
    case "*":
      return n * o + a;
  }
}
function Te(e, t) {
  if (f.col(e)) return Xe(e);
  if (/\s/g.test(e)) return e;
  var r = A(e),
    a = r ? e.substr(0, e.length - r.length) : e;
  return t ? a + t : a;
}
function oe(e, t) {
  return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
}
function rt(e) {
  return Math.PI * 2 * C(e, "r");
}
function nt(e) {
  return C(e, "width") * 2 + C(e, "height") * 2;
}
function at(e) {
  return oe({ x: C(e, "x1"), y: C(e, "y1") }, { x: C(e, "x2"), y: C(e, "y2") });
}
function Se(e) {
  for (var t = e.points, r = 0, a, n = 0; n < t.numberOfItems; n++) {
    var o = t.getItem(n);
    n > 0 && (r += oe(a, o)), (a = o);
  }
  return r;
}
function it(e) {
  var t = e.points;
  return Se(e) + oe(t.getItem(t.numberOfItems - 1), t.getItem(0));
}
function Le(e) {
  if (e.getTotalLength) return e.getTotalLength();
  switch (e.tagName.toLowerCase()) {
    case "circle":
      return rt(e);
    case "rect":
      return nt(e);
    case "line":
      return at(e);
    case "polyline":
      return Se(e);
    case "polygon":
      return it(e);
  }
}
function ot(e) {
  var t = Le(e);
  return e.setAttribute("stroke-dasharray", t), t;
}
function st(e) {
  for (var t = e.parentNode; f.svg(t) && f.svg(t.parentNode); )
    t = t.parentNode;
  return t;
}
function Ce(e, t) {
  var r = t || {},
    a = r.el || st(e),
    n = a.getBoundingClientRect(),
    o = C(a, "viewBox"),
    s = n.width,
    u = n.height,
    i = r.viewBox || (o ? o.split(" ") : [0, 0, s, u]);
  return {
    el: a,
    viewBox: i,
    x: i[0] / 1,
    y: i[1] / 1,
    w: s,
    h: u,
    vW: i[2],
    vH: i[3],
  };
}
function ut(e, t) {
  var r = f.str(e) ? Me(e)[0] : e,
    a = t || 100;
  return function (n) {
    return { property: n, el: r, svg: Ce(r), totalLength: Le(r) * (a / 100) };
  };
}
function ct(e, t, r) {
  function a(c) {
    c === void 0 && (c = 0);
    var l = t + c >= 1 ? t + c : 0;
    return e.el.getPointAtLength(l);
  }
  var n = Ce(e.el, e.svg),
    o = a(),
    s = a(-1),
    u = a(1),
    i = r ? 1 : n.w / n.vW,
    p = r ? 1 : n.h / n.vH;
  switch (e.property) {
    case "x":
      return (o.x - n.x) * i;
    case "y":
      return (o.y - n.y) * p;
    case "angle":
      return (Math.atan2(u.y - s.y, u.x - s.x) * 180) / Math.PI;
  }
}
function ve(e, t) {
  var r = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,
    a = Te(f.pth(e) ? e.totalLength : e, t) + "";
  return {
    original: a,
    numbers: a.match(r) ? a.match(r).map(Number) : [0],
    strings: f.str(e) || t ? a.split(r) : [],
  };
}
function se(e) {
  var t = e ? z(f.arr(e) ? e.map(de) : de(e)) : [];
  return q(t, function (r, a, n) {
    return n.indexOf(r) === a;
  });
}
function Ae(e) {
  var t = se(e);
  return t.map(function (r, a) {
    return { target: r, id: a, total: t.length, transforms: { list: Ie(r) } };
  });
}
function ft(e, t) {
  var r = te(t);
  if ((/^spring/.test(r.easing) && (r.duration = we(r.easing)), f.arr(e))) {
    var a = e.length,
      n = a === 2 && !f.obj(e[0]);
    n ? (e = { value: e }) : f.fnc(t.duration) || (r.duration = t.duration / a);
  }
  var o = f.arr(e) ? e : [e];
  return o
    .map(function (s, u) {
      var i = f.obj(s) && !f.pth(s) ? s : { value: s };
      return (
        f.und(i.delay) && (i.delay = u ? 0 : t.delay),
        f.und(i.endDelay) && (i.endDelay = u === o.length - 1 ? t.endDelay : 0),
        i
      );
    })
    .map(function (s) {
      return U(s, r);
    });
}
function lt(e) {
  for (
    var t = q(
        z(
          e.map(function (o) {
            return Object.keys(o);
          })
        ),
        function (o) {
          return f.key(o);
        }
      ).reduce(function (o, s) {
        return o.indexOf(s) < 0 && o.push(s), o;
      }, []),
      r = {},
      a = function (o) {
        var s = t[o];
        r[s] = e.map(function (u) {
          var i = {};
          for (var p in u)
            f.key(p) ? p == s && (i.value = u[p]) : (i[p] = u[p]);
          return i;
        });
      },
      n = 0;
    n < t.length;
    n++
  )
    a(n);
  return r;
}
function dt(e, t) {
  var r = [],
    a = t.keyframes;
  a && (t = U(lt(a), t));
  for (var n in t) f.key(n) && r.push({ name: n, tweens: ft(t[n], e) });
  return r;
}
function vt(e, t) {
  var r = {};
  for (var a in e) {
    var n = Y(e[a], t);
    f.arr(n) &&
      ((n = n.map(function (o) {
        return Y(o, t);
      })),
      n.length === 1 && (n = n[0])),
      (r[a] = n);
  }
  return (
    (r.duration = parseFloat(r.duration)), (r.delay = parseFloat(r.delay)), r
  );
}
function gt(e, t) {
  var r;
  return e.tweens.map(function (a) {
    var n = vt(a, t),
      o = n.value,
      s = f.arr(o) ? o[1] : o,
      u = A(s),
      i = ae(t.target, e.name, u, t),
      p = r ? r.to.original : i,
      c = f.arr(o) ? o[0] : p,
      l = A(c) || A(i),
      h = u || l;
    return (
      f.und(s) && (s = p),
      (n.from = ve(c, h)),
      (n.to = ve(ie(s, c), h)),
      (n.start = r ? r.end : 0),
      (n.end = n.start + n.delay + n.duration + n.endDelay),
      (n.easing = X(n.easing, n.duration)),
      (n.isPath = f.pth(o)),
      (n.isPathTargetInsideSVG = n.isPath && f.svg(t.target)),
      (n.isColor = f.col(n.from.original)),
      n.isColor && (n.round = 1),
      (r = n),
      n
    );
  });
}
var De = {
  css: function (e, t, r) {
    return (e.style[t] = r);
  },
  attribute: function (e, t, r) {
    return e.setAttribute(t, r);
  },
  object: function (e, t, r) {
    return (e[t] = r);
  },
  transform: function (e, t, r, a, n) {
    if ((a.list.set(t, r), t === a.last || n)) {
      var o = "";
      a.list.forEach(function (s, u) {
        o += u + "(" + s + ") ";
      }),
        (e.style.transform = o);
    }
  },
};
function $e(e, t) {
  var r = Ae(e);
  r.forEach(function (a) {
    for (var n in t) {
      var o = Y(t[n], a),
        s = a.target,
        u = A(o),
        i = ae(s, n, u, a),
        p = u || A(i),
        c = ie(Te(o, p), i),
        l = ne(s, n);
      De[l](s, n, c, a.transforms, !0);
    }
  });
}
function ht(e, t) {
  var r = ne(e.target, t.name);
  if (r) {
    var a = gt(t, e),
      n = a[a.length - 1];
    return {
      type: r,
      property: t.name,
      animatable: e,
      tweens: a,
      duration: n.end,
      delay: a[0].delay,
      endDelay: n.endDelay,
    };
  }
}
function pt(e, t) {
  return q(
    z(
      e.map(function (r) {
        return t.map(function (a) {
          return ht(r, a);
        });
      })
    ),
    function (r) {
      return !f.und(r);
    }
  );
}
function Ee(e, t) {
  var r = e.length,
    a = function (o) {
      return o.timelineOffset ? o.timelineOffset : 0;
    },
    n = {};
  return (
    (n.duration = r
      ? Math.max.apply(
          Math,
          e.map(function (o) {
            return a(o) + o.duration;
          })
        )
      : t.duration),
    (n.delay = r
      ? Math.min.apply(
          Math,
          e.map(function (o) {
            return a(o) + o.delay;
          })
        )
      : t.delay),
    (n.endDelay = r
      ? n.duration -
        Math.max.apply(
          Math,
          e.map(function (o) {
            return a(o) + o.duration - o.endDelay;
          })
        )
      : t.endDelay),
    n
  );
}
var ge = 0;
function mt(e) {
  var t = Q(ye, e),
    r = Q(G, e),
    a = dt(r, e),
    n = Ae(e.targets),
    o = pt(n, a),
    s = Ee(o, r),
    u = ge;
  return (
    ge++,
    U(t, {
      id: u,
      children: [],
      animatables: n,
      animations: o,
      duration: s.duration,
      delay: s.delay,
      endDelay: s.endDelay,
    })
  );
}
var S = [],
  Oe = (function () {
    var e;
    function t() {
      !e &&
        (!he() || !y.suspendWhenDocumentHidden) &&
        S.length > 0 &&
        (e = requestAnimationFrame(r));
    }
    function r(n) {
      for (var o = S.length, s = 0; s < o; ) {
        var u = S[s];
        u.paused ? (S.splice(s, 1), o--) : (u.tick(n), s++);
      }
      e = s > 0 ? requestAnimationFrame(r) : void 0;
    }
    function a() {
      !y.suspendWhenDocumentHidden ||
        (he()
          ? (e = cancelAnimationFrame(e))
          : (S.forEach(function (n) {
              return n._onDocumentVisibility();
            }),
            Oe()));
    }
    return (
      typeof document < "u" && document.addEventListener("visibilitychange", a),
      t
    );
  })();
function he() {
  return !!document && document.hidden;
}
function y(e) {
  e === void 0 && (e = {});
  var t = 0,
    r = 0,
    a = 0,
    n,
    o = 0,
    s = null;
  function u(g) {
    var v =
      window.Promise &&
      new Promise(function (I) {
        return (s = I);
      });
    return (g.finished = v), v;
  }
  var i = mt(e);
  u(i);
  function p() {
    var g = i.direction;
    g !== "alternate" && (i.direction = g !== "normal" ? "normal" : "reverse"),
      (i.reversed = !i.reversed),
      n.forEach(function (v) {
        return (v.reversed = i.reversed);
      });
  }
  function c(g) {
    return i.reversed ? i.duration - g : g;
  }
  function l() {
    (t = 0), (r = c(i.currentTime) * (1 / y.speed));
  }
  function h(g, v) {
    v && v.seek(g - v.timelineOffset);
  }
  function P(g) {
    if (i.reversePlayback) for (var I = o; I--; ) h(g, n[I]);
    else for (var v = 0; v < o; v++) h(g, n[v]);
  }
  function m(g) {
    for (var v = 0, I = i.animations, D = I.length; v < D; ) {
      var w = I[v],
        $ = w.animatable,
        B = w.tweens,
        E = B.length - 1,
        M = B[E];
      E &&
        (M =
          q(B, function (je) {
            return g < je.end;
          })[0] || M);
      for (
        var O = L(g - M.start - M.delay, 0, M.duration) / M.duration,
          H = isNaN(O) ? 1 : M.easing(O),
          T = M.to.strings,
          W = M.round,
          K = [],
          Ve = M.to.numbers.length,
          k = void 0,
          F = 0;
        F < Ve;
        F++
      ) {
        var V = void 0,
          ue = M.to.numbers[F],
          ce = M.from.numbers[F] || 0;
        M.isPath
          ? (V = ct(M.value, H * ue, M.isPathTargetInsideSVG))
          : (V = ce + H * (ue - ce)),
          W && ((M.isColor && F > 2) || (V = Math.round(V * W) / W)),
          K.push(V);
      }
      var fe = T.length;
      if (!fe) k = K[0];
      else {
        k = T[0];
        for (var j = 0; j < fe; j++) {
          T[j];
          var le = T[j + 1],
            Z = K[j];
          isNaN(Z) || (le ? (k += Z + le) : (k += Z + " "));
        }
      }
      De[w.type]($.target, w.property, k, $.transforms),
        (w.currentValue = k),
        v++;
    }
  }
  function d(g) {
    i[g] && !i.passThrough && i[g](i);
  }
  function b() {
    i.remaining && i.remaining !== !0 && i.remaining--;
  }
  function x(g) {
    var v = i.duration,
      I = i.delay,
      D = v - i.endDelay,
      w = c(g);
    (i.progress = L((w / v) * 100, 0, 100)),
      (i.reversePlayback = w < i.currentTime),
      n && P(w),
      !i.began && i.currentTime > 0 && ((i.began = !0), d("begin")),
      !i.loopBegan && i.currentTime > 0 && ((i.loopBegan = !0), d("loopBegin")),
      w <= I && i.currentTime !== 0 && m(0),
      ((w >= D && i.currentTime !== v) || !v) && m(v),
      w > I && w < D
        ? (i.changeBegan ||
            ((i.changeBegan = !0), (i.changeCompleted = !1), d("changeBegin")),
          d("change"),
          m(w))
        : i.changeBegan &&
          ((i.changeCompleted = !0), (i.changeBegan = !1), d("changeComplete")),
      (i.currentTime = L(w, 0, v)),
      i.began && d("update"),
      g >= v &&
        ((r = 0),
        b(),
        i.remaining
          ? ((t = a),
            d("loopComplete"),
            (i.loopBegan = !1),
            i.direction === "alternate" && p())
          : ((i.paused = !0),
            i.completed ||
              ((i.completed = !0),
              d("loopComplete"),
              d("complete"),
              !i.passThrough && "Promise" in window && (s(), u(i)))));
  }
  return (
    (i.reset = function () {
      var g = i.direction;
      (i.passThrough = !1),
        (i.currentTime = 0),
        (i.progress = 0),
        (i.paused = !0),
        (i.began = !1),
        (i.loopBegan = !1),
        (i.changeBegan = !1),
        (i.completed = !1),
        (i.changeCompleted = !1),
        (i.reversePlayback = !1),
        (i.reversed = g === "reverse"),
        (i.remaining = i.loop),
        (n = i.children),
        (o = n.length);
      for (var v = o; v--; ) i.children[v].reset();
      ((i.reversed && i.loop !== !0) || (g === "alternate" && i.loop === 1)) &&
        i.remaining++,
        m(i.reversed ? i.duration : 0);
    }),
    (i._onDocumentVisibility = l),
    (i.set = function (g, v) {
      return $e(g, v), i;
    }),
    (i.tick = function (g) {
      (a = g), t || (t = a), x((a + (r - t)) * y.speed);
    }),
    (i.seek = function (g) {
      x(c(g));
    }),
    (i.pause = function () {
      (i.paused = !0), l();
    }),
    (i.play = function () {
      !i.paused ||
        (i.completed && i.reset(), (i.paused = !1), S.push(i), l(), Oe());
    }),
    (i.reverse = function () {
      p(), (i.completed = !i.reversed), l();
    }),
    (i.restart = function () {
      i.reset(), i.play();
    }),
    (i.remove = function (g) {
      var v = se(g);
      ke(v, i);
    }),
    i.reset(),
    i.autoplay && i.play(),
    i
  );
}
function pe(e, t) {
  for (var r = t.length; r--; ) ee(e, t[r].animatable.target) && t.splice(r, 1);
}
function ke(e, t) {
  var r = t.animations,
    a = t.children;
  pe(e, r);
  for (var n = a.length; n--; ) {
    var o = a[n],
      s = o.animations;
    pe(e, s), !s.length && !o.children.length && a.splice(n, 1);
  }
  !r.length && !a.length && t.pause();
}
function yt(e) {
  for (var t = se(e), r = S.length; r--; ) {
    var a = S[r];
    ke(t, a);
  }
}
function bt(e, t) {
  t === void 0 && (t = {});
  var r = t.direction || "normal",
    a = t.easing ? X(t.easing) : null,
    n = t.grid,
    o = t.axis,
    s = t.from || 0,
    u = s === "first",
    i = s === "center",
    p = s === "last",
    c = f.arr(e),
    l = parseFloat(c ? e[0] : e),
    h = c ? parseFloat(e[1]) : 0,
    P = A(c ? e[1] : e) || 0,
    m = t.start || 0 + (c ? l : 0),
    d = [],
    b = 0;
  return function (x, g, v) {
    if ((u && (s = 0), i && (s = (v - 1) / 2), p && (s = v - 1), !d.length)) {
      for (var I = 0; I < v; I++) {
        if (!n) d.push(Math.abs(s - I));
        else {
          var D = i ? (n[0] - 1) / 2 : s % n[0],
            w = i ? (n[1] - 1) / 2 : Math.floor(s / n[0]),
            $ = I % n[0],
            B = Math.floor(I / n[0]),
            E = D - $,
            M = w - B,
            O = Math.sqrt(E * E + M * M);
          o === "x" && (O = -E), o === "y" && (O = -M), d.push(O);
        }
        b = Math.max.apply(Math, d);
      }
      a &&
        (d = d.map(function (T) {
          return a(T / b) * b;
        })),
        r === "reverse" &&
          (d = d.map(function (T) {
            return o ? (T < 0 ? T * -1 : -T) : Math.abs(b - T);
          }));
    }
    var H = c ? (h - l) / b : l;
    return m + H * (Math.round(d[g] * 100) / 100) + P;
  };
}
function wt(e) {
  e === void 0 && (e = {});
  var t = y(e);
  return (
    (t.duration = 0),
    (t.add = function (r, a) {
      var n = S.indexOf(t),
        o = t.children;
      n > -1 && S.splice(n, 1);
      function s(h) {
        h.passThrough = !0;
      }
      for (var u = 0; u < o.length; u++) s(o[u]);
      var i = U(r, Q(G, e));
      i.targets = i.targets || e.targets;
      var p = t.duration;
      (i.autoplay = !1),
        (i.direction = t.direction),
        (i.timelineOffset = f.und(a) ? p : ie(a, p)),
        s(t),
        t.seek(i.timelineOffset);
      var c = y(i);
      s(c), o.push(c);
      var l = Ee(o, e);
      return (
        (t.delay = l.delay),
        (t.endDelay = l.endDelay),
        (t.duration = l.duration),
        t.seek(0),
        t.reset(),
        t.autoplay && t.play(),
        t
      );
    }),
    t
  );
}
y.version = "3.2.1";
y.speed = 1;
y.suspendWhenDocumentHidden = !0;
y.running = S;
y.remove = yt;
y.get = ae;
y.set = $e;
y.convertPx = re;
y.path = ut;
y.setDashoffset = ot;
y.stagger = bt;
y.timeline = wt;
y.easing = X;
y.penner = xe;
y.random = function (e, t) {
  return Math.floor(Math.random() * (t - e + 1)) + e;
};
async function xt(e, t) {
  const r = e.getBoundingClientRect(),
    a = await me(t),
    n = document.createElement("img"),
    o = document.querySelector("main");
  n.setAttribute("class", "hero-img"),
    (n.src = a.thumbnail),
    n.setAttribute(
      "style",
      `position: fixed; top: ${r.top}px; left:${r.left}px; width: ${r.width}px; height: ${r.height}px; `
    ),
    window.scrollTo(0, 0),
    o.appendChild(n),
    Mt(r, a);
}
function Mt(e, t) {
  const a = document.querySelector("header").getBoundingClientRect(),
    n = window.innerWidth,
    o = (n * 0.7) / e.width,
    s = (n - e.width) / 2,
    u = (e.height * o - e.height) / 2 + a.height + 16,
    i = s - e.left,
    p = u - e.top;
  y({
    easing: "easeInOutCubic",
    targets: ".hero-img",
    translateX: i,
    translateY: p,
    scale: o,
    duration: 1e3,
    complete: c => {
      console.log(c), Be(t);
    },
  });
}
function Be(e) {
  const t = document.querySelector("main"),
    r = e;
  document.createElement("section"), r.thumbnail;
  const a = `
      <article class = "game-detail">
        <img class = 'game-detail__hero-img' src = '${r.thumbnail}' alt = 'game image'>
        <h2>${r.title}</h2>
        </div>
        <div class="props">
        <h4>Genero: ${r.genre}</h4>
        <h4>Plataforma: ${r.platform}</h4>
        </div>
        <div class="description-container">
        <p>
          ${r.description}
        </p>
        </div>
        <a href="${r.game_url}" target="_blank">
          <div class="play-btn">JUGAR</div>
        </a>
    </article>
      `;
  t.innerHTML = a;
}
async function Fe() {
  const e = document.location,
    t = e.href,
    r = e.hash,
    a = /\?.*/;
  if (!r || r === "#/") We();
  else if (r.includes("?")) {
    const o = new URLSearchParams(t.match(a)[0]).get("game_id");
    console.log("router id", o);
    const s = await me(o);
    console.log("router", s), Be(s);
  }
}
document.querySelector(".card-container");
window.addEventListener("DOMContentLoaded", e => {
  Fe();
});
window.addEventListener("click", e => {
  if (e.target.matches(".star")) {
    const t = e.target.parentNode.parentNode,
      r = e.target.dataset.rating;
    Ne(r, t);
  } else if (e.target.matches(".to-game > *")) {
    e.preventDefault();
    const t = e.target.parentNode.parentNode,
      r = t.dataset.id,
      a = t.querySelector(".img-card"),
      n = e.target.parentNode.href;
    xt(a, r),
      window.history.pushState({ pagina: history.length - 1 }, "pagina 1", n);
  }
});
window.onpopstate = function (e) {
  Fe();
};
