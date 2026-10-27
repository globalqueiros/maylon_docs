
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import confetti from "canvas-confetti";
import { CheckCircle2, ChevronRight, PartyPopper, X } from "lucide-react";

export default function ModalParabens() {
  const [aberto, setAberto] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!aberto) return;

    const dispararConfetes = () => {
      confetti({
        particleCount: 100,
        spread: 100,
        origin: { y: 0.65 },
        colors: ["#35a989", "#087f70", "#FFD166", "#FF6B6B", "#7C83FD"],
      });
    };

    dispararConfetes();

    const timer = window.setTimeout(dispararConfetes, 500);
    const timer2 = window.setTimeout(dispararConfetes, 1100);

    return () => {
      window.clearTimeout(timer);
      window.clearTimeout(timer2);
    };
  }, [aberto]);

  function continuar() {
    setAberto(false);
    router.push("/infracoes_graves");
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setAberto(true)}
        className="group flex flex-col items-end gap-1 text-right transition-colors"
      >
        <span className="text-sm text-black">Próximo</span>

        <span className="flex items-center gap-1 text-base font-semibold text-black">
          Finalizou
          <ChevronRight
            size={19}
            className="shrink-0 transition-transform group-hover:translate-x-1"
          />
        </span>
      </button>

      {aberto && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setAberto(false);
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="titulo-parabens"
            className="relative w-full max-w-md overflow-hidden rounded-3xl bg-white p-7 text-center shadow-2xl sm:p-9"
          >
            <button
              type="button"
              onClick={() => setAberto(false)}
              aria-label="Fechar modal"
              className="absolute right-4 top-4 rounded-full p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-900"
            >
              <X size={20} />
            </button>

            <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-[#e6f7f1]">
              <PartyPopper size={42} className="text-[#087f70]" />
            </div>

            <div className="mb-3 flex items-center justify-center gap-2 text-[#087f70]">
              <CheckCircle2 size={20} />
              <span className="text-sm font-bold uppercase tracking-wider">
                Etapa concluída
              </span>
            </div>

            <h2
              id="titulo-parabens"
              className="text-3xl font-extrabold tracking-tight text-gray-900"
            >
              Parabéns! 🎉
            </h2>


            <p className="mt-3 text-sm text-justify leading-7 text-black">
              Parabéns! Você concluiu a documentação da MAYLON! 🎉
              Agradecemos por dedicar seu tempo à leitura. Agora você conhece
              melhor nossas regras, diretrizes e responsabilidades, contribuindo
              para uma comunidade mais segura, respeitosa e responsável.
            </p>
            <button
              type="button"
              onClick={continuar}
              className="mt-6 cursor-pointer flex w-full items-center justify-center gap-2 rounded-xl bg-[#087f70] px-5 py-3.5 font-bold text-white shadow-lg shadow-[#087f70]/20 transition hover:bg-[#066657] active:scale-[0.98]"
            >
              Continuar
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
