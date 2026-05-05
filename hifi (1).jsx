// hifi.jsx — Site portfolio haute fidélité, V1 Corporate Grid
// Délai annoncé : 1 semaine. Cible : PME locales · objectif 100 × 1000€ / 8 mois.
// Toggle langue FR/EN, animations au scroll, marquee, FAQ accordéon, stats.

const MAIL = 'ymzz7x.contact@gmail.com';
const MAIL_SAM = 'samuelsartip623@gmail.com';
const INSTA = 'https://www.instagram.com/madebytrade/';
const INSTA_HANDLE = '@madebytrade';
const MAILTO = (sub) => `mailto:${MAIL}?subject=${encodeURIComponent(sub || 'Projet site web')}`;
const MAILTO_SAM = (sub) => `mailto:${MAIL_SAM}?subject=${encodeURIComponent(sub || 'Projet site web')}`;

// ── Copy bilingue ──────────────────────────────────────────────────────────
const T = {
  fr: {
    nav: [
      { href: '#work', label: 'Travaux' },
      { href: '#services', label: 'Services' },
      { href: '#process', label: 'Process' },
      { href: '#pricing', label: 'Tarifs' },
      { href: '#faq', label: 'FAQ' },
    ],
    cta_top: 'Démarrer un projet',
    hero_eyebrow: 'Atelier web indépendant',
    hero_title_a: 'Des sites web qui font',
    hero_title_em: 'travailler',
    hero_title_b: 'votre entreprise.',
    hero_lede: 'Nous concevons et développons des sites pour les entreprises locales qui veulent enfin un outil sérieux. Livrés en 1 semaine, à partir de 999\u00a0€.',
    cta_primary: 'Démarrer un projet',
    cta_secondary: 'Voir les réalisations',
    available: 'Disponible cette semaine',

    marquee: ['Sites vitrines', 'Refontes', 'Sur-mesure', 'Réservation en ligne', 'SEO local', 'Identité web'],

    stats_kicker: 'Repères',
    stats: [
      { n: '1 sem.', l: 'Délai de livraison' },
      { n: '999\u00a0€', l: 'À partir de' },
      { n: 'Fixe', l: 'Prix annoncé d\u2019avance' },
      { n: '24\u00a0h', l: 'Première réponse' },
    ],

    services_kicker: 'Ce que nous faisons',
    services_title: 'Trois manières d\u2019avoir un site qui fonctionne. Choix simple, prix clair.',
    services: [
      {
        n: '01', t: 'Site vitrine',
        d: 'Une présence web propre, rapide, qui inspire confiance dès la première seconde. Idéal pour artisans, commerces, professions libérales.',
        bullets: ['Jusqu\u2019à 5 pages', 'Design sur-mesure', 'Optimisé mobile', 'Référencement de base'],
        price: 'à partir de 999\u00a0€',
      },
      {
        n: '02', t: 'Refonte',
        d: 'Votre site existant repensé : design actuel, performance multipliée, contenu retravaillé. On garde ce qui marche, on remplace le reste.',
        bullets: ['Audit du site existant', 'Migration du contenu', 'Nouveau design', 'Redirections SEO'],
        price: 'à partir de 1\u00a0500\u00a0€',
      },
      {
        n: '03', t: 'Sur-mesure',
        d: 'Réservation, devis en ligne, espace client, catalogue. On code exactement ce dont vous avez besoin, sans templates rigides.',
        bullets: ['Fonctionnalités personnalisées', 'Intégrations (Stripe, Calendly\u2026)', 'Espace admin', 'Documentation claire'],
        price: 'sur devis',
      },
    ],

    work_kicker: 'Sélection',
    work_title: 'Travaux récents',
    work_sub: 'Trois projets représentatifs. Chacun livré dans les délais annoncés.',
    work: [
      { id: 'cafe', t: 'Exemple — Café local', c: 'Commerce de bouche · démo', tag: 'Site vitrine', metric: '+38\u00a0% de réservations en ligne' },
      { id: 'cabinet', t: 'Exemple — Cabinet de conseil', c: 'Services pro · démo', tag: 'Refonte', metric: 'Score Lighthouse 99/100' },
      { id: 'atelier', t: 'Exemple — Atelier d\u2019artisan', c: 'Artisanat · démo', tag: 'Sur-mesure', metric: 'Devis en ligne automatisé' },
    ],

    process_kicker: 'Notre méthode',
    process_title: 'Une semaine, quatre étapes.',
    process: [
      { d: 'J1', t: 'Brief', desc: 'Appel de 30 minutes. On comprend votre métier, vos clients, vos objectifs. Devis fixe sous 24\u00a0h.' },
      { d: 'J2-3', t: 'Design', desc: 'Deux directions visuelles présentées. Vous choisissez, nous affinons selon vos retours.' },
      { d: 'J4-6', t: 'Développement', desc: 'Code propre, performant, maintenable. Vous suivez l\u2019avancée sur un lien de prévisualisation.' },
      { d: 'J7', t: 'Livraison', desc: 'Mise en ligne et passation. Vous repartez avec un outil prêt à l\u2019emploi et un guide simple pour le gérer.' },
    ],

    edge_kicker: 'Pourquoi nous',
    edge_title: 'Trois raisons concrètes.',
    edges: [
      { t: 'Livraison en 1 semaine', d: 'Pas trois mois, pas trois agences successives. Sept jours, prix annoncé d\u2019avance, pas de surprise.' },
      { t: 'Design pensé en 2026', d: 'Pas de templates fatigués. Chaque site est conçu sur-mesure pour votre activité, pas découpé dans un thème WordPress.' },
      { t: 'Un seul interlocuteur', d: 'YMZ s\u2019occupe du contact, Samuel construit. Pas de chef de projet intermédiaire, pas de sous-traitance lointaine.' },
    ],

    testi_kicker: 'Témoignages',
    testi_title: 'Ce qu\u2019ils en disent.',
    testimonials: [
      { q: 'Témoignage d\u2019exemple — sera remplacé par un vrai retour client après les premières missions livrées.', a: 'Client A.', r: 'Exemple — Café local' },
      { q: 'Témoignage d\u2019exemple — sera remplacé par un vrai retour client après les premières missions livrées.', a: 'Client B.', r: 'Exemple — Cabinet de conseil' },
      { q: 'Témoignage d\u2019exemple — sera remplacé par un vrai retour client après les premières missions livrées.', a: 'Client C.', r: 'Exemple — Atelier d\u2019artisan' },
    ],

    pricing_kicker: 'Tarifs',
    pricing_title: 'Prix fixes, annoncés à l\u2019avance.',
    pricing_sub: 'Pas de devis interminable. Trois formules claires, tout est inclus.',
    pricing: [
      {
        t: 'Vitrine',
        price: '999\u00a0€',
        sub: 'TTC, paiement en deux fois',
        for: 'Artisans, commerces, indépendants',
        inc: ['Jusqu\u2019à 5 pages', 'Design sur-mesure', 'Mobile + tablette', 'SEO de base', 'Guide d\u2019utilisation', 'Code livré clé en main'],
        cta: 'Démarrer',
      },
      {
        t: 'Pro',
        price: '1\u00a0799\u00a0€',
        sub: 'TTC, paiement en deux fois',
        for: 'PME, professions libérales',
        inc: ['Jusqu\u2019à 12 pages', 'Blog ou portfolio', 'Formulaires avancés', 'Animations soignées', 'SEO local approfondi', 'Guide d\u2019utilisation'],
        cta: 'Démarrer',
        featured: true,
      },
      {
        t: 'Sur-mesure',
        price: 'sur devis',
        sub: 'À partir de 2\u00a0499\u00a0€',
        for: 'Réservation, devis, espace client',
        inc: ['Fonctionnalités custom', 'Intégrations API', 'Espace admin', 'Tests de bout en bout', 'Documentation détaillée', 'Code livré clé en main'],
        cta: 'Discuter',
      },
    ],

    faq_kicker: 'Questions fréquentes',
    faq_title: 'On vous répond avant que vous ne demandiez.',
    faq: [
      { q: 'Sérieusement, vous livrez en 1 semaine ?', a: 'Oui. C\u2019est notre format de base. On ne prend qu\u2019un projet à la fois, donc tout notre temps est consacré au vôtre. Si votre projet est plus complexe (catalogue volumineux, fonctionnalités avancées\u2026), on l\u2019annonce dès le brief avec un délai ajusté.' },
      { q: 'Hébergement et nom de domaine, c\u2019est inclus ?', a: 'Deux options. Soit vous gérez votre hébergement et votre nom de domaine vous-même (on vous explique tout à la livraison), soit on s\u2019en occupe pour 30\u00a0€\u00a0/\u00a0mois \u2014 le premier mois est offert. Vous choisissez librement.' },
      { q: 'Et le SEO ?', a: 'Inclus de base : structure propre, balises optimisées, vitesse maximale, schéma de données. Pour du SEO local poussé (Google Business, contenus, backlinks), c\u2019est un service complémentaire.' },
      { q: 'Comment se passe le paiement ?', a: '50\u00a0% à la commande, 50\u00a0% à la livraison. Virement ou carte. Facture détaillée, déductible si vous êtes une entreprise.' },
      { q: 'Et si je ne suis pas satisfait ?', a: 'Au stade design (J2-3), vous validez la direction avant qu\u2019on développe. Si rien ne vous convient parmi les deux propositions initiales, on rembourse 50\u00a0%.' },
      { q: 'Vous faites de l\u2019e-commerce ?', a: 'Pas pour l\u2019instant. On se concentre sur les sites vitrines, les refontes et les fonctionnalités sur-mesure (réservation, devis, espace client). Pour une vraie boutique en ligne, on vous oriente vers d\u2019autres ateliers spécialisés.' },
    ],

    contact_kicker: 'Démarrer',
    contact_title: 'Parlons de votre projet.',
    contact_sub: 'Écrivez-nous. Réponse sous 24\u00a0h ouvrées avec une première proposition. C\u2019est gratuit et sans engagement.',
    contact_btn: 'Envoyer un email',
    contact_or: 'ou répondez en quelques mots',
    contact_form_l1: 'Nom',
    contact_form_l2: 'Email',
    contact_form_l3: 'Activité',
    contact_form_l4: 'Quelques mots sur votre projet',
    contact_form_send: 'Envoyer',

    footer_left: '© 2026 — TRADE',
    footer_right: 'Atelier web indépendant',
    footer_addr: 'Atelier indépendant',
    footer_links: [
      { k: 'legal', label: 'Mentions légales' },
      { k: 'privacy', label: 'Confidentialité' },
      { k: 'contact', label: 'Contact' },
    ],
  },
  en: {
    nav: [
      { href: '#work', label: 'Work' },
      { href: '#services', label: 'Services' },
      { href: '#process', label: 'Process' },
      { href: '#pricing', label: 'Pricing' },
      { href: '#faq', label: 'FAQ' },
    ],
    cta_top: 'Start a project',
    hero_eyebrow: 'Independent web studio',
    hero_title_a: 'Websites that put your',
    hero_title_em: 'business',
    hero_title_b: 'to work.',
    hero_lede: 'We design and build websites for local businesses that want a serious tool. Delivered in 1 week, from €999.',
    cta_primary: 'Start a project',
    cta_secondary: 'See our work',
    available: 'Available this week',

    marquee: ['Brochure sites', 'Redesigns', 'Custom builds', 'Online booking', 'Local SEO', 'Web identity'],

    stats_kicker: 'At a glance',
    stats: [
      { n: '1 wk', l: 'Delivery time' },
      { n: '€999', l: 'Starting at' },
      { n: 'Fixed', l: 'Price upfront' },
      { n: '24 h', l: 'First reply' },
    ],

    services_kicker: 'What we do',
    services_title: 'Three ways to get a site that works. Simple choice, clear price.',
    services: [
      { n: '01', t: 'Brochure site', d: 'A clean, fast online presence that inspires trust from the first second. Ideal for craftsmen, shops, professionals.', bullets: ['Up to 5 pages', 'Custom design', 'Mobile-optimized', 'Basic SEO'], price: 'from €1,000' },
      { n: '02', t: 'Redesign', d: 'Your existing site reimagined: modern design, multiplied performance, sharper copy. Keep what works, replace the rest.', bullets: ['Existing site audit', 'Content migration', 'New design', 'SEO redirects'], price: 'from €1,500' },
      { n: '03', t: 'Custom', d: 'Booking, online quotes, client area. We code exactly what you need, no rigid templates.', bullets: ['Custom features', 'Integrations (Stripe, Calendly\u2026)', 'Admin area', 'Clear documentation'], price: 'on quote' },
    ],

    work_kicker: 'Selected',
    work_title: 'Recent work',
    work_sub: 'Three representative projects. Each delivered on time.',
    work: [
      { id: 'cafe', t: 'Sample — Local café', c: 'Food retail · demo', tag: 'Brochure', metric: '+38% online bookings' },
      { id: 'cabinet', t: 'Sample — Consulting firm', c: 'Pro services · demo', tag: 'Redesign', metric: 'Lighthouse 99/100' },
      { id: 'atelier', t: 'Sample — Craft studio', c: 'Craft · demo', tag: 'Custom', metric: 'Online auto-quote' },
    ],

    process_kicker: 'How we work',
    process_title: 'One week, four steps.',
    process: [
      { d: 'D1', t: 'Brief', desc: '30-minute call. We learn your craft, your clients, your goals. Fixed quote within 24 hours.' },
      { d: 'D2-3', t: 'Design', desc: 'Two visual directions presented. You pick, we refine based on your feedback.' },
      { d: 'D4-6', t: 'Build', desc: 'Clean, fast, maintainable code. You follow progress on a preview link.' },
      { d: 'D7', t: 'Launch', desc: 'Go-live and handover. You leave with a ready-to-use tool and a simple guide to manage it.' },
    ],

    edge_kicker: 'Why us',
    edge_title: 'Three concrete reasons.',
    edges: [
      { t: 'Delivered in 1 week', d: 'Not three months, not three agencies. Seven days, fixed price upfront, no surprises.' },
      { t: 'Designed in 2026', d: 'No tired templates. Every site is designed for your business, not cut from a WordPress theme.' },
      { t: 'One single contact', d: 'YMZ handles communication, Samuel builds. No project-manager middleman, no distant outsourcing.' },
    ],

    testi_kicker: 'Testimonials',
    testi_title: 'What they say.',
    testimonials: [
      { q: 'Sample testimonial — will be replaced with real client feedback after the first delivered projects.', a: 'Client A.', r: 'Sample — Local café' },
      { q: 'Sample testimonial — will be replaced with real client feedback after the first delivered projects.', a: 'Client B.', r: 'Sample — Consulting firm' },
      { q: 'Sample testimonial — will be replaced with real client feedback after the first delivered projects.', a: 'Client C.', r: 'Sample — Craft studio' },
    ],

    pricing_kicker: 'Pricing',
    pricing_title: 'Fixed prices, announced upfront.',
    pricing_sub: 'No endless quoting. Three clear packages, everything included.',
    pricing: [
      { t: 'Brochure', price: '€999', sub: 'incl. tax, two payments', for: 'Craftsmen, shops, freelancers', inc: ['Up to 5 pages', 'Custom design', 'Mobile + tablet', 'Basic SEO', 'User guide', 'Turnkey delivery'], cta: 'Start' },
      { t: 'Pro', price: '€1,799', sub: 'incl. tax, two payments', for: 'SMBs, professionals', inc: ['Up to 12 pages', 'Blog or portfolio', 'Advanced forms', 'Polished animations', 'Deep local SEO', 'User guide'], cta: 'Start', featured: true },
      { t: 'Custom', price: 'on quote', sub: 'From €2,499', for: 'Booking, quotes, client area', inc: ['Custom features', 'API integrations', 'Admin area', 'End-to-end testing', 'Detailed docs', 'Turnkey delivery'], cta: 'Talk' },
    ],

    faq_kicker: 'FAQ',
    faq_title: 'Answers before you ask.',
    faq: [
      { q: 'Seriously, you deliver in 1 week?', a: 'Yes. That\u2019s our default format. We take one project at a time, so all our time goes to yours. If your project is more complex (large catalog, advanced features\u2026), we say so at the brief with an adjusted timeline.' },
      { q: 'Is hosting and domain included?', a: 'Two options. Either you handle your own hosting and domain (we walk you through everything at delivery), or we take care of it for €30/month \u2014 first month free. You pick.' },
      { q: 'What about SEO?', a: 'Included by default: clean structure, optimized tags, max speed, structured data. For deep local SEO (Google Business, content, backlinks), it\u2019s an additional service.' },
      { q: 'How does payment work?', a: '50% on order, 50% on delivery. Bank transfer or card. Detailed invoice, deductible if you\u2019re a business.' },
      { q: 'What if I\u2019m not satisfied?', a: 'At the design stage (D2-3), you validate the direction before we build. If neither of the two initial proposals works, we refund 50%.' },
      { q: 'Do you do e-commerce?', a: 'Not for now. We focus on brochure sites, redesigns and custom features (booking, quotes, client area). For a full online store, we point you to specialized studios.' },
    ],

    contact_kicker: 'Start',
    contact_title: 'Let\u2019s talk about your project.',
    contact_sub: 'Get in touch. Reply within 24 business hours with a first proposal. Free, no commitment.',
    contact_btn: 'Send an email',
    contact_or: 'or reply in a few words',
    contact_form_l1: 'Name',
    contact_form_l2: 'Email',
    contact_form_l3: 'Business',
    contact_form_l4: 'A few words about your project',
    contact_form_send: 'Send',

    footer_left: '© 2026 — TRADE',
    footer_right: 'Independent web studio',
    footer_addr: 'Independent studio',
    footer_links: [
      { k: 'legal', label: 'Legal notice' },
      { k: 'privacy', label: 'Privacy' },
      { k: 'contact', label: 'Contact' },
    ],
  },
};

