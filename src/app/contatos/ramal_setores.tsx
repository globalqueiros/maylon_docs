
export default function Ramais() {
    const dados = [
        { ramal: "100", setor: "Recepção" },
        { ramal: "101", setor: "Atendimento ao Cliente" },
        { ramal: "102", setor: "Suporte a Motoristas" },
        { ramal: "103", setor: "Suporte ao Passsageiro" },
        { ramal: "104", setor: "Segurança e Ocorrências" },
        { ramal: "105", setor: "Comercial e Parcerias" },
        { ramal: "106", setor: "Financeiro" },
        { ramal: "107", setor: "Recursos Humanos" },
        { ramal: "109", setor: "Tecnologia e Sistemas" },
        { ramal: "110", setor: "Marketing e Imprensa" },
        { ramal: "111", setor: "Diretoria" },
        { ramal: "112", setor: "Supervisão" },
        { ramal: "113", setor: "Gerência" },
        { ramal: "114", setor: "Ouvidoria" },
    ];

    return (
        <div className="mb-5 w-full overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full min-w-[400px] border-collapse text-left">
                <thead>
                    <tr className="bg-[#087f70] text-white">
                        <th className="px-5 py-4 text-sm font-bold">
                            Ramal
                        </th>
                        <th className="px-5 py-4 text-sm font-bold">
                            Setor
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {dados.map((item, index) => (
                        <tr
                            key={item.ramal}
                            className={`transition-colors hover:bg-[#eaf8f3] ${
                                index % 2 === 0
                                    ? "bg-white"
                                    : "bg-gray-50"
                            }`}
                        >
                            <td className="border-b border-gray-200 px-5 py-4 text-sm font-bold text-[#087f70]">
                                {item.ramal}
                            </td>

                            <td className="border-b border-gray-200 px-5 py-4 text-sm font-medium text-gray-900">
                                {item.setor}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
