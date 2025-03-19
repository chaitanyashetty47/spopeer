import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface ComboboxProps {
  options: { value: string; label: string }[]
  value: string
  onChange: (value: string) => void
  placeholder?: string
  emptyText?: string
  className?: string
  disabled?: boolean
  allowCustomValue?: boolean
}

export function Combobox({
  options,
  value,
  onChange,
  placeholder = "Select option...",
  emptyText = "No results found.",
  className,
  disabled = false,
  allowCustomValue = true,
}: ComboboxProps) {
  const [open, setOpen] = React.useState(false)
  const [inputValue, setInputValue] = React.useState("")

  const foundOption = React.useMemo(() => {
    return options.find((option) => option.value === value)
  }, [options, value])

  const handleInputChange = (input: string) => {
    setInputValue(input)
    // If allowCustomValue is true and there's input, set the value directly
    if (allowCustomValue && input && !open) {
      onChange(input)
    }
  }

  // Handle when command input detects value change
  const handleCommandInputChange = (value: string) => {
    setInputValue(value)
  }

  // Handle when the popover closes
  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen)
    if (!isOpen && allowCustomValue && inputValue && !options.some(o => o.value.toLowerCase() === inputValue.toLowerCase())) {
      onChange(inputValue)
    }
  }

  return (
    <Popover open={open} onOpenChange={handleOpenChange}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          disabled={disabled}
          className={cn(
            "w-full justify-between",
            className
          )}
        >
          {foundOption ? foundOption.label : value || placeholder}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 w-full min-w-[200px]">
        <Command>
          <CommandInput 
            placeholder={`Search ${placeholder.toLowerCase()}`}
            value={inputValue}
            onValueChange={handleCommandInputChange}
          />
          <CommandList>
            <CommandEmpty>
              {emptyText}
              {allowCustomValue && inputValue && (
                <div className="py-2 px-2 text-sm">
                  <Button 
                    variant="secondary" 
                    className="w-full mt-2" 
                    onClick={() => {
                      onChange(inputValue)
                      setOpen(false)
                    }}
                  >
                    Add "{inputValue}"
                  </Button>
                </div>
              )}
            </CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  onSelect={() => {
                    onChange(option.value)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === option.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {option.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
} 