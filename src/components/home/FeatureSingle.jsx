const FeatureSingle = ({ item }) => {
    const { title, description, icon } = item;
    return (
        <div className="flex gap-3">
            <div className="w-15">
                <img className="max-w-100" src={icon} alt={title} />
            </div>
            <div className="span-5">
                <h4>{title}</h4>
                <p>{description}</p>
            </div>

        </div>
    );
};

export default FeatureSingle;