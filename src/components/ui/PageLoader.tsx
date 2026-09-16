export function PageLoader() {
  return (
    <div
      className="flex min-h-[60vh] items-center justify-center"
      role="status"
      aria-label="Loading page"
    >
      <div className="border-brand-200 border-t-brand-600 dark:border-brand-700 dark:border-t-brand-300 h-10 w-10 animate-spin rounded-full border-4" />
    </div>
  );
}
