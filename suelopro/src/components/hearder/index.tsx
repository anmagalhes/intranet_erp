import Link from "next/link";
import styles from "@/components/header/header.module.css";
import { FiUser, FiLogOut } from 'react-icons/fi'; // Corrigi o nome do pacote de ícones

export function Header() {
  return (
    <header className="w-full flex items-center px-2 py-4 bg-white h-20 shadoow-sm">
      <div className="w-full flex items-center justify-between max-w-7x1 max-auto">
        <Link href="/">
          <h1 className="font-bold text-2xl p-1 hover:tracking-widest duration-300">
            <span className="text-blue-500">SUELOPRO</span> SISTEMA CONTROLE INTERNO
          </h1>
        </Link>

        <div className="flex items-baseline gap-4">
          <Link href="/dashboard">
            <FiUser size={26} color="#4b5563" />
          </Link>

          <button>
            <FiLogOut size={26} color="#4b5563" />
          </button>
        </div>
      </div>
    </header>
  );
}
