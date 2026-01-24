import React, { useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import { API_ENDPOINTS, API_BASE_URL } from "../config";

function TabButton({ active, children, ...props }) {
  return (
    <button
      {...props}
      className={[
        "flex-1 py-2 text-sm font-semibold tracking-wide rounded-sm border transition",
        active
          ? "bg-[#bcdcff] text-[#0b1b2a] border-[#0b1b2a]/30"
          : "bg-white text-[#0b1b2a]/70 border-[#0b1b2a]/15 hover:bg-[#bcdcff]/40",
      ].join(" ")}
    >
      {children}
    </button>
  );
}

export default function AuthPage() {
  const [mode, setMode] = useState("login"); // "login" | "register"
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [role, setRole] = useState("GUEST"); // or HOST

  const title = useMemo(
    () => (mode === "login" ? "LOGIN" : "CREATE ACCOUNT"),
    [mode]
  );

  async function onSubmit(e) {
    e.preventDefault();
    setErr("");
    setLoading(true);

    try {
      if (mode === "register") {
        const res = await fetch(API_ENDPOINTS.AUTH.REGISTER, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email,
            password,
            full_name: fullName,
            role, // "GUEST" | "HOST"
          }),
        });

        if (!res.ok) throw new Error(await res.text());
        setMode("login");
        setPassword("");
        return;
      }

      const res = await fetch(API_ENDPOINTS.AUTH.LOGIN, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) throw new Error(await res.text());
      const data = await res.json();

      // supports either flat tokens OR { user, tokens }
      const access = data.access_token ?? data.tokens?.access_token ?? "";
      const refresh = data.refresh_token ?? data.tokens?.refresh_token ?? "";
      const userRole = data.role ?? data.user?.role ?? "";

      localStorage.setItem("access_token", access);
      localStorage.setItem("refresh_token", refresh);
      localStorage.setItem("role", String(userRole));

      window.location.href = "/dashboard";
    } catch (e) {
      setErr(e?.message || "Internal error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Keep your existing navbar style */}
      <Navbar />

      <div className="px-10 py-10 flex justify-center">
        <div className="w-[520px]">
          <h1 className="text-lg font-semibold tracking-wide text-[#0b1b2a] mb-6">
            {title}
          </h1>

          <div className="flex gap-3 mb-6">
            <TabButton active={mode === "login"} onClick={() => setMode("login")} type="button">
              LOGIN
            </TabButton>
            <TabButton active={mode === "register"} onClick={() => setMode("register")} type="button">
              REGISTER
            </TabButton>
          </div>

          <div className="bg-[#bcdcff] rounded-sm shadow-sm p-6">
            <p className="text-sm text-[#0b1b2a]/80 mb-4">
              {mode === "login"
                ? "Access your jobs, devices and billing."
                : "Join Symbiotica as a Guest or Host."}
            </p>

            {err ? (
              <div className="mb-4 rounded-sm border border-red-500/30 bg-red-50 px-3 py-2 text-sm text-red-700 whitespace-pre-wrap">
                {err}
              </div>
            ) : null}

            <form onSubmit={onSubmit} className="space-y-4">
              {mode === "register" && (
                <div>
                  <label className="block text-sm font-medium text-[#0b1b2a] mb-1">
                    Full name
                  </label>
                  <input
                    className="w-full rounded-sm border border-[#0b1b2a]/25 bg-white px-3 py-2 text-sm text-[#0b1b2a] outline-none focus:border-[#0b1b2a]/50"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Your name"
                    required
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-[#0b1b2a] mb-1">
                  Email
                </label>
                <input
                  className="w-full rounded-sm border border-[#0b1b2a]/25 bg-white px-3 py-2 text-sm text-[#0b1b2a] outline-none focus:border-[#0b1b2a]/50"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  type="email"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#0b1b2a] mb-1">
                  Password
                </label>
                <input
                  className="w-full rounded-sm border border-[#0b1b2a]/25 bg-white px-3 py-2 text-sm text-[#0b1b2a] outline-none focus:border-[#0b1b2a]/50"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Minimum 8 characters"
                  type="password"
                  minLength={8}
                  required
                />
              </div>

              {mode === "register" && (
                <div>
                  <label className="block text-sm font-medium text-[#0b1b2a] mb-2">
                    Account type
                  </label>
                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => setRole("GUEST")}
                      className={[
                        "flex-1 rounded-sm border px-3 py-2 text-sm font-semibold",
                        role === "GUEST"
                          ? "bg-white border-[#0b1b2a]/30 text-[#0b1b2a]"
                          : "bg-white/40 border-[#0b1b2a]/15 text-[#0b1b2a]/70 hover:bg-white/70",
                      ].join(" ")}
                    >
                      Guest
                    </button>
                    <button
                      type="button"
                      onClick={() => setRole("HOST")}
                      className={[
                        "flex-1 rounded-sm border px-3 py-2 text-sm font-semibold",
                        role === "HOST"
                          ? "bg-white border-[#0b1b2a]/30 text-[#0b1b2a]"
                          : "bg-white/40 border-[#0b1b2a]/15 text-[#0b1b2a]/70 hover:bg-white/70",
                      ].join(" ")}
                    >
                      Host
                    </button>
                  </div>
                </div>
              )}

              <button
                disabled={loading}
                className="w-full rounded-sm border border-[#0b1b2a]/30 bg-white px-3 py-2 text-sm font-semibold tracking-wide text-[#0b1b2a] hover:bg-white/80 disabled:opacity-60"
                type="submit"
              >
                {loading ? "PLEASE WAIT..." : mode === "login" ? "LOGIN" : "CREATE ACCOUNT"}
              </button>

              <div className="text-center text-sm text-[#0b1b2a]/75">
                {mode === "login" ? (
                  <>
                    No account?{" "}
                    <button
                      type="button"
                      onClick={() => setMode("register")}
                      className="font-semibold text-[#0b1b2a] underline underline-offset-2"
                    >
                      Register
                    </button>
                  </>
                ) : (
                  <>
                    Already have one?{" "}
                    <button
                      type="button"
                      onClick={() => setMode("login")}
                      className="font-semibold text-[#0b1b2a] underline underline-offset-2"
                    >
                      Login
                    </button>
                  </>
                )}
              </div>
            </form>
          </div>

          <div className="mt-4 text-xs text-[#0b1b2a]/60">
            API: <span className="font-mono">{API_BASE_URL}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
