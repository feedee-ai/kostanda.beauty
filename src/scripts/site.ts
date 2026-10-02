const reduce = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function header() {
  const hdr = document.querySelector<HTMLElement>('[data-header]');
  const dock = document.querySelector<HTMLElement>('[data-dock]');
  if (!hdr) return;
  let ticking = false;
  const update = () => {
    const y = window.scrollY;
    hdr.classList.toggle('is-scrolled', y > 24);
    dock?.classList.toggle('is-visible', y > window.innerHeight * 0.7);
    ticking = false;
  };
  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    },
    { passive: true },
  );
  update();
}

function menu() {
  const toggle = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
  const panel = document.querySelector<HTMLElement>('[data-menu]');
  if (!toggle || !panel) return;
  const setOpen = (open: boolean) => {
    toggle.setAttribute('aria-expanded', String(open));
    document.documentElement.classList.toggle('menu-open', open);
    if (open) {
      panel.hidden = false;
      requestAnimationFrame(() => panel.classList.add('is-open'));
      panel.querySelector<HTMLElement>('a')?.focus({ preventScroll: true });
    } else {
      panel.classList.remove('is-open');
      window.setTimeout(() => {
        if (!panel.classList.contains('is-open')) panel.hidden = true;
      }, reduce() ? 0 : 500);
    }
  };
  toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
  panel.querySelectorAll('[data-menu-link]').forEach((a) => a.addEventListener('click', () => setOpen(false)));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      toggle.focus();
    }
  });
  window.matchMedia('(min-width: 1100px)').addEventListener('change', (e) => e.matches && setOpen(false));
}

function accordion() {
  const root = document.querySelector<HTMLElement>('[data-accordion]');
  if (!root) return;
  const items = Array.from(root.querySelectorAll<HTMLElement>('[data-acc]'));
  const visuals = Array.from(document.querySelectorAll<HTMLElement>('[data-visual]'));
  const chips = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-concern]'));

  const showVisual = (id: string) => {
    visuals.forEach((v) => v.classList.toggle('is-active', v.dataset.visual === id));
  };

  const open = (item: HTMLElement, state: boolean) => {
    item.classList.toggle('is-open', state);
    item.querySelector('.acc__btn')?.setAttribute('aria-expanded', String(state));
  };

  items.forEach((item) => {
    const btn = item.querySelector<HTMLButtonElement>('.acc__btn');
    btn?.addEventListener('click', () => {
      const willOpen = !item.classList.contains('is-open');
      items.forEach((other) => other !== item && open(other, false));
      open(item, willOpen);
      if (willOpen) showVisual(item.dataset.acc || '');
    });
    item.addEventListener('mouseenter', () => {
      if (window.matchMedia('(hover: hover)').matches) showVisual(item.dataset.acc || '');
    });
  });

  root.addEventListener('mouseleave', () => {
    const current = items.find((i) => i.classList.contains('is-open'));
    if (current) showVisual(current.dataset.acc || '');
  });

  chips.forEach((chip) =>
    chip.addEventListener('click', () => {
      const target = items.find((i) => i.dataset.acc === chip.dataset.concern);
      if (!target) return;
      chips.forEach((c) => c.classList.toggle('is-active', c === chip));
      items.forEach((other) => open(other, other === target));
      showVisual(target.dataset.acc || '');
      const top = target.getBoundingClientRect().top + window.scrollY - 110;
      if (window.matchMedia('(max-width: 1023px)').matches || target.getBoundingClientRect().top < 80) {
        window.scrollTo({ top, behavior: reduce() ? 'auto' : 'smooth' });
      }
    }),
  );
}

function compare() {
  document.querySelectorAll<HTMLElement>('[data-compare]').forEach((el) => {
    const range = el.querySelector<HTMLInputElement>('.compare__range');
    if (!range) return;
    const set = (v: number) => el.style.setProperty('--pos', `${v}%`);
    range.addEventListener('input', () => {
      el.classList.add('is-touched');
      set(Number(range.value));
    });
  });

  const tabs = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-case-tab]'));
  const select = (tab: HTMLButtonElement, focus = false) => {
    tabs.forEach((t) => {
      const on = t === tab;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
      const panel = document.getElementById(`case-${t.dataset.caseTab}`);
      if (panel) panel.hidden = !on;
    });
    if (focus) tab.focus();
  };
  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => select(tab));
    tab.addEventListener('keydown', (e) => {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      e.preventDefault();
      const next = tabs[(i + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length];
      select(next, true);
    });
  });

  // One-time hint: the first slider breathes once when it enters the viewport.
  const first = document.querySelector<HTMLElement>('[data-compare]:not([hidden])');
  if (first && !reduce() && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        io.disconnect();
        if (first.classList.contains('is-touched')) return;
        const start = performance.now();
        const dur = 1600;
        const step = (now: number) => {
          if (first.classList.contains('is-touched')) return;
          const p = Math.min(1, (now - start) / dur);
          const v = 50 + Math.sin(p * Math.PI * 2) * 14 * (1 - p);
          first.style.setProperty('--pos', `${v}%`);
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      },
      { threshold: 0.6 },
    );
    io.observe(first);
  }
}

