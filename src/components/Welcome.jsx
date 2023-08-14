export default function Welcome({ homeContent }) {
  return (
    <div className="content">
      {Object.keys(homeContent).map((key) => (
        <div key={key}>
          {key === "title" ? (
            <h3>{homeContent[key][0]}</h3>
          ) : (
            homeContent[key].map((item, index) => <p key={index}>{item}</p>)
          )}
        </div>
      ))}
    </div>
  );
}
