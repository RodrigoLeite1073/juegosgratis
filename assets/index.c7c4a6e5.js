(function () {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) return;
  for (const n of document.querySelectorAll('link[rel="modulepreload"]')) a(n);
  new MutationObserver(n => {
    for (const o of n)
      if (o.type === "childList")
        for (const s of o.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && a(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(n) {
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
    const o = t(n);
    fetch(n.href, o);
  }
})();
async function je() {
  return await fetch(
    "https://free-to-play-games-database.p.rapidapi.com/api/games",
    {
      headers: {
        "X-RapidAPI-Key": "15cbb2ed7amsh8dd5fda7e2688fap122f1djsn4a6ac2c2c23f",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    }
  )
    .then(t => t.json())
    .then(t => t)
    .catch(t => console.log("error", t));
}
async function Re(e = 0) {
  const r = {
    headers: {
      "X-RapidAPI-Key": "15cbb2ed7amsh8dd5fda7e2688fap122f1djsn4a6ac2c2c23f",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };
  return await fetch(
    `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${e}`,
    r
  )
    .then(a => a.json())
    .then(a => a)
    .catch(a => console.log("error", a));
}
let _ = {};
function qe(e) {
  const r = _[e] || 0;
  let t = "";
  for (let a = 1; a < 6; a++) {
    let n;
    a <= r ? (n = "./star_active.svg") : (n = "./star.svg"),
      (t += `
      <img
        data-rating = "${a}"
        class="star"
        src= ${n}
        alt="star"
      />
    `);
  }
  return t;
}
function _e(e, r) {
  const t = r.querySelectorAll(".star"),
    a = r.dataset.id;
  for (let n = 0; n < 5; n++) t[n].setAttribute("src", "star.svg");
  for (let n = 0; n < e; n++) t[n].setAttribute("src", "star_active.svg");
  He(a, e);
}
function He(e, r) {
  _[e] = r;
  const t = JSON.stringify(_);
  localStorage.setItem("rating", t);
}
function ze() {
  const e = localStorage.getItem("rating") || "{}";
  _ = JSON.parse(e);
}
function Ne(e) {
  const { id: r, title: t, thumbnail: a, short_description: n } = e,
    o = t.replace(/\s/g, "_"),
    u = `${location.origin}#/${o}/search?game_id=${r}`;
  return `
  <article id="id_${r}" class="short-description-card" data-id=${r}>
      <a href="${u}">
        <img
          class = "img-card"
          src="${a}"
          alt="thumbnail"
        />
      <h3>${t}</h3>
        <p>${n}</p>
      </a>
      <div  class="stars">
      ${qe(r)}
      </div>
  </article>
  `;
}
function Ue(e) {
  let r = "";
  return (
    e.forEach(t => {
      r += Ne(t);
    }),
    r
  );
}
var pe = {
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
  We = [
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
  H = { CSS: {}, springs: {} };
function C(e, r, t) {
  return Math.min(Math.max(e, r), t);
}
function R(e, r) {
  return e.indexOf(r) > -1;
}
function J(e, r) {
  return e.apply(null, r);
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
      !pe.hasOwnProperty(e) &&
      !G.hasOwnProperty(e) &&
      e !== "targets" &&
      e !== "keyframes"
    );
  },
};
function ye(e) {
  var r = /\(([^)]+)\)/.exec(e);
  return r
    ? r[1].split(",").map(function (t) {
        return parseFloat(t);
      })
    : [];
}
function be(e, r) {
  var t = ye(e),
    a = C(f.und(t[0]) ? 1 : t[0], 0.1, 100),
    n = C(f.und(t[1]) ? 100 : t[1], 0.1, 100),
    o = C(f.und(t[2]) ? 10 : t[2], 0.1, 100),
    s = C(f.und(t[3]) ? 0 : t[3], 0.1, 100),
    u = Math.sqrt(n / a),
    i = o / (2 * Math.sqrt(n * a)),
    d = i < 1 ? u * Math.sqrt(1 - i * i) : 0,
    c = 1,
    l = i < 1 ? (i * u + -s) / d : -s + u;
  function m(p) {
    var v = r ? (r * p) / 1e3 : p;
    return (
      i < 1
        ? (v =
            Math.exp(-v * i * u) * (c * Math.cos(d * v) + l * Math.sin(d * v)))
        : (v = (c + l * v) * Math.exp(-v * u)),
      p === 0 || p === 1 ? p : 1 - v
    );
  }
  function I() {
    var p = H.springs[e];
    if (p) return p;
    for (var v = 1 / 6, b = 0, x = 0; ; )
      if (((b += v), m(b) === 1)) {
        if ((x++, x >= 16)) break;
      } else x = 0;
    var h = b * v * 1e3;
    return (H.springs[e] = h), h;
  }
  return r ? m : I;
}
function Ke(e) {
  return (
    e === void 0 && (e = 10),
    function (r) {
      return Math.ceil(C(r, 1e-6, 1) * e) * (1 / e);
    }
  );
}
var Ze = (function () {
    var e = 11,
      r = 1 / (e - 1);
    function t(c, l) {
      return 1 - 3 * l + 3 * c;
    }
    function a(c, l) {
      return 3 * l - 6 * c;
    }
    function n(c) {
      return 3 * c;
    }
    function o(c, l, m) {
      return ((t(l, m) * c + a(l, m)) * c + n(l)) * c;
    }
    function s(c, l, m) {
      return 3 * t(l, m) * c * c + 2 * a(l, m) * c + n(l);
    }
    function u(c, l, m, I, p) {
      var v,
        b,
        x = 0;
      do (b = l + (m - l) / 2), (v = o(b, I, p) - c), v > 0 ? (m = b) : (l = b);
      while (Math.abs(v) > 1e-7 && ++x < 10);
      return b;
    }
    function i(c, l, m, I) {
      for (var p = 0; p < 4; ++p) {
        var v = s(l, m, I);
        if (v === 0) return l;
        var b = o(l, m, I) - c;
        l -= b / v;
      }
      return l;
    }
    function d(c, l, m, I) {
      if (!(0 <= c && c <= 1 && 0 <= m && m <= 1)) return;
      var p = new Float32Array(e);
      if (c !== l || m !== I) for (var v = 0; v < e; ++v) p[v] = o(v * r, c, m);
      function b(x) {
        for (var h = 0, g = 1, P = e - 1; g !== P && p[g] <= x; ++g) h += r;
        --g;
        var A = (x - p[g]) / (p[g + 1] - p[g]),
          w = h + A * r,
          D = s(w, c, m);
        return D >= 0.001 ? i(x, w, c, m) : D === 0 ? w : u(x, h, h + r, c, m);
      }
      return function (x) {
        return (c === l && m === I) || x === 0 || x === 1 ? x : o(b(x), l, I);
      };
    }
    return d;
  })(),
  we = (function () {
    var e = {
        linear: function () {
          return function (a) {
            return a;
          };
        },
      },
      r = {
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
          var o = C(a, 1, 10),
            s = C(n, 0.1, 2);
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
      t = ["Quad", "Cubic", "Quart", "Quint", "Expo"];
    return (
      t.forEach(function (a, n) {
        r[a] = function () {
          return function (o) {
            return Math.pow(o, n + 2);
          };
        };
      }),
      Object.keys(r).forEach(function (a) {
        var n = r[a];
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
function X(e, r) {
  if (f.fnc(e)) return e;
  var t = e.split("(")[0],
    a = we[t],
    n = ye(e);
  switch (t) {
    case "spring":
      return be(e, r);
    case "cubicBezier":
      return J(Ze, n);
    case "steps":
      return J(Ke, n);
    default:
      return J(a, n);
  }
}
function xe(e) {
  try {
    var r = document.querySelectorAll(e);
    return r;
  } catch {
    return;
  }
}
function z(e, r) {
  for (
    var t = e.length,
      a = arguments.length >= 2 ? arguments[1] : void 0,
      n = [],
      o = 0;
    o < t;
    o++
  )
    if (o in e) {
      var s = e[o];
      r.call(a, s, o, e) && n.push(s);
    }
  return n;
}
function N(e) {
  return e.reduce(function (r, t) {
    return r.concat(f.arr(t) ? N(t) : t);
  }, []);
}
function de(e) {
  return f.arr(e)
    ? e
    : (f.str(e) && (e = xe(e) || e),
      e instanceof NodeList || e instanceof HTMLCollection
        ? [].slice.call(e)
        : [e]);
}
function ee(e, r) {
  return e.some(function (t) {
    return t === r;
  });
}
function re(e) {
  var r = {};
  for (var t in e) r[t] = e[t];
  return r;
}
function Q(e, r) {
  var t = re(e);
  for (var a in e) t[a] = r.hasOwnProperty(a) ? r[a] : e[a];
  return t;
}
function U(e, r) {
  var t = re(e);
  for (var a in r) t[a] = f.und(e[a]) ? r[a] : e[a];
  return t;
}
function Je(e) {
  var r = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e);
  return r ? "rgba(" + r[1] + ",1)" : e;
}
function Qe(e) {
  var r = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
    t = e.replace(r, function (u, i, d, c) {
      return i + i + d + d + c + c;
    }),
    a = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t),
    n = parseInt(a[1], 16),
    o = parseInt(a[2], 16),
    s = parseInt(a[3], 16);
  return "rgba(" + n + "," + o + "," + s + ",1)";
}
function Ye(e) {
  var r =
      /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e) ||
      /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e),
    t = parseInt(r[1], 10) / 360,
    a = parseInt(r[2], 10) / 100,
    n = parseInt(r[3], 10) / 100,
    o = r[4] || 1;
  function s(m, I, p) {
    return (
      p < 0 && (p += 1),
      p > 1 && (p -= 1),
      p < 1 / 6
        ? m + (I - m) * 6 * p
        : p < 1 / 2
        ? I
        : p < 2 / 3
        ? m + (I - m) * (2 / 3 - p) * 6
        : m
    );
  }
  var u, i, d;
  if (a == 0) u = i = d = n;
  else {
    var c = n < 0.5 ? n * (1 + a) : n + a - n * a,
      l = 2 * n - c;
    (u = s(l, c, t + 1 / 3)), (i = s(l, c, t)), (d = s(l, c, t - 1 / 3));
  }
  return "rgba(" + u * 255 + "," + i * 255 + "," + d * 255 + "," + o + ")";
}
function Ge(e) {
  if (f.rgb(e)) return Je(e);
  if (f.hex(e)) return Qe(e);
  if (f.hsl(e)) return Ye(e);
}
function $(e) {
  var r =
    /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(
      e
    );
  if (r) return r[1];
}
function Xe(e) {
  if (R(e, "translate") || e === "perspective") return "px";
  if (R(e, "rotate") || R(e, "skew")) return "deg";
}
function Y(e, r) {
  return f.fnc(e) ? e(r.target, r.id, r.total) : e;
}
function L(e, r) {
  return e.getAttribute(r);
}
function te(e, r, t) {
  var a = $(r);
  if (ee([t, "deg", "rad", "turn"], a)) return r;
  var n = H.CSS[r + t];
  if (!f.und(n)) return n;
  var o = 100,
    s = document.createElement(e.tagName),
    u =
      e.parentNode && e.parentNode !== document ? e.parentNode : document.body;
  u.appendChild(s), (s.style.position = "absolute"), (s.style.width = o + t);
  var i = o / s.offsetWidth;
  u.removeChild(s);
  var d = i * parseFloat(r);
  return (H.CSS[r + t] = d), d;
}
function Me(e, r, t) {
  if (r in e.style) {
    var a = r.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
      n = e.style[r] || getComputedStyle(e).getPropertyValue(a) || "0";
    return t ? te(e, n, t) : n;
  }
}
function ne(e, r) {
  if (f.dom(e) && !f.inp(e) && (!f.nil(L(e, r)) || (f.svg(e) && e[r])))
    return "attribute";
  if (f.dom(e) && ee(We, r)) return "transform";
  if (f.dom(e) && r !== "transform" && Me(e, r)) return "css";
  if (e[r] != null) return "object";
}
function Ie(e) {
  if (!!f.dom(e)) {
    for (
      var r = e.style.transform || "",
        t = /(\w+)\(([^)]*)\)/g,
        a = new Map(),
        n;
      (n = t.exec(r));

    )
      a.set(n[1], n[2]);
    return a;
  }
}
function er(e, r, t, a) {
  var n = R(r, "scale") ? 1 : 0 + Xe(r),
    o = Ie(e).get(r) || n;
  return (
    t && (t.transforms.list.set(r, o), (t.transforms.last = r)),
    a ? te(e, o, a) : o
  );
}
function ae(e, r, t, a) {
  switch (ne(e, r)) {
    case "transform":
      return er(e, r, a, t);
    case "css":
      return Me(e, r, t);
    case "attribute":
      return L(e, r);
    default:
      return e[r] || 0;
  }
}
function ie(e, r) {
  var t = /^(\*=|\+=|-=)/.exec(e);
  if (!t) return e;
  var a = $(e) || 0,
    n = parseFloat(r),
    o = parseFloat(e.replace(t[0], ""));
  switch (t[0][0]) {
    case "+":
      return n + o + a;
    case "-":
      return n - o + a;
    case "*":
      return n * o + a;
  }
}
function Pe(e, r) {
  if (f.col(e)) return Ge(e);
  if (/\s/g.test(e)) return e;
  var t = $(e),
    a = t ? e.substr(0, e.length - t.length) : e;
  return r ? a + r : a;
}
function oe(e, r) {
  return Math.sqrt(Math.pow(r.x - e.x, 2) + Math.pow(r.y - e.y, 2));
}
function rr(e) {
  return Math.PI * 2 * L(e, "r");
}
function tr(e) {
  return L(e, "width") * 2 + L(e, "height") * 2;
}
function nr(e) {
  return oe({ x: L(e, "x1"), y: L(e, "y1") }, { x: L(e, "x2"), y: L(e, "y2") });
}
function Se(e) {
  for (var r = e.points, t = 0, a, n = 0; n < r.numberOfItems; n++) {
    var o = r.getItem(n);
    n > 0 && (t += oe(a, o)), (a = o);
  }
  return t;
}
function ar(e) {
  var r = e.points;
  return Se(e) + oe(r.getItem(r.numberOfItems - 1), r.getItem(0));
}
function Te(e) {
  if (e.getTotalLength) return e.getTotalLength();
  switch (e.tagName.toLowerCase()) {
    case "circle":
      return rr(e);
    case "rect":
      return tr(e);
    case "line":
      return nr(e);
    case "polyline":
      return Se(e);
    case "polygon":
      return ar(e);
  }
}
function ir(e) {
  var r = Te(e);
  return e.setAttribute("stroke-dasharray", r), r;
}
function or(e) {
  for (var r = e.parentNode; f.svg(r) && f.svg(r.parentNode); )
    r = r.parentNode;
  return r;
}
function Ce(e, r) {
  var t = r || {},
    a = t.el || or(e),
    n = a.getBoundingClientRect(),
    o = L(a, "viewBox"),
    s = n.width,
    u = n.height,
    i = t.viewBox || (o ? o.split(" ") : [0, 0, s, u]);
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
function sr(e, r) {
  var t = f.str(e) ? xe(e)[0] : e,
    a = r || 100;
  return function (n) {
    return { property: n, el: t, svg: Ce(t), totalLength: Te(t) * (a / 100) };
  };
}
function ur(e, r, t) {
  function a(c) {
    c === void 0 && (c = 0);
    var l = r + c >= 1 ? r + c : 0;
    return e.el.getPointAtLength(l);
  }
  var n = Ce(e.el, e.svg),
    o = a(),
    s = a(-1),
    u = a(1),
    i = t ? 1 : n.w / n.vW,
    d = t ? 1 : n.h / n.vH;
  switch (e.property) {
    case "x":
      return (o.x - n.x) * i;
    case "y":
      return (o.y - n.y) * d;
    case "angle":
      return (Math.atan2(u.y - s.y, u.x - s.x) * 180) / Math.PI;
  }
}
function ve(e, r) {
  var t = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,
    a = Pe(f.pth(e) ? e.totalLength : e, r) + "";
  return {
    original: a,
    numbers: a.match(t) ? a.match(t).map(Number) : [0],
    strings: f.str(e) || r ? a.split(t) : [],
  };
}
function se(e) {
  var r = e ? N(f.arr(e) ? e.map(de) : de(e)) : [];
  return z(r, function (t, a, n) {
    return n.indexOf(t) === a;
  });
}
function Le(e) {
  var r = se(e);
  return r.map(function (t, a) {
    return { target: t, id: a, total: r.length, transforms: { list: Ie(t) } };
  });
}
function cr(e, r) {
  var t = re(r);
  if ((/^spring/.test(t.easing) && (t.duration = be(t.easing)), f.arr(e))) {
    var a = e.length,
      n = a === 2 && !f.obj(e[0]);
    n ? (e = { value: e }) : f.fnc(r.duration) || (t.duration = r.duration / a);
  }
  var o = f.arr(e) ? e : [e];
  return o
    .map(function (s, u) {
      var i = f.obj(s) && !f.pth(s) ? s : { value: s };
      return (
        f.und(i.delay) && (i.delay = u ? 0 : r.delay),
        f.und(i.endDelay) && (i.endDelay = u === o.length - 1 ? r.endDelay : 0),
        i
      );
    })
    .map(function (s) {
      return U(s, t);
    });
}
function fr(e) {
  for (
    var r = z(
        N(
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
      t = {},
      a = function (o) {
        var s = r[o];
        t[s] = e.map(function (u) {
          var i = {};
          for (var d in u)
            f.key(d) ? d == s && (i.value = u[d]) : (i[d] = u[d]);
          return i;
        });
      },
      n = 0;
    n < r.length;
    n++
  )
    a(n);
  return t;
}
function lr(e, r) {
  var t = [],
    a = r.keyframes;
  a && (r = U(fr(a), r));
  for (var n in r) f.key(n) && t.push({ name: n, tweens: cr(r[n], e) });
  return t;
}
function dr(e, r) {
  var t = {};
  for (var a in e) {
    var n = Y(e[a], r);
    f.arr(n) &&
      ((n = n.map(function (o) {
        return Y(o, r);
      })),
      n.length === 1 && (n = n[0])),
      (t[a] = n);
  }
  return (
    (t.duration = parseFloat(t.duration)), (t.delay = parseFloat(t.delay)), t
  );
}
function vr(e, r) {
  var t;
  return e.tweens.map(function (a) {
    var n = dr(a, r),
      o = n.value,
      s = f.arr(o) ? o[1] : o,
      u = $(s),
      i = ae(r.target, e.name, u, r),
      d = t ? t.to.original : i,
      c = f.arr(o) ? o[0] : d,
      l = $(c) || $(i),
      m = u || l;
    return (
      f.und(s) && (s = d),
      (n.from = ve(c, m)),
      (n.to = ve(ie(s, c), m)),
      (n.start = t ? t.end : 0),
      (n.end = n.start + n.delay + n.duration + n.endDelay),
      (n.easing = X(n.easing, n.duration)),
      (n.isPath = f.pth(o)),
      (n.isPathTargetInsideSVG = n.isPath && f.svg(r.target)),
      (n.isColor = f.col(n.from.original)),
      n.isColor && (n.round = 1),
      (t = n),
      n
    );
  });
}
var $e = {
  css: function (e, r, t) {
    return (e.style[r] = t);
  },
  attribute: function (e, r, t) {
    return e.setAttribute(r, t);
  },
  object: function (e, r, t) {
    return (e[r] = t);
  },
  transform: function (e, r, t, a, n) {
    if ((a.list.set(r, t), r === a.last || n)) {
      var o = "";
      a.list.forEach(function (s, u) {
        o += u + "(" + s + ") ";
      }),
        (e.style.transform = o);
    }
  },
};
function Ae(e, r) {
  var t = Le(e);
  t.forEach(function (a) {
    for (var n in r) {
      var o = Y(r[n], a),
        s = a.target,
        u = $(o),
        i = ae(s, n, u, a),
        d = u || $(i),
        c = ie(Pe(o, d), i),
        l = ne(s, n);
      $e[l](s, n, c, a.transforms, !0);
    }
  });
}
function gr(e, r) {
  var t = ne(e.target, r.name);
  if (t) {
    var a = vr(r, e),
      n = a[a.length - 1];
    return {
      type: t,
      property: r.name,
      animatable: e,
      tweens: a,
      duration: n.end,
      delay: a[0].delay,
      endDelay: n.endDelay,
    };
  }
}
function hr(e, r) {
  return z(
    N(
      e.map(function (t) {
        return r.map(function (a) {
          return gr(t, a);
        });
      })
    ),
    function (t) {
      return !f.und(t);
    }
  );
}
function De(e, r) {
  var t = e.length,
    a = function (o) {
      return o.timelineOffset ? o.timelineOffset : 0;
    },
    n = {};
  return (
    (n.duration = t
      ? Math.max.apply(
          Math,
          e.map(function (o) {
            return a(o) + o.duration;
          })
        )
      : r.duration),
    (n.delay = t
      ? Math.min.apply(
          Math,
          e.map(function (o) {
            return a(o) + o.delay;
          })
        )
      : r.delay),
    (n.endDelay = t
      ? n.duration -
        Math.max.apply(
          Math,
          e.map(function (o) {
            return a(o) + o.duration - o.endDelay;
          })
        )
      : r.endDelay),
    n
  );
}
var ge = 0;
function mr(e) {
  var r = Q(pe, e),
    t = Q(G, e),
    a = lr(t, e),
    n = Le(e.targets),
    o = hr(n, a),
    s = De(o, t),
    u = ge;
  return (
    ge++,
    U(r, {
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
var T = [],
  Ee = (function () {
    var e;
    function r() {
      !e &&
        (!he() || !y.suspendWhenDocumentHidden) &&
        T.length > 0 &&
        (e = requestAnimationFrame(t));
    }
    function t(n) {
      for (var o = T.length, s = 0; s < o; ) {
        var u = T[s];
        u.paused ? (T.splice(s, 1), o--) : (u.tick(n), s++);
      }
      e = s > 0 ? requestAnimationFrame(t) : void 0;
    }
    function a() {
      !y.suspendWhenDocumentHidden ||
        (he()
          ? (e = cancelAnimationFrame(e))
          : (T.forEach(function (n) {
              return n._onDocumentVisibility();
            }),
            Ee()));
    }
    return (
      typeof document < "u" && document.addEventListener("visibilitychange", a),
      r
    );
  })();
function he() {
  return !!document && document.hidden;
}
function y(e) {
  e === void 0 && (e = {});
  var r = 0,
    t = 0,
    a = 0,
    n,
    o = 0,
    s = null;
  function u(h) {
    var g =
      window.Promise &&
      new Promise(function (P) {
        return (s = P);
      });
    return (h.finished = g), g;
  }
  var i = mr(e);
  u(i);
  function d() {
    var h = i.direction;
    h !== "alternate" && (i.direction = h !== "normal" ? "normal" : "reverse"),
      (i.reversed = !i.reversed),
      n.forEach(function (g) {
        return (g.reversed = i.reversed);
      });
  }
  function c(h) {
    return i.reversed ? i.duration - h : h;
  }
  function l() {
    (r = 0), (t = c(i.currentTime) * (1 / y.speed));
  }
  function m(h, g) {
    g && g.seek(h - g.timelineOffset);
  }
  function I(h) {
    if (i.reversePlayback) for (var P = o; P--; ) m(h, n[P]);
    else for (var g = 0; g < o; g++) m(h, n[g]);
  }
  function p(h) {
    for (var g = 0, P = i.animations, A = P.length; g < A; ) {
      var w = P[g],
        D = w.animatable,
        B = w.tweens,
        E = B.length - 1,
        M = B[E];
      E &&
        (M =
          z(B, function (Ve) {
            return h < Ve.end;
          })[0] || M);
      for (
        var O = C(h - M.start - M.delay, 0, M.duration) / M.duration,
          q = isNaN(O) ? 1 : M.easing(O),
          S = M.to.strings,
          W = M.round,
          K = [],
          Fe = M.to.numbers.length,
          k = void 0,
          F = 0;
        F < Fe;
        F++
      ) {
        var V = void 0,
          ue = M.to.numbers[F],
          ce = M.from.numbers[F] || 0;
        M.isPath
          ? (V = ur(M.value, q * ue, M.isPathTargetInsideSVG))
          : (V = ce + q * (ue - ce)),
          W && ((M.isColor && F > 2) || (V = Math.round(V * W) / W)),
          K.push(V);
      }
      var fe = S.length;
      if (!fe) k = K[0];
      else {
        k = S[0];
        for (var j = 0; j < fe; j++) {
          S[j];
          var le = S[j + 1],
            Z = K[j];
          isNaN(Z) || (le ? (k += Z + le) : (k += Z + " "));
        }
      }
      $e[w.type](D.target, w.property, k, D.transforms),
        (w.currentValue = k),
        g++;
    }
  }
  function v(h) {
    i[h] && !i.passThrough && i[h](i);
  }
  function b() {
    i.remaining && i.remaining !== !0 && i.remaining--;
  }
  function x(h) {
    var g = i.duration,
      P = i.delay,
      A = g - i.endDelay,
      w = c(h);
    (i.progress = C((w / g) * 100, 0, 100)),
      (i.reversePlayback = w < i.currentTime),
      n && I(w),
      !i.began && i.currentTime > 0 && ((i.began = !0), v("begin")),
      !i.loopBegan && i.currentTime > 0 && ((i.loopBegan = !0), v("loopBegin")),
      w <= P && i.currentTime !== 0 && p(0),
      ((w >= A && i.currentTime !== g) || !g) && p(g),
      w > P && w < A
        ? (i.changeBegan ||
            ((i.changeBegan = !0), (i.changeCompleted = !1), v("changeBegin")),
          v("change"),
          p(w))
        : i.changeBegan &&
          ((i.changeCompleted = !0), (i.changeBegan = !1), v("changeComplete")),
      (i.currentTime = C(w, 0, g)),
      i.began && v("update"),
      h >= g &&
        ((t = 0),
        b(),
        i.remaining
          ? ((r = a),
            v("loopComplete"),
            (i.loopBegan = !1),
            i.direction === "alternate" && d())
          : ((i.paused = !0),
            i.completed ||
              ((i.completed = !0),
              v("loopComplete"),
              v("complete"),
              !i.passThrough && "Promise" in window && (s(), u(i)))));
  }
  return (
    (i.reset = function () {
      var h = i.direction;
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
        (i.reversed = h === "reverse"),
        (i.remaining = i.loop),
        (n = i.children),
        (o = n.length);
      for (var g = o; g--; ) i.children[g].reset();
      ((i.reversed && i.loop !== !0) || (h === "alternate" && i.loop === 1)) &&
        i.remaining++,
        p(i.reversed ? i.duration : 0);
    }),
    (i._onDocumentVisibility = l),
    (i.set = function (h, g) {
      return Ae(h, g), i;
    }),
    (i.tick = function (h) {
      (a = h), r || (r = a), x((a + (t - r)) * y.speed);
    }),
    (i.seek = function (h) {
      x(c(h));
    }),
    (i.pause = function () {
      (i.paused = !0), l();
    }),
    (i.play = function () {
      !i.paused ||
        (i.completed && i.reset(), (i.paused = !1), T.push(i), l(), Ee());
    }),
    (i.reverse = function () {
      d(), (i.completed = !i.reversed), l();
    }),
    (i.restart = function () {
      i.reset(), i.play();
    }),
    (i.remove = function (h) {
      var g = se(h);
      Oe(g, i);
    }),
    i.reset(),
    i.autoplay && i.play(),
    i
  );
}
function me(e, r) {
  for (var t = r.length; t--; ) ee(e, r[t].animatable.target) && r.splice(t, 1);
}
function Oe(e, r) {
  var t = r.animations,
    a = r.children;
  me(e, t);
  for (var n = a.length; n--; ) {
    var o = a[n],
      s = o.animations;
    me(e, s), !s.length && !o.children.length && a.splice(n, 1);
  }
  !t.length && !a.length && r.pause();
}
function pr(e) {
  for (var r = se(e), t = T.length; t--; ) {
    var a = T[t];
    Oe(r, a);
  }
}
function yr(e, r) {
  r === void 0 && (r = {});
  var t = r.direction || "normal",
    a = r.easing ? X(r.easing) : null,
    n = r.grid,
    o = r.axis,
    s = r.from || 0,
    u = s === "first",
    i = s === "center",
    d = s === "last",
    c = f.arr(e),
    l = parseFloat(c ? e[0] : e),
    m = c ? parseFloat(e[1]) : 0,
    I = $(c ? e[1] : e) || 0,
    p = r.start || 0 + (c ? l : 0),
    v = [],
    b = 0;
  return function (x, h, g) {
    if ((u && (s = 0), i && (s = (g - 1) / 2), d && (s = g - 1), !v.length)) {
      for (var P = 0; P < g; P++) {
        if (!n) v.push(Math.abs(s - P));
        else {
          var A = i ? (n[0] - 1) / 2 : s % n[0],
            w = i ? (n[1] - 1) / 2 : Math.floor(s / n[0]),
            D = P % n[0],
            B = Math.floor(P / n[0]),
            E = A - D,
            M = w - B,
            O = Math.sqrt(E * E + M * M);
          o === "x" && (O = -E), o === "y" && (O = -M), v.push(O);
        }
        b = Math.max.apply(Math, v);
      }
      a &&
        (v = v.map(function (S) {
          return a(S / b) * b;
        })),
        t === "reverse" &&
          (v = v.map(function (S) {
            return o ? (S < 0 ? S * -1 : -S) : Math.abs(b - S);
          }));
    }
    var q = c ? (m - l) / b : l;
    return p + q * (Math.round(v[h] * 100) / 100) + I;
  };
}
function br(e) {
  e === void 0 && (e = {});
  var r = y(e);
  return (
    (r.duration = 0),
    (r.add = function (t, a) {
      var n = T.indexOf(r),
        o = r.children;
      n > -1 && T.splice(n, 1);
      function s(m) {
        m.passThrough = !0;
      }
      for (var u = 0; u < o.length; u++) s(o[u]);
      var i = U(t, Q(G, e));
      i.targets = i.targets || e.targets;
      var d = r.duration;
      (i.autoplay = !1),
        (i.direction = r.direction),
        (i.timelineOffset = f.und(a) ? d : ie(a, d)),
        s(r),
        r.seek(i.timelineOffset);
      var c = y(i);
      s(c), o.push(c);
      var l = De(o, e);
      return (
        (r.delay = l.delay),
        (r.endDelay = l.endDelay),
        (r.duration = l.duration),
        r.seek(0),
        r.reset(),
        r.autoplay && r.play(),
        r
      );
    }),
    r
  );
}
y.version = "3.2.1";
y.speed = 1;
y.suspendWhenDocumentHidden = !0;
y.running = T;
y.remove = pr;
y.get = ae;
y.set = Ae;
y.convertPx = te;
y.path = sr;
y.setDashoffset = ir;
y.stagger = yr;
y.timeline = br;
y.easing = X;
y.penner = we;
y.random = function (e, r) {
  return Math.floor(Math.random() * (r - e + 1)) + e;
};
async function wr(e) {
  const r = document.querySelector("main"),
    {
      thumbnail: t,
      title: a,
      genre: n,
      platform: o,
      description: s,
      game_url: u,
      screenshots: i,
    } = await Re(e),
    d = document.createElement("section");
  let c = document.querySelector(`#id_${e} img`);
  d.classList.add("game-detail"),
    (d.innerHTML = `
      <article>
        <img class = 'game-detail__hero-img' src = '${t}' alt = 'game image'>
        <h2>${a}</h2>
        </div>
        <div class="props">
        <h4>Genero: ${n}</h4>
        <h4>Plataforma: ${o}</h4>
        </div>
        <div class="description-container">
        <p>
          ${s}
        </p>
        </div>
        <a href="${u}" target="_blank">
          <div class="play-btn">JUGAR</div>
        </a>
    </article>
      `),
    c ? (r.appendChild(d), xr(c)) : r.appendChild(d);
}
function xr(e, r) {
  const t = e.getBoundingClientRect(),
    a = document.createElement("img"),
    n = document.querySelector("body");
  a.setAttribute("class", "hero-img"),
    (a.src = e.src),
    a.setAttribute(
      "style",
      `position: fixed; top: ${t.top}px; left:${t.left}px; width: ${t.width}px; height: ${t.height}px; `
    ),
    n.appendChild(a),
    Mr(t);
}
function Mr(e) {
  const t = document.querySelector("header").getBoundingClientRect(),
    a = document.querySelector(".hero-img"),
    n = window.innerWidth,
    o = (n * 0.7) / e.width,
    s = (n - e.width) / 2,
    u = (e.height * o - e.height) / 2 + t.height + 16,
    i = s - e.left,
    d = u - e.top;
  window.scrollTo(0, 0),
    y
      .timeline({ easing: "easeInOutCubic" })
      .add({
        targets: ".hero-img",
        translateX: i,
        translateY: d,
        scale: o,
        duration: 500,
        complete: () => {},
      })
      .add({
        targets: ".game-detail article",
        duration: 1e3,
        opacity: 1,
        complete: () => a.remove(),
      });
}
async function ke() {
  ze();
  const e = document.querySelector(".card-container"),
    r = await je(),
    t = Ue(r);
  document.querySelector(".game-detail"), (e.innerHTML = t);
}
function Be() {
  const e = document.location,
    r = e.href,
    t = e.hash,
    a = /\?.*/;
  if (!t || t === "#/") ke();
  else if (t.includes("?")) {
    const o = new URLSearchParams(r.match(a)[0]).get("game_id");
    wr(o);
  }
}
document.querySelector(".card-container");
window.addEventListener("DOMContentLoaded", e => {
  ke(), Be();
});
window.addEventListener("click", e => {
  if (e.target.matches(".star")) {
    const r = e.target.parentNode.parentNode,
      t = e.target.dataset.rating;
    _e(t, r);
  }
});
window.addEventListener("hashchange", () => {
  Be();
});
