// Wireframes — 4 distinctes directions pour le portfolio Samuel & YMZ
// Toutes minimal noir & blanc, fidélité mid-fi, lisibles à zoom canvas.
//
// Chaque variation = un site complet scrollable (artboard hauteur fixe ~1800),
// pensé pour des PME qui cherchent un site web ou une refonte.
//
// Copy en français par défaut + version anglaise miroir pour démontrer la
// fonction de traduction (toggle FR/EN dans les Tweaks).

const COPY = {
  fr: {
    nav: ['Travaux', 'Services', 'Process', 'Contact'],
    hero_eyebrow: 'Atelier web · 2 personnes',
    hero_title: 'Des sites web qui font travailler votre entreprise.',
    hero_title_short: 'Des sites web qui travaillent.',
    hero_lede: 'Nous concevons et développons des sites pour les entreprises locales qui veulent enfin un outil sérieux. Livrés en 3 semaines, à partir de 1\u00a0000\u00a0€.',
    hero_lede_short: 'Conçu et développé pour les entreprises locales. Livré en 3 semaines.',
    cta_primary: 'Démarrer un projet',
    cta_secondary: 'Voir les réalisations',
    services_kicker: 'Ce que nous faisons',
    services: [
      { n: '01', t: 'Site vitrine', d: 'Une présence web propre, rapide, qui inspire confiance dès la première seconde.' },
      { n: '02', t: 'Refonte', d: 'Votre site existant repensé : design actuel, performance, contenu retravaillé.' },
      { n: '03', t: 'Site sur-mesure', d: 'Réservation, devis en ligne, espace client. On code ce dont vous avez besoin.' },
    ],
    work_kicker: 'Sélection',
    work_title: 'Travaux récents',
    work: [
      { t: 'Boulangerie Marin', c: 'Commerce · 2026', tag: 'Site vitrine' },
      { t: 'Cabinet Lavoie & Associés', c: 'Services · 2026', tag: 'Refonte' },
      { t: 'Atelier Béton Brut', c: 'Artisan · 2025', tag: 'Sur-mesure' },
    ],
    process_kicker: 'Notre méthode',
    process: [
      { n: '01', t: 'Brief', d: '30 minutes au téléphone. On comprend votre métier, vos clients, vos objectifs.' },
      { n: '02', t: 'Maquettes', d: 'Sous 5 jours, deux directions visuelles. Vous choisissez, on affine.' },
      { n: '03', t: 'Développement', d: 'On code, on teste, on optimise. Vous suivez l\u2019avancée en direct.' },
      { n: '04', t: 'Livraison', d: 'Mise en ligne, formation, accompagnement 30 jours inclus.' },
    ],
    about_kicker: 'À propos',
    about_title: 'Deux personnes, un atelier.',
    about_text: 'Samuel conçoit et développe. YMZ s\u2019occupe du contact client et du suivi commercial. Pas d\u2019intermédiaires, pas de sous-traitance. Vous parlez aux personnes qui font le travail.',
    edge_kicker: 'Pourquoi nous',
    edges: [
      { t: 'Livraison rapide', d: '3 semaines maximum, prix fixe annoncé d\u2019avance.' },
      { t: 'Design moderne', d: 'Des sites pensés en 2026, pas en 2015.' },
      { t: 'Suivi humain', d: 'Un interlocuteur unique, joignable directement.' },
    ],
    contact_kicker: 'Démarrer',
    contact_title: 'Parlons de votre projet.',
    contact_text: 'Écrivez à YMZ, notre commercial. Réponse sous 24\u00a0h ouvrées avec une première proposition.',
    contact_email: 'ymzz7x.contact@gmail.com',
    contact_btn: 'Envoyer un email',
    footer_left: '© 2026 — Samuel & YMZ',
    footer_right: 'Atelier web indépendant',
  },
  en: {
    nav: ['Work', 'Services', 'Process', 'Contact'],
    hero_eyebrow: 'Web studio · 2 people',
    hero_title: 'Websites that put your business to work.',
    hero_title_short: 'Websites that work.',
    hero_lede: 'We design and build websites for local businesses that want a serious tool. Delivered in 3 weeks, from €1,000.',
    hero_lede_short: 'Designed and built for local businesses. Delivered in 3 weeks.',
    cta_primary: 'Start a project',
    cta_secondary: 'See our work',
    services_kicker: 'What we do',
    services: [
      { n: '01', t: 'Brochure site', d: 'A clean, fast online presence that inspires trust from the first second.' },
      { n: '02', t: 'Redesign', d: 'Your existing site reimagined: modern design, performance, sharper copy.' },
      { n: '03', t: 'Custom build', d: 'Booking, online quotes, client area. We code what you actually need.' },
    ],
    work_kicker: 'Selected',
    work_title: 'Recent work',
    work: [
      { t: 'Marin Bakery', c: 'Retail · 2026', tag: 'Brochure' },
      { t: 'Lavoie & Partners', c: 'Services · 2026', tag: 'Redesign' },
      { t: 'Béton Brut Studio', c: 'Craft · 2025', tag: 'Custom' },
    ],
    process_kicker: 'How we work',
    process: [
      { n: '01', t: 'Brief', d: '30-minute call. We learn your craft, your clients, your goals.' },
      { n: '02', t: 'Mockups', d: 'Within 5 days, two visual directions. You pick, we refine.' },
      { n: '03', t: 'Build', d: 'We code, test, optimize. You follow progress live.' },
      { n: '04', t: 'Launch', d: 'Go-live, training, 30-day support included.' },
    ],
    about_kicker: 'About',
    about_title: 'Two people, one studio.',
    about_text: 'Samuel designs and builds. YMZ handles client contact and project follow-up. No middlemen, no outsourcing. You talk to the people doing the work.',
    edge_kicker: 'Why us',
    edges: [
      { t: 'Fast delivery', d: '3 weeks max, fixed price announced upfront.' },
      { t: 'Modern design', d: 'Sites designed in 2026, not 2015.' },
      { t: 'Human follow-up', d: 'One contact, reachable directly.' },
    ],
    contact_kicker: 'Start',
    contact_title: 'Let\u2019s talk about your project.',
    contact_text: 'Write to YMZ, our commercial lead. Reply within 24 business hours with a first proposal.',
    contact_email: 'ymzz7x.contact@gmail.com',
    contact_btn: 'Send an email',
    footer_left: '© 2026 — Samuel & YMZ',
    footer_right: 'Independent web studio',
  },
};

