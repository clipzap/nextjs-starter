"use client"

import { ThemeModeToggle } from "@/components/common/theme-mode-toggle"
import { Button, buttonVariants } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Link } from "next-view-transitions"
import { toast } from "sonner"

import { ThemeModeToggle } from "@/components/common/theme-mode-toggle"
import { Button, buttonVariants } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Link } from "next-view-transitions"
import { toast } from "sonner"

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-6 text-center">
      <Link
        className={buttonVariants({
          size: "lg",
          variant: "outline",
        })}
        href="/dashboard"
      >
        Get started <ArrowRight className="ml-2 h-5 w-5" />
      </Link>
      <Button
        onClick={() =>
          toast("Event has been created", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        }
      >
        Click me
      </Button>
      <ThemeModeToggle />
    </main>
  )
}
