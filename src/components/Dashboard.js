import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

function Dashboard({ accessToken, user, setAccessToken }) {

  const [pages, setPages] = useState([]);
  const [insights, setInsights] = useState([]);
  const [selectedPage, setSelectedPage] = useState(null);


  useEffect(() => {

    window.FB.api(
      "/me/accounts",
      "GET",
      { access_token: accessToken },
      function(response) {

        if (response.data) {

          setPages(response.data);

        }

      }
    );

  }, [accessToken]);


  const getInsights = (pageId, pageName) => {

    setSelectedPage(pageName);

    window.FB.api(
      `/${pageId}/insights`,
      "GET",
      {
        metric:
          "page_impressions,page_engaged_users,page_fan_adds",
        access_token: accessToken
      },
      function(response) {

        if (response.data) {

          const formatted = response.data.map(item => ({

            name: item.title,
            value: item.values[0]?.value || 0

          }));

          setInsights(formatted);

        }

      }
    );

  };


  return (

    <div className="min-h-screen bg-gray-100 p-10">


      {/* HEADER */}

      <div className="bg-white shadow rounded-xl p-4 mb-6 flex justify-between items-center">

        {/* LEFT SIDE */}

        <div className="flex items-center gap-3">

          {user?.picture?.data?.url && (

            <img
              src={user.picture.data.url}
              alt="profile"
              className="w-10 h-10 rounded-full"
            />

          )}

          <div>

            <p className="font-semibold">

              {user?.name || "User"}

            </p>

            <p className="text-sm text-gray-500">

              Facebook Insights Dashboard

            </p>

          </div>

        </div>


        {/* RIGHT SIDE */}

        <button

          onClick={() => {

            window.FB.logout();

            setAccessToken(null);

          }}

          className="bg-red-500 text-white px-4 py-1 rounded"

        >

          Logout

        </button>

      </div>


      {/* PAGE TITLE */}

      <h1 className="text-3xl font-bold mb-6">

        Select a Page to View Insights

      </h1>


      {/* PAGE CARDS */}

      <div className="grid md:grid-cols-2 gap-4 mb-8">

        {pages.map(page => (

          <div
            key={page.id}
            className="bg-white shadow rounded p-4 flex justify-between items-center"
          >

            {page.name}

            <button
              onClick={() => getInsights(page.id, page.name)}
              className="bg-blue-600 text-white px-4 py-1 rounded"
            >

              View Insights

            </button>

          </div>

        ))}

      </div>


      {/* SELECTED PAGE LABEL */}

      {selectedPage && (

        <p className="mb-4 text-lg font-medium">

          Viewing insights for:

          <span className="text-blue-600 ml-2">

            {selectedPage}

          </span>

        </p>

      )}


      {/* METRIC CARDS + CHART */}

      {insights.length > 0 && (

        <div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">

            {insights.map(metric => (

              <div
                key={metric.name}
                className="bg-white shadow rounded p-6 text-center"
              >

                <h3 className="text-lg font-medium">

                  {metric.name}

                </h3>

                <p className="text-3xl font-bold mt-2">

                  {metric.value}

                </p>

              </div>

            ))}

          </div>


          {/* CHART */}

          <div className="bg-white shadow rounded p-6">

            <h2 className="text-xl font-semibold mb-4">

              Insights Chart

            </h2>

            <ResponsiveContainer width="100%" height={300}>

              <BarChart data={insights}>

                <XAxis dataKey="name" />

                <YAxis />

                <Tooltip />

                <Bar dataKey="value" />

              </BarChart>

            </ResponsiveContainer>

          </div>

        </div>

      )}

    </div>

  );

}

export default Dashboard;