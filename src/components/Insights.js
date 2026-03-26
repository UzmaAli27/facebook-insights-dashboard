const Insights = ({ data }) => {
  if (!data) return null;

  const { followers, engagement, impressions, reactions } = data;

  return (
    <div className="grid grid-cols-2 gap-6 mt-8 px-10">
      <div className="bg-white p-6 rounded-xl shadow text-center">
        <h3 className="text-lg font-semibold">Followers</h3>
        <p className="text-2xl font-bold mt-2 text-blue-600">
          {followers}
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow text-center">
        <h3 className="text-lg font-semibold">Engagement</h3>
        <p className="text-2xl font-bold mt-2 text-green-600">
          {engagement}
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow text-center">
        <h3 className="text-lg font-semibold">Impressions</h3>
        <p className="text-2xl font-bold mt-2 text-purple-600">
          {impressions}
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow text-center">
        <h3 className="text-lg font-semibold">Reactions</h3>
        <p className="text-2xl font-bold mt-2 text-red-600">
          {reactions}
        </p>
      </div>
    </div>
  );
};

export default Insights;