import axios from "axios";
import { useEffect, useState } from "react";

const useFunction = () => {
  const [reviewData, setReviewData] = useState([]);
  const [awardData, setAwardData] = useState([]);
  const [classesData, setClassesData] = useState([]);
  const [achivmentData, setAchivmentData] = useState([]);
  const [featureData, setFeatureData] = useState([]);
  const [trainersData, setTrainersData] = useState([]);
  const [priceDataMonthly, setPriceDataMonthly] = useState([]);
  const [priceDataYearly, setPriceDataYearly] = useState([]);
  const [error, setError] = useState("");

  // ==================
  // Data Load
  // ==================
  const URL = `https://developeromarfaruk.github.io/react-fitfactory-api/fitfactoryData.json`;

  // ==================
  // Review Data load
  // ==================

  useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        setReviewData(res.data[0].review);
      })
      .catch((error) => {
        setError(error);
      });
  }, [URL]);

  // ==================
  // Award Data load
  // ==================

  useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        setAwardData(res.data[0].awards);
      })
      .catch((error) => {
        setError(error);
      });
  }, [URL]);

  // ==================
  // Classes Data load
  // ==================

  useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        setClassesData(res.data[0].classes);
      })
      .catch((error) => {
        setError(error);
      });
  }, [URL]);

  // ==================
  // Achivment Data Load
  // ==================

  useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        setAchivmentData(res.data[0].achivment);
      })
      .catch((error) => {
        setError(error);
      });
  }, [URL]);

  // ==================
  // Features Data Load
  // ==================
  useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        setFeatureData(res.data[0].features);
      })
      .catch((error) => {
        setError(error);
      });
  }, [URL]);

  // ==================
  // Trainers Data Load
  // ==================
  useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        setTrainersData(res.data[0].trainers);
      })
      .catch((error) => {
        setError(error);
      });
  }, [URL]);

  // ==================
  // Price Monthly Data Load
  // ==================
  useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        setPriceDataMonthly(res.data[0].pricing[0].monthly);
      })
      .catch((error) => {
        setError(error);
      });
  }, [URL]);

  // ==================
  // Price Yearly Data Load
  // ==================
  useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        setPriceDataYearly(res.data[0].pricing[0].yearly);
      })
      .catch((error) => {
        setError(error);
      });
  }, [URL]);

  return {
    reviewData,
    awardData,
    classesData,
    achivmentData,
    featureData,
    trainersData,
    priceDataMonthly,
    priceDataYearly,
    error,
  };
};

export default useFunction;