// ─── Primitives ────────────────────────────────────────────────────────────

const Hair = ({ v, h, color = 'var(--hair)', style }) => (
  <div style={{
    background: color,
    width: v ? 1 : '100%',
    height: h ? 1 : '100%',
    ...style,
  }} />
);

// Subtle striped placeholder for imagery
const Placeholder = ({ label = 'image', ratio = '4/3', style }) => (
  <div style={{
    aspectRatio: ratio,
    background: 'repeating-linear-gradient(135deg, #ededea 0 8px, #f4f3ef 8px 16px)',
    border: '1px solid var(--hair)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: '"JetBrains Mono", monospace',
    fontSize: 10,
    color: '#999',
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
    ...style,
  }}>{label}</div>
);

// Mailto helper
const MAILTO = (subject = 'Projet site web') =>
  `mailto:ymzz7x.contact@gmail.com?subject=${encodeURIComponent(subject)}`;

// ═══════════════════════════════════════════════════════════════════════════
// V1 — CORPORATE GRID
// Grand classique : nav top, hero typographique, grille services/projets,
// très "agence web propre, gros client". Pensé pour rassurer.
// ═══════════════════════════════════════════════════════════════════════════

function V1Corporate({ lang }) {
  const t = COPY[lang];
  return (
    <div style={{ background: 'var(--paper)', color: 'var(--ink)', fontFamily: 'Inter, sans-serif', minHeight: '100%' }}>
      {/* NAV */}
      <div style={{ borderBottom: '1px solid var(--hair)', padding: '20px 56px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ fontWeight: 600, fontSize: 15, letterSpacing: '-0.01em' }}>Samuel <span style={{ color: 'var(--muted)', fontWeight: 400 }}>& YMZ</span></div>
        <div style={{ display: 'flex', gap: 32 }}>
          {t.nav.map((n) => <span key={n} style={{ fontSize: 13, color: 'var(--muted)' }}>{n}</span>)}
        </div>
        <a href={MAILTO()} style={{ fontSize: 13, padding: '8px 16px', border: '1px solid var(--ink)', borderRadius: 999, color: 'var(--ink)', textDecoration: 'none' }}>{t.cta_primary}</a>
      </div>

      {/* HERO */}
      <div style={{ padding: '120px 56px 100px', borderBottom: '1px solid var(--hair)' }}>
        <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 32 }}>{t.hero_eyebrow}</div>
        <h1 style={{ fontSize: 72, lineHeight: 1.02, fontWeight: 500, letterSpacing: '-0.035em', margin: 0, maxWidth: 900, textWrap: 'balance' }}>{t.hero_title}</h1>
        <p style={{ fontSize: 18, lineHeight: 1.5, color: 'var(--muted)', maxWidth: 540, marginTop: 32 }}>{t.hero_lede}</p>
        <div style={{ display: 'flex', gap: 12, marginTop: 40 }}>
          <a href={MAILTO()} style={{ fontSize: 14, fontWeight: 500, padding: '14px 22px', background: 'var(--ink)', color: 'var(--paper)', textDecoration: 'none', borderRadius: 4 }}>{t.cta_primary} →</a>
          <a href="#work" style={{ fontSize: 14, fontWeight: 500, padding: '14px 22px', border: '1px solid var(--hair)', color: 'var(--ink)', textDecoration: 'none', borderRadius: 4 }}>{t.cta_secondary}</a>
        </div>
      </div>

      {/* SERVICES */}
      <div style={{ padding: '80px 56px', borderBottom: '1px solid var(--hair)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: 56, marginBottom: 56 }}>
          <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)' }}>{t.services_kicker}</div>
          <div style={{ fontSize: 32, lineHeight: 1.15, fontWeight: 500, letterSpacing: '-0.02em', maxWidth: 700 }}>Trois manières d'avoir un site qui fonctionne. Choix simple, prix clair.</div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, background: 'var(--hair)', border: '1px solid var(--hair)' }}>
          {t.services.map((s) => (
            <div key={s.n} style={{ background: 'var(--paper)', padding: '40px 32px', minHeight: 280, display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11, color: 'var(--muted)', marginBottom: 24 }}>{s.n}</div>
              <div style={{ fontSize: 22, fontWeight: 500, letterSpacing: '-0.01em', marginBottom: 12 }}>{s.t}</div>
              <div style={{ fontSize: 14, lineHeight: 1.5, color: 'var(--muted)', flex: 1 }}>{s.d}</div>
            </div>
          ))}
        </div>
      </div>

      {/* WORK */}
      <div id="work" style={{ padding: '80px 56px', borderBottom: '1px solid var(--hair)' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 48 }}>
          <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)' }}>{t.work_kicker}</div>
          <div style={{ fontSize: 28, fontWeight: 500, letterSpacing: '-0.02em' }}>{t.work_title}</div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {t.work.map((w) => (
            <div key={w.t}>
              <Placeholder label={w.t.toLowerCase()} ratio="4/5" />
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 16 }}>
                <div>
                  <div style={{ fontSize: 16, fontWeight: 500 }}>{w.t}</div>
                  <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 2 }}>{w.c}</div>
                </div>
                <div style={{ fontSize: 11, padding: '4px 10px', border: '1px solid var(--hair)', borderRadius: 999, color: 'var(--muted)', height: 'fit-content' }}>{w.tag}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CONTACT */}
      <div style={{ padding: '100px 56px', textAlign: 'center', borderBottom: '1px solid var(--hair)' }}>
        <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 24 }}>{t.contact_kicker}</div>
        <h2 style={{ fontSize: 56, fontWeight: 500, letterSpacing: '-0.03em', margin: '0 auto 24px', maxWidth: 800, lineHeight: 1.05 }}>{t.contact_title}</h2>
        <p style={{ fontSize: 16, color: 'var(--muted)', maxWidth: 480, margin: '0 auto 32px' }}>{t.contact_text}</p>
        <a href={MAILTO()} style={{ display: 'inline-block', fontSize: 14, fontWeight: 500, padding: '14px 24px', background: 'var(--ink)', color: 'var(--paper)', textDecoration: 'none', borderRadius: 4 }}>{t.contact_email} →</a>
      </div>

      {/* FOOTER */}
      <div style={{ padding: '32px 56px', display: 'flex', justifyContent: 'space-between', fontSize: 12, color: 'var(--muted)' }}>
        <div>{t.footer_left}</div>
        <div>{t.footer_right}</div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// V2 — EDITORIAL SERIF
