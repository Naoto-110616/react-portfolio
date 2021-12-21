import { useEffect, useState } from "react";

const useSkill = (url) => {
	const [getSkills, setGetSkills] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [httpError, setHttpError] = useState();

	useEffect(() => {
		const fetchSkills = async () => {
			const response = await fetch(url);

			if (!response.ok) {
				throw new Error("Something went wrong!");
			}

			const responseData = await response.json();

			const loadedSkills = [];
			for (const key in responseData) {
				loadedSkills.push({
					id: key,
					title: responseData[key].title,
					rate: responseData[key].rate,
					iconClassName: responseData[key].iconClassName,
				});
			}
			setGetSkills(loadedSkills);
			setIsLoading(false);
		};
		fetchSkills().catch((error) => {
			setIsLoading(false);
			setHttpError(error.message);
		});
	}, [url]);
	return {
		getSkills,
		isLoading,
		httpError,
	};
};

export default useSkill;