// ── Hooks ──────────────────────────────────────────────────────────────────
function useReveal() {
  React.useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  });
}

// ── Primitives ─────────────────────────────────────────────────────────────
function Placeholder({ label, ratio = '4/3', dark, style }) {
  const bg = dark
    ? 'repeating-linear-gradient(135deg, #1a1a1a 0 8px, #141414 8px 16px)'
    : 'repeating-linear-gradient(135deg, #ededea 0 8px, #f4f3ef 8px 16px)';
  return (
    <div className="ph" style={{
      aspectRatio: ratio,
      background: bg,
      border: dark ? '1px solid rgba(245,243,238,.1)' : '1px solid var(--hair)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: '"JetBrains Mono", monospace', fontSize: 10,
      color: dark ? '#444' : '#999',
      letterSpacing: '0.05em', textTransform: 'uppercase',
      ...style,
    }}>{label}</div>
  );
}

// ── Mini mockups SVG pour les 3 projets fictifs ─────────────────────────────
// Chaque mockup = un faux écran de site web simplifié, dans un cadre type
// browser. Tout en vectoriel, pas de vraie image, pas de marque.

// ── Mockups : vrais sites lisibles, pas de barres floues ────────────────────
// Chaque mockup est un mini-site complet, avec textes, prix, navigation,
// images stylisées en CSS pur. Affichés à ~360px → tout reste lisible.

