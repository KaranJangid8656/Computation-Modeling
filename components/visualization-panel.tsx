"use client";

import { Card } from "@/components/ui/card";
import { CheckCircle2, XCircle, AlertCircle, ArrowDown } from "lucide-react";

interface VisualizationPanelProps {
  string: string;
  uLen: number;
  vLen: number;
  xLen: number;
  yLen: number;
  pumpingMultiplier: number;
  pumpingLength: number;
  result: { status: string; message: string } | null;
}

export function VisualizationPanel({
  string,
  uLen,
  vLen,
  xLen,
  yLen,
  pumpingMultiplier,
  pumpingLength,
  result,
}: VisualizationPanelProps) {
  const u = string.substring(0, uLen);
  const v = string.substring(uLen, uLen + vLen);
  const x = string.substring(uLen + vLen, uLen + vLen + xLen);
  const y = string.substring(uLen + vLen + xLen, uLen + vLen + xLen + yLen);
  const z = string.substring(uLen + vLen + xLen + yLen);

  let pumpedString = u;
  for (let i = 0; i < pumpingMultiplier; i++) {
    pumpedString += v;
  }
  pumpedString += x;
  for (let i = 0; i < pumpingMultiplier; i++) {
    pumpedString += y;
  }
  pumpedString += z;

  const vxyLen = vLen + xLen + yLen;
  const vyLen = vLen + yLen;
  const condition1 = vxyLen <= pumpingLength;
  const condition2 = vyLen >= 1;

  const segmentColors = {
    u: "bg-blue-100 text-blue-900 dark:bg-blue-900 dark:text-blue-100",
    v: "bg-green-100 text-green-900 dark:bg-green-900 dark:text-green-100",
    x: "bg-purple-100 text-purple-900 dark:bg-purple-900 dark:text-purple-100",
    y: "bg-orange-100 text-orange-900 dark:bg-orange-900 dark:text-orange-100",
    z: "bg-pink-100 text-pink-900 dark:bg-pink-900 dark:text-pink-100",
  };

  const renderSegment = (content: string, color: string) => (
    <div className="flex flex-nowrap items-center gap-0.5 min-h-[28px] overflow-x-auto">
      {content.split("").map((ch, idx) => (
        <span
          key={idx}
          className={`h-7 w-7 grid place-items-center rounded ${color} shadow-sm`}
        >
          {ch}
        </span>
      ))}
    </div>
  );

  return (
    <div className="space-y-4">
      {/* Original Decomposition */}
      <Card className="p-4">
        <h3 className="text-sm font-semibold mb-3 text-foreground">
          Original String Decomposition
        </h3>
        <div className="flex flex-wrap items-end gap-3 mb-3">
          {[
            { label: "u", content: u, color: segmentColors.u },
            { label: "v", content: v, color: segmentColors.v },
            { label: "x", content: x, color: segmentColors.x },
            { label: "y", content: y, color: segmentColors.y },
            { label: "z", content: z, color: segmentColors.z },
          ].map(({ label, content, color }) =>
            content ? (
              <div key={label} className="flex flex-col items-center">
                {renderSegment(content, color)}
                <ArrowDown className="h-5 w-5 mt-1 text-foreground" aria-hidden="true" />
                <span className="text-xs font-semibold mt-0.5 text-muted-foreground">
                  {label}
                </span>
              </div>
            ) : null
          )}
        </div>
        <p className="text-xs text-muted-foreground font-mono">
          s = {u}·{v}·{x}·{y}·{z}
        </p>
      </Card>

      {/* Pumped String */}
      <Card className="p-4">
        <h3 className="text-sm font-semibold mb-3 text-foreground">
          Pumped String (i = {pumpingMultiplier})
        </h3>
        <div className="mb-4 p-3 bg-muted rounded font-mono text-sm break-all">
          s' = {u}·{v}
          <sup>{pumpingMultiplier}</sup>·{x}·{y}
          <sup>{pumpingMultiplier}</sup>·{z}
        </div>
        <div className="flex flex-wrap items-end gap-3 mb-3">
          {/* u segment */}
          {u && (
            <div className="flex flex-col items-center">
              {renderSegment(u, segmentColors.u)}
              <ArrowDown className="h-5 w-5 mt-1 text-foreground" aria-hidden="true" />
            </div>
          )}
          {/* v repeated */}
          {Array.from({ length: pumpingMultiplier }).map((_, i) => (
            <div key={`v-${i}`} className="flex flex-col items-center">
              {renderSegment(v, segmentColors.v)}
              <ArrowDown className="h-5 w-5 mt-1 text-foreground" aria-hidden="true" />
            </div>
          ))}
          {/* x segment */}
          {x && (
            <div className="flex flex-col items-center">
              {renderSegment(x, segmentColors.x)}
              <ArrowDown className="h-5 w-5 mt-1 text-foreground" aria-hidden="true" />
            </div>
          )}
          {/* y repeated */}
          {Array.from({ length: pumpingMultiplier }).map((_, i) => (
            <div key={`y-${i}`} className="flex flex-col items-center">
              {renderSegment(y, segmentColors.y)}
              <ArrowDown className="h-5 w-5 mt-1 text-foreground" aria-hidden="true" />
            </div>
          ))}
          {/* z segment */}
          {z && (
            <div className="flex flex-col items-center">
              {renderSegment(z, segmentColors.z)}
              <ArrowDown className="h-5 w-5 mt-1 text-foreground" aria-hidden="true" />
            </div>
          )}
        </div>
        <p className="text-xs text-muted-foreground font-mono">
          Result: "{pumpedString}"
        </p>
      </Card>

      {/* Result */}
      {result && (
        <div className="space-y-4">
          <Card
            className={`p-4 border-2 ${
              result.status === "VALID"
                ? "border-green-300 bg-green-50/50 dark:bg-green-900/30 dark:border-green-700/50"
                : "border-red-500 bg-red-50 dark:bg-red-950"
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`text-3xl font-bold ${
                  result.status === "VALID"
                    ? "text-green-600 dark:text-green-400"
                    : "text-red-600 dark:text-red-400"
                }`}
              >
                {result.status === "VALID" ? "✓" : "✗"}
              </div>
              <div>
                <h4
                  className={`text-lg font-bold px-3 py-2 rounded-lg ${
                    result.status === "VALID"
                      ? "text-green-800 dark:text-green-200"
                      : "text-red-900 dark:text-red-100"
                  }`}
                >
                  {result.status}
                </h4>
                <p
                  className={`text-lg font-bold px-2 py-2 rounded-lg ${
                    result.status === "VALID"
                      ? "text-green-700 dark:text-green-200 bg-green-50 dark:bg-green-900/40"
                      : "text-red-900 dark:text-red-100 bg-red-100 dark:bg-red-800"
                  }`}
                >
                  {result.status === "VALID"
                    ? "The pumped string is in the language"
                    : "The pumped string is NOT in the language"}
                </p>
              </div>
            </div>
          </Card>

          {/* Language Analysis - Only show when conditions are satisfied and result is valid */}
          {result && vxyLen <= pumpingLength && vyLen >= 1 && result.status === "VALID" && (
            <Card className="p-4 bg-muted/50 dark:bg-muted/10">
              <h3 className="text-sm font-semibold mb-3 text-foreground">
                Language Analysis
              </h3>
              <div className="space-y-3">
                {/* CFL Classification */}
                <div className="flex items-start gap-3 p-3 bg-background rounded-lg">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">
                      The language may be a Context-Free Language (CFL)
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      The string satisfies the pumping lemma conditions for CFLs. However,
                      this doesn't guarantee the language is a CFL, as the pumping lemma
                      is a necessary but not sufficient condition.
                    </p>
                  </div>
                </div>

                {/* Pumping Lemma Conditions */}
                <div className="p-3 bg-background rounded-lg">
                  <h4 className="font-medium mb-2">Pumping Lemma Conditions:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>
                        <span className="font-mono">|vxy| ≤ p</span> → |{vxyLen}| ≤ {pumpingLength}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>
                        <span className="font-mono">|vy| ≥ 1</span> → |{vyLen}| ≥ 1
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Additional Notes */}
                <div className="flex items-start gap-2 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg text-sm">
                  <AlertCircle className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <p className="text-yellow-700 dark:text-yellow-300">
                    <strong>Note:</strong> The pumping lemma is a necessary but not sufficient condition for a language to be context-free.
                    A language that satisfies the pumping lemma might still not be context-free.
                  </p>
                </div>
              </div>
            </Card>
          )}

          {/* Show when conditions are not satisfied */}
          {result && (vxyLen > pumpingLength || vyLen < 1) && result.status === "INVALID" && (
            <Card className="p-4 bg-muted/50 dark:bg-muted/10">
              <h3 className="text-sm font-semibold mb-3 text-foreground">
                Language Analysis
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-background rounded-lg">
                  <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">
                      The language is not a Context-Free Language (CFL)
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      The string violates the pumping lemma conditions for CFLs, which
                      means the language cannot be a context-free language.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          )}
        </div>
      )}
    </div>
  );
}
