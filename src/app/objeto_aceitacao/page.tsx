import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function DocumentacaoMaylon() {
    return (
        <section className="min-h-screen max-w-7xl m-auto p-6 pt-20 text-justify lg:p-10">
            <h1 className="text-2xl font-bold text-black">
                Do Objeto e da Aceitação
            </h1>
            <p className="mt-3 text-sm leading-7 text-black">
                O presente Termo de Uso estabelece as condições gerais de acesso, utilização e permanência na plataforma <strong>Maylon</strong>, incluindo seus aplicativos, sistemas, serviços digitais e demais canais oficiais disponibilizados pela empresa.
            </p>
            <p className="mt-1 text-sm leading-7 text-black">
                Ao realizar o cadastro, acessar ou utilizar os serviços da <strong>Maylon</strong>, o usuário declara que leu, compreendeu e concorda com as disposições deste instrumento, comprometendo-se a observar as regras de utilização, as normas de conduta e a legislação aplicável.
            </p>
            <p className="mt-1 text-sm leading-7 text-black">
                O usuário deverá fornecer informações verdadeiras, completas e atualizadas, responsabilizando-se pela utilização de sua conta e pela veracidade dos dados apresentados, nos limites da legislação vigente
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
                        href="/"
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
                            Introdução
                        </span>
                    </Link>
                    <Link
                        href="/deveres_regras_condutas"
                        className="group flex flex-col items-end gap-1 text-right transition-colors"
                    >
                        <span className="text-sm text-black">
                            Próximo
                        </span>
                        <span className="flex items-center gap-1 text-base font-semibold text-black">
                            Deveres E Regras de Conduta
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