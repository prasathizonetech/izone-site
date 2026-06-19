import { Instagram, Facebook, Linkedin, Twitter } from "lucide-react";

const SOCIAL_ICONS = {
  instagram: { Icon: Instagram, href: (url) => url },
  facebook: { Icon: Facebook, href: (url) => url },
  linkedin: { Icon: Linkedin, href: (url) => url },
  x: { Icon: Twitter, href: (url) => url },
};

const ExpertCard = ({ name, role, avatar, bio, social = {} }) => {
  const bioLines = Array.isArray(bio)
    ? bio
    : String(bio || "").split(/\r?\n/);

  const socialLinks = Object.entries(social || {}).filter(([, url]) => url);

  return (
    <div className="glass-card w-full p-6 group flex flex-col relative overflow-hidden cursor-pointer shadow-lg transition-all duration-300">
      {/* Sliding Fill Background */}
      <div className="absolute inset-0 w-full h-full bg-primary -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0" />

      {/* Hover overlay: name + social icons */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 pointer-events-none group-hover:pointer-events-auto px-6">
        <h3 className="font-display font-bold text-xl text-primary-foreground text-center leading-tight">
          {name}
        </h3>
        <span className="text-primary-foreground/80 text-sm font-medium">{role}</span>
        {socialLinks.length > 0 && (
          <div className="flex items-center gap-3 mt-1">
            {socialLinks.map(([platform, url]) => {
              const entry = SOCIAL_ICONS[platform];
              if (!entry) return null;
              const { Icon } = entry;
              return (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={platform}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/15 text-primary-foreground hover:bg-primary-foreground/30 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        )}
      </div>

      {/* Card Content (hidden on hover) */}
      <div className="flex items-center gap-4 mb-4 relative z-10 transition-all duration-300 group-hover:opacity-0">
        <div className="w-16 h-16 rounded-full bg-primary/20 flex flex-shrink-0 items-center justify-center text-primary font-display font-bold text-xl overflow-hidden transition-all duration-300">
          {avatar && (avatar.startsWith("data:") || avatar.startsWith("http") || avatar.startsWith("/") || avatar.startsWith("blob:")) ? (
            <img src={avatar} alt={name} className="w-full h-full object-cover" />
          ) : (
            <span>{avatar || name?.slice(0, 2)?.toUpperCase()}</span>
          )}
        </div>
        <div>
          <h3 className="font-display font-semibold text-lg text-foreground transition-all duration-300 delay-100">{name}</h3>
          <span className="text-primary text-sm font-medium transition-all duration-300 delay-100">{role}</span>
        </div>
      </div>

      <div className="relative z-10 space-y-2 text-sm leading-relaxed text-muted-foreground transition-all duration-300 delay-150 group-hover:opacity-0">
        {bioLines
          .map((line) => String(line).trim())
          .filter(Boolean)
          .map((line, index) => (
            <p key={index} className="text-justify">{line}</p>
          ))}
      </div>
    </div>
  );
};

export default ExpertCard;
