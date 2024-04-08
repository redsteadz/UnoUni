import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { GiHamburgerMenu } from "react-icons/gi";

function Search() {
  return (
    <>
      <div className="flex items-center gap-2">
        <motion.div
          whileHover={{ scale: 1.1 }} // Example animation on hover
          whileTap={{ scale: 0.9 }} // Example animation on tap
        >
          <GiHamburgerMenu size={20} />
        </motion.div>
        <motion.div
          className={`flex items-center gap-2 border-transparent border-2 rounded-md px-1 flex-1`}
          initial={{ scale: 0.95, opacity: 1 }} // Initial animation state
          animate={{ scale: 1, opacity: 1 }} // Animation when component mounts
          whileHover={{ scale: 1.02 }} // Animation on hover
        >
          <SearchIcon />
          <Input
            className="border-0 
          focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-0 focus-visible:outline-none focus-visible:border-0"
            type="text"
            name="search"
            placeholder="Search"
          />
        </motion.div>
      </div>
    </>
  );
}

export default Search;
