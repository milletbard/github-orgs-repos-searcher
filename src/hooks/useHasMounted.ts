import { useEffect, useRef, MutableRefObject } from "react";

const useHasMounted = (): MutableRefObject<boolean> => {
	const hasMounted: MutableRefObject<boolean> = useRef(false);

	useEffect(() => {
		hasMounted.current = true;

		return () => {
			hasMounted.current = true;
		};
	}, []);

	return hasMounted;
};

export { useHasMounted };
