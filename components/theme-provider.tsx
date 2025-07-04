"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children, ...props }: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      themes={[
        "light",
        "dark",
        "system",
        "professional",
        "solutionepi",
        "administrator",
        "customer",
      ]}
      disableTransitionOnChange
      {...props}>
      {children}
    </NextThemesProvider>
  );
}
