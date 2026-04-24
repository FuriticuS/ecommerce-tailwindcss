import { loadingRoot, loadingText } from "@/styles/selectors";

export function Loading() {
  return (
    <div className={loadingRoot}>
      <p className={loadingText}>Loading...</p>
    </div>
  );
}
