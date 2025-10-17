import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface BreadcrumbProps {
  items: { label: string; href?: string }[];
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          {item.href ? (
            <Link
              to={item.href}
              className="hover:text-neon-blue transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-foreground">{item.label}</span>
          )}
          {index < items.length - 1 && (
            <ChevronRight className="w-4 h-4" />
          )}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumb;
