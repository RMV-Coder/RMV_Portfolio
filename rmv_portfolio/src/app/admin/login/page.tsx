import { redirect } from "next/navigation"
import { LoginForm } from "@/components/admin/login-form"
import { hasAdminSession } from "@/lib/resume/admin-auth"
import { isAdminConfigured } from "@/lib/resume/tokens"

export const dynamic = "force-dynamic"

/** Only ever send people back into the admin area — never to an arbitrary URL. */
function safeNext(value: string | string[] | undefined): string {
  const next = Array.isArray(value) ? value[0] : value
  return next && /^\/admin(\/[\w\-/?=&.%]*)?$/.test(next) ? next : "/admin"
}

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string | string[] }>
}) {
  const next = safeNext((await searchParams).next)
  if (await hasAdminSession()) redirect(next)

  return (
    <div className="mx-auto mt-[8vh] w-full max-w-sm rounded-xl border border-border bg-card p-6 sm:p-8">
      <h1 className="text-xl font-semibold">Sign in</h1>
      <p className="mt-1 mb-6 text-sm text-muted-foreground">Portfolio admin.</p>
      {isAdminConfigured() ? (
        <LoginForm next={next} />
      ) : (
        <p className="rounded-lg border border-border bg-muted/50 p-3.5 text-sm leading-relaxed">
          Sign-in isn&apos;t set up on this deployment. Add <code className="font-mono">ADMIN_PASSWORD</code>{" "}
          and a 32+ character <code className="font-mono">RESUME_SIGNING_SECRET</code> to the environment,
          then redeploy.
        </p>
      )}
    </div>
  )
}