function book() {
  const form = document.querySelector<HTMLFormElement>('[data-book]');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const t = String(data.get('treatment') || '').trim();
    const when = String(data.get('when') || '').trim();
    const tpl = (when ? form.dataset.tpl : form.dataset.tplShort) || '';
    const msg = tpl.replace('{name}', name).replace('{t}', t).replace('{when}', when);
    window.open(`${form.dataset.wa}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
  });
}

function reveal() {
  const els = document.querySelectorAll<HTMLElement>('[data-reveal]');
  if (!('IntersectionObserver' in window) || reduce()) {
    els.forEach((el) => el.classList.add('is-in'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  );
  els.forEach((el) => io.observe(el));
}

function heroParallax() {
  const art = document.querySelector<HTMLElement>('[data-hero-art]');
  if (!art || reduce()) return;
  requestAnimationFrame(() => art.classList.add('is-ready'));
  let ticking = false;
  const update = () => {
    const rect = art.getBoundingClientRect();
    const p = Math.max(0, Math.min(1, -rect.top / Math.max(1, rect.height)));
    art.style.setProperty('--scroll', p.toFixed(3));
    ticking = false;
  };
  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    },
    { passive: true },
  );
}


function scanLens() {
  const el = document.querySelector<HTMLElement>('[data-scan]');
  if (!el) return;
  const still = reduce();
  let w = 0, h = 0;
  const measure = () => {
    const r = el.getBoundingClientRect();
    w = r.width;
    h = r.height;
  };
  measure();
  window.addEventListener('resize', measure, { passive: true });

  // idle orbit around the face; pointer takes over on hover / drag
  const center = () => ({ x: w * 0.64, y: h * 0.32 });
  let x = center().x, y = center().y, tx = x, ty = y;
  let pointer = false;
  let visible = true;
  let raf = 0;
  const t0 = performance.now();

  const apply = () => {
    el.style.setProperty('--x', `${x.toFixed(1)}px`);
    el.style.setProperty('--y', `${y.toFixed(1)}px`);
  };

  const tick = (now: number) => {
    raf = 0;
    if (!pointer) {
      const t = (now - t0) / 1000;
      const c = center();
      tx = c.x + Math.sin(t * 0.55) * w * 0.16;
      ty = c.y + Math.sin(t * 0.37 + 1.2) * h * 0.1;
    }
    const k = pointer ? 0.18 : 0.06;
    x += (tx - x) * k;
    y += (ty - y) * k;
    apply();
    if (visible && !still) raf = requestAnimationFrame(tick);
  };

  const start = () => {
    if (!raf && !still) raf = requestAnimationFrame(tick);
  };

  const move = (e: PointerEvent) => {
    if (e.pointerType === 'touch' && e.buttons === 0) return;
    const r = el.getBoundingClientRect();
    tx = Math.max(0, Math.min(r.width, e.clientX - r.left));
    ty = Math.max(0, Math.min(r.height, e.clientY - r.top));
    pointer = true;
    el.classList.add('is-touched');
    if (still) {
      x = tx;
      y = ty;
      apply();
    }
    start();
  };
  el.addEventListener('pointermove', move);
  el.addEventListener('pointerdown', move);
  el.addEventListener('pointerleave', () => {
    pointer = false;
    start();
  });
  el.addEventListener('pointerup', (e) => {
    if (e.pointerType === 'touch') pointer = false;
  });

  if ('IntersectionObserver' in window) {
    new IntersectionObserver((entries) => {
      visible = entries[0].isIntersecting;
      if (visible) start();
    }).observe(el);
  }

  apply();
  window.setTimeout(() => el.classList.add('is-live'), still ? 0 : 1300);
  start();
}

function revealLens() {
  const sec = document.querySelector<HTMLElement>('[data-reveal-lens]');
  if (!sec || reduce()) return;
  let ticking = false;
  const clamp = (v: number) => Math.max(0, Math.min(1, v));
  const ease = (v: number) => (v < 0.5 ? 4 * v * v * v : 1 - Math.pow(-2 * v + 2, 3) / 2);
  const update = () => {
    ticking = false;
    const r = sec.getBoundingClientRect();
    const run = r.height - window.innerHeight;
    const raw = clamp(-r.top / Math.max(1, run * 0.82));
    const p = ease(raw);
    sec.style.setProperty('--p', p.toFixed(4));
    sec.style.setProperty('--t', clamp((raw - 0.62) / 0.3).toFixed(4));
  };
  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    },
    { passive: true },
  );
  window.addEventListener('resize', update, { passive: true });
  update();
}

function fears() {
  const items = document.querySelectorAll<HTMLElement>('[data-fear]');
  if (!('IntersectionObserver' in window)) {
    items.forEach((i) => i.classList.add('is-in'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      }),
    { threshold: 0.6 },
  );
  items.forEach((i) => io.observe(i));
}

export function initSite() {
  header();
  menu();
  accordion();
  compare();
  book();
  reveal();
  scanLens();
  revealLens();
  fears();
}
