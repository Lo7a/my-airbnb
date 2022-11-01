/* eslint-disable react/jsx-key */
import React from "react";
import { useRouter } from "next/router";
import { format } from "date-fns";
import Footer from "../components/Footer";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";

function Search({ searchResult }) {
  const router = useRouter();
  const { location, startDate, endDate, numberOfGuests } = router.query;
  const formattedStartDate = format(new Date(startDate), " dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), " dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;
  return (
    <div className="h-screen">
      <Header
        placeholder={`${location} | ${range} | ${numberOfGuests} guests`}
      />

      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays : {range} - for {numberOfGuests} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap ">
            <p className="button">Price</p>
            <p className="button">Rooms And Beds</p>
            <p className="button">Type Of Place</p>
            <p className="button">Cancellation Flexibility</p>
            <p className="button">More filters</p>
          </div>

          <div className="flex flex-col">
            {searchResult?.map(
              ({ img, location, title, description, star, price, total }) => (
                <InfoCard
                  key={img}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                />
              )
            )}
          </div>
        </section>

        <section className="hidden">
          <Map searchResult={searchResult} />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  const searchResult = await fetch("https://www.jsonkeeper.com/b/5NPS").then(
    (res) => res.json()
  );
  return {
    props: {
      searchResult,
    },
  };
}

/*sticky top-[76px] h-[calc(100vh-76px)] hidden lg:inline-flex lg:min-w-[400px] xl:inline-flex xl:min-w-[700px]*/
