export function GitHubNumbers({ user }) {
  return (
    <div className="github-numbers">
      <div>
        <span className="github-text">Repos</span>
        <span className="github-number">{user.public_repos}</span>
      </div>
      <div>
        <span className="github-text">Followers</span>
        <span className="github-number">{user.followers}</span>
      </div>
      <div>
        <span className="github-text">Following</span>
        <span className="github-number">{user.following}</span>
      </div>
    </div>
  );
}
