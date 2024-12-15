import { BarChart2 } from "lucide-react";
import { FaTwitter, FaUserAlt } from "react-icons/fa";

const StatsBox = ({ twitterData }) => {
  if (!twitterData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-3 gap-6 mb-8">
      {/* Performance Card 1 */}
      <div className="bg-white rounded-lg shadow-md p-6 h-[125px] flex items-center transform transition-all duration-300 hover:scale-105 border-t-4 border-b-4 border-[#8E44AD]">
        <div className="p-2 rounded-full bg-[#8E44AD]20 mr-4">
          <FaUserAlt color="#8E44AD" size={40} />
        </div>
        <div>
          <h3 className="text-md font-medium text-[#607D8B]">
            Total Followers
          </h3>
          <p className="text-xl font-semibold text-[#2C3E50]">
            {twitterData.followersCount}
          </p>
        </div>
      </div>

      {/* Performance Card 2 */}
      <div className="bg-white rounded-lg shadow-md p-6 h-[125px] flex items-center transform transition-all duration-300 hover:scale-105 border-t-4 border-b-4 border-[#2ECC71]">
        <div className="p-3 rounded-full bg-[#2ECC71]20 mr-4">
          <FaTwitter color="#1DA1F2" size={40} />
        </div>
        <div>
          <h3 className="text-md font-medium text-[#607D8B]">Tweets</h3>
          <p className="text-xl font-semibold text-[#2C3E50]">
            {twitterData.tweetCount}
          </p>
        </div>
      </div>

      {/* Performance Card 3 */}
      <div className="bg-white rounded-lg shadow-md p-6 h-[125px] flex items-center transform transition-all duration-300 hover:scale-105 border-t-4 border-b-4 border-[#F39C12]">
        <div className="p-3 rounded-full bg-[#F39C12]20 mr-4">
          <BarChart2 color="#F39C12" size={40} />
        </div>
        <div>
          <h3 className="text-md font-medium text-[#607D8B]">
            Engagement Metrics
          </h3>
          <p className="text-xl font-semibold text-[#2C3E50]">
            {twitterData.engagementRate}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatsBox;
