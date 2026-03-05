import type { Metadata } from 'next';
import React from 'react';
import './globals.css';

export const metadata: Metadata = {
    title: 'Jammi Pharmaceuticals',
    description: '127-year-old Ayurvedic pharmaceutical company blending traditional Indian medicine with modern molecular science',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="antialiased min-h-screen flex flex-col bg-background-light font-sans text-[#1a150f]">
                <main className="flex-grow">
                    {children}
                </main>
            </body>
        </html>
    );
}
