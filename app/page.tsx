const heures = [
  { h: "13 h", etat: "pris", label: "Mme Lefort" },
  { h: "14 h", etat: "pris", label: "M. Diallo" },
  { h: "15 h", etat: "trou", label: "Annulé à 11 h 04" },
  { h: "16 h", etat: "pris", label: "Mme Roux" },
];

const benefices = [
  { t: "Tes clients s'inscrivent seuls", d: "Ils laissent leur nom sur ta page d'attente. Tu n'as rien à saisir." },
  { t: "Le créneau part dans la minute", d: "Dès que tu libères une heure, les bonnes personnes sont prévenues." },
  { t: "Le premier qui confirme l'obtient", d: "Ton agenda se met à jour. Tu vois combien d'euros tu as récupérés." },
];

export default function Accueil() {
  return (
    <main className="mx-auto max-w-xl px-5 pb-28 pt-8 md:max-w-3xl md:pt-16">
      <p className="font-titre text-lg font-bold text-sapin">Créneau Plein</p>

      <h1 className="font-titre mt-8 text-[2.6rem] font-extrabold leading-[1.02] tracking-tight text-sapin md:text-7xl">
        Un rendez-vous annulé est reproposé dans la minute.
      </h1>

      <p className="mt-5 max-w-md text-lg leading-snug">
        Annulation à 11 h, trou à 15 h : <strong className="font-titre text-2xl font-extrabold text-signal">60 € perdus</strong>, et ils ne se rattrapent jamais.
      </p>

      <div className="mt-8 border border-sapin/30 bg-white/40 p-3" aria-label="Exemple d'agenda">
        {heures.map((r) => (
          <div key={r.h} className="flex items-stretch gap-3 border-b border-trait py-1 last:border-b-0">
            <span className="w-10 shrink-0 pt-2 text-sm text-sapin/70">{r.h}</span>
            {r.etat === "pris" ? (
              <div className="flex-1 bg-sapin px-3 py-2 text-sm font-medium text-papier">{r.label}</div>
            ) : (
              <div className="rayures relative flex-1 overflow-hidden border border-dashed border-sapin/50 px-3 py-2 text-sm font-medium">
                <div className="remplit absolute inset-0 bg-signal" />
                <span className="relative">{r.label}</span>
              </div>
            )}
          </div>
        ))}
        <p className="mt-2 text-sm text-sapin/80">11 h 05 : Julie confirme. Le 15 h est repris.</p>
      </div>

      <a
        href="#acces"
        className="mt-8 block w-full bg-signal px-6 py-5 text-center font-titre text-xl font-bold text-white active:translate-y-px focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-sapin md:inline-block md:w-auto md:px-12"
      >
        Commencer, c'est gratuit
      </a>

      <ul className="mt-14 space-y-6 border-t-2 border-sapin pt-8">
        {benefices.map((b) => (
          <li key={b.t}>
            <h2 className="font-titre text-xl font-bold text-sapin">{b.t}</h2>
            <p className="mt-1 max-w-md leading-snug">{b.d}</p>
          </li>
        ))}
      </ul>

      <section id="acces" className="mt-14 bg-sapin p-6 text-papier">
        <h2 className="font-titre text-2xl font-bold">Accès anticipé</h2>
        <p className="mt-2 leading-snug">
          Créneau Plein est en construction. Les premiers inscrits l'ont à 29 € par mois, sans engagement, et remboursés s'ils ne sont pas satisfaits. L'inscription ouvre très bientôt sur cette page.
        </p>
      </section>
    </main>
  );
}
