
import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";

import "./home.css";
import "./app.css";

import homeHTML from "./homeContent.html?raw";
import aboutHTML from "./aboutContent.html?raw";
import servicesHTML from "./servicesContent.html?raw";
import projectsHTML from "./projectsContent.html?raw";
import contactHTML from "./contactContent.html?raw";

const pages = {
  "/": homeHTML,
  "/about": aboutHTML,
  "/services": servicesHTML,
  "/projects": projectsHTML,
  "/contact": contactHTML,
};

function Header() {
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  const links = [
    ["/", "Home"],
    ["/about", "About"],
    ["/services", "Services"],
    ["/projects", "Work"],
    ["/contact#project-form", "Let's Talk"],
  ];

  return (
    <header className="site-header" id="home">
      <nav className="nav container">
        <Link className="brand" to="/" onClick={() => setOpen(false)}>
          <img
            src="/assets/images/branding/logo.jpg"
            alt="Vervent Web Solutions"
          />
        </Link>

        <button
          className="menu-toggle"
          aria-label="Open navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-links ${open ? "open" : ""}`}>
          {links.map(([href, label]) => {
            const path = href.split("#")[0];

            const active =
              path === "/"
                ? loc.pathname === "/"
                : loc.pathname.startsWith(path);

            return (
              <Link
                key={href}
                className={`${active ? "active " : ""}${
                  label === "Let's Talk" ? "nav-cta" : ""
                }`}
                to={href}
                onClick={() => setOpen(false)}
              >
                {label}

                {label === "Let's Talk" && (
                  <>
                    {" "}
                    <i className="fa-solid fa-arrow-right" />
                  </>
                )}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <img
            className="footer-logo"
            src="/assets/images/branding/logo.jpg"
            alt="Vervent Web Solutions"
          />

          <p>
            Building modern digital solutions for businesses ready to move
            forward.
          </p>
        </div>

        <div>
          <h4>Explore</h4>

          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/projects">Work</Link>
          <Link to="/contact#project-form">Contact</Link>
        </div>

        <div>
          <h4>Connect</h4>

          <a href="mailto:verventsupport@gmail.com">
            verventsupport@gmail.com
          </a>

          <a href="tel:+919328389850">
            93283 89850 · 94097 64920
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© 2026 Vervent Web Solutions. All rights reserved.</span>
        <span>Gujarat, India · LinkedIn & Instagram shared soon</span>
      </div>
    </footer>
  );
}

function StaticPage() {
  const loc = useLocation();
  const html = pages[loc.pathname] || homeHTML;

  const ref = useRef(null);
  const nav = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });

    const root = ref.current;

    if (!root) return;

    // Handle links inside the raw HTML pages
    const click = (e) => {
      const a = e.target.closest("a");

      if (!a) return;

      const href = a.getAttribute("href");

      if (!href) return;

      // Allow external links, email and telephone links
      if (
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href.startsWith("http://") ||
        href.startsWith("https://")
      ) {
        return;
      }

      // Handle internal React routes
      if (href.startsWith("/")) {
        e.preventDefault();

        const [path, hash] = href.split("#");

        nav(path + (hash ? `#${hash}` : ""));
      }
    };

    const submit = (e) => {
      const f = e.target;

      if (!(f instanceof HTMLFormElement)) return;

      e.preventDefault();

      const data = new FormData(f);
      const url = f.action;

      const btn = f.querySelector('button[type="submit"]');
      const success = f.querySelector(".form-success");

      const orig = btn && btn.innerHTML;

      if (btn) {
        btn.disabled = true;
        btn.innerHTML = "Sending...";
      }

      data.set("_ajax", "true");
      data.set("_captcha", "false");

      fetch(url, {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      })
        .then(() => {
          if (success) {
            success.style.display = "block";
          }

          if (btn) {
            btn.disabled = false;
            btn.innerHTML = orig || "Send Enquiry";
          }

          f.reset();
        })
        .catch(() => {
          if (btn) {
            btn.disabled = false;
            btn.innerHTML = orig || "Send Enquiry";
          }
        });
    };

    // IMPORTANT:
    // Add the click listener.
    // Previously this was incorrectly written as:
    // root.removeEventListener("click", click);

    root.addEventListener("click", click);
    root.addEventListener("submit", submit);

    const obs = new IntersectionObserver(
      (es) =>
        es.forEach(
          (x) =>
            x.isIntersecting && x.target.classList.add("visible"),
        ),
      {
        threshold: 0.08,
      },
    );

    root.querySelectorAll(".reveal").forEach((el) => {
      obs.observe(el);
    });

    return () => {
      root.removeEventListener("click", click);
      root.removeEventListener("submit", submit);
      obs.disconnect();
    };
  }, [loc.pathname, nav]);

  // Handle URL hashes such as /contact#project-form
  useEffect(() => {
    if (loc.hash) {
      requestAnimationFrame(() => {
        document
          .getElementById(loc.hash.slice(1))
          ?.scrollIntoView({
            behavior: "smooth",
          });
      });
    }
  }, [loc.hash]);

  return (
    <>
      <Header />

      <main
        ref={ref}
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      />

      <Footer />
    </>
  );
}

function App() {
  return <StaticPage />;
}

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);

