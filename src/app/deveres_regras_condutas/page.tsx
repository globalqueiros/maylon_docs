import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function DocumentacaoMaylon() {
    return (
        <section className="min-h-screen max-w-7xl m-auto p-6 pt-20 text-justify lg:p-10">
            <h1 className="text-2xl font-bold text-black">
                Deveres E Regras de Conduta
            </h1>
            <p className="mt-3 text-sm leading-7 text-black">
                Todos os usuários deverão utilizar a plataforma de maneira ética, responsável, segura e compatível com sua finalidade, abstendo-se de praticar atos que prejudiquem a empresa, outros usuários, motoristas, passageiros, parceiros comerciais ou terceiros
            </p>
            <p className="mt-2 text-sm leading-7 text-black">
                Constituem deveres dos usuários:
                <div className="space-y-3 p-2 text-sm text-black">
                    <ul className="list-[lower-roman] leading-7 py-2 pl-7">
                        <li>Respeitar os termos, políticas e procedimentos oficiais da <strong>Maylon</strong>;</li>
                        <li>Prestar informações verdadeiras durante o cadastro e a utilização dos serviços;</li>
                        <li>Manter comportamento respeitoso, sem ameaças, ofensas, discriminação, assédio ou violência;</li>
                        <li>Não utilizar a plataforma para atividades ilícitas, fraudulentas ou contrárias à boa-fé;</li>
                        <li>Não manipular viagens, pagamentos, promoções, benefícios, avaliações ou mecanismos de segurança;</li>
                        <li>Não compartilhar credenciais de acesso de maneira indevida, nem permitir a utilização fraudulenta da conta;</li>
                        <li>Cumprir as obrigações assumidas no momento da contratação ou utilização dos serviços;</li>
                        <li>Comunicar à <strong>Maylon</strong> eventuais falhas de segurança, suspeitas de fraude ou irregularidades relevantes.</li>
                    </ul>
                </div>
            </p>
            <div className="my-2">
                <h1 className="text-2xl font-bold text-black">
                    Descumprimento das Disposições Contratuais
                </h1>
            </div>
            <p className="mt-2 text-sm leading-6 text-black">
                O descumprimento de qualquer obrigação prevista neste Termo de Uso, nas políticas complementares validamente aplicáveis ou nas condições específicas de utilização da plataforma poderá caracterizar infração contratual.
            </p>
            <p className="mt-2 text-sm leading-6 text-black">
                A <strong>Maylon</strong> poderá analisar os fatos e adotar medidas proporcionais à natureza, à gravidade, à recorrência e às consequências da infração, observando a legislação vigente e os direitos do usuário.
            </p>
            <p className="mt-2 text-sm leading-6 text-black">
                Conforme as circunstâncias do caso concreto, poderão ser aplicadas as seguintes medidas
                <div className="space-y-3 p-2 text-sm text-black">
                    <ul className="list-[lower-roman] leading-7 py-2 pl-7">
                        <li>Orientação formal ou advertência;</li>
                        <li>Solicitação de esclarecimentos ou documentos adicionais;</li>
                        <li>Restrição temporária de funcionalidades específicas;</li>
                        <li>Suspensão temporária do acesso à conta;</li>
                        <li>Cancelamento de benefícios, promoções ou vantagens obtidos irregularmente, respeitados os direitos adquiridos e a legislação aplicável;</li>
                        <li>Encerramento da conta ou rescisão da relação contratual, quando houver fundamento legítimo;</li>
                        <li>Adoção de medidas administrativas ou judiciais cabíveis, inclusive comunicação às autoridades competentes quando necessária ou legalmente exigida.</li>
                    </ul>
                </div>
            </p>
            <p className="mt-2 text-sm leading-6 text-black">
                A aplicação de medidas deverá considerar, sempre que pertinente, a gravidade da conduta, a existência de reincidência, os prejuízos causados, os riscos à segurança e as circunstâncias demonstradas.
            </p>
            <p className="mt-2 text-sm leading-6 text-black">
                Sempre que compatível com a natureza da infração, a <strong>Maylon</strong> buscará informar ao usuário os motivos da medida adotada e disponibilizar canal para esclarecimentos ou contestação.
            </p>
            <p className="mt-2 text-sm leading-6 text-black">
                Medidas preventivas imediatas poderão ser adotadas quando houver indícios razoáveis de fraude, risco à integridade física, comprometimento da segurança da plataforma ou obrigação legal, sem prejuízo da análise posterior e das garantias aplicáveis.
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
                        href="/objeto_aceitacao"
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
                            Do Objeto e da Aceitação
                        </span>
                    </Link>
                    <Link
                        href="/infracoes_graves"
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