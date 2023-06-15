import { useState, useEffect } from "react";

import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
  // const [isLoading, setIsLoading] = useState(true);
  // const [loadedMeetups, setLoadedMeetups] = useState([]);

  // useEffect(() => {
  //   setIsLoading(true);
  //   fetch(
  //     'https://localhost:8080/meetups'
  //   )
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       const meetups = [];

  //       for (const key in data) {
  //         const meetup = {
  //           id: key,
  //           ...data[key]
  //         };

  //         meetups.push(meetup);
  //       }

  //       setIsLoading(false);
  //       setLoadedMeetups(meetups);
  //     });
  // }, []);

  // if (isLoading) {
  //   return (
  //     <section>
  //       <p>Loading...</p>
  //     </section>
  //   );
  // }

  const loadedMeetups = [
    {
      key: "1",
      id: "1",
      image: "https://cdn.britannica.com/06/152206-050-72BD5CAC/twin-towers-Church-of-Our-Lady-Munich.jpg",
      title: "Encontro de board game em Munique",
      address: "Muniche",
      description: "Vários games dahora demais",
    },
    {
      key: "2",
      id: "2",
      image: "https://cdn.britannica.com/60/137760-050-9EFAB73A/Calgary-foreground-Pengrowth-Saddledome-Canada-Alberta.jpg",
      title: "Encontro de board game em Calgary",
      address: "Calgary SE",
      description: "Melhor local para board games do Canadá",
    },
  ];

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;
