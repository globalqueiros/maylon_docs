import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function DocumentacaoMaylon() {
    return (
        <section className="min-h-screen max-w-7xl m-auto p-6 pt-20 text-justify lg:p-10">
            <h1 className="text-2xl font-bold text-black">
                Obrigações do Motoristas e Passageiros
            </h1>
            <p className="mt-3 text-sm leading-6 text-black">
                Os motoristas deverão manter seus documentos, habilitações, veículos e demais requisitos de operação regulares, observando as normas de trânsito e as exigências legais aplicáveis à atividade.
            </p>
            <p className="mt-2 text-sm leading-6 text-black">
                Os passageiros deverão utilizar os serviços de forma responsável, respeitar os motoristas e cumprir as condições de contratação e pagamento da viagem.
            </p>
            <p className="mt-2 text-sm leading-6 text-black">
                Motoristas e passageiros deverão fornecer informações corretas sobre embarque, destino, realização da viagem e eventuais ocorrências.
            </p>
            <p className="mt-2 text-sm leading-6 text-black">
                A <strong>Maylon</strong> poderá apurar reclamações, incidentes e denúncias relacionados à utilização dos serviços, adotando providências compatíveis com as evidências disponíveis e a gravidade dos fatos.
            </p>
            <div className="mb-3 mt-3">
                <h1 className="text-2xl mt-6 font-bold text-black">
                    Suspensão e do Encerramento da Conta
                </h1>
            </div>
            <p className="mt-2 text-sm leading-6 text-black">
                A <strong>Maylon</strong> poderá suspender ou encerrar uma conta em caso de descumprimento contratual, fraude, risco à segurança, determinação legal ou outra causa legítima prevista neste instrumento.
            </p>
            <p className="mt-2 text-sm leading-6 text-black">
                Quando cabível, o usuário será informado sobre a medida e sua justificativa, podendo solicitar revisão pelos canais oficiais de atendimento.
            </p>
            <p className="mt-2 text-sm leading-6 text-black">
                A suspensão ou o encerramento da conta não elimina obrigações financeiras legitimamente constituídas, nem autoriza a retenção indevida de valores pertencentes ao usuário.
            </p>
            <p className="mt-2 text-sm leading-6 text-black">
                Eventuais valores pendentes, reembolsos, créditos ou pagamentos deverão ser tratados conforme as condições contratadas e a legislação aplicável.
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
                        href="/infracoes_graves"
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
                            Das Infrações Graves
                        </span>
                    </Link>
                    <Link
                        href="/comunicados_atualizacoes"
                        className="group flex flex-col items-end gap-1 text-right transition-colors"
                    >
                        <span className="text-sm text-black">
                            Próximo
                        </span>
                        <span className="flex items-center gap-1 text-base font-semibold text-black">
                            Comunicados e Atualizações
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