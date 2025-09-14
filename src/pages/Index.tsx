import { Header } from "@/components/Header";
import { ToolCard } from "@/components/ToolCard";

// Sample tools data - replace with your actual VPS tools
const tools = [
  {
    name: "Monitoring Dashboard",
    description: "Server monitoring and analytics dashboard with real-time metrics",
    url: "https://your-vps.com/monitoring",
    category: "Monitoring"
  },
  {
    name: "File Manager",
    description: "Web-based file manager for easy file operations and transfers",
    url: "https://your-vps.com/files",
    category: "Management"
  },
  {
    name: "Database Admin",
    description: "Database administration tool for managing your databases",
    url: "https://your-vps.com/database",
    category: "Database"
  },
  {
    name: "Log Viewer",
    description: "Real-time log viewer and analyzer for system diagnostics",
    url: "https://your-vps.com/logs",
    category: "Debugging"
  },
  {
    name: "Backup Manager",
    description: "Automated backup scheduling and management system",
    url: "https://your-vps.com/backups",
    category: "Backup"
  },
  {
    name: "Performance Tools",
    description: "System performance analysis and optimization tools",
    url: "https://your-vps.com/performance",
    category: "Optimization"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <ToolCard
              key={index}
              name={tool.name}
              description={tool.description}
              url={tool.url}
              category={tool.category}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Need to add more tools? Edit the tools array in src/pages/Index.tsx
          </p>
        </div>
      </main>
    </div>
  );
};

export default Index;
