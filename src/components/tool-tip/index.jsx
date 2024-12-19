function Tooltip({ children, content, delay }) {
  let timeout;
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="tooltip-container"
      onMouseEnter={handleShowTooltip}
      onMouseLeave={handleHideTooltip}
    >
      {children}
      {isVisible ? <div className="tooltip">{content}</div> : null}
    </div>
  );
}
