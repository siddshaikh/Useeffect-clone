import { useRef, useEffect } from "react";

const useCustomeffect = (cb, deps) => {
  const isFirstRender = useRef(true);
  const prevDependencies = useRef(deps);

  useEffect(() => {
    // Skip the first render
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    // Check if dependencies have changed
    const dependenciesChanged = deps.some(
      (dep, index) => dep !== prevDependencies.current[index]
    );

    if (dependenciesChanged) {
      const cleanup = cb();
      if (cleanup && typeof cleanup === "function") {
        return cleanup;
      }
    }

    prevDependencies.current = deps;
  }, deps);
};

export default useCustomeffect;
