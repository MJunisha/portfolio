import type { ReactNode } from "react";

export function FooterReveal({
  footer,
  children,
}: {
  footer: ReactNode;
  children: ReactNode;
}) {
  return (
    <>
      <main className="relative z-10 flex-1">{children}</main>
      {footer}
    </>
  );
}
