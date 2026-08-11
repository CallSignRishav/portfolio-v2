const loading = () => {
	return (
		<>
			<div className="grid grid-cols-1 lg:grid-cols-2">
				<div className="animate-pulse bg-white/5 backdrop-blur-lg"></div>

				<div className="animate-pulse bg-white/5 backdrop-blur-lg"></div>
			</div>
		</>
	);
};

export default loading;
