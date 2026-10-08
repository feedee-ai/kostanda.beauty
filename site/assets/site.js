(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const KB = window.KB || {};

  /* Header border on scroll */
  const top = $('[data-top]');
  const onScroll = () => top && top.classList.toggle('is-scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* Mobile menu */
  const sheet = $('[data-sheet]');
  const menuBtn = $('[data-menu]');
  const closeSheet = () => { sheet.hidden = true; menuBtn.setAttribute('aria-expanded', 'false'); document.body.style.overflow = ''; menuBtn.focus(); };
  if (sheet && menuBtn) {
    menuBtn.addEventListener('click', () => {
      sheet.hidden = false; menuBtn.setAttribute('aria-expanded', 'true'); document.body.style.overflow = 'hidden';
      $('[data-menu-close]', sheet).focus();
    });
    $('[data-menu-close]', sheet).addEventListener('click', closeSheet);
    $$('[data-menu-link]', sheet).forEach(a => a.addEventListener('click', () => { sheet.hidden = true; menuBtn.setAttribute('aria-expanded', 'false'); document.body.style.overflow = ''; }));
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && !sheet.hidden) closeSheet(); });
  }

  /* Reveal once */
  const io = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
    entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); } });
  }, { threshold: 0.2, rootMargin: '0px 0px -8% 0px' }) : null;
  $$('[data-reveal]').forEach(el => io ? io.observe(el) : el.classList.add('is-in'));

  /* Hero: Marina's portrait embroidered as a cross-stitch chart */
  const fig = $('[data-stitch]');
  if (fig) {
    const canvas = $('[data-stitch-canvas]', fig);
    const photo = $('.hero__photo', fig);
    const toggle = $('[data-stitch-toggle]', fig);
    const ctx = canvas.getContext('2d');
    const THREADS = ['#18233a', '#1d5f87', '#3e9cc4', '#9fd3e6'];
    const TOPS = ['#2a3753', '#2b77a3', '#62b4d6', '#c3e6f1'];
    let model = null;
    let running = 0;

    let source = null;
    const layout = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);
      const pat = source.patterns[rect.width < 520 ? 1 : 0];
      const { cols, rows, cells } = pat;
      const cell = rect.width / cols;
      const stitches = [];
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const ch = cells[y * cols + x];
          if (ch === '.') continue;
          const level = +ch;
          stitches.push({ x, y, level, k: y + x * 0.22 + Math.random() * 7 - (level === 0 ? 2 : 0) });
        }
      }
      stitches.sort((a, b) => a.k - b.k);
      model = { dpr, cell, cols, rows, w: rect.width, h: rect.height, stitches };
    };

    const drawGrid = () => {
      const { dpr, cell, cols, rows, w, h } = model;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, w, h);
      for (let i = 0; i <= Math.max(cols, rows); i++) {
        const major = i % 10 === 0;
        ctx.strokeStyle = major ? 'rgba(62,156,196,.28)' : 'rgba(62,156,196,.12)';
        ctx.lineWidth = major ? 1 : 0.5;
        if (i <= cols) { ctx.beginPath(); ctx.moveTo(i * cell, 0); ctx.lineTo(i * cell, h); ctx.stroke(); }
        if (i <= rows) { ctx.beginPath(); ctx.moveTo(0, i * cell); ctx.lineTo(w, i * cell); ctx.stroke(); }
      }
    };

    const stitch = (s) => {
      const { cell } = model;
      const p = cell * 0.17;
      const x0 = s.x * cell + p, y0 = s.y * cell + p, x1 = (s.x + 1) * cell - p, y1 = (s.y + 1) * cell - p;
      ctx.lineCap = 'round';
      ctx.lineWidth = cell * 0.3;
      ctx.strokeStyle = THREADS[s.level];
      ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x1, y1); ctx.stroke();
      ctx.strokeStyle = TOPS[s.level];
      ctx.beginPath(); ctx.moveTo(x1, y0); ctx.lineTo(x0, y1); ctx.stroke();
    };

    const finish = () => {
      fig.classList.add('is-done', 'is-photo');
      fig.classList.remove('is-pattern');
    };

    const drawAll = () => { drawGrid(); model.stitches.forEach(stitch); };

    const play = () => {
      const id = ++running;
      drawGrid();
      const total = model.stitches.length;
      const duration = 2600;
      let i = 0;
      const t0 = performance.now();
      const frame = (now) => {
        if (id !== running) return;
        const target = Math.min(total, Math.ceil(total * easeOut(Math.min(1, (now - t0) / duration))));
        for (; i < target; i++) stitch(model.stitches[i]);
        if (i < total) requestAnimationFrame(frame);
        else setTimeout(() => { if (id === running) finish(); }, 900);
      };
      requestAnimationFrame(frame);
    };
    const easeOut = (t) => 1 - Math.pow(1 - t, 2.2);

    const start = () => {
      layout();
      if (reduce) { drawAll(); finish(); return; }
      play();
    };

    const ready = fetch('/assets/stitch.json').then(r => r.json()).then(d => { source = d; });
    const begin = () => ready.then(start).catch(finish);
    if (io && !reduce) {
      const seen = new IntersectionObserver(([en]) => { if (en.intersectionRatio >= 0.35) { seen.disconnect(); begin(); } }, { threshold: [0, 0.35] });
      seen.observe(canvas);
    } else begin();

    toggle.addEventListener('click', () => {
      const toPattern = fig.classList.contains('is-photo');
      fig.classList.toggle('is-photo', !toPattern);
      fig.classList.toggle('is-pattern', toPattern);
      $('span', toggle).textContent = toPattern ? toggle.dataset.labelPhoto : toggle.dataset.labelPattern;
    });

    let rt;
    window.addEventListener('resize', () => {
      clearTimeout(rt);
      rt = setTimeout(() => {
        if (!model || !source) return;
        const rect = canvas.getBoundingClientRect();
        if (Math.abs(rect.width - model.w) < 2) return;
        running++;
        layout(); drawAll();
        if (!fig.classList.contains('is-done')) finish();
      }, 200);
    });
  }

  /* Before / after */
  const compare = $('[data-compare]');
  if (compare) {
    const range = $('[data-compare-range]', compare);
    const before = $('[data-compare-before]', compare);
    const after = $('[data-compare-after]', compare);
    const setPos = (v) => compare.style.setProperty('--pos', v + '%');
    range.addEventListener('input', () => setPos(range.value));
    const tabs = $$('[data-case]');
    const select = (btn, focus) => {
      tabs.forEach(b => { const on = b === btn; b.setAttribute('aria-selected', on); b.tabIndex = on ? 0 : -1; });
      if (focus) btn.focus();
      compare.setAttribute('aria-labelledby', btn.id);
      compare.classList.add('is-swapping');
      let left = 2;
      const done = () => { if (--left === 0) { compare.classList.remove('is-swapping'); } };
      [before, after].forEach(im => im.addEventListener('load', done, { once: true }));
      before.srcset = btn.dataset.before;
      after.srcset = btn.dataset.after;
      compare.style.aspectRatio = btn.dataset.ratio;
      range.value = 50; setPos(50);
      setTimeout(() => compare.classList.remove('is-swapping'), 1200);
    };
    tabs.forEach((b, i) => {
      b.tabIndex = i === 0 ? 0 : -1;
      b.addEventListener('click', () => { if (b.getAttribute('aria-selected') !== 'true') select(b); });
      b.addEventListener('keydown', e => {
        const d = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[e.key];
        if (!d) return; e.preventDefault();
        select(tabs[(i + d + tabs.length) % tabs.length], true);
      });
    });
    // gentle hint: the handle sweeps once when the slider first appears
    if (!reduce && io) {
      const hint = new IntersectionObserver(([en]) => {
        if (!en.isIntersecting) return; hint.disconnect();
        const t0 = performance.now();
        const step = (now) => {
          const t = Math.min(1, (now - t0) / 1400);
          if (document.activeElement === range) return;
          setPos(50 + Math.sin(t * Math.PI * 2) * 14 * (1 - t));
          if (t < 1) requestAnimationFrame(step); else setPos(range.value);
        };
        requestAnimationFrame(step);
      }, { threshold: 0.6 });
      hint.observe(compare);
    }
  }

  /* Concerns tabs */
  const chips = $$('[data-concern]');
  chips.forEach((c, i) => {
    const show = (focus) => {
      chips.forEach(x => {
        const on = x === c;
        x.setAttribute('aria-selected', on); x.tabIndex = on ? 0 : -1;
        $('#' + x.getAttribute('aria-controls')).hidden = !on;
      });
      if (focus) c.focus();
    };
    c.addEventListener('click', () => show(false));
    c.addEventListener('keydown', e => {
      const d = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[e.key];
      if (!d) return; e.preventDefault();
      chips[(i + d + chips.length) % chips.length].click();
      chips[(i + d + chips.length) % chips.length].focus();
    });
  });

  /* Booking → WhatsApp */
  const form = $('[data-book]');
  if (form && KB.book) {
    const B = KB.book;
    const preview = $('[data-preview]', form);
    const select = $('[data-concern-select]', form);
    const message = () => {
      const fd = new FormData(form);
      const name = (fd.get('name') || '').toString().trim();
      const when = (fd.get('when') || '').toString();
      const tpl = name ? B.msg : B.msg_noname;
      return tpl.replace('{name}', name).replace('{concern}', fd.get('concern')).replace('{when}', when ? B.msg_when.replace('{when}', when) : '').replace('{lang}', fd.get('lang') || B.langs[0]);
    };
    const update = () => { preview.textContent = message(); };
    form.addEventListener('input', update);
    form.addEventListener('change', update);
    update();
    form.addEventListener('submit', e => {
      e.preventDefault();
      window.open('https://wa.me/' + KB.wa + '?text=' + encodeURIComponent(message()), '_blank', 'noopener');
    });
    $$('[data-pick-concern]').forEach(a => a.addEventListener('click', () => {
      select.value = a.dataset.pickConcern; update();
    }));
  }

  /* Sticky CTA on phones */
  const sticky = $('[data-sticky]');
  const heroCta = $('[data-cta-main]');
  const book = $('#reservar');
  if (sticky && heroCta && io) {
    let pastHero = false, atBook = false;
    const sync = () => sticky.classList.toggle('is-on', pastHero && !atBook);
    new IntersectionObserver(([en]) => { pastHero = !en.isIntersecting && en.boundingClientRect.top < 0; sync(); }).observe(heroCta);
    new IntersectionObserver(([en]) => { atBook = en.isIntersecting; sync(); }, { rootMargin: '0px 0px -30% 0px' }).observe(book);
  }
})();
