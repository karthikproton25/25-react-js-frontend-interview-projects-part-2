function ButtonRippleEffect() {
  const [isRipplingEffect, setIsRipplingEffect] = useState(false);
  const [coordinates, setCoordinates] = useState({ x: -1, y: -1 });

  function handleRippleEffect(event) {
    console.log(
      event.target.getBoundingClientRect(),
      event.clientX,
      event.clientY
    );

    const rect = event.target.getBoundingClientRect();
    setCoordinates({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  }

  useEffect(() => {
    if (coordinates.x !== -1 && coordinates.y !== -1) {
      setIsRipplingEffect(true);
      setTimeout(() => setIsRipplingEffect(false), 300);
    } else {
      setIsRipplingEffect(false);
    }
  }, [coordinates]);

  useEffect(() => {
    if (!isRipplingEffect) setCoordinates({ x: -1, y: -1 });
  }, [isRipplingEffect]);

  console.log(coordinates, isRipplingEffect);

  return (
    <div className="ripple-effect-container">
      <h1>Button Ripple Effect</h1>
      <button onClick={handleRippleEffect}>
        Click button to see ripple effect
      </button>
    </div>
  );
}

export default ButtonRippleEffect;
