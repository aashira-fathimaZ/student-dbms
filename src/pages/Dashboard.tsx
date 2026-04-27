import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LogOut, Users, FileText, BarChart3, Shield } from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();

  // Simple auth guard — redirect home if not logged in
  useEffect(() => {
    if (sessionStorage.getItem("sdms_admin") !== "true") {
      navigate("/");
    }
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem("sdms_admin");
    navigate("/");
  };

  const stats = [
    { icon: Users, label: "Students", value: "2,340" },
    { icon: FileText, label: "Records", value: "12,800" },
    { icon: BarChart3, label: "Reports", value: "156" },
    { icon: Shield, label: "Uptime", value: "99.9%" },
  ];

  return (
    <div className="min-h-screen">
      {/* Top bar */}
      <header className="glass border-b border-border/50 sticky top-0 z-50">
        <div className="container flex items-center justify-between h-16">
          <span className="text-xl font-bold text-gradient">SDMS Admin</span>
          <Button variant="heroOutline" size="sm" onClick={handleLogout}>
            <LogOut className="w-4 h-4" /> Logout
          </Button>
        </div>
      </header>

      <main className="container py-12">
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-2">
            Admin Dashboard
          </h1>
          <p className="text-muted-foreground">
            Welcome back, admin. Here's an overview of your system.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map(({ icon: Icon, label, value }) => (
            <Card key={label} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <Icon className="w-6 h-6 text-primary mb-3" />
                <p className="text-3xl font-bold text-foreground">{value}</p>
                <p className="text-sm text-muted-foreground mt-1">{label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
