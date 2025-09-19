import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { APP_NAME } from "@/lib/constants";

const categories = ["men", "women", "kids", "accessories"];

export default function SearchBar() {
  return (
    <form
      action="/search"
      method="GET"
      className="flex items-stretch h-10 w-full max-w-3xl mx-auto"
    >
      {/* Category Dropdown */}
      <Select name="category" defaultValue="all">
        <SelectTrigger className="min-w-[80px] h-full bg-gray-100 text-black border border-gray-300 rounded-l-md px-2 text-sm">
          <SelectValue placeholder="All" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All</SelectItem>
          {categories.map((category) => (
            <SelectItem key={category} value={category}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Search Input */}
      <Input
        type="search"
        name="q"
        placeholder={`Search ${APP_NAME}...`}
        className="flex-1 border-y border-gray-300 rounded-none text-sm px-3 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />

      {/* Search Button */}
      <button
        type="submit"
        aria-label="Search"
        className="px-4 bg-yellow-400 text-black rounded-r-md hover:bg-yellow-500 flex items-center justify-center transition-colors"
      >
        <Search className="w-5 h-5" />
      </button>
    </form>
  );
}
