function Tooltip({ children, content, delay }) {
    let timeout;
    const [isVisible, setIsVisible] = useState(false);
  
    function handleShowTooltip() {
      timeout = setTimeout(() => {
        setIsVisible(true);
      }, delay || 500);
    }
  
    function handleHideTooltip() {
      clearTimeout(timeout);
      setIsVisible(false);
    }