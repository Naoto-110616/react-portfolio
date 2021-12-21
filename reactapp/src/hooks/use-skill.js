import { useEffect, useState } from "react";

const useSkill = (url) => {
	const [getSkills, setGetSkills] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchSkills = async () => {
			const response = await fetch(url);
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
		fetchSkills();
	}, [url]);
	return {
		getSkills, isLoading
	};
};

export default useSkill;
