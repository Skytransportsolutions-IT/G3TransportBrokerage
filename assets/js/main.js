/* G3 Transport Inc - blueprint interactions
   Plain JS, no dependencies. Everything degrades gracefully without it. */
(function () {
  'use strict';

  /* ---- Mobile navigation ---- */
  var toggle = document.querySelector('.navtoggle');
  var nav = document.getElementById('primary-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });

    window.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });
  }

  /* ---- Header shadow on scroll ---- */
  var header = document.querySelector('.header');
  if (header) {
    var onScroll = function () {
      header.classList.toggle('is-stuck', window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---- Mark the current page in the nav ---- */
  var path = location.pathname.split('/').pop() || 'index.html';
  Array.prototype.forEach.call(document.querySelectorAll('#primary-nav a'), function (a) {
    var href = a.getAttribute('href');
    if (href === path) a.classList.add('is-active');
  });

  /* ---- FAQ accordion ---- */
  Array.prototype.forEach.call(document.querySelectorAll('.faq__q'), function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.closest('.faq__item');
      var open = item.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  });

  /* ---- Scroll reveal ----
     The .reveal styles only apply once <html> carries the "js" class, so content
     can never be left invisible if this block fails. A timer reveals anything the
     observer has not reached, as a second safety net. */
  var revealables = document.querySelectorAll('.reveal');
  var showAll = function () {
    Array.prototype.forEach.call(revealables, function (el) { el.classList.add('is-in'); });
  };

  if ('IntersectionObserver' in window && revealables.length) {
    document.documentElement.classList.add('js');
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    Array.prototype.forEach.call(revealables, function (el) { io.observe(el); });
    window.setTimeout(showAll, 1200);
  } else {
    showAll();
  }

  /* ---- Forms ----
     BLUEPRINT ONLY: nothing is sent anywhere. Wire these to a real endpoint
     (Formspree / Netlify Forms / a mail handler) before launch. */
  Array.prototype.forEach.call(document.querySelectorAll('form[data-demo-form]'), function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (typeof form.reportValidity === 'function' && !form.reportValidity()) return;
      var msg = form.querySelector('.formmsg');
      if (msg) {
        msg.classList.add('is-visible');
        msg.setAttribute('role', 'status');
        msg.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      form.reset();
    });
  });

  /* ---- Background video: only play while on screen ----
     Saves bandwidth and battery, and honours the reduced-motion preference.
     Every video sits over a poster image, so the section still looks right
     if the clip never plays. */
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var videos = document.querySelectorAll('video[data-bg]');

  if (videos.length) {
    if (reduceMotion) {
      Array.prototype.forEach.call(videos, function (v) {
        v.removeAttribute('autoplay');
        v.pause();
      });
    } else if ('IntersectionObserver' in window) {
      var vio = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          var v = entry.target;
          if (entry.isIntersecting) {
            var p = v.play();
            if (p && p.catch) p.catch(function () { /* autoplay blocked - poster stays */ });
          } else if (!v.paused) {
            v.pause();
          }
        });
      }, { threshold: 0.1 });
      Array.prototype.forEach.call(videos, function (v) { vio.observe(v); });
    }
  }

  /* ---- Footer year ---- */
  Array.prototype.forEach.call(document.querySelectorAll('[data-year]'), function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
