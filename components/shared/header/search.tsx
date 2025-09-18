import { SearchIcon } from "lucide-react";
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

export default function Search() {
  return (
    <form action="/search" method="GET" className="flex items-stretch h-10">
      <Select>
        <SelectTrigger className="w-auto h-full dark:border-gray-200 bg-gray-100 text-black border-r rounded-r-none rounded">
          <SelectValue placeholder="All" />
        </SelectTrigger>
        <SelectContent position="popper">
          <SelectItem value="all">All</SelectItem>
          {categories.map((category) => (
            <SelectItem key={category} value={category}>
              {category}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <div className="flex items-center w-full">
        <Input
          type="text"
          name="q"
          placeholder={`Search in ${APP_NAME}...`}
          className="rounded-none rounded-r"
        />
        <button
          type="submit"
          className="px-3 bg-primary text-white rounded-r flex items-center"
        >
          <SearchIcon className="w-5 h-5" />
        </button>
      </div>
    </form>
  );
}
