function ButtonRippleEffect() {
    const [isRipplingEffect, setIsRipplingEffect] = useState(false);
    const [coordinates, setCoordinates] = useState({ x: -1, y: -1 });

  return (
    <div className="ripple-effect-container">
      <h1>Button Ripple Effect</h1>
      <button>Click button to see ripple effect</button>
    </div>
  );
}

export defualt ButtonRippleEffect;