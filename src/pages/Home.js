import React from "react";

import Navigationbar from "../components/Navigationbar";
import Landing from "../components/Landing";
import Filter from "../components/Filter";


//import tabs
import Custom_Bar from "../components/Custom_Bar";


const Home = () => {
    return (
        <>
            <Navigationbar />
            <Landing />
            <Filter />


            {/* https://jikan.docs.apiary.io/#reference/0/top/top-request-example+schema */}

            {/* POPULAR THIS SEASON */}
            <Custom_Bar title="POPULAR THIS SEASON" type="anime" page="/1" subtype="/airing" />
            {/* UPCOMING NEXT SEASON */}
            <Custom_Bar title="UPCOMING NEXT SEASON" type="anime" page="/1" subtype="/upcoming" />
            {/* ALL TIME POPULAR */}
            <Custom_Bar title="ALL TIME POPULAR" type="anime" page="" subtype="" />
        </>
    )
}

export default Home;