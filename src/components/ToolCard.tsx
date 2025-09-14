import { ExternalLink, Activity } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

interface ToolCardProps {
  name: string;
  description: string;
  url: string;
  category?: string;
  status?: "online" | "offline" | "maintenance";
  delay?: number;
}

export const ToolCard = ({ name, description, url, category, status = "online", delay = 0 }: ToolCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const statusColors = {
    online: "bg-green-500",
    offline: "bg-red-500", 
    maintenance: "bg-yellow-500"
  };

  const statusLabels = {
    online: "Online",
    offline: "Offline",
    maintenance: "Maintenance"
  };

  return (
    <Card 
      className="group relative overflow-hidden bg-gradient-card hover:bg-gradient-card-hover border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-card-hover hover:-translate-y-2 animate-fade-in-up opacity-0"
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated background shimmer */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      
      {/* Glowing border effect */}
      <div className="absolute inset-0 rounded-lg bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm" />
      
      <CardHeader className="pb-3 relative z-10">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-all duration-300">
                {name}
              </CardTitle>
              <div className="flex items-center gap-1">
                <div className={`w-2 h-2 rounded-full ${statusColors[status]} ${status === 'online' ? 'animate-pulse-glow' : ''}`} />
                <span className="text-xs text-muted-foreground font-medium">
                  {statusLabels[status]}
                </span>
              </div>
            </div>
            {category && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20 backdrop-blur-sm">
                <Activity className="w-3 h-3" />
                {category}
              </span>
            )}
          </div>
          <div className="relative">
            <ExternalLink className={`h-5 w-5 text-muted-foreground transition-all duration-300 ${isHovered ? 'text-primary rotate-12 scale-110' : ''}`} />
          </div>
        </div>
      </CardHeader>
      <CardContent className="relative z-10">
        <CardDescription className="text-muted-foreground mb-6 leading-relaxed">
          {description}
        </CardDescription>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="group/btn relative inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-primary text-primary-foreground rounded-lg font-medium transition-all duration-300 hover:shadow-glow hover:scale-[1.02] active:scale-[0.98] overflow-hidden"
        >
          {/* Button shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
          <span className="relative z-10 flex items-center gap-2">
            Open Tool
            <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </span>
        </a>
      </CardContent>
    </Card>
  );
};