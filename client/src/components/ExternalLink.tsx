import { ExternalLink as ExternalLinkIcon } from "lucide-react";
import { ReactNode } from "react";

interface ExternalLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  showIcon?: boolean;
}

export function ExternalLink({
  href,
  children,
  className = "",
  showIcon = false,
}: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1.5 text-primary hover:text-primary/80 transition-colors duration-200 font-medium ${className}`}
    >
      {children}
      {showIcon && <ExternalLinkIcon className="w-3.5 h-3.5" />}
    </a>
  );
}
