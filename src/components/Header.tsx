import { Terminal } from "lucide-react";

export const Header = () => {
  return (
    <header className="w-full py-8 mb-12">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center space-x-3">
          <div className="p-3 bg-gradient-primary rounded-xl shadow-glow">
            <Terminal className="h-8 w-8 text-primary-foreground" />
          </div>
          <div className="text-center">
            <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Personal Tools Dashboard
            </h1>
            <p className="text-muted-foreground mt-1">
              Quick access to your VPS-hosted tools
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};