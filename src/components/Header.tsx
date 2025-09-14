import { Terminal, Sparkles } from "lucide-react";
export const Header = () => {
  return <header className="relative w-full py-16 mb-16 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{
        animationDelay: '2s'
      }} />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Icon with enhanced styling */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-lg opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
            <div className="relative p-4 bg-gradient-primary rounded-2xl shadow-glow group-hover:shadow-card-hover transition-all duration-300 group-hover:scale-105">
              <Terminal className="h-10 w-10 text-primary-foreground" />
              <Sparkles className="absolute -top-1 -right-1 h-4 w-4 text-yellow-300 animate-pulse" />
            </div>
          </div>
          
          {/* Enhanced typography */}
          <div className="text-center space-y-3">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent animate-scale-in leading-tight">/tools.andrewallen.uk/</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{
            animationDelay: '200ms'
          }}>
              Streamlined access to your VPS-hosted tools and utilities.<br />
              <span className="text-primary font-medium">Built for efficiency, designed for speed.</span>
            </p>
          </div>
          
          {/* Decorative elements */}
          <div className="flex items-center gap-2 text-xs text-muted-foreground animate-fade-in-up" style={{
          animationDelay: '400ms'
        }}>
            <div className="w-8 h-px bg-gradient-primary" />
            <span className="font-medium tracking-wider uppercase">Professional Dashboard</span>
            <div className="w-8 h-px bg-gradient-primary" />
          </div>
        </div>
      </div>
    </header>;
};