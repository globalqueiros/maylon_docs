import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function DocumentacaoMaylon() {
    return (
        <section className="min-h-screen max-w-7xl m-auto p-6 pt-20 text-justify lg:p-10">
            <h1 className="text-2xl font-bold text-black">
                Segurança e Prevenção
            </h1>
            <p className="mt-3 text-sm leading-6 text-black">
                A proteção e a privacidade dos dados cadastrais dos clientes são prioridades fundamentais em qualquer operação digital moderna. Garantir que todas as informações armazenadas sejam criptografadas é um dos pilares mais sólidos da segurança da informação e do conformismo com a Lei Geral de Proteção de Dados (LGPD).
            </p>
            <p className="mt-2 text-sm leading-6 text-black">
                A criptografia transforma dados legíveis (como nome, CPF, e-mail ou endereço) em códigos indecifráveis utilizando algoritmos matemáticos complexos.
                <ul className="list-disc">
                    <li>Em trânsito (SSL/TLS): As informações transmitidas entre o cliente e o sistema/servidor via navegação na web ou aplicativo são codificadas, impedindo a interceptação por terceiros (ataques do tipo man-in-the-middle).</li>
                    <li>Em repouso (AES-256): Nos bancos de dados e servidores, os dados ficam armazenados de forma totalmente cifrada. Mesmo em caso de acesso físico ou não autorizado aos servidores, as informações não podem ser lidas sem a chave de descriptografia adequada.</li>
                </ul>
            </p>
            <p className="mt-2 text-sm leading-6 text-black">
                <ul className="list-disc">
                    <li>Gerenciamento Seguro de Chaves: As chaves de descriptografia são armazenadas de forma isolada dos dados e com controle de acesso rigoroso via HSM (Hardware Security Module) ou cofres virtuais de chaves.</li>
                    <li>Controle de Acesso Baseado em Funções (RBAC): Apenas colaboradores com autorização expressa e necessidade estrita de trabalho têm acesso ao ambiente onde os dados trafegam.</li>
                    <li>Monitoramento e Auditoria Contínua: Logs de acesso são registrados e monitorados 24/7 para detectar e prevenir qualquer comportamento atípico ou tentativa indevida de consulta aos sistemas.</li>
                    <li>Backups Criptografados: Cópias de segurança dos bancos de dados também mantêm o mesmo padrão de criptografia, assegurando a recuperação de dados sem comprometer a privacidade.</li>
                </ul>
            </p>
            <p className="mt-2 text-sm leading-6 text-black">
                Modelo de Comunicado Transparente para Clientes
            </p>
            <p className="mt-2 text-sm leading-6 text-black">
                Se você precisa informar os seus clientes de maneira clara e profissional sobre essa garantia de segurança, utilize o modelo abaixo:
                <ul className="list-disc">
                    <li>Compromisso com a sua Segurança e Criptografia de Dados</li>
                    <li>A sua confiança e a proteção das suas informações pessoais são prioridades para nós. Por isso, informamos que 100% dos seus dados cadastrais são protegidos com tecnologia de criptografia de ponta a ponta.</li>
                    <li>Como protegemos as suas informações:</li>
                    <li>Criptografia Avançada: Seus dados são codificados tanto no momento do envio quanto durante o armazenamento em nossos servidores.</li>
                    <li>Privacidade e LGPD: Tratamos seus dados com estrito respeito à Lei Geral de Proteção de Dados, garantindo que suas informações não sejam compartilhadas sem a sua autorização.</li>
                    <li>Segurança Continuada: Nossos sistemas passam por auditorias e atualizações frequentes para combater ameaças cibernéticas.</li>
                    <li>Você pode navegar, cadastrar-se e transacionar conosco com total tranquilidade.</li>
                </ul>
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
                        href="/comunicados_atualizacoes"
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
                            Comunicados e Atualizações
                        </span>
                    </Link>
                    <Link
                        href="/contatos"
                        className="group flex flex-col items-end gap-1 text-right transition-colors"
                    >
                        <span className="text-sm text-black">
                            Próximo
                        </span>
                        <span className="flex items-center gap-1 text-base font-semibold text-black">
                            Contatos e Ramais
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