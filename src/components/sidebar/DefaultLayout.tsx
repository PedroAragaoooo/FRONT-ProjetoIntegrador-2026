import { Sidebar } from "./sidebar";
import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            <Sidebar />
            <main style={{ flex: 1, backgroundColor: '#f0f2f5' }}>
                <Outlet />
            </main>
        </div>
    );
}