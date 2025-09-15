import { Header } from "@/components/Header";
import { ToolCard } from "@/components/ToolCard";

// Tools available across hosted services, utilities, and backend
const tools = [{
  name: "Actual Budget",
  description: "Manage personal finances with Actual Budget.",
  url: "https://ab.andrewallen.uk/",
  category: "Hosted",
  status: "online" as const
}, {
  name: "AudiobookShelf",
  description: "Stream and organize personal audiobooks with AudiobookShelf.",
  url: "https://audio.andrewallen.uk/",
  category: "Hosted",
  status: "online" as const
}, {
  name: "CalibreWeb",
  description: "Access personal ebook library via CalibreWeb.",
  url: "https://books.andrewallen.uk/",
  category: "Hosted",
  status: "online" as const
}, {
  name: "Miniflux",
  description: "Read personal RSS feeds through Miniflux.",
  url: "https://rss.andrewallen.uk/",
  category: "Hosted",
  status: "online" as const
}, {
  name: "Ghost Notes",
  description: "Ghost-powered site for personal field notes.",
  url: "https://notes.andrewallen.uk/",
  category: "Hosted",
  status: "online" as const
}, {
  name: "PrivateBin",
  description: "Share encrypted notes with PrivateBin.",
  url: "https://bin.andrewallen.uk/",
  category: "Tools",
  status: "online" as const
}, {
  name: "Shlink",
  description: "Manage short links via alias.andrewallen.uk with Shlink.",
  url: "https://url.andrewallen.uk/",
  category: "Tools",
  status: "online" as const
}, {
  name: "ConvertX",
  description: "Convert files and media with ConvertX.",
  url: "https://convert.andrewallen.uk/",
  category: "Tools",
  status: "online" as const
}, {
  name: "n8n",
  description: "Build automations and workflows with n8n.",
  url: "https://n8n.andrewallen.uk/",
  category: "Tools",
  status: "online" as const
}, {
  name: "Beszel",
  description: "Monitor infrastructure using Beszel.",
  url: "https://b.andrewallen.uk/",
  category: "Backend",
  status: "online" as const
}, {
  name: "Umami",
  description: "Collect analytics with Umami.",
  url: "https://u.andrewallen.uk/",
  category: "Backend",
  status: "online" as const
}];
const Index = () => {
  return <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-6 pb-16">
        {/* Enhanced grid with staggered animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => <ToolCard key={index} name={tool.name} description={tool.description} url={tool.url} category={tool.category} status={tool.status} delay={index * 100} />)}
        </div>
        
        {/* Enhanced footer section */}
        
      </main>
    </div>;
};
export default Index;