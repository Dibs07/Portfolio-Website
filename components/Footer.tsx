"use client"

import { Footer as FooterType } from "@/types/portfolio"

interface FooterProps {
  footer: FooterType
}

export default function Footer({ footer }: FooterProps) {
  return (
    <footer className="py-8 px-6 border-t border-green-500/30">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-400 font-mono">
          {footer.copyright} | {footer.builtWith} |
          <span className="text-green-400"> {footer.status}</span>
        </p>
      </div>
    </footer>
  )
}
