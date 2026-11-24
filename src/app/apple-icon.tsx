import { ImageResponse } from "next/og";

// Apple touch icon (home screen). Generated at build time as a static PNG.
// iOS applies its own rounded mask, so the background is full-bleed.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#14171F",
        }}
      >
        <svg width="132" height="132" viewBox="0 0 64 64">
          <g fill="none" strokeWidth="5" strokeLinejoin="miter" strokeLinecap="butt">
            <path d="M11 47 L21 17 L31 47 M14.6 37 H27.4" stroke="#F2F0EB" />
            <path d="M35 47 V17 L44 33 L53 17 V47" stroke="#C4B5FD" />
          </g>
        </svg>
      </div>
    ),
    { ...size },
  );
}
