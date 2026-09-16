import { useNavigation } from 'react-router';

/**
 * Slim animated bar under the header while a route transition (including a
 * lazy-loaded page chunk) is in flight. Purely visual — react-router's
 * `navigation.state` drives it directly, no local state or effects needed.
 */
export function TopProgressBar() {
  const navigation = useNavigation();
  const loading = navigation.state !== 'idle';

  return (
    <div
      className="bg-brand-100 dark:bg-brand-800 fixed inset-x-0 top-0 z-50 h-0.5 overflow-hidden transition-opacity duration-200"
      style={{ opacity: loading ? 1 : 0 }}
      aria-hidden="true"
    >
      <div className="bg-brand-500 dark:bg-brand-300 h-full w-full origin-left animate-[progress-bar_1s_ease-in-out_infinite]" />
    </div>
  );
}
