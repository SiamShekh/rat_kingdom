const PageState = ({ serial }: { serial: number }) => {
    return (
        <div>
            <div className="grid grid-cols-4 gap-1">
                {Array.from({ length: 4 }, (_, index) => (
                    <div
                        key={index}
                        className={`w-full h-1 ${index < serial ? 'bg-blue-500' : 'bg-gray-500'}`}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default PageState;
