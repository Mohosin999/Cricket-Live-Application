import Wrapper from "@/components/Wrapper";
import { getLiveMatches } from "@/lib/cricketApi";
// import LiveMatchesComp from "@/components/LiveMatchesComp";
import CricketArticles from "@/components/CricketArticles";
import MatchesList from "@/components/MatchesList";

const Home = async () => {
  const liveMatches = await getLiveMatches();

  // Get live match array from live matches object
  const liveMatchesArr = liveMatches?.typeMatches;

  return (
    <Wrapper>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Live Matches Section */}
        <div className="md:col-span-2">
          <div className="space-y-4">
            {/* <LiveMatchesComp matches={liveMatchesArr} /> */}
            <MatchesList
              matches={liveMatchesArr}
              routePath="/live-matches"
              loadingText="Loading live matches"
              live={true}
            />
          </div>
        </div>

        {/* Series and Upcoming series */}
        <div className="md:col-span-3">
          <div className="space-y-4">
            <CricketArticles />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Home;
