import { Navbar } from "./navbar";
import { Outlet } from "react-router-dom";

export default function DefaultLayoutMain() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', width: '100vw', minHeight: '100vh' }}>
            <Navbar />
            <main style={{ flex: 1, width: '100%' }}>
                <Outlet />
            </main>
        </div>
    );
}