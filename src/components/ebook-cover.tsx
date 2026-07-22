import { siteConfig } from "@/config/site";

export function EbookCover() {
  return (
    <div
      className="relative aspect-[5/7] overflow-hidden rounded-[1.6rem] border border-brand/15 bg-[#fff8fb] shadow-[0_30px_70px_rgba(73,8,37,0.24)]"
      aria-label="Capa provisória do eBook Cinquentei"
    >
      <div className="absolute -left-16 -top-20 size-56 rounded-full bg-brand/16" aria-hidden="true" />
      <div className="absolute -right-20 bottom-24 size-64 rounded-full bg-rose/35" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-[26%] bg-wine" aria-hidden="true" />

      <div className="relative z-10 flex h-full flex-col p-[8%] text-left">
        <p className="text-[.55rem] font-extrabold uppercase tracking-[.24em] text-brand sm:text-xs">Patrícia Garboni</p>
        <h3 className="mt-3 font-serif text-[2.2rem] leading-[.9] tracking-[-.04em] text-brand sm:text-5xl">Cinquentei</h3>
        <p className="mt-2 font-serif text-xl text-ink sm:text-3xl">— O eBook</p>
        <div className="mt-4 h-px w-20 bg-brand/60" />
        <p className="mt-4 max-w-[58%] text-[.62rem] font-semibold leading-5 text-ink sm:text-sm sm:leading-6">
          Menopausa sem tabus, com mais informação, autoestima e protagonismo.
        </p>

        <div className="absolute bottom-[18%] right-[5%] h-[53%] w-[56%] overflow-hidden rounded-t-[45%] rounded-b-[1.4rem] border-[5px] border-white bg-soft-pink shadow-xl">
          <img
            src={siteConfig.portraitUrl}
            alt="Patrícia Garboni sorrindo"
            className="h-full w-full object-cover object-top"
            loading="lazy"
          />
        </div>

        <p className="absolute bottom-[6.8%] left-[8%] z-20 text-[.52rem] font-bold uppercase tracking-[.2em] text-white sm:text-xs">
          Um guia para viver esta fase com leveza
        </p>
      </div>
    </div>
  );
}
