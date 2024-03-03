import { Links } from "./Links";
import { GitHubNumbers } from "./GitHubNumbers";
import { Bio } from "./Bio";

export function User({ user, theme }) {
  return (
    <div className="user">
      <Bio user={user} />
      <GitHubNumbers user={user} />
      <Links user={user} theme={theme} />
    </div>
  );
}
