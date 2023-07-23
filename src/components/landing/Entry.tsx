import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoadingComponent.css";

interface EntryProps {}

interface EntryState {
  loading: boolean;
  progress: number;
  displayText: string;
}

const Entry: React.FC<EntryProps> = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress(progress + 1);
      } else {
        setLoading(false);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [progress]);

  useEffect(() => {
    setLoading(true);
  }, []);

  useEffect(() => {
    if (loading) {
      if (progress <= 50) {
        setDisplayText("Why did the developer cross the road?");
      } else {
        setDisplayText("To git to the other side...");
      }
    }
  }, [progress, loading]);

  useEffect(() => {
    if (progress === 100) {
      navigate("/landing");
    }
  }, [progress, navigate]);

  return (
    <div className={`loading-container ${loading ? "fade-in" : "fade-out"}`}>
      {loading && (
        <p className={`question ${progress <= 50 ? "visible" : "hidden"}`}>
          {displayText}
        </p>
      )}
      <div className="loading-bar-container">
        <div
          className={`loading-bar ${loading ? "loading" : ""}`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      {loading && <p className="percentage">{progress}%</p>}
    </div>
  );
};

export default Entry;
