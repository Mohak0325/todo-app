import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuote } from "../redux/slices/quoteSlice";

const QuoteComponent = () => {
  const dispatch = useDispatch();
  const { text, author, status } = useSelector((state) => state.quote);

  return (
    <div className="mt-4 p-4 bg-gray-200 rounded text-center">
      {status === "loading" ? <p>Loading quote...</p> : <>
        <p className="italic">"{text}"</p>
        <h4 className="font-bold">- {author}</h4>
        <button onClick={() => dispatch(fetchQuote())} className="mt-2 px-4 py-1 bg-blue-500 cursor-pointer text-white rounded">
          New Quote
        </button>
      </>}
    </div>
  );
};

export default QuoteComponent;