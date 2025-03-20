function UnauthPage {
    const [isLoginView, setIsLoginView] = useState(false);
    return (
        <div className="unauth-page-wrapper">
            <div className="unauth-tab-view-container">
            <button onClick={() => setIsLoginView(false)}>Register View</button>
            <button onClick={() => setIsLoginView(true)}>Login View</button>
            </div>
        </div>
    )
}

export default UnauthPage;