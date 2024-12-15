import { useState, useEffect } from "react";
import StatsBox from "../StatsBox";
import BarChart from "../../Charts/BarChart";
import LineChart from "../../Charts/LineChart";
import PieChartComponent from "../../Charts/PieChart";
import fetchTwitterData from "../../utils/Api";

const Dashboard = () => {
  const [twitterData, setTwitterData] = useState(null);

  // Fetch data and update state
  useEffect(() => {
    const getData = async () => {
      const data = await fetchTwitterData(apiKey, username);
      setTwitterData(data);
    };

    getData();
  }, []);

  return (
    <div className="flex flex-col">
      <h2 className="text-2xl font-semibold text-[#2C3E50]">📊 DASHBOARD</h2>
      <p className="text-lg text-[#607D8B] mt-2">Welcome to your Dashboard!</p>

      {/* Show a loading message if data is null */}
      {!twitterData ? (
        <p className="text-center mt-4 text-[#607D8B]">Loading data...</p>
      ) : (
        <>
          <div className="mt-4">
            <StatsBox twitterData={twitterData} />
          </div>

          <div className="mt-8">
            <div className="w-full mb-8">
              <LineChart twitterData={twitterData} />
            </div>
            <div className="w-full mb-8">
              <BarChart twitterData={twitterData} />
            </div>
            <div className="w-full">
              <PieChartComponent
                data={[
                  { category: "Followers", value: twitterData.followersCount },
                  { category: "Tweets", value: twitterData.tweetCount },
                  { category: "Likes", value: twitterData.likesCount },
                  { category: "Retweets", value: twitterData.retweetsCount },
                ]}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
