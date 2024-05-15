import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

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
  const navigate = useNavigate();
  const { id } = useParams();

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

  // Filter Classes Data
  const filterData = classesData.filter(
    (item) => item.id === 201 || item.id === 401 || item.id === 501
  );

  // Filter Classes Detailse Data
  const filterDetailsData = classesData.filter((item) => item.id == id);

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

  // ==================================================
  // Buttons Click Page open and scroll the top position
  // ===================================================

  const handleHomePage = () => {
    window.scrollTo(0, 0);
    navigate("/");
  };

  const handleAboutPage = () => {
    window.scrollTo(0, 0);
    navigate("/about-us");
  };

  const handleClassesPage = () => {
    window.scrollTo(0, 0);
    navigate("/classes");
  };

  const handleTrainersPage = () => {
    window.scrollTo(0, 0);
    navigate("/trainers");
  };

  const handleReviewPage = () => {
    window.scrollTo(0, 0);
    navigate("/review");
  };

  const handlePricingPage = () => {
    window.scrollTo(0, 0);
    navigate("/pricing");
  };

  const handleContactPage = () => {
    window.scrollTo(0, 0);
    navigate("/contact-us");
  };

  const handleProfilePage = () => {
    window.scrollTo(0, 0);
    navigate("/user-profile");
  };

  const handleLogInPage = () => {
    window.scrollTo(0, 0);
    navigate("/login");
  };

  return {
    reviewData,
    awardData,
    classesData,
    achivmentData,
    featureData,
    trainersData,
    priceDataMonthly,
    priceDataYearly,
    filterData,
    filterDetailsData,
    error,
    handleHomePage,
    handleAboutPage,
    handleClassesPage,
    handleReviewPage,
    handlePricingPage,
    handleTrainersPage,
    handleContactPage,
    handleProfilePage,
    handleLogInPage,
  };
};

export default useFunction;
