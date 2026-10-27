import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function DocumentacaoMaylon() {
    return (
        <section className="min-h-screen max-w-7xl m-auto p-6 pt-20 text-justify lg:p-10">
            <h1 className="text-2xl font-bold text-black">
                Comunicados e Atualizações
            </h1>
            <p className="mt-3 text-sm leading-6 text-black">
                O módulo Comunicados e Atualizações do Backoffice da <strong>Maylon</strong> tem como objetivo centralizar a divulgação de informações institucionais, avisos internos, atualizações de sistemas, procedimentos operacionais e demais comunicados relevantes para a equipe.
            </p>
            <p className="mt-2 text-sm leading-6 text-black">
                Por meio deste espaço, os colaboradores poderão acompanhar informações importantes sobre as atividades da empresa, mudanças em processos internos, manutenções programadas, melhorias nas plataformas e orientações dos setores responsáveis.
            </p>
            <p className="mt-2 text-sm leading-6 text-black">
                Os comunicados serão publicados de forma organizada, com identificação do assunto, data de publicação, setor responsável e nível de prioridade, quando aplicável, garantindo maior transparência, padronização e eficiência na comunicação interna.
            </p>
            <p className="mt-2 text-sm leading-6 text-black">
                Objetivo: facilitar o acesso às informações oficiais da <strong>Maylon</strong>, manter as equipes atualizadas e contribuir para uma comunicação interna mais ágil, segura e eficiente.
            </p>
            <p className="mt-2 text-sm leading-6 text-black">
                Orientação aos colaboradores: recomenda-se consultar este módulo regularmente para acompanhar novos comunicados, atualizações e orientações divulgadas pela Gerência e pelos demais setores autorizados.
            </p>
            <div className="flex justify-center items-center w-full my-3 pb-5">
                <iframe
                    src="https://player.vimeo.com/video/1225933284"
                    title="Vídeo MAYLON"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    className="w-full max-w-4xl aspect-video rounded-xl"
                ></iframe>
            </div>
            <div className="mt-3 w-full border-t border-black/15 px-6 py-3">
                <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
                    <Link
                        href="/motorista_e_passageiro"
                        className="group flex flex-col items-start gap-1 text-left transition-colors"
                    >
                        <span className="text-sm text-black">
                            Anterior
                        </span>
                        <span className="flex items-center gap-1 text-base font-semibold text-black">
                            <ChevronLeft
                                size={19}
                                className="shrink-0 transition-transform group-hover:-translate-x-1"
                            />
                            Obrigações do Motoristas e Passageiros
                        </span>
                    </Link>
                    <Link
                        href="/seguranca_prevencao"
                        className="group flex flex-col items-end gap-1 text-right transition-colors"
                    >
                        <span className="text-sm text-black">
                            Próximo
                        </span>
                        <span className="flex items-center gap-1 text-base font-semibold text-black">
                            Segurança e Prevenção
                            <ChevronRight
                                size={19}
                                className="shrink-0 transition-transform group-hover:translate-x-1"
                            />
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    )
}