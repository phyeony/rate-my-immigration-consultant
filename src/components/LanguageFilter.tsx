"use client"

import * as React from "react"
import { Check, ChevronsUpDown, X } from "lucide-react"

import { cn } from "@/lib/utils" // Assuming you have this utility from ShadCN setup
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
import { Badge } from "@/components/ui/badge"

/**
 * @typedef LanguageFilterProps
 * @property {string[]} [value] - Array of selected language values (e.g., ['mandarin', 'korean'])
 * @property {(value: string[]) => void} [onChange] - Callback when selection changes
 */

// --- TypeScript Types ---

export interface LanguageFilterProps {
  languages: string[];
  value?: string[];
  onChange?: (value: string[]) => void;
}

/**
 * A high-performance, multi-select combobox for filtering by Canadian languages.
 * It uses a "filter-then-render" strategy to handle very large lists efficiently.
 * @param {LanguageFilterProps} props
 */
export default function LanguageFilter({ languages, value: controlledValue, onChange }: LanguageFilterProps) {
  // Use `languages` prop instead of hardcoded data
  const [open, setOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");

  // This component can be either controlled or uncontrolled.
  const [uncontrolledValue, setUncontrolledValue] = React.useState<string[]>([]);
  const isControlled = controlledValue !== undefined;
  const selectedValues = isControlled ? new Set(controlledValue) : new Set(uncontrolledValue);

  // --- PERFORMANCE OPTIMIZATION ---
  // We manually filter the list based on search query and only render the results.
  // This is wrapped in useMemo to avoid re-calculating on every render.
  const filteredLanguages = React.useMemo<string[]>(() => {
    if (!searchQuery || searchQuery.trim().length < 2) {
      // Don't show any results until the user has typed at least 2 characters.
      // This prevents rendering the entire list on a single key press.
      return [];
    }

    const lowerCaseQuery = searchQuery.toLowerCase();
    
    // 1. Filter the flat list (very fast)
    return languages.filter((language: string) => 
      language.toLowerCase().includes(lowerCaseQuery)
    );
  }, [searchQuery, languages]);


  const handleSelect = (value: string) => {
    const newSelectedValues = new Set(selectedValues);
    if (newSelectedValues.has(value)) {
      newSelectedValues.delete(value);
    } else {
      newSelectedValues.add(value);
    }
    
    const newValueArray = Array.from(newSelectedValues) as string[];
    if (isControlled) {
      onChange?.(newValueArray);
    } else {
      setUncontrolledValue(newValueArray);
    }
    // Optional: Clear search on select
    setSearchQuery("");
  };

  const handleUnselect = (value: string) => {
    const newSelectedValues = new Set(selectedValues);
    newSelectedValues.delete(value);
    
    const newValueArray = Array.from(newSelectedValues) as string[];
     if (isControlled) {
      onChange?.(newValueArray);
    } else {
      setUncontrolledValue(newValueArray);
    }
  };

const selectedlanguages = languages.filter((language: string) => selectedValues.has(language) );
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full h-auto justify-between min-h-[40px]"
        >
          <div className="flex flex-wrap gap-1 min-w-0 mr-1">
            {selectedlanguages.length > 0 ? (
              selectedlanguages.map((language: string) => (
                <Badge
                  variant="secondary"
                  key={language}
                  className="mr-1 text-xs truncate max-w-16 md:max-w-26 lg:max-w-full"
                  onClick={(e) => {
                    e.stopPropagation(); // prevent popover from opening
                    handleUnselect(language);
                  }}
                >
                  <span className="truncate">{language}</span>
                  <X className="ml-1 h-3 w-3" />
                </Badge>
              ))
            ) : ( 
              <span className="text-muted-foreground truncate">Select languages...</span>
            )}
          </div>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opalanguage-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        {/* We now control the input and filtering logic */}
        <Command shouldFilter={false}>
          <CommandInput 
            value={searchQuery}
            onValueChange={setSearchQuery}
            placeholder="Type to search language or province..." 
          />
          <CommandList>
            {searchQuery.trim().length < 2 && (
              <div className="py-6 text-center text-sm">
                Please type at least 2 characters to search.
              </div>
            )}
            {filteredLanguages.length === 0 && searchQuery.trim().length >= 2 ? (
              <CommandEmpty>No language or province found.</CommandEmpty>
            ) : null}
            {filteredLanguages.map((language: string) => (
                  <CommandItem
                    key={language}
                    // We don't need the 'value' prop for filtering anymore, as we do it manually
                    onSelect={() => handleSelect(language)}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        selectedValues.has(language) ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {language}
                  </CommandItem>
         
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
