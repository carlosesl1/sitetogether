import { ImageResponse } from "next/og";

export const alt =
  "Adequação ao ECA Digital com diagnóstico, governança e plano de ação";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "stretch",
          background: "#f8f8f5",
          color: "#111111",
          display: "flex",
          height: "100%",
          justifyContent: "space-between",
          padding: "72px",
          position: "relative",
          width: "100%",
        }}
      >
        <div
          style={{
            background: "#f5c000",
            height: "18px",
            left: 0,
            position: "absolute",
            top: 0,
            width: "100%",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", maxWidth: "850px" }}>
          <div
            style={{
              border: "2px solid #d8d8d2",
              borderRadius: "999px",
              display: "flex",
              fontSize: "24px",
              fontWeight: 700,
              letterSpacing: "0.08em",
              padding: "12px 22px",
              textTransform: "uppercase",
            }}
          >
            ECA Digital
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "72px",
              fontWeight: 800,
              letterSpacing: "-0.045em",
              lineHeight: 1.05,
              marginTop: "44px",
            }}
          >
            Diagnóstico e adequação com clareza
          </div>
          <div
            style={{
              color: "#555550",
              display: "flex",
              fontSize: "28px",
              lineHeight: 1.35,
              marginTop: "28px",
            }}
          >
            Aplicabilidade, riscos e próximos passos para produtos e operações digitais.
          </div>
        </div>
        <div
          style={{
            alignItems: "flex-end",
            display: "flex",
            flexDirection: "column",
            fontSize: "25px",
            fontWeight: 800,
            justifyContent: "space-between",
            letterSpacing: "-0.02em",
          }}
        >
          <div
            style={{
              alignItems: "center",
              background: "#111111",
              borderRadius: "28px",
              color: "#f5c000",
              display: "flex",
              height: "112px",
              justifyContent: "center",
              width: "112px",
            }}
          >
            T.
          </div>
          <div style={{ display: "flex" }}>TOGETHER Privacy &amp; Tech</div>
        </div>
      </div>
    ),
    size,
  );
}
