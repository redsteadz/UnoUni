import { useParams } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import axios from "axios";
import { useEffect, useState } from "react";

const FieldComponent = ({ field, degrees }) => {
  return (
    <div className="min-w-[1000px]">
      {/* Render the field name */}
      {/* Render degrees for the current field */}
      <div className="grid grid-cols-5 gap-4 mt-2 grid-rows-1">
        <h3 className="text-lg mt-8 bold border-b-white border-b-2">{field}</h3>
        {degrees.map((degree, index) => (
          <div
            key={index}
            className={`text-center border-2 rounded-lg min-h-12 flex justify-center items-center ${
              degree !== "-" ? "bg-green-500" : ""
            }`}
          >
            {degree === "-" ? "-" : <span>&#10003;</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

function UnivPage() {
  const [university , setUniversity] = useState({});
  const fetchUniversityById = async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/universities/${id}`,
      );
      console.log(response.data);
      setUniversity(response.data); // Assuming the response contains the university data
    } catch (error) {
      console.error("Error fetching university data:", error);
      return null;
    }
  };
  const { _id } = useParams();

  useEffect(() => {
    fetchUniversityById(_id);
  }, []);

  const degrees = ["DIPLOMA", "BACHELOR", "MASTER", "DOCTORATE"];

  return (
    <div className="bg-gray-900 text-white">
      <header className="p-4 border-b border-gray-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center flex-col">
            <h1 className="text-xl font-bold">{university.name}</h1>
            <h1 className="text-md underline font-bold"> Rank - {university.rank}</h1>
          </div>
          <div className="w-24 h-24 bg-blue-500 flex items-center justify-center rounded-full">
            <img src={university.image_url} alt="" />
          </div>
        </div>
      </header>

      <main className="p-4">
        <section className="mb-6">
          <p className="mb-4">
            {university.description}
          </p>
          <div className="mb-4">
            {university.tags?.map((value, index) => (
              <Badge
                key={index}
                className="bg-blue-300 text-gray-800 hover:bg-white"
              >
                {value}
              </Badge>
            )) || "TAGS"}
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-center py-2 mb-4 bg-white text-gray-900 rounded-full">
            Fee Structure
          </h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center"></div>
            <div className="text-center">Undergraduate</div>
            <div className="text-center">Postgraduate</div>
            <div className="text-center">Local Students</div>
            {university.fee?.Localstudents.map((fee, index) => (
              <div className="text-center" key={index}>
                {fee}
              </div>
            ))}
            <div className="text-center">International Students</div>
            {university.fee?.Internationalstudents.map((fee, index) => (
              <div className="text-center" key={index}>
                {fee}
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-center py-2 mb-4 bg-white text-gray-900 rounded-full">
            Courses
          </h2>
          <div className="grid grid-cols-1 gap-4 grid-rows-6 sm:overflow-x-hidden overflow-x-scroll">
            <div className="grid grid-cols-5 gap-4 mt-2 grid-rows-1  min-w-[1000px]">
              <h3 className="text-lg mt-8 bold border-b-white border-b-2">
              </h3>
              {degrees.map((degree, index) => (
                <div
                  key={index}
                  className="text-center border-2 rounded-lg min-h-12 flex bg-white text-gray-800 font-bold justify-center items-center"
                >
                  {degree === "-" ? "-" : <span>{degree}'s</span>}
                </div>
              ))}
            </div>

            {university?.field && (
              Object.entries(university.field).map(([fieldData, data]) => (
                (fieldData !== "_id" && fieldData !== "__v")
                  ? (
                    <FieldComponent
                      key={fieldData} // Make sure to include a unique key for each component
                      field={fieldData}
                      degrees={data}
                    />
                  )
                  : null
              ))
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default UnivPage;
