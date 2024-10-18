import React, { useEffect, useState } from "react";
import { apiUrl, filterData } from "./data";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";

function App() {
  const [courses, setCourses] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Added isLoading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(apiUrl);
        const data = await result.json();
        setCourses(data.data);
      } catch (error) {
        toast.error("Something went wrong...");
      } finally {
        setIsLoading(false); // Set loading to false after data is fetched or error occurs
      }
    };
    fetchData();
  }, []);

  return (
    <div className="App bg-gray-900 min-h-screen font-sans text-gray-100">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Filter filterData={filterData} />
        <div className="mt-8">
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <Spinner />
            </div>
          ) : (
            <Cards courses={courses} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
