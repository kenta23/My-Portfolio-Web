import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
   title: 'Projects',
   description: 'Rm Ramos projects',
}

export default function RootLayout({ children }: {
     children: Readonly<React.ReactNode>
}) {
     return <>{children}</>;
}