import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function DocumentacaoMaylon() {
    return (
        <section className="min-h-screen max-w-7xl m-auto p-6 pt-20 text-justify lg:p-10">
            <h1 className="text-2xl font-bold text-black">
                Das Infrações Graves
            </h1>
            <p className="mt-3 text-sm leading-7 text-black">
                Poderão ser consideradas infrações graves, conforme a análise das circunstâncias:
                <div className="space-y-3 p-2 text-sm text-black">
                    <ul className="list-[lower-roman] leading-7 py-2 pl-7">
                        <li>Apresentação deliberada de documentos falsos ou informações fraudulentas;</li>
                        <li>Utilização da plataforma para a prática de crimes ou outras atividades ilícitas;</li>
                        <li>Ameaças, violência, assédio, discriminação ou condutas que coloquem terceiros em risco;</li>
                        <li>fraude em pagamentos, viagens, cadastros, indicações ou benefícios;</li>
                        <li>Violação deliberada de mecanismos de segurança ou acesso não autorizado a sistemas;</li>
                        <li>Utilização indevida de dados pessoais, informações confidenciais ou recursos tecnológicos da <strong>Maylon</strong>;</li>
                        <li>Reincidência em infrações contratuais relevantes após advertência, quando aplicável.</li>
                    </ul>
                </div>
            </p>
            <p className="mt-3 text-sm leading-7 text-black">
                A ocorrência de infração grave poderá justificar a suspensão cautelar ou o encerramento da conta, desde que exista fundamento legítimo e sejam observados os direitos e procedimentos previstos na legislação aplicável.
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
                        href="/deveres_regras_condutas"
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
                            Deveres e Regras de Conduta
                        </span>
                    </Link>
                    <Link
                        href="/motorista_e_passageiro"
                        className="group flex flex-col items-end gap-1 text-right transition-colors"
                    >
                        <span className="text-sm text-black">
                            Próximo
                        </span>
                        <span className="flex items-center gap-1 text-base font-semibold text-black">
                            Das Infrações Graves
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