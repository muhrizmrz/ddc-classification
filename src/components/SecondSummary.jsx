import React from 'react'

function SecondSummary(props) {

    const elements = [];
    props.data && props.data.map((obj) => {
        if (obj.isactiveFirstSummary) {
            props.data.map((value) => {
                if (
                    value.summary === "secondSummary" &&
                    value.firstSummary === obj.classificationNumber
                ) {
                    elements.push(value);
                }
            });
        }
    });

    return (
        <div className="bg-gray-200 col-span-2 overflow-y-auto hide-scroll">
            <div className="mt-24 font-sans">
                <p className="text-2xl p-3 mb-3">Ten Summary Classes</p>
                {props.data && props.data.map(obj => {
                    return obj.isactiveFirstSummary &&
                        <p
                            className={
                                obj.isactiveSecondSummary
                                    ? "text-lg bg-white text-gray-700 px-8 py-2 cursor-pointer mb-2 capitalize"
                                    : "text-lg text-gray-500  px-8 py-2 cursor-pointer capitalize hover:bg-white hover:text-gray-700 mb-2"
                            }
                            key={obj._id.$oid}
                            onClick={props.setSecondSummaryActive(obj.classificationNumber)}
                        >
                            <span className="mr-3">{obj.classificationNumber}</span>{" "}
                            {obj.classificationName}
                        </p>
                })
                }
                {elements && elements.map((obj) => {
                    return (
                        <p
                            className={
                                obj.isactiveSecondSummary
                                    ? "text-lg bg-white text-gray-700 px-8 py-2 cursor-pointer mb-2 capitalize"
                                    : "text-lg text-gray-500  px-8 py-2 cursor-pointer capitalize hover:bg-white hover:text-gray-700 mb-2"
                            }
                            key={obj._id.$oid}
                            onClick={props.setSecondSummaryActive(obj.classificationNumber)}
                        >
                            <span className="mr-3">{obj.classificationNumber}</span>{" "}
                            {obj.classificationName}
                        </p>
                    );
                })}
            </div>
        </div>
    )
}

export default SecondSummary