import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  light?: boolean;
}

export default function SectionHeading({ title, subtitle, className, light = false }: SectionHeadingProps) {
  return (
    <div className={cn("mb-12 space-y-4", className)}>
      <h2 className={cn(
        "text-4xl md:text-5xl font-heading font-semibold tracking-tight",
        light ? "text-brand-cream" : "text-brand-deep"
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          "max-w-2xl text-lg opacity-80",
          light ? "text-brand-cream" : "text-brand-primary"
        )}>
          {subtitle}
        </p>
      )}
      <div className={cn(
        "h-1 w-20 rounded-full",
        light ? "bg-brand-accent" : "bg-brand-primary"
      )} />
    </div>
  );
}
