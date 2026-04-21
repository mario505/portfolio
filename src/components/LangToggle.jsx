import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

export default function LangToggle() {
  const sendmsg = () => {
    console.log("toggle was clicked");
  };

  return (
    <button
      onClick={sendmsg}
      className={cn(
        "fixed max-sm:hidden top-5 right-15 z-50 p-2 rounded-full",
        "transition-colors duration-300 focus:outlin-hidden",
      )}
    >
      <Sun className="h-6 w-6 text-yellow-300" />{" "}
    </button>
  );
}
