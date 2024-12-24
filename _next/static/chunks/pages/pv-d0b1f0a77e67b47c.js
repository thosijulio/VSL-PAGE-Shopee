(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [70],
  {
    2748: function (e, a, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/pv",
        function () {
          return t(3556);
        },
      ]);
    },
    7183: function (e, a, t) {
      "use strict";
      t.d(a, {
        Z: function () {
          return h;
        },
      });
      var i = t(5893),
        r = t(8421);
      let s = (0, r.zo)("div", {
          width: "100vw",
          height: "8rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(09deg, #eea849, #f46b45)",
          zIndex: "1000",
        }),
        o = (0, r.zo)("div", {
          width: 1140,
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          zIndex: "1000",
          background: "linear-gradient(09deg, #eea849, #f46b45)",
          p: {
            color: "#fff",
            background: "#e54300",
            padding: "1rem 2rem",
            borderRadius: 999,
            fontWeight: "700",
            fontSize: "1.5rem",
            "@media (max-width: 768px)": {
              padding: ".7rem 1rem",
              fontSize: "1.3rem",
            },
          },
          "@media (max-width: 768px)": {
            position: "fixed",
            top: "0rem",
            width: "100%",
            padding: "1rem  0",
          },
        }),
        n = (0, r.zo)("div", {
          "@media (max-width: 768px)": { display: "none" },
        }),
        d = (0, r.zo)("div", {
          display: "none",
          "@media (max-width: 768px)": { display: "block" },
        });
      var l = t(5675),
        c = t.n(l),
        m = {
          src: "/_next/static/media/logo.bd32c686.webp",
          height: 100,
          width: 500,
          blurDataURL:
            "data:image/webp;base64,UklGRoAAAABXRUJQVlA4WAoAAAAQAAAABwAAAQAAQUxQSBEAAAAApyUTAAAACQTtZjhIQjk4SQBWUDggSAAAADACAJ0BKggAAgACQDglqAJ0RwBkgAKGXT6gAP5EQh76E9f+vQr/2oXWBFQf+MXXdj/O+XNP/1engyydwTH/8jTt6SdwAAAAAA==",
          blurWidth: 8,
          blurHeight: 2,
        },
        A = {
          src: "/_next/static/media/logo2.71fbe00e.webp",
          height: 301,
          width: 301,
          blurDataURL:
            "data:image/webp;base64,UklGRtYAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSEEAAAAAACSr7++tJgAk7f/////uJ6v///////+v7/////////Lv////////863///////+wJu7/////7ygAJ6/y87AoAABWUDggbgAAAJACAJ0BKggACAACQDglsAJ0ugH4ATP8Cf8zCuzQAP5tMax3r+iyHflpfH8P0TDw5+MMj32UP50kNfn0UkkHXO68m2rEjhQRBAxf0wWDKo3/wskJrY81e9XLDnP/560YFehRuqX8hjpn8E9XjgAA",
          blurWidth: 8,
          blurHeight: 8,
        };
      function h(e) {
        let { price: a } = e;
        return (0, i.jsx)(s, {
          children: (0, i.jsxs)(o, {
            children: [
              (0, i.jsx)(n, {
                children: (0, i.jsx)(c(), {
                  alt: "logo",
                  quality: 100,
                  src: m,
                  width: 300,
                }),
              }),
              (0, i.jsx)(d, {
                children: (0, i.jsx)(c(), {
                  alt: "logo",
                  quality: 100,
                  src: A,
                  width: 100,
                }),
              }),
              (0, i.jsxs)("p", { children: ["SALDO: R$ ", a] }),
            ],
          }),
        });
      }
    },
    1336: function (e, a, t) {
      "use strict";
      t.d(a, {
        a: function () {
          return l;
        },
        u: function () {
          return c;
        },
      });
      var i = t(5893),
        r = t(6465),
        s = t.n(r),
        o = t(7294),
        n = t(8421);
      let d = (0, n.zo)("div", {
        width: 868,
        "@media (max-width: 768px)": { width: "100%" },
        iframe: {
          boxShadow: "15px 15px 10px 0px rgba(0, 0, 0, .30)",
          borderRadius: "10px",
          width: "100%",
        },
      });
      function l() {
        let e = (0, o.useRef)(null),
          [a, t] = (0, o.useState)("");
        (0, o.useEffect)(() => {
          let e = document.createElement("script");
          return (
            (e.src =
              "https://scripts.converteai.net/bd97980d-ffef-4260-a59f-4dcb756bd773/players/6765ae02d30d7bd0bf724d2c/player.js"),
            (e.async = !0),
            document.head.appendChild(e),
            () => {
              document.head.removeChild(e);
            }
          );
        }, []);
        let r = () => {
          if (e.current) {
            let a = e.current.clientWidth;
            t("".concat(0.56267 * a, "px"));
          }
        };
        return (
          (0, o.useEffect)(() => {
            r();
            let e = () => r();
            return (
              window.addEventListener("resize", e),
              () => {
                window.removeEventListener("resize", e);
              }
            );
          }, []),
          (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsxs)("div", {
                id: "vid_6765ae02d30d7bd0bf724d2c",
                style: {
                  position: "relative",
                  width: "100%",
                  padding: "56.25% 0 0",
                  borderRadius: ".8rem",
                  boxShadow: "8px 8px 5px 0px rgba(0,0,0,0.35)",
                },
                className: "jsx-904bade0ea3bcf3d",
                children: [
                  (0, i.jsx)("img", {
                    id: "thumb_6765ae02d30d7bd0bf724d2c",
                    src: "https://images.converteai.net/bd97980d-ffef-4260-a59f-4dcb756bd773/players/6765ae02d30d7bd0bf724d2c/thumbnail.jpg",
                    style: {
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: a,
                      objectFit: "cover",
                      display: "block",
                    },
                    className: "jsx-904bade0ea3bcf3d",
                  }),
                  (0, i.jsx)("div", {
                    id: "backdrop_6765ae02d30d7bd0bf724d2c",
                    style: {
                      position: "absolute",
                      top: 0,
                      width: "100%",
                      height: "100%",
                      WebkitBackdropFilter: "blur(5px)",
                      backdropFilter: "blur(5px)",
                    },
                    className: "jsx-904bade0ea3bcf3d",
                  }),
                ],
              }),
              (0, i.jsx)(s(), {
                id: "904bade0ea3bcf3d",
                children:
                  ".elementor-element.jsx-904bade0ea3bcf3d:has(#smartplayer){width:100%}",
              }),
            ],
          })
        );
      }
      function c() {
        let e = (0, o.useRef)(null),
          [a, t] = (0, o.useState)(""),
          r = () => {
            if (e.current) {
              let a = e.current.clientWidth;
              t("".concat(0.56267 * a, "px"));
            }
          };
        return (
          (0, o.useEffect)(() => {
            r();
            let e = () => r();
            return (
              window.addEventListener("resize", e),
              () => {
                window.removeEventListener("resize", e);
              }
            );
          }, []),
          (0, i.jsx)(d, {
            children: (0, i.jsx)("iframe", {
              ref: e,
              id: "ifr_666b1ad3d2a7d5000ba05b92",
              src: "https://scripts.converteai.net/bd97980d-ffef-4260-a59f-4dcb756bd773/players/6765ae02d30d7bd0bf724d2c/embed.html",
              allowFullScreen: !1,
              style: { height: a, border: "none" },
            }),
          })
        );
      }
    },
    3556: function (e, a, t) {
      "use strict";
      t.r(a),
        t.d(a, {
          default: function () {
            return ec;
          },
        });
      var i = t(5893),
        r = t(679),
        s = t.n(r),
        o = t(9008),
        n = t.n(o),
        d = t(8421),
        l = t(6744);
      let c = (0, d.zo)("main", {
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          backgroundPosition: "center",
          backgroundSize: "initial",
          backgroundRepeat: "repeat",
        }),
        m = (0, d.zo)("div", {
          maxWidth: 950,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "3rem",
          paddingBottom: "5rem",
          "@media (max-width: 768px)": { maxWidth: "100%" },
        }),
        A = (0, d.zo)("div", {
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "1.5rem",
          "@media (max-width: 768px)": { padding: "0 .5rem" },
          h1: {
            color: "#000",
            fontSize: "2.5rem",
            "@media (max-width: 768px)": { fontSize: "1.8rem" },
          },
        }),
        h = (0, d.zo)("div", {
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          p: { color: "#000", fontWeight: "900", fontSize: "1rem" },
        }),
        u = (0, d.zo)("div", {
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
          h2: {
            fontSize: "2.8rem",
            color: "#475569",
            fontWeight: "900",
            "@media (max-width: 768px)": { fontSize: "2rem" },
          },
        }),
        p = (0, l.F4)({
          from: { transform: "scale(1.0)" },
          to: { transform: "scale(1.05)" },
        }),
        x = (0, d.zo)("div", {
          width: "100vw",
          padding: "1rem 0",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "#fff",
          gap: "1rem",
          animation: "".concat(p, " 2.5s infinite alternate"),
          transition: "200ms linear",
          h1: {
            fontSize: "4.3rem",
            color: "red",
            textShadow: "rgba(255, 0, 0, 0.59) 0px 0px 10px",
          },
          h2: {
            textShadow: "0px 0px 6px rgba(255, 0, 0, 0.59)",
            color: "#ff0000 !important",
            fontSize: "1.5rem",
          },
          h3: {
            textShadow: "0px 0px 10px rgba(0, 0, 0, 0.59)",
            color: "#000 !important",
            fontSize: "2rem",
          },
          p: { color: "#00A116", fontSize: "1rem", fontWeight: "bold" },
          a: {
            textDecoration: "none",
            background: "#00A116",
            padding: "0.75rem 2rem",
            fontWeight: "600",
            borderRadius: "5rem",
            color: "#ffffff",
          },
        });
      var f = t(1336),
        g = t(622),
        b = t(3250),
        w = t(9574),
        j = t(9806);
      let v = (0, d.zo)("div", {
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }),
        R = (0, d.zo)("div", {
          width: "50rem",
          height: "auto",
          background: "#fff",
          color: "#13150a",
          padding: "2rem 0",
          borderRadius: "0.5rem",
          boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.15)",
          display: "flex",
          flexDirection: "column",
          fontFamily: "sans-serif",
          "@media (max-width: 768px)": { width: "100%", padding: "1.7rem 0" },
        }),
        k = (0, d.zo)("div", {
          display: "flex",
          alignItems: "center",
          gap: ".5rem",
          padding: "0 1.7rem",
          h1: { color: "#000", fontSize: "1.6rem" },
        }),
        C = (0, d.zo)("div", {
          display: "flex",
          flexDirection: "column",
          padding: "1.7rem",
          height: "auto",
        }),
        Q = (0, d.zo)("div", {
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          padding: "0 1.7rem",
          button: {
            display: "flex",
            alignItems: "center",
            gap: ".3rem",
            padding: ".4rem",
            borderRadius: 10,
            background: "linear-gradient(09deg, #eea849, #f46b45)",
            fontWeight: "bold",
            fontSize: ".8rem",
            color: "#fff",
            boxShadow: "0px 0px 5px 1px #f46b45",
            transition: "200ms ease",
            "&:hover": { transform: "scale(1.05)" },
          },
        });
      (0, d.zo)("div", {
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      });
      let S = (0, d.zo)("div", {
          width: "100%",
          height: "auto",
          padding: "0 1.7rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          gap: "1rem",
          h1: {
            textAlign: "initial",
            color: "#000",
            fontSize: "1.2rem",
            "@media (max-width: 768px)": { marginTop: "1rem" },
          },
          textarea: {
            border: 0,
            borderRadius: "0.5rem",
            padding: "1rem",
            background: "#f0f2f5",
            resize: "none",
            "&:focus": { outlineColor: "#696969", outlineStyle: "solid" },
          },
        }),
        y = (0, d.zo)("button", {
          color: "#fff",
          fontSize: "1.2rem",
          fontWeight: "bold",
          background: "linear-gradient(90deg, #1D976C, #93F9B9)",
          padding: "1rem 0",
          borderRadius: "0.5rem",
          "&:disabled": { background: "#ccc", cursor: "not-allowed" },
        }),
        z = (0, d.zo)("div", {
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          button: {
            background: "transparent",
            "&:hover": { svg: { color: "red" } },
          },
        });
      var U = t(5675),
        D = t.n(U),
        B = {
          src: "/_next/static/media/like.e4d1a685.webp",
          height: 40,
          width: 40,
          blurDataURL:
            "data:image/webp;base64,UklGRsQAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSD4AAAABX2CQbaQ7rBd84Af4akRExPHTLlBaazvWHPWhkUTRGgag/o+gm8EMFvi2jeh/3Ph0heNBLCQDwYEU2C1/BVZQOCBgAAAAkAIAnQEqCAAIAAJAOCWwAnS6AfgAA0+Zm0CbYMAA/k0dVdARSo6rPpDldhWVkwRPbZu/U3/8gkw/2bi4jBTkEup/9Jvf/R/qqTaX30Hf0Hf6pn/xaYoW4rLgsbm+AAAA",
          blurWidth: 8,
          blurHeight: 8,
        },
        I = t(7294),
        W = {
          src: "/_next/static/media/like2.34c9940f.webp",
          height: 40,
          width: 40,
          blurDataURL:
            "data:image/webp;base64,UklGRsYAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSD4AAAABX2CQbaQ7rBd84Af4akRExPHTLlBaazvWHPWhkUTRGgag/o+gm8EMFvi2jeh/3Ph0heNBLCQDwYEU2C1/BVZQOCBiAAAAsAIAnQEqCAAIAAJAOCWoAnS6ABcgRbBWshMMJ94AAM4/MZThjv5DCNdA39CFUY0tmXNrNs/5p+5CHlSU8+AmCJgVmDOXO9OuYja+//q0g/8QHx4S/7N//aW1Z/60R2/nIAA=",
          blurWidth: 8,
          blurHeight: 8,
        };
      let E = (0, d.zo)("div", {
          width: "100%",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          textAlign: "start",
          gap: "1rem",
          color: "#000",
        }),
        J = (0, d.zo)("div", {
          display: "flex",
          flexDirection: "column",
          gap: ".5rem",
          img: { borderRadius: "100%" },
          button: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
            padding: ".4rem",
            transition: "100ms linear",
            fontWeight: "bold",
            "&:hover": { transform: "scale(1.05)" },
          },
        }),
        L = (0, d.zo)("div", {
          width: "auto",
          minWidth: "22rem",
          height: "auto",
          minHeight: "6rem",
          position: "relative",
          padding: ".8rem",
          borderRadius: 10,
          background: "#f0f2f5",
          boxShadow: "6px 6px 10px rgba(0, 0, 0, 0.20)",
          "@media (max-width: 768px)": { minWidth: "10rem" },
        }),
        q = (0, d.zo)("div", {
          display: "flex",
          justifyContent: "space-between",
          marginBottom: ".5rem",
          fontSize: "1rem",
          "@media (max-width: 768px)": { fontSize: ".9rem" },
          h4: { "&:hover": { textDecoration: "underline" } },
          p: { fontWeight: "bold" },
        }),
        P = (0, d.zo)("div", {
          display: "flex",
          alignItems: "center",
          gap: ".3rem",
          padding: ".4rem",
          borderRadius: 30,
          background: "#f8fafc",
          position: "absolute",
          right: 0,
          boxShadow: "3px 3px 10px #c9c7c7",
          marginTop: ".1rem",
          transition: "100ms linear",
          img: { width: "1.5rem", height: "1.5rem", borderRadius: "100%" },
          "&:hover": { transform: "scale(1.05)" },
        }),
        H = (0, d.zo)("div", {
          marginTop: ".6rem",
          marginLeft: "5rem",
          button: {
            color: "#000",
            background: "transparent",
            display: "flex",
            gap: ".1rem",
            alignItems: "center",
          },
        }),
        X = (0, d.zo)("div", {
          marginTop: "1.6rem",
          marginLeft: "2srem",
          paddingLeft: "2rem",
          fontSize: ".9rem",
          borderLeft: "1px solid #000",
          "@media (max-width: 768px)": { marginLeft: "1.1rem" },
        });
      var F = t(7114);
      function O(e) {
        let {
            title: a,
            src: t,
            desc: r,
            time: s,
            ammount: o,
            hasRespostas: n,
            respostas: d,
          } = e,
          [l, c] = (0, I.useState)(0);
        (0, I.useEffect)(() => {
          c(o);
        }, [o]);
        let [m, A] = (0, I.useState)(!1),
          [h, u] = (0, I.useState)(!1);
        return (0, i.jsxs)("div", {
          children: [
            (0, i.jsxs)("div", {
              style: { margin: "1rem 0" },
              children: [
                (0, i.jsxs)(E, {
                  children: [
                    (0, i.jsxs)(J, {
                      children: [
                        (0, i.jsx)(D(), {
                          src: t,
                          alt: "ProfilePicture",
                          quality: 100,
                          width: 50,
                          height: 50,
                        }),
                        (0, i.jsx)("button", {
                          onClick: () => {
                            c(m ? l - 1 : l + 1), A(!m);
                          },
                          style: {
                            color: m ? "#fff" : "#000",
                            background: m
                              ? "linear-gradient(09deg, #eea849, #f46b45)"
                              : "#f0f2f5",
                          },
                          children: "Curtir",
                        }),
                      ],
                    }),
                    (0, i.jsxs)(L, {
                      children: [
                        (0, i.jsxs)(q, {
                          children: [
                            (0, i.jsx)("h4", { children: a }),
                            (0, i.jsx)("p", { children: s }),
                          ],
                        }),
                        (0, i.jsx)("p", { children: r }),
                        (0, i.jsxs)(P, {
                          children: [
                            (0, i.jsx)(D(), {
                              src: B,
                              alt: "Like",
                              quality: 100,
                            }),
                            (0, i.jsx)(D(), {
                              src: W,
                              alt: "Love",
                              quality: 100,
                            }),
                            (0, i.jsx)("span", { children: l }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                n &&
                  (0, i.jsx)(H, {
                    children: (0, i.jsxs)("button", {
                      onClick: () => u(!h),
                      children: [
                        h
                          ? (0, i.jsx)("p", { children: "Esconder respostas" })
                          : (0, i.jsx)("p", { children: "Mostrar respostas" }),
                        h
                          ? (0, i.jsx)(g.Z, { size: 15 })
                          : (0, i.jsx)(F.Z, { size: 15 }),
                      ],
                    }),
                  }),
              ],
            }),
            h &&
              d &&
              d.map((e) =>
                (0, i.jsx)(
                  X,
                  {
                    children: (0, i.jsx)(O, {
                      src: e.src,
                      title: e.name,
                      desc: e.desc,
                      time: e.time,
                      ammount: e.ammount,
                    }),
                  },
                  e.desc
                )
              ),
          ],
        });
      }
      var V = {
          src: "/_next/static/media/avatar.588819d2.webp",
          height: 280,
          width: 280,
          blurDataURL:
            "data:image/webp;base64,UklGRlgAAABXRUJQVlA4IEwAAADQAQCdASoIAAgAAkA4JaQAAxU/vjozAAD++qPxxFB/o90ODMkAejF1//nNxUOVN7qO0Y5+ld5v8yHuWD8CP9lX29YNfeiSbB76gAAA",
          blurWidth: 8,
          blurHeight: 8,
        },
        N = t(3010),
        T = t(9081),
        G = {
          src: "/_next/static/media/perfil2.e9171f57.webp",
          height: 666,
          width: 500,
          blurDataURL:
            "data:image/webp;base64,UklGRmAAAABXRUJQVlA4IFQAAADQAQCdASoGAAgAAkA4JQBOiP/wNtQMwAD+82VT9PNuNzkvX2PC5kmg3vScDLeV3fqaeZH5w1PQFjntB/XHBpGsquDT46FHHdeK5hBG4wP3K8sAAAA=",
          blurWidth: 6,
          blurHeight: 8,
        },
        _ = {
          src: "/_next/static/media/perfil3.01761b1a.webp",
          height: 500,
          width: 500,
          blurDataURL:
            "data:image/webp;base64,UklGRmIAAABXRUJQVlA4IFYAAAAQAgCdASoIAAgAAkA4JQBOgMV95sQvMRwAAP7vr9Loy/f/pOJoXb+pWWQUAVb+/K2CT/Y44SzbF6QY6wwJ7/erI+x74ElDZ8HOFbpNYF/FvHQWMsAAAA==",
          blurWidth: 8,
          blurHeight: 8,
        },
        M = {
          src: "/_next/static/media/perfil6.4170cb23.webp",
          height: 549,
          width: 500,
          blurDataURL:
            "data:image/webp;base64,UklGRlYAAABXRUJQVlA4IEoAAADwAQCdASoHAAgAAkA4JQBOgCLv13lW5MAA/k/I2q7ShlhfR5763d7L//Qr4rfj3ExzZsp+yOrr9Umyppb0HcDAvXed6G19Ym5AAA==",
          blurWidth: 7,
          blurHeight: 8,
        },
        Z = {
          src: "/_next/static/media/perfil14.7d9e2cef.webp",
          height: 500,
          width: 500,
          blurDataURL:
            "data:image/webp;base64,UklGRlAAAABXRUJQVlA4IEQAAACwAQCdASoIAAgAAkA4JQBOgBhwHUmAAP7ooAzcjNm3sx+Hz8Kpdk53YUe00V2KpXEKhh5SS/ucjrBS6910UL99lAAAAA==",
          blurWidth: 8,
          blurHeight: 8,
        },
        Y = {
          src: "/_next/static/media/perfil15.e7bc176a.webp",
          height: 500,
          width: 500,
          blurDataURL:
            "data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAADQAQCdASoIAAgAAkA4JQBOgB6IK7GIAAD4RbvSLmaZ/1BsRsTm0qp3sbqLuNRj8xrCFTwy32/qJcqjQAA=",
          blurWidth: 8,
          blurHeight: 8,
        },
        K = {
          src: "/_next/static/media/perfil17.a996fdd9.webp",
          height: 408,
          width: 408,
          blurDataURL:
            "data:image/webp;base64,UklGRmIAAABXRUJQVlA4IFYAAADwAQCdASoIAAgAAkA4JZgCdAEVz9sLm0gA/vW2SAc0maso55LYnyjfQuu+Q/wUg5y86OvcN+Kg78uo4Xw5R3S52IAsHDn5T9hV1sAJ2toWfzy0GAAAAA==",
          blurWidth: 8,
          blurHeight: 8,
        },
        $ = {
          src: "/_next/static/media/perfil18.ed635bab.webp",
          height: 500,
          width: 500,
          blurDataURL:
            "data:image/webp;base64,UklGRloAAABXRUJQVlA4IE4AAACwAQCdASoIAAgAAkA4JZwCdAD0gwQwAP7ykpZfl+bKz5Ksf+RE+EZpsO+e70sin61/PX5bhNDDdwQy6hgCUAeQRwImkcwa5qU400SwAAA=",
          blurWidth: 8,
          blurHeight: 8,
        },
        ee = {
          src: "/_next/static/media/perfil20.beb3d3bb.webp",
          height: 400,
          width: 400,
          blurDataURL:
            "data:image/webp;base64,UklGRlYAAABXRUJQVlA4IEoAAADwAQCdASoIAAgAAkA4JYwCdADhcOfPJYAA/usvDsTdEiNL6qu+JtC4m2z+8k6lWRB4j0shbCPN43bjs3Ub4MBAQaLJnGe7ar4AAA==",
          blurWidth: 8,
          blurHeight: 8,
        },
        ea = {
          src: "/_next/static/media/perfil25.838d239c.webp",
          height: 505,
          width: 500,
          blurDataURL:
            "data:image/webp;base64,UklGRlgAAABXRUJQVlA4IEwAAADQAQCdASoIAAgAAkA4JQBOgB6VhkmqAAD2tNt0fMCkx4B+JJgIwdovqXnbO1T7YKjVwnaqP5W094kwzWLVQLNfPcz8FS6c1UhyAAAA",
          blurWidth: 8,
          blurHeight: 8,
        },
        et = {
          src: "/_next/static/media/perfil27.b7129f09.webp",
          height: 225,
          width: 225,
          blurDataURL:
            "data:image/webp;base64,UklGRlwAAABXRUJQVlA4IFAAAADwAQCdASoIAAgAAkA4JZQCdAEO9ECHcgAA/vwPTG6Lpj05yP+/8u8WGwPdIqhip73awemQW19AfnsHiXk91e8ghLVMfwRAH2gIhk1+H7ZAAA==",
          blurWidth: 8,
          blurHeight: 8,
        },
        ei = {
          src: "/_next/static/media/perfil1.161e7694.webp",
          height: 320,
          width: 337,
          blurDataURL:
            "data:image/webp;base64,UklGRk4AAABXRUJQVlA4IEIAAADwAQCdASoIAAgAAkA4JYwCdADdhpb0BgAA/uiuKJ8WK533qPClVTYh7kj9QWXqvu2nVFOhV9Y9+pLkDm3LYl9gAAA=",
          blurWidth: 8,
          blurHeight: 8,
        };
      let er = (e) => [
        {
          src: G,
          name: "Francisca Santos",
          desc: "O \xfanico site que realmente funciona comigo j\xe1 tinha tentado de tudo para conseguir ganhar uma renda extra, resolvi ent\xe3o utilizar esse app , e consegui fazer 1300 na primeira semana, estou muito feliz e tamb\xe9m muito aliviada porque se n\xe3o fosse esse site eu nunca iria poder sair e comprar o que eu realmente quero, e n\xe3o o que meu bolso pode !! muito bom mesmo recomendo pessoal!",
          time: "1 hora",
          ammount: 49,
          hasRespostas: !1,
          respostas: [],
        },
        {
          src: M,
          name: "Carla Fernandes",
          desc: "Algu\xe9m aqui do ".concat(
            "undefined" === e.region ? "Sul" : e.region,
            " j\xe1 baixou? quero saber se os 100 reais cai mesmo na conta."
          ),
          time: "2 horas",
          ammount: 67,
          hasRespostas: !0,
          respostas: [
            {
              src: Z,
              name: "L\xfacia Oliveira",
              desc: "Oi carla, sim sou de ".concat(
                "undefined" === e.city ? "Curitiba" : e.city,
                ". aqui deu certo, baixei o app e em menos de 10 minutos caiu na minha conta! Vale a pena."
              ),
              time: "1 hora",
              ammount: 49,
            },
            {
              src: M,
              name: "Carla Fernandes",
              desc: "que \xf3timo, vou baixar agora, obrigada",
              time: "1 hora",
              ammount: 32,
            },
          ],
        },
        {
          src: K,
          name: "Bruna Carvalho",
          desc: "minha conta demorou mais de meia hora pra ser ativada por que? no v\xeddeo foi tudo automatico por que o da minha demorou esse tempo todo pra ser ativada?",
          time: "7 horass",
          ammount: 76,
          hasRespostas: !0,
          respostas: [
            {
              src: ei,
              name: "Lucas Fernando",
              desc: "Ol\xe1 Bruna, pe\xe7o desculpas pela demora. Estavamos em manuten\xe7\xe3o! J\xe1 ativamos sua conta voc\xea j\xe1 tem acesso total ao app!",
              time: "7 horas",
              ammount: 111,
            },
            {
              src: K,
              name: "Bruna Carvalho",
              desc: "consegui acessar aqui, j\xe1 fiz meus primeiros 30 reais",
              time: "10 horas",
              ammount: 96,
            },
            {
              src: Y,
              name: "Juliana Pacheco",
              desc: "Funciona mesmo bruna? to achando que \xe9 golpe isso ai",
              time: "6 horas",
              ammount: 56,
            },
            {
              src: K,
              name: "Bruna Carvalho",
              desc: "aqui deu certo sim, fiz 50 reais j\xe1 e saquei, caiu certinho. Pode baixar ai, tenho certeza de que voc\xea vai adorar Juliana",
              time: "4 horas",
              ammount: 46,
            },
            {
              src: Y,
              name: "Juliana Pacheco",
              desc: "O pre\xe7o ta bom, vou dar uma chance",
              time: "3 horas",
              ammount: 54,
            },
          ],
        },
        {
          src: et,
          name: "Rodrigo Moraes",
          desc: "Galera, n\xe3o tem o aplicativo nas lojas de aplicativos, s\xf3 tem aqui! Consegui instalar aqui, de boa, fiz 735 essa semana j\xe1!",
          time: "3 horas",
          ammount: 65,
          hasRespostas: !1,
          respostas: [],
        },
        {
          src: ea,
          name: "Ana Ribeiro",
          desc: "Confesso que estava desconfiada, mas decidi baixar. Fiquei surpresa ao ver o primeiro pix caindo na minha conta",
          time: "5 horas",
          ammount: 84,
          hasRespostas: !1,
          respostas: [],
        },
        {
          src: $,
          name: "Rachel Foga\xe7a",
          desc: "Vou dar uma chance a esse app. Espero que eu n\xe3o me decepcione.",
          time: "8 horas",
          ammount: 126,
          hasRespostas: !0,
          respostas: [
            {
              src: ei,
              name: "Lucas Fernando",
              desc: "Pode ficar tranquilo, n\xf3s temos garantia incondicional de 7 dias, se voc\xea n\xe3o gostar do app ou n\xe3o servir pra voc\xea, te devolvemos 100% do seu dinheiro.",
              time: "8 horas",
              ammount: 111,
            },
            {
              src: $,
              name: "Rachel Foga\xe7a",
              desc: "Obrigado, decidi confiar em voc\xea e funcionou, ainda n\xe3o saquei mas j\xe1 consegui acessar, obrigado",
              time: "9 horas",
              ammount: 96,
            },
          ],
        },
        {
          src: ee,
          name: "Jos\xe9 Silva",
          desc: "Comprei o app e estou impressionado com a facilidade de mexer, pra mim que sou leigo nessas coisas funcionou legal",
          time: "5 horas",
          ammount: 45,
          hasRespostas: !1,
          respostas: [],
        },
        {
          src: _,
          name: "Elvira Gon\xe7alves",
          desc: "uso ele tem 8 meses, me ajuda bastante a ter uma renda extra no fim do m\xeas, fa\xe7o 4000 por m\xeas sem esfor\xe7o, mais o meu sal\xe1rio, consigo viver uma vida com fartura!",
          time: "7 horas",
          ammount: 68,
          hasRespostas: !1,
          respostas: [],
        },
      ];
      function es() {
        let [e, a] = (0, I.useState)(""),
          [t, r] = (0, I.useState)([]),
          [s, o] = (0, I.useState)({}),
          [n, d] = (0, I.useState)(!1),
          [l, c] = (0, I.useState)(3),
          m = (e) => {
            let a = t.filter((a) => a.comment !== e);
            r(a);
          };
        return (
          (0, I.useEffect)(() => {
            let e = async () => {
              await fetch("https://ipinfo.io?token=57f3d1eb815176")
                .then((e) => e.json())
                .then((e) => o(e));
            };
            e();
          }, []),
          (0, i.jsx)(v, {
            id: "chatSection",
            children: (0, i.jsxs)(R, {
              children: [
                (0, i.jsxs)(k, {
                  children: [
                    (0, i.jsx)("h1", {
                      children: (0, i.jsx)("u", { children: "Mais Recentes" }),
                    }),
                    (0, i.jsx)(g.Z, {
                      size: 25,
                      color: "#13150a",
                      weight: "bold",
                    }),
                    " ",
                  ],
                }),
                (0, i.jsxs)(C, {
                  children: [
                    t.map((e) =>
                      (0, i.jsxs)(
                        z,
                        {
                          children: [
                            (0, i.jsx)(O, {
                              src: V,
                              title: "User An\xf4nimo",
                              desc: e.comment,
                              time: (0, N.Z)(e.date, { locale: T.Z }),
                              ammount: 0,
                            }),
                            (0, i.jsx)("button", {
                              onClick: () => m(e.comment),
                              children: (0, i.jsx)(b.Z, { size: 24 }),
                            }),
                          ],
                        },
                        e.comment
                      )
                    ),
                    er(s)
                      .filter((e, a) => a < l)
                      .map((e) =>
                        (0, i.jsx)(
                          I.Fragment,
                          {
                            children: (0, i.jsx)(O, {
                              src: e.src,
                              title: e.name,
                              desc: e.desc,
                              time: e.time,
                              ammount: e.ammount,
                              hasRespostas: e.hasRespostas,
                              respostas: e.respostas,
                            }),
                          },
                          e.name
                        )
                      ),
                  ],
                }),
                (0, i.jsx)(Q, {
                  children: (0, i.jsxs)("button", {
                    onClick: () => {
                      d(!n), n ? c(3) : c(er(s).length);
                    },
                    children: [
                      n ? "Mostrar Menos" : "Mostrar Mais",
                      n
                        ? (0, i.jsx)(w.Z, { size: 17, weight: "bold" })
                        : (0, i.jsx)(j.Z, { size: 17, weight: "bold" }),
                    ],
                  }),
                }),
                (0, i.jsxs)(S, {
                  children: [
                    (0, i.jsx)("h1", { children: "Escreva um coment\xe1rio" }),
                    (0, i.jsx)("textarea", {
                      value: e,
                      onChange: (e) => a(e.target.value),
                      placeholder: "Deixe seu comentario...",
                    }),
                    (0, i.jsx)(y, {
                      disabled: !e,
                      onClick: () => {
                        r([...t, { comment: e, date: new Date() }]), a("");
                      },
                      children: "Publicar",
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      }
      var eo = t(8943);
      let en = (0, d.zo)("a", {
        background: "#18BA6F",
        fontSize: "1.4rem",
        fontWeight: "700",
        color: "#fff",
        borderRadius: 25,
        border: 0,
        padding: "1.2rem 2.5rem",
        transition: "all 300ms ease-in-out",
        textDecoration: "none",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: ".6rem",
        "@media (max-width: 768px)": {
          fontSize: "1.1rem",
          padding: "1rem 1.5rem",
          width: "100%",
        },
        "&:hover": { transform: "scale(1.05)" },
      });
      function ed(e) {
        let { title: a } = e;
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsxs)(en, {
            href: "https://go.perfectpay.com.br/PPU38CNT8HG?upsell=true",
            children: [
              (0, i.jsx)(eo.Z, { size: 30, color: "#fff", weight: "fill" }),
              " ",
              a,
            ],
          }),
        });
      }
      var el = t(7183);
      function ec() {
        let [e, a] = (0, I.useState)(!1),
          [t, r] = (0, I.useState)(26);
        return (
          (0, I.useEffect)(() => {
            setTimeout(() => {
              a(!0);
            }, 96e4);
          }, []),
          (0, I.useEffect)(() => {
            if (!e) return;
            let a = setInterval(() => {
              r((e) => (e <= 1 ? (clearInterval(a), 1) : e - 1));
            }, 3500);
            return () => clearInterval(a);
          }, [e]),
          (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsxs)(n(), {
                children: [
                  (0, i.jsx)("link", {
                    rel: "dns-prefetch",
                    href: "https://vz-cb3e51cc-16c.b-cdn.net",
                  }),
                  (0, i.jsx)("title", { children: "ShopeeCash - Download" }),
                  (0, i.jsx)("meta", {
                    name: "description",
                    content: "APP WhatsPix",
                  }),
                  (0, i.jsx)("meta", {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1",
                  }),
                  (0, i.jsx)("link", { rel: "icon", href: "/logo2.png" }),
                  (0, i.jsx)("script", {
                    src: "https://cdn.utmify.com.br/scripts/utms/latest.js",
                    async: !0,
                    defer: !0,
                  }),
                ],
              }),
              (0, i.jsx)(c, {
                className: s().className,
                children: (0, i.jsxs)(m, {
                  children: [
                    (0, i.jsx)(el.Z, { price: "114,26" }),
                    (0, i.jsxs)(A, {
                      children: [
                        (0, i.jsxs)("h1", {
                          children: [
                            "Ganhe at\xe9",
                            " ",
                            (0, i.jsx)("span", {
                              style: { color: "#ff580c" },
                              children: "500 reais por dia",
                            }),
                            " ",
                            "Avaliando produtos com esse aplicativo que tem",
                            " ",
                            (0, i.jsx)("span", {
                              style: { color: "#ff580c" },
                              children: "parceria com a Shopee",
                            }),
                          ],
                        }),
                        (0, i.jsx)(f.a, {}),
                        (0, i.jsxs)(h, {
                          children: [
                            (0, i.jsx)(eo.Z, { size: 32, color: "#ff580c" }),
                            (0, i.jsxs)("p", {
                              children: [
                                "Assista at\xe9 o final para",
                                " ",
                                (0, i.jsx)("span", {
                                  style: { color: "#ff580c" },
                                  children: "liberar seu acesso",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    e &&
                      (0, i.jsxs)(x, {
                        children: [
                          (0, i.jsxs)("h3", {
                            children: [
                              "RESTAM",
                              " ",
                              (0, i.jsx)("span", {
                                style: {
                                  color: "red",
                                  textShadow:
                                    "rgba(255, 0, 0, 0.59) 0px 0px 10px",
                                },
                                children: t,
                              }),
                              " ",
                              "VAGAS",
                            ],
                          }),
                          (0, i.jsx)("p", {
                            children: "por apenas 5x de 5,89 ou",
                          }),
                          (0, i.jsx)("h1", { children: "R$ 27,00" }),
                          (0, i.jsx)(ed, {
                            title: "QUERO REALIZAR MEU CADASTRO!",
                          }),
                        ],
                      }),
                    (0, i.jsxs)(u, {
                      children: [
                        (0, i.jsx)("h2", {
                          children: (0, i.jsx)("u", {
                            children: "DEIXE SEU DEPOIMENTO!",
                          }),
                        }),
                        (0, i.jsx)(es, {}),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          })
        );
      }
    },
  },
  function (e) {
    e.O(0, [959, 465, 458, 774, 888, 179], function () {
      return e((e.s = 2748));
    }),
      (_N_E = e.O());
  },
]);
