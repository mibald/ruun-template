import { LogBox } from "react-native";
import { Navigation } from "./navigator/stacks/root.stack";
import { usePersistNavigator } from "@core/hooks/use-persist-navigator.hook";
import ErrorBoundary from "@core/components/error-boundary/error-boundary.component";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

LogBox.ignoreAllLogs(true);

const tanstackClient = new QueryClient();

export function App() {
  const { initialState, onStateChange, isDevMode, isLoading } =
    usePersistNavigator();

  if (isDevMode && isLoading) return null;
  return (
    <ErrorBoundary>
      <QueryClientProvider client={tanstackClient}>
        <Navigation
        initialState={initialState}
        onStateChange={onStateChange}
        />
      </QueryClientProvider>
    </ErrorBoundary>
  );
}
