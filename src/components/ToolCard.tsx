import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ToolCardProps {
  name: string;
  description: string;
  url: string;
  category?: string;
}

export const ToolCard = ({ name, description, url, category }: ToolCardProps) => {
  return (
    <Card className="group bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-card hover:-translate-y-1">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
              {name}
            </CardTitle>
            {category && (
              <span className="inline-block mt-1 px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                {category}
              </span>
            )}
          </div>
          <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-muted-foreground mb-4">
          {description}
        </CardDescription>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-full px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-medium"
        >
          Open Tool
        </a>
      </CardContent>
    </Card>
  );
};