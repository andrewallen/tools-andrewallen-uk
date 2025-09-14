import { Header } from "@/components/Header";
import { ToolCard } from "@/components/ToolCard";

// Sample tools data - replace with your actual VPS tools
const tools = [
  {
    name: "System Monitor",
    description: "Real-time server monitoring with CPU, memory, and disk usage analytics. Get insights into system performance.",
    url: "https://your-vps.com/monitoring",
    category: "Monitoring",
    status: "online" as const
  },
  {
    name: "File Manager Pro",
    description: "Advanced web-based file management with drag-drop uploads, batch operations, and secure file sharing.",
    url: "https://your-vps.com/files",
    category: "Management",
    status: "online" as const
  },
  {
    name: "Database Console",
    description: "Comprehensive database administration with query builder, backup tools, and performance optimization.",
    url: "https://your-vps.com/database",
    category: "Database",
    status: "maintenance" as const
  },
  {
    name: "Log Analytics",
    description: "Intelligent log parsing and analysis with real-time filtering, alerting, and trend visualization.",
    url: "https://your-vps.com/logs",
    category: "Debugging",
    status: "online" as const
  },
  {
    name: "Backup Central",
    description: "Automated backup management with scheduling, versioning, and cloud storage integration.",
    url: "https://your-vps.com/backups",
    category: "Backup",
    status: "online" as const
  },
  {
    name: "Performance Suite",
    description: "Advanced system optimization tools with benchmarking, bottleneck analysis, and tuning recommendations.",
    url: "https://your-vps.com/performance",
    category: "Optimization",
    status: "offline" as const
  }
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-6 pb-16">
        {/* Enhanced grid with staggered animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <ToolCard
              key={index}
              name={tool.name}
              description={tool.description}
              url={tool.url}
              category={tool.category}
              status={tool.status}
              delay={index * 100}
            />
          ))}
        </div>
        
        {/* Enhanced footer section */}
        <div className="mt-20 text-center space-y-4">
          <div className="w-20 h-px bg-gradient-primary mx-auto" />
          <p className="text-sm text-muted-foreground leading-relaxed max-w-md mx-auto">
            Customize your dashboard by editing the tools array in{" "}
            <code className="px-2 py-1 bg-muted rounded text-foreground font-mono text-xs">
              src/pages/Index.tsx
            </code>
          </p>
          <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <span>Built with</span>
            <span className="text-primary">♥</span>
            <span>for productivity</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
