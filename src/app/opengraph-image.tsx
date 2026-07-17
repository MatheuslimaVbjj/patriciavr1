import { ImageResponse } from "next/og";
export const alt = "Patrícia Garboni — menopausa sem tabus e vida depois dos 50";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OpenGraphImage() { return new ImageResponse(<div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 70, background: "#f7f2eb", color: "#2d2927" }}><div style={{ fontSize: 28, color: "#8a4f42", letterSpacing: 4, textTransform: "uppercase" }}>Patrícia Garboni</div><div style={{ maxWidth: 950, fontSize: 70, lineHeight: 1.05 }}>Menopausa sem tabus. Vida depois dos 50 com mais protagonismo.</div><div style={{ fontSize: 26, color: "#6f6863" }}>Cinquentei e Agora</div></div>, size); }