// Type-driven, ambition magazine. Hero serif énorme, espaces généreux,
// projets en liste éditoriale. Pour clients qui veulent du "haut de gamme".
// ═══════════════════════════════════════════════════════════════════════════

function V2Editorial({ lang }) {
  const t = COPY[lang];
  return (
    <div style={{ background: 'var(--paper)', color: 'var(--ink)', fontFamily: 'Inter, sans-serif', minHeight: '100%' }}>
      {/* NAV (sobre, sans logo emphatique) */}
      <div style={{ padding: '28px 64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ fontFamily: '"Instrument Serif", serif', fontSize: 22, fontStyle: 'italic' }}>Samuel & YMZ</div>
        <div style={{ display: 'flex', gap: 28, fontSize: 13 }}>
          {t.nav.map((n) => <span key={n} style={{ color: 'var(--muted)' }}>{n}</span>)}
        </div>
      </div>

      {/* HERO ÉDITORIAL */}
      <div style={{ padding: '80px 64px 120px' }}>
        <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 48 }}>— {t.hero_eyebrow}</div>
        <h1 style={{
          fontFamily: '"Instrument Serif", serif',
          fontSize: 110,
          lineHeight: 0.98,
          fontWeight: 400,
          letterSpacing: '-0.025em',
          margin: 0,
          maxWidth: 1100,
          textWrap: 'balance',
        }}>
          {lang === 'fr' ? <>Des sites web qui font <em style={{ fontStyle: 'italic' }}>travailler</em> votre entreprise.</> : <>Websites that put your business to <em style={{ fontStyle: 'italic' }}>work</em>.</>}
        </h1>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, marginTop: 80 }}>
          <div />
          <div>
            <p style={{ fontSize: 17, lineHeight: 1.55, color: 'var(--ink)', margin: 0 }}>{t.hero_lede}</p>
            <a href={MAILTO()} style={{ display: 'inline-block', marginTop: 32, fontSize: 14, fontWeight: 500, color: 'var(--ink)', textDecoration: 'none', borderBottom: '1px solid var(--ink)', paddingBottom: 4 }}>{t.cta_primary} →</a>
          </div>
        </div>
      </div>

      <Hair h style={{ height: 1, background: 'var(--ink)', margin: '0 64px' }} />

      {/* WORK — liste éditoriale */}
      <div style={{ padding: '80px 64px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 56 }}>
          <div style={{ fontFamily: '"Instrument Serif", serif', fontSize: 36, fontStyle: 'italic' }}>{t.work_title}</div>
          <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11, color: 'var(--muted)', letterSpacing: '0.1em' }}>{lang === 'fr' ? '— Sélection 2025/2026' : '— Selection 2025/2026'}</div>
        </div>
        {t.work.map((w, i) => (
          <a key={w.t} href="#" style={{ display: 'grid', gridTemplateColumns: '60px 1fr 200px 120px 60px', gap: 24, padding: '32px 0', borderTop: '1px solid var(--hair)', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
            <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 12, color: 'var(--muted)' }}>{String(i + 1).padStart(2, '0')}</div>
            <div style={{ fontFamily: '"Instrument Serif", serif', fontSize: 36, fontWeight: 400, letterSpacing: '-0.01em' }}>{w.t}</div>
            <div style={{ fontSize: 13, color: 'var(--muted)' }}>{w.c}</div>
            <div style={{ fontSize: 12, color: 'var(--muted)' }}>{w.tag}</div>
            <div style={{ fontSize: 18, color: 'var(--muted)', textAlign: 'right' }}>→</div>
          </a>
        ))}
        <div style={{ borderTop: '1px solid var(--hair)' }} />
      </div>

      {/* SERVICES — texte courant */}
      <div style={{ padding: '80px 64px', background: '#f4f2ed' }}>
        <div style={{ fontFamily: '"Instrument Serif", serif', fontSize: 36, fontStyle: 'italic', marginBottom: 56 }}>{t.services_kicker}</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 56 }}>
          {t.services.map((s) => (
            <div key={s.n}>
              <div style={{ fontFamily: '"Instrument Serif", serif', fontSize: 28, marginBottom: 16, lineHeight: 1.1 }}>{s.t}</div>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--muted)', margin: 0 }}>{s.d}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <div style={{ padding: '120px 64px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
        <div>
          <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11, color: 'var(--muted)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 24 }}>{t.about_kicker}</div>
          <h2 style={{ fontFamily: '"Instrument Serif", serif', fontSize: 56, fontWeight: 400, letterSpacing: '-0.02em', margin: 0, lineHeight: 1.05 }}>{t.about_title}</h2>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--muted)', marginTop: 32, maxWidth: 460 }}>{t.about_text}</p>
        </div>
        <Placeholder label="portrait studio" ratio="4/5" />
      </div>

      {/* CONTACT */}
      <div style={{ padding: '100px 64px', background: 'var(--ink)', color: 'var(--paper)' }}>
        <div style={{ fontFamily: '"Instrument Serif", serif', fontSize: 72, fontWeight: 400, lineHeight: 1.05, letterSpacing: '-0.02em', maxWidth: 800 }}>{t.contact_title}</div>
        <a href={MAILTO()} style={{ display: 'inline-block', marginTop: 40, fontSize: 18, color: 'var(--paper)', textDecoration: 'none', borderBottom: '1px solid var(--paper)', paddingBottom: 6 }}>{t.contact_email} →</a>
      </div>

      <div style={{ padding: '32px 64px', display: 'flex', justifyContent: 'space-between', fontSize: 12, color: 'var(--muted)' }}>
        <div>{t.footer_left}</div>
        <div>{t.footer_right}</div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// V3 — SWISS / BENTO
// Inspiration suisse + bento moderne. Grille très visible, blocs structurés,
// rythme géométrique. Pour clients qui aiment "tech / sérieux / précis".
// ═══════════════════════════════════════════════════════════════════════════

function V3Swiss({ lang }) {
  const t = COPY[lang];
  return (
    <div style={{ background: 'var(--paper)', color: 'var(--ink)', fontFamily: 'Inter, sans-serif', minHeight: '100%' }}>
      {/* NAV pill */}
      <div style={{ padding: 24, display: 'flex', justifyContent: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4, padding: 4, border: '1px solid var(--hair)', borderRadius: 999, background: 'var(--paper)' }}>
          <div style={{ padding: '6px 14px', fontSize: 13, fontWeight: 600 }}>S&Y</div>
          {t.nav.map((n) => <div key={n} style={{ padding: '6px 14px', fontSize: 13, color: 'var(--muted)' }}>{n}</div>)}
          <a href={MAILTO()} style={{ padding: '6px 14px', fontSize: 13, background: 'var(--ink)', color: 'var(--paper)', borderRadius: 999, textDecoration: 'none' }}>{t.cta_primary}</a>
        </div>
      </div>

      {/* HERO + bento */}
      <div style={{ padding: '0 24px' }}>
        {/* HERO bloc */}
        <div style={{ border: '1px solid var(--hair)', borderRadius: 20, padding: '80px 56px', marginBottom: 12, background: 'var(--paper)' }}>
          <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 24 }}>● {t.hero_eyebrow}</div>
          <h1 style={{ fontSize: 84, lineHeight: 0.98, fontWeight: 500, letterSpacing: '-0.035em', margin: 0, maxWidth: 950, textWrap: 'balance' }}>{t.hero_title}</h1>
          <p style={{ fontSize: 16, color: 'var(--muted)', maxWidth: 460, marginTop: 32, lineHeight: 1.5 }}>{t.hero_lede}</p>
        </div>

        {/* BENTO */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 12, marginBottom: 12 }}>
          {/* Big work */}
          <div style={{ gridColumn: 'span 4', borderRadius: 20, overflow: 'hidden', border: '1px solid var(--hair)', aspectRatio: '16/9', position: 'relative' }}>
            <Placeholder label={t.work[0].t} ratio="" style={{ height: '100%', border: 'none', borderRadius: 0 }} />
            <div style={{ position: 'absolute', bottom: 24, left: 24, color: 'var(--ink)', fontSize: 14, fontWeight: 500, background: 'var(--paper)', padding: '6px 12px', borderRadius: 999 }}>{t.work[0].t} · {t.work[0].tag}</div>
          </div>
          {/* Stats card */}
          <div style={{ gridColumn: 'span 2', borderRadius: 20, border: '1px solid var(--hair)', padding: 32, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11, color: 'var(--muted)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>{lang === 'fr' ? 'Repères' : 'At a glance'}</div>
            <div>
              <div style={{ fontSize: 56, fontWeight: 500, letterSpacing: '-0.03em', lineHeight: 1 }}>3 sem.</div>
              <div style={{ fontSize: 13, color: 'var(--muted)', marginTop: 8 }}>{lang === 'fr' ? 'délai de livraison moyen' : 'average delivery time'}</div>
            </div>
            <div>
              <div style={{ fontSize: 56, fontWeight: 500, letterSpacing: '-0.03em', lineHeight: 1 }}>1\u00a0000\u00a0€</div>
              <div style={{ fontSize: 13, color: 'var(--muted)', marginTop: 8 }}>{lang === 'fr' ? 'à partir de' : 'starting at'}</div>
            </div>
          </div>
          {/* Two smaller works */}
          <div style={{ gridColumn: 'span 3', borderRadius: 20, overflow: 'hidden', border: '1px solid var(--hair)', aspectRatio: '4/3', position: 'relative' }}>
            <Placeholder label={t.work[1].t} ratio="" style={{ height: '100%', border: 'none', borderRadius: 0 }} />
            <div style={{ position: 'absolute', bottom: 20, left: 20, fontSize: 13, fontWeight: 500, background: 'var(--paper)', padding: '6px 12px', borderRadius: 999 }}>{t.work[1].t}</div>
          </div>
          <div style={{ gridColumn: 'span 3', borderRadius: 20, overflow: 'hidden', border: '1px solid var(--hair)', aspectRatio: '4/3', position: 'relative' }}>
            <Placeholder label={t.work[2].t} ratio="" style={{ height: '100%', border: 'none', borderRadius: 0 }} />
            <div style={{ position: 'absolute', bottom: 20, left: 20, fontSize: 13, fontWeight: 500, background: 'var(--paper)', padding: '6px 12px', borderRadius: 999 }}>{t.work[2].t}</div>
          </div>
        </div>

        {/* SERVICES bento row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginBottom: 12 }}>
          {t.services.map((s) => (
            <div key={s.n} style={{ borderRadius: 20, border: '1px solid var(--hair)', padding: 32, minHeight: 220 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 32 }}>
                <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11, color: 'var(--muted)' }}>{s.n}</div>
                <div style={{ width: 8, height: 8, borderRadius: 8, background: 'var(--ink)' }} />
              </div>
              <div style={{ fontSize: 22, fontWeight: 500, letterSpacing: '-0.01em', marginBottom: 12 }}>{s.t}</div>
              <div style={{ fontSize: 13, lineHeight: 1.5, color: 'var(--muted)' }}>{s.d}</div>
            </div>
          ))}
        </div>

        {/* PROCESS bar */}
        <div style={{ borderRadius: 20, border: '1px solid var(--hair)', padding: 40, marginBottom: 12 }}>
          <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 32 }}>{t.process_kicker}</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32 }}>
            {t.process.map((p, i) => (
              <div key={p.n}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                  <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11, color: 'var(--muted)' }}>{p.n}</div>
                  {i < 3 && <div style={{ flex: 1, height: 1, background: 'var(--hair)' }} />}
                </div>
                <div style={{ fontSize: 17, fontWeight: 500, marginBottom: 8 }}>{p.t}</div>
                <div style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.5 }}>{p.d}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CONTACT */}
        <div style={{ borderRadius: 20, padding: '80px 56px', marginBottom: 24, background: 'var(--ink)', color: 'var(--paper)', textAlign: 'center' }}>
          <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(250,250,247,0.5)', marginBottom: 24 }}>● {t.contact_kicker}</div>
          <h2 style={{ fontSize: 56, fontWeight: 500, letterSpacing: '-0.03em', margin: '0 auto 32px', maxWidth: 700, lineHeight: 1.05 }}>{t.contact_title}</h2>
          <a href={MAILTO()} style={{ display: 'inline-block', fontSize: 14, fontWeight: 500, padding: '14px 22px', background: 'var(--paper)', color: 'var(--ink)', borderRadius: 999, textDecoration: 'none' }}>{t.contact_email} →</a>
        </div>
      </div>

      <div style={{ padding: '24px 32px', display: 'flex', justifyContent: 'space-between', fontSize: 12, color: 'var(--muted)' }}>
        <div>{t.footer_left}</div>
        <div>{t.footer_right}</div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// V4 — DARK / STUDIO
