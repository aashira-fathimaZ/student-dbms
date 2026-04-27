import { useState, FormEvent } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Lock,
  ArrowLeft,
  User,
  KeyRound,
  Eye,
  EyeOff,
  ShieldCheck,
  GraduationCap,
  Database,
  BarChart3,
  Mail,
} from "lucide-react";

// Hardcoded admin credentials (for demo purposes only)
const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "admin123";

type Role = "admin" | "teacher" | "registrar";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<Role>("admin");
  const [remember, setRemember] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Simulate a short auth delay for UX
    setTimeout(() => {
      if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        sessionStorage.setItem("sdms_admin", "true");
        sessionStorage.setItem("sdms_role", role);
        if (remember) localStorage.setItem("sdms_last_user", username);
        navigate("/dashboard");
      } else {
        setError("Invalid credentials. Please try again.");
        setLoading(false);
      }
    }, 500);
  };

  const roles: { value: Role; label: string }[] = [
    { value: "admin", label: "Admin" },
    { value: "teacher", label: "Teacher" },
    { value: "registrar", label: "Registrar" },
  ];

  return (
    <div className="min-h-screen flex relative overflow-hidden bg-background">
      {/* Background decorations */}
      <div className="absolute top-20 -right-32 w-96 h-96 rounded-full gradient-primary opacity-10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-32 w-80 h-80 rounded-full gradient-primary opacity-10 blur-3xl pointer-events-none" />

      {/* Left brand panel (hidden on small screens) */}
      <aside className="hidden lg:flex w-1/2 relative gradient-primary text-primary-foreground p-12 flex-col justify-between overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,white_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="relative z-10 flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-white/15 backdrop-blur flex items-center justify-center">
            <GraduationCap className="w-6 h-6" />
          </div>
          <span className="text-lg font-bold tracking-tight">SDMS Portal</span>
        </div>

        <div className="relative z-10 space-y-6 max-w-md">
          <h2 className="text-4xl font-bold leading-tight">
            Welcome back to your Student Database Management System
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            Manage records, track performance, and generate reports — all from one secure dashboard.
          </p>

          <ul className="space-y-3 pt-4">
            {[
              { icon: Database, text: "Centralized student records" },
              { icon: BarChart3, text: "Real-time analytics & insights" },
              { icon: ShieldCheck, text: "Role-based secure access" },
            ].map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-white/15 backdrop-blur flex items-center justify-center">
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-primary-foreground/90">{text}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="relative z-10 text-sm text-primary-foreground/70">
          © {new Date().getFullYear()} SDMS. Built for educators.
        </p>
      </aside>

      {/* Right form panel */}
      <main className="flex-1 flex items-center justify-center px-4 py-10 sm:px-8 relative z-10">
        <div className="w-full max-w-md">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Back to home
          </Link>

          <Card className="shadow-xl border-border/50 backdrop-blur-sm">
            <CardHeader className="text-center space-y-3">
              <div className="mx-auto w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center shadow-lg">
                <Lock className="w-7 h-7 text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl">Sign in to SDMS</CardTitle>
              <CardDescription>Enter your credentials to access the dashboard</CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Role selector */}
                <div className="space-y-2">
                  <Label>Role</Label>
                  <div className="grid grid-cols-3 gap-2" role="radiogroup" aria-label="Select role">
                    {roles.map((r) => {
                      const active = role === r.value;
                      return (
                        <button
                          type="button"
                          key={r.value}
                          role="radio"
                          aria-checked={active}
                          onClick={() => setRole(r.value)}
                          className={`px-3 py-2 text-sm rounded-md border transition-all ${
                            active
                              ? "border-primary bg-primary/10 text-primary font-medium shadow-sm"
                              : "border-input bg-background text-muted-foreground hover:border-primary/40 hover:text-foreground"
                          }`}
                        >
                          {r.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Username */}
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                    <Input
                      id="username"
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="admin"
                      autoComplete="username"
                      className="pl-9"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">
                    Email <span className="text-muted-foreground font-normal">(optional)</span>
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@school.edu"
                      autoComplete="email"
                      className="pl-9"
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <button
                      type="button"
                      className="text-xs text-primary hover:underline"
                      onClick={() => setError("Password reset is not available in the demo.")}
                    >
                      Forgot password?
                    </button>
                  </div>
                  <div className="relative">
                    <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      autoComplete="current-password"
                      className="pl-9 pr-10"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((s) => !s)}
                      aria-label={showPassword ? "Hide password" : "Show password"}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Remember me */}
                <div className="flex items-center gap-2 pt-1">
                  <Checkbox
                    id="remember"
                    checked={remember}
                    onCheckedChange={(v) => setRemember(Boolean(v))}
                  />
                  <Label htmlFor="remember" className="text-sm font-normal cursor-pointer">
                    Remember me on this device
                  </Label>
                </div>

                {error && (
                  <p
                    role="alert"
                    className="text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-md px-3 py-2"
                  >
                    {error}
                  </p>
                )}

                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full"
                  disabled={loading}
                >
                  {loading ? "Signing in..." : "Login"}
                </Button>

                <div className="relative py-2">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-border" />
                  </div>
                  <div className="relative flex justify-center text-xs">
                    <span className="bg-card px-2 text-muted-foreground">Demo access</span>
                  </div>
                </div>

                <p className="text-xs text-center text-muted-foreground">
                  Use <span className="font-medium text-foreground">admin</span> /{" "}
                  <span className="font-medium text-foreground">admin123</span> to explore the dashboard.
                </p>
              </form>
            </CardContent>
          </Card>

          <p className="text-center text-xs text-muted-foreground mt-6">
            Need an account? Contact your system administrator.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Login;
