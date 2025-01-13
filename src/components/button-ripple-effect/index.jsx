function ButtonRippleEffect() {
  const [isRipplingEffect, setIsRipplingEffect] = useState(false);
  const [coordinates, setCoordinates] = useState({ x: -1, y: -1 });

  function handleRippleEffect(event) {
    console.log(
      event.target.getBoundingClientRect(),
      event.clientX,
      event.clientY
    );
  }

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
