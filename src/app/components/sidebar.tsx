"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { ElementType } from "react";
import {
  Building,
  ChevronDown,
  ChevronRight,
  FileText,
  Headset,
  Megaphone,
  Menu,
  ShieldCheck,
  Mail,
  X,
  CheckCircle2,
  ShieldAlert,
  UsersRound,
} from "lucide-react";

type MenuItem = {
  label: string;
  href?: string;
  icon?: ElementType;
  children?: MenuItem[];
};

const topLinks: MenuItem[] = [
  {
    label: "Introdução",
    href: "/",
    icon: Mail,
  },
  {
    label: "Do Objeto e da Aceitação",
    href: "/objeto_aceitacao",
    icon: CheckCircle2,
  },
  {
    label: "Deveres E Regras de Conduta",
    href: "/deveres_regras_condutas",
    icon: ShieldCheck,
  },
  {
    label: "Das Infrações Graves",
    href: "/infracoes_graves",
    icon: ShieldAlert,
  },
  {
    label: "Obrigações do Motoristas e Passageiros",
    href: "/motorista_e_passageiro",
    icon: UsersRound,
  },  
  {
    label: "Comunicados e Atualizações",
    href: "/comunicados_atualizacoes",
    icon: Megaphone,
  },
  {
    label: "Segurança e Prevenção",
    href: "/seguranca_prevencao",
    icon: ShieldCheck,
  },
  {
    label: "Contatos e Ramais",
    href: "/contatos",
    icon: Headset,
  },
];

const menuItems: MenuItem[] = [];

function containsActiveRoute(item: MenuItem, pathname: string): boolean {
  if (item.href && pathname === item.href) {
    return true;
  }

  return (
    item.children?.some((child) =>
      containsActiveRoute(child, pathname)
    ) ?? false
  );
}

export default function Sidebar() {
  const pathname = usePathname();

  const [expanded, setExpanded] = useState<string[]>([
    "Base de Conhecimento dos Tutores",
    "Informações para Tutores",
  ]);

  const [mobileOpen, setMobileOpen] = useState(false);

  function toggleMenu(label: string) {
    setExpanded((current) =>
      current.includes(label)
        ? current.filter((item) => item !== label)
        : [...current, label]
    );
  }

  function renderItems(items: MenuItem[], level = 0) {
    return items.map((item) => {
      const Icon = item.icon;
      const hasChildren = Boolean(item.children?.length);
      const isOpen = expanded.includes(item.label);
      const isActive = item.href === pathname;
      const hasActiveChild = containsActiveRoute(item, pathname);

      return (
        <div key={item.label} className="w-full">
          {hasChildren ? (
            <button
              type="button"
              onClick={() => toggleMenu(item.label)}
              aria-expanded={isOpen}
              className={`flex w-full items-start gap-2 rounded-md px-2 py-1.5 text-left text-[13px] leading-5 transition-colors ${
                hasActiveChild
                  ? "font-semibold text-gray-900"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              }`}
              style={{ paddingLeft: `${8 + level * 16}px` }}
            >
              {Icon && (
                <Icon
                  size={15}
                  strokeWidth={1.8}
                  className="mt-0.5 shrink-0 text-gray-400"
                />
              )}

              <span className="min-w-0 flex-1">{item.label}</span>

              {isOpen ? (
                <ChevronDown
                  size={13}
                  className="mt-1 shrink-0 text-gray-400"
                />
              ) : (
                <ChevronRight
                  size={13}
                  className="mt-1 shrink-0 text-gray-400"
                />
              )}
            </button>
          ) : (
            <Link
              href={item.href ?? "#"}
              onClick={() => setMobileOpen(false)}
              aria-current={isActive ? "page" : undefined}
              className={`flex items-start gap-2 rounded-md px-2 py-1.5 text-[13px] leading-5 transition-colors ${
                isActive
                  ? "bg-gray-200/80 font-semibold text-gray-950"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-950"
              }`}
              style={{ paddingLeft: `${8 + level * 16}px` }}
            >
              {Icon && (
                <Icon
                  size={15}
                  strokeWidth={1.8}
                  className="mt-0.5 shrink-0 text-gray-400"
                />
              )}

              <span className="min-w-0">{item.label}</span>
            </Link>
          )}

          {hasChildren && isOpen && (
            <div className="mt-0.5">
              {renderItems(item.children!, level + 1)}
            </div>
          )}
        </div>
      );
    });
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setMobileOpen(true)}
        aria-label="Abrir menu"
        aria-expanded={mobileOpen}
        className="fixed left-4 top-4 z-40 rounded-lg border border-gray-200 bg-white p-2.5 text-gray-700 shadow-sm lg:hidden"
      >
        <Menu size={22} />
      </button>

      {mobileOpen && (
        <button
          type="button"
          aria-label="Fechar menu"
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-[290px] max-w-[85vw] flex-col border-r border-gray-200 bg-[#fafafa] transition-transform duration-200 lg:translate-x-0 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-[65px] shrink-0 items-center justify-between border-b border-gray-200 px-3">
          <Link
            href="https://backoffice.maylon.com.br/"
            onClick={() => setMobileOpen(false)}
            className="mx-auto my-4 flex items-center gap-2"
          >
            <Image
              src="/maylon_logo.png"
              width={180}
              height={60}
              alt="Logo Maylon"
              priority
              className="h-auto w-[180px] object-contain"
            />
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            aria-label="Fechar menu"
            className="rounded-md p-2 text-gray-500 hover:bg-gray-200 lg:hidden"
          >
            <X size={19} />
          </button>
        </div>

        <nav
          className="flex-1 overflow-y-auto px-3 py-3"
          aria-label="Menu principal"
        >
          <div className="space-y-0.5">
            {topLinks.map((item) => {
              const Icon = item.icon!;
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.label}
                  href={item.href!}
                  onClick={() => setMobileOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                  className={`flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-[13px] leading-5 transition-colors ${
                    isActive
                      ? "bg-gray-200/80 font-semibold text-gray-950"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-950"
                  }`}
                >
                  <Icon
                    size={15}
                    strokeWidth={1.8}
                    className="shrink-0 text-teal-500"
                  />

                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

          <div className="mt-1">{renderItems(menuItems)}</div>
        </nav>
      </aside>
    </>
  );
}