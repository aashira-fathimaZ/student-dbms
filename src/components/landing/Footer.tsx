const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="container">
      <div className="grid md:grid-cols-3 gap-8 items-center">
        <div>
          <span className="text-xl font-bold text-gradient">SDMS</span>
          <p className="text-sm text-muted-foreground mt-2">Smart Student Database Management System</p>
        </div>
        <div className="flex justify-center gap-8">
          {["About", "Contact", "Privacy Policy"].map((l) => (
            <a key={l} href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">{l}</a>
          ))}
        </div>
        <p className="text-sm text-muted-foreground md:text-right">© {new Date().getFullYear()} SDMS. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
