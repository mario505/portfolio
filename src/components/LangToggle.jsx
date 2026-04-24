import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { useLang } from "../contexts/LangContext";
import { CONTENT } from "../content";

export default function LangToggle() {
  const { langIndex, handleSetLangIndex } = useLang();

  return (
    <div
      onClick={handleSetLangIndex}
      className={cn(
        "fixed max-sm:hidden top-5 right-15 z-50 p-2 rounded-full",
        "transition-colors duration-300 focus:outlin-hidden",
      )}
    >
      <p className="cosmic-button flex gap-2">
        <span className="text-sm">{CONTENT[langIndex].flag}</span>{" "}
        <img
          src={CONTENT[langIndex].flagImg}
          className="h-5 w-5 object-contain"
        />
      </p>
    </div>
  );
}
