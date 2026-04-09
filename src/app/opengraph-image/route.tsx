import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: "#050505",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontSize: 96,
            fontWeight: 300,
            color: "#f0f0f0",
            letterSpacing: "-0.02em",
            lineHeight: 1,
            marginBottom: "24px",
          }}
        >
          Kian
        </div>
        <div
          style={{
            fontSize: 32,
            color: "#6b7280",
            fontWeight: 400,
          }}
        >
          Founder. Mathematician. Builder.
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "80px",
            left: "80px",
            fontSize: 20,
            color: "#34d399",
          }}
        >
          kiandevelops.com
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
