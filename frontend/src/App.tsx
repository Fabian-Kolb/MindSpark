import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import DashboardView from './views/DashboardView';
import SpacesOverview from './views/SpacesOverview';
import SpaceDetailView from './views/SpaceDetailView';
import TrackerView from './views/TrackerView';
import SuggestionsView from './views/SuggestionsView';
import './App.css'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<DashboardView />} />
          <Route path="spaces" element={<SpacesOverview />} />
          <Route path="spaces/:spaceId" element={<SpaceDetailView />} />
          <Route path="tracker" element={<TrackerView />} />
          <Route path="suggestions" element={<SuggestionsView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
