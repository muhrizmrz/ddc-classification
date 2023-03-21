import React from 'react'

function FirstSummary(props) {
  return (
    <div className="bg-gray-900 col-span-2 overflow-y-auto hide-scroll">
      <div className="mt-24 font-sans pb-10">
        <p className="text-2xl text-gray-50 p-3 mb-3">Main Classes</p>
        {props.data &&
          props.data.map((obj) => {
            if (obj.summary === "firstSummary") {
              return (
                <p
                  className={
                    obj.isactiveFirstSummary
                      ? "text-lg  px-8 py-2 cursor-pointer bg-blue-600 mb-2 capitalize text-white"
                      : "text-lg text-gray-500  px-8 py-2 cursor-pointer hover:text-white rounded-lg mb-2 capitalize"
                  }
                  key={obj._id.$oid}
                  onClick={props.setFirstSummaryActive(obj.classificationNumber)}
                >
                  <span className="mr-3">{obj.classificationNumber}</span>{" "}
                  {obj.classificationName}
                </p>
              );
            }
          })}
      </div>
    </div>

  )
}

export default FirstSummary