import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const StarRating = () => {
  const params = useParams();
  const [details, setDetails] = useState({});
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [averageRating, setAverageRating] = useState(0);

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const detailData = await data.json();
    setDetails(detailData);
    console.log(detailData);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  useEffect(() => {
    const data = localStorage.getItem("rating");
    const parsedData = data ? JSON.parse(data) : {};
    const recipeRatings = parsedData[details.id] || [];
    const filteredRatings = recipeRatings.filter(rating => rating !== 0);
    const sum = filteredRatings.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const average = filteredRatings.length > 0 ? sum / filteredRatings.length : 0;
    setAverageRating(average.toFixed(2));
  }, [details.id]);
  
  
  useEffect(() => {
    const data = localStorage.getItem("rating");
    const parsedData = data ? JSON.parse(data) : {};
    parsedData[details.id] = parsedData[details.id] || [];
    parsedData[details.id].push(rating);
    localStorage.setItem("rating", JSON.stringify(parsedData));
  }, [rating, details.id]);
  
  
  
  
  return (
    <StarStyle>
      <div className="star-rating">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={index <= (hover || rating) ? "on" : "off"}
              onClick={() => setRating(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
            >
              <span className="star">&#9733;</span>
            </button>
          );
        })}
      </div>
      <p>Average Rating: {averageRating}</p>
    </StarStyle>
  );
};

export default StarRating;

const StarStyle = styled.form`
  button {
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    block-size: 150px;
    font-size: 60px;
  }
  .on {
    color: #FFD700;
  }
  .off {
    color: #ccc;
  }
`;
