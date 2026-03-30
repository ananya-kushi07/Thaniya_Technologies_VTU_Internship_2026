function LanguageChart({ languages }) {
  return (
    <div>
      <h3>🌐 Languages</h3>

      {languages.map((lang, i) => (
        <div key={i}>
          {lang.name} - {lang.percent}%
        </div>
      ))}
    </div>
  );
}

export default LanguageChart;