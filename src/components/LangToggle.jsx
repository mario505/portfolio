import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { useLang } from "../contexts/LangContext";

const flags = ["us.png", "es.png"];

export default function LangToggle() {
  const { langIndex, handleSetLangIndex } = useLang();
  const sendmsg = () => {
    console.log("toggle was clicked");
  };

  return (
    <div
      onClick={handleSetLangIndex}
      className={cn(
        "fixed max-sm:hidden top-5 right-15 z-50 p-2 rounded-full",
        "transition-colors duration-300 focus:outlin-hidden",
      )}
    >
      <p className="cosmic-button flex gap-2">
        <span className="text-sm">{langIndex === 0 ? "EN" : "ES"}</span>{" "}
        <img src={flags[langIndex]} className="h-5 w-5 object-contain" />
      </p>
    </div>
  );
}
