// app.jsx — host du portfolio. Affiche les 4 wireframes côte à côte
// dans un design canvas, et expose un panneau Tweaks pour switcher
// langue + densité d'aperçu.

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "lang": "fr",
  "viewWidth": 1280,
  "viewHeight": 1700
}/*EDITMODE-END*/;

// Note utile au-dessus de chaque artboard
function Note({ children }) {
  return (
    <div style={{
      fontFamily: '"JetBrains Mono", monospace',
      fontSize: 10,
      color: '#999',
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      marginBottom: 8,
    }}>{children}</div>
  );
}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const W = t.viewWidth;
  const H = t.viewHeight;

  return (
    <>
      <DesignCanvas>
        <DCSection
          id="intro"
          title="Portfolio — Samuel & YMZ"
          subtitle="4 directions wireframe · minimal noir & blanc · FR/EN"
        >
          <DCArtboard id="brief" label="Brief" width={520} height={H}>
            <div style={{ padding: '56px 48px', fontFamily: 'Inter, sans-serif', color: 'var(--ink)', height: '100%', overflow: 'hidden' }}>
              <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 10, color: 'var(--muted)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 32 }}>— Brief</div>
              <h1 style={{ fontSize: 38, fontWeight: 500, letterSpacing: '-0.025em', lineHeight: 1.05, margin: 0 }}>4 directions pour un même portfolio.</h1>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--muted)', marginTop: 24 }}>
                Toutes minimal noir &amp; blanc, mais avec des partis pris très différents. L'idée :
                que tu puisses comparer en un coup d'œil et choisir laquelle on développe en haute fidélité.
              </p>

              <div style={{ marginTop: 40, paddingTop: 24, borderTop: '1px solid var(--hair)' }}>
                <div style={{ fontSize: 13, fontWeight: 500, marginBottom: 16 }}>Système commun</div>
                <ul style={{ fontSize: 13, lineHeight: 1.7, color: 'var(--muted)', paddingLeft: 16, margin: 0 }}>
                  <li>Inter (corps) + Instrument Serif (titres éditoriaux)</li>
                  <li>JetBrains Mono pour les eyebrows / numéros</li>
                  <li>Encre <code>#0a0a0a</code> · Papier <code>#fafaf7</code> · Hairline <code>#e6e3dd</code></li>
                  <li>Aucune image inventée — placeholders monospace</li>
                  <li>Tous les CTA pointent vers <code>ymzz7x.contact@gmail.com</code></li>
                  <li>FR par défaut, toggle EN dans les Tweaks</li>
                </ul>
              </div>

              <div style={{ marginTop: 32, paddingTop: 24, borderTop: '1px solid var(--hair)' }}>
                <div style={{ fontSize: 13, fontWeight: 500, marginBottom: 16 }}>Les 4 directions →</div>
                <ol style={{ fontSize: 13, lineHeight: 1.8, color: 'var(--ink)', paddingLeft: 20, margin: 0 }}>
                  <li><b>Corporate Grid</b> — classique pro, rassurant</li>
                  <li><b>Editorial Serif</b> — magazine, haut de gamme</li>
                  <li><b>Swiss Bento</b> — moderne, structuré, cartes arrondies</li>
                  <li><b>Dark Studio</b> — confidentiel, posture créative</li>
                </ol>
              </div>

              <div style={{ marginTop: 32, paddingTop: 24, borderTop: '1px solid var(--hair)' }}>
                <div style={{ fontSize: 13, fontWeight: 500, marginBottom: 12 }}>Comment naviguer</div>
                <p style={{ fontSize: 12, lineHeight: 1.6, color: 'var(--muted)', margin: 0 }}>
                  Drag pour panner, molette/pinch pour zoomer. Clique l'icône en haut-droite d'un artboard pour le mettre en plein écran. Utilise le panneau <b>Tweaks</b> en bas-droite pour changer la langue.
                </p>
              </div>
            </div>
          </DCArtboard>

          <DCArtboard id="v1" label="V1 · Corporate Grid" width={W} height={H}>
            <V1Corporate lang={t.lang} />
          </DCArtboard>

          <DCArtboard id="v2" label="V2 · Editorial Serif" width={W} height={H}>
            <V2Editorial lang={t.lang} />
          </DCArtboard>

          <DCArtboard id="v3" label="V3 · Swiss Bento" width={W} height={H}>
            <V3Swiss lang={t.lang} />
          </DCArtboard>

          <DCArtboard id="v4" label="V4 · Dark Studio" width={W} height={H}>
            <V4Dark lang={t.lang} />
          </DCArtboard>
        </DCSection>
      </DesignCanvas>

      <TweaksPanel title="Tweaks">
        <TweakSection label="Langue" />
        <TweakRadio
          label="Language"
          value={t.lang}
          options={['fr', 'en']}
          onChange={(v) => setTweak('lang', v)}
        />
        <TweakSection label="Aperçu" />
        <TweakSlider
          label="Largeur d'artboard"
          value={t.viewWidth}
          min={1024}
          max={1600}
          step={16}
          unit="px"
          onChange={(v) => setTweak('viewWidth', v)}
        />
        <TweakSlider
          label="Hauteur d'artboard"
          value={t.viewHeight}
          min={1200}
          max={2400}
          step={50}
          unit="px"
          onChange={(v) => setTweak('viewHeight', v)}
        />
        <TweakSection label="Choix final" />
        <div style={{ fontSize: 11, color: '#6b6b66', lineHeight: 1.5, padding: '4px 0' }}>
          Quand tu as choisi une direction, dis-moi simplement V1, V2, V3 ou V4 et on passe en haute fidélité avec contenu réel + interactions.
        </div>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
