import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

export default function LangToggle() {
  const sendmsg = () => {
    console.log("toggle was clicked");
  };

  return (
    <div
      onClick={sendmsg}
      className={cn(
        "fixed max-sm:hidden top-5 right-15 z-50 p-2 rounded-full",
        "transition-colors duration-300 focus:outlin-hidden",
      )}
    >
      <p className="cosmic-button flex gap-2">
        <span className="text-sm">ES</span>{" "}
        <img src="es.png" className="h-5 w-5 object-contain" />
      </p>
    </div>
  );
}
