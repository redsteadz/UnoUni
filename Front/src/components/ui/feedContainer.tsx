import { useState, useEffect } from "react";
import axios from "axios";
import FeedContent from "./feedContent";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
 
export function PaginationDemo({universities, setFeed }) {
  const [page, setPage] = useState(1);
  const universitiesPerPage = 10;
  const totalPages = Math.ceil(universities.length / universitiesPerPage);

  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
    setFeed(universities.slice((pageNumber - 1) * universitiesPerPage, pageNumber * universitiesPerPage));
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" onClick={() => handlePageChange(page - 1 >= 1 ? page - 1 : page)} />
        </PaginationItem>
        {[...Array(totalPages)].map((_, index) => (
          <PaginationItem key={index + 1}>
            <PaginationLink href="#" onClick={() => handlePageChange(index + 1)} isActive={page === index + 1}>
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext href="#" onClick={() => handlePageChange((page + 1) <= totalPages ? page + 1 : page)} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

function FeedContainer() {
  const [universities, setUniversities] = useState([]);
  const [feed, setFeed] = useState([]);
  

  useEffect(() => {
    const fetchUniversities = async () => {
      try {
        const response = await axios.get('http://localhost:3000/universities');
        console.log(response.data)
        setUniversities(response.data);
        setFeed(response.data.slice(0, 10));
      } catch (error) {
        console.error('Error fetching universities:', error);
      }
    };

    fetchUniversities();
  }, []);
  
  return (
    <>
      <div >
        {feed.map((university) => (
          <FeedContent key={university._id} university={university} />
        ))}
        <PaginationDemo universities={universities} setFeed={setFeed}/>
      </div>
    </>
  );
}


export default FeedContainer
