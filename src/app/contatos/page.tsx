
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import ModalParabens from "../../app/components/ModalParabens";
import Email from "./email_setores";
import Ramais from "./ramal_setores";
import Telefones from "./telefones";

export default function DocumentacaoMaylon() {
    return (
        <section className="mx-auto min-h-screen max-w-7xl p-6 pt-20 text-justify whithi lg:p-10">
            <h1 className="text-2xl font-bold text-black">
                Contatos e Ramais
            </h1>
            <p className="my-3 text-sm leading-6 text-black">
                Confira abaixo a tabela de e-mails institucionais da <strong>Maylon</strong>, organizada por setor para facilitar a comunicação e direcionar cada solicitação à equipe responsável.
            </p>
            <Email/>
            <p className="my-3 text-sm leading-6 text-black">
                Confira abaixo a tabela de ramais telefônicos da <strong>Maylon</strong>, organizada por setor para facilitar o direcionamento das chamadas e agilizar a comunicação entre as equipes.
            </p>
            <Ramais/>
            <p className="my-3 text-sm leading-6 text-black">
                Confira abaixo a tabela de ramais telefônicos da <strong>Maylon</strong>, com os números organizados por setor para facilitar as ligações internas, agilizar a transferência de chamadas e melhorar a comunicação entre as equipes.
            </p>
            <Telefones/>
            <div className="my-3 flex w-full items-center justify-center pb-5">
                <iframe
                    src="https://player.vimeo.com/video/1225933284"
                    title="Vídeo MAYLON — Obrigações dos Motoristas e Passageiros"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    className="aspect-video w-full max-w-4xl rounded-xl"
                />
            </div>

            <div className="mt-3 w-full border-t border-black/15 px-2 py-5 sm:px-6">
                <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
                    <Link
                        href="/seguranca_prevencao"
                        className="group flex min-w-0 flex-col items-start gap-1 text-left transition-colors"
                    >
                        <span className="text-sm text-black">
                            Anterior
                        </span>

                        <span className="flex items-center gap-1 text-sm font-semibold text-black sm:text-base">
                            <ChevronLeft
                                size={19}
                                className="shrink-0 transition-transform group-hover:-translate-x-1"
                            />
                            Segurança e Prevenção
                        </span>
                    </Link>

                    <div className="min-w-0">
                        <ModalParabens />
                    </div>
                </div>
            </div>
        </section>
    );
}
