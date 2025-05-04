import ProfileAnalyzer from './components/ProfileAnalyzer';
import ConversationAnalyzer from './components/ConversationAnalyzer';
import LoveCounselor from './components/LoveCounselor';
export default function Dashboard() {
  return (
    <div className="p-6 space-y-6 max-w-2xl mx-auto">
      <ProfileAnalyzer />
      <ConversationAnalyzer />
      <LoveCounselor />
    </div>
  );
}
