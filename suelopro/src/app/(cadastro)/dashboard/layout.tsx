import { ReactNode } from "react";

export const metadata = {
    title: "Painel do Site",
    description: "Este é o painel Demonstrativo site"
}

interface DashboardLayoutProps {
    children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
    return (
        <div>
            <h3>Header do Dashboard</h3>
            <br />
            {children}
        </div>
    );
}
