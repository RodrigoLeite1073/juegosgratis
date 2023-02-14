(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i);
  new MutationObserver(i => {
    for (const a of i)
      if (a.type === "childList")
        for (const o of a.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && n(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(i) {
    const a = {};
    return (
      i.integrity && (a.integrity = i.integrity),
      i.referrerpolicy && (a.referrerPolicy = i.referrerpolicy),
      i.crossorigin === "use-credentials"
        ? (a.credentials = "include")
        : i.crossorigin === "anonymous"
        ? (a.credentials = "omit")
        : (a.credentials = "same-origin"),
      a
    );
  }
  function n(i) {
    if (i.ep) return;
    i.ep = !0;
    const a = r(i);
    fetch(i.href, a);
  }
})();
async function ye() {
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
async function Kt(t = 0) {
  const e = {
    headers: {
      "X-RapidAPI-Key": "15cbb2ed7amsh8dd5fda7e2688fap122f1djsn4a6ac2c2c23f",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };
  return await fetch(
    `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${t}`,
    e
  )
    .then(n => n.json())
    .then(n => n)
    .catch(n => console.log("error", n));
}
let Q = {};
function be(t) {
  const e = Q[t] || 0;
  let r = "";
  for (let n = 1; n < 6; n++) {
    let i;
    n <= e ? (i = "./star_active.svg") : (i = "./star.svg"),
      (r += `
      <img
        data-rating = "${n}"
        class="star"
        src= ${i}
        alt="star"
      />
    `);
  }
  return r;
}
function we(t, e) {
  const r = e.querySelectorAll(".star"),
    n = e.dataset.id;
  for (let i = 0; i < 5; i++) r[i].setAttribute("src", "./star.svg");
  for (let i = 0; i < t; i++) r[i].setAttribute("src", "./star_active.svg");
  _e(n, t);
}
function _e(t, e) {
  Q[t] = e;
  const r = JSON.stringify(Q);
  localStorage.setItem("rating", r);
}
function Se() {
  const t = localStorage.getItem("rating") || "{}";
  Q = JSON.parse(t);
}
function Te(t) {
  const { id: e, title: r, thumbnail: n, short_description: i } = t,
    a = r.replace(/\s/g, "_"),
    u = `${location.pathname}#/${a}/?game_id=${e}`;
  return `
  <article id="id_${e}" class="short-description-card" data-id=${e}>
      <a class="to-game" href=${u}>
        <img
          class = "img-card"
          src="${n}"
          alt="thumbnail"
        />
      <h3>${r}</h3>
        <p>${i}</p>
      </a>
      <div  class="stars">
      ${be(e)}
      </div>
  </article>
  `;
}
function ke(t) {
  console.log("cantidad de juegos", t.length);
  let e = "";
  return (
    t.forEach(r => {
      e += Te(r);
    }),
    e
  );
}
async function Oe() {
  Se();
  const t = document.querySelector("main"),
    e = document.createElement("div"),
    r = await ye(),
    n = ke(r);
  e.classList.add("base"),
    (e.innerHTML = n),
    (t.innerHTML = ""),
    t.appendChild(e);
}
/*!
 * Glide.js v3.6.0
 * (c) 2013-2022 Jędrzej Chałubek (https://github.com/jedrzejchalubek/)
 * Released under the MIT License.
 */ function Z(t) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (Z = function (e) {
          return typeof e;
        })
      : (Z = function (e) {
          return e &&
            typeof Symbol == "function" &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? "symbol"
            : typeof e;
        }),
    Z(t)
  );
}
function tt(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Ht(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(t, n.key, n);
  }
}
function et(t, e, r) {
  return e && Ht(t.prototype, e), r && Ht(t, r), t;
}
function xe(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  (t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 },
  })),
    e && ft(t, e);
}
function V(t) {
  return (
    (V = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    V(t)
  );
}
function ft(t, e) {
  return (
    (ft =
      Object.setPrototypeOf ||
      function (n, i) {
        return (n.__proto__ = i), n;
      }),
    ft(t, e)
  );
}
function Me() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function Pe(t) {
  if (t === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t;
}
function Ae(t, e) {
  if (e && (typeof e == "object" || typeof e == "function")) return e;
  if (e !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return Pe(t);
}
function Le(t) {
  var e = Me();
  return function () {
    var n = V(t),
      i;
    if (e) {
      var a = V(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else i = n.apply(this, arguments);
    return Ae(this, i);
  };
}
function Re(t, e) {
  for (
    ;
    !Object.prototype.hasOwnProperty.call(t, e) && ((t = V(t)), t !== null);

  );
  return t;
}
function J() {
  return (
    typeof Reflect < "u" && Reflect.get
      ? (J = Reflect.get)
      : (J = function (e, r, n) {
          var i = Re(e, r);
          if (!!i) {
            var a = Object.getOwnPropertyDescriptor(i, r);
            return a.get ? a.get.call(arguments.length < 3 ? e : n) : a.value;
          }
        }),
    J.apply(this, arguments)
  );
}
var Ie = {
  type: "slider",
  startAt: 0,
  perView: 1,
  focusAt: 0,
  gap: 10,
  autoplay: !1,
  hoverpause: !0,
  keyboard: !0,
  bound: !1,
  swipeThreshold: 80,
  dragThreshold: 120,
  perSwipe: "",
  touchRatio: 0.5,
  touchAngle: 45,
  animationDuration: 400,
  rewind: !0,
  rewindDuration: 800,
  animationTimingFunc: "cubic-bezier(.165, .840, .440, 1)",
  waitForTransition: !0,
  throttle: 10,
  direction: "ltr",
  peek: 0,
  cloningRatio: 1,
  breakpoints: {},
  classes: {
    swipeable: "glide--swipeable",
    dragging: "glide--dragging",
    direction: { ltr: "glide--ltr", rtl: "glide--rtl" },
    type: { slider: "glide--slider", carousel: "glide--carousel" },
    slide: { clone: "glide__slide--clone", active: "glide__slide--active" },
    arrow: { disabled: "glide__arrow--disabled" },
    nav: { active: "glide__bullet--active" },
  },
};
function I(t) {
  console.error("[Glide warn]: ".concat(t));
}
function x(t) {
  return parseInt(t);
}
function He(t) {
  return parseFloat(t);
}
function lt(t) {
  return typeof t == "string";
}
function z(t) {
  var e = Z(t);
  return e === "function" || (e === "object" && !!t);
}
function X(t) {
  return typeof t == "function";
}
function Yt(t) {
  return typeof t > "u";
}
function dt(t) {
  return t.constructor === Array;
}
function Be(t, e, r) {
  var n = {};
  for (var i in e)
    X(e[i]) ? (n[i] = e[i](t, n, r)) : I("Extension must be a function");
  for (var a in n) X(n[a].mount) && n[a].mount();
  return n;
}
function _(t, e, r) {
  Object.defineProperty(t, e, r);
}
function De(t) {
  return Object.keys(t)
    .sort()
    .reduce(function (e, r) {
      return (e[r] = t[r]), e[r], e;
    }, {});
}
function ht(t, e) {
  var r = Object.assign({}, t, e);
  return (
    e.hasOwnProperty("classes") &&
      ((r.classes = Object.assign({}, t.classes, e.classes)),
      e.classes.hasOwnProperty("direction") &&
        (r.classes.direction = Object.assign(
          {},
          t.classes.direction,
          e.classes.direction
        )),
      e.classes.hasOwnProperty("type") &&
        (r.classes.type = Object.assign({}, t.classes.type, e.classes.type)),
      e.classes.hasOwnProperty("slide") &&
        (r.classes.slide = Object.assign({}, t.classes.slide, e.classes.slide)),
      e.classes.hasOwnProperty("arrow") &&
        (r.classes.arrow = Object.assign({}, t.classes.arrow, e.classes.arrow)),
      e.classes.hasOwnProperty("nav") &&
        (r.classes.nav = Object.assign({}, t.classes.nav, e.classes.nav))),
    e.hasOwnProperty("breakpoints") &&
      (r.breakpoints = Object.assign({}, t.breakpoints, e.breakpoints)),
    r
  );
}
var Ee = (function () {
    function t() {
      var e =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      tt(this, t), (this.events = e), (this.hop = e.hasOwnProperty);
    }
    return (
      et(t, [
        {
          key: "on",
          value: function (r, n) {
            if (dt(r)) {
              for (var i = 0; i < r.length; i++) this.on(r[i], n);
              return;
            }
            this.hop.call(this.events, r) || (this.events[r] = []);
            var a = this.events[r].push(n) - 1;
            return {
              remove: function () {
                delete this.events[r][a];
              },
            };
          },
        },
        {
          key: "emit",
          value: function (r, n) {
            if (dt(r)) {
              for (var i = 0; i < r.length; i++) this.emit(r[i], n);
              return;
            }
            !this.hop.call(this.events, r) ||
              this.events[r].forEach(function (a) {
                a(n || {});
              });
          },
        },
      ]),
      t
    );
  })(),
  $e = (function () {
    function t(e) {
      var r =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      tt(this, t),
        (this._c = {}),
        (this._t = []),
        (this._e = new Ee()),
        (this.disabled = !1),
        (this.selector = e),
        (this.settings = ht(Ie, r)),
        (this.index = this.settings.startAt);
    }
    return (
      et(t, [
        {
          key: "mount",
          value: function () {
            var r =
              arguments.length > 0 && arguments[0] !== void 0
                ? arguments[0]
                : {};
            return (
              this._e.emit("mount.before"),
              z(r)
                ? (this._c = Be(this, r, this._e))
                : I("You need to provide a object on `mount()`"),
              this._e.emit("mount.after"),
              this
            );
          },
        },
        {
          key: "mutate",
          value: function () {
            var r =
              arguments.length > 0 && arguments[0] !== void 0
                ? arguments[0]
                : [];
            return (
              dt(r)
                ? (this._t = r)
                : I("You need to provide a array on `mutate()`"),
              this
            );
          },
        },
        {
          key: "update",
          value: function () {
            var r =
              arguments.length > 0 && arguments[0] !== void 0
                ? arguments[0]
                : {};
            return (
              (this.settings = ht(this.settings, r)),
              r.hasOwnProperty("startAt") && (this.index = r.startAt),
              this._e.emit("update"),
              this
            );
          },
        },
        {
          key: "go",
          value: function (r) {
            return this._c.Run.make(r), this;
          },
        },
        {
          key: "move",
          value: function (r) {
            return this._c.Transition.disable(), this._c.Move.make(r), this;
          },
        },
        {
          key: "destroy",
          value: function () {
            return this._e.emit("destroy"), this;
          },
        },
        {
          key: "play",
          value: function () {
            var r =
              arguments.length > 0 && arguments[0] !== void 0
                ? arguments[0]
                : !1;
            return (
              r && (this.settings.autoplay = r), this._e.emit("play"), this
            );
          },
        },
        {
          key: "pause",
          value: function () {
            return this._e.emit("pause"), this;
          },
        },
        {
          key: "disable",
          value: function () {
            return (this.disabled = !0), this;
          },
        },
        {
          key: "enable",
          value: function () {
            return (this.disabled = !1), this;
          },
        },
        {
          key: "on",
          value: function (r, n) {
            return this._e.on(r, n), this;
          },
        },
        {
          key: "isType",
          value: function (r) {
            return this.settings.type === r;
          },
        },
        {
          key: "settings",
          get: function () {
            return this._o;
          },
          set: function (r) {
            z(r) ? (this._o = r) : I("Options must be an `object` instance.");
          },
        },
        {
          key: "index",
          get: function () {
            return this._i;
          },
          set: function (r) {
            this._i = x(r);
          },
        },
        {
          key: "type",
          get: function () {
            return this.settings.type;
          },
        },
        {
          key: "disabled",
          get: function () {
            return this._d;
          },
          set: function (r) {
            this._d = !!r;
          },
        },
      ]),
      t
    );
  })();
function je(t, e, r) {
  var n = {
    mount: function () {
      this._o = !1;
    },
    make: function (f) {
      var c = this;
      t.disabled ||
        (!t.settings.waitForTransition || t.disable(),
        (this.move = f),
        r.emit("run.before", this.move),
        this.calculate(),
        r.emit("run", this.move),
        e.Transition.after(function () {
          c.isStart() && r.emit("run.start", c.move),
            c.isEnd() && r.emit("run.end", c.move),
            c.isOffset() && ((c._o = !1), r.emit("run.offset", c.move)),
            r.emit("run.after", c.move),
            t.enable();
        }));
    },
    calculate: function () {
      var f = this.move,
        c = this.length,
        l = f.steps,
        d = f.direction,
        y = 1;
      if (d === "=") {
        if (t.settings.bound && x(l) > c) {
          t.index = c;
          return;
        }
        t.index = l;
        return;
      }
      if (d === ">" && l === ">") {
        t.index = c;
        return;
      }
      if (d === "<" && l === "<") {
        t.index = 0;
        return;
      }
      if (
        (d === "|" && (y = t.settings.perView || 1),
        d === ">" || (d === "|" && l === ">"))
      ) {
        var v = i(y);
        v > c && (this._o = !0), (t.index = a(v, y));
        return;
      }
      if (d === "<" || (d === "|" && l === "<")) {
        var h = o(y);
        h < 0 && (this._o = !0), (t.index = u(h, y));
        return;
      }
      I("Invalid direction pattern [".concat(d).concat(l, "] has been used"));
    },
    isStart: function () {
      return t.index <= 0;
    },
    isEnd: function () {
      return t.index >= this.length;
    },
    isOffset: function () {
      var f =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : void 0;
      return f
        ? this._o
          ? f === "|>"
            ? this.move.direction === "|" && this.move.steps === ">"
            : f === "|<"
            ? this.move.direction === "|" && this.move.steps === "<"
            : this.move.direction === f
          : !1
        : this._o;
    },
    isBound: function () {
      return (
        t.isType("slider") &&
        t.settings.focusAt !== "center" &&
        t.settings.bound
      );
    },
  };
  function i(s) {
    var f = t.index;
    return t.isType("carousel") ? f + s : f + (s - (f % s));
  }
  function a(s, f) {
    var c = n.length;
    return s <= c
      ? s
      : t.isType("carousel")
      ? s - (c + 1)
      : t.settings.rewind
      ? n.isBound() && !n.isEnd()
        ? c
        : 0
      : n.isBound()
      ? c
      : Math.floor(c / f) * f;
  }
  function o(s) {
    var f = t.index;
    if (t.isType("carousel")) return f - s;
    var c = Math.ceil(f / s);
    return (c - 1) * s;
  }
  function u(s, f) {
    var c = n.length;
    return s >= 0
      ? s
      : t.isType("carousel")
      ? s + (c + 1)
      : t.settings.rewind
      ? n.isBound() && n.isStart()
        ? c
        : Math.floor(c / f) * f
      : 0;
  }
  return (
    _(n, "move", {
      get: function () {
        return this._m;
      },
      set: function (f) {
        var c = f.substr(1);
        this._m = {
          direction: f.substr(0, 1),
          steps: c ? (x(c) ? x(c) : c) : 0,
        };
      },
    }),
    _(n, "length", {
      get: function () {
        var f = t.settings,
          c = e.Html.slides.length;
        return this.isBound()
          ? c - 1 - (x(f.perView) - 1) + x(f.focusAt)
          : c - 1;
      },
    }),
    _(n, "offset", {
      get: function () {
        return this._o;
      },
    }),
    n
  );
}
function Bt() {
  return new Date().getTime();
}
function rt(t, e, r) {
  var n,
    i,
    a,
    o,
    u = 0;
  r || (r = {});
  var s = function () {
      (u = r.leading === !1 ? 0 : Bt()),
        (n = null),
        (o = t.apply(i, a)),
        n || (i = a = null);
    },
    f = function () {
      var l = Bt();
      !u && r.leading === !1 && (u = l);
      var d = e - (l - u);
      return (
        (i = this),
        (a = arguments),
        d <= 0 || d > e
          ? (n && (clearTimeout(n), (n = null)),
            (u = l),
            (o = t.apply(i, a)),
            n || (i = a = null))
          : !n && r.trailing !== !1 && (n = setTimeout(s, d)),
        o
      );
    };
  return (
    (f.cancel = function () {
      clearTimeout(n), (u = 0), (n = i = a = null);
    }),
    f
  );
}
var K = {
  ltr: ["marginLeft", "marginRight"],
  rtl: ["marginRight", "marginLeft"],
};
function Ve(t, e, r) {
  var n = {
    apply: function (a) {
      for (var o = 0, u = a.length; o < u; o++) {
        var s = a[o].style,
          f = e.Direction.value;
        o !== 0
          ? (s[K[f][0]] = "".concat(this.value / 2, "px"))
          : (s[K[f][0]] = ""),
          o !== a.length - 1
            ? (s[K[f][1]] = "".concat(this.value / 2, "px"))
            : (s[K[f][1]] = "");
      }
    },
    remove: function (a) {
      for (var o = 0, u = a.length; o < u; o++) {
        var s = a[o].style;
        (s.marginLeft = ""), (s.marginRight = "");
      }
    },
  };
  return (
    _(n, "value", {
      get: function () {
        return x(t.settings.gap);
      },
    }),
    _(n, "grow", {
      get: function () {
        return n.value * e.Sizes.length;
      },
    }),
    _(n, "reductor", {
      get: function () {
        var a = t.settings.perView;
        return (n.value * (a - 1)) / a;
      },
    }),
    r.on(
      ["build.after", "update"],
      rt(function () {
        n.apply(e.Html.wrapper.children);
      }, 30)
    ),
    r.on("destroy", function () {
      n.remove(e.Html.wrapper.children);
    }),
    n
  );
}
function Zt(t) {
  if (t && t.parentNode) {
    for (var e = t.parentNode.firstChild, r = []; e; e = e.nextSibling)
      e.nodeType === 1 && e !== t && r.push(e);
    return r;
  }
  return [];
}
function Dt(t) {
  return !!(t && t instanceof window.HTMLElement);
}
function gt(t) {
  return Array.prototype.slice.call(t);
}
var Et = '[data-glide-el="track"]';
function ze(t, e, r) {
  var n = {
    mount: function () {
      (this.root = t.selector),
        (this.track = this.root.querySelector(Et)),
        this.collectSlides();
    },
    collectSlides: function () {
      this.slides = gt(this.wrapper.children).filter(function (a) {
        return !a.classList.contains(t.settings.classes.slide.clone);
      });
    },
  };
  return (
    _(n, "root", {
      get: function () {
        return n._r;
      },
      set: function (a) {
        lt(a) && (a = document.querySelector(a)),
          Dt(a) ? (n._r = a) : I("Root element must be a existing Html node");
      },
    }),
    _(n, "track", {
      get: function () {
        return n._t;
      },
      set: function (a) {
        Dt(a)
          ? (n._t = a)
          : I(
              "Could not find track element. Please use ".concat(
                Et,
                " attribute."
              )
            );
      },
    }),
    _(n, "wrapper", {
      get: function () {
        return n.track.children[0];
      },
    }),
    r.on("update", function () {
      n.collectSlides();
    }),
    n
  );
}
function Fe(t, e, r) {
  var n = {
    mount: function () {
      this.value = t.settings.peek;
    },
  };
  return (
    _(n, "value", {
      get: function () {
        return n._v;
      },
      set: function (a) {
        z(a) ? ((a.before = x(a.before)), (a.after = x(a.after))) : (a = x(a)),
          (n._v = a);
      },
    }),
    _(n, "reductor", {
      get: function () {
        var a = n.value,
          o = t.settings.perView;
        return z(a) ? a.before / o + a.after / o : (a * 2) / o;
      },
    }),
    r.on(["resize", "update"], function () {
      n.mount();
    }),
    n
  );
}
function Ne(t, e, r) {
  var n = {
    mount: function () {
      this._o = 0;
    },
    make: function () {
      var a = this,
        o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      (this.offset = o),
        r.emit("move", { movement: this.value }),
        e.Transition.after(function () {
          r.emit("move.after", { movement: a.value });
        });
    },
  };
  return (
    _(n, "offset", {
      get: function () {
        return n._o;
      },
      set: function (a) {
        n._o = Yt(a) ? 0 : x(a);
      },
    }),
    _(n, "translate", {
      get: function () {
        return e.Sizes.slideWidth * t.index;
      },
    }),
    _(n, "value", {
      get: function () {
        var a = this.offset,
          o = this.translate;
        return e.Direction.is("rtl") ? o + a : o - a;
      },
    }),
    r.on(["build.before", "run"], function () {
      n.make();
    }),
    n
  );
}
function We(t, e, r) {
  var n = {
    setupSlides: function () {
      for (
        var a = "".concat(this.slideWidth, "px"), o = e.Html.slides, u = 0;
        u < o.length;
        u++
      )
        o[u].style.width = a;
    },
    setupWrapper: function () {
      e.Html.wrapper.style.width = "".concat(this.wrapperSize, "px");
    },
    remove: function () {
      for (var a = e.Html.slides, o = 0; o < a.length; o++)
        a[o].style.width = "";
      e.Html.wrapper.style.width = "";
    },
  };
  return (
    _(n, "length", {
      get: function () {
        return e.Html.slides.length;
      },
    }),
    _(n, "width", {
      get: function () {
        return e.Html.track.offsetWidth;
      },
    }),
    _(n, "wrapperSize", {
      get: function () {
        return n.slideWidth * n.length + e.Gaps.grow + e.Clones.grow;
      },
    }),
    _(n, "slideWidth", {
      get: function () {
        return n.width / t.settings.perView - e.Peek.reductor - e.Gaps.reductor;
      },
    }),
    r.on(["build.before", "resize", "update"], function () {
      n.setupSlides(), n.setupWrapper();
    }),
    r.on("destroy", function () {
      n.remove();
    }),
    n
  );
}
function qe(t, e, r) {
  var n = {
    mount: function () {
      r.emit("build.before"),
        this.typeClass(),
        this.activeClass(),
        r.emit("build.after");
    },
    typeClass: function () {
      e.Html.root.classList.add(t.settings.classes.type[t.settings.type]);
    },
    activeClass: function () {
      var a = t.settings.classes,
        o = e.Html.slides[t.index];
      o &&
        (o.classList.add(a.slide.active),
        Zt(o).forEach(function (u) {
          u.classList.remove(a.slide.active);
        }));
    },
    removeClasses: function () {
      var a = t.settings.classes,
        o = a.type,
        u = a.slide;
      e.Html.root.classList.remove(o[t.settings.type]),
        e.Html.slides.forEach(function (s) {
          s.classList.remove(u.active);
        });
    },
  };
  return (
    r.on(["destroy", "update"], function () {
      n.removeClasses();
    }),
    r.on(["resize", "update"], function () {
      n.mount();
    }),
    r.on("move.after", function () {
      n.activeClass();
    }),
    n
  );
}
function Ue(t, e, r) {
  var n = {
    mount: function () {
      (this.items = []), t.isType("carousel") && (this.items = this.collect());
    },
    collect: function () {
      var a =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
        o = e.Html.slides,
        u = t.settings,
        s = u.perView,
        f = u.classes,
        c = u.cloningRatio;
      if (o.length !== 0)
        for (
          var l = +!!t.settings.peek,
            d = s + l + Math.round(s / 2),
            y = o.slice(0, d).reverse(),
            v = o.slice(d * -1),
            h = 0;
          h < Math.max(c, Math.floor(s / o.length));
          h++
        ) {
          for (var b = 0; b < y.length; b++) {
            var w = y[b].cloneNode(!0);
            w.classList.add(f.slide.clone), a.push(w);
          }
          for (var m = 0; m < v.length; m++) {
            var p = v[m].cloneNode(!0);
            p.classList.add(f.slide.clone), a.unshift(p);
          }
        }
      return a;
    },
    append: function () {
      for (
        var a = this.items,
          o = e.Html,
          u = o.wrapper,
          s = o.slides,
          f = Math.floor(a.length / 2),
          c = a.slice(0, f).reverse(),
          l = a.slice(f * -1).reverse(),
          d = "".concat(e.Sizes.slideWidth, "px"),
          y = 0;
        y < l.length;
        y++
      )
        u.appendChild(l[y]);
      for (var v = 0; v < c.length; v++) u.insertBefore(c[v], s[0]);
      for (var h = 0; h < a.length; h++) a[h].style.width = d;
    },
    remove: function () {
      for (var a = this.items, o = 0; o < a.length; o++)
        e.Html.wrapper.removeChild(a[o]);
    },
  };
  return (
    _(n, "grow", {
      get: function () {
        return (e.Sizes.slideWidth + e.Gaps.value) * n.items.length;
      },
    }),
    r.on("update", function () {
      n.remove(), n.mount(), n.append();
    }),
    r.on("build.before", function () {
      t.isType("carousel") && n.append();
    }),
    r.on("destroy", function () {
      n.remove();
    }),
    n
  );
}
var B = (function () {
  function t() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    tt(this, t), (this.listeners = e);
  }
  return (
    et(t, [
      {
        key: "on",
        value: function (r, n, i) {
          var a =
            arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
          lt(r) && (r = [r]);
          for (var o = 0; o < r.length; o++)
            (this.listeners[r[o]] = i),
              n.addEventListener(r[o], this.listeners[r[o]], a);
        },
      },
      {
        key: "off",
        value: function (r, n) {
          var i =
            arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          lt(r) && (r = [r]);
          for (var a = 0; a < r.length; a++)
            n.removeEventListener(r[a], this.listeners[r[a]], i);
        },
      },
      {
        key: "destroy",
        value: function () {
          delete this.listeners;
        },
      },
    ]),
    t
  );
})();
function Ce(t, e, r) {
  var n = new B(),
    i = {
      mount: function () {
        this.bind();
      },
      bind: function () {
        n.on(
          "resize",
          window,
          rt(function () {
            r.emit("resize");
          }, t.settings.throttle)
        );
      },
      unbind: function () {
        n.off("resize", window);
      },
    };
  return (
    r.on("destroy", function () {
      i.unbind(), n.destroy();
    }),
    i
  );
}
var Ke = ["ltr", "rtl"],
  Ye = { ">": "<", "<": ">", "=": "=" };
function Ze(t, e, r) {
  var n = {
    mount: function () {
      this.value = t.settings.direction;
    },
    resolve: function (a) {
      var o = a.slice(0, 1);
      return this.is("rtl") ? a.split(o).join(Ye[o]) : a;
    },
    is: function (a) {
      return this.value === a;
    },
    addClass: function () {
      e.Html.root.classList.add(t.settings.classes.direction[this.value]);
    },
    removeClass: function () {
      e.Html.root.classList.remove(t.settings.classes.direction[this.value]);
    },
  };
  return (
    _(n, "value", {
      get: function () {
        return n._v;
      },
      set: function (a) {
        Ke.indexOf(a) > -1
          ? (n._v = a)
          : I("Direction value must be `ltr` or `rtl`");
      },
    }),
    r.on(["destroy", "update"], function () {
      n.removeClass();
    }),
    r.on("update", function () {
      n.mount();
    }),
    r.on(["build.before", "update"], function () {
      n.addClass();
    }),
    n
  );
}
function Je(t, e) {
  return {
    modify: function (n) {
      return e.Direction.is("rtl") ? -n : n;
    },
  };
}
function Qe(t, e) {
  return {
    modify: function (n) {
      var i = Math.floor(n / e.Sizes.slideWidth);
      return n + e.Gaps.value * i;
    },
  };
}
function Xe(t, e) {
  return {
    modify: function (n) {
      return n + e.Clones.grow / 2;
    },
  };
}
function Ge(t, e) {
  return {
    modify: function (n) {
      if (t.settings.focusAt >= 0) {
        var i = e.Peek.value;
        return z(i) ? n - i.before : n - i;
      }
      return n;
    },
  };
}
function tr(t, e) {
  return {
    modify: function (n) {
      var i = e.Gaps.value,
        a = e.Sizes.width,
        o = t.settings.focusAt,
        u = e.Sizes.slideWidth;
      return o === "center" ? n - (a / 2 - u / 2) : n - u * o - i * o;
    },
  };
}
function er(t, e, r) {
  var n = [Qe, Xe, Ge, tr].concat(t._t, [Je]);
  return {
    mutate: function (a) {
      for (var o = 0; o < n.length; o++) {
        var u = n[o];
        X(u) && X(u().modify)
          ? (a = u(t, e, r).modify(a))
          : I(
              "Transformer should be a function that returns an object with `modify()` method"
            );
      }
      return a;
    },
  };
}
function rr(t, e, r) {
  var n = {
    set: function (a) {
      var o = er(t, e).mutate(a),
        u = "translate3d(".concat(-1 * o, "px, 0px, 0px)");
      (e.Html.wrapper.style.mozTransform = u),
        (e.Html.wrapper.style.webkitTransform = u),
        (e.Html.wrapper.style.transform = u);
    },
    remove: function () {
      e.Html.wrapper.style.transform = "";
    },
    getStartIndex: function () {
      var a = e.Sizes.length,
        o = t.index,
        u = t.settings.perView;
      return e.Run.isOffset(">") || e.Run.isOffset("|>")
        ? a + (o - u)
        : (o + u) % a;
    },
    getTravelDistance: function () {
      var a = e.Sizes.slideWidth * t.settings.perView;
      return e.Run.isOffset(">") || e.Run.isOffset("|>") ? a * -1 : a;
    },
  };
  return (
    r.on("move", function (i) {
      if (!t.isType("carousel") || !e.Run.isOffset()) return n.set(i.movement);
      e.Transition.after(function () {
        r.emit("translate.jump"), n.set(e.Sizes.slideWidth * t.index);
      });
      var a = e.Sizes.slideWidth * e.Translate.getStartIndex();
      return n.set(a - e.Translate.getTravelDistance());
    }),
    r.on("destroy", function () {
      n.remove();
    }),
    n
  );
}
function nr(t, e, r) {
  var n = !1,
    i = {
      compose: function (o) {
        var u = t.settings;
        return n
          ? "".concat(o, " 0ms ").concat(u.animationTimingFunc)
          : ""
              .concat(o, " ")
              .concat(this.duration, "ms ")
              .concat(u.animationTimingFunc);
      },
      set: function () {
        var o =
          arguments.length > 0 && arguments[0] !== void 0
            ? arguments[0]
            : "transform";
        e.Html.wrapper.style.transition = this.compose(o);
      },
      remove: function () {
        e.Html.wrapper.style.transition = "";
      },
      after: function (o) {
        setTimeout(function () {
          o();
        }, this.duration);
      },
      enable: function () {
        (n = !1), this.set();
      },
      disable: function () {
        (n = !0), this.set();
      },
    };
  return (
    _(i, "duration", {
      get: function () {
        var o = t.settings;
        return t.isType("slider") && e.Run.offset
          ? o.rewindDuration
          : o.animationDuration;
      },
    }),
    r.on("move", function () {
      i.set();
    }),
    r.on(["build.before", "resize", "translate.jump"], function () {
      i.disable();
    }),
    r.on("run", function () {
      i.enable();
    }),
    r.on("destroy", function () {
      i.remove();
    }),
    i
  );
}
var Jt = !1;
try {
  var $t = Object.defineProperty({}, "passive", {
    get: function () {
      Jt = !0;
    },
  });
  window.addEventListener("testPassive", null, $t),
    window.removeEventListener("testPassive", null, $t);
} catch {}
var vt = Jt,
  Y = ["touchstart", "mousedown"],
  jt = ["touchmove", "mousemove"],
  Vt = ["touchend", "touchcancel", "mouseup", "mouseleave"],
  zt = ["mousedown", "mousemove", "mouseup", "mouseleave"];
function ir(t, e, r) {
  var n = new B(),
    i = 0,
    a = 0,
    o = 0,
    u = !1,
    s = vt ? { passive: !0 } : !1,
    f = {
      mount: function () {
        this.bindSwipeStart();
      },
      start: function (l) {
        if (!u && !t.disabled) {
          this.disable();
          var d = this.touches(l);
          (i = null),
            (a = x(d.pageX)),
            (o = x(d.pageY)),
            this.bindSwipeMove(),
            this.bindSwipeEnd(),
            r.emit("swipe.start");
        }
      },
      move: function (l) {
        if (!t.disabled) {
          var d = t.settings,
            y = d.touchAngle,
            v = d.touchRatio,
            h = d.classes,
            b = this.touches(l),
            w = x(b.pageX) - a,
            m = x(b.pageY) - o,
            p = Math.abs(w << 2),
            k = Math.abs(m << 2),
            A = Math.sqrt(p + k),
            S = Math.sqrt(k);
          if (((i = Math.asin(S / A)), (i * 180) / Math.PI < y))
            l.stopPropagation(),
              e.Move.make(w * He(v)),
              e.Html.root.classList.add(h.dragging),
              r.emit("swipe.move");
          else return !1;
        }
      },
      end: function (l) {
        if (!t.disabled) {
          var d = t.settings,
            y = d.perSwipe,
            v = d.touchAngle,
            h = d.classes,
            b = this.touches(l),
            w = this.threshold(l),
            m = b.pageX - a,
            p = (i * 180) / Math.PI;
          this.enable(),
            m > w && p < v
              ? e.Run.make(e.Direction.resolve("".concat(y, "<")))
              : m < -w && p < v
              ? e.Run.make(e.Direction.resolve("".concat(y, ">")))
              : e.Move.make(),
            e.Html.root.classList.remove(h.dragging),
            this.unbindSwipeMove(),
            this.unbindSwipeEnd(),
            r.emit("swipe.end");
        }
      },
      bindSwipeStart: function () {
        var l = this,
          d = t.settings,
          y = d.swipeThreshold,
          v = d.dragThreshold;
        y &&
          n.on(
            Y[0],
            e.Html.wrapper,
            function (h) {
              l.start(h);
            },
            s
          ),
          v &&
            n.on(
              Y[1],
              e.Html.wrapper,
              function (h) {
                l.start(h);
              },
              s
            );
      },
      unbindSwipeStart: function () {
        n.off(Y[0], e.Html.wrapper, s), n.off(Y[1], e.Html.wrapper, s);
      },
      bindSwipeMove: function () {
        var l = this;
        n.on(
          jt,
          e.Html.wrapper,
          rt(function (d) {
            l.move(d);
          }, t.settings.throttle),
          s
        );
      },
      unbindSwipeMove: function () {
        n.off(jt, e.Html.wrapper, s);
      },
      bindSwipeEnd: function () {
        var l = this;
        n.on(Vt, e.Html.wrapper, function (d) {
          l.end(d);
        });
      },
      unbindSwipeEnd: function () {
        n.off(Vt, e.Html.wrapper);
      },
      touches: function (l) {
        return zt.indexOf(l.type) > -1
          ? l
          : l.touches[0] || l.changedTouches[0];
      },
      threshold: function (l) {
        var d = t.settings;
        return zt.indexOf(l.type) > -1 ? d.dragThreshold : d.swipeThreshold;
      },
      enable: function () {
        return (u = !1), e.Transition.enable(), this;
      },
      disable: function () {
        return (u = !0), e.Transition.disable(), this;
      },
    };
  return (
    r.on("build.after", function () {
      e.Html.root.classList.add(t.settings.classes.swipeable);
    }),
    r.on("destroy", function () {
      f.unbindSwipeStart(),
        f.unbindSwipeMove(),
        f.unbindSwipeEnd(),
        n.destroy();
    }),
    f
  );
}
function ar(t, e, r) {
  var n = new B(),
    i = {
      mount: function () {
        this.bind();
      },
      bind: function () {
        n.on("dragstart", e.Html.wrapper, this.dragstart);
      },
      unbind: function () {
        n.off("dragstart", e.Html.wrapper);
      },
      dragstart: function (o) {
        o.preventDefault();
      },
    };
  return (
    r.on("destroy", function () {
      i.unbind(), n.destroy();
    }),
    i
  );
}
function sr(t, e, r) {
  var n = new B(),
    i = !1,
    a = !1,
    o = {
      mount: function () {
        (this._a = e.Html.wrapper.querySelectorAll("a")), this.bind();
      },
      bind: function () {
        n.on("click", e.Html.wrapper, this.click);
      },
      unbind: function () {
        n.off("click", e.Html.wrapper);
      },
      click: function (s) {
        a && (s.stopPropagation(), s.preventDefault());
      },
      detach: function () {
        if (((a = !0), !i)) {
          for (var s = 0; s < this.items.length; s++)
            this.items[s].draggable = !1;
          i = !0;
        }
        return this;
      },
      attach: function () {
        if (((a = !1), i)) {
          for (var s = 0; s < this.items.length; s++)
            this.items[s].draggable = !0;
          i = !1;
        }
        return this;
      },
    };
  return (
    _(o, "items", {
      get: function () {
        return o._a;
      },
    }),
    r.on("swipe.move", function () {
      o.detach();
    }),
    r.on("swipe.end", function () {
      e.Transition.after(function () {
        o.attach();
      });
    }),
    r.on("destroy", function () {
      o.attach(), o.unbind(), n.destroy();
    }),
    o
  );
}
var or = '[data-glide-el="controls[nav]"]',
  yt = '[data-glide-el^="controls"]',
  ur = "".concat(yt, ' [data-glide-dir*="<"]'),
  cr = "".concat(yt, ' [data-glide-dir*=">"]');
function fr(t, e, r) {
  var n = new B(),
    i = vt ? { passive: !0 } : !1,
    a = {
      mount: function () {
        (this._n = e.Html.root.querySelectorAll(or)),
          (this._c = e.Html.root.querySelectorAll(yt)),
          (this._arrowControls = {
            previous: e.Html.root.querySelectorAll(ur),
            next: e.Html.root.querySelectorAll(cr),
          }),
          this.addBindings();
      },
      setActive: function () {
        for (var u = 0; u < this._n.length; u++)
          this.addClass(this._n[u].children);
      },
      removeActive: function () {
        for (var u = 0; u < this._n.length; u++)
          this.removeClass(this._n[u].children);
      },
      addClass: function (u) {
        var s = t.settings,
          f = u[t.index];
        !f ||
          (f &&
            (f.classList.add(s.classes.nav.active),
            Zt(f).forEach(function (c) {
              c.classList.remove(s.classes.nav.active);
            })));
      },
      removeClass: function (u) {
        var s = u[t.index];
        s && s.classList.remove(t.settings.classes.nav.active);
      },
      setArrowState: function () {
        if (!t.settings.rewind) {
          var u = a._arrowControls.next,
            s = a._arrowControls.previous;
          this.resetArrowState(u, s),
            t.index === 0 && this.disableArrow(s),
            t.index === e.Run.length && this.disableArrow(u);
        }
      },
      resetArrowState: function () {
        for (
          var u = t.settings, s = arguments.length, f = new Array(s), c = 0;
          c < s;
          c++
        )
          f[c] = arguments[c];
        f.forEach(function (l) {
          gt(l).forEach(function (d) {
            d.classList.remove(u.classes.arrow.disabled);
          });
        });
      },
      disableArrow: function () {
        for (
          var u = t.settings, s = arguments.length, f = new Array(s), c = 0;
          c < s;
          c++
        )
          f[c] = arguments[c];
        f.forEach(function (l) {
          gt(l).forEach(function (d) {
            d.classList.add(u.classes.arrow.disabled);
          });
        });
      },
      addBindings: function () {
        for (var u = 0; u < this._c.length; u++) this.bind(this._c[u].children);
      },
      removeBindings: function () {
        for (var u = 0; u < this._c.length; u++)
          this.unbind(this._c[u].children);
      },
      bind: function (u) {
        for (var s = 0; s < u.length; s++)
          n.on("click", u[s], this.click),
            n.on("touchstart", u[s], this.click, i);
      },
      unbind: function (u) {
        for (var s = 0; s < u.length; s++) n.off(["click", "touchstart"], u[s]);
      },
      click: function (u) {
        !vt && u.type === "touchstart" && u.preventDefault();
        var s = u.currentTarget.getAttribute("data-glide-dir");
        e.Run.make(e.Direction.resolve(s));
      },
    };
  return (
    _(a, "items", {
      get: function () {
        return a._c;
      },
    }),
    r.on(["mount.after", "move.after"], function () {
      a.setActive();
    }),
    r.on(["mount.after", "run"], function () {
      a.setArrowState();
    }),
    r.on("destroy", function () {
      a.removeBindings(), a.removeActive(), n.destroy();
    }),
    a
  );
}
function lr(t, e, r) {
  var n = new B(),
    i = {
      mount: function () {
        t.settings.keyboard && this.bind();
      },
      bind: function () {
        n.on("keyup", document, this.press);
      },
      unbind: function () {
        n.off("keyup", document);
      },
      press: function (o) {
        var u = t.settings.perSwipe;
        o.code === "ArrowRight" &&
          e.Run.make(e.Direction.resolve("".concat(u, ">"))),
          o.code === "ArrowLeft" &&
            e.Run.make(e.Direction.resolve("".concat(u, "<")));
      },
    };
  return (
    r.on(["destroy", "update"], function () {
      i.unbind();
    }),
    r.on("update", function () {
      i.mount();
    }),
    r.on("destroy", function () {
      n.destroy();
    }),
    i
  );
}
function dr(t, e, r) {
  var n = new B(),
    i = {
      mount: function () {
        this.enable(), this.start(), t.settings.hoverpause && this.bind();
      },
      enable: function () {
        this._e = !0;
      },
      disable: function () {
        this._e = !1;
      },
      start: function () {
        var o = this;
        !this._e ||
          (this.enable(),
          t.settings.autoplay &&
            Yt(this._i) &&
            (this._i = setInterval(function () {
              o.stop(), e.Run.make(">"), o.start(), r.emit("autoplay");
            }, this.time)));
      },
      stop: function () {
        this._i = clearInterval(this._i);
      },
      bind: function () {
        var o = this;
        n.on("mouseover", e.Html.root, function () {
          o._e && o.stop();
        }),
          n.on("mouseout", e.Html.root, function () {
            o._e && o.start();
          });
      },
      unbind: function () {
        n.off(["mouseover", "mouseout"], e.Html.root);
      },
    };
  return (
    _(i, "time", {
      get: function () {
        var o = e.Html.slides[t.index].getAttribute("data-glide-autoplay");
        return x(o || t.settings.autoplay);
      },
    }),
    r.on(["destroy", "update"], function () {
      i.unbind();
    }),
    r.on(["run.before", "swipe.start", "update"], function () {
      i.stop();
    }),
    r.on(["pause", "destroy"], function () {
      i.disable(), i.stop();
    }),
    r.on(["run.after", "swipe.end"], function () {
      i.start();
    }),
    r.on(["play"], function () {
      i.enable(), i.start();
    }),
    r.on("update", function () {
      i.mount();
    }),
    r.on("destroy", function () {
      n.destroy();
    }),
    i
  );
}
function Ft(t) {
  return z(t) ? De(t) : (I("Breakpoints option must be an object"), {});
}
function hr(t, e, r) {
  var n = new B(),
    i = t.settings,
    a = Ft(i.breakpoints),
    o = Object.assign({}, i),
    u = {
      match: function (f) {
        if (typeof window.matchMedia < "u") {
          for (var c in f)
            if (
              f.hasOwnProperty(c) &&
              window.matchMedia("(max-width: ".concat(c, "px)")).matches
            )
              return f[c];
        }
        return o;
      },
    };
  return (
    Object.assign(i, u.match(a)),
    n.on(
      "resize",
      window,
      rt(function () {
        t.settings = ht(i, u.match(a));
      }, t.settings.throttle)
    ),
    r.on("update", function () {
      (a = Ft(a)), (o = Object.assign({}, i));
    }),
    r.on("destroy", function () {
      n.off("resize", window);
    }),
    u
  );
}
var gr = {
    Html: ze,
    Translate: rr,
    Transition: nr,
    Direction: Ze,
    Peek: Fe,
    Sizes: We,
    Gaps: Ve,
    Move: Ne,
    Clones: Ue,
    Resize: Ce,
    Build: qe,
    Run: je,
    Swipe: ir,
    Images: ar,
    Anchors: sr,
    Controls: fr,
    Keyboard: lr,
    Autoplay: dr,
    Breakpoints: hr,
  },
  vr = (function (t) {
    xe(r, t);
    var e = Le(r);
    function r() {
      return tt(this, r), e.apply(this, arguments);
    }
    return (
      et(r, [
        {
          key: "mount",
          value: function () {
            var i =
              arguments.length > 0 && arguments[0] !== void 0
                ? arguments[0]
                : {};
            return J(V(r.prototype), "mount", this).call(
              this,
              Object.assign({}, gr, i)
            );
          },
        },
      ]),
      r
    );
  })($e);
function mr() {
  new vr(".glide", { type: "carousel", startAt: 1, autoplay: 3e3 }).mount();
}
function pr(t = []) {
  if (t.length > 0) {
    let e = "",
      r = "";
    for (let i = 0; i < t.length; i++)
      (e += `
      <li class="glide__slide">
        <img class = "carousel__img" src = "${
          t[i].image
        }" alt = "screenshot" data-index = '${i + 1}'>
      </li>
      `),
        (r += `
<button class="glide__bullet" data-glide-dir="=${i}"></button>
      `);
    return `
<div class="glide">
  <div class="glide__track" data-glide-el="track">
    <ul class="glide__slides">
      ${e}
    </ul>
  </div>
  <div class="glide__arrows" data-glide-el="controls">
    <button class="glide__arrow glide__arrow--left" data-glide-dir="<"><span class="material-symbols-outlined">
arrow_back_ios
</span></button>
    <button class="glide__arrow glide__arrow--right" data-glide-dir=">"><span class="material-symbols-outlined">
arrow_forward_ios
</span></button>
  </div>
  <p>Toque la imagen para ampliarla</p>
  <div class="glide__bullets" data-glide-el="controls[nav]">
    ${r}
  </div>
</div>
    `;
  }
}
function Qt(t) {
  const e = document.querySelector("main"),
    r = t;
  document.createElement("section"), r.thumbnail;
  const n = `
      <article class = "game-detail">
        <img class = 'game-detail__hero-img' src = '${
          r.thumbnail
        }' alt = 'game image'>
        <h2>${r.title}</h2>
        </div>
        <div class="game-detail__info">
        <h4>Genero: ${r.genre}</h4>
        <h4>Plataforma: ${r.platform}</h4>
        </div>
        <div class="description-container">
        <p>
          ${r.description}
        </p>
        </div>
          ${pr(r.screenshots)}
        <a href="${r.game_url}" target="_blank">
          <div class="play-btn">JUGAR</div>
        </a>
    </article>
      `;
  (e.innerHTML = n), mr();
}
var Xt = {
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
  bt = {
    duration: 1e3,
    delay: 0,
    endDelay: 0,
    easing: "easeOutElastic(1, .5)",
    round: 0,
  },
  yr = [
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
  G = { CSS: {}, springs: {} };
function L(t, e, r) {
  return Math.min(Math.max(t, e), r);
}
function U(t, e) {
  return t.indexOf(e) > -1;
}
function ct(t, e) {
  return t.apply(null, e);
}
var g = {
  arr: function (t) {
    return Array.isArray(t);
  },
  obj: function (t) {
    return U(Object.prototype.toString.call(t), "Object");
  },
  pth: function (t) {
    return g.obj(t) && t.hasOwnProperty("totalLength");
  },
  svg: function (t) {
    return t instanceof SVGElement;
  },
  inp: function (t) {
    return t instanceof HTMLInputElement;
  },
  dom: function (t) {
    return t.nodeType || g.svg(t);
  },
  str: function (t) {
    return typeof t == "string";
  },
  fnc: function (t) {
    return typeof t == "function";
  },
  und: function (t) {
    return typeof t > "u";
  },
  nil: function (t) {
    return g.und(t) || t === null;
  },
  hex: function (t) {
    return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t);
  },
  rgb: function (t) {
    return /^rgb/.test(t);
  },
  hsl: function (t) {
    return /^hsl/.test(t);
  },
  col: function (t) {
    return g.hex(t) || g.rgb(t) || g.hsl(t);
  },
  key: function (t) {
    return (
      !Xt.hasOwnProperty(t) &&
      !bt.hasOwnProperty(t) &&
      t !== "targets" &&
      t !== "keyframes"
    );
  },
};
function Gt(t) {
  var e = /\(([^)]+)\)/.exec(t);
  return e
    ? e[1].split(",").map(function (r) {
        return parseFloat(r);
      })
    : [];
}
function te(t, e) {
  var r = Gt(t),
    n = L(g.und(r[0]) ? 1 : r[0], 0.1, 100),
    i = L(g.und(r[1]) ? 100 : r[1], 0.1, 100),
    a = L(g.und(r[2]) ? 10 : r[2], 0.1, 100),
    o = L(g.und(r[3]) ? 0 : r[3], 0.1, 100),
    u = Math.sqrt(i / n),
    s = a / (2 * Math.sqrt(i * n)),
    f = s < 1 ? u * Math.sqrt(1 - s * s) : 0,
    c = 1,
    l = s < 1 ? (s * u + -o) / f : -o + u;
  function d(v) {
    var h = e ? (e * v) / 1e3 : v;
    return (
      s < 1
        ? (h =
            Math.exp(-h * s * u) * (c * Math.cos(f * h) + l * Math.sin(f * h)))
        : (h = (c + l * h) * Math.exp(-h * u)),
      v === 0 || v === 1 ? v : 1 - h
    );
  }
  function y() {
    var v = G.springs[t];
    if (v) return v;
    for (var h = 1 / 6, b = 0, w = 0; ; )
      if (((b += h), d(b) === 1)) {
        if ((w++, w >= 16)) break;
      } else w = 0;
    var m = b * h * 1e3;
    return (G.springs[t] = m), m;
  }
  return e ? d : y;
}
function br(t) {
  return (
    t === void 0 && (t = 10),
    function (e) {
      return Math.ceil(L(e, 1e-6, 1) * t) * (1 / t);
    }
  );
}
var wr = (function () {
    var t = 11,
      e = 1 / (t - 1);
    function r(c, l) {
      return 1 - 3 * l + 3 * c;
    }
    function n(c, l) {
      return 3 * l - 6 * c;
    }
    function i(c) {
      return 3 * c;
    }
    function a(c, l, d) {
      return ((r(l, d) * c + n(l, d)) * c + i(l)) * c;
    }
    function o(c, l, d) {
      return 3 * r(l, d) * c * c + 2 * n(l, d) * c + i(l);
    }
    function u(c, l, d, y, v) {
      var h,
        b,
        w = 0;
      do (b = l + (d - l) / 2), (h = a(b, y, v) - c), h > 0 ? (d = b) : (l = b);
      while (Math.abs(h) > 1e-7 && ++w < 10);
      return b;
    }
    function s(c, l, d, y) {
      for (var v = 0; v < 4; ++v) {
        var h = o(l, d, y);
        if (h === 0) return l;
        var b = a(l, d, y) - c;
        l -= b / h;
      }
      return l;
    }
    function f(c, l, d, y) {
      if (!(0 <= c && c <= 1 && 0 <= d && d <= 1)) return;
      var v = new Float32Array(t);
      if (c !== l || d !== y) for (var h = 0; h < t; ++h) v[h] = a(h * e, c, d);
      function b(w) {
        for (var m = 0, p = 1, k = t - 1; p !== k && v[p] <= w; ++p) m += e;
        --p;
        var A = (w - v[p]) / (v[p + 1] - v[p]),
          S = m + A * e,
          D = o(S, c, d);
        return D >= 0.001 ? s(w, S, c, d) : D === 0 ? S : u(w, m, m + e, c, d);
      }
      return function (w) {
        return (c === l && d === y) || w === 0 || w === 1 ? w : a(b(w), l, y);
      };
    }
    return f;
  })(),
  ee = (function () {
    var t = {
        linear: function () {
          return function (n) {
            return n;
          };
        },
      },
      e = {
        Sine: function () {
          return function (n) {
            return 1 - Math.cos((n * Math.PI) / 2);
          };
        },
        Circ: function () {
          return function (n) {
            return 1 - Math.sqrt(1 - n * n);
          };
        },
        Back: function () {
          return function (n) {
            return n * n * (3 * n - 2);
          };
        },
        Bounce: function () {
          return function (n) {
            for (var i, a = 4; n < ((i = Math.pow(2, --a)) - 1) / 11; );
            return (
              1 / Math.pow(4, 3 - a) -
              7.5625 * Math.pow((i * 3 - 2) / 22 - n, 2)
            );
          };
        },
        Elastic: function (n, i) {
          n === void 0 && (n = 1), i === void 0 && (i = 0.5);
          var a = L(n, 1, 10),
            o = L(i, 0.1, 2);
          return function (u) {
            return u === 0 || u === 1
              ? u
              : -a *
                  Math.pow(2, 10 * (u - 1)) *
                  Math.sin(
                    ((u - 1 - (o / (Math.PI * 2)) * Math.asin(1 / a)) *
                      (Math.PI * 2)) /
                      o
                  );
          };
        },
      },
      r = ["Quad", "Cubic", "Quart", "Quint", "Expo"];
    return (
      r.forEach(function (n, i) {
        e[n] = function () {
          return function (a) {
            return Math.pow(a, i + 2);
          };
        };
      }),
      Object.keys(e).forEach(function (n) {
        var i = e[n];
        (t["easeIn" + n] = i),
          (t["easeOut" + n] = function (a, o) {
            return function (u) {
              return 1 - i(a, o)(1 - u);
            };
          }),
          (t["easeInOut" + n] = function (a, o) {
            return function (u) {
              return u < 0.5 ? i(a, o)(u * 2) / 2 : 1 - i(a, o)(u * -2 + 2) / 2;
            };
          }),
          (t["easeOutIn" + n] = function (a, o) {
            return function (u) {
              return u < 0.5
                ? (1 - i(a, o)(1 - u * 2)) / 2
                : (i(a, o)(u * 2 - 1) + 1) / 2;
            };
          });
      }),
      t
    );
  })();
function wt(t, e) {
  if (g.fnc(t)) return t;
  var r = t.split("(")[0],
    n = ee[r],
    i = Gt(t);
  switch (r) {
    case "spring":
      return te(t, e);
    case "cubicBezier":
      return ct(wr, i);
    case "steps":
      return ct(br, i);
    default:
      return ct(n, i);
  }
}
function re(t) {
  try {
    var e = document.querySelectorAll(t);
    return e;
  } catch {
    return;
  }
}
function nt(t, e) {
  for (
    var r = t.length,
      n = arguments.length >= 2 ? arguments[1] : void 0,
      i = [],
      a = 0;
    a < r;
    a++
  )
    if (a in t) {
      var o = t[a];
      e.call(n, o, a, t) && i.push(o);
    }
  return i;
}
function it(t) {
  return t.reduce(function (e, r) {
    return e.concat(g.arr(r) ? it(r) : r);
  }, []);
}
function Nt(t) {
  return g.arr(t)
    ? t
    : (g.str(t) && (t = re(t) || t),
      t instanceof NodeList || t instanceof HTMLCollection
        ? [].slice.call(t)
        : [t]);
}
function _t(t, e) {
  return t.some(function (r) {
    return r === e;
  });
}
function St(t) {
  var e = {};
  for (var r in t) e[r] = t[r];
  return e;
}
function mt(t, e) {
  var r = St(t);
  for (var n in t) r[n] = e.hasOwnProperty(n) ? e[n] : t[n];
  return r;
}
function at(t, e) {
  var r = St(t);
  for (var n in e) r[n] = g.und(t[n]) ? e[n] : t[n];
  return r;
}
function _r(t) {
  var e = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(t);
  return e ? "rgba(" + e[1] + ",1)" : t;
}
function Sr(t) {
  var e = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
    r = t.replace(e, function (u, s, f, c) {
      return s + s + f + f + c + c;
    }),
    n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r),
    i = parseInt(n[1], 16),
    a = parseInt(n[2], 16),
    o = parseInt(n[3], 16);
  return "rgba(" + i + "," + a + "," + o + ",1)";
}
function Tr(t) {
  var e =
      /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t) ||
      /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(t),
    r = parseInt(e[1], 10) / 360,
    n = parseInt(e[2], 10) / 100,
    i = parseInt(e[3], 10) / 100,
    a = e[4] || 1;
  function o(d, y, v) {
    return (
      v < 0 && (v += 1),
      v > 1 && (v -= 1),
      v < 1 / 6
        ? d + (y - d) * 6 * v
        : v < 1 / 2
        ? y
        : v < 2 / 3
        ? d + (y - d) * (2 / 3 - v) * 6
        : d
    );
  }
  var u, s, f;
  if (n == 0) u = s = f = i;
  else {
    var c = i < 0.5 ? i * (1 + n) : i + n - i * n,
      l = 2 * i - c;
    (u = o(l, c, r + 1 / 3)), (s = o(l, c, r)), (f = o(l, c, r - 1 / 3));
  }
  return "rgba(" + u * 255 + "," + s * 255 + "," + f * 255 + "," + a + ")";
}
function kr(t) {
  if (g.rgb(t)) return _r(t);
  if (g.hex(t)) return Sr(t);
  if (g.hsl(t)) return Tr(t);
}
function H(t) {
  var e =
    /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(
      t
    );
  if (e) return e[1];
}
function Or(t) {
  if (U(t, "translate") || t === "perspective") return "px";
  if (U(t, "rotate") || U(t, "skew")) return "deg";
}
function pt(t, e) {
  return g.fnc(t) ? t(e.target, e.id, e.total) : t;
}
function R(t, e) {
  return t.getAttribute(e);
}
function Tt(t, e, r) {
  var n = H(e);
  if (_t([r, "deg", "rad", "turn"], n)) return e;
  var i = G.CSS[e + r];
  if (!g.und(i)) return i;
  var a = 100,
    o = document.createElement(t.tagName),
    u =
      t.parentNode && t.parentNode !== document ? t.parentNode : document.body;
  u.appendChild(o), (o.style.position = "absolute"), (o.style.width = a + r);
  var s = a / o.offsetWidth;
  u.removeChild(o);
  var f = s * parseFloat(e);
  return (G.CSS[e + r] = f), f;
}
function ne(t, e, r) {
  if (e in t.style) {
    var n = e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
      i = t.style[e] || getComputedStyle(t).getPropertyValue(n) || "0";
    return r ? Tt(t, i, r) : i;
  }
}
function kt(t, e) {
  if (g.dom(t) && !g.inp(t) && (!g.nil(R(t, e)) || (g.svg(t) && t[e])))
    return "attribute";
  if (g.dom(t) && _t(yr, e)) return "transform";
  if (g.dom(t) && e !== "transform" && ne(t, e)) return "css";
  if (t[e] != null) return "object";
}
function ie(t) {
  if (!!g.dom(t)) {
    for (
      var e = t.style.transform || "",
        r = /(\w+)\(([^)]*)\)/g,
        n = new Map(),
        i;
      (i = r.exec(e));

    )
      n.set(i[1], i[2]);
    return n;
  }
}
function xr(t, e, r, n) {
  var i = U(e, "scale") ? 1 : 0 + Or(e),
    a = ie(t).get(e) || i;
  return (
    r && (r.transforms.list.set(e, a), (r.transforms.last = e)),
    n ? Tt(t, a, n) : a
  );
}
function Ot(t, e, r, n) {
  switch (kt(t, e)) {
    case "transform":
      return xr(t, e, n, r);
    case "css":
      return ne(t, e, r);
    case "attribute":
      return R(t, e);
    default:
      return t[e] || 0;
  }
}
function xt(t, e) {
  var r = /^(\*=|\+=|-=)/.exec(t);
  if (!r) return t;
  var n = H(t) || 0,
    i = parseFloat(e),
    a = parseFloat(t.replace(r[0], ""));
  switch (r[0][0]) {
    case "+":
      return i + a + n;
    case "-":
      return i - a + n;
    case "*":
      return i * a + n;
  }
}
function ae(t, e) {
  if (g.col(t)) return kr(t);
  if (/\s/g.test(t)) return t;
  var r = H(t),
    n = r ? t.substr(0, t.length - r.length) : t;
  return e ? n + e : n;
}
function Mt(t, e) {
  return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
}
function Mr(t) {
  return Math.PI * 2 * R(t, "r");
}
function Pr(t) {
  return R(t, "width") * 2 + R(t, "height") * 2;
}
function Ar(t) {
  return Mt({ x: R(t, "x1"), y: R(t, "y1") }, { x: R(t, "x2"), y: R(t, "y2") });
}
function se(t) {
  for (var e = t.points, r = 0, n, i = 0; i < e.numberOfItems; i++) {
    var a = e.getItem(i);
    i > 0 && (r += Mt(n, a)), (n = a);
  }
  return r;
}
function Lr(t) {
  var e = t.points;
  return se(t) + Mt(e.getItem(e.numberOfItems - 1), e.getItem(0));
}
function oe(t) {
  if (t.getTotalLength) return t.getTotalLength();
  switch (t.tagName.toLowerCase()) {
    case "circle":
      return Mr(t);
    case "rect":
      return Pr(t);
    case "line":
      return Ar(t);
    case "polyline":
      return se(t);
    case "polygon":
      return Lr(t);
  }
}
function Rr(t) {
  var e = oe(t);
  return t.setAttribute("stroke-dasharray", e), e;
}
function Ir(t) {
  for (var e = t.parentNode; g.svg(e) && g.svg(e.parentNode); )
    e = e.parentNode;
  return e;
}
function ue(t, e) {
  var r = e || {},
    n = r.el || Ir(t),
    i = n.getBoundingClientRect(),
    a = R(n, "viewBox"),
    o = i.width,
    u = i.height,
    s = r.viewBox || (a ? a.split(" ") : [0, 0, o, u]);
  return {
    el: n,
    viewBox: s,
    x: s[0] / 1,
    y: s[1] / 1,
    w: o,
    h: u,
    vW: s[2],
    vH: s[3],
  };
}
function Hr(t, e) {
  var r = g.str(t) ? re(t)[0] : t,
    n = e || 100;
  return function (i) {
    return { property: i, el: r, svg: ue(r), totalLength: oe(r) * (n / 100) };
  };
}
function Br(t, e, r) {
  function n(c) {
    c === void 0 && (c = 0);
    var l = e + c >= 1 ? e + c : 0;
    return t.el.getPointAtLength(l);
  }
  var i = ue(t.el, t.svg),
    a = n(),
    o = n(-1),
    u = n(1),
    s = r ? 1 : i.w / i.vW,
    f = r ? 1 : i.h / i.vH;
  switch (t.property) {
    case "x":
      return (a.x - i.x) * s;
    case "y":
      return (a.y - i.y) * f;
    case "angle":
      return (Math.atan2(u.y - o.y, u.x - o.x) * 180) / Math.PI;
  }
}
function Wt(t, e) {
  var r = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,
    n = ae(g.pth(t) ? t.totalLength : t, e) + "";
  return {
    original: n,
    numbers: n.match(r) ? n.match(r).map(Number) : [0],
    strings: g.str(t) || e ? n.split(r) : [],
  };
}
function Pt(t) {
  var e = t ? it(g.arr(t) ? t.map(Nt) : Nt(t)) : [];
  return nt(e, function (r, n, i) {
    return i.indexOf(r) === n;
  });
}
function ce(t) {
  var e = Pt(t);
  return e.map(function (r, n) {
    return { target: r, id: n, total: e.length, transforms: { list: ie(r) } };
  });
}
function Dr(t, e) {
  var r = St(e);
  if ((/^spring/.test(r.easing) && (r.duration = te(r.easing)), g.arr(t))) {
    var n = t.length,
      i = n === 2 && !g.obj(t[0]);
    i ? (t = { value: t }) : g.fnc(e.duration) || (r.duration = e.duration / n);
  }
  var a = g.arr(t) ? t : [t];
  return a
    .map(function (o, u) {
      var s = g.obj(o) && !g.pth(o) ? o : { value: o };
      return (
        g.und(s.delay) && (s.delay = u ? 0 : e.delay),
        g.und(s.endDelay) && (s.endDelay = u === a.length - 1 ? e.endDelay : 0),
        s
      );
    })
    .map(function (o) {
      return at(o, r);
    });
}
function Er(t) {
  for (
    var e = nt(
        it(
          t.map(function (a) {
            return Object.keys(a);
          })
        ),
        function (a) {
          return g.key(a);
        }
      ).reduce(function (a, o) {
        return a.indexOf(o) < 0 && a.push(o), a;
      }, []),
      r = {},
      n = function (a) {
        var o = e[a];
        r[o] = t.map(function (u) {
          var s = {};
          for (var f in u)
            g.key(f) ? f == o && (s.value = u[f]) : (s[f] = u[f]);
          return s;
        });
      },
      i = 0;
    i < e.length;
    i++
  )
    n(i);
  return r;
}
function $r(t, e) {
  var r = [],
    n = e.keyframes;
  n && (e = at(Er(n), e));
  for (var i in e) g.key(i) && r.push({ name: i, tweens: Dr(e[i], t) });
  return r;
}
function jr(t, e) {
  var r = {};
  for (var n in t) {
    var i = pt(t[n], e);
    g.arr(i) &&
      ((i = i.map(function (a) {
        return pt(a, e);
      })),
      i.length === 1 && (i = i[0])),
      (r[n] = i);
  }
  return (
    (r.duration = parseFloat(r.duration)), (r.delay = parseFloat(r.delay)), r
  );
}
function Vr(t, e) {
  var r;
  return t.tweens.map(function (n) {
    var i = jr(n, e),
      a = i.value,
      o = g.arr(a) ? a[1] : a,
      u = H(o),
      s = Ot(e.target, t.name, u, e),
      f = r ? r.to.original : s,
      c = g.arr(a) ? a[0] : f,
      l = H(c) || H(s),
      d = u || l;
    return (
      g.und(o) && (o = f),
      (i.from = Wt(c, d)),
      (i.to = Wt(xt(o, c), d)),
      (i.start = r ? r.end : 0),
      (i.end = i.start + i.delay + i.duration + i.endDelay),
      (i.easing = wt(i.easing, i.duration)),
      (i.isPath = g.pth(a)),
      (i.isPathTargetInsideSVG = i.isPath && g.svg(e.target)),
      (i.isColor = g.col(i.from.original)),
      i.isColor && (i.round = 1),
      (r = i),
      i
    );
  });
}
var fe = {
  css: function (t, e, r) {
    return (t.style[e] = r);
  },
  attribute: function (t, e, r) {
    return t.setAttribute(e, r);
  },
  object: function (t, e, r) {
    return (t[e] = r);
  },
  transform: function (t, e, r, n, i) {
    if ((n.list.set(e, r), e === n.last || i)) {
      var a = "";
      n.list.forEach(function (o, u) {
        a += u + "(" + o + ") ";
      }),
        (t.style.transform = a);
    }
  },
};
function le(t, e) {
  var r = ce(t);
  r.forEach(function (n) {
    for (var i in e) {
      var a = pt(e[i], n),
        o = n.target,
        u = H(a),
        s = Ot(o, i, u, n),
        f = u || H(s),
        c = xt(ae(a, f), s),
        l = kt(o, i);
      fe[l](o, i, c, n.transforms, !0);
    }
  });
}
function zr(t, e) {
  var r = kt(t.target, e.name);
  if (r) {
    var n = Vr(e, t),
      i = n[n.length - 1];
    return {
      type: r,
      property: e.name,
      animatable: t,
      tweens: n,
      duration: i.end,
      delay: n[0].delay,
      endDelay: i.endDelay,
    };
  }
}
function Fr(t, e) {
  return nt(
    it(
      t.map(function (r) {
        return e.map(function (n) {
          return zr(r, n);
        });
      })
    ),
    function (r) {
      return !g.und(r);
    }
  );
}
function de(t, e) {
  var r = t.length,
    n = function (a) {
      return a.timelineOffset ? a.timelineOffset : 0;
    },
    i = {};
  return (
    (i.duration = r
      ? Math.max.apply(
          Math,
          t.map(function (a) {
            return n(a) + a.duration;
          })
        )
      : e.duration),
    (i.delay = r
      ? Math.min.apply(
          Math,
          t.map(function (a) {
            return n(a) + a.delay;
          })
        )
      : e.delay),
    (i.endDelay = r
      ? i.duration -
        Math.max.apply(
          Math,
          t.map(function (a) {
            return n(a) + a.duration - a.endDelay;
          })
        )
      : e.endDelay),
    i
  );
}
var qt = 0;
function Nr(t) {
  var e = mt(Xt, t),
    r = mt(bt, t),
    n = $r(r, t),
    i = ce(t.targets),
    a = Fr(i, n),
    o = de(a, r),
    u = qt;
  return (
    qt++,
    at(e, {
      id: u,
      children: [],
      animatables: i,
      animations: a,
      duration: o.duration,
      delay: o.delay,
      endDelay: o.endDelay,
    })
  );
}
var P = [],
  he = (function () {
    var t;
    function e() {
      !t &&
        (!Ut() || !T.suspendWhenDocumentHidden) &&
        P.length > 0 &&
        (t = requestAnimationFrame(r));
    }
    function r(i) {
      for (var a = P.length, o = 0; o < a; ) {
        var u = P[o];
        u.paused ? (P.splice(o, 1), a--) : (u.tick(i), o++);
      }
      t = o > 0 ? requestAnimationFrame(r) : void 0;
    }
    function n() {
      !T.suspendWhenDocumentHidden ||
        (Ut()
          ? (t = cancelAnimationFrame(t))
          : (P.forEach(function (i) {
              return i._onDocumentVisibility();
            }),
            he()));
    }
    return (
      typeof document < "u" && document.addEventListener("visibilitychange", n),
      e
    );
  })();
function Ut() {
  return !!document && document.hidden;
}
function T(t) {
  t === void 0 && (t = {});
  var e = 0,
    r = 0,
    n = 0,
    i,
    a = 0,
    o = null;
  function u(m) {
    var p =
      window.Promise &&
      new Promise(function (k) {
        return (o = k);
      });
    return (m.finished = p), p;
  }
  var s = Nr(t);
  u(s);
  function f() {
    var m = s.direction;
    m !== "alternate" && (s.direction = m !== "normal" ? "normal" : "reverse"),
      (s.reversed = !s.reversed),
      i.forEach(function (p) {
        return (p.reversed = s.reversed);
      });
  }
  function c(m) {
    return s.reversed ? s.duration - m : m;
  }
  function l() {
    (e = 0), (r = c(s.currentTime) * (1 / T.speed));
  }
  function d(m, p) {
    p && p.seek(m - p.timelineOffset);
  }
  function y(m) {
    if (s.reversePlayback) for (var k = a; k--; ) d(m, i[k]);
    else for (var p = 0; p < a; p++) d(m, i[p]);
  }
  function v(m) {
    for (var p = 0, k = s.animations, A = k.length; p < A; ) {
      var S = k[p],
        D = S.animatable,
        F = S.tweens,
        E = F.length - 1,
        O = F[E];
      E &&
        (O =
          nt(F, function (pe) {
            return m < pe.end;
          })[0] || O);
      for (
        var $ = L(m - O.start - O.delay, 0, O.duration) / O.duration,
          C = isNaN($) ? 1 : O.easing($),
          M = O.to.strings,
          st = O.round,
          ot = [],
          me = O.to.numbers.length,
          j = void 0,
          N = 0;
        N < me;
        N++
      ) {
        var W = void 0,
          At = O.to.numbers[N],
          Lt = O.from.numbers[N] || 0;
        O.isPath
          ? (W = Br(O.value, C * At, O.isPathTargetInsideSVG))
          : (W = Lt + C * (At - Lt)),
          st && ((O.isColor && N > 2) || (W = Math.round(W * st) / st)),
          ot.push(W);
      }
      var Rt = M.length;
      if (!Rt) j = ot[0];
      else {
        j = M[0];
        for (var q = 0; q < Rt; q++) {
          M[q];
          var It = M[q + 1],
            ut = ot[q];
          isNaN(ut) || (It ? (j += ut + It) : (j += ut + " "));
        }
      }
      fe[S.type](D.target, S.property, j, D.transforms),
        (S.currentValue = j),
        p++;
    }
  }
  function h(m) {
    s[m] && !s.passThrough && s[m](s);
  }
  function b() {
    s.remaining && s.remaining !== !0 && s.remaining--;
  }
  function w(m) {
    var p = s.duration,
      k = s.delay,
      A = p - s.endDelay,
      S = c(m);
    (s.progress = L((S / p) * 100, 0, 100)),
      (s.reversePlayback = S < s.currentTime),
      i && y(S),
      !s.began && s.currentTime > 0 && ((s.began = !0), h("begin")),
      !s.loopBegan && s.currentTime > 0 && ((s.loopBegan = !0), h("loopBegin")),
      S <= k && s.currentTime !== 0 && v(0),
      ((S >= A && s.currentTime !== p) || !p) && v(p),
      S > k && S < A
        ? (s.changeBegan ||
            ((s.changeBegan = !0), (s.changeCompleted = !1), h("changeBegin")),
          h("change"),
          v(S))
        : s.changeBegan &&
          ((s.changeCompleted = !0), (s.changeBegan = !1), h("changeComplete")),
      (s.currentTime = L(S, 0, p)),
      s.began && h("update"),
      m >= p &&
        ((r = 0),
        b(),
        s.remaining
          ? ((e = n),
            h("loopComplete"),
            (s.loopBegan = !1),
            s.direction === "alternate" && f())
          : ((s.paused = !0),
            s.completed ||
              ((s.completed = !0),
              h("loopComplete"),
              h("complete"),
              !s.passThrough && "Promise" in window && (o(), u(s)))));
  }
  return (
    (s.reset = function () {
      var m = s.direction;
      (s.passThrough = !1),
        (s.currentTime = 0),
        (s.progress = 0),
        (s.paused = !0),
        (s.began = !1),
        (s.loopBegan = !1),
        (s.changeBegan = !1),
        (s.completed = !1),
        (s.changeCompleted = !1),
        (s.reversePlayback = !1),
        (s.reversed = m === "reverse"),
        (s.remaining = s.loop),
        (i = s.children),
        (a = i.length);
      for (var p = a; p--; ) s.children[p].reset();
      ((s.reversed && s.loop !== !0) || (m === "alternate" && s.loop === 1)) &&
        s.remaining++,
        v(s.reversed ? s.duration : 0);
    }),
    (s._onDocumentVisibility = l),
    (s.set = function (m, p) {
      return le(m, p), s;
    }),
    (s.tick = function (m) {
      (n = m), e || (e = n), w((n + (r - e)) * T.speed);
    }),
    (s.seek = function (m) {
      w(c(m));
    }),
    (s.pause = function () {
      (s.paused = !0), l();
    }),
    (s.play = function () {
      !s.paused ||
        (s.completed && s.reset(), (s.paused = !1), P.push(s), l(), he());
    }),
    (s.reverse = function () {
      f(), (s.completed = !s.reversed), l();
    }),
    (s.restart = function () {
      s.reset(), s.play();
    }),
    (s.remove = function (m) {
      var p = Pt(m);
      ge(p, s);
    }),
    s.reset(),
    s.autoplay && s.play(),
    s
  );
}
function Ct(t, e) {
  for (var r = e.length; r--; ) _t(t, e[r].animatable.target) && e.splice(r, 1);
}
function ge(t, e) {
  var r = e.animations,
    n = e.children;
  Ct(t, r);
  for (var i = n.length; i--; ) {
    var a = n[i],
      o = a.animations;
    Ct(t, o), !o.length && !a.children.length && n.splice(i, 1);
  }
  !r.length && !n.length && e.pause();
}
function Wr(t) {
  for (var e = Pt(t), r = P.length; r--; ) {
    var n = P[r];
    ge(e, n);
  }
}
function qr(t, e) {
  e === void 0 && (e = {});
  var r = e.direction || "normal",
    n = e.easing ? wt(e.easing) : null,
    i = e.grid,
    a = e.axis,
    o = e.from || 0,
    u = o === "first",
    s = o === "center",
    f = o === "last",
    c = g.arr(t),
    l = parseFloat(c ? t[0] : t),
    d = c ? parseFloat(t[1]) : 0,
    y = H(c ? t[1] : t) || 0,
    v = e.start || 0 + (c ? l : 0),
    h = [],
    b = 0;
  return function (w, m, p) {
    if ((u && (o = 0), s && (o = (p - 1) / 2), f && (o = p - 1), !h.length)) {
      for (var k = 0; k < p; k++) {
        if (!i) h.push(Math.abs(o - k));
        else {
          var A = s ? (i[0] - 1) / 2 : o % i[0],
            S = s ? (i[1] - 1) / 2 : Math.floor(o / i[0]),
            D = k % i[0],
            F = Math.floor(k / i[0]),
            E = A - D,
            O = S - F,
            $ = Math.sqrt(E * E + O * O);
          a === "x" && ($ = -E), a === "y" && ($ = -O), h.push($);
        }
        b = Math.max.apply(Math, h);
      }
      n &&
        (h = h.map(function (M) {
          return n(M / b) * b;
        })),
        r === "reverse" &&
          (h = h.map(function (M) {
            return a ? (M < 0 ? M * -1 : -M) : Math.abs(b - M);
          }));
    }
    var C = c ? (d - l) / b : l;
    return v + C * (Math.round(h[m] * 100) / 100) + y;
  };
}
function Ur(t) {
  t === void 0 && (t = {});
  var e = T(t);
  return (
    (e.duration = 0),
    (e.add = function (r, n) {
      var i = P.indexOf(e),
        a = e.children;
      i > -1 && P.splice(i, 1);
      function o(d) {
        d.passThrough = !0;
      }
      for (var u = 0; u < a.length; u++) o(a[u]);
      var s = at(r, mt(bt, t));
      s.targets = s.targets || t.targets;
      var f = e.duration;
      (s.autoplay = !1),
        (s.direction = e.direction),
        (s.timelineOffset = g.und(n) ? f : xt(n, f)),
        o(e),
        e.seek(s.timelineOffset);
      var c = T(s);
      o(c), a.push(c);
      var l = de(a, t);
      return (
        (e.delay = l.delay),
        (e.endDelay = l.endDelay),
        (e.duration = l.duration),
        e.seek(0),
        e.reset(),
        e.autoplay && e.play(),
        e
      );
    }),
    e
  );
}
T.version = "3.2.1";
T.speed = 1;
T.suspendWhenDocumentHidden = !0;
T.running = P;
T.remove = Wr;
T.get = Ot;
T.set = le;
T.convertPx = Tt;
T.path = Hr;
T.setDashoffset = Rr;
T.stagger = qr;
T.timeline = Ur;
T.easing = wt;
T.penner = ee;
T.random = function (t, e) {
  return Math.floor(Math.random() * (e - t + 1)) + t;
};
async function Cr(t, e) {
  const r = t.getBoundingClientRect(),
    n = await Kt(e),
    i = document.createElement("img"),
    a = document.querySelector("main");
  i.setAttribute("class", "hero-img"),
    (i.src = n.thumbnail),
    i.setAttribute(
      "style",
      `position: fixed; top: ${r.top}px; left:${r.left}px; width: ${r.width}px; height: ${r.height}px; `
    ),
    (a.innerHTML = ""),
    window.scrollTo(0, 0),
    a.appendChild(i),
    Kr(r, n);
}
function Kr(t, e) {
  const n = document.querySelector("header").getBoundingClientRect(),
    i = window.innerWidth,
    a = (i * 0.7) / t.width,
    o = (i - t.width) / 2,
    u = (t.height * a - t.height) / 2 + n.height + 16,
    s = o - t.left,
    f = u - t.top;
  T({
    easing: "easeInOutCubic",
    targets: ".hero-img",
    translateX: s,
    translateY: f,
    scale: a,
    duration: 500,
    complete: c => {
      Qt(e);
    },
  });
}
async function ve() {
  const t = document.location,
    e = t.href,
    r = t.hash,
    n = /\?.*/;
  if (!r || r === "#/") Oe();
  else if (r.includes("?")) {
    const a = new URLSearchParams(e.match(n)[0]).get("game_id"),
      o = await Kt(a);
    Qt(o);
  }
}
function Yr(t) {
  const e = document.querySelector("main"),
    r = document.createElement("div");
  r.classList.add("game-img-modal"),
    (r.innerHTML = `
    <div class game-img-modal__container>
    <img src = '${t}' alt = 'imagen del juego'>
    </div>
  `),
    e.insertAdjacentElement("beforeend", r);
}
document.querySelector(".card-container");
window.addEventListener("DOMContentLoaded", t => {
  ve();
});
window.addEventListener("click", t => {
  if (t.target.matches(".star")) {
    const e = t.target.parentNode.parentNode,
      r = t.target.dataset.rating;
    we(r, e);
  } else if (t.target.matches(".to-game > *")) {
    t.preventDefault();
    const e = t.target.parentNode.parentNode,
      r = e.dataset.id,
      n = e.querySelector(".img-card"),
      i = t.target.parentNode.href;
    Cr(n, r),
      window.history.pushState({ pagina: history.length - 1 }, "pagina 1", i);
  } else t.target.matches(".carousel__img") && Yr(t.target.src);
});
window.onpopstate = function (t) {
  ve();
};
