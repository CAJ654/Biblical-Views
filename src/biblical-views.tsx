import { useState, useEffect } from "react";

interface View {
  name: string;
  spectrum: number;
  tags: string[];
  summary: string;
  key_texts: string[];
  proponents: string;
  notes?: string;
}

interface Category {
  id: string;
  icon: string;
  title: string;
  question: string;
  views: View[];
}

const spectrumColors = [
  "#3b82f6", "#60a5fa", "#a78bfa", "#c084fc", "#f472b6", "#fb7185", "#f97316"
];

function getSpectrumColor(val: number): string {
  const idx = Math.round((val / 100) * (spectrumColors.length - 1));
  return spectrumColors[idx];
}

function tabWord(title: string): string {
  return title.split(" ").find(w => w.toLowerCase() !== "the") || title.split(" ")[0];
}

export default function BiblicalViews() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState<string>("");
  const [expandedView, setExpandedView] = useState<number | null>(null);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}categories.json`)
      .then(r => r.json())
      .then((data: Category[]) => {
        setCategories(data);
        setActiveCategory(data[0].id);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div style={{
        background: "#0f0e0c", color: "#7c6e58", minHeight: "100vh",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontFamily: "Georgia, serif", fontSize: "0.9rem", letterSpacing: "0.1em",
      }}>
        LOADING...
      </div>
    );
  }

  const cat = categories.find(c => c.id === activeCategory)!;

  return (
    <div style={{
      fontFamily: "'Georgia', 'Times New Roman', serif",
      background: "#0f0e0c",
      color: "#e8e2d6",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      margin: 0,
      padding: 0,
    }}>
      {/* Header */}
      <div style={{
        padding: "2rem 2rem 1rem",
        borderBottom: "1px solid #2a2620",
        background: "linear-gradient(180deg, #1a1714 0%, #0f0e0c 100%)",
      }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ fontSize: "0.7rem", letterSpacing: "0.25em", color: "#7c6e58", textTransform: "uppercase", marginBottom: "0.5rem" }}>
            Theological Cartography
          </div>
          <h1 style={{
            fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
            fontWeight: 400,
            margin: 0,
            color: "#f0ead8",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
          }}>
            A Survey of Biblical Views
          </h1>
          <p style={{ fontSize: "0.85rem", color: "#7c6e58", margin: "0.5rem 0 0", fontStyle: "italic" }}>
            The major positions on {categories.length} doctrinal questions
          </p>
        </div>
      </div>

      {/* Category Nav */}
      <div style={{
        overflowX: "auto",
        borderBottom: "1px solid #2a2620",
        background: "#13120f",
        flexShrink: 0,
      }}>
        <div style={{
          display: "flex",
          gap: 0,
          minWidth: "max-content",
          maxWidth: 900,
          margin: "0 auto",
        }}>
          {categories.map(c => (
            <button
              key={c.id}
              onClick={() => { setActiveCategory(c.id); setExpandedView(null); }}
              style={{
                background: activeCategory === c.id ? "#1e1b16" : "transparent",
                border: "none",
                borderBottom: activeCategory === c.id ? "2px solid #c9a84c" : "2px solid transparent",
                color: activeCategory === c.id ? "#f0ead8" : "#7c6e58",
                padding: "0.75rem 1rem",
                cursor: "pointer",
                fontSize: "0.78rem",
                fontFamily: "inherit",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.25rem",
                whiteSpace: "nowrap",
                transition: "all 0.15s",
                minWidth: 70,
              }}
            >
              <span style={{ fontSize: "1.2rem" }}>{c.icon}</span>
              <span style={{ letterSpacing: "0.01em" }}>{tabWord(c.title)}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main */}
      <div style={{ flex: 1, maxWidth: 900, margin: "0 auto", width: "100%", padding: "1.5rem 1rem 3rem" }}>
        {/* Category Header */}
        <div style={{ marginBottom: "1.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.25rem" }}>
            <span style={{ fontSize: "1.8rem" }}>{cat.icon}</span>
            <h2 style={{ margin: 0, fontSize: "1.4rem", fontWeight: 400, color: "#f0ead8" }}>{cat.title}</h2>
          </div>
          <p style={{ margin: 0, color: "#7c6e58", fontSize: "0.9rem", fontStyle: "italic", paddingLeft: "2.55rem" }}>
            {cat.question}
          </p>
        </div>

        {/* Spectrum bar */}
        <div style={{ marginBottom: "1.5rem", paddingLeft: "2.55rem" }}>
          <div style={{
            height: 6,
            borderRadius: 3,
            background: "linear-gradient(90deg, #3b82f6, #a78bfa, #f472b6, #f97316)",
            position: "relative",
            marginBottom: "0.4rem",
          }}>
            {cat.views.map(v => (
              <div key={v.name} style={{
                position: "absolute",
                left: `${v.spectrum}%`,
                top: "50%",
                transform: "translate(-50%, -50%)",
                width: 12,
                height: 12,
                borderRadius: "50%",
                background: getSpectrumColor(v.spectrum),
                border: "2px solid #0f0e0c",
                cursor: "pointer",
              }} title={v.name} />
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.65rem", color: "#5a5040", letterSpacing: "0.05em" }}>
            <span>◀ MORE RESTRICTIVE / TRADITIONAL</span>
            <span>MORE PROGRESSIVE / OPEN ▶</span>
          </div>
        </div>

        {/* Views */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {cat.views.map((view, i) => {
            const isOpen = expandedView === i;
            const col = getSpectrumColor(view.spectrum);
            return (
              <div
                key={view.name}
                style={{
                  background: "#16140f",
                  border: `1px solid ${isOpen ? col + "66" : "#2a2620"}`,
                  borderLeft: `3px solid ${col}`,
                  borderRadius: 6,
                  overflow: "hidden",
                  transition: "border-color 0.2s",
                  cursor: "pointer",
                }}
                onClick={() => setExpandedView(isOpen ? null : i)}
              >
                <div style={{ padding: "1rem 1.2rem", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem" }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "0.5rem", marginBottom: "0.4rem" }}>
                      <span style={{ fontSize: "1rem", fontWeight: 600, color: "#f0ead8", letterSpacing: "-0.01em" }}>
                        {view.name}
                      </span>
                      {view.tags.map(t => (
                        <span key={t} style={{
                          fontSize: "0.6rem",
                          background: "#2a2620",
                          color: "#9c8a72",
                          padding: "0.1rem 0.4rem",
                          borderRadius: 2,
                          letterSpacing: "0.04em",
                          textTransform: "uppercase",
                        }}>{t}</span>
                      ))}
                    </div>
                    <p style={{ margin: 0, fontSize: "0.85rem", color: "#a89880", lineHeight: 1.55 }}>
                      {view.summary}
                    </p>
                  </div>
                  <div style={{ color: "#5a5040", fontSize: "1.2rem", marginTop: "0.1rem", flexShrink: 0 }}>
                    {isOpen ? "▲" : "▼"}
                  </div>
                </div>

                {isOpen && (
                  <div style={{
                    padding: "0 1.2rem 1.2rem",
                    borderTop: "1px solid #2a2620",
                    marginTop: 0,
                  }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginTop: "1rem" }}>
                      <div>
                        <div style={{ fontSize: "0.65rem", letterSpacing: "0.12em", color: "#7c6e58", textTransform: "uppercase", marginBottom: "0.4rem" }}>Key Texts</div>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem" }}>
                          {view.key_texts.map(t => (
                            <span key={t} style={{
                              fontSize: "0.75rem",
                              background: "#1e1b16",
                              color: "#c9a84c",
                              padding: "0.2rem 0.5rem",
                              borderRadius: 3,
                              fontFamily: "monospace",
                              border: "1px solid #2a2620",
                            }}>{t}</span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <div style={{ fontSize: "0.65rem", letterSpacing: "0.12em", color: "#7c6e58", textTransform: "uppercase", marginBottom: "0.4rem" }}>Proponents</div>
                        <p style={{ margin: 0, fontSize: "0.8rem", color: "#a89880", lineHeight: 1.5, fontStyle: "italic" }}>{view.proponents}</p>
                      </div>
                    </div>
                    {view.notes && (
                      <div style={{ marginTop: "0.85rem", padding: "0.65rem 0.85rem", background: "#1a1714", borderRadius: 4, borderLeft: `2px solid ${col}44` }}>
                        <div style={{ fontSize: "0.65rem", letterSpacing: "0.12em", color: "#7c6e58", textTransform: "uppercase", marginBottom: "0.3rem" }}>Notes</div>
                        <p style={{ margin: 0, fontSize: "0.8rem", color: "#9c8a72", lineHeight: 1.55 }}>{view.notes}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
