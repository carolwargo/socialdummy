// ./src/components/Explore/ExplorePosts/ExploreLearning.jsx
import { Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import exploreLearningData from "../../../constants/Explore/ExploreLearningData";
import "./ExplorePosts.css";

const ExploreLearning = () => {
  const regularEntries = exploreLearningData.filter((item) => !item.isAccordion);
  const accordionEntries = exploreLearningData.filter((item) => item.isAccordion);

  return (
    <div className="border-top mt-3">
      <div className="card bg-white" style={{ borderRadius: "0px" }}>
        <div className="card-body p-3">
          <div className="container p-4">
            <h5 className="fw-bolder mt-2 mb-0 d-flex justify-content-between align-items-center">
              <span style={{ color: "#001c32", textShadow: "0px 1px 2px rgb(0, 0, 0)" }}>
              EXPLORE: Learning, Certificates & Accredidations
              </span>
              <span
                className="w3-tag py-1 px-3 rounded-4"
                style={{ fontSize: "12px", backgroundColor: "#001c32", color: "#78c5fe" }}
              >
                Beta
              </span>
            </h5>
            <p className="py-0 small text-muted mb-4">Learn more, earn more...</p>

            {regularEntries.map((item, index) => (
              <div className="explore-business" key={index}>
                <p className="explore-business-entry">
                  <span className="explore-business-title">{item.title}</span>
                  <br />
                  <span className="explore-business-meta">{item.meta}</span>
                </p>
              </div>
            ))}

            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <span style={{ color: "#001c32", textShadow: "0px 1px 2px rgb(0, 0, 0)" }}>
                    See More
                  </span>
                </Accordion.Header>
                <Accordion.Body>
                  {accordionEntries.map((item, index) => (
                    <Link
                      to={item.link || "/"}
                      className="text-decoration-none text-dark"
                      key={index}
                    >
             <div className="explore-section" key={index}>
  <p className="explore-entry">
    <span className="explore-title">{item.title}</span>
    <br />
    <span className="explore-meta">{item.meta}</span>
  </p>
</div>

                    </Link>
                  ))}

                  <Link to="/business" className="text-decoration-none text-dark">
                    <div>
                      <button
                        className="btn btn-outline-dark rounded-5 w-100 mt-2"
                        style={{ boxShadow: "0px 0px 5px #001c32" }}
                      >
                        See All
                      </button>
                    </div>
                  </Link>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreLearning;


/*
import { Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import { learning, moreLearning } from "../../../constants/Explore/ExploreLearningData";
import "./ExplorePosts.css";

const SectionTitle = ({ text }) => (
  <h5 className="fw-bolder mt-2 mb-0 d-flex justify-content-between align-items-center">
    <span style={{ color: "#001c32", textShadow: "0px 1px 2px rgb(0, 0, 0)" }}>{text}</span>
    <span
      className="w3-tag py-1 px-3 rounded-4"
      style={{ fontSize: "12px", backgroundColor: "#001c32", color: "#78c5fe" }}
    >
      Beta
    </span>
  </h5>
);

const TopicEntry = ({ title, meta }) => (
  <div className="explore-learning">
    <p className="explore-learning-entry">
      <span className="explore-learning-title">{title}</span>
      <br />
      <span className="explore-learning-meta">{meta}</span>
    </p>
  </div>
);

const BusinessEntry = ({ title, meta, to = "/" }) => (
  <Link to={to} className="text-decoration-none text-dark">
    <div className="explore-learning">
      <p className="explore-learning-entry">
        <span className="explore-learning-title">{title}</span>
        <br />
        <span className="explore-learning-meta">{meta}</span>
      </p>
    </div>
  </Link>
);

const ExploreLearning = () => {
  return (
    <div className="border-top mt-3">
      <div className="card bg-white" style={{ borderRadius: 0 }}>
        <div className="card-body p-3">
          <div className="container p-4">
            <SectionTitle text="EXPLORE: Learning, Certificates & Accredidations" />
            <p className="py-0 small text-muted mb-4">Learn more, earn more...</p>

            {learning.map((topic, idx) => (
              <TopicEntry key={idx} {...topic} />
            ))}

            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <span style={{ color: "#001c32", textShadow: "0px 1px 2px rgb(0, 0, 0)" }}>
                    See More
                  </span>
                </Accordion.Header>
                <Accordion.Body>
                  {moreLearning.map((topic, idx) => (
                    <BusinessEntry key={idx} {...topic} />
                  ))}

                  <Link to="/classes" className="text-decoration-none text-dark">
                    <button
                      className="btn btn-outline-dark rounded-5 w-100 mt-2"
                      style={{ boxShadow: "0px 0px 5px #001c32" }}
                    >
                      See All
                    </button>
                  </Link>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreLearning;



import { Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import { learning, moreLearning } from "../../../constants/Explore/ExploreLearningData";
import "./ExplorePosts.css";

const SectionTitle = ({ text }) => (
  <h5 className="fw-bolder mt-2 mb-0 d-flex justify-content-between align-items-center">
    <span style={{ color: "#001c32", textShadow: "0px 1px 2px rgb(0, 0, 0)" }}>{text}</span>
    <span
      className="w3-tag py-1 px-3 rounded-4"
      style={{ fontSize: "12px", backgroundColor: "#001c32", color: "#78c5fe" }}
    >
      Beta
    </span>
  </h5>
);

const TopicEntry = ({ title, meta }) => (
  <div className="explore-learning">
    <p className="explore-learning-entry">
      <span className="explore-learning-title">{title}</span>
      <br />
      <span className="explore-learning-meta">{meta}</span>
    </p>
  </div>
);

const BusinessEntry = ({ title, meta, to = "/" }) => (
  <Link to={to} className="text-decoration-none text-dark">
    <div className="explore-learning">
      <p className="explore-learning-entry">
        <span className="explore-learning-title">{title}</span>
        <br />
        <span className="explore-learning-meta">{meta}</span>
      </p>
    </div>
  </Link>
);

const ExploreLearning = () => {
  return (
    <div className="border-top mt-3">
      <div className="card bg-white" style={{ borderRadius: 0 }}>
        <div className="card-body p-3">
          <div className="container p-4">
            <SectionTitle text="EXPLORE: Learning, Certificates & Accredidations" />
            <p className="py-0 small text-muted mb-4">Learn more, earn more...</p>

            {learning.map((topic, idx) => (
              <TopicEntry key={idx} {...topic} />
            ))}

            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <span style={{ color: "#001c32", textShadow: "0px 1px 2px rgb(0, 0, 0)" }}>
                    See More
                  </span>
                </Accordion.Header>
                <Accordion.Body>
                  {moreLearning.map((topic, idx) => (
                    <BusinessEntry key={idx} {...topic} />
                  ))}

                  <Link to="/classes" className="text-decoration-none text-dark">
                    <button
                      className="btn btn-outline-dark rounded-5 w-100 mt-2"
                      style={{ boxShadow: "0px 0px 5px #001c32" }}
                    >
                      See All
                    </button>
                  </Link>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreLearning;
*/