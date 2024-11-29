"use client"

import { Check, Languages } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Locale } from "@/i18n/config"
import { setUserLocale } from "@/services/locale"

type Props = {
  locale: string
  items: Array<{ value: string; label: string }>
}

export default function LocaleSwitcher({ locale, items }: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Languages className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
          <span className="sr-only">Switch locale</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {items.map((item) => {
          const lc = item.value as Locale
          return (
            <DropdownMenuItem
              key={`locale-${item.value}`}
              className="flex flex-row hover:cursor-pointer"
              onClick={() => setUserLocale(lc)}
            >
              <span className="w-4">
                {lc == locale && <Check className="h-6 w-6" />}
              </span>
              <span>{item.label}</span>
            </DropdownMenuItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