function BrowserFrame({ children, bg = '#fafaf7', url = 'cafe-aurelia.fr' }) {
  return (
    <div className="ph" style={{
      aspectRatio: '4/5',
      background: '#e9e6df',
      border: '1px solid var(--hair)',
      padding: 8,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 6, padding: '0 4px' }}>
        <span style={{ width: 7, height: 7, borderRadius: 7, background: '#fc625d' }} />
        <span style={{ width: 7, height: 7, borderRadius: 7, background: '#fdbc40' }} />
        <span style={{ width: 7, height: 7, borderRadius: 7, background: '#34c84a' }} />
        <span style={{ flex: 1, height: 14, background: '#fff', borderRadius: 3, marginLeft: 8, fontSize: 8, color: '#999', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'system-ui' }}>{url}</span>
      </div>
      <div style={{ flex: 1, background: bg, borderRadius: 2, overflow: 'hidden', position: 'relative', fontFamily: 'Inter, sans-serif' }}>{children}</div>
    </div>
  );
}

// 1. CAFÉ — chaleureux, image héro, menu produits, prix
function MockCafe() {
  const items = [
    { n: 'Espresso', p: '2,80\u00a0€' },
    { n: 'Flat White', p: '4,50\u00a0€' },
    { n: 'Pâtisserie', p: '3,90\u00a0€' },
  ];
  return (
    <BrowserFrame bg="#faf6ee" url="cafe-aurelia.fr">
      <div style={{ padding: '7px 10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(0,0,0,.06)' }}>
        <div style={{ fontFamily: '"Instrument Serif", serif', fontSize: 11, fontStyle: 'italic', color: '#3a2818' }}>Aurélia</div>
        <div style={{ display: 'flex', gap: 8, fontSize: 6, color: 'rgba(58,40,24,.6)' }}>
          <span>Carte</span><span>Histoire</span><span>Visiter</span>
        </div>
      </div>
      <div style={{ padding: '14px 10px 8px' }}>
        <div style={{ fontSize: 6, letterSpacing: '0.2em', color: 'rgba(58,40,24,.5)', marginBottom: 4 }}>CAFÉ DE QUARTIER · DEPUIS 2018</div>
        <div style={{ fontFamily: '"Instrument Serif", serif', fontSize: 19, lineHeight: 1, color: '#3a2818', letterSpacing: '-0.02em' }}>Le café qu&rsquo;on</div>
        <div style={{ fontFamily: '"Instrument Serif", serif', fontSize: 19, fontStyle: 'italic', lineHeight: 1.05, color: '#3a2818', letterSpacing: '-0.02em' }}>vient retrouver.</div>
      </div>
      <div style={{ margin: '0 10px 10px', height: 70, borderRadius: 2, background: 'linear-gradient(160deg, #c89060 0%, #6e4423 60%, #2c1809 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '20%', left: '35%', width: 28, height: 28, borderRadius: '50%', background: 'radial-gradient(circle at 35% 35%, #f4d4a8, #8a5a30)', boxShadow: '0 2px 6px rgba(0,0,0,.3)' }} />
        <div style={{ position: 'absolute', top: '32%', left: '38%', width: 22, height: 4, borderRadius: '50%', background: '#f8e8d0', opacity: .7 }} />
        <div style={{ position: 'absolute', bottom: 4, left: 6, fontSize: 5, color: '#fff', letterSpacing: '0.2em', opacity: .8 }}>OUVERT 7H — 19H</div>
      </div>
      <div style={{ padding: '0 10px' }}>
        <div style={{ fontSize: 6, letterSpacing: '0.2em', color: 'rgba(58,40,24,.5)', marginBottom: 5 }}>NOTRE CARTE</div>
        {items.map((it, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '4px 0', borderBottom: i < 2 ? '1px dotted rgba(58,40,24,.15)' : 'none' }}>
            <span style={{ fontSize: 8, color: '#3a2818', fontWeight: 500 }}>{it.n}</span>
            <span style={{ fontSize: 8, color: 'rgba(58,40,24,.6)', fontVariantNumeric: 'tabular-nums' }}>{it.p}</span>
          </div>
        ))}
      </div>
      <div style={{ padding: '8px 10px 0', display: 'flex', gap: 4 }}>
        <div style={{ flex: 1, padding: '5px 0', background: '#3a2818', color: '#faf6ee', fontSize: 7, textAlign: 'center', borderRadius: 1, letterSpacing: '0.05em' }}>Réserver</div>
        <div style={{ flex: 1, padding: '5px 0', border: '1px solid #3a2818', color: '#3a2818', fontSize: 7, textAlign: 'center', borderRadius: 1, letterSpacing: '0.05em' }}>Voir la carte</div>
      </div>
    </BrowserFrame>
  );
}

// 2. CABINET CONSEIL — pro, structuré, services + stats
function MockCabinet() {
  return (
    <BrowserFrame bg="#fbfbf9" url="meridian-conseil.fr">
      <div style={{ padding: '7px 10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(0,0,0,.08)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <div style={{ width: 8, height: 8, background: '#0a0a0a' }} />
          <span style={{ fontSize: 9, fontWeight: 600, letterSpacing: '-0.01em' }}>Meridian</span>
        </div>
        <div style={{ display: 'flex', gap: 8, fontSize: 6, color: 'rgba(0,0,0,.55)' }}>
          <span>Expertises</span><span>Équipe</span><span>Cas clients</span>
        </div>
        <div style={{ padding: '3px 8px', background: '#0a0a0a', color: '#fff', fontSize: 6, letterSpacing: '0.05em' }}>CONTACT</div>
      </div>
      <div style={{ padding: '14px 10px 12px' }}>
        <div style={{ fontSize: 6, letterSpacing: '0.18em', color: 'rgba(0,0,0,.45)', marginBottom: 6 }}>— CONSEIL EN STRATÉGIE</div>
        <div style={{ fontSize: 15, fontWeight: 500, lineHeight: 1, color: '#0a0a0a', letterSpacing: '-0.025em' }}>Décisions claires</div>
        <div style={{ fontSize: 15, fontWeight: 500, lineHeight: 1.1, color: '#0a0a0a', letterSpacing: '-0.025em', marginBottom: 6 }}>pour entreprises ambitieuses.</div>
        <div style={{ fontSize: 7, color: 'rgba(0,0,0,.55)', lineHeight: 1.4 }}>Nous accompagnons les dirigeants sur leurs décisions critiques : croissance, organisation, transformation.</div>
      </div>
      <div style={{ borderTop: '1px solid rgba(0,0,0,.1)', borderBottom: '1px solid rgba(0,0,0,.1)', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)' }}>
        {[
          { n: '01', t: 'Stratégie' },
          { n: '02', t: 'Opérations' },
          { n: '03', t: 'Transition' },
        ].map((s, i) => (
          <div key={i} style={{ padding: '8px 7px', borderRight: i < 2 ? '1px solid rgba(0,0,0,.1)' : 'none' }}>
            <div style={{ fontSize: 5, color: 'rgba(0,0,0,.4)', marginBottom: 4, letterSpacing: '0.1em' }}>{s.n}</div>
            <div style={{ fontSize: 8, fontWeight: 500, color: '#0a0a0a', marginBottom: 3 }}>{s.t}</div>
            <div style={{ fontSize: 6, color: 'rgba(0,0,0,.5)', lineHeight: 1.3 }}>Diagnostic et feuille de route.</div>
          </div>
        ))}
      </div>
      <div style={{ padding: '10px 10px', display: 'flex', justifyContent: 'space-between' }}>
        {[
          { n: '120+', l: 'missions' },
          { n: '15', l: 'consultants' },
          { n: '2014', l: 'fondé en' },
        ].map((s, i) => (
          <div key={i}>
            <div style={{ fontSize: 14, fontWeight: 500, color: '#0a0a0a', lineHeight: 1, letterSpacing: '-0.03em' }}>{s.n}</div>
            <div style={{ fontSize: 5.5, color: 'rgba(0,0,0,.5)', marginTop: 3, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{s.l}</div>
          </div>
        ))}
      </div>
      <div style={{ padding: '0 10px 8px', display: 'flex', alignItems: 'center', gap: 6 }}>
        <div style={{ flex: 1, height: 1, background: 'rgba(0,0,0,.1)' }} />
        <div style={{ fontSize: 6, color: 'rgba(0,0,0,.4)', letterSpacing: '0.1em' }}>ILS NOUS FONT CONFIANCE</div>
        <div style={{ flex: 1, height: 1, background: 'rgba(0,0,0,.1)' }} />
      </div>
      <div style={{ padding: '0 10px', display: 'flex', justifyContent: 'space-between', opacity: .6 }}>
        {['ALTAVIA', 'NORDEN', 'KAILA', 'ORÉ'].map((l) => (
          <span key={l} style={{ fontSize: 6, fontWeight: 600, letterSpacing: '0.1em', color: '#0a0a0a' }}>{l}</span>
        ))}
      </div>
    </BrowserFrame>
  );
}

// 3. ATELIER — sombre, image héro, gallery, devis express
function MockAtelier() {
  const ink = '#0d0d0d';
  const paper = '#f0ece4';
  return (
    <BrowserFrame bg={ink} url="atelier-orin.com">
      <div style={{ padding: '7px 10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(240,236,228,.1)' }}>
        <span style={{ fontSize: 9, fontWeight: 500, color: paper, letterSpacing: '0.1em' }}>ATELIER ORIN</span>
        <div style={{ display: 'flex', gap: 8, fontSize: 6, color: 'rgba(240,236,228,.5)', letterSpacing: '0.05em' }}>
          <span>Œuvres</span><span>Atelier</span><span>Commande</span>
        </div>
      </div>
      <div style={{ padding: '14px 10px 0' }}>
        <div style={{ fontSize: 6, letterSpacing: '0.2em', color: 'rgba(240,236,228,.5)', marginBottom: 6 }}>· MOBILIER & PIÈCES UNIQUES</div>
        <div style={{ fontSize: 17, fontWeight: 400, lineHeight: 1, color: paper, letterSpacing: '-0.025em' }}>Le bois travaillé</div>
        <div style={{ fontFamily: '"Instrument Serif", serif', fontSize: 17, fontStyle: 'italic', lineHeight: 1.05, color: paper, letterSpacing: '-0.02em', marginBottom: 8 }}>à la main.</div>
      </div>
      <div style={{ padding: '0 10px', display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 4, marginBottom: 8 }}>
        <div style={{ aspectRatio: '4/3', background: 'linear-gradient(135deg, #6e4823 0%, #2c1a0d 100%)', borderRadius: 1, position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: '20% 30% 30% 25%', background: 'linear-gradient(160deg, #8a5a30, #3a2410)', borderRadius: 1, boxShadow: '0 4px 12px rgba(0,0,0,.4)' }} />
          <div style={{ position: 'absolute', bottom: 4, left: 4, fontSize: 5, color: paper, opacity: .7, letterSpacing: '0.1em' }}>TABLE NORA · CHÊNE</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <div style={{ flex: 1, background: 'linear-gradient(135deg, #4a3a2a, #1f1810)', borderRadius: 1 }} />
          <div style={{ flex: 1, background: 'linear-gradient(135deg, #5a4a3a, #2a2018)', borderRadius: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(240,236,228,.6)', fontSize: 7, letterSpacing: '0.1em' }}>+24</div>
        </div>
      </div>
      <div style={{ padding: '0 10px' }}>
        {[
          { n: 'Table Nora', s: 'chêne massif · sur commande', p: '2\u00a0400\u00a0€' },
          { n: 'Banc Lior', s: 'noyer · stock', p: '890\u00a0€' },
        ].map((it, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '4px 0', borderTop: '1px solid rgba(240,236,228,.1)' }}>
            <div>
              <div style={{ fontSize: 7, color: paper, fontWeight: 500 }}>{it.n}</div>
              <div style={{ fontSize: 5.5, color: 'rgba(240,236,228,.5)', marginTop: 2 }}>{it.s}</div>
            </div>
            <div style={{ fontSize: 7, color: paper, fontVariantNumeric: 'tabular-nums' }}>{it.p}</div>
          </div>
        ))}
      </div>
      <div style={{ position: 'absolute', bottom: 8, left: 10, right: 10, padding: '6px 10px', background: paper, color: ink, borderRadius: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontSize: 7, fontWeight: 500 }}>Devis personnalisé</div>
          <div style={{ fontSize: 5.5, color: 'rgba(13,13,13,.6)', marginTop: 1 }}>réponse en 48\u00a0h</div>
        </div>
        <div style={{ fontSize: 6, letterSpacing: '0.1em' }}>DEMANDER →</div>
      </div>
    </BrowserFrame>
  );
}

const MOCKS = { cafe: MockCafe, cabinet: MockCabinet, atelier: MockAtelier };

function Eyebrow({ children, dash = true }) {
  return (
    <div className="eyebrow">
      {dash && <span className="dash" />}
      <span className="mono">{children}</span>
    </div>
  );
}

// ── Sections ───────────────────────────────────────────────────────────────
function Nav({ t, lang, setLang }) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const f = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', f, { passive: true });
    return () => window.removeEventListener('scroll', f);
  }, []);
  return (
    <div style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: scrolled ? 'rgba(250,250,247,.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px) saturate(160%)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(12px) saturate(160%)' : 'none',
      borderBottom: scrolled ? '1px solid var(--hair)' : '1px solid transparent',
      transition: 'all .25s',
    }}>
      <div className="wrap" style={{ padding: '20px 56px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
        <a href="#top" style={{ fontWeight: 600, fontSize: 15, letterSpacing: '-0.01em', display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ display: 'inline-block', width: 8, height: 8, borderRadius: 8, background: 'var(--ink)' }} />
          TRADE
        </a>
        <div style={{ display: 'flex', gap: 32 }}>
          {t.nav.map((n) => (
            <a key={n.href} href={n.href} className="nav-link" style={{ fontSize: 13, color: 'var(--muted)' }}>{n.label}</a>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div className="lang-toggle">
            <button className={lang === 'fr' ? 'on' : ''} onClick={() => setLang('fr')}>FR</button>
            <button className={lang === 'en' ? 'on' : ''} onClick={() => setLang('en')}>EN</button>
          </div>
          <a href={MAILTO()} className="btn btn-ghost" style={{ padding: '8px 16px', fontSize: 13 }}>{t.cta_top}</a>
        </div>
      </div>
    </div>
  );
}

function Hero({ t, lang }) {
  return (
    <section id="top" style={{ padding: '120px 0 100px', borderBottom: '1px solid var(--hair)' }}>
      <div className="wrap">
        <div className="reveal">
          <Eyebrow>{t.hero_eyebrow}</Eyebrow>
        </div>
        <h1 className="reveal" data-d="1" style={{ fontSize: 'clamp(48px, 7vw, 96px)', lineHeight: 1, fontWeight: 500, letterSpacing: '-0.035em', margin: 0, maxWidth: 1100, textWrap: 'balance' }}>
          {t.hero_title_a} <em className="serif" style={{ fontStyle: 'italic', fontSize: '1.05em' }}>{t.hero_title_em}</em> {t.hero_title_b}
        </h1>
        <div className="reveal" data-d="2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, marginTop: 56, alignItems: 'end' }}>
          <p style={{ fontSize: 18, lineHeight: 1.5, color: 'var(--muted)', maxWidth: 540, margin: 0 }}>{t.hero_lede}</p>
          <div style={{ display: 'flex', gap: 12, justifySelf: 'end', flexWrap: 'wrap' }}>
            <a href={MAILTO()} className="btn btn-primary">{t.cta_primary} →</a>
            <a href="#work" className="btn btn-ghost">{t.cta_secondary}</a>
          </div>
        </div>
        <div className="reveal" data-d="3" style={{ marginTop: 80, paddingTop: 32, borderTop: '1px solid var(--hair)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: 'var(--muted)' }}>
            <span style={{ position: 'relative', display: 'inline-block', width: 8, height: 8 }}>
              <span style={{ position: 'absolute', inset: 0, borderRadius: 8, background: '#1aa358' }} />
              <span style={{ position: 'absolute', inset: -3, borderRadius: 8, background: '#1aa358', opacity: .25, animation: 'ping 2s infinite' }} />
            </span>
            {t.available}
          </div>
          <div className="mono">{lang === 'fr' ? '↓ Faites défiler' : '↓ Scroll'}</div>
        </div>
        <style>{`@keyframes ping{0%{transform:scale(1);opacity:.5}80%,100%{transform:scale(2.4);opacity:0}}`}</style>
      </div>
    </section>
  );
}

function Marquee({ t }) {
  // double the items so the loop is seamless
  const items = [...t.marquee, ...t.marquee, ...t.marquee, ...t.marquee];
  return (
    <div style={{ padding: '40px 0', borderBottom: '1px solid var(--hair)', overflow: 'hidden', background: 'var(--paper)' }}>
      <div className="marquee-track">
        {items.map((it, i) => (
          <span key={i} className="marquee-item">
            {it}
            <span className="dot" />
          </span>
        ))}
      </div>
    </div>
  );
}

function Stats({ t }) {
  return (
    <section style={{ padding: '80px 0', borderBottom: '1px solid var(--hair)', background: 'var(--cream)' }}>
      <div className="wrap">
        <div className="reveal" style={{ marginBottom: 48 }}><Eyebrow>{t.stats_kicker}</Eyebrow></div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, background: 'var(--hair)', border: '1px solid var(--hair)' }}>
          {t.stats.map((s, i) => (
            <div key={i} className="reveal" data-d={i} style={{ background: 'var(--paper)', padding: '40px 32px' }}>
              <div className="stat-num">{s.n}</div>
              <div style={{ fontSize: 13, color: 'var(--muted)', marginTop: 12 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services({ t }) {
  return (
    <section id="services">
      <div className="wrap">
        <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: 56, marginBottom: 64 }}>
          <Eyebrow>{t.services_kicker}</Eyebrow>
          <h2 style={{ fontSize: 'clamp(28px, 3.2vw, 40px)', fontWeight: 500, letterSpacing: '-0.02em', maxWidth: 800, lineHeight: 1.15 }}>{t.services_title}</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, background: 'var(--hair)', border: '1px solid var(--hair)' }}>
          {t.services.map((s, i) => (
            <div key={s.n} className="reveal" data-d={i} style={{ background: 'var(--paper)', padding: '40px 32px', display: 'flex', flexDirection: 'column', minHeight: 420 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 24 }}>
                <span className="mono">{s.n}</span>
                <span className="mono" style={{ color: 'var(--ink)' }}>{s.price}</span>
              </div>
              <h3 style={{ fontSize: 24, marginBottom: 12 }}>{s.t}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.55, color: 'var(--muted)', marginBottom: 24, flex: 1 }}>{s.d}</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: 13, color: 'var(--ink)' }}>
                {s.bullets.map((b) => (
                  <li key={b} style={{ padding: '8px 0', borderTop: '1px solid var(--hair)', display: 'flex', alignItems: 'center', gap: 10 }}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 5l2 2 4-4"/></svg>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Work({ t }) {
  return (
    <section id="work">
      <div className="wrap">
        <div className="reveal" style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 16, flexWrap: 'wrap', gap: 16 }}>
          <Eyebrow>{t.work_kicker}</Eyebrow>
          <h2 style={{ fontSize: 'clamp(28px, 3.2vw, 40px)', fontWeight: 500 }}>{t.work_title}</h2>
        </div>
        <p className="reveal" data-d="1" style={{ fontSize: 16, color: 'var(--muted)', maxWidth: 540, marginBottom: 56 }}>{t.work_sub}</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {t.work.map((w, i) => {
            const Mock = MOCKS[w.id] || (() => <Placeholder label={w.t} ratio="4/5" />);
            return (
            <a key={w.t} href="#" className="proj reveal" data-d={i} style={{ display: 'block' }}>
              <Mock />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: 16, gap: 12 }}>
                <div>
                  <div style={{ fontSize: 17, fontWeight: 500, letterSpacing: '-0.01em' }}>{w.t}</div>
                  <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 4 }}>{w.c}</div>
                </div>
                <div className="proj-tag" style={{ fontSize: 11, padding: '4px 10px', border: '1px solid var(--hair)', borderRadius: 999, color: 'var(--muted)', height: 'fit-content', whiteSpace: 'nowrap' }}>{w.tag}</div>
              </div>
              <div style={{ fontSize: 13, color: 'var(--ink)', marginTop: 12, paddingTop: 12, borderTop: '1px solid var(--hair)', display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ width: 6, height: 6, borderRadius: 6, background: '#1aa358' }} />
                {w.metric}
              </div>
            </a>
          );})}
        </div>
      </div>
    </section>
  );
}

function Process({ t }) {
  return (
    <section id="process" style={{ background: 'var(--paper-2)' }}>
      <div className="wrap">
        <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: 56, marginBottom: 64 }}>
          <Eyebrow>{t.process_kicker}</Eyebrow>
          <h2 style={{ fontSize: 'clamp(28px, 3.2vw, 40px)', fontWeight: 500, letterSpacing: '-0.02em', maxWidth: 700 }}>{t.process_title}</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32, position: 'relative' }}>
          <div style={{ position: 'absolute', top: 24, left: '12.5%', right: '12.5%', height: 1, background: 'var(--hair-2)' }} />
          {t.process.map((p, i) => (
            <div key={p.t} className="reveal" data-d={i} style={{ position: 'relative' }}>
              <div style={{ width: 48, height: 48, borderRadius: 48, background: 'var(--paper)', border: '1px solid var(--ink)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: '"JetBrains Mono", monospace', fontSize: 11, fontWeight: 500, marginBottom: 24, position: 'relative', zIndex: 1 }}>{p.d}</div>
              <h3 style={{ fontSize: 20, marginBottom: 8 }}>{p.t}</h3>
              <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.55 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Edge({ t }) {
  return (
    <section>
      <div className="wrap">
        <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: 56, marginBottom: 64 }}>
          <Eyebrow>{t.edge_kicker}</Eyebrow>
          <h2 style={{ fontSize: 'clamp(28px, 3.2vw, 40px)', fontWeight: 500 }}>{t.edge_title}</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 64 }}>
          {t.edges.map((e, i) => (
            <div key={e.t} className="reveal" data-d={i}>
              <div className="mono" style={{ marginBottom: 24 }}>0{i + 1}</div>
              <h3 style={{ fontSize: 28, marginBottom: 16, lineHeight: 1.1 }}>{e.t}</h3>
              <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.6 }}>{e.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials({ t }) {
  const [idx, setIdx] = React.useState(0);
  const items = t.testimonials;
  const [paused, setPaused] = React.useState(false);
  React.useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIdx((i) => (i + 1) % items.length), 5000);
    return () => clearInterval(id);
  }, [paused, items.length]);
  return (
    <section style={{ background: 'var(--ink)', color: 'var(--paper)', borderBottom: 'none' }} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="wrap">
        <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: 56, marginBottom: 64 }}>
          <div className="mono" style={{ color: 'var(--muted-2)' }}><span className="dash" style={{ display: 'inline-block', width: 32, height: 1, background: 'var(--muted-2)', verticalAlign: 'middle', marginRight: 12 }} />{t.testi_kicker}</div>
          <h2 style={{ fontSize: 'clamp(28px, 3.2vw, 40px)', fontWeight: 500 }}>{t.testi_title}</h2>
        </div>
        <div className="reveal" data-d="1" style={{ minHeight: 280, position: 'relative' }}>
          <div key={idx} style={{ animation: 'fadein .5s ease' }}>
            <p className="serif" style={{ fontSize: 'clamp(28px, 3.6vw, 44px)', fontStyle: 'italic', lineHeight: 1.25, fontWeight: 400, maxWidth: 1100, textWrap: 'balance' }}>“{items[idx].q}”</p>
            <div style={{ marginTop: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
              <div>
                <div style={{ fontSize: 16, fontWeight: 500 }}>{items[idx].a}</div>
                <div style={{ fontSize: 13, color: 'var(--muted-2)', marginTop: 4 }}>{items[idx].r}</div>
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                {items.map((_, i) => (
                  <button key={i} onClick={() => setIdx(i)} style={{ width: 40, height: 4, background: 'rgba(250,250,247,.2)', border: 'none', padding: 0, cursor: 'pointer', position: 'relative', overflow: 'hidden' }} aria-label={`Témoignage ${i + 1}`}>
                    {i === idx && !paused && <span style={{ position: 'absolute', inset: 0, background: 'var(--paper)', transformOrigin: 'left', animation: 'progressbar 5s linear forwards' }} />}
                    {i === idx && paused && <span style={{ position: 'absolute', inset: 0, background: 'var(--paper)' }} />}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`@keyframes progressbar{from{transform:scaleX(0)}to{transform:scaleX(1)}}`}</style>
    </section>
  );
}

function Pricing({ t, lang }) {
  return (
    <section id="pricing" style={{ background: 'var(--cream)' }}>
      <div className="wrap">
        <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: 56, marginBottom: 16 }}>
          <Eyebrow>{t.pricing_kicker}</Eyebrow>
          <h2 style={{ fontSize: 'clamp(28px, 3.2vw, 40px)', fontWeight: 500 }}>{t.pricing_title}</h2>
        </div>
        <p className="reveal" data-d="1" style={{ fontSize: 16, color: 'var(--muted)', maxWidth: 540, marginBottom: 56, marginLeft: 'calc(25% + 14px)' }}>{t.pricing_sub}</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {t.pricing.map((p, i) => (
            <div key={p.t} className="reveal" data-d={i} style={{
              border: p.featured ? '1px solid var(--ink)' : '1px solid var(--hair)',
              background: p.featured ? 'var(--ink)' : 'var(--paper)',
              color: p.featured ? 'var(--paper)' : 'var(--ink)',
              padding: '40px 32px',
              display: 'flex', flexDirection: 'column',
              borderRadius: 4,
              position: 'relative',
            }}>
              {p.featured && (
                <div style={{ position: 'absolute', top: -1, right: 24, background: 'var(--paper)', color: 'var(--ink)', fontFamily: '"JetBrains Mono", monospace', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '4px 10px', border: '1px solid var(--ink)' }}>{lang === 'fr' ? 'Recommandé' : 'Recommended'}</div>
              )}
              <div style={{ fontSize: 14, fontWeight: 500, marginBottom: 8 }}>{p.t}</div>
              <div style={{ fontSize: 13, color: p.featured ? 'rgba(250,250,247,.6)' : 'var(--muted)', marginBottom: 24 }}>{p.for}</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 6 }}>
                <span style={{ fontSize: 48, fontWeight: 500, letterSpacing: '-0.03em' }}>{p.price}</span>
              </div>
              <div style={{ fontSize: 12, color: p.featured ? 'rgba(250,250,247,.6)' : 'var(--muted)', marginBottom: 28 }}>{p.sub}</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: 13, flex: 1, marginBottom: 24 }}>
                {p.inc.map((b) => (
                  <li key={b} style={{ padding: '10px 0', borderTop: p.featured ? '1px solid rgba(250,250,247,.15)' : '1px solid var(--hair)', display: 'flex', alignItems: 'center', gap: 10 }}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 5l2 2 4-4"/></svg>
                    {b}
                  </li>
                ))}
              </ul>
              <a href={MAILTO(p.t + ' · ' + p.price)} className={p.featured ? 'btn' : 'btn'} style={{
                background: p.featured ? 'var(--paper)' : 'var(--ink)',
                color: p.featured ? 'var(--ink)' : 'var(--paper)',
                justifyContent: 'center',
              }}>{p.cta} →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ({ t }) {
  return (
    <section id="faq" style={{ background: 'var(--paper-2)' }}>
      <div className="wrap">
        <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: 56, marginBottom: 64 }}>
          <Eyebrow>{t.faq_kicker}</Eyebrow>
          <h2 style={{ fontSize: 'clamp(28px, 3.2vw, 40px)', fontWeight: 500, maxWidth: 700 }}>{t.faq_title}</h2>
        </div>
        <div style={{ marginLeft: 'calc(25% + 14px)' }}>
          {t.faq.map((f, i) => (
            <details key={i} className="faq reveal" data-d={Math.min(i, 4)} {...(i === 0 ? { open: true } : {})}>
              <summary>
                <span style={{ fontSize: 19, fontWeight: 500, letterSpacing: '-0.01em' }}>{f.q}</span>
                <span className="plus" />
              </summary>
              <div className="answer">{f.a}</div>
            </details>
          ))}
          <div style={{ borderTop: '1px solid var(--hair)' }} />
        </div>
      </div>
    </section>
  );
}

function Contact({ t, lang }) {
  return (
    <section id="contact" style={{ borderBottom: 'none' }}>
      <div className="wrap">
        <div className="reveal"><Eyebrow>{t.contact_kicker}</Eyebrow></div>
        <h2 className="reveal" data-d="1" style={{ fontSize: 'clamp(40px, 6vw, 80px)', fontWeight: 500, letterSpacing: '-0.03em', maxWidth: 1000, lineHeight: 1.02, textWrap: 'balance' }}>{t.contact_title}</h2>
        <div className="reveal" data-d="2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, marginTop: 56, alignItems: 'start' }}>
          <div>
            <p style={{ fontSize: 16, color: 'var(--muted)', lineHeight: 1.6, maxWidth: 460 }}>{t.contact_sub}</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 32 }}>
              <a href={MAILTO()} className="btn btn-primary">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M1 3h12v8H1z M1 3l6 5 6-5"/></svg>
                {MAIL}
              </a>
              <a href={MAILTO_SAM()} className="btn btn-ghost" style={{ borderColor: 'var(--hair-2)' }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M1 3h12v8H1z M1 3l6 5 6-5"/></svg>
                {MAIL_SAM}
              </a>
              <a href={INSTA} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ borderColor: 'var(--hair-2)' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
                {INSTA_HANDLE}
              </a>
            </div>
            <div style={{ marginTop: 40, paddingTop: 32, borderTop: '1px solid var(--hair)' }}>
              <div className="mono" style={{ marginBottom: 16 }}>{lang === 'fr' ? 'Réponse garantie' : 'Guaranteed reply'}</div>
              <div style={{ fontSize: 16 }}>{lang === 'fr' ? 'Sous 24\u00a0heures ouvrées · Avec une première proposition concrète' : 'Within 24 business hours · With a first concrete proposal'}</div>
            </div>
          </div>
          <form onSubmit={(e) => { e.preventDefault(); const f = e.currentTarget; const body = `${f.name.value}\n${f.email.value}\n${f.biz.value}\n\n${f.msg.value}`; window.location.href = `mailto:${MAIL}?subject=${encodeURIComponent('Projet · ' + f.biz.value)}&body=${encodeURIComponent(body)}`; }}
            style={{ display: 'flex', flexDirection: 'column', gap: 0, border: '1px solid var(--hair)', borderRadius: 4, background: 'var(--paper)' }}>
            {[
              { n: 'name', l: t.contact_form_l1 },
              { n: 'email', l: t.contact_form_l2, type: 'email' },
              { n: 'biz', l: t.contact_form_l3 },
            ].map((f) => (
              <label key={f.n} style={{ borderBottom: '1px solid var(--hair)', padding: '14px 18px', display: 'block' }}>
                <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', display: 'block', marginBottom: 4 }}>{f.l}</span>
                <input name={f.n} type={f.type || 'text'} required style={{ width: '100%', border: 'none', outline: 'none', font: 'inherit', fontSize: 15, color: 'var(--ink)', background: 'transparent' }} />
              </label>
            ))}
            <label style={{ padding: '14px 18px', display: 'block' }}>
              <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', display: 'block', marginBottom: 4 }}>{t.contact_form_l4}</span>
              <textarea name="msg" rows="4" required style={{ width: '100%', border: 'none', outline: 'none', font: 'inherit', fontSize: 15, color: 'var(--ink)', background: 'transparent', resize: 'vertical' }} />
            </label>
            <button type="submit" className="btn btn-primary" style={{ borderRadius: 0, padding: '18px', justifyContent: 'center' }}>{t.contact_form_send} →</button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer({ t, lang }) {
  return (
    <footer style={{ borderTop: '1px solid var(--hair)', padding: '64px 0 32px', background: 'var(--paper)' }}>
      <div className="wrap">
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, marginBottom: 56 }}>
          <div>
            <div style={{ fontWeight: 600, fontSize: 17, letterSpacing: '-0.01em', marginBottom: 12 }}>TRADE</div>
            <p style={{ fontSize: 14, color: 'var(--muted)', maxWidth: 360, lineHeight: 1.5 }}>{lang === 'fr' ? 'Atelier web indépendant. Sites livrés en une semaine, pour les entreprises locales.' : 'Independent web studio. Sites delivered in one week, for local businesses.'}</p>
          </div>
          <div>
            <div className="mono" style={{ marginBottom: 16 }}>{lang === 'fr' ? 'Contact' : 'Contact'}</div>
            <a href={MAILTO()} style={{ fontSize: 14, display: 'block', marginBottom: 6 }}>{MAIL}</a>
            <div style={{ fontSize: 13, color: 'var(--muted)' }}>{t.footer_addr}</div>
          </div>
          <div>
            <div className="mono" style={{ marginBottom: 16 }}>{lang === 'fr' ? 'Services' : 'Services'}</div>
            {t.services.map((s) => (
              <a key={s.t} href="#services" className="nav-link" style={{ fontSize: 14, display: 'block', marginBottom: 6, color: 'var(--ink)' }}>{s.t}</a>
            ))}
          </div>
          <div>
            <div className="mono" style={{ marginBottom: 16 }}>{lang === 'fr' ? 'Liens' : 'Links'}</div>
            {t.footer_links.map((l) => (
              <button key={l.k} onClick={() => window.dispatchEvent(new CustomEvent('open-legal', { detail: l.k }))} className="nav-link" style={{ fontSize: 14, display: 'block', marginBottom: 6, color: 'var(--ink)', background: 'none', border: 'none', padding: 0, cursor: 'pointer', textAlign: 'left', fontFamily: 'inherit' }}>{l.label}</button>
            ))}
          </div>
        </div>
        <div style={{ paddingTop: 24, borderTop: '1px solid var(--hair)', display: 'flex', justifyContent: 'space-between', fontSize: 12, color: 'var(--muted)' }}>
          <div>{t.footer_left}</div>
          <div>{t.footer_right}</div>
        </div>
      </div>
    </footer>
  );
}

// ── Legal Modal ───────────────────────────────────────────────────────────
const LEGAL_COPY = {
  fr: {
    legal: {
      title: 'Mentions légales',
      blocks: [
        ['Éditeurs du site', 'TRADE — atelier web indépendant. Le site portfolio est édité conjointement par Samuel Sartip et son associé YMZ.'],
        ['Contact', `Email général : ${MAIL}\nEmail Samuel : ${MAIL_SAM}`],
        ['Hébergement', 'Le site est hébergé sur une infrastructure sécurisée. Coordonnées de l’hébergeur communiquées sur demande.'],
        ['Propriété intellectuelle', 'Tous les contenus présents sur ce site (textes, images, code, design) sont la propriété de leurs auteurs respectifs. Toute reproduction sans accord préalable écrit est interdite.'],
        ['Responsabilité', 'Les exemples de réalisations présentés sont à but démonstratif. Les vrais projets clients sont confidentiels et publiés uniquement avec leur accord.'],
      ],
    },
    privacy: {
      title: 'Politique de confidentialité',
      blocks: [
        ['Données collectées', 'Lorsque vous nous écrivez via le formulaire de contact ou par email, nous collectons uniquement les informations que vous nous transmettez : nom, email, activité, contenu du message.'],
        ['Utilisation', 'Ces données servent uniquement à vous répondre et à étudier votre projet. Elles ne sont jamais revendues, partagées ou utilisées à des fins marketing.'],
        ['Conservation', 'Les emails sont conservés pendant la durée de la relation commerciale, puis archivés ou supprimés sur demande.'],
        ['Vos droits', `Vous pouvez demander à tout moment l’accès, la modification ou la suppression de vos données. Écrivez-nous à ${MAIL}.`],
        ['Cookies', 'Ce site n’utilise aucun cookie de tracking ni d’analytics tiers.'],
      ],
    },
    contact: {
      title: 'Nous contacter',
      blocks: [
        ['Email principal', `${MAIL}\nPremière réponse sous 24 heures ouvrées avec une proposition concrète.`],
        ['Email Samuel', `${MAIL_SAM}\nPour les questions techniques ou liées au design.`],
        ['Délais de réponse', 'Du lundi au vendredi, 9h–19h (heure de Paris). Le week-end, on prend le temps de réfléchir avant de répondre.'],
        ['Format préféré', 'Un email court avec votre activité, ce que vous cherchez, et un délai si vous en avez un. C’est souvent suffisant pour démarrer.'],
      ],
    },
  },
  en: {
    legal: {
      title: 'Legal notice',
      blocks: [
        ['Site editors', 'TRADE — independent web studio. The portfolio site is jointly edited by Samuel Sartip and his partner YMZ.'],
        ['Contact', `General email: ${MAIL}\nSamuel’s email: ${MAIL_SAM}`],
        ['Hosting', 'The site is hosted on secure infrastructure. Hosting provider details available on request.'],
        ['Intellectual property', 'All content on this site (text, images, code, design) is the property of its respective authors. Reproduction without prior written consent is prohibited.'],
        ['Liability', 'Sample work shown is for demonstration purposes. Real client projects are confidential and only published with their consent.'],
      ],
    },
    privacy: {
      title: 'Privacy policy',
      blocks: [
        ['Data collected', 'When you write to us via the contact form or by email, we only collect the information you give us: name, email, business, message content.'],
        ['Usage', 'This data is used only to reply to you and study your project. It is never sold, shared, or used for marketing.'],
        ['Retention', 'Emails are kept for the duration of the commercial relationship, then archived or deleted on request.'],
        ['Your rights', `You may request access, modification, or deletion of your data at any time. Write to ${MAIL}.`],
        ['Cookies', 'This site uses no tracking cookies or third-party analytics.'],
      ],
    },
    contact: {
      title: 'Contact us',
      blocks: [
        ['Main email', `${MAIL}\nFirst reply within 24 business hours with a concrete proposal.`],
        ['Samuel’s email', `${MAIL_SAM}\nFor technical or design-related questions.`],
        ['Response times', 'Monday to Friday, 9am–7pm (Paris time). On weekends, we take time to think before replying.'],
        ['Preferred format', 'A short email with your business, what you’re looking for, and a deadline if you have one. Usually enough to start.'],
      ],
    },
  },
};

function LegalModal({ lang }) {
  const [open, setOpen] = React.useState(null);
  React.useEffect(() => {
    const h = (e) => setOpen(e.detail);
    window.addEventListener('open-legal', h);
    const esc = (e) => { if (e.key === 'Escape') setOpen(null); };
    window.addEventListener('keydown', esc);
    return () => { window.removeEventListener('open-legal', h); window.removeEventListener('keydown', esc); };
  }, []);
  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);
  if (!open) return null;
  const c = LEGAL_COPY[lang][open];
  if (!c) return null;
  return (
    <div className="modal-overlay" onClick={() => setOpen(null)}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={() => setOpen(null)} aria-label="Close">×</button>
        <div className="mono" style={{ marginBottom: 12 }}>{lang === 'fr' ? 'Information' : 'Information'}</div>
        <h3>{c.title}</h3>
        {c.blocks.map(([h, p], i) => (
          <div key={i}>
            <h4>{h}</h4>
            <p style={{ whiteSpace: 'pre-line' }}>{p}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── App ────────────────────────────────────────────────────────────────────
function App() {
  const [lang, setLang] = React.useState(() => {
    try { return localStorage.getItem('sy.lang') || 'fr'; } catch (e) { return 'fr'; }
  });
  React.useEffect(() => {
    try { localStorage.setItem('sy.lang', lang); } catch (e) {}
    document.documentElement.lang = lang;
  }, [lang]);

  const t = T[lang];
  useReveal();

  return (
    <>
      <Nav t={t} lang={lang} setLang={setLang} />
      <Hero t={t} lang={lang} />
      <Marquee t={t} />
      <Stats t={t} />
      <Work t={t} />
      <Services t={t} />
      <Process t={t} />
      <Edge t={t} />
      <Pricing t={t} lang={lang} />
      <FAQ t={t} />
      <Contact t={t} lang={lang} />
      <Footer t={t} lang={lang} />
      <LegalModal lang={lang} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
