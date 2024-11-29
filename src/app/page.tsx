"use client"

import { ArrowRight } from "lucide-react"
import { useLocale, useTranslations } from "next-intl"
import { Link } from "next-view-transitions"
import { toast } from "sonner"

import LocaleSwitcher from "@/components/common/locale-switcher"
import { ThemeModeToggle } from "@/components/common/theme-mode-toggle"
import { Button, buttonVariants } from "@/components/ui/button"

export default function Home() {
  const t = useTranslations("HomePage")
  const tl = useTranslations("LocaleSwitcher")
  const locale = useLocale()
  const items: Array<{ value: string; label: string }> = [
    {
      value: "en",
      label: tl("en"),
    },
    {
      value: "zh-Hans",
      label: tl("zh-Hans"),
    },
  ]

  return (
    <main className="flex h-full flex-col items-center justify-center gap-6 text-center">
      <h1>{t("title")}</h1>
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
      <LocaleSwitcher locale={locale} items={items} />
    </main>
  )
}
