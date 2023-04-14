import React, { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
    return (
        <main className="bg-white min-h-screen flex justify-center items-center">
            {children}
        </main>
    )
}

