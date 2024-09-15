import React from "react";
import "../styles/globals.css";

export const metadata = {
  title: "Crime Tracker App",
  description: "Track and visualize crime data in your area",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
