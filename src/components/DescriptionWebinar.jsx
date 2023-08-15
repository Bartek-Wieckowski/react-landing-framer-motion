export default function DescriptionWebinar({ webinarContent }) {
  return (
    <div className="content">
      {Object.keys(webinarContent).map((key) => (
        <div key={key}>
          {key === 'title' ? (
            <h3>{webinarContent[key][0]}</h3>
          ) : (
            webinarContent[key].map((item, index) => <p key={index}>{item}</p>)
          )}
        </div>
      ))}
    </div>
  );
}
