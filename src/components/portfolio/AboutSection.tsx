import { ABOUT_SKILLS, AVATAR_URL } from "@/config/portfolio";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="px-6 md:px-10 py-20 md:py-24 border-t border-border grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center"
    >
      {/* Left */}
      <div>
        <div className="section-label text-primary">// About</div>
        <h2
          className="section-heading leading-[1.1] mb-6"
          style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
        >
          Generalist turned
          <br />
          <span className="text-primary">AI Builder.</span>
        </h2>
        <p className="text-muted-foreground leading-[1.8] text-[15px] mb-4">
          IIT Madras → Founders' offices at Delta Velocity & TheMoonDevs → Now building my own thing.
        </p>
        <p className="text-muted-foreground leading-[1.8] text-[15px] mb-8">
          I spent years working inside fast-moving startups, automating workflows and running cross-functional ops. Now I've turned those same skills toward AI content systems — faceless channels, AI video ads, and automation pipelines.
        </p>
        <div className="flex gap-3 flex-wrap">
          {ABOUT_SKILLS.map((t) => (
            <span
              key={t}
              className="font-mono text-[11px] tracking-[0.1em] rounded-sm"
              style={{
                color: "#7B61FF",
                border: "1px solid #7B61FF33",
                padding: "4px 10px",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Right — visual card */}
      <div
        className="rounded relative overflow-hidden p-8 md:p-10"
        style={{
          background: "#0a0a10",
          border: "1px solid hsl(var(--border))",
        }}
      >
        <div
          className="absolute rounded-full"
          style={{
            top: -40,
            right: -40,
            width: 200,
            height: 200,
            background: "radial-gradient(circle, hsl(180 100% 50% / 0.06) 0%, transparent 70%)",
          }}
        />
        {/* Avatar */}
        {AVATAR_URL ? (
          <img
            src={AVATAR_URL}
            alt="Shivanshu Tripathi"
            className="w-[72px] h-[72px] rounded-full object-cover mb-6"
            style={{ border: "2px solid hsl(180 100% 50% / 0.2)" }}
          />
        ) : (
          <div
            className="w-[72px] h-[72px] rounded-full flex items-center justify-center text-[28px] mb-6"
            style={{
              background: "linear-gradient(135deg, #0FF33, #7B61FF33)",
              border: "2px solid #0FF33",
            }}
          >
            ST
          </div>
        )}
        <div className="font-heading font-bold text-xl mb-1">Shivanshu Tripathi</div>
        <div className="text-[11px] text-primary font-mono tracking-[0.12em]">
          AI CONTENT BUILDER · GURGAON, INDIA
        </div>
      </div>
    </section>
  );
}