// Version sombre, posture studio confidentiel. Très contrasté, image-heavy.
// Plus "agence créative" que "freelance". Pour démontrer que vous savez aussi
// faire du haut-de-gamme.
// ═══════════════════════════════════════════════════════════════════════════

function V4Dark({ lang }) {
  const t = COPY[lang];
  const ink = '#0a0a0a';
  const paper = '#f5f3ee';
  const muted = '#8a8a85';
  return (
    <div style={{ background: ink, color: paper, fontFamily: 'Inter, sans-serif', minHeight: '100%' }}>
      {/* NAV */}
      <div style={{ padding: '24px 56px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(245,243,238,0.08)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 8, height: 8, borderRadius: 8, background: paper }} />
          <div style={{ fontWeight: 500, fontSize: 14, letterSpacing: '0.02em' }}>SAMUEL × YMZ</div>
        </div>
        <div style={{ display: 'flex', gap: 28, fontSize: 12, color: muted, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
          {t.nav.map((n) => <span key={n}>{n}</span>)}
        </div>
        <a href={MAILTO()} style={{ fontSize: 12, padding: '8px 16px', border: `1px solid ${paper}`, color: paper, textDecoration: 'none', letterSpacing: '0.05em', textTransform: 'uppercase' }}>{t.cta_primary}</a>
      </div>

      {/* HERO huge */}
      <div style={{ padding: '120px 56px 100px', position: 'relative' }}>
        <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: muted, marginBottom: 56 }}>
          <span style={{ display: 'inline-block', width: 32, height: 1, background: muted, verticalAlign: 'middle', marginRight: 12 }} />
          {t.hero_eyebrow}
        </div>
        <h1 style={{ fontSize: 128, lineHeight: 0.92, fontWeight: 400, letterSpacing: '-0.04em', margin: 0, maxWidth: 1200, textWrap: 'balance' }}>{t.hero_title_short || t.hero_title}</h1>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 40, marginTop: 100, paddingTop: 32, borderTop: '1px solid rgba(245,243,238,0.1)' }}>
          <p style={{ fontSize: 15, lineHeight: 1.55, color: paper, margin: 0, gridColumn: '2 / 4', maxWidth: 540 }}>{t.hero_lede}</p>
        </div>
      </div>

      {/* WORK FULL BLEED */}
      <div style={{ padding: '0 0 0 0' }}>
        {t.work.map((w, i) => (
          <div key={w.t} style={{ borderTop: '1px solid rgba(245,243,238,0.1)', padding: '40px 56px', display: 'grid', gridTemplateColumns: '80px 1fr 2fr 100px', gap: 32, alignItems: 'center' }}>
            <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11, color: muted }}>{String(i + 1).padStart(3, '0')}</div>
            <div>
              <div style={{ fontSize: 22, fontWeight: 500, letterSpacing: '-0.01em' }}>{w.t}</div>
              <div style={{ fontSize: 12, color: muted, marginTop: 4, letterSpacing: '0.03em' }}>{w.c}</div>
            </div>
            <div>
              <Placeholder label={w.t.toLowerCase()} ratio="3/1" style={{ background: 'repeating-linear-gradient(135deg, #1a1a1a 0 8px, #141414 8px 16px)', border: '1px solid rgba(245,243,238,0.1)', color: '#444' }} />
            </div>
            <div style={{ fontSize: 11, color: muted, textAlign: 'right', letterSpacing: '0.05em', textTransform: 'uppercase' }}>{w.tag} →</div>
          </div>
        ))}
        <div style={{ borderTop: '1px solid rgba(245,243,238,0.1)' }} />
      </div>

      {/* EDGE TRIPTYCH */}
      <div style={{ padding: '120px 56px' }}>
        <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: muted, marginBottom: 56 }}>— {t.edge_kicker}</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 56 }}>
          {t.edges.map((e, i) => (
            <div key={e.t}>
              <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11, color: muted, marginBottom: 24 }}>0{i + 1}</div>
              <div style={{ fontSize: 28, fontWeight: 500, letterSpacing: '-0.02em', marginBottom: 16, lineHeight: 1.1 }}>{e.t}</div>
              <p style={{ fontSize: 14, color: muted, lineHeight: 1.6, margin: 0 }}>{e.d}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CONTACT — full bleed */}
      <div style={{ padding: '160px 56px 100px', borderTop: '1px solid rgba(245,243,238,0.1)' }}>
        <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: muted, marginBottom: 32 }}>— {t.contact_kicker}</div>
        <h2 style={{ fontSize: 96, fontWeight: 400, letterSpacing: '-0.035em', margin: 0, lineHeight: 0.95, maxWidth: 1200 }}>{t.contact_title}</h2>
        <a href={MAILTO()} style={{ display: 'inline-block', marginTop: 48, fontSize: 18, color: paper, textDecoration: 'none', borderBottom: `1px solid ${paper}`, paddingBottom: 8 }}>{t.contact_email} →</a>
      </div>

      <div style={{ padding: '32px 56px', display: 'flex', justifyContent: 'space-between', fontSize: 11, color: muted, borderTop: '1px solid rgba(245,243,238,0.1)', letterSpacing: '0.04em' }}>
        <div>{t.footer_left.toUpperCase()}</div>
        <div>{t.footer_right.toUpperCase()}</div>
      </div>
    </div>
  );
}

Object.assign(window, { V1Corporate, V2Editorial, V3Swiss, V4Dark, COPY });
