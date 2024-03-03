export function Bio({ user }) {
  let dateText = user.created_at;
  let date = new Date(dateText);

  let year = date.getFullYear();
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Maj",
    "Jun",
    "Jul",
    "Avg",
    "Sep",
    "Okt",
    "Nov",
    "Dec",
  ];
  let month = months[date.getMonth()];
  let day = date.getDate();

  return (
    <div className="github-user">
      <div className="github-user-img">
        <img className="user-image" src={user.avatar_url} alt={user.name}></img>
      </div>
      <div className="github-user-detatils">
        <div className="user-details">
          <div>
            <h2 className="user-name">{user.name}</h2>
            <span className="username">@{user.login}</span>
          </div>
          <div className="user-joined-date">
            <p className="user-joined-date-text">{`Joined ${day} ${month} ${year}`}</p>
          </div>
        </div>
      </div>
      <div className="github-user-bio">
        <p className="user-bio">
          {user.bio ? user.bio : `This profile has no bio`}
        </p>
      </div>
    </div>
  );
}
