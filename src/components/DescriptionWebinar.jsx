export default function DescriptionWebinar({ webinarContentTop, webinarContentBottom }) {
  return (
    <div className="contents">
      <div className="top-content">
        {Object.keys(webinarContentTop).map((key) => (
          <div key={key}>
            {key === "topTitle" && <h3>{webinarContentTop[key]}</h3>}
            {key === "topLi" && (
              <ul>
                {webinarContentTop[key].map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
            {key === "topText" && <p>{webinarContentTop[key]}</p>}
          </div>
        ))}
      </div>
      <div className="bottom-content">
        {Object.keys(webinarContentBottom).map((key) => (
          <div key={key}>
            {key === "bottomTitle1" && <h3>{webinarContentBottom[key]}</h3>}
            {key === "bottomTitle2" && <p>{webinarContentBottom[key]}</p>}
            {key === "bottomText" && <p>{webinarContentBottom[key]}</p>}
            {key === "bottomLi" && (
              <ol>
                {webinarContentBottom[key].map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ol>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
