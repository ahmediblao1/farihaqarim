import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../components/ui/dialog";

interface ProjectDialogProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    category: string;
    description: string;
    year: string;
    client?: string;
    technologies?: string[];
    challenge?: string;
    solution?: string;
    results?: string[];
    images?: string[];
  } | null;
}

export default function ProjectDialog({ isOpen, onClose, project }: ProjectDialogProps) {
  if (!project) return null;

  const mockImages = [
    "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-white border-4 border-black p-0">
        <div className="p-8">
          <DialogHeader className="mb-8">
            <div className="flex justify-between items-start mb-4">
              <span className="bg-black text-white px-4 py-2 font-retro font-bold text-sm">
                {project.category}
              </span>
              <span className="font-retro font-bold text-2xl">
                {project.year}
              </span>
            </div>
            <DialogTitle className="text-4xl font-retro font-black mb-4">
              {project.title}
            </DialogTitle>
            <p className="text-xl font-retro leading-relaxed">
              {project.description}
            </p>
          </DialogHeader>

          {/* Project Images */}
          <div className="mb-8">
            <h3 className="text-2xl font-retro font-black mb-6">PROJECT SHOWCASE</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {mockImages.map((image, index) => (
                <div key={index} className="retro-border overflow-hidden">
                  <img 
                    src={image}
                    alt={`${project.title} showcase ${index + 1}`}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Project Details */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="retro-card bg-white p-6">
              <h4 className="text-xl font-retro font-black mb-4">CHALLENGE</h4>
              <p className="font-retro leading-relaxed">
                {project.challenge || "The client needed a complete digital transformation to compete in the modern marketplace and reach new audiences effectively."}
              </p>
            </div>
            <div className="retro-card bg-white p-6">
              <h4 className="text-xl font-retro font-black mb-4">SOLUTION</h4>
              <p className="font-retro leading-relaxed">
                {project.solution || "We developed a comprehensive strategy combining modern design principles with cutting-edge technology to deliver exceptional results."}
              </p>
            </div>
          </div>

          {/* Technologies */}
          {project.technologies && (
            <div className="mb-8">
              <h4 className="text-xl font-retro font-black mb-4">TECHNOLOGIES USED</h4>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="bg-black text-white px-4 py-2 font-retro font-bold text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Results */}
          <div className="retro-card bg-black text-white p-6">
            <h4 className="text-xl font-retro font-black mb-4">RESULTS</h4>
            <ul className="space-y-2">
              {(project.results || [
                "300% increase in user engagement",
                "50% reduction in bounce rate", 
                "200% improvement in conversion rate",
                "Award-winning design recognition"
              ]).map((result, index) => (
                <li key={index} className="font-retro">
                  • {result}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="text-center mt-8 pt-8 border-t-2 border-black">
            <h4 className="text-2xl font-retro font-black mb-4">INTERESTED IN SIMILAR WORK?</h4>
            <button 
              onClick={onClose}
              className="retro-button bg-black text-white font-retro font-bold text-lg px-8 py-3 mr-4"
            >
              CLOSE
            </button>
            <button className="retro-button bg-white text-black font-retro font-bold text-lg px-8 py-3">
              START YOUR PROJECT
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}