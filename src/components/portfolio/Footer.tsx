const Footer = () => {
  return (
    <footer className="py-10 px-4 border-t border-border/50">
      <div className="container mx-auto text-center">
        <p className="text-muted-foreground/60 text-sm italic mb-3">
          "The best way to predict the future is to create it."
        </p>
        <p className="text-muted-foreground/40 text-xs">
          Built with ❤️ using React & Tailwind CSS
        </p>
        <p className="text-muted-foreground/30 text-xs mt-1">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
