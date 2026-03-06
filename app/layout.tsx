import type { Metadata } from 'next';
import React from 'react';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
    subsets: ['latin'],
    variable: '--font-sans',
});

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
            <head>
                <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
            </head>
            <body className={`${plusJakarta.variable} font-sans antialiased min-h-screen flex flex-col bg-background-light text-[#1a150f]`}>
                <main className="flex-grow">
                    {children}
                </main>
            </body>
        </html>
    );
}
