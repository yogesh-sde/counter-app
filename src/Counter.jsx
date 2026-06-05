import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [anim, setAnim] = useState(null);

  function pop(type) {
    setAnim(type);
    setTimeout(() => setAnim(null), 160);
  }

  function increment() {
    setCount((c) => c + 1);
    pop("up");
  }

  function decrement() {
    if (count <= 0) return;
    setCount((c) => c - 1);
    pop("down");
  }

  function reset() {
    setCount(0);
  }

  const hint =
    count === 0 ? "tap + to start"
    : count % 10 === 0 ? `${count} — nice!`
    : "\u00a0";

  return (
    <div
      className="min-h-screen flex items-center justify-center p-8 font-sans"
      style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 40%, #0f3460 70%, #533483 100%)" }}
    >
      <div
        className="flex flex-col items-center w-[300px] rounded-[32px] px-6 pt-11 pb-8"
        style={{
          background: "rgba(255,255,255,0.07)",
          border: "1px solid rgba(255,255,255,0.12)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
        }}
      >
        {/* Title */}
        <span
          className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-10"
          style={{ color: "rgba(255,255,255,0.35)" }}
        >
          Counter
        </span>

        {/* Number */}
        <div className="flex flex-col items-center mb-12">
          <span
            className="text-[108px] font-light text-white leading-none"
            style={{
              letterSpacing: "-6px",
              transform:
                anim === "up" ? "scale(1.07) translateY(-5px)"
                : anim === "down" ? "scale(0.93) translateY(4px)"
                : "scale(1)",
              opacity: anim === "down" ? 0.45 : 1,
              transition: "transform 0.13s cubic-bezier(0.34,1.5,0.64,1), opacity 0.1s",
            }}
          >
            {count}
          </span>
          <span
            className="text-[12px] font-medium mt-3 min-h-[18px] transition-colors duration-200"
            style={{ color: count % 10 === 0 && count > 0 ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.25)" }}
          >
            {hint}
          </span>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 w-full mb-3">
          <button
            onClick={decrement}
            className="flex-1 h-16 rounded-[20px] text-[36px] font-light text-white flex items-center justify-center active:scale-90 transition-transform cursor-pointer"
            style={{
              background: "rgba(255,255,255,0.13)",
              border: "1px solid rgba(255,255,255,0.18)",
            }}
          >
            −
          </button>
          <button
            onClick={increment}
            className="flex-1 h-16 rounded-[20px] text-[36px] font-light text-white flex items-center justify-center active:scale-90 transition-transform cursor-pointer"
            style={{
              background: "rgba(255,255,255,0.13)",
              border: "1px solid rgba(255,255,255,0.18)",
            }}
          >
            +
          </button>
        </div>

        {/* Reset */}
        <button
          onClick={reset}
          className="w-full h-12 rounded-2xl text-[13px] font-medium tracking-wide cursor-pointer transition-all"
          style={{
            background: "transparent",
            border: "1px solid rgba(255,255,255,0.1)",
            color: "rgba(255,255,255,0.3)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(239,68,68,0.15)";
            e.currentTarget.style.color = "#f87171";
            e.currentTarget.style.borderColor = "rgba(239,68,68,0.3)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "rgba(255,255,255,0.3)";
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}