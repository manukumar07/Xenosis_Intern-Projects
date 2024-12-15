import axios from "axios";

// Use environment variable for API key
const apiKey = "REACT_APP_TWITTER_API_KEY";

// Function to fetch Twitter data
const fetchTwitterData = async (apiKey, username) => {
    try {
        // Fetch user data (followers count, tweet count)
        const userResponse = await axios.get(
            `https://api.twitter.com/2/users/by/username/${username}`,
            {
                headers: {
                    Authorization: `Bearer ${apiKey}`,
                },
            }
        );

        const userData = userResponse.data.data;
        const userId = userData.id;

        // Fetch user tweets data
        const tweetsResponse = await axios.get(
            `https://api.twitter.com/2/users/${userId}/tweets`,
            {
                headers: {
                    Authorization: `Bearer ${apiKey}`,
                },
                params: {
                    max_results: 100,
                    "tweet.fields": "public_metrics",
                },
            }
        );

        const tweetsData = tweetsResponse.data.data;

        // Calculate metrics from tweets
        const totalLikes = tweetsData.reduce(
            (acc, tweet) => acc + tweet.public_metrics.like_count,
            0
        );
        const totalRetweets = tweetsData.reduce(
            (acc, tweet) => acc + tweet.public_metrics.retweet_count,
            0
        );
        const totalReplies = tweetsData.reduce(
            (acc, tweet) => acc + tweet.public_metrics.reply_count,
            0
        );

        const totalEngagements = totalLikes + totalRetweets + totalReplies;
        const engagementRate = tweetsData.length
            ? (totalEngagements / (tweetsData.length * 100)).toFixed(2)
            : 0;

        // Calculate monthly growth (For simplicity, assuming previous month count is known)
        const previousFollowersCount = 5000;
        const monthlyGrowth = (
            ((userData.public_metrics.followers_count - previousFollowersCount) /
                previousFollowersCount) *
            100
        ).toFixed(2);

        // Return combined metrics including monthly growth
        return {
            followersCount: userData.public_metrics.followers_count,
            tweetCount: userData.public_metrics.tweet_count,
            likesCount: totalLikes,
            retweetsCount: totalRetweets,
            engagementRate,
            monthlyGrowth,
        };
    } catch (error) {
        console.error("Error fetching Twitter data:", error.response?.data || error);
        return null;
    }
};

export default fetchTwitterData;
