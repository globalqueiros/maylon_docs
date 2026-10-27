
export default function Email() {
    const dados = [
        {
            titulo: "Atendimento ao Cliente",
            email: "atendimento@maylon.com.br",
        },
        {
            titulo: "Comercial e Parcerias",
            email: "comercial@maylon.com.br",
        },
        {
            titulo: "Recursos Humanos",
            email: "rh@maylon.com.br",
        },
        {
            titulo: "Financeiro",
            email: "financeiro@maylon.com.br",
        },
        {
            titulo: "Tecnologia e Sistemas",
            email: "tecnologia@maylon.com.br",
        },
        {
            titulo: "Marketing e Imprensa",
            email: "marketing@maylon.com.br",
        },
        {
            titulo: "Diretoria",
            email: "diretoria@maylon.com.br",
        },
    ];

    return (
        <div className="mb-5 w-full overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full min-w-[480px] border-collapse text-left">
                <thead>
                    <tr className="bg-[#087f70] text-white">
                        <th className="px-5 py-4 text-sm font-bold">
                            Setor
                        </th>
                        <th className="px-5 py-4 text-sm font-bold">
                            E-mail
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {dados.map((item, index) => (
                        <tr
                            key={item.titulo}
                            className={`transition-colors hover:bg-[#eaf8f3] ${
                                index % 2 === 0
                                    ? "bg-white"
                                    : "bg-gray-50"
                            }`}
                        >
                            <td className="border-b border-gray-200 px-5 py-4 text-sm font-semibold text-gray-900">
                                {item.titulo}
                            </td>

                            <td className="border-b border-gray-200 px-5 py-4 text-sm text-gray-600">
                                <a
                                    href={`mailto:${item.email}`}
                                    className="font-medium text-[#087f70] hover:underline"
                                >
                                    {item.email}
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
