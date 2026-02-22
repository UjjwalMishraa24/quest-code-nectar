const Footer = () => {
  return (
    <footer className="py-10 px-4 border-t border-primary/10 relative">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="container mx-auto text-center relative z-10">
        <p className="text-muted-foreground/60 text-sm italic mb-3 font-mono">
          "The best way to predict the future is to create it."
        </p>
        <p className="text-muted-foreground/40 text-xs font-mono">
          Built with ❤️ using React & Tailwind CSS
        </p>
        <p className="text-muted-foreground/30 text-xs mt-1 font-mono">
          © {new Date().getFullYear()} Ujjwal Mishra. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
