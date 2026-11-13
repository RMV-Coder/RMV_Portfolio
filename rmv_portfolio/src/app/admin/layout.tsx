import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <main className="min-h-screen bg-background px-4 py-10 sm:px-6 sm:py-14">{children}</main>
}
