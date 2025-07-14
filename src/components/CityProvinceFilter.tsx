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
import { City } from "@/types/City"


/**
 * @typedef CityProvinceFilterProps
 * @property {string[]} [value] - Array of selected city values (e.g., ['toronto-on', 'vancouver-bc'])
 * @property {(value: string[]) => void} [onChange] - Callback when selection changes
 */

// --- TypeScript Types ---

export interface CityProvinceFilterProps {
  cities: City[];
  value?: string[];
  onChange?: (value: string[]) => void;
}

/**
 * A high-performance, multi-select combobox for filtering by Canadian cities.
 * It uses a "filter-then-render" strategy to handle very large lists efficiently.
 * @param {CityProvinceFilterProps} props
 */
export default function CityProvinceFilter({ cities, value: controlledValue, onChange }: CityProvinceFilterProps) {
  // Use `cities` prop instead of hardcoded data
  const [open, setOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");

  // This component can be either controlled or uncontrolled.
  const [uncontrolledValue, setUncontrolledValue] = React.useState<string[]>([]);
  const isControlled = controlledValue !== undefined;
  const selectedValues = isControlled ? new Set(controlledValue) : new Set(uncontrolledValue);

  // --- PERFORMANCE OPTIMIZATION ---
  // We manually filter the list based on search query and only render the results.
  // This is wrapped in useMemo to avoid re-calculating on every render.
  const filteredGroupedCities = React.useMemo<Record<string, City[]>>(() => {
    if (!searchQuery || searchQuery.trim().length < 2) {
      // Don't show any results until the user has typed at least 2 characters.
      // This prevents rendering the entire list on a single key press.
      return {};
    }

    const lowerCaseQuery = searchQuery.toLowerCase();
    
    // 1. Filter the flat list (very fast)
    const filteredCities = cities.filter((city: City) => 
      city.label.toLowerCase().includes(lowerCaseQuery) || 
      city.province.toLowerCase().includes(lowerCaseQuery)
    );

    // 2. Group the filtered results
    return filteredCities.reduce<Record<string, City[]>>((acc, city) => {
      const { province } = city;
      if (!acc[province]) {
        acc[province] = [];
      }
      acc[province].push(city);
      return acc;
    }, {});
  }, [searchQuery, cities]);


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

const selectedCities = cities.filter((city: City) => selectedValues.has(`${city.value}, ${city.provinceId}`) );
 console.log("SE", selectedCities)
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
            {selectedCities.length > 0 ? (
              selectedCities.map((city: City) => (
                <Badge
                  variant="secondary"
                  key={`${city.value}, ${city.provinceId}`}
                  className="mr-1 text-xs truncate max-w-16 md:max-w-26 lg:max-w-full"
                  onClick={(e) => {
                    e.stopPropagation(); // prevent popover from opening
                    handleUnselect(`${city.value}, ${city.provinceId}`);
                  }}
                >
                  <span className="truncate">{`${city.value}, ${city.provinceId}`}</span>
                  <X className="ml-1 h-3 w-3" />
                </Badge>
              ))
            ) : ( 
              <span className="text-muted-foreground truncate">Select cities...</span>
            )}
          </div>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        {/* We now control the input and filtering logic */}
        <Command shouldFilter={false}>
          <CommandInput 
            value={searchQuery}
            onValueChange={setSearchQuery}
            placeholder="Type to search city or province..." 
          />
          <CommandList>
            {searchQuery.trim().length < 2 && (
              <div className="py-6 text-center text-sm">
                Please type at least 2 characters to search.
              </div>
            )}
            {Object.keys(filteredGroupedCities).length === 0 && searchQuery.trim().length >= 2 ? (
              <CommandEmpty>No city or province found.</CommandEmpty>
            ) : null}
            {Object.entries(filteredGroupedCities).map(([province, cities]) => (
              <CommandGroup key={province} heading={province}>
                {cities.map((city: City) => (
                  <CommandItem
                    key={city.value}
                    // We don't need the 'value' prop for filtering anymore, as we do it manually
                    onSelect={() => handleSelect(`${city.value}, ${city.provinceId}`)}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        selectedValues.has(`${city.value}, ${city.provinceId}`) ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {city.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
